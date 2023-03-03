import styled, {css} from "styled-components/native";


export const Card = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

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

interface TaskProps {
    variant?: boolean
}

export const TextTask = styled.Text<TaskProps>`
    width: 300px;
    
    color: ${props => props.theme['gray_100']};
    font-weight: 400;
    font-size: 14px; 


    ${(props) =>
        props.variant === true ?

        css`
            color: #808080; 
            text-decoration: line-through
        ` : 

        css`
            text-decoration:none;
            
        `
    
    }

`