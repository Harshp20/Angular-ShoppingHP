"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlaceIndexRequest = exports.DataSourceConfiguration = exports.CreateMapResponse = exports.CreateMapRequest = exports.MapConfiguration = exports.CreateGeofenceCollectionResponse = exports.CreateGeofenceCollectionRequest = exports.CalculateRouteResponse = exports.CalculateRouteSummary = exports.Leg = exports.Step = exports.LegGeometry = exports.CalculateRouteRequest = exports.CalculateRouteTruckModeOptions = exports.TruckWeight = exports.TruckDimensions = exports.CalculateRouteCarModeOptions = exports.BatchUpdateDevicePositionResponse = exports.BatchUpdateDevicePositionError = exports.BatchUpdateDevicePositionRequest = exports.BatchPutGeofenceResponse = exports.BatchPutGeofenceSuccess = exports.BatchPutGeofenceError = exports.BatchPutGeofenceRequest = exports.BatchPutGeofenceRequestEntry = exports.GeofenceGeometry = exports.BatchGetDevicePositionResponse = exports.BatchGetDevicePositionError = exports.DevicePosition = exports.BatchGetDevicePositionRequest = exports.BatchEvaluateGeofencesResponse = exports.BatchEvaluateGeofencesError = exports.BatchEvaluateGeofencesRequest = exports.DevicePositionUpdate = exports.BatchDeleteGeofenceResponse = exports.BatchDeleteGeofenceError = exports.BatchDeleteGeofenceRequest = exports.BatchDeleteDevicePositionHistoryResponse = exports.BatchDeleteDevicePositionHistoryError = exports.BatchItemError = exports.BatchDeleteDevicePositionHistoryRequest = exports.ValidationException = exports.ValidationExceptionField = exports.ThrottlingException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AssociateTrackerConsumerResponse = exports.AssociateTrackerConsumerRequest = exports.AccessDeniedException = void 0;
exports.GetMapSpritesRequest = exports.GetMapGlyphsResponse = exports.GetMapGlyphsRequest = exports.GetDevicePositionHistoryResponse = exports.GetDevicePositionHistoryRequest = exports.GetDevicePositionResponse = exports.GetDevicePositionRequest = exports.PutGeofenceResponse = exports.PutGeofenceRequest = exports.ListGeofencesResponse = exports.ListGeofenceResponseEntry = exports.ListGeofencesRequest = exports.ListGeofenceCollectionsResponse = exports.ListGeofenceCollectionsResponseEntry = exports.ListGeofenceCollectionsRequest = exports.GetGeofenceResponse = exports.GetGeofenceRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.DisassociateTrackerConsumerResponse = exports.DisassociateTrackerConsumerRequest = exports.DescribeTrackerResponse = exports.DescribeTrackerRequest = exports.DescribeRouteCalculatorResponse = exports.DescribeRouteCalculatorRequest = exports.DescribePlaceIndexResponse = exports.DescribePlaceIndexRequest = exports.DescribeMapResponse = exports.DescribeMapRequest = exports.DescribeGeofenceCollectionResponse = exports.DescribeGeofenceCollectionRequest = exports.DeleteTrackerResponse = exports.DeleteTrackerRequest = exports.DeleteRouteCalculatorResponse = exports.DeleteRouteCalculatorRequest = exports.DeletePlaceIndexResponse = exports.DeletePlaceIndexRequest = exports.DeleteMapResponse = exports.DeleteMapRequest = exports.DeleteGeofenceCollectionResponse = exports.DeleteGeofenceCollectionRequest = exports.CreateTrackerResponse = exports.CreateTrackerRequest = exports.CreateRouteCalculatorResponse = exports.CreateRouteCalculatorRequest = exports.CreatePlaceIndexResponse = void 0;
exports.SearchPlaceIndexForTextResponse = exports.SearchPlaceIndexForTextSummary = exports.SearchForTextResult = exports.SearchPlaceIndexForTextRequest = exports.SearchPlaceIndexForPositionResponse = exports.SearchPlaceIndexForPositionSummary = exports.SearchForPositionResult = exports.Place = exports.PlaceGeometry = exports.SearchPlaceIndexForPositionRequest = exports.ListTrackersResponse = exports.ListTrackersResponseEntry = exports.ListTrackersRequest = exports.ListTrackerConsumersResponse = exports.ListTrackerConsumersRequest = exports.ListRouteCalculatorsResponse = exports.ListRouteCalculatorsResponseEntry = exports.ListRouteCalculatorsRequest = exports.ListPlaceIndexesResponse = exports.ListPlaceIndexesResponseEntry = exports.ListPlaceIndexesRequest = exports.ListMapsResponse = exports.ListMapsResponseEntry = exports.ListMapsRequest = exports.ListDevicePositionsResponse = exports.ListDevicePositionsResponseEntry = exports.ListDevicePositionsRequest = exports.GetMapTileResponse = exports.GetMapTileRequest = exports.GetMapStyleDescriptorResponse = exports.GetMapStyleDescriptorRequest = exports.GetMapSpritesResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AssociateTrackerConsumerRequest;
(function (AssociateTrackerConsumerRequest) {
    /**
     * @internal
     */
    AssociateTrackerConsumerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTrackerConsumerRequest = exports.AssociateTrackerConsumerRequest || (exports.AssociateTrackerConsumerRequest = {}));
var AssociateTrackerConsumerResponse;
(function (AssociateTrackerConsumerResponse) {
    /**
     * @internal
     */
    AssociateTrackerConsumerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTrackerConsumerResponse = exports.AssociateTrackerConsumerResponse || (exports.AssociateTrackerConsumerResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var BatchDeleteDevicePositionHistoryRequest;
(function (BatchDeleteDevicePositionHistoryRequest) {
    /**
     * @internal
     */
    BatchDeleteDevicePositionHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteDevicePositionHistoryRequest = exports.BatchDeleteDevicePositionHistoryRequest || (exports.BatchDeleteDevicePositionHistoryRequest = {}));
var BatchItemError;
(function (BatchItemError) {
    /**
     * @internal
     */
    BatchItemError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchItemError = exports.BatchItemError || (exports.BatchItemError = {}));
var BatchDeleteDevicePositionHistoryError;
(function (BatchDeleteDevicePositionHistoryError) {
    /**
     * @internal
     */
    BatchDeleteDevicePositionHistoryError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteDevicePositionHistoryError = exports.BatchDeleteDevicePositionHistoryError || (exports.BatchDeleteDevicePositionHistoryError = {}));
var BatchDeleteDevicePositionHistoryResponse;
(function (BatchDeleteDevicePositionHistoryResponse) {
    /**
     * @internal
     */
    BatchDeleteDevicePositionHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteDevicePositionHistoryResponse = exports.BatchDeleteDevicePositionHistoryResponse || (exports.BatchDeleteDevicePositionHistoryResponse = {}));
var BatchDeleteGeofenceRequest;
(function (BatchDeleteGeofenceRequest) {
    /**
     * @internal
     */
    BatchDeleteGeofenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteGeofenceRequest = exports.BatchDeleteGeofenceRequest || (exports.BatchDeleteGeofenceRequest = {}));
var BatchDeleteGeofenceError;
(function (BatchDeleteGeofenceError) {
    /**
     * @internal
     */
    BatchDeleteGeofenceError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteGeofenceError = exports.BatchDeleteGeofenceError || (exports.BatchDeleteGeofenceError = {}));
var BatchDeleteGeofenceResponse;
(function (BatchDeleteGeofenceResponse) {
    /**
     * @internal
     */
    BatchDeleteGeofenceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchDeleteGeofenceResponse = exports.BatchDeleteGeofenceResponse || (exports.BatchDeleteGeofenceResponse = {}));
var DevicePositionUpdate;
(function (DevicePositionUpdate) {
    /**
     * @internal
     */
    DevicePositionUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    });
})(DevicePositionUpdate = exports.DevicePositionUpdate || (exports.DevicePositionUpdate = {}));
var BatchEvaluateGeofencesRequest;
(function (BatchEvaluateGeofencesRequest) {
    /**
     * @internal
     */
    BatchEvaluateGeofencesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DevicePositionUpdates && {
            DevicePositionUpdates: obj.DevicePositionUpdates.map((item) => DevicePositionUpdate.filterSensitiveLog(item)),
        }),
    });
})(BatchEvaluateGeofencesRequest = exports.BatchEvaluateGeofencesRequest || (exports.BatchEvaluateGeofencesRequest = {}));
var BatchEvaluateGeofencesError;
(function (BatchEvaluateGeofencesError) {
    /**
     * @internal
     */
    BatchEvaluateGeofencesError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchEvaluateGeofencesError = exports.BatchEvaluateGeofencesError || (exports.BatchEvaluateGeofencesError = {}));
var BatchEvaluateGeofencesResponse;
(function (BatchEvaluateGeofencesResponse) {
    /**
     * @internal
     */
    BatchEvaluateGeofencesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchEvaluateGeofencesResponse = exports.BatchEvaluateGeofencesResponse || (exports.BatchEvaluateGeofencesResponse = {}));
var BatchGetDevicePositionRequest;
(function (BatchGetDevicePositionRequest) {
    /**
     * @internal
     */
    BatchGetDevicePositionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDevicePositionRequest = exports.BatchGetDevicePositionRequest || (exports.BatchGetDevicePositionRequest = {}));
var DevicePosition;
(function (DevicePosition) {
    /**
     * @internal
     */
    DevicePosition.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    });
})(DevicePosition = exports.DevicePosition || (exports.DevicePosition = {}));
var BatchGetDevicePositionError;
(function (BatchGetDevicePositionError) {
    /**
     * @internal
     */
    BatchGetDevicePositionError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetDevicePositionError = exports.BatchGetDevicePositionError || (exports.BatchGetDevicePositionError = {}));
var BatchGetDevicePositionResponse;
(function (BatchGetDevicePositionResponse) {
    /**
     * @internal
     */
    BatchGetDevicePositionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DevicePositions && {
            DevicePositions: obj.DevicePositions.map((item) => DevicePosition.filterSensitiveLog(item)),
        }),
    });
})(BatchGetDevicePositionResponse = exports.BatchGetDevicePositionResponse || (exports.BatchGetDevicePositionResponse = {}));
var GeofenceGeometry;
(function (GeofenceGeometry) {
    /**
     * @internal
     */
    GeofenceGeometry.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => smithy_client_1.SENSITIVE_STRING) }),
    });
})(GeofenceGeometry = exports.GeofenceGeometry || (exports.GeofenceGeometry = {}));
var BatchPutGeofenceRequestEntry;
(function (BatchPutGeofenceRequestEntry) {
    /**
     * @internal
     */
    BatchPutGeofenceRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }),
    });
})(BatchPutGeofenceRequestEntry = exports.BatchPutGeofenceRequestEntry || (exports.BatchPutGeofenceRequestEntry = {}));
var BatchPutGeofenceRequest;
(function (BatchPutGeofenceRequest) {
    /**
     * @internal
     */
    BatchPutGeofenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Entries && { Entries: obj.Entries.map((item) => BatchPutGeofenceRequestEntry.filterSensitiveLog(item)) }),
    });
})(BatchPutGeofenceRequest = exports.BatchPutGeofenceRequest || (exports.BatchPutGeofenceRequest = {}));
var BatchPutGeofenceError;
(function (BatchPutGeofenceError) {
    /**
     * @internal
     */
    BatchPutGeofenceError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutGeofenceError = exports.BatchPutGeofenceError || (exports.BatchPutGeofenceError = {}));
var BatchPutGeofenceSuccess;
(function (BatchPutGeofenceSuccess) {
    /**
     * @internal
     */
    BatchPutGeofenceSuccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutGeofenceSuccess = exports.BatchPutGeofenceSuccess || (exports.BatchPutGeofenceSuccess = {}));
var BatchPutGeofenceResponse;
(function (BatchPutGeofenceResponse) {
    /**
     * @internal
     */
    BatchPutGeofenceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchPutGeofenceResponse = exports.BatchPutGeofenceResponse || (exports.BatchPutGeofenceResponse = {}));
var BatchUpdateDevicePositionRequest;
(function (BatchUpdateDevicePositionRequest) {
    /**
     * @internal
     */
    BatchUpdateDevicePositionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Updates && { Updates: obj.Updates.map((item) => DevicePositionUpdate.filterSensitiveLog(item)) }),
    });
})(BatchUpdateDevicePositionRequest = exports.BatchUpdateDevicePositionRequest || (exports.BatchUpdateDevicePositionRequest = {}));
var BatchUpdateDevicePositionError;
(function (BatchUpdateDevicePositionError) {
    /**
     * @internal
     */
    BatchUpdateDevicePositionError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateDevicePositionError = exports.BatchUpdateDevicePositionError || (exports.BatchUpdateDevicePositionError = {}));
var BatchUpdateDevicePositionResponse;
(function (BatchUpdateDevicePositionResponse) {
    /**
     * @internal
     */
    BatchUpdateDevicePositionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchUpdateDevicePositionResponse = exports.BatchUpdateDevicePositionResponse || (exports.BatchUpdateDevicePositionResponse = {}));
var CalculateRouteCarModeOptions;
(function (CalculateRouteCarModeOptions) {
    /**
     * @internal
     */
    CalculateRouteCarModeOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CalculateRouteCarModeOptions = exports.CalculateRouteCarModeOptions || (exports.CalculateRouteCarModeOptions = {}));
var TruckDimensions;
(function (TruckDimensions) {
    /**
     * @internal
     */
    TruckDimensions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TruckDimensions = exports.TruckDimensions || (exports.TruckDimensions = {}));
var TruckWeight;
(function (TruckWeight) {
    /**
     * @internal
     */
    TruckWeight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TruckWeight = exports.TruckWeight || (exports.TruckWeight = {}));
var CalculateRouteTruckModeOptions;
(function (CalculateRouteTruckModeOptions) {
    /**
     * @internal
     */
    CalculateRouteTruckModeOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CalculateRouteTruckModeOptions = exports.CalculateRouteTruckModeOptions || (exports.CalculateRouteTruckModeOptions = {}));
var CalculateRouteRequest;
(function (CalculateRouteRequest) {
    /**
     * @internal
     */
    CalculateRouteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DeparturePosition && { DeparturePosition: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.DestinationPosition && { DestinationPosition: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.WaypointPositions && { WaypointPositions: smithy_client_1.SENSITIVE_STRING }),
    });
})(CalculateRouteRequest = exports.CalculateRouteRequest || (exports.CalculateRouteRequest = {}));
var LegGeometry;
(function (LegGeometry) {
    /**
     * @internal
     */
    LegGeometry.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.LineString && { LineString: smithy_client_1.SENSITIVE_STRING }),
    });
})(LegGeometry = exports.LegGeometry || (exports.LegGeometry = {}));
var Step;
(function (Step) {
    /**
     * @internal
     */
    Step.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.StartPosition && { StartPosition: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.EndPosition && { EndPosition: smithy_client_1.SENSITIVE_STRING }),
    });
})(Step = exports.Step || (exports.Step = {}));
var Leg;
(function (Leg) {
    /**
     * @internal
     */
    Leg.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.StartPosition && { StartPosition: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.EndPosition && { EndPosition: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Geometry && { Geometry: LegGeometry.filterSensitiveLog(obj.Geometry) }),
        ...(obj.Steps && { Steps: obj.Steps.map((item) => Step.filterSensitiveLog(item)) }),
    });
})(Leg = exports.Leg || (exports.Leg = {}));
var CalculateRouteSummary;
(function (CalculateRouteSummary) {
    /**
     * @internal
     */
    CalculateRouteSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RouteBBox && { RouteBBox: smithy_client_1.SENSITIVE_STRING }),
    });
})(CalculateRouteSummary = exports.CalculateRouteSummary || (exports.CalculateRouteSummary = {}));
var CalculateRouteResponse;
(function (CalculateRouteResponse) {
    /**
     * @internal
     */
    CalculateRouteResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Legs && { Legs: obj.Legs.map((item) => Leg.filterSensitiveLog(item)) }),
        ...(obj.Summary && { Summary: CalculateRouteSummary.filterSensitiveLog(obj.Summary) }),
    });
})(CalculateRouteResponse = exports.CalculateRouteResponse || (exports.CalculateRouteResponse = {}));
var CreateGeofenceCollectionRequest;
(function (CreateGeofenceCollectionRequest) {
    /**
     * @internal
     */
    CreateGeofenceCollectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGeofenceCollectionRequest = exports.CreateGeofenceCollectionRequest || (exports.CreateGeofenceCollectionRequest = {}));
var CreateGeofenceCollectionResponse;
(function (CreateGeofenceCollectionResponse) {
    /**
     * @internal
     */
    CreateGeofenceCollectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGeofenceCollectionResponse = exports.CreateGeofenceCollectionResponse || (exports.CreateGeofenceCollectionResponse = {}));
var MapConfiguration;
(function (MapConfiguration) {
    /**
     * @internal
     */
    MapConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MapConfiguration = exports.MapConfiguration || (exports.MapConfiguration = {}));
var CreateMapRequest;
(function (CreateMapRequest) {
    /**
     * @internal
     */
    CreateMapRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMapRequest = exports.CreateMapRequest || (exports.CreateMapRequest = {}));
var CreateMapResponse;
(function (CreateMapResponse) {
    /**
     * @internal
     */
    CreateMapResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMapResponse = exports.CreateMapResponse || (exports.CreateMapResponse = {}));
var DataSourceConfiguration;
(function (DataSourceConfiguration) {
    /**
     * @internal
     */
    DataSourceConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSourceConfiguration = exports.DataSourceConfiguration || (exports.DataSourceConfiguration = {}));
var CreatePlaceIndexRequest;
(function (CreatePlaceIndexRequest) {
    /**
     * @internal
     */
    CreatePlaceIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlaceIndexRequest = exports.CreatePlaceIndexRequest || (exports.CreatePlaceIndexRequest = {}));
var CreatePlaceIndexResponse;
(function (CreatePlaceIndexResponse) {
    /**
     * @internal
     */
    CreatePlaceIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePlaceIndexResponse = exports.CreatePlaceIndexResponse || (exports.CreatePlaceIndexResponse = {}));
var CreateRouteCalculatorRequest;
(function (CreateRouteCalculatorRequest) {
    /**
     * @internal
     */
    CreateRouteCalculatorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRouteCalculatorRequest = exports.CreateRouteCalculatorRequest || (exports.CreateRouteCalculatorRequest = {}));
var CreateRouteCalculatorResponse;
(function (CreateRouteCalculatorResponse) {
    /**
     * @internal
     */
    CreateRouteCalculatorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRouteCalculatorResponse = exports.CreateRouteCalculatorResponse || (exports.CreateRouteCalculatorResponse = {}));
var CreateTrackerRequest;
(function (CreateTrackerRequest) {
    /**
     * @internal
     */
    CreateTrackerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrackerRequest = exports.CreateTrackerRequest || (exports.CreateTrackerRequest = {}));
var CreateTrackerResponse;
(function (CreateTrackerResponse) {
    /**
     * @internal
     */
    CreateTrackerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTrackerResponse = exports.CreateTrackerResponse || (exports.CreateTrackerResponse = {}));
var DeleteGeofenceCollectionRequest;
(function (DeleteGeofenceCollectionRequest) {
    /**
     * @internal
     */
    DeleteGeofenceCollectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGeofenceCollectionRequest = exports.DeleteGeofenceCollectionRequest || (exports.DeleteGeofenceCollectionRequest = {}));
var DeleteGeofenceCollectionResponse;
(function (DeleteGeofenceCollectionResponse) {
    /**
     * @internal
     */
    DeleteGeofenceCollectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGeofenceCollectionResponse = exports.DeleteGeofenceCollectionResponse || (exports.DeleteGeofenceCollectionResponse = {}));
var DeleteMapRequest;
(function (DeleteMapRequest) {
    /**
     * @internal
     */
    DeleteMapRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMapRequest = exports.DeleteMapRequest || (exports.DeleteMapRequest = {}));
var DeleteMapResponse;
(function (DeleteMapResponse) {
    /**
     * @internal
     */
    DeleteMapResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMapResponse = exports.DeleteMapResponse || (exports.DeleteMapResponse = {}));
var DeletePlaceIndexRequest;
(function (DeletePlaceIndexRequest) {
    /**
     * @internal
     */
    DeletePlaceIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlaceIndexRequest = exports.DeletePlaceIndexRequest || (exports.DeletePlaceIndexRequest = {}));
var DeletePlaceIndexResponse;
(function (DeletePlaceIndexResponse) {
    /**
     * @internal
     */
    DeletePlaceIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePlaceIndexResponse = exports.DeletePlaceIndexResponse || (exports.DeletePlaceIndexResponse = {}));
var DeleteRouteCalculatorRequest;
(function (DeleteRouteCalculatorRequest) {
    /**
     * @internal
     */
    DeleteRouteCalculatorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRouteCalculatorRequest = exports.DeleteRouteCalculatorRequest || (exports.DeleteRouteCalculatorRequest = {}));
var DeleteRouteCalculatorResponse;
(function (DeleteRouteCalculatorResponse) {
    /**
     * @internal
     */
    DeleteRouteCalculatorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRouteCalculatorResponse = exports.DeleteRouteCalculatorResponse || (exports.DeleteRouteCalculatorResponse = {}));
var DeleteTrackerRequest;
(function (DeleteTrackerRequest) {
    /**
     * @internal
     */
    DeleteTrackerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrackerRequest = exports.DeleteTrackerRequest || (exports.DeleteTrackerRequest = {}));
var DeleteTrackerResponse;
(function (DeleteTrackerResponse) {
    /**
     * @internal
     */
    DeleteTrackerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTrackerResponse = exports.DeleteTrackerResponse || (exports.DeleteTrackerResponse = {}));
var DescribeGeofenceCollectionRequest;
(function (DescribeGeofenceCollectionRequest) {
    /**
     * @internal
     */
    DescribeGeofenceCollectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGeofenceCollectionRequest = exports.DescribeGeofenceCollectionRequest || (exports.DescribeGeofenceCollectionRequest = {}));
var DescribeGeofenceCollectionResponse;
(function (DescribeGeofenceCollectionResponse) {
    /**
     * @internal
     */
    DescribeGeofenceCollectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGeofenceCollectionResponse = exports.DescribeGeofenceCollectionResponse || (exports.DescribeGeofenceCollectionResponse = {}));
var DescribeMapRequest;
(function (DescribeMapRequest) {
    /**
     * @internal
     */
    DescribeMapRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMapRequest = exports.DescribeMapRequest || (exports.DescribeMapRequest = {}));
var DescribeMapResponse;
(function (DescribeMapResponse) {
    /**
     * @internal
     */
    DescribeMapResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeMapResponse = exports.DescribeMapResponse || (exports.DescribeMapResponse = {}));
var DescribePlaceIndexRequest;
(function (DescribePlaceIndexRequest) {
    /**
     * @internal
     */
    DescribePlaceIndexRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlaceIndexRequest = exports.DescribePlaceIndexRequest || (exports.DescribePlaceIndexRequest = {}));
var DescribePlaceIndexResponse;
(function (DescribePlaceIndexResponse) {
    /**
     * @internal
     */
    DescribePlaceIndexResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePlaceIndexResponse = exports.DescribePlaceIndexResponse || (exports.DescribePlaceIndexResponse = {}));
var DescribeRouteCalculatorRequest;
(function (DescribeRouteCalculatorRequest) {
    /**
     * @internal
     */
    DescribeRouteCalculatorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRouteCalculatorRequest = exports.DescribeRouteCalculatorRequest || (exports.DescribeRouteCalculatorRequest = {}));
var DescribeRouteCalculatorResponse;
(function (DescribeRouteCalculatorResponse) {
    /**
     * @internal
     */
    DescribeRouteCalculatorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRouteCalculatorResponse = exports.DescribeRouteCalculatorResponse || (exports.DescribeRouteCalculatorResponse = {}));
var DescribeTrackerRequest;
(function (DescribeTrackerRequest) {
    /**
     * @internal
     */
    DescribeTrackerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrackerRequest = exports.DescribeTrackerRequest || (exports.DescribeTrackerRequest = {}));
var DescribeTrackerResponse;
(function (DescribeTrackerResponse) {
    /**
     * @internal
     */
    DescribeTrackerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrackerResponse = exports.DescribeTrackerResponse || (exports.DescribeTrackerResponse = {}));
var DisassociateTrackerConsumerRequest;
(function (DisassociateTrackerConsumerRequest) {
    /**
     * @internal
     */
    DisassociateTrackerConsumerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTrackerConsumerRequest = exports.DisassociateTrackerConsumerRequest || (exports.DisassociateTrackerConsumerRequest = {}));
var DisassociateTrackerConsumerResponse;
(function (DisassociateTrackerConsumerResponse) {
    /**
     * @internal
     */
    DisassociateTrackerConsumerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTrackerConsumerResponse = exports.DisassociateTrackerConsumerResponse || (exports.DisassociateTrackerConsumerResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var GetGeofenceRequest;
(function (GetGeofenceRequest) {
    /**
     * @internal
     */
    GetGeofenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGeofenceRequest = exports.GetGeofenceRequest || (exports.GetGeofenceRequest = {}));
var GetGeofenceResponse;
(function (GetGeofenceResponse) {
    /**
     * @internal
     */
    GetGeofenceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }),
    });
})(GetGeofenceResponse = exports.GetGeofenceResponse || (exports.GetGeofenceResponse = {}));
var ListGeofenceCollectionsRequest;
(function (ListGeofenceCollectionsRequest) {
    /**
     * @internal
     */
    ListGeofenceCollectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGeofenceCollectionsRequest = exports.ListGeofenceCollectionsRequest || (exports.ListGeofenceCollectionsRequest = {}));
var ListGeofenceCollectionsResponseEntry;
(function (ListGeofenceCollectionsResponseEntry) {
    /**
     * @internal
     */
    ListGeofenceCollectionsResponseEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGeofenceCollectionsResponseEntry = exports.ListGeofenceCollectionsResponseEntry || (exports.ListGeofenceCollectionsResponseEntry = {}));
var ListGeofenceCollectionsResponse;
(function (ListGeofenceCollectionsResponse) {
    /**
     * @internal
     */
    ListGeofenceCollectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGeofenceCollectionsResponse = exports.ListGeofenceCollectionsResponse || (exports.ListGeofenceCollectionsResponse = {}));
var ListGeofencesRequest;
(function (ListGeofencesRequest) {
    /**
     * @internal
     */
    ListGeofencesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGeofencesRequest = exports.ListGeofencesRequest || (exports.ListGeofencesRequest = {}));
var ListGeofenceResponseEntry;
(function (ListGeofenceResponseEntry) {
    /**
     * @internal
     */
    ListGeofenceResponseEntry.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }),
    });
})(ListGeofenceResponseEntry = exports.ListGeofenceResponseEntry || (exports.ListGeofenceResponseEntry = {}));
var ListGeofencesResponse;
(function (ListGeofencesResponse) {
    /**
     * @internal
     */
    ListGeofencesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Entries && { Entries: obj.Entries.map((item) => ListGeofenceResponseEntry.filterSensitiveLog(item)) }),
    });
})(ListGeofencesResponse = exports.ListGeofencesResponse || (exports.ListGeofencesResponse = {}));
var PutGeofenceRequest;
(function (PutGeofenceRequest) {
    /**
     * @internal
     */
    PutGeofenceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }),
    });
})(PutGeofenceRequest = exports.PutGeofenceRequest || (exports.PutGeofenceRequest = {}));
var PutGeofenceResponse;
(function (PutGeofenceResponse) {
    /**
     * @internal
     */
    PutGeofenceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutGeofenceResponse = exports.PutGeofenceResponse || (exports.PutGeofenceResponse = {}));
var GetDevicePositionRequest;
(function (GetDevicePositionRequest) {
    /**
     * @internal
     */
    GetDevicePositionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicePositionRequest = exports.GetDevicePositionRequest || (exports.GetDevicePositionRequest = {}));
var GetDevicePositionResponse;
(function (GetDevicePositionResponse) {
    /**
     * @internal
     */
    GetDevicePositionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetDevicePositionResponse = exports.GetDevicePositionResponse || (exports.GetDevicePositionResponse = {}));
var GetDevicePositionHistoryRequest;
(function (GetDevicePositionHistoryRequest) {
    /**
     * @internal
     */
    GetDevicePositionHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDevicePositionHistoryRequest = exports.GetDevicePositionHistoryRequest || (exports.GetDevicePositionHistoryRequest = {}));
var GetDevicePositionHistoryResponse;
(function (GetDevicePositionHistoryResponse) {
    /**
     * @internal
     */
    GetDevicePositionHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DevicePositions && {
            DevicePositions: obj.DevicePositions.map((item) => DevicePosition.filterSensitiveLog(item)),
        }),
    });
})(GetDevicePositionHistoryResponse = exports.GetDevicePositionHistoryResponse || (exports.GetDevicePositionHistoryResponse = {}));
var GetMapGlyphsRequest;
(function (GetMapGlyphsRequest) {
    /**
     * @internal
     */
    GetMapGlyphsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMapGlyphsRequest = exports.GetMapGlyphsRequest || (exports.GetMapGlyphsRequest = {}));
var GetMapGlyphsResponse;
(function (GetMapGlyphsResponse) {
    /**
     * @internal
     */
    GetMapGlyphsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMapGlyphsResponse = exports.GetMapGlyphsResponse || (exports.GetMapGlyphsResponse = {}));
var GetMapSpritesRequest;
(function (GetMapSpritesRequest) {
    /**
     * @internal
     */
    GetMapSpritesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMapSpritesRequest = exports.GetMapSpritesRequest || (exports.GetMapSpritesRequest = {}));
var GetMapSpritesResponse;
(function (GetMapSpritesResponse) {
    /**
     * @internal
     */
    GetMapSpritesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMapSpritesResponse = exports.GetMapSpritesResponse || (exports.GetMapSpritesResponse = {}));
var GetMapStyleDescriptorRequest;
(function (GetMapStyleDescriptorRequest) {
    /**
     * @internal
     */
    GetMapStyleDescriptorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMapStyleDescriptorRequest = exports.GetMapStyleDescriptorRequest || (exports.GetMapStyleDescriptorRequest = {}));
var GetMapStyleDescriptorResponse;
(function (GetMapStyleDescriptorResponse) {
    /**
     * @internal
     */
    GetMapStyleDescriptorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMapStyleDescriptorResponse = exports.GetMapStyleDescriptorResponse || (exports.GetMapStyleDescriptorResponse = {}));
var GetMapTileRequest;
(function (GetMapTileRequest) {
    /**
     * @internal
     */
    GetMapTileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMapTileRequest = exports.GetMapTileRequest || (exports.GetMapTileRequest = {}));
var GetMapTileResponse;
(function (GetMapTileResponse) {
    /**
     * @internal
     */
    GetMapTileResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMapTileResponse = exports.GetMapTileResponse || (exports.GetMapTileResponse = {}));
var ListDevicePositionsRequest;
(function (ListDevicePositionsRequest) {
    /**
     * @internal
     */
    ListDevicePositionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevicePositionsRequest = exports.ListDevicePositionsRequest || (exports.ListDevicePositionsRequest = {}));
var ListDevicePositionsResponseEntry;
(function (ListDevicePositionsResponseEntry) {
    /**
     * @internal
     */
    ListDevicePositionsResponseEntry.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    });
})(ListDevicePositionsResponseEntry = exports.ListDevicePositionsResponseEntry || (exports.ListDevicePositionsResponseEntry = {}));
var ListDevicePositionsResponse;
(function (ListDevicePositionsResponse) {
    /**
     * @internal
     */
    ListDevicePositionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Entries && {
            Entries: obj.Entries.map((item) => ListDevicePositionsResponseEntry.filterSensitiveLog(item)),
        }),
    });
})(ListDevicePositionsResponse = exports.ListDevicePositionsResponse || (exports.ListDevicePositionsResponse = {}));
var ListMapsRequest;
(function (ListMapsRequest) {
    /**
     * @internal
     */
    ListMapsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMapsRequest = exports.ListMapsRequest || (exports.ListMapsRequest = {}));
var ListMapsResponseEntry;
(function (ListMapsResponseEntry) {
    /**
     * @internal
     */
    ListMapsResponseEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMapsResponseEntry = exports.ListMapsResponseEntry || (exports.ListMapsResponseEntry = {}));
var ListMapsResponse;
(function (ListMapsResponse) {
    /**
     * @internal
     */
    ListMapsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMapsResponse = exports.ListMapsResponse || (exports.ListMapsResponse = {}));
var ListPlaceIndexesRequest;
(function (ListPlaceIndexesRequest) {
    /**
     * @internal
     */
    ListPlaceIndexesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlaceIndexesRequest = exports.ListPlaceIndexesRequest || (exports.ListPlaceIndexesRequest = {}));
var ListPlaceIndexesResponseEntry;
(function (ListPlaceIndexesResponseEntry) {
    /**
     * @internal
     */
    ListPlaceIndexesResponseEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlaceIndexesResponseEntry = exports.ListPlaceIndexesResponseEntry || (exports.ListPlaceIndexesResponseEntry = {}));
var ListPlaceIndexesResponse;
(function (ListPlaceIndexesResponse) {
    /**
     * @internal
     */
    ListPlaceIndexesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPlaceIndexesResponse = exports.ListPlaceIndexesResponse || (exports.ListPlaceIndexesResponse = {}));
var ListRouteCalculatorsRequest;
(function (ListRouteCalculatorsRequest) {
    /**
     * @internal
     */
    ListRouteCalculatorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRouteCalculatorsRequest = exports.ListRouteCalculatorsRequest || (exports.ListRouteCalculatorsRequest = {}));
var ListRouteCalculatorsResponseEntry;
(function (ListRouteCalculatorsResponseEntry) {
    /**
     * @internal
     */
    ListRouteCalculatorsResponseEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRouteCalculatorsResponseEntry = exports.ListRouteCalculatorsResponseEntry || (exports.ListRouteCalculatorsResponseEntry = {}));
var ListRouteCalculatorsResponse;
(function (ListRouteCalculatorsResponse) {
    /**
     * @internal
     */
    ListRouteCalculatorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRouteCalculatorsResponse = exports.ListRouteCalculatorsResponse || (exports.ListRouteCalculatorsResponse = {}));
var ListTrackerConsumersRequest;
(function (ListTrackerConsumersRequest) {
    /**
     * @internal
     */
    ListTrackerConsumersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrackerConsumersRequest = exports.ListTrackerConsumersRequest || (exports.ListTrackerConsumersRequest = {}));
var ListTrackerConsumersResponse;
(function (ListTrackerConsumersResponse) {
    /**
     * @internal
     */
    ListTrackerConsumersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrackerConsumersResponse = exports.ListTrackerConsumersResponse || (exports.ListTrackerConsumersResponse = {}));
var ListTrackersRequest;
(function (ListTrackersRequest) {
    /**
     * @internal
     */
    ListTrackersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrackersRequest = exports.ListTrackersRequest || (exports.ListTrackersRequest = {}));
var ListTrackersResponseEntry;
(function (ListTrackersResponseEntry) {
    /**
     * @internal
     */
    ListTrackersResponseEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrackersResponseEntry = exports.ListTrackersResponseEntry || (exports.ListTrackersResponseEntry = {}));
var ListTrackersResponse;
(function (ListTrackersResponse) {
    /**
     * @internal
     */
    ListTrackersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTrackersResponse = exports.ListTrackersResponse || (exports.ListTrackersResponse = {}));
var SearchPlaceIndexForPositionRequest;
(function (SearchPlaceIndexForPositionRequest) {
    /**
     * @internal
     */
    SearchPlaceIndexForPositionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    });
})(SearchPlaceIndexForPositionRequest = exports.SearchPlaceIndexForPositionRequest || (exports.SearchPlaceIndexForPositionRequest = {}));
var PlaceGeometry;
(function (PlaceGeometry) {
    /**
     * @internal
     */
    PlaceGeometry.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Point && { Point: smithy_client_1.SENSITIVE_STRING }),
    });
})(PlaceGeometry = exports.PlaceGeometry || (exports.PlaceGeometry = {}));
var Place;
(function (Place) {
    /**
     * @internal
     */
    Place.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Geometry && { Geometry: PlaceGeometry.filterSensitiveLog(obj.Geometry) }),
    });
})(Place = exports.Place || (exports.Place = {}));
var SearchForPositionResult;
(function (SearchForPositionResult) {
    /**
     * @internal
     */
    SearchForPositionResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Place && { Place: Place.filterSensitiveLog(obj.Place) }),
    });
})(SearchForPositionResult = exports.SearchForPositionResult || (exports.SearchForPositionResult = {}));
var SearchPlaceIndexForPositionSummary;
(function (SearchPlaceIndexForPositionSummary) {
    /**
     * @internal
     */
    SearchPlaceIndexForPositionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Position && { Position: smithy_client_1.SENSITIVE_STRING }),
    });
})(SearchPlaceIndexForPositionSummary = exports.SearchPlaceIndexForPositionSummary || (exports.SearchPlaceIndexForPositionSummary = {}));
var SearchPlaceIndexForPositionResponse;
(function (SearchPlaceIndexForPositionResponse) {
    /**
     * @internal
     */
    SearchPlaceIndexForPositionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Summary && { Summary: SearchPlaceIndexForPositionSummary.filterSensitiveLog(obj.Summary) }),
        ...(obj.Results && { Results: obj.Results.map((item) => SearchForPositionResult.filterSensitiveLog(item)) }),
    });
})(SearchPlaceIndexForPositionResponse = exports.SearchPlaceIndexForPositionResponse || (exports.SearchPlaceIndexForPositionResponse = {}));
var SearchPlaceIndexForTextRequest;
(function (SearchPlaceIndexForTextRequest) {
    /**
     * @internal
     */
    SearchPlaceIndexForTextRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.BiasPosition && { BiasPosition: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.FilterBBox && { FilterBBox: smithy_client_1.SENSITIVE_STRING }),
    });
})(SearchPlaceIndexForTextRequest = exports.SearchPlaceIndexForTextRequest || (exports.SearchPlaceIndexForTextRequest = {}));
var SearchForTextResult;
(function (SearchForTextResult) {
    /**
     * @internal
     */
    SearchForTextResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Place && { Place: Place.filterSensitiveLog(obj.Place) }),
    });
})(SearchForTextResult = exports.SearchForTextResult || (exports.SearchForTextResult = {}));
var SearchPlaceIndexForTextSummary;
(function (SearchPlaceIndexForTextSummary) {
    /**
     * @internal
     */
    SearchPlaceIndexForTextSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.BiasPosition && { BiasPosition: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.FilterBBox && { FilterBBox: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.ResultBBox && { ResultBBox: smithy_client_1.SENSITIVE_STRING }),
    });
})(SearchPlaceIndexForTextSummary = exports.SearchPlaceIndexForTextSummary || (exports.SearchPlaceIndexForTextSummary = {}));
var SearchPlaceIndexForTextResponse;
(function (SearchPlaceIndexForTextResponse) {
    /**
     * @internal
     */
    SearchPlaceIndexForTextResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Summary && { Summary: SearchPlaceIndexForTextSummary.filterSensitiveLog(obj.Summary) }),
        ...(obj.Results && { Results: obj.Results.map((item) => SearchForTextResult.filterSensitiveLog(item)) }),
    });
})(SearchPlaceIndexForTextResponse = exports.SearchPlaceIndexForTextResponse || (exports.SearchPlaceIndexForTextResponse = {}));
//# sourceMappingURL=models_0.js.map