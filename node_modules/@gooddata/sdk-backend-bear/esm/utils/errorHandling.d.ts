import { ApiResponseError } from "@gooddata/api-client-bear";
import { AnalyticalBackendError } from "@gooddata/sdk-backend-spi";
export declare function isApiResponseError(error: unknown): error is ApiResponseError;
export declare function convertExecutionApiError(error: Error): AnalyticalBackendError;
export declare function convertApiError(error: Error): AnalyticalBackendError;
//# sourceMappingURL=errorHandling.d.ts.map