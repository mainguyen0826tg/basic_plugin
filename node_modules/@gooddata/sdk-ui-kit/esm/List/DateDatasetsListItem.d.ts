import React from "react";
/**
 * @internal
 */
export interface IDateDatasetsListItemProps {
    id?: string;
    title?: string;
    isHeader?: boolean;
    isSelected?: boolean;
    isUnrelated?: boolean;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
/**
 * @internal
 */
export declare const DateDatasetsListItem: React.FC<IDateDatasetsListItemProps>;
//# sourceMappingURL=DateDatasetsListItem.d.ts.map