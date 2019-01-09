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
6. Once a post request is accepted by the API, make a track upload form component and get
    that to post a track via the api
    1.create the form component
    2. add a constructor with state object that represent each field of the form 
    3. Each input field of the form should have value = {this.state.nameOfField}
        this will disable typing in each input ( this is where you need to use onChange function to set whatever is in the input field to it's corresponding state variable)
    4. Add onChange = {this.onChange} to each input
    5. Define the onChange function
    6. Need to use bind.this in the constructor or alternativley use an arrow function so you don'thave to bind int he constructor 
    7. now that we have the onSubmit func console loggin the new user, install axios to make an actual POST request to our API and console log the user after that  ( handle input validation in previous video)    