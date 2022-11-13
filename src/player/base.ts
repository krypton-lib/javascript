import type { StreamableTrack } from "../item/track/streamable";
import type { PlayerTrack } from "./track/base";
import type { TypedEmitter } from "tiny-typed-emitter";
import type { Track } from "../item/track/base";
import type { PlayerTrackEndReason } from "./track/end_reason";
import type { FriendlyException } from "../tools/friendly_exception";

export interface Player extends TypedEmitter<PlayerEvents> {
    /**
     * Whether this player has been paused.
     */
    isPaused: boolean;

    /**
     * The current track being played.
     */
    track: PlayerTrack | null;

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

export interface PlayerEvents {
    /** Emitted when a track has been started. */
    trackStart:  (track: PlayerTrack) => void;
    /** Emitted when the wait threshold was exceeded for this track. */
    trackStuck:  (track: PlayerTrack, threshold: number) => void;
    /** Emitted when the current track has ended. */
    trackEnd:    (track: Track, reason: PlayerTrackEndReason) => void;
    /** Emitted when an exception occurs in an audio track that causes it to halt. */
    trackFailed: (track: Track, exception: FriendlyException) => void;

    /** Emitted when playback was paused. */
    playbackPaused:  (track: PlayerTrack | null) => void;
    /** Emitted when playback was resumed. */
    playbackResumed: (track: PlayerTrack | null) => void;
}
