"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMapCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a map resource from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently. If the map is being used in an application,
 *                 the map may not render.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteMapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMapCommandInput} for command's `input` shape.
 * @see {@link DeleteMapCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteMapCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteMapCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteMapRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteMapResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteMapCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteMapCommand(output, context);
    }
}
exports.DeleteMapCommand = DeleteMapCommand;
//# sourceMappingURL=DeleteMapCommand.js.map