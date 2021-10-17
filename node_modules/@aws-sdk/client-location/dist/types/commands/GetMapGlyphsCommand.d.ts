import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetMapGlyphsRequest, GetMapGlyphsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMapGlyphsCommandInput extends GetMapGlyphsRequest {
}
export interface GetMapGlyphsCommandOutput extends GetMapGlyphsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves glyphs used to display labels on a map.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapGlyphsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapGlyphsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapGlyphsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapGlyphsCommandInput} for command's `input` shape.
 * @see {@link GetMapGlyphsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMapGlyphsCommand extends $Command<GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput, LocationClientResolvedConfig> {
    readonly input: GetMapGlyphsCommandInput;
    constructor(input: GetMapGlyphsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput>;
    private serialize;
    private deserialize;
}
