import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import { IInsight, ObjRef } from "@gooddata/sdk-model";
/**
 * @internal
 */
export interface IInsightDataLoader {
    /**
     * Obtains an insight specified by a ref.
     * @param backend - the {@link IAnalyticalBackend} instance to use to communicate with the backend
     * @param ref - the ref of the insight to obtain
     */
    getInsight(backend: IAnalyticalBackend, ref: ObjRef): Promise<IInsight>;
}
/**
 * @internal
 */
export declare const insightDataLoaderFactory: import("./types").IDataLoaderFactory<IInsightDataLoader>;
//# sourceMappingURL=InsightDataLoader.d.ts.map