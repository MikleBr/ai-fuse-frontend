export enum ModelType {
    TEXT_TO_IMAGE = 'Текст в изображение',
    TEXT_TO_TEXT = 'Текст в текст',
    TexTEXT_TO_SPEECH = 'Текст в речь'
}

export type Model = {
  id: string;
  info: {
    name: string;
    creator?: string;
    logo: string;
    tags?: string[];
    professions?: string[];
    type?: ModelType;
    rating?: number;
  };
  description?: {
    content: string;
  };
  examples?: {};
  reviews?: {};
  similar?: {
    models: string[];
  };
};

export const modelMock: Model = {
    id: '1',
  info: {
    name: "Stable Diffusion XL",
    creator: "Stability.ai",
    logo: "https://forgeglobal.com/site/assets/files/13040/stability_ai-logo-500w.png",
    tags: ['Изображения', 'Дизайн', 'Фото', 'Генерация'],
    professions: ['Дизайн', 'SMM', 'Маркетинг', 'Копирайт'],
    rating: 4.97,
    type: ModelType.TEXT_TO_IMAGE
  },
  review: {
    content: "Some text",
  },
  examples: {},
  reviews: {},
  similar: {
    models: [],
  },
};
