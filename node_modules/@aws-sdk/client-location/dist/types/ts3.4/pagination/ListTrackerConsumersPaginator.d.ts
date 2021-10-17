import { ListTrackerConsumersCommandInput, ListTrackerConsumersCommandOutput } from "../commands/ListTrackerConsumersCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTrackerConsumers(config: LocationPaginationConfiguration, input: ListTrackerConsumersCommandInput, ...additionalArguments: any): Paginator<ListTrackerConsumersCommandOutput>;
