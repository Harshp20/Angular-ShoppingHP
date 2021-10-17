import { __extends } from "tslib";
import { DescribeGeofenceCollectionRequest, DescribeGeofenceCollectionResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeGeofenceCollectionCommand, serializeAws_restJson1DescribeGeofenceCollectionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the geofence collection details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribeGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link DescribeGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGeofenceCollectionCommand = /** @class */ (function (_super) {
    __extends(DescribeGeofenceCollectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGeofenceCollectionCommand(input) {
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
    DescribeGeofenceCollectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribeGeofenceCollectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGeofenceCollectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGeofenceCollectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGeofenceCollectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeGeofenceCollectionCommand(input, context);
    };
    DescribeGeofenceCollectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeGeofenceCollectionCommand(output, context);
    };
    return DescribeGeofenceCollectionCommand;
}($Command));
export { DescribeGeofenceCollectionCommand };
//# sourceMappingURL=DescribeGeofenceCollectionCommand.js.map