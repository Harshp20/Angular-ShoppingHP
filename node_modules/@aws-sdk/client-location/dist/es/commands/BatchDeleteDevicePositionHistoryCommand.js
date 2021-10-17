import { __extends } from "tslib";
import { BatchDeleteDevicePositionHistoryRequest, BatchDeleteDevicePositionHistoryResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand, serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the position history of one or more devices from a tracker resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchDeleteDevicePositionHistoryCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchDeleteDevicePositionHistoryCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchDeleteDevicePositionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteDevicePositionHistoryCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDevicePositionHistoryCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteDevicePositionHistoryCommand = /** @class */ (function (_super) {
    __extends(BatchDeleteDevicePositionHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDeleteDevicePositionHistoryCommand(input) {
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
    BatchDeleteDevicePositionHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchDeleteDevicePositionHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDeleteDevicePositionHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDeleteDevicePositionHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDeleteDevicePositionHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand(input, context);
    };
    BatchDeleteDevicePositionHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand(output, context);
    };
    return BatchDeleteDevicePositionHistoryCommand;
}($Command));
export { BatchDeleteDevicePositionHistoryCommand };
//# sourceMappingURL=BatchDeleteDevicePositionHistoryCommand.js.map