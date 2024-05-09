import { useState } from "react";
import { Tabs, Breadcrumb } from "@/shared/components";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/Breadcrumb";
import { CommonLayout } from "@/widgets/common-layout";
import { CardHead } from "./CardHead";
import { CardActions } from "./CardActions";
import { DescriptionTab } from "./tabs/DescriptionTab";
import { PlaygroundTab } from "./tabs/PlaygroundTab";
import { ExamplesTab } from "./tabs/ExamplesTab";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../ssr";

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export function Page({}: PageProps) {
  const [activeTab, setActiveTab] = useState<string>("playground");

  return (
    <CommonLayout withBanner>
      <div className="w-full">
        <Breadcrumb className="mt-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Главная</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/models">Модели</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Midjourney</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="w-full flex align-start flex-col-reverse md:flex-row md:justify-between mt-5">
          <CardHead />
          <CardActions />
        </div>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          className="mt-5"
        >
          <Tabs.TabItem tabKey="overview">Обзор</Tabs.TabItem>
          <Tabs.TabItem tabKey="playground">Использование</Tabs.TabItem>
          <Tabs.TabItem tabKey="examples">Примеры</Tabs.TabItem>
          <Tabs.TabItem tabKey="reviews">Отзывы</Tabs.TabItem>
          <Tabs.TabItem tabKey="qa">Q&A</Tabs.TabItem>
          <Tabs.TabItem tabKey="alternatives">Похожее</Tabs.TabItem>
        </Tabs>
      </div>
      <div className="w-full mt-4 mb-8">
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
