import { ObjRef, ObjRefInScope } from "@gooddata/sdk-model";
/**
 * Converts reference into a format acceptable by the bear backend. URI references are left as-is, while
 * the identifier references have the object type (if any) stripped.
 *
 * @param ref - reference
 * @internal
 */
export declare function toBearRef(ref: ObjRef): ObjRef;
/**
 * Converts scoped reference into a format acceptable by the bear backend. URI references are left as-is, scoped
 * references are left as is, while the identifier references have the object type (if any) stripped.
 *
 * @param ref - reference
 * @internal
 */
export declare function toScopedBearRef(ref: ObjRefInScope): ObjRefInScope;
//# sourceMappingURL=ObjRefConverter.d.ts.map