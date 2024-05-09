import { Badge, Button, Card, Typography } from "@/shared/components";
import { Heart, Share2 } from "lucide-react";

type DescriptionTabProps = {};

export function DescriptionTab({}: DescriptionTabProps) {
  return (
    <div className="grid grid-cols-7 gap-10">
      <div className="col-span-4 flex flex-col">
        <Typography.Heading level={3} className="mt-0">
          Midjourney
        </Typography.Heading>
        <Typography.Paragraph>
          Midjourney is a generative artificial intelligence program and service
          created and hosted by the San Francisco–based independent research lab
          Midjourney, Inc. Midjourney generates images from natural language
          descriptions, called prompts, similar to OpenAI's DALL-E and Stability
          AI's Stable Diffusion. It is one of the technologies of the AI boom.
        </Typography.Paragraph>
        <Typography.Heading level={4}>History</Typography.Heading>
        <Typography.Paragraph>
          Midjourney, Inc. was founded in San Francisco, California, by David
          Holz, previously a co-founder of Leap Motion. The Midjourney image
          generation platform entered open beta on July 12, 2022. On March 14,
          2022, the Midjourney Discord server launched with a request to post
          high-quality photographs to Twitter and Reddit for systems training.
        </Typography.Paragraph>
        <Typography.Heading level={4}>Uses</Typography.Heading>
        <Typography.Paragraph>
          Midjourney's founder, David Holz, told The Register that artists use
          Midjourney for rapid prototyping of artistic concepts to show to
          clients before starting work themselves.
        </Typography.Paragraph>
        <Typography.Paragraph>
          The advertising industry has been quick to embrace AI tools such as
          Midjourney, DALL-E, and Stable Diffusion, among others. The tools that
          enable advertisers to create original content and brainstorm ideas
          quickly are providing new opportunities, such as "custom ads created
          for individuals, a new way to create special effects, or even making
          e-commerce advertising more efficient", according to Ad Age.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Architects have described using the software to generate mood boards
          for the early stages of projects, as an alternative to searching
          Google Images.
        </Typography.Paragraph>
        <Typography.Heading level={3}>Not Satisfied?</Typography.Heading>
        <Typography.Paragraph>
          If the result isn't quite what you were looking for, don't worry! You
          can easily generate additional images. Simply refine your description
          based on what you'd like to adjust and repeat the process. pngmaker.ai
          is designed to work with you to achieve the perfect outcome. Creating
          transparent PNGs has never been easier. Try pngmaker.ai today and
          unleash your creativity!
        </Typography.Paragraph>
      </div>
      <Card className="sticky top-4 col-span-3 self-start">
        <Card.Head className="flex-row justify-between items-center">
          <div className="flex gap-4 items-center">
            <Card className="!rounded-md w-12 h-12">
              <img
                className="w-full h-full object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg"
              />
            </Card>
            <div>
              <Typography.Heading className="m-0" level={3}>
                Midjourney
              </Typography.Heading>
            </div>
          </div>
          <div className="flex gap-2 !m-0">
            <Button size="S" variant="secondary">
              <Heart strokeWidth={1.5} className="w-4" />
            </Button>
          </div>
        </Card.Head>
        <Card.Content>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary" className="text-xs py-0.5">
              Generate image
            </Badge>
            <Badge variant="secondary" className="text-xs py-0.5">
              Content Creators
            </Badge>
            <Badge variant="secondary" className="text-xs py-0.5">
              Graphic Designers
            </Badge>
            <Badge variant="secondary" className="text-xs py-0.5">
              Photo
            </Badge>
            <Badge variant="secondary" className="text-xs py-0.5">
              Design
            </Badge>
            <Badge variant="secondary" className="text-xs py-0.5">
              Web Development
            </Badge>
          </div>
        </Card.Content>
        <Card.Content className="flex gap-2">
          <Button size="S">Playground</Button>
          <Button size="S" variant="secondary">
            Share <Share2 className="ml-1 inline w-4" />
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}
