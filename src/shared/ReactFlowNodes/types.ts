export type NodeData = {
  // Метаданные. Название, теги, инфо и прочее
  meta: {
    title: string;
    type?: "text2img" | "text2text" | "img2img" | "img2text";
  };
  // Входные данные
  // По умолчанию это будут инпуты, но при подключении
  // блока подходящего типа инпуты должны исчезать
  inputs: Input[];
  // Тоже входные данные, НО
  // - Их нельзя редактировать с помощью других блоков
  // - Может быть много
  // - Они не находятся явно в карточке
  // - Редактируются в модалке
  params: {
    type: string;
    label: string;
  }[];
  // Выходные данные
  // Same, как входные, но никуда не пропадают
  // Возможно их формат и количество будет меняться в зависимости от параметров внутри нейронки
  outputs: {
    id?: string;
    type: string;
    label: string;
  }[];
  // Чисто техническия хуета. Статусы нужны чтобы выводить в блоке данные о загрузке результата
  status?: "init" | "pending" | "success" | "error";
  // Какой результат будет в следствие удачного запуска ноды.
  // Изначально всегда undefined
  result: Result;
};

type CommonInput<Type extends string, Data extends object> = {
  id?: string;
  type: Type;
} & Data;

export type TextInput = CommonInput<
  "text",
  {
    label: string;
  }
>;

export type ImageInput = CommonInput<
  "image",
  {
    label: string;
  }
>;

export type ImagesInput = CommonInput<
  "images",
  {
    label: string;
    min?: number;
    max?: number;
  }
>;

export type Input = TextInput | ImageInput | ImagesInput;

type CommonResult<Type extends string, Data extends object> = {
  type: Type;
  data?: Data | undefined;
};

type Result =
  | CommonResult<"text", { text: string }>
  | CommonResult<"image", { image: string }>
  | CommonResult<"images", { images: string[] }>;
