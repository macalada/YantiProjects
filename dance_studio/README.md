## Node.js Server for stripe checkout


## Installation

* `git clone https://irynatar@bitbucket.org/irynatar/dance_studio.git`
* `npm install`

## Server usage
* `node app.js` or `nodemon app.js` if you need check server changes and restart the server.

## Stripe checkout usage

There is server endpoint we need to use to get stripe session id
* POST http://localhost:3000/stripe/checkout
* * This endpoint require us to send lineItems as POST param with the following signature
```javascript
  lineItems: [{price: 'price_H5ggYwtDq4fbrJ', quantity: 1}]
```

* There is a client method in payment.js which you suppose to use to make a payments
```javascript
    payForDanceClass([{price: 'price_H5ggYwtDq4fbrJ', quantity: 1},...])
```

* There is css styles for successful_payment.html page located in css folder 






