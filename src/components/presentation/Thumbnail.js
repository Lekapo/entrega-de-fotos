import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Dimensions, StyleSheet, Image, View } from 'react-native'

class Thumbnail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            screenWidth: 0,
            loaded: false,
        }
    }

    componentDidMount() {
        this.setState({
            screenWidth: Dimensions.get("window").width / 3 //divided by the number of columns
        })

    }

    _onLoad = () => {
        this.setState({
            loaded: true
        })
    }

    render() {
        return (

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.props.navigation.navigate(
                    'photoScreen',
                    {
                        key: this.props.item,
                        listIndex: this.props.index,
                        data: this.props.data,
                    })}
                style={{
                    borderBottomWidth: 1,
                    borderRightWidth: 1,
                    borderColor: 'rgb(255,255,255)'

                }}

            >



                <Image
                    style={{
                        width: this.state.screenWidth,
                        height: this.state.screenWidth,
                    }}
                    source={{ uri: this.props.uri }}
                    onLoad={this._onLoad}
                />

                {!this.state.loaded &&
                    <View
                        style={{
                            width: this.state.screenWidth,
                            height: this.state.screenWidth,
                            backgroundColor: 'rgb(225,225,225)',
                            borderWidth: 1,
                            borderColor: 'rgb(255,255,255)',
                            position: 'absolute'
                        }}
                    />
                }
            </TouchableOpacity>
        )
    }
}
export default withNavigation(Thumbnail)
