import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribePlaceIndexRequest, DescribePlaceIndexResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePlaceIndexCommandInput extends DescribePlaceIndexRequest {
}
export interface DescribePlaceIndexCommandOutput extends DescribePlaceIndexResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the place index resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DescribePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePlaceIndexCommand extends $Command<DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput, LocationClientResolvedConfig> {
    readonly input: DescribePlaceIndexCommandInput;
    constructor(input: DescribePlaceIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput>;
    private serialize;
    private deserialize;
}
