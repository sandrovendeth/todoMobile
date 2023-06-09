
import { useState } from "react";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { styles } from "./styles";
import { View, Text, FlatList } from 'react-native'
import { TaskDTO } from "../dtos/TaskDTO";
import { Empty } from "../components/Empty";

export function HomeScreen() {
    const [tasks, setTasks] = useState<TaskDTO[]>([]);
    const [newTask, setNewTask] = useState('');

    function handleTaskAdd() {  /*função no qual tras o adicionar tarefa para a list */
        setTasks((tasks) => [
            ... tasks, 
                { id: '', isCompleted: false, title: newTask},
        ])
    }
 return (
    <View style={styles.container}>
        <Header task={newTask} onChangeText={setNewTask} onPress={handleTaskAdd}/>
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

            <FlatList 
                data={tasks}
                keyExtractor={(tasks) => tasks.id!}
                renderItem={({ item }) => ( 
                    <Task 
                    key={item.id} 
                    isCompleted={item.isCompleted} 
                    title={item.title}
                    />
                )}
                ListEmptyComponent={<Empty />}
            />
        </View>
    </View>
 );
}