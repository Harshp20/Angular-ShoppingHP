"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchEvaluateGeofencesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Evaluates device positions against the geofence geometries from a given geofence
 *             collection. The evaluation determines if the device has entered or exited a geofenced
 *             area, which publishes ENTER or EXIT geofence events to Amazon EventBridge.</p>
 *         <note>
 *             <p>The last geofence that a device was observed within, if any, is tracked for 30
 *                 days after the most recent device position update</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchEvaluateGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchEvaluateGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchEvaluateGeofencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEvaluateGeofencesCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchEvaluateGeofencesCommand extends smithy_client_1.Command {
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
        const commandName = "BatchEvaluateGeofencesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchEvaluateGeofencesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchEvaluateGeofencesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BatchEvaluateGeofencesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BatchEvaluateGeofencesCommand(output, context);
    }
}
exports.BatchEvaluateGeofencesCommand = BatchEvaluateGeofencesCommand;
//# sourceMappingURL=BatchEvaluateGeofencesCommand.js.map