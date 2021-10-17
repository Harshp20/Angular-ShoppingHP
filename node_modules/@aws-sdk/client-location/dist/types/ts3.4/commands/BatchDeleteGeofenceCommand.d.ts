import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchDeleteGeofenceRequest, BatchDeleteGeofenceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDeleteGeofenceCommandInput extends BatchDeleteGeofenceRequest {
}
export interface BatchDeleteGeofenceCommandOutput extends BatchDeleteGeofenceResponse, __MetadataBearer {
}
/**
 * <p>Deletes a batch of geofences from a geofence collection.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchDeleteGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchDeleteGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchDeleteGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteGeofenceCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDeleteGeofenceCommand extends $Command<BatchDeleteGeofenceCommandInput, BatchDeleteGeofenceCommandOutput, LocationClientResolvedConfig> {
    readonly input: BatchDeleteGeofenceCommandInput;
    constructor(input: BatchDeleteGeofenceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteGeofenceCommandInput, BatchDeleteGeofenceCommandOutput>;
    private serialize;
    private deserialize;
}
