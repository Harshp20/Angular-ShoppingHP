import { __extends } from "tslib";
import { ListGeofencesRequest, ListGeofencesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListGeofencesCommand, serializeAws_restJson1ListGeofencesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists geofences stored in a given geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListGeofencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGeofencesCommandInput} for command's `input` shape.
 * @see {@link ListGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGeofencesCommand = /** @class */ (function (_super) {
    __extends(ListGeofencesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGeofencesCommand(input) {
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
    ListGeofencesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListGeofencesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGeofencesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGeofencesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGeofencesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListGeofencesCommand(input, context);
    };
    ListGeofencesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListGeofencesCommand(output, context);
    };
    return ListGeofencesCommand;
}($Command));
export { ListGeofencesCommand };
//# sourceMappingURL=ListGeofencesCommand.js.map