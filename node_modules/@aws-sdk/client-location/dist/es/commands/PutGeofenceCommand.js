import { __extends } from "tslib";
import { PutGeofenceRequest, PutGeofenceResponse } from "../models/models_0";
import { deserializeAws_restJson1PutGeofenceCommand, serializeAws_restJson1PutGeofenceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stores a geofence geometry in a given geofence collection, or updates the geometry of
 *             an existing geofence if a geofence ID is included in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, PutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, PutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new PutGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutGeofenceCommandInput} for command's `input` shape.
 * @see {@link PutGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutGeofenceCommand = /** @class */ (function (_super) {
    __extends(PutGeofenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutGeofenceCommand(input) {
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
    PutGeofenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "PutGeofenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutGeofenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutGeofenceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutGeofenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutGeofenceCommand(input, context);
    };
    PutGeofenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutGeofenceCommand(output, context);
    };
    return PutGeofenceCommand;
}($Command));
export { PutGeofenceCommand };
//# sourceMappingURL=PutGeofenceCommand.js.map