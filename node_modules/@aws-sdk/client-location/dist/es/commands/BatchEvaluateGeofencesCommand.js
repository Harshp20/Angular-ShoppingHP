import { __extends } from "tslib";
import { BatchEvaluateGeofencesRequest, BatchEvaluateGeofencesResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchEvaluateGeofencesCommand, serializeAws_restJson1BatchEvaluateGeofencesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Evaluates device positions against the geofence geometries from a given geofence
 *             collection. The evaluation determines if the device has entered or exited a geofenced
 *             area, which publishes ENTER or EXIT geofence events to Amazon EventBridge.</p>
 *         <note>
 *             <p>The last geofence that a device was observed within, if any, is tracked for 30
 *                 days after the most recent device position update</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchEvaluateGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchEvaluateGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchEvaluateGeofencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEvaluateGeofencesCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchEvaluateGeofencesCommand = /** @class */ (function (_super) {
    __extends(BatchEvaluateGeofencesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchEvaluateGeofencesCommand(input) {
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
    BatchEvaluateGeofencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchEvaluateGeofencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchEvaluateGeofencesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchEvaluateGeofencesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchEvaluateGeofencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchEvaluateGeofencesCommand(input, context);
    };
    BatchEvaluateGeofencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchEvaluateGeofencesCommand(output, context);
    };
    return BatchEvaluateGeofencesCommand;
}($Command));
export { BatchEvaluateGeofencesCommand };
//# sourceMappingURL=BatchEvaluateGeofencesCommand.js.map