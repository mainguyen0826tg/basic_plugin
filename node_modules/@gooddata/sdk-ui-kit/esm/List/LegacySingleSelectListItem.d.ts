import { Component } from "react";
/**
 * @internal
 */
export interface ILegacySingleSelectListItemProps {
    source: any;
    selected: boolean;
    onSelect: (source: any) => void;
    onMouseOver?: (source: any) => void;
    onMouseOut?: (source: any) => void;
}
/**
 * @internal
 */
export interface ILegacySingleSelectListItemState {
    isOverflowed: boolean;
}
/**
 * @internal
 * @deprecated This component is deprecated use SingleSelectListItem instead
 */
export declare class LegacySingleSelectListItem extends Component<ILegacySingleSelectListItemProps, ILegacySingleSelectListItemState> {
    static defaultProps: {
        onMouseOver: (...args: any[]) => void;
        onMouseOut: (...args: any[]) => void;
    };
    readonly state: {
        isOverflowed: boolean;
    };
    node: HTMLSpanElement;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private getClassNames;
    private checkOverflow;
    private handleSelect;
    private handleMouseOver;
    private handleMouseOut;
    private renderTitle;
    private renderIcon;
    render(): JSX.Element;
}
//# sourceMappingURL=LegacySingleSelectListItem.d.ts.map