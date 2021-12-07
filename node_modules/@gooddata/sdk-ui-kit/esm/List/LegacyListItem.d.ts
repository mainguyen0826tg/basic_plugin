import React, { Component } from "react";
/**
 * @internal
 */
export interface ILegacyListItemProps<T> {
    item?: T;
    listItemClass: React.ElementType;
}
/**
 * @internal
 * @deprecated This component is deprecated use ListItem instead
 */
export declare class LegacyListItem<T> extends Component<ILegacyListItemProps<T>> {
    static defaultProps: {
        item: {};
    };
    render(): JSX.Element;
}
//# sourceMappingURL=LegacyListItem.d.ts.map