import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;

    background-color: ${props => props.theme['background']};

`

export const FormContainer = styled.View`

    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 50px;
    gap: 5px;

    margin-top: -35px;
    height: 60px;
    
`

export const Input = styled.TextInput`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 8px;

    background: ${props => props.theme['gray_500'] };

    border: 1px solid ${props => props.theme['gray_700'] };
    border-radius: 6px;

    font-weight: 400;
    font-size: 16px;
   
    color: ${props => props.theme['gray_100'] };
    

`

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px;
    gap: 8px;

    width: 58px;
    height: 58px;

    background: ${props => props.theme['blue_dark']};
    border: 0px;
    border-radius: 6px;

`

export const TaskCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 0px 50px;
    height: 50px;

`
export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 8px;

   


`



export const Maids = styled.Text`
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 16px;

    color: ${props => props.theme['blue']};

`
export const Finished = styled.Text`
    font-weight: 700;
    font-size: 16px;

    color: ${props => props.theme['purple']};
`

export const UpdateTasks = styled.Text`
    padding: 2px 8px;

    background: ${props => props.theme['gray_400']};
    border-radius: 999px;


    font-weight: 700;
    font-size: 12px;
   

    color: ${props => props.theme['gray_200']};


`