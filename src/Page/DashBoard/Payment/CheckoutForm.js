import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing , setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe()
    const elements = useElements();
    const {resale_price, email, name, _id} = order;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: {
             "Content-Type": "application/json" 
            },
          body: JSON.stringify({resale_price}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [resale_price]);
    

    // const handleSubmit = async(event)=>{
    //     event.preventDefault();
    //     if(!stripe || !elements){
    //         return
    //     }

    //     const card = elements.getElement(CardElement);
    //     if (card == null) {
    //         return;
    //       }

    //       const {error, paymentMethod} = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card,
    //       });

    //       if (error) {
    //         console.log('[error]', error);
    //         setCardError(error.message)
    //       } 
    //       else {
    //         setCardError('')
    //       }
    //       setSuccess('')
    //       setProcessing(true)

    //       const {paymentIntent, confirmError} = await stripe.confirmCardPayment(
    //         clientSecret,
    //         {
    //             payment_method: {
    //                 card: card,
    //                 billing_details: {
    //                   name: name,
    //                   email: email
    //                 },
    //               },
    //         }
    //         )

    //         if(confirmError){
    //             setCardError(confirmError.message);
    //             return;
    //         }
    //         if(paymentIntent.status === "succeeded"){
               
    //             const payment = {

    //                 resale_price,
    //                 transactionId: paymentIntent.id,
    //                 email,
    //                 orderId: _id
    //             }

    //              fetch('http://localhost:5000/payments',{
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json',
    //                 },
    //                 body: JSON.stringify(payment)
    //              })
    //              .then(res => res.json())
    //              .then(data => {
    //                 if(data.insertedId){
    //                     setSuccess('Your Payment completed!!')
    //                     setTransactionId(paymentIntent.id)
        

    //                 }
    //              })
              
    //         }

    //         setProcessing(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          return;
        }
      
        const card = elements.getElement(CardElement);
        if (card == null) {
          return;
        }
      
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
      
        if (error) {
          console.log('[error]', error);
          setCardError(error.message);
        } else {
          setCardError('');
        }
        setSuccess('');
        setProcessing(true);
      
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: name,
                email: email,
              },
            },
          }
        );
      
        if (confirmError) {
          setCardError(confirmError.message);
          setProcessing(false);
          return;
        }
      
        if (paymentIntent && paymentIntent.status === 'succeeded') {
          const payment = {
            resale_price,
            transactionId: paymentIntent.id,
            email,
            orderId: _id,
          };
      
          fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(payment),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                setSuccess('Your Payment completed!!');
                setTransactionId(paymentIntent.id);
              }
            });
        }
      
        setProcessing(false);
      };


        

    

    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-sm mt-4 btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    <p className="text-red-600">{cardError}</p>
    {
        success && <div>
           <p className='text-green-700'>{success}</p>
           <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
        </div>
    }
        </>
    );
};

export default CheckoutForm;