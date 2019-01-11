import { TEST_DISPATCH } from "./types";

//upload track
export const uploadTrack = (trackData) => {
  return{
    type: TEST_DISPATCH,
    payload: trackData
  }
}