import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    return new Promise((resolve) => {
      const query = `INSERT INTO form_entries (name, email, message) VALUES (?, ?, ?)`;
      db.run(query, [name, email, message], function (err) {
        if (err) {
          resolve(
            NextResponse.json(
              { success: false, error: err.message },
              { status: 400 }
            )
          );
        } else {
          resolve(
            NextResponse.json({
              success: true,
              id: this.lastID,
            })
          );
        }
      });
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
