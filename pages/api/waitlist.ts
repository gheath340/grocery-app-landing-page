import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

type Data =
  | { message: string }
  | { error: string }
  | { count: number };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const { error } = await supabase
      .from('grocery_app_waitlist')
      .insert([{ email }]);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Successfully added to waitlist' });
  } else if (req.method === 'GET') {
    // Handle GET request to fetch the row count
    const { count, error } = await supabase
      .from('grocery_app_waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch row count' });
    }

    return res.status(200).json({ count: count ?? 0 });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

