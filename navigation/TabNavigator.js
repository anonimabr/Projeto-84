import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'CreatePost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CriarPost" component={CreatePost} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTabStyle:{
        backgroundColor:'gray',
        height: '8%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overFlow:'hidden',
        position:'absolute'
    },
    icons:{
        width: RFValue(30),
        height: RFValue(30),

    }
});

export default BottomTabNavigator

