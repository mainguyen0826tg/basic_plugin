import { PureComponent, ReactNode } from "react";
import { ColorFormats } from "tinycolor2";
export interface IHexColorInputProps {
    initColor: ColorFormats.HSL;
    onInputChanged: (color: ColorFormats.HSL) => void;
    placeholder?: string;
    label?: string;
}
export declare class HexColorInput extends PureComponent<IHexColorInputProps> {
    static defaultProps: Pick<IHexColorInputProps, "label" | "placeholder">;
    onInputChange: (value: string) => void;
    render(): ReactNode;
}
//# sourceMappingURL=HexColorInput.d.ts.map