import { __extends } from "tslib";
import { CreateMapRequest, CreateMapResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateMapCommand, serializeAws_restJson1CreateMapCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a map resource in your AWS account, which provides map tiles of different
 *             styles sourced from global location data providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMapCommandInput} for command's `input` shape.
 * @see {@link CreateMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMapCommand = /** @class */ (function (_super) {
    __extends(CreateMapCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMapCommand(input) {
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
    CreateMapCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreateMapCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMapRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMapResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMapCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMapCommand(input, context);
    };
    CreateMapCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMapCommand(output, context);
    };
    return CreateMapCommand;
}($Command));
export { CreateMapCommand };
//# sourceMappingURL=CreateMapCommand.js.map