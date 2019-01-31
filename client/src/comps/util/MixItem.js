import React, { Component } from 'react';

class MixItem extends Component {
componentDidMount(){
  this.props.getMixes();
}


  render() {
    const {mixes, loading} = this.props.profile;
    let mixItems;

    if(mixes == null || loading){
      mixItems = <Spinner />
    }else{
      if(mixes.length > 0){

      }else{
        mixItems =   <h4>No mixed found...</h4>
      }
    }

    return (
      <div>
        
      </div>
    );
  }
}

export default MixItem;