import { __extends } from "tslib";
import { ListTrackerConsumersRequest, ListTrackerConsumersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListTrackerConsumersCommand, serializeAws_restJson1ListTrackerConsumersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists geofence collections currently associated to the given tracker resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListTrackerConsumersCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListTrackerConsumersCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListTrackerConsumersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrackerConsumersCommandInput} for command's `input` shape.
 * @see {@link ListTrackerConsumersCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrackerConsumersCommand = /** @class */ (function (_super) {
    __extends(ListTrackerConsumersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrackerConsumersCommand(input) {
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
    ListTrackerConsumersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListTrackerConsumersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrackerConsumersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrackerConsumersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrackerConsumersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTrackerConsumersCommand(input, context);
    };
    ListTrackerConsumersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTrackerConsumersCommand(output, context);
    };
    return ListTrackerConsumersCommand;
}($Command));
export { ListTrackerConsumersCommand };
//# sourceMappingURL=ListTrackerConsumersCommand.js.map