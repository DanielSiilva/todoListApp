import {Text} from 'react-native'
import { Header } from '../../components/Header'

import {
    Container,
    FormContainer,
    Input,
    Button

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
        </Container>
    )
}