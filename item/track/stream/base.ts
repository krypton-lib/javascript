import type { Format } from "../../../format/base";

/**
 * Track streams are used to fetch playback-specific data before a track executor
 * is allocated, improving performance and exception handling, e.g. no supported formats.
 */
export interface TrackStream {
    /**
     * The format of this stream, or `null` if it is unknown.
     * In case of the latter the created readable will be probed to find a
     * supported container.
     */
    format: Format | null;

    /**
     * Creates a readable stream used to consume audio data.
     * 
     * @return
     */
    createReadable(): ReadableStream<Uint8Array>;
}
