import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/user.model";

import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await dbConnect();
    const url = new URL(req.url);
    // const idd=await params.id
    // console.log("paramsmslfsadkfjsdlakfjsdkfjdsl",idd)

    const id = url.pathname.split("/").pop();

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
