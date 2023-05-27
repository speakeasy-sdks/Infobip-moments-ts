/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ValidationRules extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "datePattern" })
    datePattern?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "forbiddenSymbols" })
    forbiddenSymbols?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "maxLength" })
    maxLength?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "maxValue" })
    maxValue?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "minValue" })
    minValue?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "pattern" })
    pattern?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sample" })
    sample?: string;
}
