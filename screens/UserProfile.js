import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:10,
        borderWidth:1,
        borderColor:'blur',
    }
})

const UserProfile = () => {
    return (
        <View style={styles.container}>
            <Text>User profile screen</Text>
        </View>
    )
}

export default UserProfile;