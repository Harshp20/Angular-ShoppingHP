import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var AssociateTrackerConsumerRequest;
(function (AssociateTrackerConsumerRequest) {
    /**
     * @internal
     */
    AssociateTrackerConsumerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTrackerConsumerRequest || (AssociateTrackerConsumerRequest = {}));
export var AssociateTrackerConsumerResponse;
(function (AssociateTrackerConsumerResponse) {
    /**
     * @internal
     */
    AssociateTrackerConsumerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTrackerConsumerResponse || (AssociateTrackerConsumerResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationExceptionField || (ValidationExceptionField = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var BatchDeleteDevicePositionHistoryRequest;
(function (BatchDeleteDevicePositionHistoryRequest) {
    /**
     * @internal
     */
    BatchDeleteDevicePositionHistoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteDevicePositionHistoryRequest || (BatchDeleteDevicePositionHistoryRequest = {}));
export var BatchItemError;
(function (BatchItemError) {
    /**
     * @internal
     */
    BatchItemError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchItemError || (BatchItemError = {}));
export var BatchDeleteDevicePositionHistoryError;
(function (BatchDeleteDevicePositionHistoryError) {
    /**
     * @internal
     */
    BatchDeleteDevicePositionHistoryError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteDevicePositionHistoryError || (BatchDeleteDevicePositionHistoryError = {}));
export var BatchDeleteDevicePositionHistoryResponse;
(function (BatchDeleteDevicePositionHistoryResponse) {
    /**
     * @internal
     */
    BatchDeleteDevicePositionHistoryResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteDevicePositionHistoryResponse || (BatchDeleteDevicePositionHistoryResponse = {}));
export var BatchDeleteGeofenceRequest;
(function (BatchDeleteGeofenceRequest) {
    /**
     * @internal
     */
    BatchDeleteGeofenceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteGeofenceRequest || (BatchDeleteGeofenceRequest = {}));
export var BatchDeleteGeofenceError;
(function (BatchDeleteGeofenceError) {
    /**
     * @internal
     */
    BatchDeleteGeofenceError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteGeofenceError || (BatchDeleteGeofenceError = {}));
export var BatchDeleteGeofenceResponse;
(function (BatchDeleteGeofenceResponse) {
    /**
     * @internal
     */
    BatchDeleteGeofenceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchDeleteGeofenceResponse || (BatchDeleteGeofenceResponse = {}));
export var DevicePositionUpdate;
(function (DevicePositionUpdate) {
    /**
     * @internal
     */
    DevicePositionUpdate.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING }))); };
})(DevicePositionUpdate || (DevicePositionUpdate = {}));
export var BatchEvaluateGeofencesRequest;
(function (BatchEvaluateGeofencesRequest) {
    /**
     * @internal
     */
    BatchEvaluateGeofencesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DevicePositionUpdates && {
        DevicePositionUpdates: obj.DevicePositionUpdates.map(function (item) { return DevicePositionUpdate.filterSensitiveLog(item); }),
    }))); };
})(BatchEvaluateGeofencesRequest || (BatchEvaluateGeofencesRequest = {}));
export var BatchEvaluateGeofencesError;
(function (BatchEvaluateGeofencesError) {
    /**
     * @internal
     */
    BatchEvaluateGeofencesError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchEvaluateGeofencesError || (BatchEvaluateGeofencesError = {}));
export var BatchEvaluateGeofencesResponse;
(function (BatchEvaluateGeofencesResponse) {
    /**
     * @internal
     */
    BatchEvaluateGeofencesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchEvaluateGeofencesResponse || (BatchEvaluateGeofencesResponse = {}));
export var BatchGetDevicePositionRequest;
(function (BatchGetDevicePositionRequest) {
    /**
     * @internal
     */
    BatchGetDevicePositionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetDevicePositionRequest || (BatchGetDevicePositionRequest = {}));
export var DevicePosition;
(function (DevicePosition) {
    /**
     * @internal
     */
    DevicePosition.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING }))); };
})(DevicePosition || (DevicePosition = {}));
export var BatchGetDevicePositionError;
(function (BatchGetDevicePositionError) {
    /**
     * @internal
     */
    BatchGetDevicePositionError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetDevicePositionError || (BatchGetDevicePositionError = {}));
export var BatchGetDevicePositionResponse;
(function (BatchGetDevicePositionResponse) {
    /**
     * @internal
     */
    BatchGetDevicePositionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DevicePositions && {
        DevicePositions: obj.DevicePositions.map(function (item) { return DevicePosition.filterSensitiveLog(item); }),
    }))); };
})(BatchGetDevicePositionResponse || (BatchGetDevicePositionResponse = {}));
export var GeofenceGeometry;
(function (GeofenceGeometry) {
    /**
     * @internal
     */
    GeofenceGeometry.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Polygon && { Polygon: obj.Polygon.map(function (item) { return SENSITIVE_STRING; }) }))); };
})(GeofenceGeometry || (GeofenceGeometry = {}));
export var BatchPutGeofenceRequestEntry;
(function (BatchPutGeofenceRequestEntry) {
    /**
     * @internal
     */
    BatchPutGeofenceRequestEntry.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }))); };
})(BatchPutGeofenceRequestEntry || (BatchPutGeofenceRequestEntry = {}));
export var BatchPutGeofenceRequest;
(function (BatchPutGeofenceRequest) {
    /**
     * @internal
     */
    BatchPutGeofenceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Entries && { Entries: obj.Entries.map(function (item) { return BatchPutGeofenceRequestEntry.filterSensitiveLog(item); }) }))); };
})(BatchPutGeofenceRequest || (BatchPutGeofenceRequest = {}));
export var BatchPutGeofenceError;
(function (BatchPutGeofenceError) {
    /**
     * @internal
     */
    BatchPutGeofenceError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPutGeofenceError || (BatchPutGeofenceError = {}));
export var BatchPutGeofenceSuccess;
(function (BatchPutGeofenceSuccess) {
    /**
     * @internal
     */
    BatchPutGeofenceSuccess.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPutGeofenceSuccess || (BatchPutGeofenceSuccess = {}));
export var BatchPutGeofenceResponse;
(function (BatchPutGeofenceResponse) {
    /**
     * @internal
     */
    BatchPutGeofenceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchPutGeofenceResponse || (BatchPutGeofenceResponse = {}));
export var BatchUpdateDevicePositionRequest;
(function (BatchUpdateDevicePositionRequest) {
    /**
     * @internal
     */
    BatchUpdateDevicePositionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Updates && { Updates: obj.Updates.map(function (item) { return DevicePositionUpdate.filterSensitiveLog(item); }) }))); };
})(BatchUpdateDevicePositionRequest || (BatchUpdateDevicePositionRequest = {}));
export var BatchUpdateDevicePositionError;
(function (BatchUpdateDevicePositionError) {
    /**
     * @internal
     */
    BatchUpdateDevicePositionError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchUpdateDevicePositionError || (BatchUpdateDevicePositionError = {}));
export var BatchUpdateDevicePositionResponse;
(function (BatchUpdateDevicePositionResponse) {
    /**
     * @internal
     */
    BatchUpdateDevicePositionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchUpdateDevicePositionResponse || (BatchUpdateDevicePositionResponse = {}));
export var CalculateRouteCarModeOptions;
(function (CalculateRouteCarModeOptions) {
    /**
     * @internal
     */
    CalculateRouteCarModeOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CalculateRouteCarModeOptions || (CalculateRouteCarModeOptions = {}));
export var TruckDimensions;
(function (TruckDimensions) {
    /**
     * @internal
     */
    TruckDimensions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TruckDimensions || (TruckDimensions = {}));
export var TruckWeight;
(function (TruckWeight) {
    /**
     * @internal
     */
    TruckWeight.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TruckWeight || (TruckWeight = {}));
export var CalculateRouteTruckModeOptions;
(function (CalculateRouteTruckModeOptions) {
    /**
     * @internal
     */
    CalculateRouteTruckModeOptions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CalculateRouteTruckModeOptions || (CalculateRouteTruckModeOptions = {}));
export var CalculateRouteRequest;
(function (CalculateRouteRequest) {
    /**
     * @internal
     */
    CalculateRouteRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.DeparturePosition && { DeparturePosition: SENSITIVE_STRING })), (obj.DestinationPosition && { DestinationPosition: SENSITIVE_STRING })), (obj.WaypointPositions && { WaypointPositions: SENSITIVE_STRING }))); };
})(CalculateRouteRequest || (CalculateRouteRequest = {}));
export var LegGeometry;
(function (LegGeometry) {
    /**
     * @internal
     */
    LegGeometry.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.LineString && { LineString: SENSITIVE_STRING }))); };
})(LegGeometry || (LegGeometry = {}));
export var Step;
(function (Step) {
    /**
     * @internal
     */
    Step.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.StartPosition && { StartPosition: SENSITIVE_STRING })), (obj.EndPosition && { EndPosition: SENSITIVE_STRING }))); };
})(Step || (Step = {}));
export var Leg;
(function (Leg) {
    /**
     * @internal
     */
    Leg.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.StartPosition && { StartPosition: SENSITIVE_STRING })), (obj.EndPosition && { EndPosition: SENSITIVE_STRING })), (obj.Geometry && { Geometry: LegGeometry.filterSensitiveLog(obj.Geometry) })), (obj.Steps && { Steps: obj.Steps.map(function (item) { return Step.filterSensitiveLog(item); }) }))); };
})(Leg || (Leg = {}));
export var CalculateRouteSummary;
(function (CalculateRouteSummary) {
    /**
     * @internal
     */
    CalculateRouteSummary.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.RouteBBox && { RouteBBox: SENSITIVE_STRING }))); };
})(CalculateRouteSummary || (CalculateRouteSummary = {}));
export var CalculateRouteResponse;
(function (CalculateRouteResponse) {
    /**
     * @internal
     */
    CalculateRouteResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Legs && { Legs: obj.Legs.map(function (item) { return Leg.filterSensitiveLog(item); }) })), (obj.Summary && { Summary: CalculateRouteSummary.filterSensitiveLog(obj.Summary) }))); };
})(CalculateRouteResponse || (CalculateRouteResponse = {}));
export var CreateGeofenceCollectionRequest;
(function (CreateGeofenceCollectionRequest) {
    /**
     * @internal
     */
    CreateGeofenceCollectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGeofenceCollectionRequest || (CreateGeofenceCollectionRequest = {}));
export var CreateGeofenceCollectionResponse;
(function (CreateGeofenceCollectionResponse) {
    /**
     * @internal
     */
    CreateGeofenceCollectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGeofenceCollectionResponse || (CreateGeofenceCollectionResponse = {}));
export var MapConfiguration;
(function (MapConfiguration) {
    /**
     * @internal
     */
    MapConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MapConfiguration || (MapConfiguration = {}));
export var CreateMapRequest;
(function (CreateMapRequest) {
    /**
     * @internal
     */
    CreateMapRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMapRequest || (CreateMapRequest = {}));
export var CreateMapResponse;
(function (CreateMapResponse) {
    /**
     * @internal
     */
    CreateMapResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMapResponse || (CreateMapResponse = {}));
export var DataSourceConfiguration;
(function (DataSourceConfiguration) {
    /**
     * @internal
     */
    DataSourceConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSourceConfiguration || (DataSourceConfiguration = {}));
export var CreatePlaceIndexRequest;
(function (CreatePlaceIndexRequest) {
    /**
     * @internal
     */
    CreatePlaceIndexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePlaceIndexRequest || (CreatePlaceIndexRequest = {}));
export var CreatePlaceIndexResponse;
(function (CreatePlaceIndexResponse) {
    /**
     * @internal
     */
    CreatePlaceIndexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePlaceIndexResponse || (CreatePlaceIndexResponse = {}));
export var CreateRouteCalculatorRequest;
(function (CreateRouteCalculatorRequest) {
    /**
     * @internal
     */
    CreateRouteCalculatorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRouteCalculatorRequest || (CreateRouteCalculatorRequest = {}));
export var CreateRouteCalculatorResponse;
(function (CreateRouteCalculatorResponse) {
    /**
     * @internal
     */
    CreateRouteCalculatorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRouteCalculatorResponse || (CreateRouteCalculatorResponse = {}));
export var CreateTrackerRequest;
(function (CreateTrackerRequest) {
    /**
     * @internal
     */
    CreateTrackerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTrackerRequest || (CreateTrackerRequest = {}));
export var CreateTrackerResponse;
(function (CreateTrackerResponse) {
    /**
     * @internal
     */
    CreateTrackerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateTrackerResponse || (CreateTrackerResponse = {}));
export var DeleteGeofenceCollectionRequest;
(function (DeleteGeofenceCollectionRequest) {
    /**
     * @internal
     */
    DeleteGeofenceCollectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGeofenceCollectionRequest || (DeleteGeofenceCollectionRequest = {}));
export var DeleteGeofenceCollectionResponse;
(function (DeleteGeofenceCollectionResponse) {
    /**
     * @internal
     */
    DeleteGeofenceCollectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGeofenceCollectionResponse || (DeleteGeofenceCollectionResponse = {}));
export var DeleteMapRequest;
(function (DeleteMapRequest) {
    /**
     * @internal
     */
    DeleteMapRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMapRequest || (DeleteMapRequest = {}));
export var DeleteMapResponse;
(function (DeleteMapResponse) {
    /**
     * @internal
     */
    DeleteMapResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMapResponse || (DeleteMapResponse = {}));
export var DeletePlaceIndexRequest;
(function (DeletePlaceIndexRequest) {
    /**
     * @internal
     */
    DeletePlaceIndexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePlaceIndexRequest || (DeletePlaceIndexRequest = {}));
export var DeletePlaceIndexResponse;
(function (DeletePlaceIndexResponse) {
    /**
     * @internal
     */
    DeletePlaceIndexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePlaceIndexResponse || (DeletePlaceIndexResponse = {}));
export var DeleteRouteCalculatorRequest;
(function (DeleteRouteCalculatorRequest) {
    /**
     * @internal
     */
    DeleteRouteCalculatorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRouteCalculatorRequest || (DeleteRouteCalculatorRequest = {}));
export var DeleteRouteCalculatorResponse;
(function (DeleteRouteCalculatorResponse) {
    /**
     * @internal
     */
    DeleteRouteCalculatorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRouteCalculatorResponse || (DeleteRouteCalculatorResponse = {}));
export var DeleteTrackerRequest;
(function (DeleteTrackerRequest) {
    /**
     * @internal
     */
    DeleteTrackerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTrackerRequest || (DeleteTrackerRequest = {}));
export var DeleteTrackerResponse;
(function (DeleteTrackerResponse) {
    /**
     * @internal
     */
    DeleteTrackerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTrackerResponse || (DeleteTrackerResponse = {}));
export var DescribeGeofenceCollectionRequest;
(function (DescribeGeofenceCollectionRequest) {
    /**
     * @internal
     */
    DescribeGeofenceCollectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGeofenceCollectionRequest || (DescribeGeofenceCollectionRequest = {}));
export var DescribeGeofenceCollectionResponse;
(function (DescribeGeofenceCollectionResponse) {
    /**
     * @internal
     */
    DescribeGeofenceCollectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGeofenceCollectionResponse || (DescribeGeofenceCollectionResponse = {}));
export var DescribeMapRequest;
(function (DescribeMapRequest) {
    /**
     * @internal
     */
    DescribeMapRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMapRequest || (DescribeMapRequest = {}));
export var DescribeMapResponse;
(function (DescribeMapResponse) {
    /**
     * @internal
     */
    DescribeMapResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMapResponse || (DescribeMapResponse = {}));
export var DescribePlaceIndexRequest;
(function (DescribePlaceIndexRequest) {
    /**
     * @internal
     */
    DescribePlaceIndexRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePlaceIndexRequest || (DescribePlaceIndexRequest = {}));
export var DescribePlaceIndexResponse;
(function (DescribePlaceIndexResponse) {
    /**
     * @internal
     */
    DescribePlaceIndexResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePlaceIndexResponse || (DescribePlaceIndexResponse = {}));
export var DescribeRouteCalculatorRequest;
(function (DescribeRouteCalculatorRequest) {
    /**
     * @internal
     */
    DescribeRouteCalculatorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRouteCalculatorRequest || (DescribeRouteCalculatorRequest = {}));
export var DescribeRouteCalculatorResponse;
(function (DescribeRouteCalculatorResponse) {
    /**
     * @internal
     */
    DescribeRouteCalculatorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRouteCalculatorResponse || (DescribeRouteCalculatorResponse = {}));
export var DescribeTrackerRequest;
(function (DescribeTrackerRequest) {
    /**
     * @internal
     */
    DescribeTrackerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrackerRequest || (DescribeTrackerRequest = {}));
export var DescribeTrackerResponse;
(function (DescribeTrackerResponse) {
    /**
     * @internal
     */
    DescribeTrackerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeTrackerResponse || (DescribeTrackerResponse = {}));
export var DisassociateTrackerConsumerRequest;
(function (DisassociateTrackerConsumerRequest) {
    /**
     * @internal
     */
    DisassociateTrackerConsumerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateTrackerConsumerRequest || (DisassociateTrackerConsumerRequest = {}));
export var DisassociateTrackerConsumerResponse;
(function (DisassociateTrackerConsumerResponse) {
    /**
     * @internal
     */
    DisassociateTrackerConsumerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateTrackerConsumerResponse || (DisassociateTrackerConsumerResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var GetGeofenceRequest;
(function (GetGeofenceRequest) {
    /**
     * @internal
     */
    GetGeofenceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGeofenceRequest || (GetGeofenceRequest = {}));
export var GetGeofenceResponse;
(function (GetGeofenceResponse) {
    /**
     * @internal
     */
    GetGeofenceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }))); };
})(GetGeofenceResponse || (GetGeofenceResponse = {}));
export var ListGeofenceCollectionsRequest;
(function (ListGeofenceCollectionsRequest) {
    /**
     * @internal
     */
    ListGeofenceCollectionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGeofenceCollectionsRequest || (ListGeofenceCollectionsRequest = {}));
export var ListGeofenceCollectionsResponseEntry;
(function (ListGeofenceCollectionsResponseEntry) {
    /**
     * @internal
     */
    ListGeofenceCollectionsResponseEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGeofenceCollectionsResponseEntry || (ListGeofenceCollectionsResponseEntry = {}));
export var ListGeofenceCollectionsResponse;
(function (ListGeofenceCollectionsResponse) {
    /**
     * @internal
     */
    ListGeofenceCollectionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGeofenceCollectionsResponse || (ListGeofenceCollectionsResponse = {}));
export var ListGeofencesRequest;
(function (ListGeofencesRequest) {
    /**
     * @internal
     */
    ListGeofencesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGeofencesRequest || (ListGeofencesRequest = {}));
export var ListGeofenceResponseEntry;
(function (ListGeofenceResponseEntry) {
    /**
     * @internal
     */
    ListGeofenceResponseEntry.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }))); };
})(ListGeofenceResponseEntry || (ListGeofenceResponseEntry = {}));
export var ListGeofencesResponse;
(function (ListGeofencesResponse) {
    /**
     * @internal
     */
    ListGeofencesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Entries && { Entries: obj.Entries.map(function (item) { return ListGeofenceResponseEntry.filterSensitiveLog(item); }) }))); };
})(ListGeofencesResponse || (ListGeofencesResponse = {}));
export var PutGeofenceRequest;
(function (PutGeofenceRequest) {
    /**
     * @internal
     */
    PutGeofenceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: GeofenceGeometry.filterSensitiveLog(obj.Geometry) }))); };
})(PutGeofenceRequest || (PutGeofenceRequest = {}));
export var PutGeofenceResponse;
(function (PutGeofenceResponse) {
    /**
     * @internal
     */
    PutGeofenceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutGeofenceResponse || (PutGeofenceResponse = {}));
export var GetDevicePositionRequest;
(function (GetDevicePositionRequest) {
    /**
     * @internal
     */
    GetDevicePositionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDevicePositionRequest || (GetDevicePositionRequest = {}));
export var GetDevicePositionResponse;
(function (GetDevicePositionResponse) {
    /**
     * @internal
     */
    GetDevicePositionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING }))); };
})(GetDevicePositionResponse || (GetDevicePositionResponse = {}));
export var GetDevicePositionHistoryRequest;
(function (GetDevicePositionHistoryRequest) {
    /**
     * @internal
     */
    GetDevicePositionHistoryRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDevicePositionHistoryRequest || (GetDevicePositionHistoryRequest = {}));
export var GetDevicePositionHistoryResponse;
(function (GetDevicePositionHistoryResponse) {
    /**
     * @internal
     */
    GetDevicePositionHistoryResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DevicePositions && {
        DevicePositions: obj.DevicePositions.map(function (item) { return DevicePosition.filterSensitiveLog(item); }),
    }))); };
})(GetDevicePositionHistoryResponse || (GetDevicePositionHistoryResponse = {}));
export var GetMapGlyphsRequest;
(function (GetMapGlyphsRequest) {
    /**
     * @internal
     */
    GetMapGlyphsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMapGlyphsRequest || (GetMapGlyphsRequest = {}));
export var GetMapGlyphsResponse;
(function (GetMapGlyphsResponse) {
    /**
     * @internal
     */
    GetMapGlyphsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMapGlyphsResponse || (GetMapGlyphsResponse = {}));
export var GetMapSpritesRequest;
(function (GetMapSpritesRequest) {
    /**
     * @internal
     */
    GetMapSpritesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMapSpritesRequest || (GetMapSpritesRequest = {}));
export var GetMapSpritesResponse;
(function (GetMapSpritesResponse) {
    /**
     * @internal
     */
    GetMapSpritesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMapSpritesResponse || (GetMapSpritesResponse = {}));
export var GetMapStyleDescriptorRequest;
(function (GetMapStyleDescriptorRequest) {
    /**
     * @internal
     */
    GetMapStyleDescriptorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMapStyleDescriptorRequest || (GetMapStyleDescriptorRequest = {}));
export var GetMapStyleDescriptorResponse;
(function (GetMapStyleDescriptorResponse) {
    /**
     * @internal
     */
    GetMapStyleDescriptorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMapStyleDescriptorResponse || (GetMapStyleDescriptorResponse = {}));
export var GetMapTileRequest;
(function (GetMapTileRequest) {
    /**
     * @internal
     */
    GetMapTileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMapTileRequest || (GetMapTileRequest = {}));
export var GetMapTileResponse;
(function (GetMapTileResponse) {
    /**
     * @internal
     */
    GetMapTileResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMapTileResponse || (GetMapTileResponse = {}));
export var ListDevicePositionsRequest;
(function (ListDevicePositionsRequest) {
    /**
     * @internal
     */
    ListDevicePositionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDevicePositionsRequest || (ListDevicePositionsRequest = {}));
export var ListDevicePositionsResponseEntry;
(function (ListDevicePositionsResponseEntry) {
    /**
     * @internal
     */
    ListDevicePositionsResponseEntry.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING }))); };
})(ListDevicePositionsResponseEntry || (ListDevicePositionsResponseEntry = {}));
export var ListDevicePositionsResponse;
(function (ListDevicePositionsResponse) {
    /**
     * @internal
     */
    ListDevicePositionsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Entries && {
        Entries: obj.Entries.map(function (item) { return ListDevicePositionsResponseEntry.filterSensitiveLog(item); }),
    }))); };
})(ListDevicePositionsResponse || (ListDevicePositionsResponse = {}));
export var ListMapsRequest;
(function (ListMapsRequest) {
    /**
     * @internal
     */
    ListMapsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMapsRequest || (ListMapsRequest = {}));
export var ListMapsResponseEntry;
(function (ListMapsResponseEntry) {
    /**
     * @internal
     */
    ListMapsResponseEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMapsResponseEntry || (ListMapsResponseEntry = {}));
export var ListMapsResponse;
(function (ListMapsResponse) {
    /**
     * @internal
     */
    ListMapsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMapsResponse || (ListMapsResponse = {}));
export var ListPlaceIndexesRequest;
(function (ListPlaceIndexesRequest) {
    /**
     * @internal
     */
    ListPlaceIndexesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPlaceIndexesRequest || (ListPlaceIndexesRequest = {}));
export var ListPlaceIndexesResponseEntry;
(function (ListPlaceIndexesResponseEntry) {
    /**
     * @internal
     */
    ListPlaceIndexesResponseEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPlaceIndexesResponseEntry || (ListPlaceIndexesResponseEntry = {}));
export var ListPlaceIndexesResponse;
(function (ListPlaceIndexesResponse) {
    /**
     * @internal
     */
    ListPlaceIndexesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPlaceIndexesResponse || (ListPlaceIndexesResponse = {}));
export var ListRouteCalculatorsRequest;
(function (ListRouteCalculatorsRequest) {
    /**
     * @internal
     */
    ListRouteCalculatorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRouteCalculatorsRequest || (ListRouteCalculatorsRequest = {}));
export var ListRouteCalculatorsResponseEntry;
(function (ListRouteCalculatorsResponseEntry) {
    /**
     * @internal
     */
    ListRouteCalculatorsResponseEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRouteCalculatorsResponseEntry || (ListRouteCalculatorsResponseEntry = {}));
export var ListRouteCalculatorsResponse;
(function (ListRouteCalculatorsResponse) {
    /**
     * @internal
     */
    ListRouteCalculatorsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRouteCalculatorsResponse || (ListRouteCalculatorsResponse = {}));
export var ListTrackerConsumersRequest;
(function (ListTrackerConsumersRequest) {
    /**
     * @internal
     */
    ListTrackerConsumersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTrackerConsumersRequest || (ListTrackerConsumersRequest = {}));
export var ListTrackerConsumersResponse;
(function (ListTrackerConsumersResponse) {
    /**
     * @internal
     */
    ListTrackerConsumersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTrackerConsumersResponse || (ListTrackerConsumersResponse = {}));
export var ListTrackersRequest;
(function (ListTrackersRequest) {
    /**
     * @internal
     */
    ListTrackersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTrackersRequest || (ListTrackersRequest = {}));
export var ListTrackersResponseEntry;
(function (ListTrackersResponseEntry) {
    /**
     * @internal
     */
    ListTrackersResponseEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTrackersResponseEntry || (ListTrackersResponseEntry = {}));
export var ListTrackersResponse;
(function (ListTrackersResponse) {
    /**
     * @internal
     */
    ListTrackersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTrackersResponse || (ListTrackersResponse = {}));
export var SearchPlaceIndexForPositionRequest;
(function (SearchPlaceIndexForPositionRequest) {
    /**
     * @internal
     */
    SearchPlaceIndexForPositionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING }))); };
})(SearchPlaceIndexForPositionRequest || (SearchPlaceIndexForPositionRequest = {}));
export var PlaceGeometry;
(function (PlaceGeometry) {
    /**
     * @internal
     */
    PlaceGeometry.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Point && { Point: SENSITIVE_STRING }))); };
})(PlaceGeometry || (PlaceGeometry = {}));
export var Place;
(function (Place) {
    /**
     * @internal
     */
    Place.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Geometry && { Geometry: PlaceGeometry.filterSensitiveLog(obj.Geometry) }))); };
})(Place || (Place = {}));
export var SearchForPositionResult;
(function (SearchForPositionResult) {
    /**
     * @internal
     */
    SearchForPositionResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Place && { Place: Place.filterSensitiveLog(obj.Place) }))); };
})(SearchForPositionResult || (SearchForPositionResult = {}));
export var SearchPlaceIndexForPositionSummary;
(function (SearchPlaceIndexForPositionSummary) {
    /**
     * @internal
     */
    SearchPlaceIndexForPositionSummary.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Position && { Position: SENSITIVE_STRING }))); };
})(SearchPlaceIndexForPositionSummary || (SearchPlaceIndexForPositionSummary = {}));
export var SearchPlaceIndexForPositionResponse;
(function (SearchPlaceIndexForPositionResponse) {
    /**
     * @internal
     */
    SearchPlaceIndexForPositionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Summary && { Summary: SearchPlaceIndexForPositionSummary.filterSensitiveLog(obj.Summary) })), (obj.Results && { Results: obj.Results.map(function (item) { return SearchForPositionResult.filterSensitiveLog(item); }) }))); };
})(SearchPlaceIndexForPositionResponse || (SearchPlaceIndexForPositionResponse = {}));
export var SearchPlaceIndexForTextRequest;
(function (SearchPlaceIndexForTextRequest) {
    /**
     * @internal
     */
    SearchPlaceIndexForTextRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.Text && { Text: SENSITIVE_STRING })), (obj.BiasPosition && { BiasPosition: SENSITIVE_STRING })), (obj.FilterBBox && { FilterBBox: SENSITIVE_STRING }))); };
})(SearchPlaceIndexForTextRequest || (SearchPlaceIndexForTextRequest = {}));
export var SearchForTextResult;
(function (SearchForTextResult) {
    /**
     * @internal
     */
    SearchForTextResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Place && { Place: Place.filterSensitiveLog(obj.Place) }))); };
})(SearchForTextResult || (SearchForTextResult = {}));
export var SearchPlaceIndexForTextSummary;
(function (SearchPlaceIndexForTextSummary) {
    /**
     * @internal
     */
    SearchPlaceIndexForTextSummary.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.Text && { Text: SENSITIVE_STRING })), (obj.BiasPosition && { BiasPosition: SENSITIVE_STRING })), (obj.FilterBBox && { FilterBBox: SENSITIVE_STRING })), (obj.ResultBBox && { ResultBBox: SENSITIVE_STRING }))); };
})(SearchPlaceIndexForTextSummary || (SearchPlaceIndexForTextSummary = {}));
export var SearchPlaceIndexForTextResponse;
(function (SearchPlaceIndexForTextResponse) {
    /**
     * @internal
     */
    SearchPlaceIndexForTextResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Summary && { Summary: SearchPlaceIndexForTextSummary.filterSensitiveLog(obj.Summary) })), (obj.Results && { Results: obj.Results.map(function (item) { return SearchForTextResult.filterSensitiveLog(item); }) }))); };
})(SearchPlaceIndexForTextResponse || (SearchPlaceIndexForTextResponse = {}));
//# sourceMappingURL=models_0.js.map