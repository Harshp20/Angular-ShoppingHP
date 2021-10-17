import { __extends } from "tslib";
import { ListTrackersRequest, ListTrackersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListTrackersCommand, serializeAws_restJson1ListTrackersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists tracker resources in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListTrackersCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListTrackersCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListTrackersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrackersCommandInput} for command's `input` shape.
 * @see {@link ListTrackersCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTrackersCommand = /** @class */ (function (_super) {
    __extends(ListTrackersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTrackersCommand(input) {
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
    ListTrackersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "ListTrackersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTrackersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTrackersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTrackersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTrackersCommand(input, context);
    };
    ListTrackersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTrackersCommand(output, context);
    };
    return ListTrackersCommand;
}($Command));
export { ListTrackersCommand };
//# sourceMappingURL=ListTrackersCommand.js.map