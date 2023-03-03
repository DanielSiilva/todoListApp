import {View, Text, TouchableOpacity} from 'react-native'
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
            <TouchableOpacity>
                <Feather 
                    name="circle" 
                    size={24} 
                    color="#4EA8DE" 
                /> 

            </TouchableOpacity>

             <TextTask>
                {task}
             </TextTask>
            
            <TouchableOpacity>
                <MaterialCommunityIcons 
                    name="trash-can-outline" 
                    size={24} 
                    color="#808080" 
                />
            </TouchableOpacity>
            
        </Card>
    )
}