import { useEffect } from "react";
import { Handle, Position, useNodeId, useStore } from "reactflow";
import { NodeWrapper } from "../NodeWrapper";

export function BecomeImageNode({ data }: any) {
  const nodeId = useNodeId();

  const getNodes = useStore((store) => store.getNodes);

  const targetEdge = useStore((s) => s.edges.find((e) => e.target === nodeId));

  useEffect(() => {
    if (targetEdge) {
      const nodes = getNodes();
      const sourceNode = nodes.find((node) => node.id === targetEdge.source);
    }
  }, [targetEdge]);

  return (
    <NodeWrapper status={data.status} title="fofr/become-image">
      <div className="px-4 py-2 bg-stone-200 text-stone-800 w-full flex justify-center">
        Inputs
      </div>
      <div className="relative py-4">
        <Handle
          id="image"
          type="target"
          className="flex"
          position={Position.Left}
          isConnectable={true}
        />
        <div className="ml-4">Person Image</div>
      </div>
      <div className="relative py-4">
        <Handle
          id="imageToBecome"
          type="target"
          className="flex"
          isConnectable={true}
          position={Position.Left}
        />
        <div className="ml-4">Image to become</div>
      </div>
      <div className="px-4 py-2 bg-stone-200 text-stone-800 w-full flex justify-center">
        Outputs
      </div>
      <div className="relative py-4 flex justify-end">
        <Handle type="source" position={Position.Right} />
        <div className="mr-4">Image</div>
      </div>
      {/* {data.status === "pending" && <ProgressSpinner />} */}
      {data.result && (
        <>
          <div className="m-2 w-[420px] h-[300px] flex items-center justify-center aspect-video bg-stone-200">
            <img src={data.result} className="object-contain w-full h-full" />
          </div>
          <a href={data.result} className="ml-2 text-blue-400" target="_blank">
            Download
          </a>
        </>
      )}
    </NodeWrapper>
  );
}
