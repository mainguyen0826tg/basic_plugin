import { IHeaderPredicate } from "@gooddata/sdk-ui";
import { IDrillableItemsCommandBody } from "@gooddata/sdk-embedding";
/**
 * Converts post message with drilling specification into header predicates. Given the message with
 * uris, identifiers and composedFrom uris and identifiers, this function will create instances of
 * uriMatch(), identifierMatch(), composedFromUri(), composedFromIdentifier() predicates.
 *
 * @param postMessageData - input received via post message
 * @internal
 */
export declare function convertPostMessageToDrillablePredicates(postMessageData: IDrillableItemsCommandBody): Promise<IHeaderPredicate[]>;
//# sourceMappingURL=drillablePredicates.d.ts.map