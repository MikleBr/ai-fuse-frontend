import { cn } from "@/shared/lib/utils";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";

type TabsContext = {
  activeTab?: string | null;
  setActiveTab?: (tab: string) => void;
};

const TabsContext = createContext<TabsContext | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);

  if (context === null) throw Error("Use useTabsContext inside TabsContext");

  return context;
}

const bgStylesByType = {
  block: "rounded-lg bg-muted text-muted-foreground p-1",
  underline: "",
};

const underlineStylesByType = {
  block: "h-8 bg-background shadow rounded-md top-1",
  underline: "h-0.5 bg-primary bottom-0",
};

type TabsProps = {
  activeTab?: string | null;
  type?: "block" | "underline";
  setActiveTab?: (tab: string) => void;
} & React.PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement>;

export function Tabs({
  children,
  className,
  activeTab,
  setActiveTab,
  type = "block",
  ...restProps
}: TabsProps) {
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeItemBackgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsRef.current && activeItemBackgroundRef.current) {
      const activeTabElement = tabsRef.current.querySelector(`#${activeTab}`);
      if (activeTabElement) {
        const { left: containerLeft } = tabsRef.current.getBoundingClientRect();
        const { width: tabWidth, left: tabLeft } =
          activeTabElement.getBoundingClientRect();

        activeItemBackgroundRef.current.style.left = `${
          tabLeft - containerLeft
        }px`;
        activeItemBackgroundRef.current.style.width = `${tabWidth}px`;
      }
    }
  }, [activeTab]);

  return (
    <TabsContext.Provider
      value={{
        activeTab: activeTab,
        setActiveTab: setActiveTab,
      }}
    >
      <div
        role="tablist"
        aria-label="Tabs panel"
        className={cn(
          "relative inline-flex h-10 items-center justify-center",
          bgStylesByType[type],
          className
        )}
        ref={tabsRef}
        {...restProps}
      >
        {children}
        <div
          ref={activeItemBackgroundRef}
          className={cn(
            "absolute z-0 transition-all duration-200",
            underlineStylesByType[type]
          )}
        />
      </div>
    </TabsContext.Provider>
  );
}

type TabItemProps = {
  tabKey?: string;
  activeClassName?: string;
} & React.PropsWithChildren &
  React.HTMLAttributes<HTMLButtonElement>;
function TabItem({
  tabKey,
  className,
  activeClassName,
  children,
  onClick,
  ...restProps
}: TabItemProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const onClickTab = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (tabKey) {
        setActiveTab?.(tabKey);
      }
    },
    [tabKey, setActiveTab]
  );

  const isActive = activeTab && activeTab === tabKey;

  return (
    <button
      onClick={onClickTab}
      role="tab"
      aria-selected={isActive ? "true" : "false"}
      aria-controls={tabKey}
      id={tabKey}
      data-state={isActive ? "active" : undefined}
      className={cn(
        "inline-flex relative z-[2] items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground",
        className,
        isActive && activeClassName
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

type TabContentProps = {
  tabKey: string;
  activeTab?: string;
} & React.PropsWithChildren;
function TabContent({ activeTab, tabKey, children }: TabContentProps) {
  if (activeTab === tabKey) {
    return children;
  }
  return null;
}

Tabs.TabItem = TabItem;
Tabs.TabContent = TabContent;
