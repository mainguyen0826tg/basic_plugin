import { AxisType } from "./AxisType";
import { IVisualizationProperties } from "./Visualization";
import { IPushData } from "@gooddata/sdk-ui";
export interface IConfigItemSubsection {
    disabled: boolean;
    configPanelDisabled: boolean;
    axis: AxisType;
    properties: IVisualizationProperties;
    pushData(data: IPushData): void;
}
//# sourceMappingURL=ConfigurationPanel.d.ts.map