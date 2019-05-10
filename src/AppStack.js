import { createStackNavigator, createAppContainer } from 'react-navigation'
import { MainScreen, PhotoScreen } from './screens'

const AppStack = createStackNavigator(
    {

        mainScreen: MainScreen,
        photoScreen: PhotoScreen

    },
    {
        headerLayoutPreset: 'center' // default is 'left'
    }
)

export default createAppContainer(AppStack)
