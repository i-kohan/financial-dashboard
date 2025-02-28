import { ReactNode, useState } from "react";

import { UserProfile } from "./types";
import { UserContext } from "./UserContext";

const defaultUser: UserProfile = {
  avatar: "/assets/avatars/avatar.png",
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  password: "********",
  dateOfBirth: "1990-01-25",
  permanentAddress: "San Jose, California, USA",
  presentAddress: "San Jose, California, USA",
  postalCode: "45962",
  city: "San Jose",
  country: "USA",
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserProfile>(defaultUser);

  const updateUser = (updatedData: Partial<UserProfile>) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
