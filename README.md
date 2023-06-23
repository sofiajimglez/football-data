# Football Data

![caption](https://res.cloudinary.com/dorpbnltc/image/upload/v1687526674/football-data/football-data-caption_m9q6u8.jpg)

## About the project
This web interface is **developed with React** technology on the front-end. To do so, it **collects data** from the free version of the [football data API](https://www.football-data.org./), showing **leagues available**, the **ranking** of each league and the **results** of a particular league. The website is **fully responsive** and aspects like **design**, **usability** and **user experience** have been taken into account at the time of implementation. 

## Prerequisites
Before running this project, please check that you have the following software installed on your machine:
- **Node.js**: make sure you have Node.js version 14 or later installed. You can download it from the [oficial website](https://nodejs.org/en)
- **npm (Node Package Manager)** is usually bundled with Node.js. You can verify if it's installed by running the following command in your terminal:

```
npm -v
```
If it's not installed, you can install it by following the instructions on the [npm website](https://docs.npmjs.com/getting-started).

## Installation
To get started with the project, please follow this steps:

1. **Clone** this repository from GitHub by running the following command in your terminal:
```
git clone https://github.com/sofiajimglez/football-data.git
```
2. **Navigate** to the project's directory:
```
cd football-data
```
3. **Install** the project dependencies by running the following command:
```
npm install
```
💡 This command will download and install all the necessary packages and libraries required for the project to run.

4. **Register** an account in [football data API](https://www.football-data.org./) and obtain an access token. Follow their registration process and you will receive an email with your authentication token.
   
5. Duplicate the `.env.template` file and rename it to `.env`. Then, **complete the information** with your access token:
```
VITE_BASE_API_URL=http://localhost:3000/api
VITE_API_AUTH_TOKEN=<YOUR_ACCESS_TOKEN>
```
💡 This configuration will be used to access the API in your project. 
⚠️ Make sure your `.env` file is included in the `.gitignore` and won't be uploaded to GitHub!

## Usage
To start the development server and run the project locally, use this command:
```
npm run dev
```
This command will **build the project** and **launch a development server**. Once the server is up and running, you can access the application by visiting the provided local development URL in your web browser. By default, this will probably be [http://localhost:3000/](http://localhost:3000/)

During development, any changes you make to the source code will be automatically detected by the development server and the application will be hot-reloaded with the updated code.

**And that's it! ✨**

![we're ready!](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmFjbjB5ZnA4czBlYXpuNmZuZWpkank2Mmd6cnhtdzVmc2JqbW96bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SVBGVJwpWgon2rEtHl/giphy.gif)

## Test
To run the tests for the project, use the following command:
```
npm run test
```
This command will execute the test suite using Vite's built-in testing framework. It will run all the tests in the project and provide you with the test results and any associated errors or failures. Visit the [official documentation](https://vitest.dev/) for more info.

## Build for production
When you're ready to build the project for production, execute the following command:
```
npm run build
```
⚽ This command will create an **optimized and minified version** of the application in the `dist` directory. The **generated files can be deployed** to a web server or a hosting platform of your choice.

## Author
Hi! 😊 I'm Sofía and I'm a web developer with +5 years of experience in design and digital marketing.

Recently, I decided to turn my career around and focus on development taking a bootcamp where I have learned technologies such as Javascript, HTML, CSS, NodeJS, Express, MongoDB and React. I'd like to work in a company where I can learn and gradually assume new responsibilities as a web developer. 

Let's talk and explore how I can bring value to your team!

## Other credits
- Data from  [football-data.org API](https://www.football-data.org./)
- Vector logo from  [Flaticon](https://www.flaticon.es/)
- Loading animation from  [Loading.io](https://loading.io/)
- Background vector from  [Freepick](https://www.freepik.es/)

## Next steps
 - [ ] Explore other competitions' section at the end of the page
 - [ ] Error pages components (404, 500...)
 - [ ] Improve error handling
 - [ ] Improve rendering when the auth token is missing
