const stripe = require('stripe')(process.env.STRIPE_SK)

const stripejs = async (req, res) => {
  console.log(req.body)
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'IDR',
          product_data: {
            name: `donation to ${req.body.username}`,
          },
          unit_amount: 1000000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:8080/success',
    cancel_url: 'http://localhost:8080/cancel',
  });
  console.log(session);
  res.json({
    session
  })
}

module.exports = { stripejs }