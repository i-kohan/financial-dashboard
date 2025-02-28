import React from "react";

import { TabsContext, TTab } from "./TabsContext";

interface IProps<T> {
  readonly onTabChange: (tab: T) => void;
  readonly selected: T;
  readonly children?: React.ReactNode;
}

export const Tabs = <T extends TTab>({
  children,
  selected,
  onTabChange,
}: IProps<T>) => {
  return (
    <TabsContext.Provider
      value={{
        selected,
        setSelected: (tab) => onTabChange(tab as T),
      }}
    >
      <div className="relative pb-2">
        <div className="flex space-x-6">{children}</div>
        <div className="border-catskill-white absolute -bottom-1 left-0 w-full border-b"></div>
      </div>
    </TabsContext.Provider>
  );
};
