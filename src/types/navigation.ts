import { Job } from "./Job";

export type RootStackParamList = {
  Language: undefined;
  Category: undefined;
  Jobs: undefined;
  Detail: { job: Job }; 
};