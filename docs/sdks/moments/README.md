# moments

## Overview

Create exciting customer journeys and engage people in a dialogue through [Flow](https://www.infobip.com/docs/moments/manage-flow), our visual communication builder that helps automatize business processes and reach relevant audiences at just the right moment. People can be added or removed from the communication programmatically via Flow API.

When you need to collect customer data that`s necessary to generate new leads and update existing profiles, turn to Forms: they are [managed](https://www.infobip.com/docs/forms/manage-forms) directly on the Infobip web interface. Meanwhile, Forms API lets you easily retrieve an active form from your web page, track events, or collect the field values when the end user submits the form. You will be able to react quickly based on this data in order to engage leads and analyze user behavior.


### Available Operations

* [addPeopleToFlow](#addpeopletoflow) - Add Person to Flow
* [getForm](#getform) - Get form
* [getForms](#getforms) - Get forms
* [incrementViewCount](#incrementviewcount) - Increment form view count
* [removePeopleFromFlow](#removepeoplefromflow) - Remove Person from Flow

## addPeopleToFlow

Creates or updates a person and adds it to Flow

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { AddPeopleToFlowResponse } from "infobip-moments/dist/sdk/models/operations";
import { IamPersonV2Gender, IamPersonV2ModifiedFrom, IamPersonV2Origin, IamPersonV2Type } from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.addPeopleToFlow({
  flowPersonRequest: {
    flowVariables: {
      "quibusdam": {},
      "unde": {},
      "nulla": {},
    },
    personData: {
      address: "8466 Hunter Fort",
      birthDate: "debitis",
      city: "Fort Donnybury",
      companyId: 477665,
      computedAttributes: {
        "placeat": {},
        "voluptatum": {},
        "iusto": {},
        "excepturi": {},
      },
      contactInformation: {
        email: [
          {
            address: "803 Lydia Bridge",
          },
          {
            address: "8971 Strosin Wall",
          },
        ],
        facebook: [
          {
            applicationId: "quod",
            systemData: {
              "esse": {},
              "totam": {},
              "porro": {},
              "dolorum": {},
            },
            userId: "dicta",
          },
          {
            applicationId: "nam",
            systemData: {
              "occaecati": {},
              "fugit": {},
              "deleniti": {},
            },
            userId: "hic",
          },
        ],
        instagram: [
          {
            applicationId: "totam",
            systemData: {
              "commodi": {},
            },
            userId: "molestiae",
          },
          {
            applicationId: "modi",
            systemData: {
              "impedit": {},
            },
            userId: "cum",
          },
          {
            applicationId: "esse",
            systemData: {
              "excepturi": {},
            },
            userId: "aspernatur",
          },
          {
            applicationId: "perferendis",
            systemData: {
              "natus": {},
              "sed": {},
            },
            userId: "iste",
          },
        ],
        line: [
          {
            applicationId: "natus",
            systemData: {
              "hic": {},
              "saepe": {},
            },
            userId: "fuga",
          },
        ],
        liveChat: [
          {
            applicationId: "corporis",
            systemData: {
              "iure": {},
              "saepe": {},
              "quidem": {},
            },
            userId: "architecto",
          },
          {
            applicationId: "ipsa",
            systemData: {
              "est": {},
              "mollitia": {},
              "laborum": {},
              "dolores": {},
            },
            userId: "dolorem",
          },
        ],
        phone: [
          {
            number: "explicabo",
          },
          {
            number: "nobis",
          },
        ],
        push: [
          {
            additionalData: {
              "nemo": {},
              "minima": {},
              "excepturi": {},
            },
            applicationId: "accusantium",
            isPrimary: false,
            registrationId: "iure",
            systemData: {
              "doloribus": {},
              "sapiente": {},
              "architecto": {},
            },
          },
          {
            additionalData: {
              "dolorem": {},
              "culpa": {},
              "consequuntur": {},
            },
            applicationId: "repellat",
            isPrimary: false,
            registrationId: "mollitia",
            systemData: {
              "numquam": {},
              "commodi": {},
              "quam": {},
            },
          },
        ],
        telegram: [
          {
            applicationId: "velit",
            systemData: {
              "quia": {},
              "quis": {},
              "vitae": {},
            },
            userId: "laborum",
          },
          {
            applicationId: "animi",
            systemData: {
              "odit": {},
              "quo": {},
            },
            userId: "sequi",
          },
        ],
        twitter: [
          {
            applicationId: "ipsam",
            systemData: {
              "possimus": {},
              "aut": {},
              "quasi": {},
            },
            userId: "error",
          },
          {
            applicationId: "temporibus",
            systemData: {
              "quasi": {},
              "reiciendis": {},
              "voluptatibus": {},
            },
            userId: "vero",
          },
          {
            applicationId: "nihil",
            systemData: {
              "voluptatibus": {},
              "ipsa": {},
              "omnis": {},
            },
            userId: "voluptate",
          },
          {
            applicationId: "cum",
            systemData: {
              "doloremque": {},
            },
            userId: "reprehenderit",
          },
        ],
        viberBots: [
          {
            applicationId: "maiores",
            systemData: {
              "corporis": {},
            },
            userId: "dolore",
          },
          {
            applicationId: "iusto",
            systemData: {
              "harum": {},
            },
            userId: "enim",
          },
        ],
      },
      country: "Tanzania",
      createdAt: "commodi",
      customAttributes: {
        "quae": {},
        "ipsum": {},
        "quidem": {},
        "molestias": {},
      },
      externalId: "excepturi",
      firstName: "Samantha",
      gender: IamPersonV2Gender.Male,
      id: 508969,
      integrations: {
        salesforce: {
          contactId: "rem",
          leadId: "voluptates",
        },
      },
      lastName: "Botsford",
      middleName: "repudiandae",
      modifiedAt: "sint",
      modifiedFrom: IamPersonV2ModifiedFrom.Portal,
      origin: IamPersonV2Origin.Answers,
      profilePicture: "incidunt",
      tags: [
        "consequatur",
        "est",
      ],
      type: IamPersonV2Type.Agent,
    },
  },
  campaignId: 131797,
  email: "Michelle26@yahoo.com",
  externalId: "qui",
  phone: "1-650-383-0165 x277",
  pushRegistrationId: "labore",
  xRequestStart: "delectus",
}, {
  apiKeyHeader: "",
}).then((res: AddPeopleToFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.AddPeopleToFlowRequest](../../models/operations/addpeopletoflowrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.AddPeopleToFlowSecurity](../../models/operations/addpeopletoflowsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.AddPeopleToFlowResponse](../../models/operations/addpeopletoflowresponse.md)>**


## getForm

Use this method to get an active form by its ID.

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { GetFormResponse } from "infobip-moments/dist/sdk/models/operations";
import { ActionAfterSubmissionType, FormElementDtoComponent } from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForm({
  apiKeyHeader: "",
}, "eum").then((res: GetFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `security`                                                               | [operations.GetFormSecurity](../../models/operations/getformsecurity.md) | :heavy_check_mark:                                                       | The security requirements to use for the request.                        |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of a form                                                             |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetFormResponse](../../models/operations/getformresponse.md)>**


## getForms

Use this method to get a list of active forms.

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { GetFormsResponse } from "infobip-moments/dist/sdk/models/operations";
import { ActionAfterSubmissionType, FormElementDtoComponent } from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForms({
  ibssoTokenHeader: "",
}, 248753, 756107).then((res: GetFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `security`                                                                 | [operations.GetFormsSecurity](../../models/operations/getformssecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `limit`                                                                    | *number*                                                                   | :heavy_minus_sign:                                                         | The maximum number of returned forms. Maximum value is `100`.              |
| `offset`                                                                   | *number*                                                                   | :heavy_minus_sign:                                                         | Skip first {offset} forms of the list.                                     |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetFormsResponse](../../models/operations/getformsresponse.md)>**


## incrementViewCount

Use this method to increase the view counter of a specific form. It's used for proper statistics calculation. Statistics are available on the form performance page on the Portal.

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { IncrementViewCountResponse } from "infobip-moments/dist/sdk/models/operations";

const sdk = new Infobip();

sdk.moments.incrementViewCount({
  apiKeyHeader: "",
}, "sint").then((res: IncrementViewCountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `security`                                                                                     | [operations.IncrementViewCountSecurity](../../models/operations/incrementviewcountsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of a form                                                                                   |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.IncrementViewCountResponse](../../models/operations/incrementviewcountresponse.md)>**


## removePeopleFromFlow

Removes a person with given identifier from the Flow

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { RemovePeopleFromFlowResponse } from "infobip-moments/dist/sdk/models/operations";

const sdk = new Infobip();

sdk.moments.removePeopleFromFlow({
  campaignId: 396098,
  email: "Sonya.Marquardt@yahoo.com",
  externalId: "debitis",
  phone: "744.896.1278 x43682",
  pushRegistrationId: "occaecati",
  xRequestStart: "enim",
}, {
  apiKeyHeader: "",
}).then((res: RemovePeopleFromFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemovePeopleFromFlowRequest](../../models/operations/removepeoplefromflowrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemovePeopleFromFlowSecurity](../../models/operations/removepeoplefromflowsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemovePeopleFromFlowResponse](../../models/operations/removepeoplefromflowresponse.md)>**

