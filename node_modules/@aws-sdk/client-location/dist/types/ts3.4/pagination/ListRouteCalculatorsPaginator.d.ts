import { ListRouteCalculatorsCommandInput, ListRouteCalculatorsCommandOutput } from "../commands/ListRouteCalculatorsCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListRouteCalculators(config: LocationPaginationConfiguration, input: ListRouteCalculatorsCommandInput, ...additionalArguments: any): Paginator<ListRouteCalculatorsCommandOutput>;
