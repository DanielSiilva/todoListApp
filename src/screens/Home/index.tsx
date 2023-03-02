import {Text, View} from 'react-native'
import { Header } from '../../components/Header'

import {
    Container,
    FormContainer,
    Input,
    Button,
    TaskCount,
    Maids,
    Finished,
    UpdateTasks,
    Content

} from './styles'



export function Home (){


    return(
        <Container >
            <Header />

            <FormContainer >
                <Input
                    placeholder='Adicione uma nova tarefa'
                />

                <Button>
                   <Text>+</Text>
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
        </Container>
    )
}