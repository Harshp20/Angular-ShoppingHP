import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeMapRequest, DescribeMapResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMapCommandInput extends DescribeMapRequest {
}
export interface DescribeMapCommandOutput extends DescribeMapResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the map resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribeMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMapCommandInput} for command's `input` shape.
 * @see {@link DescribeMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMapCommand extends $Command<DescribeMapCommandInput, DescribeMapCommandOutput, LocationClientResolvedConfig> {
    readonly input: DescribeMapCommandInput;
    constructor(input: DescribeMapCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMapCommandInput, DescribeMapCommandOutput>;
    private serialize;
    private deserialize;
}
