import type { Track } from "../../item/track/base";
import type { TrackStream } from "../../item/track/stream/base";

export type ComputeTimecode = (timecode: number) => number;

export interface PlayerTrack {
    /**
     * Information on the track being played.
     */
    info: Track;

    /**
     * Stream that is currently being streamed by the player.
     */
    stream: TrackStream;

    /**
     * The current position of this track in milliseconds.
     */
    position: number;

    /**
     * Seek to a new position in this track.
     *
     * @param timecode The timecode to seek to.
     */
    seek(timecode: number): Promise<void>;

    /**
     * Seek to a new position in this track.
     *
     * @param timecode Method used to compute the timecode using the current position.
     */
    seek(timecode: ComputeTimecode): Promise<void>;
}