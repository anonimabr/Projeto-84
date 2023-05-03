import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

<View style={styles.container}>
    <SafeAreaVier style={styles.droidSageArea} />
    <View style={styles.appTitle}>
        <View style={styles.appIcon}>
            <Image
                source={require("../assets/logo.png")}
                styles={styles.iconImage}
            ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Espectagrama</Text>
        </View>
    </View>
    <View style={styles.cardContainer}>
        <FlatList
            keyExtractor={this.keyExtractor}
            data={posts}
            renderItem={this.renderItem}
        />
    </View>
</View>

export default DrawerNavigator;