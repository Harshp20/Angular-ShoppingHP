"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTrackerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a tracker resource from your AWS account.</p>
 *          <note>
 *             <p>This operation deletes the resource permanently. If the tracker resource is in use, you may
 *                 encounter an error. Make sure that the target resource isn't a dependency for your
 *                 applications.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteTrackerCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteTrackerCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrackerCommandInput} for command's `input` shape.
 * @see {@link DeleteTrackerCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteTrackerCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteTrackerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteTrackerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteTrackerResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteTrackerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteTrackerCommand(output, context);
    }
}
exports.DeleteTrackerCommand = DeleteTrackerCommand;
//# sourceMappingURL=DeleteTrackerCommand.js.map