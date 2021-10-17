import { __extends } from "tslib";
import { SearchPlaceIndexForTextRequest, SearchPlaceIndexForTextResponse } from "../models/models_0";
import { deserializeAws_restJson1SearchPlaceIndexForTextCommand, serializeAws_restJson1SearchPlaceIndexForTextCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var SearchPlaceIndexForTextCommand = /** @class */ (function (_super) {
    __extends(SearchPlaceIndexForTextCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchPlaceIndexForTextCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    SearchPlaceIndexForTextCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "SearchPlaceIndexForTextCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchPlaceIndexForTextRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchPlaceIndexForTextResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchPlaceIndexForTextCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchPlaceIndexForTextCommand(input, context);
    };
    SearchPlaceIndexForTextCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchPlaceIndexForTextCommand(output, context);
    };
    return SearchPlaceIndexForTextCommand;
}($Command));
export { SearchPlaceIndexForTextCommand };
//# sourceMappingURL=SearchPlaceIndexForTextCommand.js.map