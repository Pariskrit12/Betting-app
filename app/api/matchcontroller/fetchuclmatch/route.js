import axios from "axios";
import { NextResponse } from "next/server";
export const GET = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.football-data.org/v4/competitions/CL/matches",
      {
        headers: {
          "X-Auth-Token": "5844efbec67d4400a7b1a6cbfeaa8406",
        },
      }
    );
    const limit=10
    const matches = response.data.matches;

    const today = new Date().toISOString().split("T")[0];

    const matchesFromToday = matches.filter((match) => match.utcDate >= today).splice(0,limit);
    
    return NextResponse.json(
      {
        message: "Successfully Fetched UCL matches",
        data:matchesFromToday
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Unable to fetch matches of premier league",
        error:error.message
      },
      {
        status: 500,
      }
    );
  }
};
