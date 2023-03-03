import {View, Text} from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';


import {
    Card,
    TextTask
} from './styles'



interface TaskProps{
    task: string,
    isComplete: boolean,
}


export function Tasks({task, isComplete}: TaskProps){

    return (
        <Card>
             <Feather 
                name="circle" 
                size={24} 
                color="#4EA8DE" /> 

             <TextTask>
                {task}
             </TextTask>
            
             <MaterialCommunityIcons 
                name="trash-can-outline" 
                size={24} 
                color="#808080" 
            />
        </Card>
    )
}