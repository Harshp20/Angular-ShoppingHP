"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchPlaceIndexForTextCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Geocodes free-form text, such as an address, name, city, or region to allow you to
 *          search for Places or points of interest. </p>
 *          <p>Includes the option to apply additional parameters to narrow your list of
 *          results.</p>
 *          <note>
 *             <p>You can search for places near a given position using <code>BiasPosition</code>, or
 *             filter results within a bounding box using <code>FilterBBox</code>. Providing both
 *             parameters simultaneously returns an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForTextCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForTextCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new SearchPlaceIndexForTextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchPlaceIndexForTextCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForTextCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SearchPlaceIndexForTextCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LocationClient";
        const commandName = "SearchPlaceIndexForTextCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SearchPlaceIndexForTextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.SearchPlaceIndexForTextResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1SearchPlaceIndexForTextCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1SearchPlaceIndexForTextCommand(output, context);
    }
}
exports.SearchPlaceIndexForTextCommand = SearchPlaceIndexForTextCommand;
//# sourceMappingURL=SearchPlaceIndexForTextCommand.js.map