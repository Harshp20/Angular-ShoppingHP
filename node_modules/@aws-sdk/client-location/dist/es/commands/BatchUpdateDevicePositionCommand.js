import { __extends } from "tslib";
import { BatchUpdateDevicePositionRequest, BatchUpdateDevicePositionResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchUpdateDevicePositionCommand, serializeAws_restJson1BatchUpdateDevicePositionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location
 *             uses the data when reporting the last known device position and position history.</p>
 *          <note>
 *            <p>Only one position update is stored per sample time. Location data is sampled at a
 *                 fixed rate of one position per 30-second interval and retained for 30 days before
 *                 it's deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchUpdateDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchUpdateDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchUpdateDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchUpdateDevicePositionCommand = /** @class */ (function (_super) {
    __extends(BatchUpdateDevicePositionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchUpdateDevicePositionCommand(input) {
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
    BatchUpdateDevicePositionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchUpdateDevicePositionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchUpdateDevicePositionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchUpdateDevicePositionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchUpdateDevicePositionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchUpdateDevicePositionCommand(input, context);
    };
    BatchUpdateDevicePositionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchUpdateDevicePositionCommand(output, context);
    };
    return BatchUpdateDevicePositionCommand;
}($Command));
export { BatchUpdateDevicePositionCommand };
//# sourceMappingURL=BatchUpdateDevicePositionCommand.js.map