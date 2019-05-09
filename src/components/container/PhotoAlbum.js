import React, { Component } from 'react'
import { FlatList, View, ActivityIndicator } from 'react-native'
import { Storage, Auth } from 'aws-amplify'
import { Thumbnail, DownloadAlbum } from '../presentation'
import { downloadAlbum } from '../../actions'

class PhotoAlbum extends Component {

    constructor() {
        super()
        this.state = {
            data: null,
            uri: [],
            loaded: false,
        }
    }
    componentDidMount() {



        Storage.list('fotos', { level: 'private' })
            .then(result => {

                console.log('result', result.slice(1))
                this.setState({
                    data: result.slice(1)
                });

                const resultLength = result.slice(1).length - 1

                Auth.currentCredentials({
                    bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
                }).then(creds => {
                    console.log(creds.data.IdentityId)

                    result.slice(1).map((item, index) => {
                        uri = 'https://d3b9smnftuknj0.cloudfront.net/private/' + creds.data.IdentityId + '/' + item.key
                        thumbUri = 'https://d3b9smnftuknj0.cloudfront.net/300x300/private/' + creds.data.IdentityId + '/' + item.key
    
    
                        this.state.uri[index] = thumbUri
                        this.state.data[index].source = { uri: uri }
    
                        //check if all uri are loaded in state
                        if (this.state.uri[resultLength]) this.setState({ loaded: true })
                    })

                    
                })
                    .catch(err => console.log(err));

                
            })
            .catch(err => console.log('err', err))
    }

    _getAlbum = () => {

        downloadAlbum(this.state.data)
    }


    _renderPhoto = ({ item, index }) => {
        return <Thumbnail
            item={item.key}
            index={index}
            data={this.state.data}
            uri={this.state.uri[index]}
        />
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {this.state.loaded ?
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <DownloadAlbum getAlbum={() => this._getAlbum()} />

                        <FlatList
                            data={this.state.data}
                            numColumns={3}
                            renderItem={this._renderPhoto}
                        />
                    </View>
                    :
                    <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color='rgb(225,225,225)' />
                }
            </View>
        )
    }
}

export default PhotoAlbum
