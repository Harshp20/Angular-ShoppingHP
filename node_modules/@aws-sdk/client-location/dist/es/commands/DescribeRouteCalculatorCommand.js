import { __extends } from "tslib";
import { DescribeRouteCalculatorRequest, DescribeRouteCalculatorResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRouteCalculatorCommand, serializeAws_restJson1DescribeRouteCalculatorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the route calculator resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribeRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRouteCalculatorCommand = /** @class */ (function (_super) {
    __extends(DescribeRouteCalculatorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRouteCalculatorCommand(input) {
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
    DescribeRouteCalculatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribeRouteCalculatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRouteCalculatorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRouteCalculatorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRouteCalculatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRouteCalculatorCommand(input, context);
    };
    DescribeRouteCalculatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRouteCalculatorCommand(output, context);
    };
    return DescribeRouteCalculatorCommand;
}($Command));
export { DescribeRouteCalculatorCommand };
//# sourceMappingURL=DescribeRouteCalculatorCommand.js.map