// @generated by protoc-gen-es v2.2.0 with parameter "target=js+dts"
// @generated from file story_structure/v1/stc_beat_to_plot_point.proto (package story_structure.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { EmptySchema } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file story_structure/v1/stc_beat_to_plot_point.proto.
 */
export declare const file_story_structure_v1_stc_beat_to_plot_point: GenFile;

/**
 * @generated from message story_structure.v1.ListBeatsByPlotPointRequest
 */
export declare type ListBeatsByPlotPointRequest = Message<"story_structure.v1.ListBeatsByPlotPointRequest"> & {
  /**
   * The id of the plot point to retrieve the beats from.
   *
   * @generated from field: string plot_point_id = 1;
   */
  plotPointId: string;
};

/**
 * Describes the message story_structure.v1.ListBeatsByPlotPointRequest.
 * Use `create(ListBeatsByPlotPointRequestSchema)` to create a new message.
 */
export declare const ListBeatsByPlotPointRequestSchema: GenMessage<ListBeatsByPlotPointRequest>;

/**
 * @generated from message story_structure.v1.ListPlotPointsByBeatsRequest
 */
export declare type ListPlotPointsByBeatsRequest = Message<"story_structure.v1.ListPlotPointsByBeatsRequest"> & {
  /**
   * The id of the beat to retrieve the plot points from.
   *
   * @generated from field: string beat_id = 1;
   */
  beatId: string;
};

/**
 * Describes the message story_structure.v1.ListPlotPointsByBeatsRequest.
 * Use `create(ListPlotPointsByBeatsRequestSchema)` to create a new message.
 */
export declare const ListPlotPointsByBeatsRequestSchema: GenMessage<ListPlotPointsByBeatsRequest>;

/**
 * @generated from message story_structure.v1.LinkBeatAndPlotPointRequest
 */
export declare type LinkBeatAndPlotPointRequest = Message<"story_structure.v1.LinkBeatAndPlotPointRequest"> & {
  /**
   * The id of the beat to link to the plot point.
   *
   * @generated from field: string beat_id = 1;
   */
  beatId: string;

  /**
   * The id of the plot point to link the beat to.
   *
   * @generated from field: string plot_point_id = 2;
   */
  plotPointId: string;
};

/**
 * Describes the message story_structure.v1.LinkBeatAndPlotPointRequest.
 * Use `create(LinkBeatAndPlotPointRequestSchema)` to create a new message.
 */
export declare const LinkBeatAndPlotPointRequestSchema: GenMessage<LinkBeatAndPlotPointRequest>;

/**
 * @generated from message story_structure.v1.UnlinkBeatAndPlotPointRequest
 */
export declare type UnlinkBeatAndPlotPointRequest = Message<"story_structure.v1.UnlinkBeatAndPlotPointRequest"> & {
  /**
   * The id of the beat to unlink from the plot point.
   *
   * @generated from field: string beat_id = 1;
   */
  beatId: string;

  /**
   * The id of the plot point to unlink the beat from.
   *
   * @generated from field: string plot_point_id = 2;
   */
  plotPointId: string;
};

/**
 * Describes the message story_structure.v1.UnlinkBeatAndPlotPointRequest.
 * Use `create(UnlinkBeatAndPlotPointRequestSchema)` to create a new message.
 */
export declare const UnlinkBeatAndPlotPointRequestSchema: GenMessage<UnlinkBeatAndPlotPointRequest>;

/**
 * @generated from message story_structure.v1.ListBeatsByPlotPointResponse
 */
export declare type ListBeatsByPlotPointResponse = Message<"story_structure.v1.ListBeatsByPlotPointResponse"> & {
  /**
   * The ids of the beats related to the plot point.
   *
   * @generated from field: repeated string beat_ids = 1;
   */
  beatIds: string[];
};

/**
 * Describes the message story_structure.v1.ListBeatsByPlotPointResponse.
 * Use `create(ListBeatsByPlotPointResponseSchema)` to create a new message.
 */
export declare const ListBeatsByPlotPointResponseSchema: GenMessage<ListBeatsByPlotPointResponse>;

/**
 * @generated from message story_structure.v1.ListPlotPointsByBeatsResponse
 */
export declare type ListPlotPointsByBeatsResponse = Message<"story_structure.v1.ListPlotPointsByBeatsResponse"> & {
  /**
   * The ids of the plot points the beat is linked to.
   *
   * @generated from field: repeated string plot_point_ids = 1;
   */
  plotPointIds: string[];
};

/**
 * Describes the message story_structure.v1.ListPlotPointsByBeatsResponse.
 * Use `create(ListPlotPointsByBeatsResponseSchema)` to create a new message.
 */
export declare const ListPlotPointsByBeatsResponseSchema: GenMessage<ListPlotPointsByBeatsResponse>;

/**
 * @generated from service story_structure.v1.BeatToPlotPointService
 */
export declare const BeatToPlotPointService: GenService<{
  /**
   * Retrieve the ids of the beats related to a plot point.
   *
   * @generated from rpc story_structure.v1.BeatToPlotPointService.ListBeatsByPlotPoint
   */
  listBeatsByPlotPoint: {
    methodKind: "unary";
    input: typeof ListBeatsByPlotPointRequestSchema;
    output: typeof ListBeatsByPlotPointResponseSchema;
  },
  /**
   * Retrieve the ids of the plot points related to a beat.
   *
   * @generated from rpc story_structure.v1.BeatToPlotPointService.ListPlotPointsByBeats
   */
  listPlotPointsByBeats: {
    methodKind: "unary";
    input: typeof ListPlotPointsByBeatsRequestSchema;
    output: typeof ListPlotPointsByBeatsResponseSchema;
  },
  /**
   * Link a beat to a plot point.
   *
   * @generated from rpc story_structure.v1.BeatToPlotPointService.LinkBeatAndPlotPoint
   */
  linkBeatAndPlotPoint: {
    methodKind: "unary";
    input: typeof LinkBeatAndPlotPointRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * Unlink a beat from a plot point.
   *
   * @generated from rpc story_structure.v1.BeatToPlotPointService.UnlinkBeatAndPlotPoint
   */
  unlinkBeatAndPlotPoint: {
    methodKind: "unary";
    input: typeof UnlinkBeatAndPlotPointRequestSchema;
    output: typeof EmptySchema;
  },
}>;

