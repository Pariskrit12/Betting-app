import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const POST = async (req, res) => {
  //Creates paymentIntent
  //A PaymentIntent is a Stripe object that represents an attempt to collect payment from a user.
  //It ensures that the payment process is secure and handles edge cases like authentication and retries.
  try {
    const { amount, userId } = await req.json();

    if (!amount || !userId) {
      return NextResponse.json(
        {
          message: "Fill all the fields",
        },
        {
          status: 400,
        }
      );
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      metadata:{userId}
    });

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret,message:"PaymentIntent created successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error in payment",
        error: error.message,
      },
      {
        status: 400,
      }
    );
  }
};
