// @generated by protoc-gen-es v2.2.0 with parameter "target=js+dts"
// @generated from file story_structure/v1/stc_plot_point.proto (package story_structure.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file story_structure/v1/stc_plot_point.proto.
 */
export declare const file_story_structure_v1_stc_plot_point: GenFile;

/**
 * @generated from message story_structure.v1.GetPlotPointRequest
 */
export declare type GetPlotPointRequest = Message<"story_structure.v1.GetPlotPointRequest"> & {
  /**
   * The id of the plot point to retrieve.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message story_structure.v1.GetPlotPointRequest.
 * Use `create(GetPlotPointRequestSchema)` to create a new message.
 */
export declare const GetPlotPointRequestSchema: GenMessage<GetPlotPointRequest>;

/**
 * @generated from message story_structure.v1.ListPlotPointsRequest
 */
export declare type ListPlotPointsRequest = Message<"story_structure.v1.ListPlotPointsRequest"> & {
  /**
   * The ids of the plot points to retrieve. A maximum number of ids that can be provided in one request may be
   * defined by the server.
   *
   * @generated from field: repeated string ids = 1;
   */
  ids: string[];
};

/**
 * Describes the message story_structure.v1.ListPlotPointsRequest.
 * Use `create(ListPlotPointsRequestSchema)` to create a new message.
 */
export declare const ListPlotPointsRequestSchema: GenMessage<ListPlotPointsRequest>;

/**
 * @generated from message story_structure.v1.SearchPlotPointsRequest
 */
export declare type SearchPlotPointsRequest = Message<"story_structure.v1.SearchPlotPointsRequest"> & {
  /**
   * Batch size for the search. The server may cap this value.
   *
   * @generated from field: int32 limit = 1;
   */
  limit: number;

  /**
   * Offset for the search. The server may cap this value.
   *
   * @generated from field: int32 offset = 2;
   */
  offset: number;
};

/**
 * Describes the message story_structure.v1.SearchPlotPointsRequest.
 * Use `create(SearchPlotPointsRequestSchema)` to create a new message.
 */
export declare const SearchPlotPointsRequestSchema: GenMessage<SearchPlotPointsRequest>;

/**
 * @generated from message story_structure.v1.CreatePlotPointRequest
 */
export declare type CreatePlotPointRequest = Message<"story_structure.v1.CreatePlotPointRequest"> & {
  /**
   * The name of the plot point to create. While not required to be unique, it is recommended to be, so it is not
   * confused with other plot points.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The main prompt that should be used to generate a story with this plot point.
   *
   * @generated from field: string prompt = 2;
   */
  prompt: string;
};

/**
 * Describes the message story_structure.v1.CreatePlotPointRequest.
 * Use `create(CreatePlotPointRequestSchema)` to create a new message.
 */
export declare const CreatePlotPointRequestSchema: GenMessage<CreatePlotPointRequest>;

/**
 * @generated from message story_structure.v1.UpdatePlotPointRequest
 */
export declare type UpdatePlotPointRequest = Message<"story_structure.v1.UpdatePlotPointRequest"> & {
  /**
   * The ID of the existing plot point to update.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The name of the plot point to create. While not required to be unique, it is recommended to be, so it is not
   * confused with other plot points.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The main prompt that should be used to generate a story with this plot point.
   *
   * @generated from field: string prompt = 3;
   */
  prompt: string;
};

/**
 * Describes the message story_structure.v1.UpdatePlotPointRequest.
 * Use `create(UpdatePlotPointRequestSchema)` to create a new message.
 */
export declare const UpdatePlotPointRequestSchema: GenMessage<UpdatePlotPointRequest>;

/**
 * @generated from message story_structure.v1.DeletePlotPointRequest
 */
export declare type DeletePlotPointRequest = Message<"story_structure.v1.DeletePlotPointRequest"> & {
  /**
   * The ID of the plot point to delete.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message story_structure.v1.DeletePlotPointRequest.
 * Use `create(DeletePlotPointRequestSchema)` to create a new message.
 */
export declare const DeletePlotPointRequestSchema: GenMessage<DeletePlotPointRequest>;

/**
 * @generated from message story_structure.v1.GetPlotPointResponse
 */
export declare type GetPlotPointResponse = Message<"story_structure.v1.GetPlotPointResponse"> & {
  /**
   * The plot point that was retrieved.
   *
   * @generated from field: story_structure.v1.PlotPoint plot_point = 1;
   */
  plotPoint?: PlotPoint;
};

/**
 * Describes the message story_structure.v1.GetPlotPointResponse.
 * Use `create(GetPlotPointResponseSchema)` to create a new message.
 */
export declare const GetPlotPointResponseSchema: GenMessage<GetPlotPointResponse>;

/**
 * @generated from message story_structure.v1.ListPlotPointsResponse
 */
export declare type ListPlotPointsResponse = Message<"story_structure.v1.ListPlotPointsResponse"> & {
  /**
   * A list of plot points, that matches the provided IDs. The number of returned plot points may be less than the
   * number of provided IDs, if some of them are incorrect / don't point to an existing plot point.
   *
   * @generated from field: repeated story_structure.v1.PlotPoint plot_points = 1;
   */
  plotPoints: PlotPoint[];
};

/**
 * Describes the message story_structure.v1.ListPlotPointsResponse.
 * Use `create(ListPlotPointsResponseSchema)` to create a new message.
 */
export declare const ListPlotPointsResponseSchema: GenMessage<ListPlotPointsResponse>;

/**
 * @generated from message story_structure.v1.SearchPlotPointsResponse
 */
export declare type SearchPlotPointsResponse = Message<"story_structure.v1.SearchPlotPointsResponse"> & {
  /**
   * The ids of the plot points matching the search. Details for each plot point can be retrieved using ListPlotPoints,
   * or separately using GetPlotPoint.
   *
   * @generated from field: repeated string plot_points_ids = 1;
   */
  plotPointsIds: string[];
};

/**
 * Describes the message story_structure.v1.SearchPlotPointsResponse.
 * Use `create(SearchPlotPointsResponseSchema)` to create a new message.
 */
export declare const SearchPlotPointsResponseSchema: GenMessage<SearchPlotPointsResponse>;

/**
 * @generated from message story_structure.v1.CreatePlotPointResponse
 */
export declare type CreatePlotPointResponse = Message<"story_structure.v1.CreatePlotPointResponse"> & {
  /**
   * The id of the newly created plot point.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message story_structure.v1.CreatePlotPointResponse.
 * Use `create(CreatePlotPointResponseSchema)` to create a new message.
 */
export declare const CreatePlotPointResponseSchema: GenMessage<CreatePlotPointResponse>;

/**
 * @generated from message story_structure.v1.UpdatePlotPointResponse
 */
export declare type UpdatePlotPointResponse = Message<"story_structure.v1.UpdatePlotPointResponse"> & {
  /**
   * The id of the updated plot point.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message story_structure.v1.UpdatePlotPointResponse.
 * Use `create(UpdatePlotPointResponseSchema)` to create a new message.
 */
export declare const UpdatePlotPointResponseSchema: GenMessage<UpdatePlotPointResponse>;

/**
 * @generated from message story_structure.v1.PlotPoint
 */
export declare type PlotPoint = Message<"story_structure.v1.PlotPoint"> & {
  /**
   * The unique identifier of the plot point.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The display name of the plot point. It is not required to be unique.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The main prompt that should be used to generate a story with this plot point.
   *
   * @generated from field: string prompt = 3;
   */
  prompt: string;
};

/**
 * Describes the message story_structure.v1.PlotPoint.
 * Use `create(PlotPointSchema)` to create a new message.
 */
export declare const PlotPointSchema: GenMessage<PlotPoint>;

/**
 * @generated from service story_structure.v1.PlotPointService
 */
export declare const PlotPointService: GenService<{
  /**
   * Get a specific plot point details.
   *
   * @generated from rpc story_structure.v1.PlotPointService.GetPlotPoint
   */
  getPlotPoint: {
    methodKind: "unary";
    input: typeof GetPlotPointRequestSchema;
    output: typeof GetPlotPointResponseSchema;
  },
  /**
   * Return a list of plot points, based on a list of IDs provided.
   *
   * @generated from rpc story_structure.v1.PlotPointService.ListPlotPoints
   */
  listPlotPoints: {
    methodKind: "unary";
    input: typeof ListPlotPointsRequestSchema;
    output: typeof ListPlotPointsResponseSchema;
  },
  /**
   * Return a list of plot points ids, based on a search query. You can then use ListPlotPoints to retrieve
   * the specific details of each plot point.
   *
   * @generated from rpc story_structure.v1.PlotPointService.SearchPlotPoints
   */
  searchPlotPoints: {
    methodKind: "unary";
    input: typeof SearchPlotPointsRequestSchema;
    output: typeof SearchPlotPointsResponseSchema;
  },
  /**
   * Create a new plot point.
   *
   * @generated from rpc story_structure.v1.PlotPointService.CreatePlotPoint
   */
  createPlotPoint: {
    methodKind: "unary";
    input: typeof CreatePlotPointRequestSchema;
    output: typeof CreatePlotPointResponseSchema;
  },
  /**
   * Update an existing plot point.
   *
   * @generated from rpc story_structure.v1.PlotPointService.UpdatePlotPoint
   */
  updatePlotPoint: {
    methodKind: "unary";
    input: typeof UpdatePlotPointRequestSchema;
    output: typeof UpdatePlotPointResponseSchema;
  },
  /**
   * Delete an existing plot point. This method should not fail if the plot point does not exist.
   *
   * @generated from rpc story_structure.v1.PlotPointService.DeletePlotPoint
   */
  deletePlotPoint: {
    methodKind: "unary";
    input: typeof DeletePlotPointRequestSchema;
    output: typeof EmptySchema;
  },
}>;

