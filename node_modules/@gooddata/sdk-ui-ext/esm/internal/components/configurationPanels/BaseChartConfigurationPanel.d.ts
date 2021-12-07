import React from "react";
import ConfigurationPanelContent, { IConfigurationPanelContentProps } from "./ConfigurationPanelContent";
import { IAxisProperties } from "../../interfaces/AxisType";
export default class BaseChartConfigurationPanel<T extends IConfigurationPanelContentProps = IConfigurationPanelContentProps> extends ConfigurationPanelContent<T> {
    protected renderCanvasSection(): React.ReactNode;
    protected renderConfigurationPanel(): React.ReactNode;
    protected getAxesConfiguration(type: string): any[];
    protected getControlProperties(): {
        gridEnabled: boolean;
        axes: IAxisProperties[];
    };
    protected getBubbleClassNames(): string;
    protected isViewedBy(): boolean;
    protected getBaseChartAxisSection(axes: IAxisProperties[]): React.ReactNode;
    protected renderMinMax(basePath: string): React.ReactNode;
}
//# sourceMappingURL=BaseChartConfigurationPanel.d.ts.map