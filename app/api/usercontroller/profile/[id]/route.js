import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/user.model";
import { data } from "autoprefixer";

import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await dbConnect();
   const url=new URL(req.url);

   const id=url.pathname.split('/').pop()

    console.log(id)
    

    if (!id) {
      return NextResponse.json(
        {
          message: "No Id was fetched",
        },
        {
          status: 400,
        }
      );
    }

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json(
        {
          message: "No user was found",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        data: user,
        message: "User details fetched successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error in fetching user",
        error: error.message,
      },
      {
        status: 400,
      }
    );
  }
};
