/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class IamPushContactV2AdditionalData extends SpeakeasyBase {}

export class IamPushContactV2SystemData extends SpeakeasyBase {}

export class IamPushContactV2 extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: IamPushContactV2AdditionalData })
    @Expose({ name: "additionalData" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, IamPushContactV2AdditionalData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], IamPushContactV2AdditionalData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    additionalData?: Record<string, IamPushContactV2AdditionalData>;

    @SpeakeasyMetadata()
    @Expose({ name: "applicationId" })
    applicationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isPrimary" })
    isPrimary?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "registrationId" })
    registrationId?: string;

    @SpeakeasyMetadata({ elemType: IamPushContactV2SystemData })
    @Expose({ name: "systemData" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, IamPushContactV2SystemData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], IamPushContactV2SystemData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    systemData?: Record<string, IamPushContactV2SystemData>;
}
