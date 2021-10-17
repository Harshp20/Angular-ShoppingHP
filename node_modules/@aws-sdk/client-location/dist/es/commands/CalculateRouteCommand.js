import { __extends } from "tslib";
import { CalculateRouteRequest, CalculateRouteResponse } from "../models/models_0";
import { deserializeAws_restJson1CalculateRouteCommand, serializeAws_restJson1CalculateRouteCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html">Calculates a route</a> given the following required parameters:
 *                 <code>DeparturePostiton</code> and <code>DestinationPosition</code>. Requires that
 *             you first <a href="https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html">create
 *                 aroute calculator resource</a>
 *          </p>
 *         <p>By default, a request that doesn't specify a departure time uses the best time of day
 *             to travel with the best traffic conditions when calculating the route.</p>
 *         <p>Additional options include:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#departure-time">Specifying a departure time</a> using either <code>DepartureTime</code> or
 *                         <code>DepartureNow</code>. This calculates a route based on predictive
 *                     traffic data at the given time. </p>
 *                 <note>
 *                     <p>You can't specify both <code>DepartureTime</code> and
 *                             <code>DepartureNow</code> in a single request. Specifying both
 *                         parameters returns an error message.</p>
 *                 </note>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-route.html#travel-mode">Specifying a travel mode</a> using TravelMode. This lets you specify additional
 *                     route preference such as <code>CarModeOptions</code> if traveling by
 *                         <code>Car</code>, or <code>TruckModeOptions</code> if traveling by
 *                         <code>Truck</code>.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CalculateRouteCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CalculateRouteCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CalculateRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CalculateRouteCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CalculateRouteCommand = /** @class */ (function (_super) {
    __extends(CalculateRouteCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CalculateRouteCommand(input) {
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
    CalculateRouteCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LocationClient";
        var commandName = "CalculateRouteCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CalculateRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CalculateRouteResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CalculateRouteCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CalculateRouteCommand(input, context);
    };
    CalculateRouteCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CalculateRouteCommand(output, context);
    };
    return CalculateRouteCommand;
}($Command));
export { CalculateRouteCommand };
//# sourceMappingURL=CalculateRouteCommand.js.map