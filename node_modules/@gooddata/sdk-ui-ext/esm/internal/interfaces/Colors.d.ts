import { IMappingHeader, IColorAssignment } from "@gooddata/sdk-ui";
import { IRgbColorValue, IColor, IColorPaletteItem } from "@gooddata/sdk-model";
export interface IColoredItem {
    colorItem: IColor;
    color: IRgbColorValue;
    mappingHeader?: IMappingHeader;
}
export interface IColorConfiguration {
    colorAssignments: IColorAssignment[];
    colorPalette: IColorPaletteItem[];
}
//# sourceMappingURL=Colors.d.ts.map