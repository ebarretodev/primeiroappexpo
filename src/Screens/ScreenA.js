import React from "react"
import { StyleSheet, View, Text, Pressable } from 'react-native';

const ScreenA = ({ navigation }) => {

    const onPressHandler = () => {
        navigation.navigate('Screen_B')
        // navigation.replace('Screen_B')
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text} >
                Screen A
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#ddd' : '#0f0' },
                    styles.button
                ]}
            >
                <Text style={styles.text} >Go to Screen B</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
});


export default ScreenA