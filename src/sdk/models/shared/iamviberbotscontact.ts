/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class IamViberBotsContactSystemData extends SpeakeasyBase {}

export class IamViberBotsContact extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "applicationId" })
    applicationId?: string;

    @SpeakeasyMetadata({ elemType: IamViberBotsContactSystemData })
    @Expose({ name: "systemData" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, IamViberBotsContactSystemData> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], IamViberBotsContactSystemData);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    systemData?: Record<string, IamViberBotsContactSystemData>;

    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
