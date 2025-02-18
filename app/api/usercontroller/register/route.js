import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/user.model";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  await dbConnect();

  try {
    const { username, password, email, gender } = await req.json();
    if (!username || !password || !email || !gender) {
      return NextResponse.json(
        {
          message: "Fill all the fields",
        },
        {
          status: 400,
        }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          message: "Invalid email format",
        },
        {
          status: 400,
        }
      );
    }
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          message:
            "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character",
        },
        {
          status: 400,
        }
      );
    }
    const userExistedOfSameUsername = await User.findOne({ username });

    if (userExistedOfSameUsername) {
      return NextResponse.json(
        {
          message: "User with same username already exist",
        },
        {
          status: 400,
        }
      );
    }

    const userWithSameEmail = await User.findOne({ email });

    if (userWithSameEmail) {
      return NextResponse.json(
        {
          message: "User with same email exist",
        },
        {
          status: 400,
        }
      );
    }
    const user = await User.create({
      email,
      password,
      username,
      gender,
    });

    const userCreated = await User.findById(user._id).select("-password");
    if (!userCreated) {
      return NextResponse.json(
        {
          message: "User not created",
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      {
        message: "User Created Successfully",
        data: userCreated,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error in registering user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
