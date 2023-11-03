import type { State } from "./types";

export const fetchSongs = (): Promise<State["songs"]> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { name: "Never Gonna Give You Up", rating: 8 },
          { name: "Windows Errors Remix [10 Hours]", rating: 10 },
          { name: "Something else", rating: 1 },
        ]),
      1000,
    );
  });
};
