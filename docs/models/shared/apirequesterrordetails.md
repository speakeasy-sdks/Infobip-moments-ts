# ApiRequestErrorDetails


## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `messageId`                 | *string*                    | :heavy_minus_sign:          | Identifier of the error.    | BAD_REQUEST                 |
| `text`                      | *string*                    | :heavy_minus_sign:          | Detailed error description. | Bad request                 |
| `validationErrors`          | Record<string, *string*[]>  | :heavy_minus_sign:          | Map of validation errors.   |                             |