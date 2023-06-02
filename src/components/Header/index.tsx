
import { styles } from "./styles";
import { View, Image, TouchableOpacity, TextInput, Text} from 'react-native'
import logoImg from '../../assets/Logo.png'
import { theme } from "../../theme";
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Header() {
 return (
    <View style={styles.headerContainer}>
        <Image source={logoImg} />
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Adicionar Tarefa" placeholderTextColor={theme.colors.base.gray300}/>
            <TouchableOpacity style={styles.button}>
                <MaterialCommunityIcons name="plus-circle-outline" size={22} color={theme.colors.base.gray100}/>
            </TouchableOpacity>
        </View>
    </View>
 );
}