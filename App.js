
import React, { Component } from 'react';
import { withAuthenticator, SignIn } from 'aws-amplify-react-native'; 
import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports'; 
import AppStack from './src/AppStack.js'
import CustomLoading from './src/login/CustomLoading.js'


Amplify.configure(aws_exports);
// analytics IAM is bugged
Analytics.disable();

class App extends Component {
  render() {
    return (
      <AppStack />
    );
  }
}

export default withAuthenticator(App, false, [
  <CustomLoading />,
  <SignIn />,
]);

