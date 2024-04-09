import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt } = req.body;

  if (!prompt){
    res.status(501).send('Prompt must be string')
    return;
  }

  const output = await replicate.run(
    "bytedance/sdxl-lightning-4step:727e49a643e999d602a896c774a0658ffefea21465756a6ce24b7ea4165eba6a",
    {
      input: {
        prompt,
      },
    }
  );
  
    res.send(output)
}
