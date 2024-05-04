import { Badge, Breadcrumb, Card, Typography } from "@/shared/components";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/Breadcrumb";
import { CommonLayout } from "@/widgets/common-layout";
import Link from "next/link";

export default function Page() {
  return (
    <CommonLayout>
      <Breadcrumb className="content-container mt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Models</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-5 gap-8 content-container grid grid-cols-4">
        <Card className="col-span-1">
          <Card.Head>
            <Card.Title>Filters</Card.Title>
          </Card.Head>
          <Card.Content></Card.Content>
        </Card>
        <div className="col-span-3 gap-4 grid grid-cols-3">
          <ModelCard />
          <ModelCard />
          <ModelCard />
          <ModelCard />
          <ModelCard />
        </div>
      </div>
    </CommonLayout>
  );
}

function ModelCard() {
  return (
    <div>
      <Link href="/models/png-maker-ai">
          <Card className="py-2 px-4">
            <div className="flex gap-2 items-center">
              <img
                className="w-10 h-10"
                src="https://pngmaker.ai/_next/static/media/logo.4d883e09.webp"
              />
              <div className="">
                <Typography.Paragraph className="m-0" variant={2}>
                  PNGMaker AI
                </Typography.Paragraph>
                <div className="flex gap-1 mt-1">
                  <Badge variant="secondary">Images</Badge>
                  <Badge variant="secondary">Design</Badge>
                </div>
              </div>
            </div>
          </Card>
      </Link>
    </div>
  );
}
