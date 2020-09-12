const stripe = Stripe('pk_test_51GxExtI3Lsj8gCRgV5MKtnvl6tSUYqqLjCWQHSrE26DC72jO3KA6ubhrlC750eMg3AzDcKoaBZzNxnzRy1ZiWGEQ00ujwlRJ4K');

const redirectToCheckout = (response) => {
    if(response.error) {
        console.log(response.error)
    } else {
        stripe.redirectToCheckout({sessionId: response.session_id})
    }
};

const payForDanceClass = (lineItems) => {
    var response = fetch(`/stripe/checkout/`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                lineItems: lineItems
            })
        }).then(function(response) {
            
        if (response.status != 200) {
            return {error: response.statusText}
        } else {
            return response.json();
        }
        
    }).then(redirectToCheckout);

}

