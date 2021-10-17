import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchUpdateDevicePositionRequest, BatchUpdateDevicePositionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchUpdateDevicePositionCommandInput extends BatchUpdateDevicePositionRequest {
}
export interface BatchUpdateDevicePositionCommandOutput extends BatchUpdateDevicePositionResponse, __MetadataBearer {
}
/**
 * <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location
 *             uses the data when reporting the last known device position and position history.</p>
 *          <note>
 *            <p>Only one position update is stored per sample time. Location data is sampled at a
 *                 fixed rate of one position per 30-second interval and retained for 30 days before
 *                 it's deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchUpdateDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchUpdateDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchUpdateDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchUpdateDevicePositionCommand extends $Command<BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput, LocationClientResolvedConfig> {
    readonly input: BatchUpdateDevicePositionCommandInput;
    constructor(input: BatchUpdateDevicePositionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput>;
    private serialize;
    private deserialize;
}
