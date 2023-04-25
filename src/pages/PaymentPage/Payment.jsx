import { PaymentElement } from '@stripe/react-stripe-js';
const Payment = () => {
  return (
    <form action="">
      <PaymentElement />
      <button>Pagar</button>
    </form>
  );
};

export default Payment;
