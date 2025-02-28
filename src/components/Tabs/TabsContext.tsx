import React from 'react';

export type TTab = string | number | null;

export interface ITabContext {
  readonly selected: TTab;
  readonly setSelected: (tab: TTab) => void;
}

export const TabsContext = React.createContext<ITabContext>({
  selected: '',
  setSelected: () => {
    /* empty */
  },
});
