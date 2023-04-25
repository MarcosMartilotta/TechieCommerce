import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from './Payment';
import { PaymentElement } from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51N07GgLdDzxUtXPkTAwNhItmuCDJLEdmGNICJiZ41mhMcT0UxuIXhghDQFeY7GkCVdNjDoUdfaUeU7fx6QOezUnv000Njy8imf',
);

export default function PaymentWrapper() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: import.meta.env.VITE_STRIPE,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <PaymentElement />
    </Elements>
  );
}
