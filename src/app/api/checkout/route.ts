import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";


export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
  });
  
  try {
    const reqBody = await req.json();
    const{items,email}=await reqBody
    return NextResponse.json({
      message: "Connetion is Active",
      success: true,
      reqBody,
    });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
