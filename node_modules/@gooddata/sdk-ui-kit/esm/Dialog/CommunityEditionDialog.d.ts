import React from "react";
/**
 * @internal
 */
export interface ICommunityEditionDialogProps {
    onClose: () => void;
    headerText: string;
    infoText: string;
    copyrightText: string;
    links: {
        text: string;
        uri: string;
    }[];
    closeButtonText: string;
}
/**
 * @internal
 */
export declare const CommunityEditionDialog: React.FC<ICommunityEditionDialogProps>;
//# sourceMappingURL=CommunityEditionDialog.d.ts.map