import React from "react";
declare global {
    interface Window {
        jQuery: object;
        hbspt: undefined | {
            isSuccessMessageShow: boolean;
        };
    }
}
/**
 * @internal
 */
export interface IHubspotFormField {
    /**
     * Form Field Name
     */
    name: string;
    /**
     * Form Field Value
     */
    value: string | any;
    /**
     * Click action
     */
    click: () => void;
}
/**
 * @internal
 */
export interface IHubspotJqueryFormField {
    [key: string]: ArrayLike<IHubspotFormField> | string;
}
/**
 * @public
 */
export interface IHubspotFormValue {
    [key: string]: string | number | boolean;
}
/**
 * @public
 */
export interface IHubspotConversionTouchPointDialogBaseProps {
    /**
     * Hubspot Portal Id
     */
    hubspotPortalId: string;
    /**
     * Hubspot Form Id
     */
    hubspotFormId: string;
    /**
     * Dialog Title
     */
    dialogTitle?: string;
    /**
     * The value for Cancel button
     */
    cancelButtonText?: string;
    /**
     * Show/Hide Cancel button
     */
    showCancelButton?: boolean;
    /**
     * Populate values for the Hubspot form
     */
    values?: IHubspotFormValue;
    /**
     * Mark the checkbox as checked in the Hubspot form base on this value.
     */
    selectedValue?: string;
    /**
     * The id for html element render the Hubspot form
     */
    targetId?: string;
    /**
     * The custom css class for submit button
     */
    submitButtonClass?: string;
    /**
     * Close dialog action
     */
    onClose: () => void;
    /**
     * Form submitted callback function
     */
    onFormSubmitted?: () => void;
}
/**
 * @internal
 */
export declare const HubspotConversionTouchPointDialogBase: React.FC<IHubspotConversionTouchPointDialogBaseProps>;
//# sourceMappingURL=HubspotConversionTouchPointDialogBase.d.ts.map