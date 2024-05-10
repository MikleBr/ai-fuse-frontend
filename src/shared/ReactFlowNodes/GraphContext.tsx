import { createContext, useContext } from "react";

type GraphContextParams = {
  runNode: (nodeId: string) => void;
};

const GraphContext = createContext<GraphContextParams | null>(null);

export const GraphContextProvider = ({
  runNode,
  children,
}: React.PropsWithChildren<GraphContextParams>) => {
  return (
    <GraphContext.Provider
      value={{
        runNode,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export function useGraphContext(){
    const context = useContext(GraphContext);

    if (!context) throw Error('Use useGraphContext inside GraphContextProvider')
    return context
}
