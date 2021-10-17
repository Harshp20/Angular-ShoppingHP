import { __extends } from "tslib";
import { ListDevicePositionsRequest, ListDevicePositionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDevicePositionsCommand, serializeAws_restJson1ListDevicePositionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the latest device positions for requested devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListDevicePositionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListDevicePositionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListDevicePositionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicePositionsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePositionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDevicePositionsCommand = /** @class */ (function (_super) {
    __extends(ListDevicePositionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDevicePositionsCommand(input) {
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
    ListDevicePositionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListDevicePositionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDevicePositionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDevicePositionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDevicePositionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDevicePositionsCommand(input, context);
    };
    ListDevicePositionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDevicePositionsCommand(output, context);
    };
    return ListDevicePositionsCommand;
}($Command));
export { ListDevicePositionsCommand };
//# sourceMappingURL=ListDevicePositionsCommand.js.map