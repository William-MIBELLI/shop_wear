import { FC, InputHTMLAttributes} from 'react'
import { FormInputContainer, FormInputLabel, Group} from './FormInput.style'

export type FormInputProps = { label: string} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
        <FormInputContainer {...otherProps}/> 
        {label && (
            <FormInputLabel shrink={Boolean(otherProps && typeof otherProps.value === 'string' && otherProps.value.length)}>
            {label}
            </FormInputLabel>
        )}
    </Group>
  )
}

export default FormInput