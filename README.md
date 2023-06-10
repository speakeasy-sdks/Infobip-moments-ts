<div align="center">
    <img src="https://user-images.githubusercontent.com/6267663/236253267-fdcfa9b0-0cb4-43cf-91d6-c3f4020cf038.svg" width="350px">
    <h1>Moments Typescript SDK</h1>
   <p>The Global Communications Platform for Businesses</p>
   <a href="https://www.infobip.com/docs/api/customer-engagement/moments"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=fc6424&style=for-the-badge" /></a>
   <a href="https://github.com/speakeasy-sdks/Infobip-moments-ts/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/Infobip-moments-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
  <a href="https://github.com/speakeasy-sdks/Infobip-moments-ts/releases"><img src="https://img.shields.io/github/v/release/speakeasy-sdks/Infobip-moments-ts?sort=semver&style=for-the-badge" /></a>
</div>


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
import { ActionAfterSubmissionType, FormElementDtoComponent } from "infobip-moments/dist/sdk/models/shared";

const sdk = new Infobip();

sdk.moments.getForms({
  ibssoTokenHeader: "",
}, 548814, 592845).then((res: GetFormsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [moments](docs/sdks/moments/README.md)

* [addPeopleToFlow](docs/sdks/moments/README.md#addpeopletoflow) - Add Person to Flow
* [getForm](docs/sdks/moments/README.md#getform) - Get form
* [getForms](docs/sdks/moments/README.md#getforms) - Get forms
* [incrementViewCount](docs/sdks/moments/README.md#incrementviewcount) - Increment form view count
* [removePeopleFromFlow](docs/sdks/moments/README.md#removepeoplefromflow) - Remove Person from Flow
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

