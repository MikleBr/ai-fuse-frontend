import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { image } = req.body;

  if (!image) {
    res.status(501).send("image must be string");
    return;
  }


  const output = await replicate.run(
    "fofr/face-to-sticker:764d4827ea159608a07cdde8ddf1c6000019627515eb02b6b449695fd547e5ef",
    {
      input: {
        image,
        prompt_strength: 4.5,
        instant_id_strength: 0.7
      },
    }
  );

  res.send(output);
}
