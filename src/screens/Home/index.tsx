
import { Header } from '../../components/Header'
import { EvilIcons } from '@expo/vector-icons';
import {Alert} from 'react-native'

import {
    Container,
    FormContainer,
    Input,
    Button,
    TaskCount,
    Maids,
    Finished,
    UpdateTasks,
    Content,
    ContainerCard,

} from './styles'


import { Tasks } from '../../components/Tasks';
import { useState } from 'react';
import { FlatList} from 'react-native';

import {MockTasks} from '../../MockDados/MockDados'
import { NoTasks } from '../../components/NoTasks';

type NewTasks = {
  id: string;
  task: string,
  isComplete: boolean,
}


export function Home (){
    const [tasks, setTasks] = useState(MockTasks);
    const [newTasks, setNewTasks] = useState('')



    function handleTasksAdd(){
       const newTask:NewTasks ={
            id: (tasks.length + 1).toString(),
            task: newTasks,
            isComplete: false
       }

       setTasks((prevState) => [...prevState, newTask])
       setNewTasks('')
    }

    function handleTasksDelete(id:string){
        Alert.alert("Remover", `Remover a tarefa ${id}?  `,[
            {
                text: 'sim',
                onPress: () => setTasks((prevState) => prevState.filter(item => item.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }




    const taskMarkComplete = (markComplete: string) => {
        let taskMapped = tasks.map((item) =>
           item.id === markComplete
              ? { ...item, isComplete: !item.isComplete }
              : { ...item }
        );
        setTasks(taskMapped);
     };
    

    let completedTasksCounter = 0
    for( const completed of tasks){
        if(completed.isComplete){
          completedTasksCounter ++
        }
    }

    const tasksLength = tasks.length

    return(
        <Container >
            <Header />

            <FormContainer >
                <Input
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={'#808080'}
                    onChangeText={setNewTasks}
                    value={newTasks}
                />

                <Button onPress={handleTasksAdd}>
                    <EvilIcons name="plus" size={24} color="#F2F2F2" />
                </Button>
            </FormContainer>

            <TaskCount>
                <Content>
                    <Maids> Criadas</Maids>
                    <UpdateTasks>{tasksLength}</UpdateTasks>
                </Content>

                <Content>
                    <Finished>Concluídas</Finished>
                    <UpdateTasks>{completedTasksCounter}</UpdateTasks>
                </Content>
                
            </TaskCount>

            <ContainerCard>
                <FlatList 
                    data={tasks}
                    renderItem={({ item }) => (
                        <Tasks
                            key={item.id}
                            task={item.task}
                            isComplete={item.isComplete}
                            taskMarkComplete={()=>taskMarkComplete(item.id) }
                            handleTasksDelete={()=>handleTasksDelete(item.id)}
                        />
                      )}
                    ListEmptyComponent={()=>(
                        <NoTasks/>
                    )}        
                />
            </ContainerCard>
            
            
        </Container>
    )
}