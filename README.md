# This is a interview test project created using React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run dev-server`

This trigger nodemon on the server.js, a node app using express and sequelize to post, get, put, and delete from sqlite. Nodemon allow refresh after each saving without close and reopen terminal on each update on the server side code.
By using these functions, first run the command `npm run dev-server`. It will host a server, and watch every changes and action from frontend side, and update table accordingly.

### `npm run server`

Basically the same as 'npm run dev-server'. The only difference is this script doesn't run nodemon, instead it run on node, and doesn't check all update and changes on the frontend. Another word, every frontend update will result in user menuelly exit node app, and restart node app to see all the changes.

**Note: make sure add form before get form, prevent confusion on getting empty form(s). 


## App Usage / Flow / Steps
1. Open a terminal, and run following commands
git clone https://github.com/lok020/interview_test.git
cd interview_test
npm install
npm start
2. Open another terminal, go to the repo folder, run command 'npm run server' or 'npm run dev-server'
3. From the broswer, Fill up the form following all the instructions and empty spaces on the screen.
4. After all empty spaces are filled, click on Step 3 'Next >' button.
5. The form data will then save in the table through server.js

