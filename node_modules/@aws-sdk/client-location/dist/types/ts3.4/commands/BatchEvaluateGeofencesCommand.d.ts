import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchEvaluateGeofencesRequest, BatchEvaluateGeofencesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchEvaluateGeofencesCommandInput extends BatchEvaluateGeofencesRequest {
}
export interface BatchEvaluateGeofencesCommandOutput extends BatchEvaluateGeofencesResponse, __MetadataBearer {
}
/**
 * <p>Evaluates device positions against the geofence geometries from a given geofence
 *             collection. The evaluation determines if the device has entered or exited a geofenced
 *             area, which publishes ENTER or EXIT geofence events to Amazon EventBridge.</p>
 *         <note>
 *             <p>The last geofence that a device was observed within, if any, is tracked for 30
 *                 days after the most recent device position update</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchEvaluateGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchEvaluateGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchEvaluateGeofencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEvaluateGeofencesCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchEvaluateGeofencesCommand extends $Command<BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput, LocationClientResolvedConfig> {
    readonly input: BatchEvaluateGeofencesCommandInput;
    constructor(input: BatchEvaluateGeofencesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput>;
    private serialize;
    private deserialize;
}
