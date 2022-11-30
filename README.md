# Project OpenImg
DeShon Dixon Jason Christopher Keyan Tabor Oliver Speir
### Overview
- Users are able to create and store prompts for images generated by the OpenAI DALL·E 2 API

### What problem or pain point does it solve? 
- Problem: Needing a specific image with certain types of content e.g. Cat holding a Pinwheel but lacking graphic design skills required to make it yourself
- Solution: Create an image based on a text prompt with the DALL·E 2 API

### Minimum Viable Product (MVP) definition. 

- User can log in via Auth0
- User can generate image via prompt
- User can save their prompt
- User can edit their saved prompt 
- User can delete their saved prompt

### Stretch Goals
- User can store the URL of their image without needing to regenerate that image via the API
- User can edit their prompt by sending the pre-existing image to the edit and using the built in edit feature
- User can store their prompts on their own google drive using the Google Drive API

----------------------------------------------------------------------------------------------------------------------------

### Work flow of using the site

1. User reaches the Home Page of Front End
2. User can read About Me's and see the log in button 
3. User can navigate to either edit or generate page via header nav bar
2. Generate page gives option to input prompt and once prompt returns image they have option to save (possibly either to DB or Google Drive)
3. Edit page gives option to view all saved prompts and select one to (possibly display the image) edit or delete it

----------------------------------------------------------------------------------------------------------------------------

### Web Request Response Cycle
<img src ="https://i.imgur.com/5fFizHI.png" />

----------------------------------------------------------------------------------------------------------------------------

### Semantic Versioning
- v.001 intial deploy
### Instructions for local deployment and packages needed
- `git clone https://github.com/OliverSpeir/TeamAwesome-301Project.git`
- cd into the directory
- type `npm i` into terminal while inside the directory
- remove .sample from end of .env.sample file and set server variable to http://localhost:3001
