import { IColorLegendSize } from "@gooddata/sdk-ui-vis-commons";
export declare function getResponsiveInfo(responsive: boolean | "autoPositionWithPopup" | undefined): boolean | "autoPositionWithPopup";
export declare function isAutoPositionWithPopup(responsive: boolean | "autoPositionWithPopup" | undefined): responsive is "autoPositionWithPopup";
export declare function getPushpinColorLegendSize(width: number | undefined, isFluidLegend: boolean | undefined, responsive: boolean | "autoPositionWithPopup" | undefined): IColorLegendSize;
export declare function getPushpinColorLegendTitle(title: string | undefined, width: number | undefined, responsive: boolean | "autoPositionWithPopup" | undefined): string | undefined;
export declare function isSmallPushpinSizeLegend(width: number | undefined, ignoreSmallSize: boolean, responsive: boolean | "autoPositionWithPopup" | undefined): boolean;
export declare function getPushpinSizeLegendTitle(title: string | undefined, width: number | undefined, ignoreMeasureName: boolean): string | undefined;
export declare function shouldRenderCircleLegendInsidePopUp(width: number | undefined, renderPopUp: boolean | undefined): boolean;
export declare function shouldRenderMiddleCircle(width: number | undefined, ignoreSmallSize: boolean): boolean;
//# sourceMappingURL=responsive.d.ts.map