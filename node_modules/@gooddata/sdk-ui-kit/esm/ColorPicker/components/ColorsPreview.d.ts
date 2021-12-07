import { PureComponent, ReactNode } from "react";
import { ColorFormats } from "tinycolor2";
export interface IColorsPreviewProps {
    currentHslColor: ColorFormats.HSL;
    draftHslColor: ColorFormats.HSL;
    currentTextLabel?: string;
    draftTextLabel?: string;
}
export declare class ColorsPreview extends PureComponent<IColorsPreviewProps> {
    static defaultProps: Pick<IColorsPreviewProps, "currentTextLabel" | "draftTextLabel">;
    render(): ReactNode;
}
//# sourceMappingURL=ColorsPreview.d.ts.map