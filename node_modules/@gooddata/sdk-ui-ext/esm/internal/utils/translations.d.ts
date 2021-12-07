import { IntlShape } from "react-intl";
import { IDropdownItem } from "../interfaces/Dropdown";
export declare function getTranslation(translationId: string, intl: IntlShape, values?: {
    [key: string]: string;
}): string;
export declare function getTranslatedDropdownItems(dropdownItems: IDropdownItem[], intl: IntlShape): IDropdownItem[];
/**
 * @internal
 */
export declare const translations: {
    [locale: string]: Record<string, string>;
};
//# sourceMappingURL=translations.d.ts.map