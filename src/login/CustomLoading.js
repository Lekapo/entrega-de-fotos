import React from 'react'
import { Image } from 'react-native'
import { Loading } from 'aws-amplify-react-native'

class CustomLoading extends Loading {
    render() {
        return (
            <Image
            style={{ height: 63, width: 210, marginLeft: "auto", marginRight: "auto" }}
            source={{ uri: 'https://alexandremfotografia.com.br/img/logo-black.png' }} />
        )
    }
}

export default CustomLoading