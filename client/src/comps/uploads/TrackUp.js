import React, { Component } from "react";
import "../../App.css";
import classnames from "classnames";
import {connect} from 'react-redux';//used for using redux inside a component
import {uploadTrack} from '../../actions/trackUpAction';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';


const style = {
  backgroundColor: "green",
  padding: "10px 10px 10px 10px",
  borderRadius: "6px"
};

const style2 = {
  opacity: ".9"
};
class TrackUp extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      length: "",
      image: "",
      source: "",
      available: "",
      errors: {}
    };
  }
  //if errors props are passed via redux, map those to component state as well
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }

  }

  //set the state's fields to whatever is set in the input fields
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newTrack = {
      title: this.state.title,
      length: this.state.length,
      image: this.state.image,
      source: this.state.source,
      available: this.state.available,
      date: this.state.date
    };

    this.props.uploadTrack(newTrack, this.props.history); //withRouter is used in the action to be able to redirect using this.props.history   (notice history passed to the action)
    // console.log(newTrack); //check if new track is created
    // axios
    //   .post("/api/tracks", newTrack)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  };




  render() {
    const { errors } = this.state; //same as const errors = this.state.errors;
    const {track} = this.props.trax;
    return (
      <div className="container" style={style2}>
      
        <div className="main">
        
          <div className="main-center">
          {track ? track.title : null}
            <center>
              <h2>Upload Track </h2>
            </center>
            <form onSubmit={this.onSubmit} autoComplete="off">
              <div className="form-group">
                <label >Title</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-user fa" aria-hidden="true" />
                  </span>
                  <input
                    className={classnames("form-control", {
                      "is-invalid": errors.title
                    })}
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                    type="text"
                    placeholder="track title"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="Length">Length</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope fa" aria-hidden="true" />
                  </span>
                  <input
                    value={this.state.length}
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    name="length"
                    placeholder="e.g. 3:36"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="Image">Image</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-users fa" aria-hidden="true" />
                  </span>
                  <input
                    value={this.state.image}
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    name="image"
                    placeholder="jpg||png"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="Source">Source</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock fa-lg" aria-hidden="true" />
                  </span>
                  <input
                    value={this.state.source}
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    name="source"
                    placeholder="wav||mp3"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="Available">Available</label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock fa-lg" aria-hidden="true" />
                  </span>
                  <input
                    value={this.state.available}
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    name="available"
                    placeholder="boolean"
                  />
                </div>
              </div>

              <center>
                <button style={style} type="submit">
                  Upload dis bitch
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
TrackUp.propTypes = {
  uploadTrack: PropTypes.func.isRequired, 
  trax: PropTypes.object.isRequired, 
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  trax: state.trax, //trax is coming from the root reducer (index.js) in reducer folder
  errors: state.errors
})

export default connect(mapStateToProps, {uploadTrack})(withRouter(TrackUp)); //first arg to connect is mapStateToProps which pulls state from redux store and maps to props, second is all the actions needed
