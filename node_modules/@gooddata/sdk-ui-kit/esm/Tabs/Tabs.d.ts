import { Component } from "react";
/**
 * @internal
 */
export interface ITab {
    id: string;
}
/**
 * @internal
 */
export interface ITabsProps {
    className?: string;
    onTabSelect?: (tab: ITab) => void;
    selectedTabId?: string;
    tabs?: Array<ITab>;
}
/**
 * @internal
 */
export interface ITabsState {
    selectedTabId: string;
}
/**
 * @internal
 */
export declare class Tabs extends Component<ITabsProps, ITabsState> {
    static defaultProps: {
        className: string;
        onTabSelect: (...args: any[]) => void;
        selectedTabId: string;
        tabs: ITab[];
    };
    constructor(props: ITabsProps);
    private selectTab;
    private renderTab;
    private renderTabs;
    render(): JSX.Element;
}
//# sourceMappingURL=Tabs.d.ts.map