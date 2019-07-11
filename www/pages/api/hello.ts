import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'faunadb';

export default (_req: NextApiRequest, res: NextApiResponse) => {
    const client = new Client({ secret: 'foobar' });
    console.log(client);

    res.send({ message: 'hello world' });
};
