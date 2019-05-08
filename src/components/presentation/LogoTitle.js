import React, { Component } from 'react'
import { Image } from 'react-native'
import config from '../../config'

export class LogoTitle extends Component {
    render() {
        return <Image
            style={{ height: 45, width: 150, marginLeft: "auto", marginRight: "auto" }}
            source={config.images.logoBlack} />
            
    }
}

export default LogoTitle
