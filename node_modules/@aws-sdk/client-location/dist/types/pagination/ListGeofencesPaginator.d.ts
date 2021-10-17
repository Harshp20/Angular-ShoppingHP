import { ListGeofencesCommandInput, ListGeofencesCommandOutput } from "../commands/ListGeofencesCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListGeofences(config: LocationPaginationConfiguration, input: ListGeofencesCommandInput, ...additionalArguments: any): Paginator<ListGeofencesCommandOutput>;
