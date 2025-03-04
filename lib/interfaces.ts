import type { SORT_ORDER } from "./constants";

export interface IFilterSorterColumn {
  key: string;
  label: string;
}
export interface ISort {
  key: string;
  order: SORT_ORDER;
}

export interface ICrew {
  name: string;
  reviewDate?: Date;
}

export interface IClinicalData {
  missionId: number;
  mission: string;
  date: Date;
  initialReviewedDate?: Date;
  initialReviewer: string;
  finalReviewedDate?: Date;
  finalReviewer: string;
  physician: string;
  baseName: string;
}

export interface IChat {
  id: string;
  message: string;
  date: Date;
  user: string;
}

export interface IUserInfo {
  UserId?: string;
  UserName: string;
  FullName: string;
  Role?: string;
  FirstName: string;
  LastName: string;
  Email: string;
  roles: Roles;
  settings: {
    theme: "light" | "dark";
  };
}

export type Roles = {
  ISADMIN: boolean;
  ISTP: boolean;
  ISAMC: boolean;
  ISREVIEWER: boolean;
};

export type Mission = {
  PCRID: number;
  EventID: number;
  EventUnitID: number;
  InitialReviewDate?: Date;
  FinalReviewDate?: Date;
  FinalReviewBy: string;
  InitialReviewBy: string;
  CrewID?: number;
  LastName: string;
  FirstName: string;
  PositionID?: number;
  Position: string;
  LoginID: string;
  EventDate?: Date;
  HasRead: boolean;
  DateNarrativeRead?: Date;
  InitialReviewerID: number;
  FinalReviewerID: number;
  EventNumber: string;
  BaseID: number;
  MissionBase: string;
  FuLLName?: string;
};
