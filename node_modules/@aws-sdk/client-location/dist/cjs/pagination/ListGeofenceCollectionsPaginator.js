"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListGeofenceCollections = void 0;
const Location_1 = require("../Location");
const LocationClient_1 = require("../LocationClient");
const ListGeofenceCollectionsCommand_1 = require("../commands/ListGeofenceCollectionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListGeofenceCollectionsCommand_1.ListGeofenceCollectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listGeofenceCollections(input, ...args);
};
async function* paginateListGeofenceCollections(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof Location_1.Location) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof LocationClient_1.LocationClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Location | LocationClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListGeofenceCollections = paginateListGeofenceCollections;
//# sourceMappingURL=ListGeofenceCollectionsPaginator.js.map