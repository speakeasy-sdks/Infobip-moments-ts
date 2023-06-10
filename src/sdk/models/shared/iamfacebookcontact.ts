/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class IamFacebookContactSystemData extends SpeakeasyBase {}

export class IamFacebookContact extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applicationId" })
    applicationId?: string;

    @SpeakeasyMetadata({ elemType: IamFacebookContactSystemData })
    @Expose({ name: "systemData" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, IamFacebookContactSystemData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], IamFacebookContactSystemData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    systemData?: Record<string, IamFacebookContactSystemData>;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
