import { createContext, useContext } from "react";

import { UserProfile } from "./types";

interface UserContextType {
  user: UserProfile;
  updateUser: (updatedData: Partial<UserProfile>) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error("useUser must be used within a UserProvider");

  return context;
};
