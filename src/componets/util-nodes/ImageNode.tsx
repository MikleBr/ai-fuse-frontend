import { NodeWrapper } from "../NodeWrapper";
import { Handle, Position, useNodeId, useReactFlow, useStore } from "reactflow";
import clsx from "clsx";
import cloneDeep from "lodash/cloneDeep";
import { ChangeEventHandler, useEffect, useState } from "react";

export function ImageNode({data}: any) {
  const nodeId = useNodeId();
  const [inputValue, setInputValue] = useState<string | null>("");
  const { setNodes } = useReactFlow();

  const onChangeFile: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setInputValue(null)
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setInputValue(reader.result as string)
    };
  }

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
        <input type="file" accept="image/*" onChange={onChangeFile}/>
      </div>

      {inputValue && <img className="w-[420px] h-[310px] object-contain" src={inputValue} />}

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
        <div className="mr-4">Image</div>
      </div>
    </NodeWrapper>
  );
}
