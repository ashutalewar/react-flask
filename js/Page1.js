import React from 'react';
import Request from 'react-http-request';
import axios from 'axios';

/////////////// material-ui components /////////////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';


export default class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      random : false,
      api_data : ''
    };

  }

  startSomething = ()  => {
  	console.log("changing button state - ",this.state.random)
    this.setState({random : true})
    this.setState({api_data : "Waiting for response"})

    axios.get('http://localhost:5000/api')
      .then(res => {
        console.log(res.data)
        this.setState({api_data : res.data})
        this.setState({random : false})
      })

  }

  render() {
    return (
      <div>
    	<MuiThemeProvider>
        <RaisedButton label="Start" primary={true} onClick={this.startSomething} disabled={this.state.random} />
      </MuiThemeProvider>
      <h2>{this.state.api_data}</h2>
      </div>
    );
  }
}
