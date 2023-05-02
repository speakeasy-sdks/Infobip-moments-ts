/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementOptionDto } from "./eightytwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93formelementoptiondto";
import { EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ValidationRules } from "./eightytwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93validationrules";
import { Expose, Type } from "class-transformer";

export enum EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementDtoComponentEnum {
  Text = "TEXT",
  Textarea = "TEXTAREA",
  Number = "NUMBER",
  Dropdown = "DROPDOWN",
  Checkbox = "CHECKBOX",
  CheckboxGroup = "CHECKBOX_GROUP",
  Radiobutton = "RADIOBUTTON",
  Date = "DATE",
  Datetime = "DATETIME",
  Email = "EMAIL",
  Msisdn = "MSISDN",
  SubmitButton = "SUBMIT_BUTTON",
  Title = "TITLE",
  Description = "DESCRIPTION",
  AppleSplash = "APPLE_SPLASH",
  AppleBoolean = "APPLE_BOOLEAN",
}

/**
 * List of form fields
 */
export class EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementDto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "additionalConfiguration" })
  additionalConfiguration?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "checkboxText" })
  checkboxText?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "component" })
  component: EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementDtoComponentEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "isHidden" })
  isHidden?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label?: string;

  @SpeakeasyMetadata({
    elemType:
      EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementOptionDto,
  })
  @Expose({ name: "options" })
  @Type(
    () =>
      EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementOptionDto
  )
  options?: EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementOptionDto[];

  @SpeakeasyMetadata()
  @Expose({ name: "personField" })
  personField?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "placeholder" })
  placeholder?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "textContent" })
  textContent?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "validationMessages" })
  validationMessages?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "validationRules" })
  @Type(
    () =>
      EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ValidationRules
  )
  validationRules?: EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ValidationRules;
}
