import { View, Text, Button } from "react-native";

const User = ({navigation}) => {

    const navigateToProfile = () => {
        navigation.navigate('UserProfile')
    }

    return (
        <View>
            <Text>User screen</Text>
            <Button title="User profile" onPress={navigateToProfile}/>
        </View>
    )
}

export default User;