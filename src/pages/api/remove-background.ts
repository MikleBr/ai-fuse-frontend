import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { image } = req.body;

  if (!image){
    res.status(501).send('image must be string')
    return;
  }

  const output = await replicate.run(
    "smoretalk/rembg-enhance:4067ee2a58f6c161d434a9c077cfa012820b8e076efa2772aa171e26557da919",
    {
      input: {
        image,
      },
    }
  );
  
    res.send(output)
}
