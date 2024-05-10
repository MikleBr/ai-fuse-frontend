import { useEffect, useState } from "react";
import { useNodeId, useStore } from "reactflow";

export function useSourceHandler(handlerId: string) {
  const [isConnected, setIsConnected] = useState(false);

  const edge = useStore((state) =>
    state.edges.find((edg) => edg.sourceHandle === handlerId)
  );

  useEffect(() => {
    if (edge) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [edge]);

  return { isConnected };
}
