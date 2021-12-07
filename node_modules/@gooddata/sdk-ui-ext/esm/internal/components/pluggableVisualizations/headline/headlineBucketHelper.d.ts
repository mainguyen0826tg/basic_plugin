import { IBucketItem, IExtendedReferencePoint } from "../../../interfaces/Visualization";
export declare function findSecondMasterMeasure(allMeasures: IBucketItem[]): IBucketItem;
export declare function tryToMapForeignBuckets(extendedReferencePoint: Readonly<IExtendedReferencePoint>): IExtendedReferencePoint;
export declare function setHeadlineRefPointBuckets(extendedReferencePoint: Readonly<IExtendedReferencePoint>, primaryMeasure?: IBucketItem, secondaryMeasure?: IBucketItem): IExtendedReferencePoint;
export declare function findComplementaryOverTimeComparisonMeasure(primaryMeasure: IBucketItem, allMeasures: IBucketItem[]): IBucketItem;
//# sourceMappingURL=headlineBucketHelper.d.ts.map