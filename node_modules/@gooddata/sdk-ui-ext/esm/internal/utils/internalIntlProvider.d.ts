import React from "react";
import { IntlShape } from "react-intl";
import { ILocale } from "@gooddata/sdk-ui";
export declare function createInternalIntl(locale?: ILocale): IntlShape;
interface IInternalIntlWrapperProps {
    locale?: string;
    workspace?: string;
}
export declare const InternalIntlWrapper: React.FC<IInternalIntlWrapperProps>;
export {};
//# sourceMappingURL=internalIntlProvider.d.ts.map