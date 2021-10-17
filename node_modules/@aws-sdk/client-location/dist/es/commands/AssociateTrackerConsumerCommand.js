import { __extends } from "tslib";
import { AssociateTrackerConsumerRequest, AssociateTrackerConsumerResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateTrackerConsumerCommand, serializeAws_restJson1AssociateTrackerConsumerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an association between a geofence collection and a tracker resource. This
 *             allows the tracker resource to communicate location data to the linked geofence
 *             collection.</p>
 *         <note>
 *             <p>Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, AssociateTrackerConsumerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, AssociateTrackerConsumerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new AssociateTrackerConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTrackerConsumerCommandInput} for command's `input` shape.
 * @see {@link AssociateTrackerConsumerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateTrackerConsumerCommand = /** @class */ (function (_super) {
    __extends(AssociateTrackerConsumerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateTrackerConsumerCommand(input) {
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
    AssociateTrackerConsumerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "AssociateTrackerConsumerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateTrackerConsumerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateTrackerConsumerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateTrackerConsumerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateTrackerConsumerCommand(input, context);
    };
    AssociateTrackerConsumerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateTrackerConsumerCommand(output, context);
    };
    return AssociateTrackerConsumerCommand;
}($Command));
export { AssociateTrackerConsumerCommand };
//# sourceMappingURL=AssociateTrackerConsumerCommand.js.map