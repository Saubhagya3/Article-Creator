# Article Web App Challenge

This is the solution for the Forexco full-stack challenge.
Please note that once you've followed the setup, the app is already working in your device. 
You can add new categories and articles to see them in the main page.

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

Then, git clone the backend server repo at: "https://github.com/Saubhagya3/forexco-test-server"

After doing so, please change the following in the 'index.js' file located in the src folder:
- database: "forexco-schema", <-- Change this to your schema name
- username: "root", <-- Change this to your username
- password: "123123456X!a" <-- Change this to your password

Finally, run 'npm install' once more (from within the back end directory where the package.json file is located) to install the dependencies.

Now you can use the command 'npm run dev' in your terminal to run the server at: "http://localhost:3001/"

### Run the Graphiql interface

For Graphql, go to: "http://localhost:3001/graphql"

Here, you can use the 'get query' for articles table using:

- query {
  getAllArticles {
    id
    title
    author
    country
    category
    content
    date
  }
}

And the categories table using:

- query {
  getAllCategories {
    id
    category
  }
}

The database tables will be automatically created with the ORM, and the front end will now be connected to the server.

# Thank you!!
