# ExceptionResponse

Response error codes

<table>
<tr><th>Error</th><th>ErrorCode</th><th>HTTP status</th></tr>
<tr><td>Bad request</td><td>40001</td><td>400</td></tr>
<tr><td>Duplicate person</td><td>40002</td><td>400</td></tr>
<tr><td>Person manipulation failed</td><td>40003</td><td>400</td></tr>
<tr><td>Person already in flow</td><td>40004</td><td>400</td></tr>
<tr><td>Flow inactive</td><td>40005</td><td>400</td></tr>
<tr><td>Person is not in the flow</td><td>40006</td><td>400</td></tr>
<tr><td>Flow not found</td><td>40401</td><td>404</td></tr>
<tr><td>Person not found</td><td>40402</td><td>404</td></tr>
<tr><td>Action not found</td><td>40403</td><td>404</td></tr>
<tr><td>Internal server error</td><td>50001</td><td>500</td></tr>
</table>


## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `errorCode`        | *number*           | :heavy_minus_sign: | N/A                |
| `errorMessage`     | *string*           | :heavy_minus_sign: | N/A                |