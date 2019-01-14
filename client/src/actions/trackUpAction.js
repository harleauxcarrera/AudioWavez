import { GET_ERRORS } from "./types";
import axios from "axios";

 // axios
    //   .post("/api/tracks", newTrack)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));

//upload track
export const uploadTrack = (trackData, history) => dispatch =>{ //dispatch is needed when we make an ajax request which therefore we need to wait and not just return (notice no return statement)
     axios
      .post("/api/tracks", trackData)
      //console log the track object for now 
      .then(res =>console.log(res.data),history.push('/landing'))
      .catch(err => 
        dispatch({
          type: GET_ERRORS, 
          payload: err.response.data
        })
      );
}