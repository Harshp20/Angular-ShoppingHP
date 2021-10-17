"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGeofenceCollectionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a geofence collection from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently. If the geofence collection is the
 *                 target of a tracker resource, the devices will no longer be monitored.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link DeleteGeofenceCollectionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteGeofenceCollectionCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteGeofenceCollectionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteGeofenceCollectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteGeofenceCollectionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteGeofenceCollectionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteGeofenceCollectionCommand(output, context);
    }
}
exports.DeleteGeofenceCollectionCommand = DeleteGeofenceCollectionCommand;
//# sourceMappingURL=DeleteGeofenceCollectionCommand.js.map