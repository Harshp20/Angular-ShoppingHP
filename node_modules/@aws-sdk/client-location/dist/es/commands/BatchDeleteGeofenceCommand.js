import { __extends } from "tslib";
import { BatchDeleteGeofenceRequest, BatchDeleteGeofenceResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchDeleteGeofenceCommand, serializeAws_restJson1BatchDeleteGeofenceCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a batch of geofences from a geofence collection.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchDeleteGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchDeleteGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchDeleteGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteGeofenceCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteGeofenceCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteGeofenceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteGeofenceCommand(input) {
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
    BatchDeleteGeofenceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchDeleteGeofenceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteGeofenceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteGeofenceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteGeofenceCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDeleteGeofenceCommand(input, context);
    };
    BatchDeleteGeofenceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDeleteGeofenceCommand(output, context);
    };
    return BatchDeleteGeofenceCommand;
}($Command));
export { BatchDeleteGeofenceCommand };
//# sourceMappingURL=BatchDeleteGeofenceCommand.js.map