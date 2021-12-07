/**
 * Copyright (c) 2015 Case Sandberg
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */
import React, { PureComponent, ReactNode, CSSProperties } from "react";
import { ColorFormats } from "tinycolor2";
export interface IHueColorPickerProps {
    initColor: ColorFormats.HSL;
    onChange: (color: ColorFormats.HSL) => void;
}
export declare class HueColorPicker extends PureComponent<IHueColorPickerProps> {
    private readonly hueContainer;
    constructor(props: IHueColorPickerProps);
    componentWillUnmount(): void;
    getPointerStyle(): CSSProperties;
    handleChange: (e: TouchEvent | MouseEvent) => void;
    handleTouchChange: (e: React.TouchEvent) => void;
    handleMouseDown: (e: React.MouseEvent) => void;
    handleMouseUp: () => void;
    bindEventListeners(): void;
    unbindEventListeners(): void;
    render(): ReactNode;
}
//# sourceMappingURL=HueColorPicker.d.ts.map