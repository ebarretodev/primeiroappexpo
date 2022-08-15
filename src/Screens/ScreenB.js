import React from "react"
import { StyleSheet, View, Text, Pressable } from 'react-native';

const ScreenB = ({ navigation }) => {

    const onPressHandler = () => {
        navigation.navigate('Screen_A')
        // navigation.goBack()

        // navigation.replace('Screen_A')
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text} >
                Screen B
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#ddd' : '#0f0' },
                    styles.button
                ]}
            >
                <Text style={styles.text} >Go back to Screen A</Text>
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

export default ScreenB