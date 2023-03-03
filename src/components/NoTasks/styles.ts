import styled from "styled-components/native";


export const Container = styled.View`
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 400px;
    padding: 48px 20px;

`

export const TextTacks = styled.Text`
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: ${props => props.theme['gray_300']};


`