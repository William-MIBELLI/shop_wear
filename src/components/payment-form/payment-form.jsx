import { PaymentFormContainer, FormContainer } from './payment-form.style'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import Button from '../button/Button'


const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const submitHandler = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return
        }
    }

    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={submitHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement/>
                <Button>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm