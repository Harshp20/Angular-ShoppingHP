import { __extends } from "tslib";
import { CreateTrackerRequest, CreateTrackerResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateTrackerCommand, serializeAws_restJson1CreateTrackerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a tracker resource in your AWS account, which lets you retrieve current and
 *             historical location of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrackerCommandInput} for command's `input` shape.
 * @see {@link CreateTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTrackerCommand = /** @class */ (function (_super) {
    __extends(CreateTrackerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTrackerCommand(input) {
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
    CreateTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreateTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTrackerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTrackerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateTrackerCommand(input, context);
    };
    CreateTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateTrackerCommand(output, context);
    };
    return CreateTrackerCommand;
}($Command));
export { CreateTrackerCommand };
//# sourceMappingURL=CreateTrackerCommand.js.map