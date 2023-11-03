import { createContext, useContext } from "solid-js";
import { State } from "./types";
import { SetStoreFunction, Store } from "solid-js/store";

export const GlobalContext = createContext<[get: Store<State>, set: SetStoreFunction<State>]>([
  { songs: [] },
  () => {},
]);

export const useGlobal = () => useContext(GlobalContext);
