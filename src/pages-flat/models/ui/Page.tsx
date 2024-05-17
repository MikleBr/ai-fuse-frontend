import { Breadcrumb } from "@/shared/components";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/Breadcrumb";
import { CommonLayout } from "@/widgets/common-layout";

import { Filters } from "./Filters";
import { TopFilters } from "./TopFilters";
import { ModelCard } from "./ModelCard";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../ssr";

export function Page({
  model,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <CommonLayout>
      <Breadcrumb className="mt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Модели</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-5 gap-8 grid grid-cols-4">
        <Filters className="col-span-1 self-start" />
        <div className="col-span-3 pb-10">
          <TopFilters className="mb-4" />
          <div className="gap-4 grid grid-cols-3">
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}
