import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
const CustomButton = ({onPress, text }) => {
    return (
        < Pressable
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 25,
        margin: 10,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#29ffc9',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#aaa',
        margin: 10
    },
})

export default CustomButton