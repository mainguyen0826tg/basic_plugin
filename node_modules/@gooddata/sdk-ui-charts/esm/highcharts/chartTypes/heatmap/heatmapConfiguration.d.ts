declare const HEATMAP_TEMPLATE: {
    chart: {
        type: string;
        marginTop: number;
        marginRight: number;
        spacingRight: number;
    };
    plotOptions: {
        heatmap: {
            dataLabels: {
                enabled: boolean;
                allowOverlap: boolean;
                crop: boolean;
                overflow: string;
            };
            point: {
                events: {
                    mouseOver(): void;
                };
            };
        };
    };
    yAxis: {
        labels: {
            formatter(): any;
        };
    }[];
};
export declare function getHeatmapConfiguration(): typeof HEATMAP_TEMPLATE;
export {};
//# sourceMappingURL=heatmapConfiguration.d.ts.map