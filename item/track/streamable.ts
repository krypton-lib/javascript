import type { Track } from "./base";
import type { TrackStreams } from "./stream/steams";

export interface StreamableTrack extends Track {
    /**
     * Resolves a list of streams that can be used during playback of this track.
     * They do not have to be directly associated with the source of this track, e.g. track mirroring.
     *
     * Unless an exception occurs after this method is called, at-least one returned stream
     * will be consumed.
     *
     * @return the playable streams for this track.
     */
    resolveStreams(): Promise<TrackStreams>
}
