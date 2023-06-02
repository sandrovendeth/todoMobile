
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { styles } from "./styles";
import { View, Text } from 'react-native'

export function HomeScreen() {
 return (
    <View style={styles.container}>
        <Header />
        <View style={styles.tasksContainer}>
            <View style={styles.info}>
                <View style={styles.row}>
                    <Text style={styles.tasksCreated}>Criadas</Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counterText}>0</Text>
                        </View>
                </View>
                <View style={styles.row}>
                     <Text style={styles.tasksDone}>Tarefas Concluidas</Text>
                        <View style={styles.counterContainer}>
                            <Text style={styles.counterText}>0</Text>
                        </View>
                </View>
                
            </View>
            <Task />
            <Task />
            <Task />
            <Task />
        </View>
    </View>
 );
}