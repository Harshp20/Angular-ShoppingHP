import { __extends } from "tslib";
import { CreateRouteCalculatorRequest, CreateRouteCalculatorResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRouteCalculatorCommand, serializeAws_restJson1CreateRouteCalculatorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a route calculator resource in your AWS account.</p>
 *         <p>You can send requests to a route calculator resource to estimate travel time,
 *             distance, and get directions. A route calculator sources traffic and road network data
 *             from your chosen data provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRouteCalculatorCommand = /** @class */ (function (_super) {
    __extends(CreateRouteCalculatorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRouteCalculatorCommand(input) {
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
    CreateRouteCalculatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreateRouteCalculatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRouteCalculatorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRouteCalculatorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRouteCalculatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRouteCalculatorCommand(input, context);
    };
    CreateRouteCalculatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRouteCalculatorCommand(output, context);
    };
    return CreateRouteCalculatorCommand;
}($Command));
export { CreateRouteCalculatorCommand };
//# sourceMappingURL=CreateRouteCalculatorCommand.js.map