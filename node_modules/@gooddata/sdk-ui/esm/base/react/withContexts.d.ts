/// <reference types="react" />
import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
/**
 * Injects backend and workspace provided by BackendProvider & WorkspaceProvider to a component
 * @internal
 */
export declare function withContexts<T extends {
    backend?: IAnalyticalBackend;
    workspace?: string;
}>(Chart: React.ComponentType<T>): React.ComponentType<T>;
//# sourceMappingURL=withContexts.d.ts.map