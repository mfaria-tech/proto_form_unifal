import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { answers } = await req.json();
    // answers: { question: string, answer: string }[]

    return new Promise((resolve) => {
      db.run("INSERT INTO respondents DEFAULT VALUES", function (err) {
        if (err) {
          resolve(NextResponse.json({ success: false, error: err.message }, { status: 400 }));
        } else {
          const respondentId = this.lastID;
          const stmt = db.prepare("INSERT INTO answers (respondent_id, question, answer) VALUES (?, ?, ?)");

          for (const a of answers) {
            stmt.run([respondentId, a.question, a.answer]);
          }

          stmt.finalize();
          resolve(NextResponse.json({ success: true, respondentId }));
        }
      });
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
