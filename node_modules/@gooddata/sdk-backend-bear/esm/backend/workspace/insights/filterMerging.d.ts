import { ObjRef, IFilter } from "@gooddata/sdk-model";
/**
 * Appends a set of filters to an existing set making sure that all the filters compared regardless of their ObjRef types.
 * Uses {@link mergeFilters} internally, see its docs for details on the merging logic.
 *
 * @param originalFilters - original filter set
 * @param addedFilters - filters to append
 * @param objRefNormalizer - function that converts any ObjRef type to uri
 */
export declare function appendFilters(originalFilters: IFilter[], addedFilters: IFilter[], objRefNormalizer: (refs: ObjRef[]) => Promise<string[]>): Promise<IFilter[]>;
//# sourceMappingURL=filterMerging.d.ts.map