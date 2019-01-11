//load input validation
const validateTrackUploadInput = require("./validation/trackUp");
//Load Track Model
const Track = require("./models/Tracks");
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//require api route files
const mixes = require("./api/mixes");
const tracks = require("./api/tracks");
const samplepacks = require("./api/samplepacks");

const path = require("path");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const app = express();

//MiddleWare
app.use(bodyParser.json());
app.use(methodOverride("_method")); //used to delete from the from without having to make a delete request
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Db config
const db = require("./config/keys").mongoURI;

// //create gfs stream connection with mongodb
// const conn = mongoose.createConnection(db);

// //Init gfs
// let gfs;

// conn.once("open", () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("uploads"); //name of the object (upload chunks, upload files)
// });

// //Create storage engine for storing files in mongo
// const storage = new GridFsStorage({
//   url: db,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString("hex") + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename, 
//           bucketName: 'uploads'//should match the gfs.collection name
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage});


//connect to mongoDb on Mlab
mongoose
  .connect(
    db,
    { useNewUrlParser: true }//second arg was needed due to deprecation
  ) 
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

//initial test route
app.get("/", (req, res) => res.send("Hello tsdfdhere"));


// //use API routes
app.use("/api/mixes", mixes);
app.use("/api/tracks", tracks);
app.use("/api/samplepacks", samplepacks);

const port = process.env.PORT || 5000;
//listen on port ^
app.listen(port, () => console.log(`Server is running on port ${port}`));



