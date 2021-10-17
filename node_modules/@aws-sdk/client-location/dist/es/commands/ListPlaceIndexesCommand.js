import { __extends } from "tslib";
import { ListPlaceIndexesRequest, ListPlaceIndexesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPlaceIndexesCommand, serializeAws_restJson1ListPlaceIndexesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists place index resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListPlaceIndexesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListPlaceIndexesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListPlaceIndexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlaceIndexesCommandInput} for command's `input` shape.
 * @see {@link ListPlaceIndexesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPlaceIndexesCommand = /** @class */ (function (_super) {
    __extends(ListPlaceIndexesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPlaceIndexesCommand(input) {
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
    ListPlaceIndexesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListPlaceIndexesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPlaceIndexesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPlaceIndexesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPlaceIndexesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPlaceIndexesCommand(input, context);
    };
    ListPlaceIndexesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPlaceIndexesCommand(output, context);
    };
    return ListPlaceIndexesCommand;
}($Command));
export { ListPlaceIndexesCommand };
//# sourceMappingURL=ListPlaceIndexesCommand.js.map