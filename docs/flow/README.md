# flow

### Available Operations

* [addPeopleToFlow](#addpeopletoflow) - Add Person to Flow
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

sdk.flow.addPeopleToFlow({
  nineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0FlowPersonRequest: {
    flowVariables: {
      "nulla": {
        "illum": "vel",
        "error": "deserunt",
        "suscipit": "iure",
      },
      "magnam": {
        "ipsa": "delectus",
        "tempora": "suscipit",
        "molestiae": "minus",
        "placeat": "voluptatum",
      },
      "iusto": {
        "nisi": "recusandae",
        "temporibus": "ab",
        "quis": "veritatis",
      },
    },
    personData: {
      address: "0389 Connelly Trace",
      birthDate: "at",
      city: "Lakewood",
      companyId: 799159,
      computedAttributes: {
        "esse": {
          "porro": "dolorum",
          "dicta": "nam",
          "officia": "occaecati",
        },
        "fugit": {
          "hic": "optio",
          "totam": "beatae",
          "commodi": "molestiae",
        },
        "modi": {
          "impedit": "cum",
        },
        "esse": {
          "excepturi": "aspernatur",
        },
      },
      contactInformation: {
        email: [
          {
            address: "61626 Tyra Union",
          },
        ],
        facebook: [
          {
            applicationId: "in",
            systemData: {
              "iste": {
                "saepe": "quidem",
                "architecto": "ipsa",
              },
              "reiciendis": {
                "mollitia": "laborum",
                "dolores": "dolorem",
                "corporis": "explicabo",
              },
            },
            userId: "nobis",
          },
          {
            applicationId: "enim",
            systemData: {
              "nemo": {
                "excepturi": "accusantium",
                "iure": "culpa",
              },
              "doloribus": {
                "architecto": "mollitia",
                "dolorem": "culpa",
                "consequuntur": "repellat",
                "mollitia": "occaecati",
              },
              "numquam": {
                "quam": "molestiae",
                "velit": "error",
              },
            },
            userId: "quia",
          },
          {
            applicationId: "quis",
            systemData: {
              "laborum": {
                "enim": "odit",
                "quo": "sequi",
                "tenetur": "ipsam",
              },
            },
            userId: "id",
          },
        ],
        instagram: [
          {
            applicationId: "aut",
            systemData: {
              "error": {
                "laborum": "quasi",
                "reiciendis": "voluptatibus",
                "vero": "nihil",
                "praesentium": "voluptatibus",
              },
            },
            userId: "ipsa",
          },
          {
            applicationId: "omnis",
            systemData: {
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
          {
            applicationId: "quasi",
            systemData: {
              "sint": {
                "itaque": "incidunt",
              },
              "enim": {
                "est": "quibusdam",
              },
              "explicabo": {
                "distinctio": "quibusdam",
                "labore": "modi",
                "qui": "aliquid",
              },
              "cupiditate": {
                "perferendis": "magni",
                "assumenda": "ipsam",
                "alias": "fugit",
              },
            },
            userId: "dolorum",
          },
        ],
        line: [
          {
            applicationId: "tempora",
            systemData: {
              "tempore": {
                "delectus": "eum",
                "non": "eligendi",
              },
              "sint": {
                "provident": "necessitatibus",
                "sint": "officia",
              },
              "dolor": {
                "a": "dolorum",
                "in": "in",
                "illum": "maiores",
                "rerum": "dicta",
              },
            },
            userId: "magnam",
          },
          {
            applicationId: "cumque",
            systemData: {
              "ea": {
                "laborum": "accusamus",
                "non": "occaecati",
              },
              "enim": {
                "delectus": "quidem",
                "provident": "nam",
                "id": "blanditiis",
                "deleniti": "sapiente",
              },
              "amet": {
                "nisi": "vel",
                "natus": "omnis",
                "molestiae": "perferendis",
              },
              "nihil": {
                "distinctio": "id",
                "labore": "labore",
              },
            },
            userId: "suscipit",
          },
          {
            applicationId: "natus",
            systemData: {
              "eum": {
                "aspernatur": "architecto",
                "magnam": "et",
                "excepturi": "ullam",
                "provident": "quos",
              },
              "sint": {
                "mollitia": "reiciendis",
              },
              "mollitia": {
                "eum": "dolor",
                "necessitatibus": "odit",
              },
            },
            userId: "nemo",
          },
        ],
        liveChat: [
          {
            applicationId: "iure",
            systemData: {
              "debitis": {
                "maxime": "deleniti",
                "facilis": "in",
              },
              "architecto": {
                "repudiandae": "ullam",
              },
              "expedita": {
                "repellat": "quibusdam",
                "sed": "saepe",
              },
              "pariatur": {
                "consequuntur": "praesentium",
              },
            },
            userId: "natus",
          },
        ],
        phone: [
          {
            number: "sunt",
          },
        ],
        push: [
          {
            additionalData: {
              "pariatur": {
                "ea": "excepturi",
                "odit": "ea",
                "accusantium": "ab",
                "maiores": "quidem",
              },
              "ipsam": {
                "autem": "nam",
                "eaque": "pariatur",
              },
              "nemo": {
                "perferendis": "fugiat",
                "amet": "aut",
                "cumque": "corporis",
                "hic": "libero",
              },
              "nobis": {
                "quis": "totam",
              },
            },
            applicationId: "dignissimos",
            isPrimary: false,
            registrationId: "eaque",
            systemData: {
              "nesciunt": {
                "perferendis": "dolores",
              },
              "minus": {
                "dolor": "vero",
                "nostrum": "hic",
              },
            },
          },
          {
            additionalData: {
              "omnis": {
                "perspiciatis": "voluptatem",
                "porro": "consequuntur",
                "blanditiis": "error",
              },
              "eaque": {
                "rerum": "adipisci",
                "asperiores": "earum",
                "modi": "iste",
              },
              "dolorum": {
                "pariatur": "provident",
                "nobis": "libero",
                "delectus": "quaerat",
              },
              "quos": {
                "dolorem": "dolorem",
                "dolor": "qui",
              },
            },
            applicationId: "ipsum",
            isPrimary: false,
            registrationId: "hic",
            systemData: {
              "cum": {
                "dignissimos": "reiciendis",
                "amet": "dolorum",
              },
              "numquam": {
                "ipsa": "ipsa",
              },
              "iure": {
                "quaerat": "accusamus",
                "quidem": "voluptatibus",
              },
            },
          },
          {
            additionalData: {
              "natus": {
                "atque": "sit",
              },
              "fugiat": {
                "soluta": "dolorum",
              },
            },
            applicationId: "iusto",
            isPrimary: false,
            registrationId: "voluptate",
            systemData: {
              "deleniti": {
                "necessitatibus": "distinctio",
                "asperiores": "nihil",
                "ipsum": "voluptate",
              },
              "id": {
                "eius": "aspernatur",
                "perferendis": "amet",
                "optio": "accusamus",
                "ad": "saepe",
              },
              "suscipit": {
                "provident": "minima",
                "repellendus": "totam",
                "similique": "alias",
              },
            },
          },
          {
            additionalData: {
              "quaerat": {
                "vel": "quod",
                "officiis": "qui",
              },
              "dolorum": {
                "esse": "harum",
                "iusto": "ipsum",
                "quisquam": "tenetur",
                "amet": "tempore",
              },
              "accusamus": {
                "enim": "dolorem",
                "sapiente": "totam",
              },
              "nihil": {
                "expedita": "neque",
              },
            },
            applicationId: "sed",
            isPrimary: false,
            registrationId: "vel",
            systemData: {
              "voluptas": {
                "quam": "ipsum",
                "incidunt": "qui",
                "cupiditate": "maxime",
              },
              "pariatur": {
                "dicta": "laborum",
                "totam": "incidunt",
                "aspernatur": "dolores",
              },
              "distinctio": {
                "aliquid": "quam",
                "molestias": "temporibus",
                "qui": "neque",
              },
            },
          },
        ],
        telegram: [
          {
            applicationId: "magni",
            systemData: {
              "sunt": {
                "nam": "hic",
                "voluptatem": "cumque",
              },
              "soluta": {
                "et": "saepe",
                "ipsum": "veritatis",
                "nobis": "quos",
              },
            },
            userId: "tempore",
          },
        ],
        twitter: [
          {
            applicationId: "aperiam",
            systemData: {
              "dolorem": {
                "labore": "adipisci",
                "dolorum": "architecto",
              },
              "quae": {
                "quas": "itaque",
              },
              "consequatur": {
                "repellendus": "porro",
                "doloribus": "ut",
                "facilis": "cupiditate",
              },
              "qui": {
                "laudantium": "odio",
              },
            },
            userId: "occaecati",
          },
          {
            applicationId: "voluptatibus",
            systemData: {
              "vero": {
                "quis": "ipsum",
                "delectus": "voluptate",
                "consectetur": "vero",
              },
              "tenetur": {
                "hic": "distinctio",
                "quod": "odio",
              },
              "similique": {
                "vero": "ducimus",
                "dolore": "quibusdam",
                "illum": "sequi",
              },
              "natus": {
                "aut": "voluptatibus",
                "exercitationem": "nulla",
                "fugit": "porro",
                "maiores": "doloribus",
              },
            },
            userId: "iusto",
          },
          {
            applicationId: "eligendi",
            systemData: {
              "alias": {
                "tempora": "ipsam",
                "ea": "aspernatur",
                "vel": "possimus",
              },
              "magnam": {
                "ex": "laudantium",
              },
            },
            userId: "dicta",
          },
        ],
        viberBots: [
          {
            applicationId: "maiores",
            systemData: {
              "ex": {
                "excepturi": "voluptatibus",
                "nostrum": "sapiente",
                "quisquam": "saepe",
                "ea": "impedit",
              },
            },
            userId: "corporis",
          },
        ],
      },
      country: "Greece",
      createdAt: "aliquid",
      customAttributes: {
        "magnam": {
          "quo": "consectetur",
          "recusandae": "aspernatur",
        },
      },
      externalId: "minima",
      firstName: "Amir",
      gender: NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2GenderEnum.Female,
      id: 725595,
      integrations: {
        salesforce: {
          contactId: "aut",
          leadId: "aut",
        },
      },
      lastName: "Lesch",
      middleName: "impedit",
      modifiedAt: "aliquam",
      modifiedFrom: NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2ModifiedFromEnum.WebSDK,
      origin: NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2OriginEnum.Answers,
      profilePicture: "inventore",
      tags: [
        "et",
        "dolorum",
      ],
      type: NineHundredTrillionSixHundredAndThirtyFourBillionThreeHundredAndThirtyNineMillionFiveHundredAndTwelveThousandAndFortyOnedd9c6cd5c4ad62d6cf43ea57e0548f5deeceb9f79d92b92f0IamPersonV2TypeEnum.Agent,
    },
  },
  campaignId: 810424,
  email: "Hollis_Johnston82@gmail.com",
  externalId: "nulla",
  phone: "1-702-415-0434 x244",
  pushRegistrationId: "rem",
  xRequestStart: "fuga",
}, {
  apiKeyHeader: "YOUR_API_KEY_HERE",
}).then((res: AddPeopleToFlowResponse) => {
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

sdk.flow.removePeopleFromFlow({
  campaignId: 442015,
  email: "Royce.Graham@hotmail.com",
  externalId: "assumenda",
  phone: "1-670-266-2787",
  pushRegistrationId: "fuga",
  xRequestStart: "eius",
}, {
  apiKeyHeader: "YOUR_API_KEY_HERE",
}).then((res: RemovePeopleFromFlowResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
