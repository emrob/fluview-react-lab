import React from 'react';
import Heading from "../components/Heading.js"
import FluMap from "../components/FluMap.js"
import '../App.css';

class FluViewBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentDidMount(){
    fetch("http://api.flutrack.org/?time=7")
      .then(response => response.json())
      .then(json => this.setState({tweets: json}));
  }

  render(){
    return (
      <React.Fragment>
        <Heading />
        <FluMap
          tweets={this.state.tweets}
          center={{lat: 0, lng: 0}}
          zoom={2}
        />
      </React.Fragment>
    )
  }
}

export default FluViewBox;
