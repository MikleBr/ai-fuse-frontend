import type { NextApiRequest, NextApiResponse } from "next";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { image, image_to_become } = req.body;

  if (!image || !image_to_become) {
    res.status(501).send("image must be string");
    return;
  }

  console.log('typeof image', typeof image);
  console.log('image_to_become', typeof image_to_become);


  const output = await replicate.run(
    "fofr/become-image:8d0b076a2aff3904dfcec3253c778e0310a68f78483c4699c7fd800f3051d2b3",
    {
      input: {
        image,
        image_to_become,
        number_of_images: 1,
      },
    }
  );

  res.send(output);
}
