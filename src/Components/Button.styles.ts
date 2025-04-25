import styled, {css} from 'styled-components';
import { defautTheme } from './styles/themes/default';


export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants ={
    primary: 'purple',
    secondary: 'blue',
    danger: 'red',
    success: 'green'
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};

    
    `