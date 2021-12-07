import React from "react";
/**
 * @internal
 */
export interface IItemsWrapperProps {
    smallItemsSpacing?: boolean;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
/**
 * @internal
 */
export declare const ItemsWrapper: React.FC<IItemsWrapperProps>;
/**
 * @internal
 */
export declare const Separator: React.FC;
/**
 * @internal
 */
export interface IHeaderProps {
    children: React.ReactNode;
}
/**
 * @internal
 */
export declare const Header: React.FC<IHeaderProps>;
/**
 * @internal
 */
export interface IItemProps {
    checked?: boolean;
    subMenu?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
/**
 * @internal
 */
export declare const Item: React.FC<IItemProps>;
//# sourceMappingURL=MenuList.d.ts.map