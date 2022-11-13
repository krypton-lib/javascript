import { Item } from "../base";

export interface Track extends Item {
    /** This track's identifier. */
    id: string;

    /** Title of this track */
    title: string;

    /** List of authors for this track. */
    authors: string[];

    /** Duration of this track (in milliseconds), or null if it's unknown. */
    duration: number | null;

    /** Name of the source that created this track, or null if it's unknown. */
    source: string | null;

    /** URL of this track, or null if it's unknown. */
    url: string | null;
}
