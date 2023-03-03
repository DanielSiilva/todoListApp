
import { Header } from '../../components/Header'
import { EvilIcons } from '@expo/vector-icons';


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
import { FlatList } from 'react-native';

import {MockTasks} from '../../MockDados/MockDados'




export function Home (){
    const [tasks, setTask] = useState(MockTasks)


    return(
        <Container >
            <Header />

            <FormContainer >
                <Input
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor={'#808080'}
                />

                <Button>
                    <EvilIcons name="plus" size={24} color="#F2F2F2" />
                </Button>
            </FormContainer>

            <TaskCount>
                <Content>
                    <Maids> Criadas</Maids>
                    <UpdateTasks>0</UpdateTasks>
                </Content>

                <Content>
                    <Finished>Concluídas</Finished>
                    <UpdateTasks>0</UpdateTasks>
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
                        />
                      )}

                />
            </ContainerCard>
            
            
        </Container>
    )
}