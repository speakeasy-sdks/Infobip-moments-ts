<!-- Start SDK Example Usage -->
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
      "provident": {
        "quibusdam": "unde",
        "nulla": "corrupti",
        "illum": "vel",
      },
      "error": {
        "suscipit": "iure",
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
<!-- End SDK Example Usage -->