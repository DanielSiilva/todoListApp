export interface Task {
    id: string;
    task: string,
    isComplete: boolean,
}

export const MockTasks: Task[] = [
    {
        id:'1',
        task: 'Estudar Logica',
        isComplete: false
    },
    {
        id:'2',
        task: 'Estudar Laços de repetições',
        isComplete: true
    } ,
    {
        id: '3',
        task: 'Codar mais e mais',
        isComplete: true
    }
]