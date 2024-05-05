import {
  Badge,
  Breadcrumb,
  Button,
  Card,
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  Typography,
  SelectItem,
  SelectLabel,
  SelectValue,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/shared/components";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/Breadcrumb";
import { CommonLayout } from "@/widgets/common-layout";
import { Filter, ListFilter, Play } from "lucide-react";
import Link from "next/link";

export default function Page() {
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
        <Card className="col-span-1 self-start">
          <Card.Head>
            <Card.Title className="flex gap-1 items-center">
              <ListFilter className="w-5" /> Фильтры
            </Card.Title>
          </Card.Head>
          <Card.Content>
            <label className="text-sm block mb-1 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Тип преобразования
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Преобразование" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Текст</SelectLabel>
                  <SelectItem value="text2text">Текст в текст</SelectItem>
                  <SelectItem value="text2image">
                    Текст в изображение
                  </SelectItem>
                  <SelectItem value="text2video">Текст в видео</SelectItem>
                  <SelectItem value="text23d">Текст в 3D</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Изображение</SelectLabel>
                  <SelectItem value="image2text">
                    Изображение в текст
                  </SelectItem>
                  <SelectItem value="image2image">
                    Изображение в изображение
                  </SelectItem>
                  <SelectItem value="image2video">
                    Изображение в видео
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <label className="text-sm mb-1 block mt-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Сферы применения
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Сферы применения" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel></SelectLabel>
                  <SelectItem value="text2text">Текст в текст</SelectItem>
                  <SelectItem value="text2image">
                    Текст в изображение
                  </SelectItem>
                  <SelectItem value="text2video">Текст в видео</SelectItem>
                  <SelectItem value="text23d">Текст в 3D</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Изображение</SelectLabel>
                  <SelectItem value="image2text">
                    Изображение в текст
                  </SelectItem>
                  <SelectItem value="image2image">
                    Изображение в изображение
                  </SelectItem>
                  <SelectItem value="image2video">
                    Изображение в видео
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <label className="text-sm mb-1 block mt-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Задачи
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите задачи" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel></SelectLabel>
                  <SelectItem value="text2text">Текст в текст</SelectItem>
                  <SelectItem value="text2image">
                    Текст в изображение
                  </SelectItem>
                  <SelectItem value="text2video">Текст в видео</SelectItem>
                  <SelectItem value="text23d">Текст в 3D</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Изображение</SelectLabel>
                  <SelectItem value="image2text">
                    Изображение в текст
                  </SelectItem>
                  <SelectItem value="image2image">
                    Изображение в изображение
                  </SelectItem>
                  <SelectItem value="image2video">
                    Изображение в видео
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div>
              <Button className="w-full mt-4" variant="dark">
                Применить
              </Button>
            </div>
          </Card.Content>
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
      <Link href="/models/midjourney">
        <Card className="p-4">
          <div className="flex gap-3 items-center">
            <Card className="!rounded-md">
              <img
                className="w-16 h-16"
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/Midjourney_Emblem.svg"
              />
            </Card>
            <div className="flex flex-col">
              <Typography.Heading className="m-0" level={3}>
                Midjourney
              </Typography.Heading>
              <Typography.Caption className="text-muted-foreground">
                Текст в изображение
              </Typography.Caption>
            </div>
          </div>
          <div className="w-full flex gap-2 mt-4 ">
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button className="flex-1" variant="secondary">
                    Подробнее
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Узнать о нейросети</TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Button className="shrink-0" size="icon">
                    <Play />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Попробовать в песочнице
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </Card>
      </Link>
    </div>
  );
}
