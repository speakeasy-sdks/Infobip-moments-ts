/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementOptionDto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalConfiguration" })
  additionalConfiguration?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}