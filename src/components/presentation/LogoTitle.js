import React, { Component } from 'react'
import { Image } from 'react-native'
import config from '../../config'

export class LogoTitle extends Component {
    render() {
        return <Image
            style={{ height: 40, width: 135, }}
            source={config.images.logoBlack} />
            
    }
}

export default LogoTitle
