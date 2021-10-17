import { ListDevicePositionsCommandInput, ListDevicePositionsCommandOutput } from "../commands/ListDevicePositionsCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListDevicePositions(config: LocationPaginationConfiguration, input: ListDevicePositionsCommandInput, ...additionalArguments: any): Paginator<ListDevicePositionsCommandOutput>;
