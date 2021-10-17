"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateRouteCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CalculateRouteCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LocationClient";
        const commandName = "CalculateRouteCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CalculateRouteRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CalculateRouteResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CalculateRouteCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CalculateRouteCommand(output, context);
    }
}
exports.CalculateRouteCommand = CalculateRouteCommand;
//# sourceMappingURL=CalculateRouteCommand.js.map