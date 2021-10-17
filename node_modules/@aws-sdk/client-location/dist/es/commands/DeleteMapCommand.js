import { __extends } from "tslib";
import { DeleteMapRequest, DeleteMapResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteMapCommand, serializeAws_restJson1DeleteMapCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a map resource from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently. If the map is being used in an application,
 *                 the map may not render.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMapCommandInput} for command's `input` shape.
 * @see {@link DeleteMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMapCommand = /** @class */ (function (_super) {
    __extends(DeleteMapCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMapCommand(input) {
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
    DeleteMapCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeleteMapCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMapRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMapResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMapCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteMapCommand(input, context);
    };
    DeleteMapCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteMapCommand(output, context);
    };
    return DeleteMapCommand;
}($Command));
export { DeleteMapCommand };
//# sourceMappingURL=DeleteMapCommand.js.map