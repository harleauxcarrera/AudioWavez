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
    8. make the axios post request in the onSubmit func of the trackUp form
        proxy in server side package.json needed ( proxy: localhost:5000) this way, this isn't needed everytime axios makes a request
    9. next we are going to use the package 'validator' to create validation files for each form 
    10. check that validation is working (using postman)    
    11. next thing to do is implement redux because the axios http request will be done using a redux action/reducer and will not be done inside the component (onSubmit form will call the redux action and not make the axios request in there)
    12. install redux react-redux and redux -thunk
    13. Wrap App.js in a Provider from react redux
    14.Lets be able to add media now
    15. Uploading Files to mongoDB with GridFS Traversy Youtube Video
    16. GridFS allows to upload to mongo, and gridfs-stream is to stream to and from mongo
    17. try this again later
    18.continue implementing redux 
    19. created reducers folder, created rootReducer(index) and fed subreducers into there
    20. created actions folder and made types.js 
    21. finished the upload track action ,  object now being saved to mongodb via redux. (installed withRouter to be able to redirect from within the action and not to comp)
    22. *** remember to go back and change the type of source and image for the track upload to file types (GRIDFS)
    