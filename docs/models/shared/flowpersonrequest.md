# FlowPersonRequest

Contains the data used for person creation (if it does not exist) or partial update (if it exists)


## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `flowVariables`                                                                                         | Record<string, [FlowPersonRequestFlowVariables](../../models/shared/flowpersonrequestflowvariables.md)> | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `personData`                                                                                            | [IamPersonV2](../../models/shared/iampersonv2.md)                                                       | :heavy_check_mark:                                                                                      | N/A                                                                                                     |