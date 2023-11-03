import { createResource, Suspense } from "solid-js";
import { fetchSongs } from "../fetch";
import { Songs } from "./Songs";
import { useGlobal } from "../context";
import { createResourceStorage } from "../createResourceStorage";

export const storeBackedSongs = () => {
  const [state, setState] = useGlobal();

  return createResourceStorage(
    () => state.songs,
    (value) => setState("songs", value ?? []),
  );
};

export const SongsResource = () => {
  const [songs, { mutate, refetch }] = createResource(fetchSongs, {
    storage: storeBackedSongs,
  });

  const deleteFirst = () => {
    mutate((s) => {
      if (!s) return s;
      const rest = [...s];
      rest.splice(0, 1);
      return rest;
    });
  };

  return (
    <div class="resource">
      <button type="button" onClick={refetch}>
        Refetch
      </button>
      <button type="button" onClick={deleteFirst}>
        Delete first
      </button>

      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ "margin-bottom": "1rem" }}>
          Songs rendered from resource:
        </div>
        <Songs songs={songs()} />
      </Suspense>
    </div>
  );
};
