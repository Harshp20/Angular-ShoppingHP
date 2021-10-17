import { GetDevicePositionHistoryCommandInput, GetDevicePositionHistoryCommandOutput } from "../commands/GetDevicePositionHistoryCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateGetDevicePositionHistory(config: LocationPaginationConfiguration, input: GetDevicePositionHistoryCommandInput, ...additionalArguments: any): Paginator<GetDevicePositionHistoryCommandOutput>;
