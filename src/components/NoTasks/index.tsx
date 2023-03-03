import {View} from 'react-native'

import { Feather } from '@expo/vector-icons';

import {
    Container,
    TextTacks
} from './styles'

export function NoTasks(){
    return(
        <Container>
            <Feather 
                name="clipboard" 
                size={100} 
                color="#333333" 
            />

            <View>
                <TextTacks> Você ainda não tem tarefas cadastradas</TextTacks>
                <TextTacks>Crie tarefas e organize seus itens a fazer</TextTacks>
            </View>
        </Container>
    )
}