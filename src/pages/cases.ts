import { Edge, MarkerType, Node } from "reactflow";

type CaseType = {
  nodes: Node[];
  edges: Edge[];
};

export const case1: CaseType = {
  nodes: [
    {
      id: "1",
      type: "chatGPT",
      data: {
        name: "ChatGPT",
        task: "Generate prompt",
        emoji: "🤖",
        status: "success",
      },
      position: { x: 0, y: 0 },
      dragHandle: ".custom-drag-handle",
    },
    {
      id: "2",
      type: "midjourney",
      data: {
        name: "Midjourney",
        task: "Create image",
        emoji: "✍🏾",
        status: "pending",
      },
      dragHandle: ".custom-drag-handle",
      position: { x: 0, y: 200 },
    },
    {
      id: "3",
      dragHandle: ".custom-drag-handle",
      type: "chatGPT",
      data: {
        name: "Gif Generator",
        task: "Generate Gif from image",
        emoji: "📹",
      },
      position: { x: 150, y: 400 },
    },
    {
      id: "4",
      dragHandle: ".custom-drag-handle",
      type: "chatGPT",
      data: {
        name: "Git generator Prompt",
        task: "Enter prompt for Git Generator",
        emoji: "📹",
      },
      position: { x: 250, y: 200 },
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      style: {
        strokeWidth: 2,
        stroke: "rgb(74, 222, 128)",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "rgb(74, 222, 128)",
      },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      animated: true,
      style: {
        strokeWidth: 2,
        stroke: "#c3c3c3",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#c3c3c3",
      },
    },
    {
      id: "e4-3",
      source: "4",
      target: "3",
      animated: true,
      style: {
        strokeWidth: 2,
        stroke: "#c3c3c3",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#c3c3c3",
      },
    },
  ],
};

export const case2: CaseType = {
  nodes: [
    {
      id: "case2_1",
      type: "custom",
      data: {
        name: "Input Photo",
        task: "Inserted photo",
        emoji: "🌃",
        status: "pending",
      },
      position: { x: 400, y: 0 },
      dragHandle: ".custom-drag-handle",
    },
    {
      id: "case2_2",
      type: "custom",
      data: {
        name: "Input Video",
        task: "Inserted video with face",
        emoji: "🌃",
        status: "pending",
      },
      position: { x: 650, y: 0 },
      dragHandle: ".custom-drag-handle",
    },
    {
      id: "case2_3",
      dragHandle: ".custom-drag-handle",
      type: "custom",
      data: {
        name: "Deepfake Generator",
        task: "Generate deepfake from video",
        emoji: "📹",
      },
      position: { x: 550, y: 200 },
    },
  ],
  edges: [
    {
      id: "case2_e1-2",
      source: "case2_1",
      target: "case2_3",
      style: {
        strokeWidth: 2,
        stroke: "rgb(74, 222, 128)",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "rgb(74, 222, 128)",
      },
    },
    {
      id: "case2_e2-3",
      source: "case2_2",
      target: "case2_3",
      animated: true,
      style: {
        strokeWidth: 2,
        stroke: "#c3c3c3",
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#c3c3c3",
      },
    },
  ],
};
