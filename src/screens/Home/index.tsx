
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
    Content

} from './styles'



export function Home (){


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
        </Container>
    )
}