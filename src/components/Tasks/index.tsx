import {TouchableOpacity} from 'react-native'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';


import {
    Card,
    TextTask
} from './styles'

interface TaskProps{
    task: string,
    isComplete: boolean,
    taskMarkComplete: () => void,
    handleTasksDelete: ()=> void,
}


export function Tasks({task, isComplete, taskMarkComplete, handleTasksDelete}: TaskProps){

    return (
        <Card>
            <TouchableOpacity
                onPress={taskMarkComplete}
            >
                {isComplete ?
                    <AntDesign 
                        name="checkcircle" 
                        size={24}                  
                        color="#5E60CE"
                    />
                    :
                    <Feather 
                        name="circle" 
                        size={24} 
                        color="#4EA8DE" 
                    />
                }
            </TouchableOpacity>

             <TextTask variant={isComplete}>
                {task}
             </TextTask>
            
            <TouchableOpacity
                onPress={handleTasksDelete}
            >
                <MaterialCommunityIcons 
                    name="trash-can-outline" 
                    size={24} 
                    color="#808080" 
                />
            </TouchableOpacity>
            
        </Card>
    )
}