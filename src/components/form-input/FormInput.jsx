import React from 'react'
import { FormInputContainer, FormInputLabel, Group} from './FormInput.style.jsx'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
        <FormInputContainer {...otherProps}/> 
        {label && (
            <FormInputLabel shrink={otherProps.value.length}>
            {label}
            </FormInputLabel>
        )}
    </Group>
  )
}

export default FormInput