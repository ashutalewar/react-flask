import React from 'react';

/////////////// material-ui components /////////////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';


export default class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      random : false
    };

  }

  startSomething = ()  => {
  	console.log("changing button state",this.state.random)
    this.setState({random : true})
  }

  render() {
    return (
    	<MuiThemeProvider>
          <RaisedButton label="Start" primary={true} onClick={this.startSomething} disabled={this.state.random} />
        </MuiThemeProvider>
    );
  }
}
