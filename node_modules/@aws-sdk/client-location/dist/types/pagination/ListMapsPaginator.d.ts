import { ListMapsCommandInput, ListMapsCommandOutput } from "../commands/ListMapsCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListMaps(config: LocationPaginationConfiguration, input: ListMapsCommandInput, ...additionalArguments: any): Paginator<ListMapsCommandOutput>;
