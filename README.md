 # Websocket Chat

 ## Requirements
 Make sure that the latest version of *node.js/npm* is installed.<br>
 You can check the current version of node.js/npm by typing the following into you systems command line
 ```bash
 $ node --version			// shows the current version of node.js
 $ npm  -- version			// shows the current version of npm
 ```

 ## Starting the Server
 To start the webchat using the node.js command line you need to run:
 ```bash
 $ npm start			// starts the server with node.js
 ```
 Or start the webchat as developer to restart the server automatically if the code has changed. Make sure you have installed *nodemon* as a developer tool first:
 ```bash
 $ npm install -g nodemon		//install nodemon as developer tool
 ```
 After installing you can run the server with nodemon:

 ```bash
 $ nodemon server			//.js is optional
 ```

 ## Packages (npm)
 ### express
 Fast, unopinionated, minimalist web framework<br>
 Website: https://www.npmjs.com/package/express

 ### nodemon (developer only!) 
 Simple monitor script for use during development of a node.js app.<br>
 Website: https://www.npmjs.com/package/nodemon

 ### socket.io
 node.js realtime framework server<br>
 Website: https://www.npmjs.com/package/socket.io
