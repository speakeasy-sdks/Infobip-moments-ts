# customerEngagement

### Available Operations

* [getForms](#getforms) - Get forms

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

sdk.customerEngagement.getForms({
  limit: 715190,
  offset: 844266,
}, {
  ibssoTokenHeader: "YOUR_API_KEY_HERE",
}).then((res: GetFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
