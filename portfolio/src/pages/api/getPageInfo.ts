import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { PageInfo } from 'typings';

const query = groq`
*[_type == "pageInfo"][0] 
`;

type Data = {
	pageInfo: PageInfo;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const pageInfo: PageInfo = await sanityClient.fetch(query);
	res.status(200).json({ pageInfo });
};

export default handler;
