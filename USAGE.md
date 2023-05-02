<!-- Start SDK Example Usage -->
```typescript
import { Infobip } from "infobip-moments";
import { GetFormsResponse } from "infobip-moments/dist/sdk/models/operations";
import { ActionAfterSubmissionTypeEnum, FormElementDtoComponentEnum } from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForms({
  limit: 548814,
  offset: 592845,
}, {
  ibssoTokenHeader: "YOUR_API_KEY_HERE",
}).then((res: GetFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->