# ApiFormListDto

Successful Response


## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `forms`                                           | [ApiFormDto](../../models/shared/apiformdto.md)[] | :heavy_check_mark:                                | Forms list                                        |
| `limit`                                           | *number*                                          | :heavy_minus_sign:                                | Number of returned forms                          |
| `offset`                                          | *number*                                          | :heavy_minus_sign:                                | Offset from beginning of list of available forms  |
| `total`                                           | *number*                                          | :heavy_minus_sign:                                | Total number of available forms                   |