import {
  TextField,
  Chip,
  Tabs,
  Typography,
  Card,
  Badge,
  Button,
  Breadcrumb,
} from "@/shared/components";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/Breadcrumb";
import { CommonLayout } from "@/widgets/common-layout";
import {
  Bookmark,
  Bot,
  Download,
  Github,
  Heart,
  Loader,
  Loader2,
  Network,
  Rocket,
  Share2,
} from "lucide-react";
import { useState } from "react";

import example from "/public/Pngmaker.png";
import cn from "@/shared/utils/cn";
import { Toggle } from "@/shared/components/ui/Toggle";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("playground");

  return (
    <CommonLayout>
      <div className="content-container">
        <Breadcrumb className="mt-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/models">Models</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>PNGMaker AI</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full flex align-start justify-between mt-5">
          <div className="flex flex-col">
            <div className="mb-2 flex gap-1">
              <Badge variant="secondary" className="text-xs py-0.5">
                Generate image
              </Badge>
              <Badge variant="secondary" className="text-xs py-0.5">
                Content Creators
              </Badge>
              <Badge variant="secondary" className="text-xs py-0.5">
                Graphic Designers
              </Badge>
              <Badge variant="outline" className="text-xs py-0.5">
                + 5 more
              </Badge>
            </div>
            <div className="flex gap-2 items-end">
              <Typography.Heading className="m-0" Component="h1" level={1}>
                PNGMaker AI
              </Typography.Heading>
            </div>
            <Typography.Paragraph className="mt-1 mb-0 block w-2/3">
              Make a PNG From Text in Seconds. Create your transparent PNG in a
              revolutionary way. Spend less time, achieve more creativity.
            </Typography.Paragraph>
          </div>
          <div className="flex gap-2">
            <Button>
              Try in flow{" "}
              <Network
                className="ml-1 w-5"
                strokeWidth={1.7}
                absoluteStrokeWidth
              />
            </Button>
            <Button size="icon" variant="outline">
              <Heart className="w-5" strokeWidth={1.5} absoluteStrokeWidth />
            </Button>
          </div>
        </div>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="mt-5"
        >
          <Tabs.TabItem tabKey="overview">Overview</Tabs.TabItem>
          <Tabs.TabItem tabKey="playground">Playground</Tabs.TabItem>
          <Tabs.TabItem tabKey="examples">Examples</Tabs.TabItem>
          <Tabs.TabItem tabKey="reviews">Reviews</Tabs.TabItem>
          <Tabs.TabItem tabKey="qa">Q&A</Tabs.TabItem>
          <Tabs.TabItem tabKey="alternatives">Alternatives</Tabs.TabItem>
        </Tabs>
      </div>
      <div className="content-container mt-4 mb-8">
        <Tabs.TabContent tabKey="overview" activeTab={activeTab}>
          <DescriptionTab />
        </Tabs.TabContent>
        <Tabs.TabContent tabKey="playground" activeTab={activeTab}>
          <PlaygroundTab />
        </Tabs.TabContent>
        <Tabs.TabContent tabKey="examples" activeTab={activeTab}>
          <ExamplesTab />
        </Tabs.TabContent>
        <Tabs.TabContent tabKey="block" activeTab={activeTab}>
          Block
        </Tabs.TabContent>
      </div>
    </CommonLayout>
  );
}

function DescriptionTab() {
  return (
    <div className="grid grid-cols-7 gap-10">
      <div className="col-span-4 flex flex-col">
        <Typography.Heading level={3} className="mt-0">
          How to Make a Transparent PNG with pngmaker.ai?
        </Typography.Heading>
        <Typography.Paragraph>
          Creating transparent PNG images with pngmaker.ai is simple and
          efficient. Follow these steps to bring your ideas to life:
        </Typography.Paragraph>
        <Typography.Heading level={4}>
          Step 1: Input Your Idea
        </Typography.Heading>
        <Typography.Paragraph>
          Begin by typing a detailed description of the image you envision into
          the input field. Be as specific as possible to ensure the best
          results.
        </Typography.Paragraph>
        <Typography.Heading level={4}>
          Step 2: Wait for About 10 Seconds
        </Typography.Heading>
        <Typography.Paragraph>
          Once you submit your description, pngmaker.ai gets to work. In
          approximately 10 seconds, our advanced AI algorithms will process your
          request and generate your image.
        </Typography.Paragraph>
        <Typography.Heading level={4}>
          Step 3: Receive Your PNG Image
        </Typography.Heading>
        <Typography.Paragraph>
          After the brief wait, your PNG image will be ready. Review your new
          transparent PNG to see if it meets your expectations.
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
      <Card className="col-span-3 self-start">
        <Card.Head className="flex-row justify-between items-start">
          <div className="flex gap-4 items-center">
            <img
              className="w-12 h-12"
              src="https://pngmaker.ai/_next/static/media/logo.4d883e09.webp"
            />
            <div>
              <Typography.Heading className="m-0" level={3}>
                PNGMaker AI
              </Typography.Heading>
              <Card.Description>
                Make a PNG From Text in Seconds.
              </Card.Description>
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
              png
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
          <Button size="S" variant="dark">
            Visit site
          </Button>
          <Button size="S" variant="secondary">
            Share <Share2 className="ml-1 inline w-4" />
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

let timeoutId: NodeJS.Timeout | null = null;

function PlaygroundTab() {
  const [status, setStatus] = useState<"init" | "loading" | "success">("init");

  const onStart = () => {
    setStatus("loading");
    timeoutId = setTimeout(() => setStatus("success"), 5000);
  };

  const onAbort = () => {
    setStatus("init");
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return (
    <>
      <div className="grid pb-20 grid-cols-4 gap-4">
        <div className="col-span-2">
          <Card>
            <Card.Head className="flex flex-row justify-between items-center">
              <div>
                <Card.Title>Settings</Card.Title>
                <Card.Description className="mt-1">
                  Settings for generation
                </Card.Description>
              </div>
              <Button
                className="w-[240px]"
                onClick={status === "loading" ? onAbort : onStart}
                size="S"
                variant={status === "loading" ? "error" : "primary"}
              >
                {status !== "loading" ? (
                  <>
                    <Rocket
                      className="mr-1 h-4"
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                    />
                    Generate!
                  </>
                ) : (
                  <>
                    Abort generation
                    <Loader2 className="ml-1 animation-rotate" />
                  </>
                )}
              </Button>
            </Card.Head>
            <Card.Content className="flex flex-col gap-4">
              <TextField
                label="Prompt"
                value="Cartoon image of astronaut"
                required
                placeholder="Prompt"
              />
              <div>
                <label className="text-sm mb-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Number of images
                </label>
                <div className="flex gap-2">
                  <Toggle pressed variant="outline">
                    1
                  </Toggle>
                  <Toggle variant="outline">2</Toggle>
                  <Toggle variant="outline">4</Toggle>
                </div>
              </div>
            </Card.Content>
          </Card>
          <Card className="mt-4">
            <Card.Head>
              <Card.Title>Additional settings</Card.Title>
              <Card.Description className="mt-1">
                For expert use
              </Card.Description>
            </Card.Head>
            <Card.Content className="flex flex-col gap-4">
              <TextField label="Seed" placeholder="Seed" />
              <TextField
                label="Temperature"
                placeholder="Temperature"
                value="0.5"
              />
            </Card.Content>
          </Card>
        </div>
        <div className="sticky top-4 self-start col-span-2">
          <div
            className={
              "overflow-hidden transition-all w-full rounded-lg relative"
            }
          >
            <img
              className={cn(
                "w-full checkerboard-bg",
                status === "loading" && "blur-sm brightness-75"
              )}
              src={example.src}
            />
            <Badge className="absolute top-2 right-2">Output</Badge>
            {status === "loading" && (
              <Loader2
                strokeWidth={2}
                className="absolute top-[calc(50%-27px)] left-[calc(50%-27px)] w-14 h-14 text-white animation-rotate"
              />
            )}
          </div>
          {status === "success" && (
            <div className="mt-2 flex gap-2">
              <Button>
                Download image <Download className="ml-1 inline w-4" />
              </Button>
              <Button variant="secondary">
                Share <Share2 className="ml-1 inline w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ExamplesTab() {
  return (
    <div className="flex gap-4 ">
      <div className="w-1/5 aspect-square rounded-md checkerboard-bg">
        <img src="https://r2.erweima.ai/imgcompressed/img/compressed_c38c8b42a7c41597ad38cbbfeb0a44ba.webp" />
      </div>
      <div className="w-1/5 aspect-square rounded-md checkerboard-bg">
        <img src=" https://r2.erweima.ai/imgcompressed/img/compressed_85b04f28a2ea194f9edd9727b79f2e38.webp" />
      </div>
    </div>
  );
}
