import clsx from "clsx";
import React from "react";

import { TabsContext, TTab } from "./Tabs/TabsContext";

interface IProps<T> {
  tab: T;
  children: React.ReactNode;
}

export const Tab = <T extends TTab>({ tab, children }: IProps<T>) => {
  const { setSelected, selected } = React.useContext(TabsContext);
  const isSelected = selected === tab;

  return (
    <div className="relative">
      <a
        className={clsx(
          "text-body-sm relative cursor-pointer px-1 pb-1 transition-all sm:px-4 sm:pb-2",
          isSelected ? "text-black" : "text-light-blue",
        )}
        onClick={() => setSelected(tab)}
      >
        {children}
      </a>

      {isSelected && (
        <div className="absolute -bottom-3 left-1/2 h-[5px] w-full -translate-x-1/2 rounded-2xl bg-black"></div>
      )}
    </div>
  );
};
