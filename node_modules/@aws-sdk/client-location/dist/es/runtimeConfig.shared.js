import { defaultRegionInfoProvider } from "./endpoints";
import { parseUrl } from "@aws-sdk/url-parser";
/**
 * @internal
 */
export var ClientSharedValues = {
    apiVersion: "2020-11-19",
    disableHostPrefix: false,
    logger: {},
    regionInfoProvider: defaultRegionInfoProvider,
    serviceId: "Location",
    urlParser: parseUrl,
};
//# sourceMappingURL=runtimeConfig.shared.js.map