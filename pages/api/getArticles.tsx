import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=WIYmzfoP2jaYdkpnp1mwFtR7lG9TuQbn'
    );
    res.json(response.data.results);
  } catch (error) {
    console.error('API request error:', error);
    res.status(500).json({ error: 'API request error' });
  }
};
