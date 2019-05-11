
import React, { Component } from 'react';
import { withAuthenticator, SignIn } from 'aws-amplify-react-native'; 
import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports'; 
import AppStack from './src/AppStack.js'
import CustomLoading from './src/login/CustomLoading.js'
import { AmplifyTheme } from 'aws-amplify-react-native';

const MySectionFooterLink = Object.assign({}, AmplifyTheme.sectionFooterLink, {color: '#000' })
const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: '#000000' });
const MyButtonDisabled = Object.assign({}, AmplifyTheme.buttonDisabled, { backgroundColor: '#00000080' });
const MyTheme = Object.assign({}, AmplifyTheme, { button: MyButton }, { buttonDisabled: MyButtonDisabled }, { sectionFooterLink: MySectionFooterLink } );

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
console.log(MyTheme)
export default withAuthenticator(App, false, [
  <CustomLoading />,
  <SignIn />,
], null, MyTheme);

