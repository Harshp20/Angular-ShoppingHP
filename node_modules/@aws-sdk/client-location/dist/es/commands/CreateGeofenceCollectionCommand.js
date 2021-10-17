import { __extends } from "tslib";
import { CreateGeofenceCollectionRequest, CreateGeofenceCollectionResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateGeofenceCollectionCommand, serializeAws_restJson1CreateGeofenceCollectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a geofence collection, which manages and stores geofences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link CreateGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateGeofenceCollectionCommand = /** @class */ (function (_super) {
    __extends(CreateGeofenceCollectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateGeofenceCollectionCommand(input) {
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
    CreateGeofenceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreateGeofenceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateGeofenceCollectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateGeofenceCollectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateGeofenceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateGeofenceCollectionCommand(input, context);
    };
    CreateGeofenceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateGeofenceCollectionCommand(output, context);
    };
    return CreateGeofenceCollectionCommand;
}($Command));
export { CreateGeofenceCollectionCommand };
//# sourceMappingURL=CreateGeofenceCollectionCommand.js.map