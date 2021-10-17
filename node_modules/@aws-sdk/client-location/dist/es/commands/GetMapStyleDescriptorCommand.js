import { __extends } from "tslib";
import { GetMapStyleDescriptorRequest, GetMapStyleDescriptorResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMapStyleDescriptorCommand, serializeAws_restJson1GetMapStyleDescriptorCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the map style descriptor from a map resource. </p>
 *         <p>The style descriptor contains speciﬁcations on how features render on a map. For
 *             example, what data to display, what order to display the data in, and the style for the
 *             data. Style descriptors follow the Mapbox Style Specification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapStyleDescriptorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapStyleDescriptorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapStyleDescriptorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapStyleDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetMapStyleDescriptorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMapStyleDescriptorCommand = /** @class */ (function (_super) {
    __extends(GetMapStyleDescriptorCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMapStyleDescriptorCommand(input) {
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
    GetMapStyleDescriptorCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetMapStyleDescriptorCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMapStyleDescriptorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMapStyleDescriptorResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMapStyleDescriptorCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMapStyleDescriptorCommand(input, context);
    };
    GetMapStyleDescriptorCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMapStyleDescriptorCommand(output, context);
    };
    return GetMapStyleDescriptorCommand;
}($Command));
export { GetMapStyleDescriptorCommand };
//# sourceMappingURL=GetMapStyleDescriptorCommand.js.map