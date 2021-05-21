let nock = require('nock');

module.exports.hash = "0b380ec49ea2252e1bfbaa30e93be775";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/custom/models')
  .query(true)
  .reply(429, {"error":{"code":"429","message":"Requests to the Custom Form Model Management - List Custom Models Operation under Form Recognizer API (v2.1) have exceeded rate limit of your current FormRecognizer S0 pricing tier. Please retry after 1 second. Please contact Azure support service if you would like to further increase the default rate limit."}}, [
  'Content-Length',
  '347',
  'Content-Type',
  'application/json',
  'Retry-After',
  '1',
  'apim-request-id',
  '906571cf-b683-4a43-abe7-5456cbd16f9b',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:26:39 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1/custom/models')
  .query(true)
  .reply(200, {"modelList":[{"modelId":"0109efb9-3b31-48a8-90ed-4dbea7a7f9d8","status":"invalid","createdDateTime":"2021-05-11T06:31:55Z","lastUpdatedDateTime":"2021-05-11T06:31:56Z"},{"modelId":"01300337-2d75-47a9-ba9d-e4809632ac9f","modelName":"copyModelName162033528572506527","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-05-06T21:08:05Z","lastUpdatedDateTime":"2021-05-06T21:08:08Z"},{"modelId":"01351ced-b4c1-4ea7-9ac7-daf4f9a267d3","status":"invalid","createdDateTime":"2021-05-11T06:29:40Z","lastUpdatedDateTime":"2021-05-11T06:29:42Z"},{"modelId":"027cae79-768f-4ecd-8376-cfdcfe86b6dc","status":"invalid","createdDateTime":"2021-03-03T22:17:25Z","lastUpdatedDateTime":"2021-03-03T22:17:25Z"},{"modelId":"0349ec84-1570-43cf-be3c-ce753fdfb98f","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-11-20T17:56:47Z","lastUpdatedDateTime":"2020-11-20T17:56:50Z"},{"modelId":"03608263-829e-41b3-a080-f471c165809b","status":"ready","createdDateTime":"2020-04-02T01:35:33Z","lastUpdatedDateTime":"2020-04-02T01:37:36Z"},{"modelId":"03ff3ad0-68a4-4d72-ba48-c6b81569132c","modelName":"composedmodel","attributes":{"isComposed":true},"status":"ready","createdDateTime":"2021-03-18T15:06:17Z","lastUpdatedDateTime":"2021-03-18T15:06:17Z"},{"modelId":"04092960-7a18-48ec-a3ff-d9d31e32ccf5","modelName":"modelName162078252815701117","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-05-12T01:22:08Z","lastUpdatedDateTime":"2021-05-12T01:22:11Z"},{"modelId":"046720f8-2956-4b31-9153-915048e815e5","modelName":"model1","status":"invalid","createdDateTime":"2021-02-19T19:06:57Z","lastUpdatedDateTime":"2021-02-19T19:06:58Z"},{"modelId":"04c3c696-7d1a-4592-b368-3e53b5acc188","status":"ready","createdDateTime":"2021-03-18T21:44:23Z","lastUpdatedDateTime":"2021-03-18T21:44:41Z"},{"modelId":"05cfe98b-5315-4de8-bbf0-cbc97aa05857","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-02-19T19:05:57Z","lastUpdatedDateTime":"2021-02-19T19:06:00Z"},{"modelId":"05d8dd77-177c-4f27-ab8e-53d5f6856d4c","modelName":"labeled","status":"invalid","createdDateTime":"2021-02-25T15:54:54Z","lastUpdatedDateTime":"2021-02-25T15:54:57Z"},{"modelId":"061eeae6-ba66-44ac-a888-64cda7bfb08f","status":"ready","createdDateTime":"2021-03-18T15:58:58Z","lastUpdatedDateTime":"2021-03-18T15:59:17Z"},{"modelId":"06250af1-6a8f-4f6d-8432-4964338e0033","modelName":"mymodel","status":"ready","createdDateTime":"2020-11-19T18:08:35Z","lastUpdatedDateTime":"2020-11-19T18:08:51Z"},{"modelId":"06361f72-8e11-4081-a5a1-03face152fdd","modelName":"my composed model","attributes":{"isComposed":true},"status":"ready","createdDateTime":"2021-03-18T14:32:17Z","lastUpdatedDateTime":"2021-03-18T14:32:17Z"},{"modelId":"06829eaa-56f7-42c2-8c48-0060e58a7c47","status":"ready","createdDateTime":"2020-04-02T17:48:45Z","lastUpdatedDateTime":"2020-04-02T17:50:46Z"},{"modelId":"0798709f-d73a-48d1-8210-e782e2303d03","modelName":"mymodel","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-18T15:01:35Z","lastUpdatedDateTime":"2021-03-18T15:01:37Z"},{"modelId":"079b719d-f8d2-4359-900f-2d9d308c03d9","status":"ready","createdDateTime":"2021-03-18T15:55:03Z","lastUpdatedDateTime":"2021-03-18T15:55:20Z"},{"modelId":"07a9d365-0629-4b5c-b913-6dd3e1f2e617","status":"invalid","createdDateTime":"2020-04-09T18:19:12Z","lastUpdatedDateTime":"2020-04-09T18:19:12Z"},{"modelId":"07f8e603-6ce9-45e6-aa42-97d9c4124941","modelName":"labeled","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-05-07T02:30:00Z","lastUpdatedDateTime":"2021-05-07T02:30:03Z"},{"modelId":"088fe0a3-a863-41da-bbad-82ed7fc71333","modelName":"input2","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-05-06T21:07:49Z","lastUpdatedDateTime":"2021-05-06T21:07:52Z"},{"modelId":"08b57613-d96e-4a3f-8742-43efd0e1bbb1","status":"invalid","createdDateTime":"2021-05-11T06:45:13Z","lastUpdatedDateTime":"2021-05-11T06:45:14Z"},{"modelId":"08d21ef4-e9c4-425b-a22e-e5070ecd04b8","status":"ready","createdDateTime":"2020-04-20T19:50:17Z","lastUpdatedDateTime":"2020-04-20T19:50:24Z"},{"modelId":"09a6923d-425d-49f6-a967-6cb78a718b10","status":"ready","createdDateTime":"2020-04-02T19:06:24Z","lastUpdatedDateTime":"2020-04-02T19:08:26Z"},{"modelId":"09c07702-a7c9-42e6-ab85-83078f96c812","status":"ready","createdDateTime":"2021-03-18T15:12:34Z","lastUpdatedDateTime":"2021-03-18T15:12:56Z"},{"modelId":"09ce0242-cf46-4232-91a5-bb36651214b8","modelName":"my labeled model","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2021-03-18T16:00:02Z","lastUpdatedDateTime":"2021-03-18T16:00:05Z"},{"modelId":"0a0558cf-e143-4988-b0c2-64f3f92f830b","status":"invalid","createdDateTime":"2021-05-11T05:23:52Z","lastUpdatedDateTime":"2021-05-11T05:23:53Z"},{"modelId":"0a0a321b-5a0a-40c7-8178-88d478aa8bc8","status":"ready","createdDateTime":"2020-03-12T22:35:52Z","lastUpdatedDateTime":"2020-03-12T22:36:04Z"},{"modelId":"0a362931-f4bb-4b2b-b39e-38ea3fcc97bd","status":"ready","createdDateTime":"2021-05-11T05:21:52Z","lastUpdatedDateTime":"2021-05-11T05:22:16Z"},{"modelId":"0a9f53c0-6a42-43a9-aec1-8f897d23a2e0","modelName":"secondcomposedmodel","attributes":{"isComposed":true},"status":"ready","createdDateTime":"2020-08-11T19:36:47Z","lastUpdatedDateTime":"2020-08-11T19:36:47Z"}],"nextLink":"https://endpoint/formrecognizer/v2.1/custom/models?nextLink=2!236!MDAwMTMyIXN1YnNjcmlwdGlvbnMvYzUwM2I4ODFkNmM2NGY1OGFmYjM3MmMxOTI0YmMyMzQvbW9kZWxzLzBhOWY1M2MwLTZhNDItNDNhOS1hZWMxLThmODk3ZDIzYTJlMC8wYTlmNTNjMC02YTQyLTQzYTktYWVjMS04Zjg5N2QyM2EyZTAuanNvbiEwMDAwMjghOTk5OS0xMi0zMVQyMzo1OTo1OS45OTk5OTk5WiE-"}, [
  'Content-Length',
  '5738',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '157',
  'apim-request-id',
  '78e88e8c-40cd-4afa-8255-b10aaa5172b6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Wed, 12 May 2021 01:26:40 GMT'
]);
