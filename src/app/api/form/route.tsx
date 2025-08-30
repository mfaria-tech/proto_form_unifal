import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

interface FormEntry {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  const db = await getDb();

  try {
    const body: unknown = await req.json();

    if (
      typeof body !== 'object' ||
      body === null ||
      !('name' in body) ||
      !('email' in body) ||
      !('message' in body)
    ) {
      return NextResponse.json(
        { success: false, error: 'Invalid body' },
        { status: 400 }
      );
    }

    const { name, email, message } = body as FormEntry;

    return new Promise((resolve) => {
      const query = `INSERT INTO form_entries (name, email, message) VALUES (?, ?, ?)`;
      db.run(query, [name, email, message], function (this: import('sqlite3').Statement, err: Error | null) {
        if (err) {
          resolve(
            NextResponse.json({ success: false, error: err.message }, { status: 400 })
          );
        } else {
          resolve(NextResponse.json({ success: true, id: this.lastID }));
        }
      });
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
