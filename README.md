## Steps

 1. Use `touch .env` to make .env file in root directory.
 2. Run `npm install`.
 3. Use  `npm i nodemon -g` to install nodemon globally.
 4. Configure your mongodb and start it.
 5. Use command `npm start` to start server in development mode.


## Env explaination
 1. The .env file is very important.
 2. Edit its fields with the ones you use.
 3. Example -
        `
                 DB_URL='mongodb://localhost/dbname'
                 HOST_URL='backend_url'
        `
 4.   HOST_URL is useful when referencing site url in mails or anywhere in backend

## Directory Structure explaination
  1. In the root directory there is app.js, config.js.
  2. **app.js** is for starting the server.
  3. **config.js** is for configuration of mongodb according to node env(dev or prod).
  4. The **/app** folder contains **/controllers, /models, /routes, /services, /utils**.
  5. **route** files will map Api routes to controllers and validate recieved data.
  6. **controller** files have the main app logic.
  7. **service** files are used when certain task have to be performed which involves more than one resource (Eg:- linking comments and posts with each other)
  8. **utility** files will have simple functions which can be used in other places to avoid repetition. 

## Api explaination
  1. All the Api's are prefixed with /api/v1.
  2. Routes which have /:id in the end are used for manipulation of document with that mongo id.

## Guidelines
  1. All **models** must be named like {resource}.js (Eg:- user.js)
  2. All **controllers** must be named like {resource}Ctrl.js (Eg:- userCtrl.js)
  3. All **routes** must be named like {resource}Routes.js (Eg:- userRoutes.js)
  4. Api patterns -
      * There can be 5 routes for each resource - 
            - **GET** /{resource}                (Eg:- **GET** /posts)
            - **GET**/{resource}/:id            (Eg:- **GET** /posts/:id)
            - **POST** /{resource}              (Eg:- **POST** /posts)
            - **PUT** /{resource}/:id           (Eg:- **PUT** /posts/:id)
            - **DELETE** /{resource}/:id      (Eg:- **DELETE** /posts/:id)
            Note that the here we have to use the plural.

## Collections 
  1. *Users*
  2. *Posts* 
  3. *Comments* 
  4. *Tags* 
  5. *Courses*  
