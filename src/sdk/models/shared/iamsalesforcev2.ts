/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class IamSalesforceV2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contactId" })
  contactId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "leadId" })
  leadId?: string;
}