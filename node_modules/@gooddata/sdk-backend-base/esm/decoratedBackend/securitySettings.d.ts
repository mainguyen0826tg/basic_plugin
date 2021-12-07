import { ISecuritySettingsService, ValidationContext } from "@gooddata/sdk-backend-spi";
/**
 * @alpha
 */
export declare abstract class DecoratedSecuritySettingsService implements ISecuritySettingsService {
    private decorated;
    scope: string;
    protected constructor(decorated: ISecuritySettingsService);
    isUrlValid(url: string, context: ValidationContext): Promise<boolean>;
    isDashboardPluginUrlValid(url: string, workspace: string): Promise<boolean>;
}
//# sourceMappingURL=securitySettings.d.ts.map