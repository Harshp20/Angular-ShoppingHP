import { __extends } from "tslib";
import { GetMapTileRequest, GetMapTileResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMapTileCommand, serializeAws_restJson1GetMapTileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to
 *             render a map. they're addressed using a grid arrangement with an X coordinate, Y
 *             coordinate, and Z (zoom) level. </p>
 *         <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles
 *             both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0)
 *             will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapTileCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapTileCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetMapTileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMapTileCommandInput} for command's `input` shape.
 * @see {@link GetMapTileCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMapTileCommand = /** @class */ (function (_super) {
    __extends(GetMapTileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMapTileCommand(input) {
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
    GetMapTileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "GetMapTileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMapTileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMapTileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMapTileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMapTileCommand(input, context);
    };
    GetMapTileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMapTileCommand(output, context);
    };
    return GetMapTileCommand;
}($Command));
export { GetMapTileCommand };
//# sourceMappingURL=GetMapTileCommand.js.map