import {GET_ERRORS} from "./types";
import {GET_TRACKS} from "./types";

import axios from "axios";



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
};

export const getTracks = () => dispatch => {
  axios
    .get("/api/tracks/all")
    .then(res =>
      dispatch({
        type: GET_TRACKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRACKS,
        payload: null
      })
    );
};   