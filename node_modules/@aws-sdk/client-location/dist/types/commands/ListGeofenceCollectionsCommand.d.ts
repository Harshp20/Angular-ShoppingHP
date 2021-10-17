import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListGeofenceCollectionsRequest, ListGeofenceCollectionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGeofenceCollectionsCommandInput extends ListGeofenceCollectionsRequest {
}
export interface ListGeofenceCollectionsCommandOutput extends ListGeofenceCollectionsResponse, __MetadataBearer {
}
/**
 * <p>Lists geofence collections in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListGeofenceCollectionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListGeofenceCollectionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListGeofenceCollectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGeofenceCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListGeofenceCollectionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListGeofenceCollectionsCommand extends $Command<ListGeofenceCollectionsCommandInput, ListGeofenceCollectionsCommandOutput, LocationClientResolvedConfig> {
    readonly input: ListGeofenceCollectionsCommandInput;
    constructor(input: ListGeofenceCollectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGeofenceCollectionsCommandInput, ListGeofenceCollectionsCommandOutput>;
    private serialize;
    private deserialize;
}
