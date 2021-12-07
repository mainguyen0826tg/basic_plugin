import { IVisualizationProperties } from "../interfaces/Visualization";
import { IColorConfiguration, IColoredItem } from "../interfaces/Colors";
import { IColor } from "@gooddata/sdk-model";
import { IColorAssignment, IMappingHeader } from "@gooddata/sdk-ui";
export declare function getSearchedItems(inputItems: IColoredItem[], searchString: string): IColoredItem[];
export declare function getColoredInputItems(colors: IColorConfiguration): IColoredItem[];
export declare function getProperties(properties: IVisualizationProperties, item: IMappingHeader, color: IColor): IVisualizationProperties;
export declare function getValidProperties(properties: IVisualizationProperties, colorAssignments: IColorAssignment[]): IVisualizationProperties;
//# sourceMappingURL=colors.d.ts.map