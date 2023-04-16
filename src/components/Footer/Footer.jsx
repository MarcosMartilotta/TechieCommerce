import './footer.scss';
import stripeLogo from './assets/stripeLogo.svg';
import strapiLogo from './assets/strapiLogo.svg';
import visaLogo from './assets/visaLogo.svg';
import mastercardLogo from './assets/mastercardLogo.svg';
import americanexpressLogo from './assets/americanExpressLogo.svg';

const Footer = () => {
  return (
    <footer>
      <div className="poweredBy">
        <h3>Powered by</h3>
        <img src={strapiLogo} alt="Strapi Logo" />
        <img src={stripeLogo} alt="Stripe Logo" />
      </div>
      <div className="paymentsMethods">
        <h3>Metodos de pago</h3>
        <img src={mastercardLogo} alt="Mastercard" />
        <img src={visaLogo} alt="Visa" />
        <img src={americanexpressLogo} alt="American Express" />
      </div>
    </footer>
  );
};

export default Footer;
