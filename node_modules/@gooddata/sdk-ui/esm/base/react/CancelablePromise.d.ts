/**
 * @internal
 */
export interface ICancelablePromise<T> {
    promise: Promise<T>;
    cancel: (reason?: string) => void;
    getHasFulfilled: () => boolean;
    getHasCanceled: () => boolean;
}
/**
 * @internal
 */
export declare class CancelError extends Error {
    reason?: string | undefined;
    constructor(reason?: string | undefined);
    /**
     * Underlying cause of this error (if any).
     */
    getReason(): string | undefined;
}
/**
 * @internal
 */
export declare const isCancelError: (obj: unknown) => obj is CancelError;
/**
 * !!! USE WITH CAUTION !!! Opinionated utility to wrap promise and make it cancelable
 *
 * - It does not stop original promise execution after canceling, it just does not care about it's results anymore
 * (for example when react component unmounts)
 * - This is not meant to be universal solution to make promises cancelable, it's not easily composable,
 * and it's not good to solve more complex async logic
 * - For cancelable async operations, there are much better abstractions than promises, for example Tasks,
 * however there is no standard for this in JavaScript
 *
 * @internal
 */
export declare function makeCancelable<T>(promise: Promise<T>): ICancelablePromise<T>;
//# sourceMappingURL=CancelablePromise.d.ts.map