# Article Web App Challenge

This is the solution for the Forexco full-stack challenge.

## Stack Used

- ReactJS
- GraphQL
- NodeJS
- Typescript
- TypeORM
- Mysql
- Material UI
- Apollo client
- Express

### Run the front end

Please git clone this repo and use the command 'npm install' (from within the front end directory where the package.json file is located) to install all the dependencies for the project.
Then 'npm start' in your terminal to run this project at: "http://localhost:3000/"

### Run the back end

In order to run the backend, you'll first need to create a new Mysql schema in your Mysql Workbench. 

After doing so, please change the following in the 'index.js' file located in the src folder:
- database: "forexco-schema", <-- Change this to your schema name
- username: "root", <-- Change this to your username
- password: "123123456X!a" <-- Change this to your password

Then, git clone the backend server repo at: "https://github.com/Saubhagya3/forexco-test-server"
Finally, run 'npm install' once more (from within the back end directory where the package.json file is located) to install the dependencies.

Now you can use the command 'npm run dev' in your terminal to run the server at: "http://localhost:3001/"

The database tables will be automatically created and filled with the ORM, and the front end will now be connected to the server.

# Thank you!!
