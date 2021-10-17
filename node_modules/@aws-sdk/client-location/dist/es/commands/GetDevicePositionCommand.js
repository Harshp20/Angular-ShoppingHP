import { __extends } from "tslib";
import { GetDevicePositionRequest, GetDevicePositionResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDevicePositionCommand, serializeAws_restJson1GetDevicePositionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a device's most recent position according to its sample time.</p>
 *          <note>
 *             <p>Device positions are deleted after 30 days.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDevicePositionCommandInput} for command's `input` shape.
 * @see {@link GetDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDevicePositionCommand = /** @class */ (function (_super) {
    __extends(GetDevicePositionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDevicePositionCommand(input) {
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
    GetDevicePositionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetDevicePositionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDevicePositionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDevicePositionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDevicePositionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDevicePositionCommand(input, context);
    };
    GetDevicePositionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDevicePositionCommand(output, context);
    };
    return GetDevicePositionCommand;
}($Command));
export { GetDevicePositionCommand };
//# sourceMappingURL=GetDevicePositionCommand.js.map