import { ListTrackersCommandInput, ListTrackersCommandOutput } from "../commands/ListTrackersCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTrackers(config: LocationPaginationConfiguration, input: ListTrackersCommandInput, ...additionalArguments: any): Paginator<ListTrackersCommandOutput>;
