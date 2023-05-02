# infobip-moments

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Infobip-moments-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Infobip-moments-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "infobip-moments";
import { GetFormsResponse } from "infobip-moments/dist/sdk/models/operations";
import {
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93ActionAfterSubmissionTypeEnum,
  EightyTwoacced121042a63992bde26d4dd141353f7b2633c33f797139d71d4bef2a93FormElementDtoComponentEnum,
} from "infobip-moments/dist/sdk/models/shared";

const sdk = new SDK();

sdk.customerEngagement.getForms({
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [customerEngagement](docs/customerengagement/README.md)

* [getForms](docs/customerengagement/README.md#getforms) - Get forms

### [flow](docs/flow/README.md)

* [addPeopleToFlow](docs/flow/README.md#addpeopletoflow) - Add Person to Flow
* [removePeopleFromFlow](docs/flow/README.md#removepeoplefromflow) - Remove Person from Flow

### [forms](docs/forms/README.md)

* [getForms](docs/forms/README.md#getforms) - Get forms

### [moments](docs/moments/README.md)

* [getForm](docs/moments/README.md#getform) - Get form
* [getForms](docs/moments/README.md#getforms) - Get forms
* [incrementViewCount](docs/moments/README.md#incrementviewcount) - Increment form view count
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

