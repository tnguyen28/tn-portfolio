import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import * as models from "../models/index";
export const store = init({
  models,
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<any>;
export type RootState = RematchRootState<any>;
