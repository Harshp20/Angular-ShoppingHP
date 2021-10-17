"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTrackerConsumers = void 0;
const Location_1 = require("../Location");
const LocationClient_1 = require("../LocationClient");
const ListTrackerConsumersCommand_1 = require("../commands/ListTrackerConsumersCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTrackerConsumersCommand_1.ListTrackerConsumersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTrackerConsumers(input, ...args);
};
async function* paginateListTrackerConsumers(config, input, ...additionalArguments) {
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
exports.paginateListTrackerConsumers = paginateListTrackerConsumers;
//# sourceMappingURL=ListTrackerConsumersPaginator.js.map