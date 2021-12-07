import { IInsightDefinition } from "@gooddata/sdk-model";
/**
 * This function ignores the titles of simple measures.
 *
 * For simple measures, their titles are removed.
 * For adhoc or non-simple measures, their titles are left intact.
 *
 * @param insight - insight or insight definition that must be processed.
 * @returns a copy of insight modified bucket items
 *
 * @internal
 */
export declare function ignoreTitlesForSimpleMeasures<T extends IInsightDefinition>(insight: T): T;
//# sourceMappingURL=ignoreTitlesForSimpleMeasures.d.ts.map