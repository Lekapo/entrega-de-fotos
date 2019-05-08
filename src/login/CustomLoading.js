import React from 'react'
import { Image } from 'react-native'
import { Loading } from 'aws-amplify-react-native'
import config from '../config'

class CustomLoading extends Loading {
    render() {
        return (
            <Image
            style={{ height: 63, width: 210, marginLeft: "auto", marginRight: "auto" }}
            source={config.images.logoBlack} />
        )
    }
}

export default CustomLoading