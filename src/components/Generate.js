import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
// import Hamburger from './Hamburger.js';
// import LoginButton from './LoginButton.js';
// import LogoutButton from './LogoutButton.js';
import InputForm from './InputForm.js';
import { Button, Spinner } from 'react-bootstrap';

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generatedImgObj: '',
      prompt: '',
      loading: false,
      first: true
    }
  }

  handleSubmitPrompt = async (e) => {
    this.setState({
      generatedImgObj: '',
      loading: true,
      first: false
    });
    let reqbodyObj = { prompt: this.state.prompt }
    e.preventDefault();
    let config = {
      method: 'post',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/item/generate',
      data: reqbodyObj
    }
    let generatedImg = await axios(config);
    this.setState({
      generatedImgObj: generatedImg.data.data[0],
      loading: false
    });
  }

  savePrompt = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      let schemaObj = {
          prompt: this.state.prompt,
          userEmail:this.props.auth0.user.email,
          imgSrc:this.state.generatedImgObj.url
      }
      let config = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/item',
        headers: {
          "Authorization": `Bearer ${jwt}`
        },
        data: schemaObj
      }


      try {
        await axios(config);
      } catch (err) {
        console.log('error saving to database: ', err.response.data);
      }
    }
  }

  handleFormChange = e => {
    this.setState({
      prompt: e.target.value
    })
  }


  render() {
    return (
      <>
        <InputForm handleSubmitPrompt={this.handleSubmitPrompt} savePrompt={this.savePrompt} handleFormChange={this.handleFormChange}/>
        {this.props.auth0.isAuthenticated && <Button onClick={this.savePrompt} >Save</Button>}
        {this.state.first ? <p></p> : !this.state.generatedImgObj && this.state.loading ? <Spinner animation="border" /> : <img src={this.state.generatedImgObj.url} alt="Generated with Dall-E 2"/>}
      </>
    )
  }

}






export default withAuth0(Generate);
