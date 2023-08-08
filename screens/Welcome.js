import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:10,
        borderWidth:1,
        borderColor:'blur',
    }
})

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome screen</Text>
        </View>
    )
}

export default Welcome;