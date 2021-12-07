import React from "react";
/**
 * @internal
 */
export interface IInsightListItemDateConfig {
    isCurrentYear: boolean;
    isToday: boolean;
    isYesterday: boolean;
    date: Date;
}
/**
 * @internal
 */
export interface IInsightListItemDateProps {
    config: IInsightListItemDateConfig;
}
/**
 * @internal
 */
export declare const InsightListItemDate: React.FC<IInsightListItemDateProps>;
export declare const META_DATA_TIMEZONE = "Europe/Prague";
/**
 * @internal
 */
export interface IDateTimeConfigOptions {
    dateTimezone?: string;
    now?: Date;
}
/**
 * Build date time config for InsightListItemDate component.
 *
 * @param date - string ISO date
 * @param options - optional options object
 * @returns date time config
 *
 * @internal
 */
export declare function getDateTimeConfig(date: string, options?: IDateTimeConfigOptions): IInsightListItemDateConfig;
//# sourceMappingURL=InsightListItemDate.d.ts.map