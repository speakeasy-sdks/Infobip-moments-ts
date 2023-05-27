/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApiRequestError } from "./apirequesterror";
import { Expose, Type } from "class-transformer";

/**
 * Bad Request
 */
export class ApiException extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "requestError" })
    @Type(() => ApiRequestError)
    requestError?: ApiRequestError;
}
