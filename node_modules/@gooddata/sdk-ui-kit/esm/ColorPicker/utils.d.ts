/// <reference types="react" />
import { ColorFormats } from "tinycolor2";
export declare const SATURATION_ARRAY: number[];
export declare function getHexFromHslColor(hsl: ColorFormats.HSL): string;
export declare function getRgbFromHslColor(hsl: ColorFormats.HSL): ColorFormats.RGB;
export declare function getHslFromRgbColor(rgb: ColorFormats.RGB): ColorFormats.HSL;
export declare function getHslFromHexColor(hex: string): ColorFormats.HSL;
export declare function getColorStyle(hslColor: ColorFormats.HSL): React.CSSProperties;
export declare function isHexColorValid(hexColorString: string): boolean;
export declare function isHslColorBlackOrWhite(hslColor: ColorFormats.HSL): boolean;
export declare function calculateHueChange(e: TouchEvent | MouseEvent, hue: number, container: HTMLDivElement): ColorFormats.HSL;
//# sourceMappingURL=utils.d.ts.map