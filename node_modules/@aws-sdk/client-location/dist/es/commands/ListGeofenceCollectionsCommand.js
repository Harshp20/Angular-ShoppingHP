import { __extends } from "tslib";
import { ListGeofenceCollectionsRequest, ListGeofenceCollectionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListGeofenceCollectionsCommand, serializeAws_restJson1ListGeofenceCollectionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists geofence collections in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListGeofenceCollectionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListGeofenceCollectionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListGeofenceCollectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGeofenceCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListGeofenceCollectionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGeofenceCollectionsCommand = /** @class */ (function (_super) {
    __extends(ListGeofenceCollectionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGeofenceCollectionsCommand(input) {
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
    ListGeofenceCollectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListGeofenceCollectionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGeofenceCollectionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGeofenceCollectionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGeofenceCollectionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGeofenceCollectionsCommand(input, context);
    };
    ListGeofenceCollectionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGeofenceCollectionsCommand(output, context);
    };
    return ListGeofenceCollectionsCommand;
}($Command));
export { ListGeofenceCollectionsCommand };
//# sourceMappingURL=ListGeofenceCollectionsCommand.js.map