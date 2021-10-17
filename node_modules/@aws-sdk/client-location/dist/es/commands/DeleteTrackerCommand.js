import { __extends } from "tslib";
import { DeleteTrackerRequest, DeleteTrackerResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteTrackerCommand, serializeAws_restJson1DeleteTrackerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a tracker resource from your AWS account.</p>
 *          <note>
 *             <p>This operation deletes the resource permanently. If the tracker resource is in use, you may
 *                 encounter an error. Make sure that the target resource isn't a dependency for your
 *                 applications.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrackerCommandInput} for command's `input` shape.
 * @see {@link DeleteTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTrackerCommand = /** @class */ (function (_super) {
    __extends(DeleteTrackerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTrackerCommand(input) {
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
    DeleteTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DeleteTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTrackerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTrackerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteTrackerCommand(input, context);
    };
    DeleteTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTrackerCommand(output, context);
    };
    return DeleteTrackerCommand;
}($Command));
export { DeleteTrackerCommand };
//# sourceMappingURL=DeleteTrackerCommand.js.map