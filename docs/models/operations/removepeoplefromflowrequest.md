# RemovePeopleFromFlowRequest


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `campaignId`                                                   | *number*                                                       | :heavy_check_mark:                                             | Unique identifier of the flow that person will be removed from |
| `email`                                                        | *string*                                                       | :heavy_minus_sign:                                             | Person's email address                                         |
| `externalId`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Unique ID for the person from an external system               |
| `phone`                                                        | *string*                                                       | :heavy_minus_sign:                                             | Person's phone number                                          |
| `pushRegistrationId`                                           | *string*                                                       | :heavy_minus_sign:                                             | Unique ID for push registration                                |
| `xRequestStart`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |