import { __extends } from "tslib";
import { GetGeofenceRequest, GetGeofenceResponse } from "../models/models_0";
import { deserializeAws_restJson1GetGeofenceCommand, serializeAws_restJson1GetGeofenceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the geofence details from a geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGeofenceCommandInput} for command's `input` shape.
 * @see {@link GetGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGeofenceCommand = /** @class */ (function (_super) {
    __extends(GetGeofenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGeofenceCommand(input) {
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
    GetGeofenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetGeofenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGeofenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGeofenceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGeofenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGeofenceCommand(input, context);
    };
    GetGeofenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGeofenceCommand(output, context);
    };
    return GetGeofenceCommand;
}($Command));
export { GetGeofenceCommand };
//# sourceMappingURL=GetGeofenceCommand.js.map