import styled from "styled-components/native";


export const Card = styled.View`
    flex-direction: row;

    padding: 12px 8px 12px 12px;
    gap: 8px;

    width: 400px;
    height: 64px;

    background: ${props => props.theme['gray_500']};
   
    border: 1px solid ${props => props.theme['gray_400']};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 8px;

    margin-bottom: 10px;
`

export const TextTask = styled.Text`
    width: 300px;
    height: 40px;

    color: ${props => props.theme['gray_100']};
    font-weight: 400;
    font-size: 14px; 

`