import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { Header } from '../../components/Header'
import { styles } from './styles'


export function Home (){


    return(
        <View >
            <Header />

            <View >
                <TextInput
                    placeholder='Adicione uma nova tarefa'
                    style={styles.inputTask}
                />

                <TouchableOpacity>
                    <Text> + </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}