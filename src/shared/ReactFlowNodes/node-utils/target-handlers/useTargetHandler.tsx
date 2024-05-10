import { useEffect, useState } from "react";
import { useStore } from "reactflow";

export function useTargetHandler(handlerId: string) {
  const [isConnected, setIsConnected] = useState(false);

  // const getNodes = useStore((store) => store.getNodes);

  const edge = useStore((state) =>
    state.edges.find((edg) => edg.targetHandle === handlerId)
  );

  useEffect(() => {
    if (edge) {
      setIsConnected(true);
      // const nodes = getNodes();
      // const sourceNode = nodes.find((node) => node.id === edge.source);
      // console.log("🚀 ~ useEffect ~ sourceNode:", sourceNode);
    } else {
      setIsConnected(false);
    }
  }, [edge]);

  return { isConnected };
}
