import { __extends } from "tslib";
import { ListMapsRequest, ListMapsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListMapsCommand, serializeAws_restJson1ListMapsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists map resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListMapsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListMapsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListMapsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMapsCommandInput} for command's `input` shape.
 * @see {@link ListMapsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMapsCommand = /** @class */ (function (_super) {
    __extends(ListMapsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMapsCommand(input) {
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
    ListMapsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListMapsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMapsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMapsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMapsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListMapsCommand(input, context);
    };
    ListMapsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListMapsCommand(output, context);
    };
    return ListMapsCommand;
}($Command));
export { ListMapsCommand };
//# sourceMappingURL=ListMapsCommand.js.map