
import { styles } from "./styles";
import { View, Image, TouchableOpacity, TextInput, Text} from 'react-native'
import logoImg from '../../assets/Logo.png'
import { theme } from "../../theme";
import { MaterialCommunityIcons } from '@expo/vector-icons'

type HeaderProps = {
    task: string;
    onChangeText: (task: string) => void;
    onPress: () => void;
}

export function Header({task, onChangeText, onPress}: HeaderProps) {
 return (
    <View style={styles.headerContainer}>
        <Image source={logoImg} />
        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder="Adicionar Tarefa" 
                placeholderTextColor={theme.colors.base.gray300}
                value={task}
                onChangeText={onChangeText}
            />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <MaterialCommunityIcons 
                    name="plus-circle-outline" 
                    size={22} color={theme.colors.base.gray100}
                />
            </TouchableOpacity>
        </View>
    </View>
 );
}