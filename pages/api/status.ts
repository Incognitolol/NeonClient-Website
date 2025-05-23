import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://status.crunchservices.xyz/api/status-page/heartbeat/neon');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching status:', error);
    res.status(500).json({ message: 'Failed to fetch status' });
  }
} 