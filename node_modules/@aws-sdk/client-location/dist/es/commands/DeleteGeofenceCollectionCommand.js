import { __extends } from "tslib";
import { DeleteGeofenceCollectionRequest, DeleteGeofenceCollectionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteGeofenceCollectionCommand, serializeAws_restJson1DeleteGeofenceCollectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a geofence collection from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently. If the geofence collection is the
 *                 target of a tracker resource, the devices will no longer be monitored.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link DeleteGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGeofenceCollectionCommand = /** @class */ (function (_super) {
    __extends(DeleteGeofenceCollectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGeofenceCollectionCommand(input) {
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
    DeleteGeofenceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeleteGeofenceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGeofenceCollectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGeofenceCollectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGeofenceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteGeofenceCollectionCommand(input, context);
    };
    DeleteGeofenceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteGeofenceCollectionCommand(output, context);
    };
    return DeleteGeofenceCollectionCommand;
}($Command));
export { DeleteGeofenceCollectionCommand };
//# sourceMappingURL=DeleteGeofenceCollectionCommand.js.map