import { __extends } from "tslib";
import { DeletePlaceIndexRequest, DeletePlaceIndexResponse } from "../models/models_0";
import { deserializeAws_restJson1DeletePlaceIndexCommand, serializeAws_restJson1DeletePlaceIndexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a place index resource from your AWS account.</p>
 *          <note>
 *             <p>This operation deletes the resource permanently.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeletePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeletePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeletePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link DeletePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePlaceIndexCommand = /** @class */ (function (_super) {
    __extends(DeletePlaceIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePlaceIndexCommand(input) {
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
    DeletePlaceIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeletePlaceIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePlaceIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeletePlaceIndexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePlaceIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePlaceIndexCommand(input, context);
    };
    DeletePlaceIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePlaceIndexCommand(output, context);
    };
    return DeletePlaceIndexCommand;
}($Command));
export { DeletePlaceIndexCommand };
//# sourceMappingURL=DeletePlaceIndexCommand.js.map