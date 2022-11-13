/** 
 * An exception with a friendly message. 
 */
export class FriendlyException extends Error {
    readonly severity: FriendlyExceptionSeverity;

    /**
     * @param friendlyMessage A message which is understandable to end-users
     * @param severity        Severity of the exception
     * @param cause           The cause of the exception with technical details
     */
    constructor(
        message: string,
        severity: FriendlyExceptionSeverity = FriendlyExceptionSeverity.Common,
        cause?: Error
    ) {
        super(message);

        this.severity = severity;
        this.cause = cause;
    }

    get name() {
        return "FriendlyException";
    }
}

/**
 * Severity levels for FriendlyException
 */
export enum FriendlyExceptionSeverity {
    /**
     * The cause is known and expected, indicates that there is nothing wrong with the library itself.
     */
    Common,

    /**
     * The cause might not be exactly known but is possibly caused by outside factors.
     * For example, when an outside service responds in a format that we do not expect.
     */
    Suspicious,

    /**
     * If the probable cause is an issue with the library or when there is no way to tell what the cause might be.
     * This is the default level and other levels are used in cases where the thrower has more in-depth knowledge
     * about the error.
     */
    Fault
}
