import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreateTrackerRequest, CreateTrackerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTrackerCommandInput extends CreateTrackerRequest {
}
export interface CreateTrackerCommandOutput extends CreateTrackerResponse, __MetadataBearer {
}
/**
 * <p>Creates a tracker resource in your AWS account, which lets you retrieve current and
 *             historical location of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrackerCommandInput} for command's `input` shape.
 * @see {@link CreateTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTrackerCommand extends $Command<CreateTrackerCommandInput, CreateTrackerCommandOutput, LocationClientResolvedConfig> {
    readonly input: CreateTrackerCommandInput;
    constructor(input: CreateTrackerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrackerCommandInput, CreateTrackerCommandOutput>;
    private serialize;
    private deserialize;
}
