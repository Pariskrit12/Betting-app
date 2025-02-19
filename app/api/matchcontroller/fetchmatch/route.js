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
    const matches = response.data.matches;

    const today = new Date().toISOString().split("T")[0];

    const matchesFromToday = matches.filter((match) => match.utcDate >= today);
    
    return NextResponse.json(
      {
        message: matchesFromToday,
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
