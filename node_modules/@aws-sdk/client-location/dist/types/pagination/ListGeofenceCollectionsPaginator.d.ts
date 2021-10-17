import { ListGeofenceCollectionsCommandInput, ListGeofenceCollectionsCommandOutput } from "../commands/ListGeofenceCollectionsCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGeofenceCollections(config: LocationPaginationConfiguration, input: ListGeofenceCollectionsCommandInput, ...additionalArguments: any): Paginator<ListGeofenceCollectionsCommandOutput>;
