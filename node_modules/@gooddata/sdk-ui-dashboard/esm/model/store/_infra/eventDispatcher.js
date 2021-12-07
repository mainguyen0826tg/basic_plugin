// (C) 2021 GoodData Corporation
import { put } from "redux-saga/effects";
/**
 * Creates an effect which will dispatch the provided event. Yield whatever this function returns
 *
 * @param event - event to dispatch
 */
export function dispatchDashboardEvent(event) {
    return put(event);
}
//# sourceMappingURL=eventDispatcher.js.map