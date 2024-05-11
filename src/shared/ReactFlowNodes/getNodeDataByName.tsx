// По плану это должно с бека приходить

import { NodeData } from "./types";

const nodes: Record<string, NodeData> = {
  'midjourney-prompt-gen': {
    meta: {
      title: "MDJRN Prompt gen",
    },
    inputs: [
      {
        label: "Промпт",
        type: "text",
      },
    ],
    outputs: [
      {
        label: "Промпт",
        type: "text",
      },
    ],
    params: [
      {
        label: "Исключающий промпт",
        type: "text",
      },
      {
        label: "Temperature",
        type: "text",
      },
      {
        label: "Seed",
        type: "text",
      },
    ],
    result: {
      type: "text",
    },
  },
  midjourney: {
    meta: {
      title: "Midjourney",
    },
    inputs: [
      {
        label: "Промпт",
        type: "text",
      },
      {
        label: "Начальное изображение",
        type: "image",
      },
    ],
    outputs: [
      {
        label: "Изображение 1",
        type: "image",
      },
      {
        label: "Изображение 2",
        type: "image",
      },
      {
        label: "Изображение 3",
        type: "image",
      },
      {
        label: "Изображение 4",
        type: "image",
      },
    ],
    params: [
      {
        label: "Исключающий промпт",
        type: "text",
      },
      {
        label: "Temperature",
        type: "text",
      },
      {
        label: "Seed",
        type: "text",
      },
    ],
    result: {
      type: "images",
    },
  },
  "combine-images": {
    meta: {
      title: "Объединить изображения",
    },
    inputs: [
      {
        label: "Изображения",
        type: "images",
      },
    ],
    outputs: [
      {
        label: "Изображение",
        type: "image",
      },
    ],
    params: [],
    result: {
      type: "image",
    },
  },
  "remove-bg": {
    meta: {
      title: "Удалить фон",
    },
    inputs: [
      {
        id: "remove-bg-node-input",
        label: "Изображение",
        type: "image",
      },
    ],
    outputs: [
      {
        id: "remove-bg-node-output",
        label: "Изображение",
        type: "image",
      },
    ],
    params: [],
    result: {
      type: "image",
    },
  },
};

export function getNodeDataByName(name: string){
    return nodes[name] || null
}