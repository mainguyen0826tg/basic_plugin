import { PureComponent, ReactNode } from "react";
import { ColorFormats } from "tinycolor2";
export interface IColorPickerMatrixProps {
    initColor: ColorFormats.HSL;
    onColorSelected: (color: ColorFormats.HSL) => void;
}
export declare class ColorPickerMatrix extends PureComponent<IColorPickerMatrixProps> {
    render(): ReactNode;
}
//# sourceMappingURL=ColorPickerMatrix.d.ts.map