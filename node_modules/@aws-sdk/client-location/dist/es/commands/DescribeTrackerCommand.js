import { __extends } from "tslib";
import { DescribeTrackerRequest, DescribeTrackerResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeTrackerCommand, serializeAws_restJson1DescribeTrackerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the tracker resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DescribeTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrackerCommandInput} for command's `input` shape.
 * @see {@link DescribeTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTrackerCommand = /** @class */ (function (_super) {
    __extends(DescribeTrackerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTrackerCommand(input) {
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
    DescribeTrackerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "DescribeTrackerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTrackerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTrackerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTrackerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeTrackerCommand(input, context);
    };
    DescribeTrackerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeTrackerCommand(output, context);
    };
    return DescribeTrackerCommand;
}($Command));
export { DescribeTrackerCommand };
//# sourceMappingURL=DescribeTrackerCommand.js.map