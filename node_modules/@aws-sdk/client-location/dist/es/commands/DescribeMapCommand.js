import { __extends } from "tslib";
import { DescribeMapRequest, DescribeMapResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeMapCommand, serializeAws_restJson1DescribeMapCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the map resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribeMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMapCommandInput} for command's `input` shape.
 * @see {@link DescribeMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMapCommand = /** @class */ (function (_super) {
    __extends(DescribeMapCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMapCommand(input) {
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
    DescribeMapCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribeMapCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMapRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMapResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMapCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeMapCommand(input, context);
    };
    DescribeMapCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeMapCommand(output, context);
    };
    return DescribeMapCommand;
}($Command));
export { DescribeMapCommand };
//# sourceMappingURL=DescribeMapCommand.js.map