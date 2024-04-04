import React, { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type TChildren = {
  children: ReactNode;
};

export type TOnClick = {
  onClick:
    | (<T extends unknown>(arg: T) => void)
    | ((e: React.MouseEvent<HTMLElement>) => void);
};

export type TUser = {
  id: number;
  name: string;
  email?: string | null;
  profileImageSource?: string | null;
  image_source?: string | null;
};

export type TFolder = {
  id: number;
  created_at?: string;
  name?: string;
  user_id?: number;
  favorite?: boolean;
  link: { count: number };
};

export type TSampleFolder = {
  id: number;
  name?: string;
  owner: TUser;
  links: TLink[];
  count: number;
};

export type TLink = {
  id: number;
  created_at?: string;
  createdAt?: string;
  updated_at?: string;
  url: string;
  title?: string;
  description?: string;
  image_source?: string;
  imageSource?: string;
  folder_id?: number;
};

export type TCard = {
  id: number;
  cardImage?: string;
  cardTime: {
    timeDifference: string;
    createdDateString: string;
  };
  cardDescription?: string;
  cardUrl: string;
};

export type TTag = TChildren & {
  id: number;
  name: string;
  isSelected: boolean;
  onClick: (id: number, name: string) => void;
};

export type TLoginInput = {
  variant: "text" | "password";
  error: FieldError;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
};

export type TAvatar = {
  avatarImage?: string;
  width?: number;
  height?: number;
};

export type TUserProfile = {
  userInfo: TUser;
  className?: string;
  size?: number;
};

export type TButton = TChildren & {
  className?: string;
  variant: "gradient" | "icon" | "text";
  onClick?:
    | (<T extends unknown>(arg: T) => void)
    | ((e: React.MouseEvent<HTMLElement>) => void);
};
