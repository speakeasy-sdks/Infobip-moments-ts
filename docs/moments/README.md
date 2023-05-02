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
  NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2GenderEnum,
  NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2ModifiedFromEnum,
  NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2OriginEnum,
  NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2TypeEnum,
} from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.addPeopleToFlow({
  nineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0FlowPersonRequest: {
    flowVariables: {
      "quas": {
        "nulla": "voluptas",
        "libero": "quasi",
        "tempora": "numquam",
        "explicabo": "provident",
      },
      "ipsa": {
        "magnam": "odio",
        "eius": "esse",
      },
      "esse": {
        "fuga": "reprehenderit",
        "quidem": "fugiat",
        "ut": "eum",
      },
      "suscipit": {
        "eos": "praesentium",
        "quisquam": "veritatis",
        "ipsa": "id",
        "quidem": "neque",
      },
    },
    personData: {
      address: "876 Chasity Heights",
      birthDate: "ab",
      city: "Adeliaboro",
      companyId: 892050,
      computedAttributes: {
        "aspernatur": {
          "quo": "esse",
        },
        "recusandae": {
          "distinctio": "quod",
        },
      },
      contactInformation: {
        email: [
          {
            address: "45834 Johns Vista",
          },
          {
            address: "64074 Langosh Crossing",
          },
        ],
        facebook: [
          {
            applicationId: "fugit",
            systemData: {
              "mollitia": {
                "atque": "explicabo",
                "minima": "nisi",
              },
              "fugit": {
                "consequuntur": "ratione",
                "explicabo": "saepe",
                "occaecati": "atque",
                "et": "esse",
              },
              "eveniet": {
                "veritatis": "esse",
                "quod": "nam",
                "vero": "aliquid",
                "quasi": "saepe",
              },
            },
            userId: "vel",
          },
          {
            applicationId: "harum",
            systemData: {
              "rerum": {
                "minima": "distinctio",
                "eligendi": "sit",
                "culpa": "tempore",
              },
              "adipisci": {
                "consequuntur": "consequatur",
                "minus": "quaerat",
                "sapiente": "consectetur",
                "esse": "blanditiis",
              },
            },
            userId: "provident",
          },
          {
            applicationId: "a",
            systemData: {
              "quas": {
                "quasi": "a",
                "error": "sint",
              },
              "pariatur": {
                "quia": "eveniet",
                "asperiores": "facere",
                "veritatis": "consequuntur",
                "quasi": "similique",
              },
              "culpa": {
                "tenetur": "quae",
                "earum": "vel",
              },
              "in": {
                "libero": "illum",
                "soluta": "accusantium",
              },
            },
            userId: "aliquam",
          },
        ],
        instagram: [
          {
            applicationId: "dicta",
            systemData: {
              "reprehenderit": {
                "nisi": "aut",
                "voluptatum": "qui",
              },
              "quibusdam": {
                "deleniti": "itaque",
                "dolorum": "architecto",
              },
            },
            userId: "omnis",
          },
          {
            applicationId: "tenetur",
            systemData: {
              "at": {
                "voluptate": "ipsa",
              },
            },
            userId: "minima",
          },
          {
            applicationId: "veritatis",
            systemData: {
              "adipisci": {
                "temporibus": "accusantium",
                "rem": "aut",
                "laudantium": "eum",
              },
            },
            userId: "mollitia",
          },
          {
            applicationId: "ab",
            systemData: {
              "non": {
                "dolor": "occaecati",
              },
              "numquam": {
                "explicabo": "voluptas",
                "aut": "dignissimos",
                "dicta": "maiores",
                "natus": "velit",
              },
              "voluptatibus": {
                "asperiores": "aperiam",
                "ea": "quaerat",
              },
            },
            userId: "consequuntur",
          },
        ],
        line: [
          {
            applicationId: "officia",
            systemData: {
              "dignissimos": {
                "asperiores": "nemo",
                "quae": "quaerat",
                "porro": "quod",
              },
              "labore": {
                "adipisci": "fuga",
              },
              "id": {
                "velit": "culpa",
                "est": "recusandae",
              },
              "totam": {
                "vel": "ducimus",
                "quos": "vel",
                "labore": "possimus",
                "facilis": "cum",
              },
            },
            userId: "commodi",
          },
          {
            applicationId: "in",
            systemData: {
              "reiciendis": {
                "nemo": "recusandae",
                "aliquid": "aperiam",
                "cum": "consectetur",
                "in": "exercitationem",
              },
              "earum": {
                "numquam": "doloribus",
                "suscipit": "reiciendis",
                "quidem": "saepe",
                "necessitatibus": "dolore",
              },
            },
            userId: "sunt",
          },
          {
            applicationId: "asperiores",
            systemData: {
              "non": {
                "beatae": "dignissimos",
              },
            },
            userId: "a",
          },
          {
            applicationId: "debitis",
            systemData: {
              "corporis": {
                "laboriosam": "ipsa",
                "voluptates": "libero",
                "vitae": "accusamus",
              },
            },
            userId: "similique",
          },
        ],
        liveChat: [
          {
            applicationId: "aspernatur",
            systemData: {
              "voluptas": {
                "minima": "nobis",
                "dolorum": "adipisci",
              },
              "minus": {
                "blanditiis": "in",
              },
            },
            userId: "dolore",
          },
          {
            applicationId: "aliquam",
            systemData: {
              "temporibus": {
                "adipisci": "cum",
                "blanditiis": "quas",
              },
              "hic": {
                "culpa": "corrupti",
              },
              "pariatur": {
                "hic": "exercitationem",
                "nobis": "sit",
                "rerum": "sed",
              },
              "reiciendis": {
                "asperiores": "facilis",
              },
            },
            userId: "voluptate",
          },
        ],
        phone: [
          {
            number: "ab",
          },
          {
            number: "iste",
          },
          {
            number: "dolore",
          },
        ],
        push: [
          {
            additionalData: {
              "in": {
                "quidem": "explicabo",
                "voluptas": "unde",
              },
            },
            applicationId: "architecto",
            isPrimary: false,
            registrationId: "suscipit",
            systemData: {
              "debitis": {
                "reiciendis": "perferendis",
              },
              "corrupti": {
                "incidunt": "sed",
                "provident": "eius",
                "necessitatibus": "ipsum",
                "ea": "occaecati",
              },
              "quos": {
                "tempora": "tempora",
                "voluptate": "reiciendis",
                "ex": "sit",
                "non": "officiis",
              },
              "praesentium": {
                "quaerat": "incidunt",
                "ipsam": "debitis",
                "rem": "sit",
              },
            },
          },
          {
            additionalData: {
              "error": {
                "minima": "recusandae",
                "reiciendis": "nulla",
              },
              "magni": {
                "saepe": "numquam",
              },
              "veniam": {
                "officiis": "beatae",
                "laudantium": "exercitationem",
              },
              "praesentium": {
                "laboriosam": "dolorum",
                "voluptatum": "error",
                "hic": "expedita",
              },
            },
            applicationId: "debitis",
            isPrimary: false,
            registrationId: "neque",
            systemData: {
              "nostrum": {
                "dolorum": "corrupti",
                "accusamus": "tempora",
                "atque": "fugit",
              },
              "ut": {
                "voluptatem": "culpa",
                "expedita": "magnam",
                "consequatur": "esse",
                "ipsam": "sit",
              },
              "voluptatum": {
                "repudiandae": "corporis",
                "et": "blanditiis",
                "ex": "sed",
              },
            },
          },
          {
            additionalData: {
              "vel": {
                "saepe": "error",
                "consequatur": "incidunt",
              },
            },
            applicationId: "reiciendis",
            isPrimary: false,
            registrationId: "dolorem",
            systemData: {
              "dicta": {
                "occaecati": "labore",
              },
              "quidem": {
                "laborum": "nam",
                "tenetur": "laboriosam",
                "alias": "amet",
              },
              "deserunt": {
                "unde": "reiciendis",
                "provident": "repellendus",
              },
            },
          },
        ],
        telegram: [
          {
            applicationId: "voluptates",
            systemData: {
              "est": {
                "reprehenderit": "facere",
                "fuga": "praesentium",
                "mollitia": "veniam",
              },
            },
            userId: "voluptatem",
          },
          {
            applicationId: "quisquam",
            systemData: {
              "quasi": {
                "reprehenderit": "asperiores",
                "totam": "suscipit",
                "quidem": "maxime",
              },
              "et": {
                "amet": "assumenda",
                "ea": "atque",
              },
              "error": {
                "officiis": "accusamus",
                "natus": "minima",
                "aspernatur": "ex",
                "maiores": "corrupti",
              },
              "at": {
                "blanditiis": "suscipit",
                "repudiandae": "atque",
                "atque": "sunt",
              },
            },
            userId: "recusandae",
          },
          {
            applicationId: "dolorum",
            systemData: {
              "labore": {
                "doloremque": "repudiandae",
                "dicta": "accusantium",
                "beatae": "dolores",
                "enim": "laboriosam",
              },
              "velit": {
                "molestias": "magnam",
                "saepe": "consequuntur",
                "occaecati": "officiis",
                "perspiciatis": "in",
              },
              "adipisci": {
                "occaecati": "consequuntur",
                "fugit": "id",
                "quis": "reprehenderit",
                "error": "illo",
              },
              "corporis": {
                "eveniet": "non",
                "vero": "doloremque",
                "iure": "ipsa",
              },
            },
            userId: "totam",
          },
          {
            applicationId: "quae",
            systemData: {
              "eveniet": {
                "cum": "iure",
              },
              "necessitatibus": {
                "laborum": "distinctio",
              },
            },
            userId: "voluptatum",
          },
        ],
        twitter: [
          {
            applicationId: "aliquam",
            systemData: {
              "repellat": {
                "corporis": "perspiciatis",
              },
              "nihil": {
                "voluptas": "alias",
                "maiores": "reiciendis",
                "dolores": "id",
              },
            },
            userId: "minima",
          },
          {
            applicationId: "dolore",
            systemData: {
              "nesciunt": {
                "recusandae": "omnis",
              },
              "quaerat": {
                "ex": "ut",
                "culpa": "adipisci",
              },
              "debitis": {
                "eum": "nemo",
                "recusandae": "esse",
                "provident": "quis",
              },
            },
            userId: "eum",
          },
          {
            applicationId: "reiciendis",
            systemData: {
              "aspernatur": {
                "quasi": "animi",
                "nostrum": "mollitia",
              },
              "provident": {
                "animi": "ex",
                "aliquid": "accusantium",
                "repellat": "doloribus",
                "ullam": "in",
              },
              "nam": {
                "officia": "laborum",
                "placeat": "modi",
                "voluptatibus": "molestias",
                "officiis": "sapiente",
              },
            },
            userId: "cumque",
          },
        ],
        viberBots: [
          {
            applicationId: "rerum",
            systemData: {
              "quis": {
                "fugit": "cumque",
              },
              "quae": {
                "velit": "aspernatur",
              },
            },
            userId: "eum",
          },
        ],
      },
      country: "Equatorial Guinea",
      createdAt: "rem",
      customAttributes: {
        "impedit": {
          "sapiente": "eum",
        },
        "dicta": {
          "beatae": "cupiditate",
          "provident": "earum",
        },
        "soluta": {
          "illum": "eaque",
          "earum": "perspiciatis",
          "maiores": "debitis",
          "aliquid": "porro",
        },
        "suscipit": {
          "fugit": "cumque",
        },
      },
      externalId: "fuga",
      firstName: "Claire",
      gender: NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2GenderEnum.Female,
      id: 898760,
      integrations: {
        salesforce: {
          contactId: "nulla",
          leadId: "consequatur",
        },
      },
      lastName: "Boyle",
      middleName: "et",
      modifiedAt: "ducimus",
      modifiedFrom: NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2ModifiedFromEnum.Dynamics,
      origin: NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2OriginEnum.Dynamics,
      profilePicture: "suscipit",
      tags: [
        "quasi",
      ],
      type: NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2TypeEnum.Customer,
    },
  },
  campaignId: 984934,
  email: "Sophie47@hotmail.com",
  externalId: "molestiae",
  phone: "(545) 994-0801",
  pushRegistrationId: "odio",
  xRequestStart: "tempora",
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
import {
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ActionAfterSubmissionTypeEnum,
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementDtoComponentEnum,
} from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForm({
  id: "76360a15-db6a-4660-a59a-1adeaab5851d",
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
import {
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ActionAfterSubmissionTypeEnum,
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementDtoComponentEnum,
} from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForms({
  limit: 405036,
  offset: 775803,
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
  id: "645b08b6-1891-4baa-8fe1-ade008e6f8c5",
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
  campaignId: 992074,
  email: "Finn_Aufderhar77@gmail.com",
  externalId: "quibusdam",
  phone: "462.405.0220 x1021",
  pushRegistrationId: "ab",
  xRequestStart: "laudantium",
}, {
  apiKeyHeader: "YOUR_API_KEY_HERE",
}).then((res: RemovePeopleFromFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
