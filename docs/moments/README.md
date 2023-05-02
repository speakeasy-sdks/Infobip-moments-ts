# moments

## Overview

Create exciting customer journeys and engage people in a dialogue through [Flow](https://www.infobip.com/docs/moments/manage-flow), our visual communication builder that helps automatize business processes and reach relevant audiences at just the right moment. People can be added or removed from the communication programmatically via Flow API.

When you need to collect customer data that`s necessary to generate new leads and update existing profiles, turn to Forms: they are [managed](https://www.infobip.com/docs/forms/manage-forms) directly on the Infobip web interface. Meanwhile, Forms API lets you easily retrieve an active form from your web page, track events, or collect the field values when the end user submits the form. You will be able to react quickly based on this data in order to engage leads and analyze user behavior.


### Available Operations

* [getForm](#getform) - Get form
* [getForms](#getforms) - Get forms
* [incrementViewCount](#incrementviewcount) - Increment form view count

## getForm

Use this method to get an active form by its ID.

### Example Usage

```typescript
import { SDK } from "infobip-moments";
import { GetFormResponse } from "infobip-moments/dist/sdk/models/operations";
import {
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ActionAfterSubmissionTypeEnum,
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementDtoComponentEnum,
} from "infobip-moments/dist/sdk/models/shared";

const sdk = new SDK();

sdk.moments.getForm({
  id: "1904e523-c7e0-4bc7-978e-4796f2a70c68",
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
import { SDK } from "infobip-moments";
import { GetFormsResponse } from "infobip-moments/dist/sdk/models/operations";
import {
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ActionAfterSubmissionTypeEnum,
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementDtoComponentEnum,
} from "infobip-moments/dist/sdk/models/shared";

const sdk = new SDK();

sdk.moments.getForms({
  limit: 510017,
  offset: 159867,
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
import { SDK } from "infobip-moments";
import { IncrementViewCountResponse } from "infobip-moments/dist/sdk/models/operations";

const sdk = new SDK();

sdk.moments.incrementViewCount({
  id: "82aa4825-62f2-422e-9817-ee17cbe61e6b",
}, {
  apiKeyHeader: "YOUR_API_KEY_HERE",
}).then((res: IncrementViewCountResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```