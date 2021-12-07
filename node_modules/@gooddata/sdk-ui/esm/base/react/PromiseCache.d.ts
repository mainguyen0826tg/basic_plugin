/**
 * Simple promise cache, that allows promise canceling
 * After reset() call, it cancels pending promises
 * @internal
 */
export declare class PromiseCache<TParams, TResult, TError = any> {
    private readonly handler;
    private readonly getCacheKey;
    private promises;
    private params;
    private results;
    private errors;
    constructor(handler: (params: TParams) => Promise<TResult>, getCacheKey?: (params: TParams) => string);
    getResult: (params: TParams) => TResult | undefined;
    getError: (params: TParams) => TError | undefined;
    getPromise: (params: TParams) => Promise<TResult> | undefined;
    reset: () => void;
    cancel: (params: TParams) => void;
    load: (params: TParams) => Promise<TResult>;
}
//# sourceMappingURL=PromiseCache.d.ts.map