import { IUriIdentifierPair } from "@gooddata/api-client-bear";
import { IDrillableItemsCommandBody } from "@gooddata/sdk-embedding";
/**
 * @internal
 */
export declare const sanitizeDrillingActivationPostMessageData: (workspace: string, postMessageData: IDrillableItemsCommandBody, idToUriConverter: (workspace: string, identifiers: string[]) => Promise<IUriIdentifierPair[]>) => Promise<IDrillableItemsCommandBody>;
//# sourceMappingURL=index.d.ts.map