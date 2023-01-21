import { createNativeStackNavigator} from '@react-navigation/native-stack'

const {Navigator, Screen} = createNativeStackNavigator();

import { Habit } from '../Screens/Habit';
import { Home } from '../Screens/Home';
import { New } from '../Screens/New';

export function AppRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false}}>

            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name='new'
                component={New}
            />

            <Screen
                name='habit'
                component={Habit}
            />

        </Navigator>
    )
}