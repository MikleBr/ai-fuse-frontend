import ReactFlow, {
  Background,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";
import { TestNode } from "@/shared/ReactFlowNodes/TestNode";
import { NodeData } from "@/shared/ReactFlowNodes/types";
import { useCallback } from "react";
import { getReversedGraph } from "@/shared/ReactFlowNodes/formatGraph";
import { GraphContextProvider } from "@/shared/ReactFlowNodes/GraphContext";
import { cloneDeep } from "lodash";
import example from "/public/Pngmaker.png";

const initialNodes: Node<NodeData>[] = [
  {
    id: "midjourney-node",
    data: {
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
    type: "custom",
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "combine-images",
    data: {
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
    type: "custom",
    position: {
      x: 450,
      y: 250,
    },
  },
  {
    id: "remove-bg-node",
    data: {
      meta: {
        title: "Удалить фон",
      },
      inputs: [
        {
          id: "remove-bg-node-input",
          label: "Изображения",
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
    type: "custom",
    position: {
      x: 900,
      y: 100,
    },
  },
];

const nodeTypes = {
  custom: TestNode,
};

export function Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const runBlock = (resultType: NodeData["result"]["type"]) => () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (resultType === "image") {
          res({
            image: example.src,
          });
        }
        if (resultType === "images") {
          res({
            images: [example.src, example.src, example.src, example.src],
          });
        }
        if (resultType === "text") {
          res({
            text: "Hello, world!",
          });
        }

        rej("");
      }, 2000);
    });
  };

  const nodePending = (node: Node<NodeData>, inputData: any) => {
    setNodes((nodes) => {
      const updatedNodeIndex = nodes.findIndex((nd) => nd.id === node.id);
      if (updatedNodeIndex !== -1) {
        const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
        updatedNode.data.status = "pending";
        const newNodes = [...nodes];
        newNodes[updatedNodeIndex] = updatedNode;
        return newNodes;
      }
      return nodes;
    });
  };
  const nodeSuccess = (node: Node<NodeData>, data: any) => {
    setNodes((nodes) => {
      const updatedNodeIndex = nodes.findIndex((nd) => nd.id === node.id);
      if (updatedNodeIndex !== -1) {
        const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
        updatedNode.data.result.data = data;

        updatedNode.data.status = "success";
        const newNodes = [...nodes];
        newNodes[updatedNodeIndex] = updatedNode;
        return newNodes;
      }
      return nodes;
    });
  };
  const nodeError = (node: Node<NodeData>, error: unknown) => {
    setNodes((nodes) => {
      const updatedNodeIndex = nodes.findIndex((nd) => nd.id === node.id);
      if (updatedNodeIndex !== -1) {
        const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
        updatedNode.data.status = "error";
        const newNodes = [...nodes];
        newNodes[updatedNodeIndex] = updatedNode;
        return newNodes;
      }
      return nodes;
    });
  };

  const onRunNode = (nodeId: string) => {
    const { graph: reversedGraph } = getReversedGraph(nodes, edges);

    const runNode = async (nodeId: string): Promise<any> => {
      const node = nodes.find((node) => node.id === nodeId);
      if (!node) throw Error("Хуевый у тебя граф получился");
      // FIXME какая епта || ''
      const func = runBlock(node.data.result.type);

      const nodeDeps = reversedGraph[nodeId];

      const depsResultPromise = nodeDeps.map((nodeId) => {
        return runNode(nodeId);
      });

      const depsResult = await Promise.all(depsResultPromise);

      nodePending(node, depsResult);

      try {
        const nodeResult = await func();
        nodeSuccess(node, nodeResult);
        return nodeResult;
      } catch (error) {
        nodeError(node, error);
      }
    };

    runNode(nodeId);
  };

  return (
    <GraphContextProvider runNode={onRunNode}>
      <div className="w-screen h-screen pt-12 flex relative">
        <Toolbar />
        <Sidebar />
        <div className="bg-stone-100 h-full flex-1">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
            maxZoom={1}
            edgesFocusable
            edgesUpdatable
            nodesFocusable
            fitView
            snapToGrid
          >
            <Background />
          </ReactFlow>
        </div>
      </div>
    </GraphContextProvider>
  );
}
