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
import {
  IamPersonV2GenderEnum,
  IamPersonV2ModifiedFromEnum,
  IamPersonV2OriginEnum,
  IamPersonV2TypeEnum,
} from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.addPeopleToFlow({
  flowPersonRequest: {
    flowVariables: {
      "quibusdam": {
        "nulla": "corrupti",
        "illum": "vel",
        "error": "deserunt",
      },
      "suscipit": {
        "magnam": "debitis",
        "ipsa": "delectus",
      },
      "tempora": {
        "molestiae": "minus",
        "placeat": "voluptatum",
      },
    },
    personData: {
      address: "5398 Ettie Circles",
      birthDate: "deserunt",
      city: "West Ritaworth",
      companyId: 778157,
      computedAttributes: {
        "at": {
          "maiores": "molestiae",
          "quod": "quod",
          "esse": "totam",
          "porro": "dolorum",
        },
      },
      contactInformation: {
        email: [
          {
            address: "651 Welch Row",
          },
        ],
        facebook: [
          {
            applicationId: "beatae",
            systemData: {
              "molestiae": {
                "qui": "impedit",
                "cum": "esse",
              },
              "ipsum": {
                "aspernatur": "perferendis",
                "ad": "natus",
                "sed": "iste",
              },
            },
            userId: "dolor",
          },
          {
            applicationId: "natus",
            systemData: {
              "hic": {
                "fuga": "in",
                "corporis": "iste",
                "iure": "saepe",
                "quidem": "architecto",
              },
              "ipsa": {
                "est": "mollitia",
                "laborum": "dolores",
                "dolorem": "corporis",
                "explicabo": "nobis",
              },
            },
            userId: "enim",
          },
          {
            applicationId: "omnis",
            systemData: {
              "minima": {
                "accusantium": "iure",
                "culpa": "doloribus",
                "sapiente": "architecto",
              },
              "mollitia": {
                "culpa": "consequuntur",
              },
            },
            userId: "repellat",
          },
        ],
        instagram: [
          {
            applicationId: "occaecati",
            systemData: {
              "commodi": {
                "molestiae": "velit",
                "error": "quia",
              },
              "quis": {
                "laborum": "animi",
              },
            },
            userId: "enim",
          },
          {
            applicationId: "odit",
            systemData: {
              "sequi": {
                "ipsam": "id",
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
              },
              "quasi": {
                "voluptatibus": "vero",
                "nihil": "praesentium",
                "voluptatibus": "ipsa",
                "omnis": "voluptate",
              },
              "cum": {
                "doloremque": "reprehenderit",
              },
              "ut": {
                "dicta": "corporis",
                "dolore": "iusto",
                "dicta": "harum",
                "enim": "accusamus",
              },
            },
            userId: "commodi",
          },
          {
            applicationId: "repudiandae",
            systemData: {
              "ipsum": {
                "molestias": "excepturi",
                "pariatur": "modi",
                "praesentium": "rem",
              },
            },
            userId: "voluptates",
          },
        ],
        line: [
          {
            applicationId: "repudiandae",
            systemData: {
              "veritatis": {
                "incidunt": "enim",
                "consequatur": "est",
                "quibusdam": "explicabo",
                "deserunt": "distinctio",
              },
              "quibusdam": {
                "modi": "qui",
                "aliquid": "cupiditate",
              },
              "quos": {
                "magni": "assumenda",
              },
            },
            userId: "ipsam",
          },
        ],
        liveChat: [
          {
            applicationId: "fugit",
            systemData: {
              "excepturi": {
                "facilis": "tempore",
                "labore": "delectus",
              },
              "eum": {
                "eligendi": "sint",
              },
              "aliquid": {
                "necessitatibus": "sint",
                "officia": "dolor",
                "debitis": "a",
              },
            },
            userId: "dolorum",
          },
        ],
        phone: [
          {
            number: "in",
          },
          {
            number: "illum",
          },
        ],
        push: [
          {
            additionalData: {
              "dicta": {
                "cumque": "facere",
                "ea": "aliquid",
              },
              "laborum": {
                "non": "occaecati",
                "enim": "accusamus",
                "delectus": "quidem",
                "provident": "nam",
              },
              "id": {
                "deleniti": "sapiente",
                "amet": "deserunt",
                "nisi": "vel",
              },
            },
            applicationId: "natus",
            isPrimary: false,
            registrationId: "omnis",
            systemData: {
              "perferendis": {
                "magnam": "distinctio",
                "id": "labore",
              },
              "labore": {
                "natus": "nobis",
                "eum": "vero",
              },
            },
          },
          {
            additionalData: {
              "architecto": {
                "et": "excepturi",
                "ullam": "provident",
              },
            },
            applicationId: "quos",
            isPrimary: false,
            registrationId: "sint",
            systemData: {
              "mollitia": {
                "mollitia": "ad",
                "eum": "dolor",
                "necessitatibus": "odit",
                "nemo": "quasi",
              },
            },
          },
          {
            additionalData: {
              "doloribus": {
                "eius": "maxime",
                "deleniti": "facilis",
                "in": "architecto",
                "architecto": "repudiandae",
              },
              "ullam": {
                "nihil": "repellat",
                "quibusdam": "sed",
                "saepe": "pariatur",
              },
            },
            applicationId: "accusantium",
            isPrimary: false,
            registrationId: "consequuntur",
            systemData: {
              "natus": {
                "sunt": "quo",
              },
              "illum": {
                "maxime": "ea",
                "excepturi": "odit",
                "ea": "accusantium",
                "ab": "maiores",
              },
              "quidem": {
                "voluptate": "autem",
                "nam": "eaque",
              },
            },
          },
          {
            additionalData: {
              "nemo": {
                "perferendis": "fugiat",
                "amet": "aut",
                "cumque": "corporis",
                "hic": "libero",
              },
              "nobis": {
                "quis": "totam",
              },
              "dignissimos": {
                "quis": "nesciunt",
              },
              "eos": {
                "dolores": "minus",
              },
            },
            applicationId: "quam",
            isPrimary: false,
            registrationId: "dolor",
            systemData: {
              "nostrum": {
                "recusandae": "omnis",
                "facilis": "perspiciatis",
                "voluptatem": "porro",
                "consequuntur": "blanditiis",
              },
              "error": {
                "occaecati": "rerum",
              },
              "adipisci": {
                "earum": "modi",
                "iste": "dolorum",
                "deleniti": "pariatur",
                "provident": "nobis",
              },
              "libero": {
                "quaerat": "quos",
                "aliquid": "dolorem",
                "dolorem": "dolor",
                "qui": "ipsum",
              },
            },
          },
        ],
        telegram: [
          {
            applicationId: "excepturi",
            systemData: {
              "voluptate": {
                "reiciendis": "amet",
                "dolorum": "numquam",
              },
              "veritatis": {
                "ipsa": "iure",
              },
              "odio": {
                "accusamus": "quidem",
                "voluptatibus": "voluptas",
              },
            },
            userId: "natus",
          },
          {
            applicationId: "eos",
            systemData: {
              "sit": {
                "ab": "soluta",
                "dolorum": "iusto",
                "voluptate": "dolorum",
                "deleniti": "omnis",
              },
              "necessitatibus": {
                "asperiores": "nihil",
                "ipsum": "voluptate",
                "id": "saepe",
              },
              "eius": {
                "perferendis": "amet",
              },
            },
            userId: "optio",
          },
          {
            applicationId: "accusamus",
            systemData: {
              "saepe": {
                "deserunt": "provident",
                "minima": "repellendus",
              },
              "totam": {
                "alias": "at",
                "quaerat": "tempora",
                "vel": "quod",
              },
            },
            userId: "officiis",
          },
          {
            applicationId: "qui",
            systemData: {
              "a": {
                "harum": "iusto",
                "ipsum": "quisquam",
              },
              "tenetur": {
                "tempore": "accusamus",
              },
              "numquam": {
                "dolorem": "sapiente",
                "totam": "nihil",
              },
            },
            userId: "sit",
          },
        ],
        twitter: [
          {
            applicationId: "neque",
            systemData: {
              "vel": {
                "voluptas": "deserunt",
                "quam": "ipsum",
                "incidunt": "qui",
              },
            },
            userId: "cupiditate",
          },
          {
            applicationId: "maxime",
            systemData: {
              "soluta": {
                "laborum": "totam",
              },
              "incidunt": {
                "dolores": "distinctio",
              },
              "facilis": {
                "quam": "molestias",
                "temporibus": "qui",
              },
              "neque": {
                "magni": "odio",
              },
            },
            userId: "sunt",
          },
          {
            applicationId: "ullam",
            systemData: {
              "hic": {
                "cumque": "soluta",
              },
              "nobis": {
                "saepe": "ipsum",
              },
              "veritatis": {
                "quos": "tempore",
                "cupiditate": "aperiam",
                "delectus": "dolorem",
              },
            },
            userId: "dolore",
          },
        ],
        viberBots: [
          {
            applicationId: "adipisci",
            systemData: {
              "architecto": {
                "aut": "quas",
              },
              "itaque": {
                "est": "repellendus",
              },
              "porro": {
                "ut": "facilis",
                "cupiditate": "qui",
                "quae": "laudantium",
                "odio": "occaecati",
              },
            },
            userId: "voluptatibus",
          },
          {
            applicationId: "quisquam",
            systemData: {
              "omnis": {
                "ipsum": "delectus",
                "voluptate": "consectetur",
              },
              "vero": {
                "dignissimos": "hic",
                "distinctio": "quod",
                "odio": "similique",
                "facilis": "vero",
              },
              "ducimus": {
                "quibusdam": "illum",
                "sequi": "natus",
              },
              "impedit": {
                "voluptatibus": "exercitationem",
              },
            },
            userId: "nulla",
          },
        ],
      },
      country: "Cameroon",
      createdAt: "porro",
      customAttributes: {
        "doloribus": {
          "eligendi": "ducimus",
          "alias": "officia",
        },
        "tempora": {
          "ea": "aspernatur",
          "vel": "possimus",
        },
        "magnam": {
          "ex": "laudantium",
        },
        "dicta": {
          "maiores": "quasi",
        },
      },
      externalId: "ex",
      firstName: "Sage",
      gender: IamPersonV2GenderEnum.Female,
      id: 972920,
      integrations: {
        salesforce: {
          contactId: "nostrum",
          leadId: "sapiente",
        },
      },
      lastName: "Schamberger",
      middleName: "saepe",
      modifiedAt: "ea",
      modifiedFrom: IamPersonV2ModifiedFromEnum.Ams,
      origin: IamPersonV2OriginEnum.Facebook,
      profilePicture: "veniam",
      tags: [
        "inventore",
        "magnam",
      ],
      type: IamPersonV2TypeEnum.Lead,
    },
  },
  campaignId: 775220,
  email: "Tierra5@gmail.com",
  externalId: "a",
  phone: "205.831.8020 x6682",
  pushRegistrationId: "eum",
  xRequestStart: "autem",
}, {
  apiKeyHeader: "YOUR_API_KEY_HERE",
}).then((res: AddPeopleToFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getForm

Use this method to get an active form by its ID.

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { GetFormResponse } from "infobip-moments/dist/sdk/models/operations";
import { ActionAfterSubmissionTypeEnum, FormElementDtoComponentEnum } from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForm({
  id: "c8dd6b14-4290-4747-8778-a7bd466d28c1",
}, {
  apiKeyHeader: "YOUR_API_KEY_HERE",
}).then((res: GetFormResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getForms

Use this method to get a list of active forms.

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { GetFormsResponse } from "infobip-moments/dist/sdk/models/operations";
import { ActionAfterSubmissionTypeEnum, FormElementDtoComponentEnum } from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForms({
  limit: 56848,
  offset: 660040,
}, {
  ibssoTokenHeader: "YOUR_API_KEY_HERE",
}).then((res: GetFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## incrementViewCount

Use this method to increase the view counter of a specific form. It's used for proper statistics calculation. Statistics are available on the form performance page on the Portal.

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { IncrementViewCountResponse } from "infobip-moments/dist/sdk/models/operations";

const sdk = new Infobip();

sdk.moments.incrementViewCount({
  id: "b3cdca42-5190-44e5-a3c7-e0bc7178e479",
}, {
  apiKeyHeader: "YOUR_API_KEY_HERE",
}).then((res: IncrementViewCountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## removePeopleFromFlow

Removes a person with given identifier from the Flow

### Example Usage

```typescript
import { Infobip } from "infobip-moments";
import { RemovePeopleFromFlowResponse } from "infobip-moments/dist/sdk/models/operations";

const sdk = new Infobip();

sdk.moments.removePeopleFromFlow({
  campaignId: 414567,
  email: "Chaim.Oberbrunner@hotmail.com",
  externalId: "porro",
  phone: "1-651-616-6251 x331",
  pushRegistrationId: "sapiente",
  xRequestStart: "consequuntur",
}, {
  apiKeyHeader: "YOUR_API_KEY_HERE",
}).then((res: RemovePeopleFromFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
