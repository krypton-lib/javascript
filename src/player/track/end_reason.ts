/**
 * Reason why a track stopped playing.
 */
export enum PlayerTrackEndReason {
    /**
     * This means that the track itself emitted a terminator.
     * This is usually caused by the track reaching the end;
     * However, it will also be used when it ends due to an exception.
     */
    Finished,

    /**
     * An exception was caught during playback of the track.
     */
    Failed,

    /**
     * The track was stopped due to the player being stopped by either calling stop() or play(null).
     */
    Stopped,
    
    // TODO(playback) gino: this may not be how our track execution behaves, update accordingly later.
    /**
     * The track stopped playing because a new track started playing.
     * Note that with this reason, the old track will still play until either its buffer runs out or audio from
     * the new track is available.
     */
    Replaced,

    /**
     * The track was stopped because the cleanup threshold for the audio player was reached.
     *
     * This triggers when the amount of time passed since the last call to [Player.provide] has reached the threshold
     * specified in player configuration.
     *
     * This may also indicate either a leaked player which was discarded, but not stopped.
     */
    Cleanup
}

/**
 * Indicates whether a new track should be started on receiving this event.
 *
 * If this is false, either this event is already triggered because another track started (Replaced) or because the
 * player is stopped (Stopped, Cleanup).
 */
export const mayStartNext: Record<PlayerTrackEndReason, boolean> = {
    [PlayerTrackEndReason.Finished]: true,
    [PlayerTrackEndReason.Failed]:   true,
    [PlayerTrackEndReason.Stopped]:  false,
    [PlayerTrackEndReason.Replaced]: false,
    [PlayerTrackEndReason.Cleanup]:  false,
}
