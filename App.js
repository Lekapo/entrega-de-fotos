
import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native'; // or 'aws-amplify-react-native';
import Amplify, { Analytics } from 'aws-amplify';
// Get the aws resources configuration parameters
import aws_exports from './aws-exports'; // if you are using Amplify CLI
import AppStack from './src/AppStack.js'

Amplify.configure(aws_exports);
// analytics IAM is bugged
Analytics.disable();

class App extends Component {
  render() {
    return(
      <AppStack />
    );
  }
}

export default withAuthenticator(App);

