import axios from "axios";
import { NextResponse } from "next/server";
export const GET = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/teams/86/matches?status=SCHEDULED"
    );
    return NextResponse.json(
      {
        message: response.data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch data",
      },
      {
        status: 500,
      }
    );
  }
};
