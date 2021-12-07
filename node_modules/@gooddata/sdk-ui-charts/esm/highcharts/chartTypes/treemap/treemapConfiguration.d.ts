declare const TREEMAP_TEMPLATE: {
    chart: {
        type: string;
        margin: number[];
    };
    plotOptions: {
        treemap: {
            showInLegend: boolean;
            borderColor: string;
            layoutAlgorithm: string;
            dataLabels: {
                enabled: boolean;
                allowOverlap: boolean;
            };
            levels: {
                level: number;
                dataLabels: {
                    enabled: boolean;
                    allowOverlap: boolean;
                };
            }[];
            point: {
                events: {
                    mouseOver(): void;
                };
            };
        };
    };
    legend: {
        enabled: boolean;
    };
};
export declare function getTreemapConfiguration(): typeof TREEMAP_TEMPLATE;
export {};
//# sourceMappingURL=treemapConfiguration.d.ts.map