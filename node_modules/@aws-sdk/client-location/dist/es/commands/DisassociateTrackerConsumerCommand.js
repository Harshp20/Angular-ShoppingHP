import { __extends } from "tslib";
import { DisassociateTrackerConsumerRequest, DisassociateTrackerConsumerResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateTrackerConsumerCommand, serializeAws_restJson1DisassociateTrackerConsumerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the association between a tracker resource and a geofence collection.</p>
 *         <note>
 *             <p>Once you unlink a tracker resource from a geofence collection, the tracker
 *                 positions will no longer be automatically evaluated against geofences.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DisassociateTrackerConsumerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DisassociateTrackerConsumerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DisassociateTrackerConsumerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTrackerConsumerCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrackerConsumerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateTrackerConsumerCommand = /** @class */ (function (_super) {
    __extends(DisassociateTrackerConsumerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateTrackerConsumerCommand(input) {
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
    DisassociateTrackerConsumerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DisassociateTrackerConsumerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateTrackerConsumerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateTrackerConsumerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateTrackerConsumerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateTrackerConsumerCommand(input, context);
    };
    DisassociateTrackerConsumerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateTrackerConsumerCommand(output, context);
    };
    return DisassociateTrackerConsumerCommand;
}($Command));
export { DisassociateTrackerConsumerCommand };
//# sourceMappingURL=DisassociateTrackerConsumerCommand.js.map