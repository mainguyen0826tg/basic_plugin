import React from "react";
/**
 * @internal
 */
export interface ITypographyProps {
    tagName: "h1" | "h2" | "h3" | "p";
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    title?: string;
}
/**
 * @internal
 */
export declare const Typography: React.FC<ITypographyProps>;
//# sourceMappingURL=Typography.d.ts.map