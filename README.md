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
import { Infobip } from "infobip-moments";
import { GetFormsResponse } from "infobip-moments/dist/sdk/models/operations";
import { ActionAfterSubmissionTypeEnum, FormElementDtoComponentEnum } from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForms({
  ibssoTokenHeader: "YOUR_API_KEY_HERE",
}, 548814, 592845).then((res: GetFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [moments](docs/moments/README.md)

* [addPeopleToFlow](docs/moments/README.md#addpeopletoflow) - Add Person to Flow
* [getForm](docs/moments/README.md#getform) - Get form
* [getForms](docs/moments/README.md#getforms) - Get forms
* [incrementViewCount](docs/moments/README.md#incrementviewcount) - Increment form view count
* [removePeopleFromFlow](docs/moments/README.md#removepeoplefromflow) - Remove Person from Flow
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

