/// <reference types="react" />
import { ContentRect } from "react-measure";
import { IPushpinCategoryLegendItem, PositionType } from "@gooddata/sdk-ui-vis-commons";
export declare const HEIGHT_OF_SIZE_LEGEND = 161;
export interface IPushpinCategoryLegendProps {
    containerId: string;
    hasSizeLegend: boolean;
    isSizeLegendVisible?: boolean;
    contentRect: ContentRect;
    categoryItems?: IPushpinCategoryLegendItem[];
    format?: string;
    height?: number;
    locale?: string;
    position?: PositionType;
    responsive?: boolean | "autoPositionWithPopup";
    customComponent?: JSX.Element | null;
    customComponentName?: string;
    sizeLegendName?: string;
    maxRows?: number;
    name?: string;
    renderPopUp?: boolean;
    isFluidLegend?: boolean;
    onItemClick?(item: IPushpinCategoryLegendItem): void;
}
export default function PushpinCategoryLegend(props: IPushpinCategoryLegendProps): JSX.Element;
//# sourceMappingURL=PushpinCategoryLegend.d.ts.map