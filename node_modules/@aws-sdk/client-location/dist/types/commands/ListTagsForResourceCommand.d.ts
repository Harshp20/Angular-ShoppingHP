import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {
}
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResponse, __MetadataBearer {
}
/**
 * <p>Returns the tags for the specified Amazon Location Service resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListTagsForResourceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListTagsForResourceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsForResourceCommand extends $Command<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, LocationClientResolvedConfig> {
    readonly input: ListTagsForResourceCommandInput;
    constructor(input: ListTagsForResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
