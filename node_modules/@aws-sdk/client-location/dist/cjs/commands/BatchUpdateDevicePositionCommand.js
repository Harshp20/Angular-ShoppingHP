"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpdateDevicePositionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Uploads position update data for one or more devices to a tracker resource. Amazon Location
 *             uses the data when reporting the last known device position and position history.</p>
 *          <note>
 *            <p>Only one position update is stored per sample time. Location data is sampled at a
 *                 fixed rate of one position per 30-second interval and retained for 30 days before
 *                 it's deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchUpdateDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchUpdateDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchUpdateDevicePositionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDevicePositionCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class BatchUpdateDevicePositionCommand extends smithy_client_1.Command {
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
        const commandName = "BatchUpdateDevicePositionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchUpdateDevicePositionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchUpdateDevicePositionResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1BatchUpdateDevicePositionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1BatchUpdateDevicePositionCommand(output, context);
    }
}
exports.BatchUpdateDevicePositionCommand = BatchUpdateDevicePositionCommand;
//# sourceMappingURL=BatchUpdateDevicePositionCommand.js.map