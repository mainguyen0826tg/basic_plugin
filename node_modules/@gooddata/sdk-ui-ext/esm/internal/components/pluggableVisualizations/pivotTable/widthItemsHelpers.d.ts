import { ColumnWidthItem } from "@gooddata/sdk-ui-pivot";
import { IBucketFilter, IBucketItem } from "../../../interfaces/Visualization";
import { IInsightDefinition } from "@gooddata/sdk-model";
export declare function adaptReferencePointWidthItemsToPivotTable(originalColumnWidths: ColumnWidthItem[], measures: IBucketItem[], rowAttributes: IBucketItem[], columnAttributes: IBucketItem[], previousRowAttributes: IBucketItem[], previousColumnAttributes: IBucketItem[], filters: IBucketFilter[]): ColumnWidthItem[];
export declare function adaptMdObjectWidthItemsToPivotTable(originalColumnWidths: ColumnWidthItem[], insight: IInsightDefinition): ColumnWidthItem[];
//# sourceMappingURL=widthItemsHelpers.d.ts.map