# Getting Started

This project was made for Intelligent Cargo Systems as part of an initial assignment. Throughout this ReadMe you'll learn how to test the application, run it locally, and others.

## Running the app (for non-tech folks)

Git pull? Npm install? What's that? If you'd like to test the application but do not want to bother with all the hassle that comes with running the project locally, you may access it from the following link (yes, that's it!):

https://floating-tundra-69073.herokuapp.com/

(A very intuitive URL, I know. But that's life with the free version of Heroku.)

## Running the app locally

The first thing you need to do to run the app locally is to download the project. This is done by running the following command from your terminal (or command prompt):

`git clone https://github.com/nojosu/cargo-assignment.git`

This is a public repository, so no need for authentication. Once you've downloaded the project, you may navigate to it from your terminal by using:

`cd cargo-assignment`

And once you've navigated to it, it's time to run some commands:

### `npm install`

Running this command will install all dependencies required by the project. Please be aware that Node 17 is recommended to run this project.

### `npm start`

After installing all dependencies, you may enter this command to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make any edits.\
You will also see any lint errors in the console.

### `npm test`

A few tests have been prepared for some of the application's methods (specifically, those located in the src/utils/helpers.js file). 

This command launches the test runner in the interactive watch mode, where you can see which tests passed and which failed.

### `npm run build`

You will not need this command for now, as it serves no purpose in testing. But here's some information anyway.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Application Design

### General implementation

The application uses Redux for state management and Axios for API calls. The application was built using React Native and vanilla JavaScript. Jest has been used as a test framework.

React router was used to manage URLs.

### Graphic User Interface

Material UI was implemented for the creation of the application's GUI. Material UI's Grid component allows the application to be responsive, so that it adapts to the current screen size, adjusting each of the screen's components.

Other Material UI components used include:
- Card (for the list views)
- Box (as one of the main containers)
- Typography

#### Grid Responsiveness Examples 

**Ship list:**

_Small screen_

![Ship list, small screen](https://i.imgur.com/GSNGT2C.png)


_Large screen_

![Ship list, large screen](https://i.imgur.com/qypiSbV.png)


**Ship details:**

_Small screen_

![Ship details, small screen](https://i.imgur.com/P8rzkze.png)


_Large screen_

![Ship details, large screen](https://i.imgur.com/NJk9fKE.png)







