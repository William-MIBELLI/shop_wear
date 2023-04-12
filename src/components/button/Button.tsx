import { FC, ButtonHTMLAttributes } from 'react'
import { BaseButton, GoogleButton, InvertedButton} from './Button.style'

export enum BUTTON_TYPE_CLASSES  {
  base  = 'base',
  google = 'google-sign-in',
  inverted = 'inverted'
}


const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]
)

export type ButtonProps = {
  button_type?: BUTTON_TYPE_CLASSES,

} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, button_type, ...otherProps }) => {
  const CustomButton = getButton(button_type)
  return (
    <CustomButton 
        {...otherProps}
    >
        { children }
    </CustomButton>
  )
}

export default Button