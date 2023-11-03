import { Component, For } from "solid-js";
import { State } from "../types";

export const Songs: Component<{ songs?: State["songs"] }> = (props) => (
	<For each={props.songs}>
		{(song) => (
			<div>
				{song.name} - {song.rating}
			</div>
		)}
	</For>
);
