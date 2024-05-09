import {
  Button,
  Card,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components";
import { ListFilter } from "lucide-react";

type FiltersProps = {
    className?: string;
};

export function Filters({className}: FiltersProps) {
  return (
    <Card className={className}>
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
              <SelectItem value="text2image">Текст в изображение</SelectItem>
              <SelectItem value="text2video">Текст в видео</SelectItem>
              <SelectItem value="text23d">Текст в 3D</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Изображение</SelectLabel>
              <SelectItem value="image2text">Изображение в текст</SelectItem>
              <SelectItem value="image2image">
                Изображение в изображение
              </SelectItem>
              <SelectItem value="image2video">Изображение в видео</SelectItem>
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
              <SelectItem value="text2image">Текст в изображение</SelectItem>
              <SelectItem value="text2video">Текст в видео</SelectItem>
              <SelectItem value="text23d">Текст в 3D</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Изображение</SelectLabel>
              <SelectItem value="image2text">Изображение в текст</SelectItem>
              <SelectItem value="image2image">
                Изображение в изображение
              </SelectItem>
              <SelectItem value="image2video">Изображение в видео</SelectItem>
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
              <SelectItem value="text2image">Текст в изображение</SelectItem>
              <SelectItem value="text2video">Текст в видео</SelectItem>
              <SelectItem value="text23d">Текст в 3D</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Изображение</SelectLabel>
              <SelectItem value="image2text">Изображение в текст</SelectItem>
              <SelectItem value="image2image">
                Изображение в изображение
              </SelectItem>
              <SelectItem value="image2video">Изображение в видео</SelectItem>
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
  );
}
