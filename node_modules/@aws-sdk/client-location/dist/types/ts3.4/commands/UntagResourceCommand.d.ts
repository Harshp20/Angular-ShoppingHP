import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { UntagResourceRequest, UntagResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagResourceCommandInput extends UntagResourceRequest {
}
export interface UntagResourceCommandOutput extends UntagResourceResponse, __MetadataBearer {
}
/**
 * <p>Removes one or more tags from the specified Amazon Location Service resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UntagResourceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UntagResourceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagResourceCommand extends $Command<UntagResourceCommandInput, UntagResourceCommandOutput, LocationClientResolvedConfig> {
    readonly input: UntagResourceCommandInput;
    constructor(input: UntagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagResourceCommandInput, UntagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
