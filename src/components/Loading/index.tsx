
import { theme } from "../../theme";
import { styles } from "./styles";
import { View, ActivityIndicator } from 'react-native'

export function Loading() {
 return (
    <View style={styles.container}>
        <ActivityIndicator size={50} color={theme.colors.brand.blue}/>
    </View>
 );
}