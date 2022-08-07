const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//@description     Add New new Review
//@route           POST /api/review/
//@access          Private
const createPaymentIntent = asyncHandler(
    async (req, res) => {
        const order = req.body;

      
        const subTotal = order.orderTotal;
        const amount = subTotal * 100;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            payment_method_types: ["card"],
        });
        res.status(200).send({ clientSecret: paymentIntent.client_secret });
    }
);



module.exports = { createPaymentIntent};
