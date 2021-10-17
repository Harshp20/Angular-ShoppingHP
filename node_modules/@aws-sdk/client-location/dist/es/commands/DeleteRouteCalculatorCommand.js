import { __extends } from "tslib";
import { DeleteRouteCalculatorRequest, DeleteRouteCalculatorResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteRouteCalculatorCommand, serializeAws_restJson1DeleteRouteCalculatorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a route calculator resource from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRouteCalculatorCommand = /** @class */ (function (_super) {
    __extends(DeleteRouteCalculatorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRouteCalculatorCommand(input) {
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
    DeleteRouteCalculatorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeleteRouteCalculatorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRouteCalculatorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRouteCalculatorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRouteCalculatorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRouteCalculatorCommand(input, context);
    };
    DeleteRouteCalculatorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRouteCalculatorCommand(output, context);
    };
    return DeleteRouteCalculatorCommand;
}($Command));
export { DeleteRouteCalculatorCommand };
//# sourceMappingURL=DeleteRouteCalculatorCommand.js.map