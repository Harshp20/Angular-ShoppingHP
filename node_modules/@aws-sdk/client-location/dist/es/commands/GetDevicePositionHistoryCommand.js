import { __extends } from "tslib";
import { GetDevicePositionHistoryRequest, GetDevicePositionHistoryResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDevicePositionHistoryCommand, serializeAws_restJson1GetDevicePositionHistoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the device position history from a tracker resource within a specified range
 *             of time.</p>
 *          <note>
 *            <p>Device positions are deleted after 30 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionHistoryCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionHistoryCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetDevicePositionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePositionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionHistoryCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDevicePositionHistoryCommand = /** @class */ (function (_super) {
    __extends(GetDevicePositionHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDevicePositionHistoryCommand(input) {
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
    GetDevicePositionHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetDevicePositionHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDevicePositionHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDevicePositionHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDevicePositionHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDevicePositionHistoryCommand(input, context);
    };
    GetDevicePositionHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDevicePositionHistoryCommand(output, context);
    };
    return GetDevicePositionHistoryCommand;
}($Command));
export { GetDevicePositionHistoryCommand };
//# sourceMappingURL=GetDevicePositionHistoryCommand.js.map