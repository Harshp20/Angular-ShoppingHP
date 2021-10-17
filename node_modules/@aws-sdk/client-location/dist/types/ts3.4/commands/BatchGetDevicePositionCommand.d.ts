import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchGetDevicePositionRequest, BatchGetDevicePositionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchGetDevicePositionCommandInput extends BatchGetDevicePositionRequest {
}
export interface BatchGetDevicePositionCommandOutput extends BatchGetDevicePositionResponse, __MetadataBearer {
}
/**
 * <p>A batch request to retrieve all device positions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchGetDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchGetDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchGetDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchGetDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchGetDevicePositionCommand extends $Command<BatchGetDevicePositionCommandInput, BatchGetDevicePositionCommandOutput, LocationClientResolvedConfig> {
    readonly input: BatchGetDevicePositionCommandInput;
    constructor(input: BatchGetDevicePositionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetDevicePositionCommandInput, BatchGetDevicePositionCommandOutput>;
    private serialize;
    private deserialize;
}
