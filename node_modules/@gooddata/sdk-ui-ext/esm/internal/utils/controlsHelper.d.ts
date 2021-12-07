import { WrappedComponentProps } from "react-intl";
import { IMinMaxControlState, IMinMaxControlProps } from "../interfaces/MinMaxControl";
import { IPushData } from "@gooddata/sdk-ui";
export declare function maxInputValidateAndPushData(data: IPushData, state: IMinMaxControlState, props: IMinMaxControlProps & WrappedComponentProps, setState: (data: Partial<IMinMaxControlState>) => void, defaultState: IMinMaxControlState): void;
export declare function minInputValidateAndPushData(data: IPushData, state: IMinMaxControlState, props: IMinMaxControlProps & WrappedComponentProps, setState: (data: Partial<IMinMaxControlState>) => void, defaultState: IMinMaxControlState): void;
//# sourceMappingURL=controlsHelper.d.ts.map