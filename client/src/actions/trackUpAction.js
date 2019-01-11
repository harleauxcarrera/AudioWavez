import { TEST_DISPATCH } from "./types";
import axios from "axios";

 // axios
    //   .post("/api/tracks", newTrack)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));

//upload track
export const uploadTrack = trackData => dispatch =>{ //dispatch is needed when we make an ajax request which therefore we need to wait and not just return (notice no return statement)
     axios
      .post("/api/tracks", trackData)
      .then(res => console.log(res.data))
      .catch(err => 
        dispatch({
          type: GET_ERRORS, 
          payload: err.response.data
        })
      );
}