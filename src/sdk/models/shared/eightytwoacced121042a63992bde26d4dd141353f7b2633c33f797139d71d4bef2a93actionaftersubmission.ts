/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ActionAfterSubmissionTypeEnum {
  Redirect = "REDIRECT",
  Message = "MESSAGE",
}

/**
 * Action after the submission
 */
export class EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ActionAfterSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ActionAfterSubmissionTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: string;
}
