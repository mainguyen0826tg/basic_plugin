declare global {
    interface Window {
        _gd_uuid: number;
    }
}
/**
 * Generate GUID for the object and set it as its '__infID' prop.
 *
 * @param obj - object to set guid to
 * @returns newly generated guid or already existing one on the object, '(Object)' for Object, '(Array)' for Array.
 *
 * @internal
 */
export declare function guidFor(obj: any): string;
//# sourceMappingURL=guid.d.ts.map