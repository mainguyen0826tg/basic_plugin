// (C) 2019-2021 GoodData Corporation
/**
 * Safely serializes an object preventing errors that JSON.stringify might throw.
 *
 * @param obj - object to serialize
 *
 * @internal
 */
export function safeSerialize(obj) {
    try {
        return JSON.stringify(obj);
    }
    catch (_a) {
        return "";
    }
}
//# sourceMappingURL=safeSerialize.js.map