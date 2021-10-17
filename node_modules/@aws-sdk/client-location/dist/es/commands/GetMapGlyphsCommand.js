import { __extends } from "tslib";
import { GetMapGlyphsRequest, GetMapGlyphsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMapGlyphsCommand, serializeAws_restJson1GetMapGlyphsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves glyphs used to display labels on a map.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapGlyphsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapGlyphsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapGlyphsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapGlyphsCommandInput} for command's `input` shape.
 * @see {@link GetMapGlyphsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMapGlyphsCommand = /** @class */ (function (_super) {
    __extends(GetMapGlyphsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMapGlyphsCommand(input) {
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
    GetMapGlyphsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetMapGlyphsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMapGlyphsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMapGlyphsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMapGlyphsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMapGlyphsCommand(input, context);
    };
    GetMapGlyphsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMapGlyphsCommand(output, context);
    };
    return GetMapGlyphsCommand;
}($Command));
export { GetMapGlyphsCommand };
//# sourceMappingURL=GetMapGlyphsCommand.js.map