import { NodeWrapper } from "../NodeWrapper";
import { Handle, Position, useNodeId, useReactFlow, useStore } from "reactflow";
import clsx from "clsx";
import cloneDeep from "lodash/cloneDeep";
import { useEffect, useState } from "react";
import { TextField } from "@/shared/components";

export function InputNode({data}: any) {
  const nodeId = useNodeId();
  const [inputValue, setInputValue] = useState("");
  const { setNodes } = useReactFlow();

  const sourceEdge = useStore((store) =>
    store.edges.find((edge) => edge.source === nodeId)
  );

  useEffect(() => {
    setNodes((nodes) => {
      const updatedNodeIndex = nodes.findIndex((node) => node.id === nodeId);
      if (updatedNodeIndex !== -1) {
        const updatedNode = cloneDeep(nodes[updatedNodeIndex]);
        updatedNode.data.value = inputValue;
        const newNodes = [...nodes];
        newNodes[updatedNodeIndex] = updatedNode;
        return newNodes;
      }
      return nodes;
    });
  }, [sourceEdge, inputValue]);

  return (
    <NodeWrapper status={data.status} title="Prompt Input">
      <div className="relative py-4 px-4">
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Some prompt"
        />
      </div>

      <div className="px-4 py-2 bg-stone-200 text-stone-800 w-full flex justify-center">
        Outputs
      </div>
      <div className="relative py-4 flex justify-end">
        <Handle
          type="source"
          onConnect={(connect) => console.log(connect)}
          className={clsx(!!sourceEdge && "!bg-green-400")}
          position={Position.Right}
        />
        <div className="mr-4">Prompt</div>
      </div>
    </NodeWrapper>
  );
}
