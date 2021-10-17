import { __extends } from "tslib";
import { BatchPutGeofenceRequest, BatchPutGeofenceResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchPutGeofenceCommand, serializeAws_restJson1BatchPutGeofenceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A batch request for storing geofence geometries into a given geofence collection, or
 *             updates the geometry of an existing geofence if a geofence ID is included in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchPutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchPutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchPutGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutGeofenceCommandInput} for command's `input` shape.
 * @see {@link BatchPutGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchPutGeofenceCommand = /** @class */ (function (_super) {
    __extends(BatchPutGeofenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchPutGeofenceCommand(input) {
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
    BatchPutGeofenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchPutGeofenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchPutGeofenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchPutGeofenceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchPutGeofenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchPutGeofenceCommand(input, context);
    };
    BatchPutGeofenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchPutGeofenceCommand(output, context);
    };
    return BatchPutGeofenceCommand;
}($Command));
export { BatchPutGeofenceCommand };
//# sourceMappingURL=BatchPutGeofenceCommand.js.map