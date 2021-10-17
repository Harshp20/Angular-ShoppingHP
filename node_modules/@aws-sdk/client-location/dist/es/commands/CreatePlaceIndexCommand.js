import { __extends } from "tslib";
import { CreatePlaceIndexRequest, CreatePlaceIndexResponse } from "../models/models_0";
import { deserializeAws_restJson1CreatePlaceIndexCommand, serializeAws_restJson1CreatePlaceIndexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a place index resource in your AWS account, which supports functions with
 *          geospatial data sourced from your chosen data provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreatePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreatePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreatePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link CreatePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePlaceIndexCommand = /** @class */ (function (_super) {
    __extends(CreatePlaceIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePlaceIndexCommand(input) {
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
    CreatePlaceIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CreatePlaceIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePlaceIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePlaceIndexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePlaceIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreatePlaceIndexCommand(input, context);
    };
    CreatePlaceIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreatePlaceIndexCommand(output, context);
    };
    return CreatePlaceIndexCommand;
}($Command));
export { CreatePlaceIndexCommand };
//# sourceMappingURL=CreatePlaceIndexCommand.js.map