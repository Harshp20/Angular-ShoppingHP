import { __extends } from "tslib";
import { SearchPlaceIndexForPositionRequest, SearchPlaceIndexForPositionResponse } from "../models/models_0";
import { deserializeAws_restJson1SearchPlaceIndexForPositionCommand, serializeAws_restJson1SearchPlaceIndexForPositionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Reverse geocodes a given coordinate and returns a legible address. Allows you to search
 *          for Places or points of interest near a given position.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, SearchPlaceIndexForPositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, SearchPlaceIndexForPositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new SearchPlaceIndexForPositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchPlaceIndexForPositionCommandInput} for command's `input` shape.
 * @see {@link SearchPlaceIndexForPositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchPlaceIndexForPositionCommand = /** @class */ (function (_super) {
    __extends(SearchPlaceIndexForPositionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchPlaceIndexForPositionCommand(input) {
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
    SearchPlaceIndexForPositionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "SearchPlaceIndexForPositionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchPlaceIndexForPositionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchPlaceIndexForPositionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchPlaceIndexForPositionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchPlaceIndexForPositionCommand(input, context);
    };
    SearchPlaceIndexForPositionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchPlaceIndexForPositionCommand(output, context);
    };
    return SearchPlaceIndexForPositionCommand;
}($Command));
export { SearchPlaceIndexForPositionCommand };
//# sourceMappingURL=SearchPlaceIndexForPositionCommand.js.map