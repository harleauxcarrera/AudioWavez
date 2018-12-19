1. Npm init a new directory (name the entry point server.js )
2. npm install dependencies 
3. Set up basic express server and test initial route 
4. Setup DB in Mlab
5. Connect to Mlab DB using mongoose (create the config dir with Mlab key)
    in the server file, import mongoose, import the config file and connect mlab
    Make API dir and file for each model
    require each of those files in server.js and make app use
    create test routes in each file that serve json - test in postman
    Create the first Model/Schema - Track
    create the first post route to create a track
        this requieres body-parser in the server file and app.use(bodyParser)
          body parser is needed for things like:  req.body.<fieldName> 
    Use postman to hit the post route and see if it creates a new track in the DB