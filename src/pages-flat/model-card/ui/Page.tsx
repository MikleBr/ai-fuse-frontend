import { useState } from 'react';
import { Tabs, Breadcrumb } from '@/shared/components';
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/components/Breadcrumb';
import { CommonLayout } from '@/widgets/common-layout';
import { CardHead } from './CardHead/CardHead';
import { DescriptionTab } from './tabs/DescriptionTab';
import { PlaygroundTab } from './tabs/PlaygroundTab';
import { ExamplesTab } from './tabs/ExamplesTab';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '../ssr';

type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export function Page({ model }: PageProps) {
  const { info, reviews, similar, examples, description } = model;
  const [activeTab, setActiveTab] = useState<string>('playground');

  return (
    <CommonLayout>
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
              <BreadcrumbPage>{info.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="align-start mt-5 flex w-full flex-col-reverse md:flex-row md:justify-between">
          <CardHead info={model.info} />
        </div>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          type="underline"
          className="ml-[-8px] mt-8 w-full justify-start overflow-hidden xl:ml-0"
        >
          <Tabs.TabItem className="text-lg" tabKey="playground">
            Использовать
          </Tabs.TabItem>
          {description && (
            <Tabs.TabItem className="text-lg" tabKey="description">
              Обзор
            </Tabs.TabItem>
          )}
          {examples && (
            <Tabs.TabItem className="text-lg" tabKey="examples">
              Примеры
            </Tabs.TabItem>
          )}
          {reviews && (
            <Tabs.TabItem className="text-lg" tabKey="reviews">
              Отзывы
            </Tabs.TabItem>
          )}
          {similar && (
            <Tabs.TabItem className="text-lg" tabKey="alternatives">
              Похожее
            </Tabs.TabItem>
          )}
        </Tabs>
      </div>
      <div className="mb-8 mt-6 w-full">
        <Tabs.TabContent tabKey="playground" activeTab={activeTab}>
          <PlaygroundTab />
        </Tabs.TabContent>
        {description && (
          <Tabs.TabContent tabKey="description" activeTab={activeTab}>
            <DescriptionTab />
          </Tabs.TabContent>
        )}
        {examples && (
          <Tabs.TabContent tabKey="examples" activeTab={activeTab}>
            <ExamplesTab />
          </Tabs.TabContent>
        )}
      </div>
    </CommonLayout>
  );
}
