import { __extends } from "tslib";
import { BatchGetDevicePositionRequest, BatchGetDevicePositionResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchGetDevicePositionCommand, serializeAws_restJson1BatchGetDevicePositionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A batch request to retrieve all device positions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchGetDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchGetDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchGetDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchGetDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchGetDevicePositionCommand = /** @class */ (function (_super) {
    __extends(BatchGetDevicePositionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchGetDevicePositionCommand(input) {
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
    BatchGetDevicePositionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "BatchGetDevicePositionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchGetDevicePositionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchGetDevicePositionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchGetDevicePositionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchGetDevicePositionCommand(input, context);
    };
    BatchGetDevicePositionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchGetDevicePositionCommand(output, context);
    };
    return BatchGetDevicePositionCommand;
}($Command));
export { BatchGetDevicePositionCommand };
//# sourceMappingURL=BatchGetDevicePositionCommand.js.map