import { IInsightDefinition } from "@gooddata/sdk-model";
import { IVisualizationProperties } from "../../../interfaces/Visualization";
export declare function countBucketItems(insight: IInsightDefinition): {
    viewByItemCount: number;
    measureItemCount: number;
    secondaryMeasureItemCount: number;
};
export declare function countItemsOnAxes(type: string, controls: IVisualizationProperties, insight: IInsightDefinition): {
    xaxis: number;
    yaxis: number;
    secondary_xaxis?: number;
    secondary_yaxis?: number;
};
//# sourceMappingURL=insightIntrospection.d.ts.map