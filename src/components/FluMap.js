import React from "react";
import GoogleMapReact from 'google-map-react';
import FluMarker from './FluMarker.js';
import '../App.css';

class FluMap extends React.Component {



  render(){


    // make the markers from the tweets
    // assign them to a variable
    const markers = this.props.tweets.map((tweet, index) => {
      return (
        <FluMarker
          lat={tweet.latitude}
          lng={tweet.longitude}
          text={tweet.tweet_text}
          key={index}>
        </FluMarker>
      );
    });

    return (
      <div style={{ height: '800px', width: '1000px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC7MZnGsye7kQyW_icO9kTUo6zuQXq9z4g' }}
          defaultCenter={this.props.center}
          defaultZoom ={this.props.zoom}
        >
          {markers}
        </GoogleMapReact>
      </div>
    )
  }

  // render(){
  //   return (
  //     <GoogleMapReact
  //       className='flu-map'
  //       bootstrapURLKeys={{ key: 'AIzaSyC7MZnGsye7kQyW_icO9kTUo6zuQXq9z4g' }}
  //       defaultCenter={this.props.center}
  //       defaultZoom ={this.props.zoom}
  //     >
  //
  //       </GoogleMapReact>
  //
  //
  //   )
  // }
}



export default FluMap;
