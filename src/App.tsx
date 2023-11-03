import { For } from "solid-js";
import { createStore } from "solid-js/store";
import type { State } from "./types";
import { GlobalContext } from "./context";
import { SongsResource } from "./components/SongsResource";

export const App = () => {
  const [state, setState] = createStore<State>({
    songs: [],
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      <div>
        <SongsResource />

        <div style={{ "margin-top": "2rem", "margin-bottom": "1rem" }}>
          Songs rendered from state
        </div>
        <For each={state.songs}>
          {(song) => (
            <div>
              {song.name} - {song.rating}
            </div>
          )}
        </For>
      </div>
    </GlobalContext.Provider>
  );
};
