import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import { IColorPalette } from "@gooddata/sdk-model";
/**
 * @internal
 */
export interface IColorPaletteDataLoader {
    /**
     * Obtains the color palette for the current workspace.
     * @param backend - the {@link IAnalyticalBackend} instance to use to communicate with the backend
     */
    getColorPalette(backend: IAnalyticalBackend): Promise<IColorPalette>;
}
/**
 * @internal
 */
export declare const colorPaletteDataLoaderFactory: import("./types").IDataLoaderFactory<IColorPaletteDataLoader>;
//# sourceMappingURL=ColorPaletteDataLoader.d.ts.map