import { ISecuritySettingsService, ValidationContext } from "@gooddata/sdk-backend-spi";
export declare class SecuritySettingsService implements ISecuritySettingsService {
    readonly scope: string;
    /**
     * Constructs a new SecuritySettingsService
     *
     * @param scope - ID of the scope. For now the backend does not support this and returns true for all calls.
     *  The plan is to support domain, workspace ID and user profile ID.
     */
    constructor(scope: string);
    isUrlValid: (url: string, context: ValidationContext) => Promise<boolean>;
    isDashboardPluginUrlValid: (url: string) => Promise<boolean>;
}
//# sourceMappingURL=securitySettings.d.ts.map