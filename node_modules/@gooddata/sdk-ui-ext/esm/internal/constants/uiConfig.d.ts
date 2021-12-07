import { IUiConfig } from "../interfaces/Visualization";
export declare const MAX_METRICS_COUNT = 20;
export declare const DEFAULT_PIE_METRICS_COUNT = 1;
export declare const DEFAULT_TREEMAP_MEASURES_COUNT = 1;
export declare const MAX_FILTERS_COUNT = 20;
export declare const MAX_CATEGORIES_COUNT = 1;
export declare const MAX_TABLE_CATEGORIES_COUNT = 20;
export declare const MAX_STACKS_COUNT = 1;
export declare const MAX_VIEW_COUNT = 2;
export declare const DEFAULT_HEADLINE_METRICS_COUNT = 1;
export declare const DEFAULT_XIRR_METRICS_COUNT = 1;
export declare const DEFAULT_XIRR_ATTRIBUTES_COUNT = 1;
export declare const UICONFIG = "uiConfig";
export declare const RECOMMENDATIONS = "recommendations";
export declare const SUPPORTED_COMPARISON_TYPES = "supportedOverTimeComparisonTypes";
export declare const OPEN_AS_REPORT = "openAsReport";
export declare const SUPPORTED = "supported";
export declare const UICONFIG_AXIS = "uiConfig.axis";
export declare const measuresBase: {
    accepts: string[];
    allowsDuplicateItems: boolean;
    enabled: boolean;
    allowsReordering: boolean;
    allowsSwapping: boolean;
    itemsLimit: number;
    isShowInPercentEnabled: boolean;
    isShowInPercentVisible: boolean;
};
export declare const viewBase: {
    accepts: string[];
    itemsLimit: number;
    itemsLimitByType: {
        date: number;
    };
    allowsSwapping: boolean;
    allowsReordering: boolean;
    enabled: boolean;
    isShowInPercentEnabled: boolean;
};
export declare const defaultFilters: {
    filters: {
        accepts: string[];
        itemsLimit: number;
        itemsLimitByType: {
            date: number;
        };
        allowsReordering: boolean;
        enabled: boolean;
        isShowInPercentEnabled: boolean;
    };
};
export declare const disabledOpenAsReportConfig: {
    openAsReport: {
        supported: boolean;
    };
};
export declare const defaultRootUiConfigProperties: Partial<IUiConfig>;
export declare const DEFAULT_SCATTERPLOT_UICONFIG: IUiConfig;
export declare const DEFAULT_BUBBLE_CHART_CONFIG: IUiConfig;
export declare const DEFAULT_BASE_CHART_UICONFIG: IUiConfig;
export declare const COLUMN_BAR_CHART_UICONFIG: IUiConfig;
export declare const COLUMN_BAR_CHART_UICONFIG_WITH_MULTIPLE_DATES: IUiConfig;
export declare const DEFAULT_LINE_UICONFIG: IUiConfig;
export declare const LINE_UICONFIG_WITH_MULTIPLE_DATES: IUiConfig;
export declare const DEFAULT_AREA_UICONFIG: IUiConfig;
export declare const AREA_UICONFIG_WITH_MULTIPLE_DATES: IUiConfig;
export declare const DEFAULT_PIE_UICONFIG: IUiConfig;
export declare const PIE_UICONFIG_WITH_MULTIPLE_METRICS: IUiConfig;
export declare const PIE_UICONFIG_WITH_ONE_METRIC: IUiConfig;
export declare const DEFAULT_TREEMAP_UICONFIG: IUiConfig;
export declare const DEFAULT_TABLE_UICONFIG: IUiConfig;
export declare const DEFAULT_HEADLINE_UICONFIG: IUiConfig;
export declare const DEFAULT_HEATMAP_UICONFIG: IUiConfig;
export declare const COMBO_CHART_UICONFIG_DEPRECATED: IUiConfig;
export declare const COMBO_CHART_UICONFIG: IUiConfig;
export declare const DEFAULT_XIRR_UICONFIG: IUiConfig;
export declare const DEFAULT_BULLET_CHART_CONFIG: IUiConfig;
export declare const BULLET_CHART_CONFIG_MULTIPLE_DATES: IUiConfig;
export declare const GEO_PUSHPIN_CHART_UICONFIG: IUiConfig;
export declare function getTreemapUiConfig(allowsMultipleDates: boolean, hasNonStackAttributes: boolean, hasMultipleMeasures: boolean): IUiConfig;
//# sourceMappingURL=uiConfig.d.ts.map