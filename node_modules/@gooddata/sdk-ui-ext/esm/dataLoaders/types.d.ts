/**
 * @internal
 */
export interface IDataLoaderFactory<TLoader> {
    forWorkspace(workspace: string): TLoader;
    reset: () => void;
}
//# sourceMappingURL=types.d.ts.map