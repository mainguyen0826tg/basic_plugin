import { ChartType } from "@gooddata/sdk-ui";
export declare const AXIS: {
    PRIMARY: string;
    SECONDARY: string;
    DUAL: string;
};
export declare enum AXIS_NAME {
    X = "xaxis",
    Y = "yaxis",
    SECONDARY_X = "secondary_xaxis",
    SECONDARY_Y = "secondary_yaxis"
}
export declare const DUAL_AXES_SUPPORTED_CHARTS: ChartType[];
export declare const BASE_CHART_AXIS_CONFIG: {
    [x: string]: {
        name: AXIS_NAME;
        title: string;
        subtitle: string;
        primary: boolean;
    }[];
};
export declare const BAR_CHART_AXIS_CONFIG: {
    [x: string]: {
        primary: boolean;
        name: AXIS_NAME;
        title: string;
        subtitle: string;
    }[];
};
//# sourceMappingURL=axis.d.ts.map