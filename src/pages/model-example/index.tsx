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
import { Bookmark, Bot, Github, Heart, Network, Rocket } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("playground");

  return (
    <>
      <header className="w-full h-16 border-b border-b-muted">
        <div className="content-container flex justify-between h-full items-center">
          <nav className="flex items-center gap-6 h-full">
            <div className="cursor-pointer text-foreground transition-colors hover:text-foreground">
              Models
            </div>
            <div className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </div>
            <div className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
              Docs
            </div>
          </nav>
          <div>
            <TextField placeholder="Search models..." />
            <div></div>
          </div>
        </div>
      </header>
      <div>
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
                <BreadcrumbPage>iordcalin/material-transfer</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="w-full flex align-start justify-between mt-5">
            <div className="flex flex-col">
              <Typography.Heading className="m-0" level={1}>
                <Bot
                  className="inline h-8 w-8 mb-1"
                  strokeWidth={1.7}
                  absoluteStrokeWidth
                />{" "}
                iordcalin/material-transfer
              </Typography.Heading>
              <Typography.Paragraph>
                Transfer a material from an image to a subject
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
          <div className="flex items-center mt-2 gap-2">
            <Chip>Design</Chip>
            <Chip variant="secondary">Images</Chip>
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
            <Tabs.TabItem tabKey="playground">Playground</Tabs.TabItem>
            <Tabs.TabItem tabKey="examples">Examples</Tabs.TabItem>
            <Tabs.TabItem tabKey="block">Block</Tabs.TabItem>
          </Tabs>
        </div>
        <div className="content-container mt-8">
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
      </div>
    </>
  );
}

function PlaygroundTab() {
  return (
    <>
      <div className="grid pb-20 grid-cols-3 gap-4">
        <div className="col-span-1">
          <div className="flex w-full mb-2 gap-2">
            <Button size="M" variant="secondary">
              Reset Settings
            </Button>
            <Button size="M" className="flex-1">
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
        <div className="col-span-2 relative rounded-lg bg-muted/50 h-[calc(100vh-120px)]">
          <Badge className="absolute top-2 right-2">Output</Badge>
        </div>
      </div>
    </>
  );
}
