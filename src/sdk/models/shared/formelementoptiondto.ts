/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class FormElementOptionDto extends SpeakeasyBase {
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
