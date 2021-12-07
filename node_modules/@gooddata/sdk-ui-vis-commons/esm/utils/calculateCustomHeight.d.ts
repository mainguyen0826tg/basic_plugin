/**
 * @internal
 * If the headline is narrower than this, the compare section will be rendered
 * vertically to save horizontal space.
 */
export declare const SMALL_COMPARE_SECTION_THRESHOLD = 160;
/**
 * @internal
 * Calculate widget height and font size for Kpi's and Headlines
 * when enableCompactSize is set to true.
 */
export declare function calculateHeadlineHeightFontSize(secondaryItem?: boolean, clientHeight?: number): {
    height: number | undefined;
    fontSize: number | undefined;
};
/**
 * @internal
 * Check if Kpi's and Headlines should display pagination according to widget height.
 */
export declare const shouldRenderPagination: (enableCompactSize: boolean, width: number, height: number) => boolean;
//# sourceMappingURL=calculateCustomHeight.d.ts.map