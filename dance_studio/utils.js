const stripeKey = 'sk_test_51GxExtI3Lsj8gCRg1hBf7unQM9L8aI7c9L1RYf2miRGIEF2WpBPGV8dLxbnzQT6RvDlac54krJKjzsoEefSjEQrJ005lb4zQIl';
const stripe = require('stripe')(stripeKey);

const getStripeSession = (lineItems) => {
    const sessionData = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success_payment.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/index.html',
    };

  return stripe.checkout.sessions.create(sessionData);
}

module.exports = {
  getStripeSession: getStripeSession
};
