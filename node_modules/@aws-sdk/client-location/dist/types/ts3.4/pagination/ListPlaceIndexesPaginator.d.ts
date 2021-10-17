import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "../commands/ListPlaceIndexesCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPlaceIndexes(config: LocationPaginationConfiguration, input: ListPlaceIndexesCommandInput, ...additionalArguments: any): Paginator<ListPlaceIndexesCommandOutput>;
