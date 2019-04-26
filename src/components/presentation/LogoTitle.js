import React, { Component } from 'react'
import { Image } from 'react-native'

export class LogoTitle extends Component {
    render() {
        return <Image
            style={{ height: 45, width: 150, marginLeft: "auto", marginRight: "auto" }}
            source={{ uri: 'https://alexandremfotografia.com.br/img/logo-black.png' }} />

    }
}

export default LogoTitle
