import type { TrackStream } from "./base";

export interface TrackStreams {
    all: TrackStream[];
    select: TrackStreamSelector;
}

/**
 * Selects the best stream from a list.
 * 
 * @param streams list of streams to select from.
 * @return the best stream
 */
export type TrackStreamSelector = (streams: TrackStream[]) => TrackStream;

/**
 * Creates a TrackStreams object.
 * 
 * @param all A list of {@link TrackStream}
 * @param select Function that selects the best stream.
 * @returns A {@link TrackStreams} object
 */
export function createTrackStreams(all: TrackStream[], select: TrackStreamSelector): TrackStreams {
    return { all, select }
}
