import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

export type MyInfo = {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

type MyInfoContextValue = {
  myInfo: MyInfo;
  setMyInfo: (value: MyInfo) => void;
};

const MyInfoContext = createContext<MyInfoContextValue>({
  myInfo: {
    id: 0,
    created_at: "",
    name: "",
    image_source: "",
    email: "",
    auth_id: "",
  },
  setMyInfo: () => {},
});

export const MyInfoProvider = ({ children }: { children: ReactNode }) => {
  const [myInfo, setMyInfo] = useState({
    id: 0,
    created_at: "",
    name: "",
    image_source: "",
    email: "",
    auth_id: "",
  });

  const value = useMemo(() => ({ myInfo, setMyInfo }), [myInfo]);

  return (
    <MyInfoContext.Provider value={value}>{children}</MyInfoContext.Provider>
  );
};

export const useMyInfo = () => {
  const context = useContext(MyInfoContext);
  if (!context) {
    throw new Error("");
  }
  return context;
};
