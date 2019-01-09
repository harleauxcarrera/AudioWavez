import React, { Component } from 'react';
import '../../App.css';

 const style = {
   backgroundColor:'blue',
   padding: '10px 10px 10px 10px',
   borderRadius: '6px'
 }
class TrackUp extends Component {
constructor(){
	super();


	this.state = {
		title: '',
		length: '',
		image: '',
		source: '',
		available: '',
		date:'',
		errors: {}
	}
	
}

//set the state's fields to whatever is set in the input fields
onChange = (e) => {
	this.setState({[e.target.name]: e.target.value})
}

onSubmit = (e) => {
	e.preventDefault();

	const newTrack ={
		title : this.state.title, 
		length : this.state.length,
		image : this.state.image, 
		source : this.state.source, 
		available : this.state.available,
		date : this.state.date, 
	}; 
	console.log(newTrack);
}
  render() {
    return (
    
      <div className="container">
			<div className="main">
				<div className="main-center">
				<center><h2>Upload Track  </h2></center>
					<form onSubmit = {this.onSubmit}>
						
						<div className="form-group">
							<label for="Title">Title</label>
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
				<input   name="title" onChange ={this.onChange} value={this.state.title} type="text" className="form-control" placeholder="track title"/>
							</div>
						</div>

						<div className="form-group">
							<label for="Length">Length</label>
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input value={this.state.length} onChange={this.onChange} type="text" className="form-control" name="length" placeholder="e.g. 3:36"/>
							</div>
						</div>

						<div className="form-group">
							<label for="Image">Image</label>
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input value={this.state.image} onChange={this.onChange} type="text" className="form-control" name="image" placeholder="jpg||png"/>
								</div>
						</div>

						<div className="form-group">
							<label for="Source">Source</label>
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input value={this.state.source} onChange={this.onChange} type="text" className="form-control" name="source" placeholder="wav||mp3"/>
								</div>
						</div>

						<div className="form-group">
							<label for="Available">Available</label>
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input value={this.state.available} onChange={this.onChange} type="text" className="form-control" name="available" placeholder="boolean"/>
								</div>
						</div>

				<center><button style={style} type="submit">SUBMIT</button></center>
						
					</form>
				</div>
			</div>
		</div>
    );
  }
}

export default TrackUp;