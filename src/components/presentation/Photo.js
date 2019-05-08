import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { BottomBar } from '../container';
import Gallery from 'react-native-image-gallery';
import { withNavigation } from 'react-navigation'

class Photo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hideBottonBar: true,
        }
    }


    _onChangeImage = (index) => {
        this.setState({
            imgKey: this.props.data[index].key,
            hideBottonBar: true,
        })
    }

    _hideBottonBar = () => {
        this.setState({
            hideBottonBar: !this.state.hideBottonBar,
        })
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%' }}>

                <Gallery
                    style={{ flex: 1, backgroundColor: 'black' }}
                    images={this.props.data}
                    initialPage={this.props.listIndex}
                    flatListProps={{
                        initialNumToRender: 5,
                        initialScrollIndex: this.props.listIndex,
                        getItemLayout: (data, index) => ({
                            length: Dimensions.get('screen').width, offset: Dimensions.get('screen').width * index, index
                        })
                    }}
                    onSingleTapConfirmed={this._hideBottonBar}
                    onPageSelected={this._onChangeImage}
                />

                {/* if hideBottomBar is true render component, else null */}
                {!this.state.hideBottonBar
                    ? <BottomBar
                        imgKey={this.state.imgKey}
                    />
                    : null}
            </View>
        )
    }
}
export default Photo
