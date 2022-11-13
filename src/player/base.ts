import type { StreamableTrack } from "../item/track/streamable";

export interface Player {
    /**
     * Plays the specified track
     *
     * @param track    The track to start playing, passing null will stop the current track and return false
     * @param replace  Whether to replace the current playing track, if any.
     * @return `true` if the track was started.
     */
    play(track: StreamableTrack | null, replace?: boolean): Promise<void>;

    /**
     * Stop playing the current track
     * @return `true` if a track was stopped.
     */
    stop(): Promise<boolean>
}
