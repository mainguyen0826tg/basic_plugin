import { IAnalyticalBackend, IUserWorkspaceSettings } from "@gooddata/sdk-backend-spi";
/**
 * @internal
 */
export interface IUserWorkspaceSettingsDataLoader {
    /**
     * Obtains the color palette for the current workspace.
     * @param backend - the {@link IAnalyticalBackend} instance to use to communicate with the backend
     */
    getUserWorkspaceSettings(backend: IAnalyticalBackend): Promise<IUserWorkspaceSettings>;
}
/**
 * @internal
 */
export declare const userWorkspaceSettingsDataLoaderFactory: import("./types").IDataLoaderFactory<IUserWorkspaceSettingsDataLoader>;
//# sourceMappingURL=UserWorkspaceSettingsDataLoader.d.ts.map