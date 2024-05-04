import {
  TextField,
  Chip,
  Tabs,
  Typography,
  Card,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
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
  Bot,
  Download,
  Github,
  Heart,
  Network,
  Rocket,
  Share2,
} from "lucide-react";
import { useState } from "react";

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
              <BreadcrumbPage>Kandinsky</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full flex align-start justify-between mt-5">
          <div className="flex flex-col">
            <div className="flex gap-2 items-end">
              <Bot
                className="h-8 w-8 mb-1"
                strokeWidth={1.7}
                absoluteStrokeWidth
              />
              <Typography.Heading className="m-0" level={1}>
                Kandinsky
              </Typography.Heading>
              <Chip
                className="text-base mb-1 py-0 px-2"
                variant="secondary"
              >
                v2.2
              </Chip>
            </div>
            <Typography.Paragraph>
              Multilingual text2image latent diffusion model
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
        <div className="flex items-center gap-2">
          <Chip size="S">Generate image</Chip>
          <Chip variant={Chip.Variants.SECONDARY}>Images</Chip>
          <Chip variant="outline">
            <Github
              className="mr-2 w-4"
              strokeWidth={1.25}
              absoluteStrokeWidth
            />
            Source code
          </Chip>
        </div>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="mt-8"
        >
          <Tabs.TabItem tabKey="description">Description</Tabs.TabItem>
          <Tabs.TabItem tabKey="playground">Playground</Tabs.TabItem>
          <Tabs.TabItem tabKey="examples">Examples</Tabs.TabItem>
          <Tabs.TabItem tabKey="block">Block</Tabs.TabItem>
        </Tabs>
      </div>
      <div className="content-container mt-8">
        <Tabs.TabContent tabKey="description" activeTab={activeTab}>
          <DescriptionTab />
        </Tabs.TabContent>
        <Tabs.TabContent tabKey="playground" activeTab={activeTab}>
          <PlaygroundTab />
        </Tabs.TabContent>
        <Tabs.TabContent tabKey="examples" activeTab={activeTab}>
          Examples
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
    <div className="max-w-[680px]">
      <Typography.Heading level={2} Component="h2">
        Kandinsky-2.2
      </Typography.Heading>
      <Typography.Paragraph Component="p">
        Kandinsky 2.2 brings substantial improvements upon its predecessor,
        Kandinsky 2.1, by introducing a new, more powerful image encoder -
        CLIP-ViT-G and the ControlNet support.
      </Typography.Paragraph>
      <Typography.Paragraph Component="p">
        The switch to CLIP-ViT-G as the image encoder significantly increases
        the model’s capability to generate more aesthetic pictures and better
        understand text, thus enhancing the model’s overall performance.
      </Typography.Paragraph>
      <Typography.Paragraph Component="p">
        The addition of the ControlNet mechanism allows the model to effectively
        control the process of generating images. This leads to more accurate
        and visually appealing outputs and opens new possibilities for
        text-guided image manipulation.
      </Typography.Paragraph>
    </div>
  );
}

function PlaygroundTab() {
  return (
    <>
      <div className="grid pb-20 grid-cols-4  gap-4">
        <div className="col-span-2">
          <div className="flex w-full mb-4 gap-2">
            <Button size="M" variant="secondary">
              Reset Settings
            </Button>
            <Button size="M" variant="dark" className="flex-1">
              <Rocket
                className="mr-1 h-4"
                strokeWidth={1.5}
                absoluteStrokeWidth
              />
              Run Model
            </Button>
          </div>
          <Card>
            <Card.Head>
              <Card.Title>
                <Typography.Heading level={4}>Main fields</Typography.Heading>
              </Card.Title>
              <Card.Description>
                Required fields for start model
              </Card.Description>
            </Card.Head>
            <Card.Content className="flex flex-col gap-4">
              <TextField label="Prompt" required placeholder="Prompt" />
              <TextField label="Field 2" placeholder="test" />
              <TextField
                label="Error Field"
                error
                errorMessage="Some error inside field"
                placeholder="test"
              />
            </Card.Content>
          </Card>
          <Card className="mt-4">
            <Card.Head>
              <Card.Title>
                <Typography.Heading level={4}>
                  Advanced Settings
                </Typography.Heading>
              </Card.Title>
            </Card.Head>
            <Card.Content className="flex flex-col gap-4">
              <TextField
                label="Negative prompt"
                placeholder="Negative prompt"
              />
              <TextField
                label="Steps"
                required
                placeholder="Steps"
                value="12"
              />
              <TextField label="Max width" required value="1920" />
              <TextField label="Max height" required value="1920" />
              <Select>
                <div>
                  <label className="text-sm mb-1 block font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Output format
                  </label>
                  <SelectTrigger>
                    <SelectValue placeholder="Output format" />
                  </SelectTrigger>
                </div>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="png">png</SelectItem>
                    <SelectItem value="banana">jpg</SelectItem>
                    <SelectItem value="blueberry">webp</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <TextField label="Material strength" required value="1920" />
              <TextField label="Seed" />
            </Card.Content>
          </Card>
        </div>
        <div className="sticky top-4 self-start col-span-2">
          <div className="overflow-hidden w-full rounded-lg relative">
            <img
              className="w-full"
              src="https://replicate.delivery/pbxt/Lca3IEjcKoJBBVS6ajROkK37sDzPsmjYxIcFzxPZp65wZzTE/out-0.png"
            />
            <Badge className="absolute top-2 right-2">Output</Badge>
          </div>
          <div className="mt-2 flex gap-2">
            <Button>
              Download image <Download className="ml-1 inline w-4" />
            </Button>
            <Button variant="secondary">
              Share <Share2 className="ml-1 inline w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
