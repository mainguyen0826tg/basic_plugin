import { IDateFilterConfigsQuery, IDateFilterConfigsQueryResult } from "@gooddata/sdk-backend-spi";
export declare class TigerWorkspaceDateFilterConfigsQuery implements IDateFilterConfigsQuery {
    private limit;
    private offset;
    withLimit(limit: number): IDateFilterConfigsQuery;
    withOffset(offset: number): IDateFilterConfigsQuery;
    query(): Promise<IDateFilterConfigsQueryResult>;
}
//# sourceMappingURL=index.d.ts.map