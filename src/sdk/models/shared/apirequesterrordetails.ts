/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ApiRequestErrorDetails extends SpeakeasyBase {
  /**
   * Identifier of the error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "messageId" })
  messageId?: string;

  /**
   * Detailed error description.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text" })
  text?: string;

  /**
   * Map of validation errors.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "validationErrors" })
  validationErrors?: Record<string, string[]>;
}