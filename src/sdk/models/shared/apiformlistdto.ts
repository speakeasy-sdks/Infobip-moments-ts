/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApiFormDto } from "./apiformdto";
import { Expose, Type } from "class-transformer";

/**
 * Successful Response
 */
export class ApiFormListDto extends SpeakeasyBase {
  /**
   * Forms list
   */
  @SpeakeasyMetadata({ elemType: ApiFormDto })
  @Expose({ name: "forms" })
  @Type(() => ApiFormDto)
  forms: ApiFormDto[];

  /**
   * Number of returned forms
   */
  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;

  /**
   * Offset from beginning of list of available forms
   */
  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset?: number;

  /**
   * Total number of available forms
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}