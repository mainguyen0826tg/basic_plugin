import React from "react";
import ConfigurationPanelContent from "./ConfigurationPanelContent";
export default class GeoPushpinConfigurationPanel extends ConfigurationPanelContent {
    protected getControlProperties(): {
        groupNearbyPoints: boolean;
    };
    protected renderLegendSection(): React.ReactNode;
    protected renderViewportSection(): React.ReactElement;
    protected renderPointsSection(): React.ReactElement;
    protected isControlDisabled(): boolean;
    protected getBubbleClassNames(): string;
    protected renderConfigurationPanel(): React.ReactNode;
    protected renderColorSection(): React.ReactNode;
}
//# sourceMappingURL=GeoPushpinConfigurationPanel.d.ts.map