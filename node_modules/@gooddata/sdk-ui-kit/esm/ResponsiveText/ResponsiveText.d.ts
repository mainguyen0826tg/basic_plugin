import React from "react";
/**
 * @internal
 */
export interface IResponsiveTextProps {
    tagName?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "dt";
    tagClassName?: string;
    windowResizeRefreshDelay?: number;
    title?: string;
    window?: {
        addEventListener: Window["addEventListener"];
        getComputedStyle: Window["getComputedStyle"];
        removeEventListener: Window["removeEventListener"];
    };
    children?: React.ReactNode;
}
/**
 * @internal
 */
export declare const ResponsiveText: React.FC<IResponsiveTextProps>;
//# sourceMappingURL=ResponsiveText.d.ts.map