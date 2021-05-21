let nock = require('nock');

module.exports.hash = "8300939e1687bf8e27dd3a19a7f48f5c";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/metricsadvisor/v1.0/metrics/189ff959-d9f4-45c7-a1e0-f87c9c7ca80f/enrichment/anomalyDetection/configurations')
  .reply(200, {"value":[{"anomalyDetectionConfigurationId":"e17f32d4-3ddf-4dc7-84ee-b4130c7e1777","name":"detection-config","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"smartDetectionCondition":{"sensitivity":100,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":1,"minRatio":100}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"b4275a7a-efd4-43cd-a924-898d436ef3bf","name":"config5WTBGjwv","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","smartDetectionCondition":{"sensitivity":60,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":5,"minRatio":6}},"hardThresholdCondition":{"lowerBound":12,"anomalyDetectorDirection":"Down","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Koltaka"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}}],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Delhi","category":"Handmade"}},"smartDetectionCondition":{"sensitivity":30,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":3,"minRatio":4}}}]},{"anomalyDetectionConfigurationId":"10240200-6f3a-4783-b8e4-e7b34a3973d6","name":"my_detection_config","description":"anomaly detection config for metric","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","smartDetectionCondition":{"sensitivity":10,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"hardThresholdCondition":{"upperBound":100,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":20,"shiftPoint":10,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":5,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"5d50b465-7565-4167-b33b-b92eb3199254","name":"test_detection_configuration1605051259010","description":"Detection configuration description","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"smartDetectionCondition":{"sensitivity":100,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":1,"minRatio":1}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"eb6ef516-9a09-4535-8ade-f64e26dfaefb","name":"js-detection-config-160521899279304202","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"1d270422-7ef8-4d3e-99e9-46b2bb1362fc","name":"js-detection-config-160521901418201870","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"64993d1d-02b8-4e0b-87d3-13095b187fe4","name":"js-detection-config-160521939989909966","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"dc0a5df5-c84e-4e9b-9065-f4017c4fbb97","name":"js-detection-config-160521942344906897","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"0491bfd7-b80a-4c2b-a32b-009e355a6cf5","name":"js-detection-config-160521950750209992","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"d803825a-12bf-4ae3-abcc-efd051509a1a","name":"js-detection-config-160521952580900483","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"a9f3cfed-7f4d-4351-8b38-0e9acf4f3a35","name":"js-detection-config-161116759979002989","description":"fresh detection","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"b5be969f-a8ba-497b-a537-cf061c8ff76a","name":"configDGDERJxX","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"hardThresholdCondition":{"lowerBound":10,"anomalyDetectorDirection":"Down","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Delhi"}},"smartDetectionCondition":{"sensitivity":30,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":3,"minRatio":4}}},{"group":{"dimension":{"city":"Koltaka"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}}],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"5c471d57-6218-46e1-b096-660d715f1834","name":"Sample anomaly detection configuration","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","smartDetectionCondition":{"sensitivity":10,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":4,"minRatio":50}},"hardThresholdCondition":{"lowerBound":5,"anomalyDetectorDirection":"Down","suppressCondition":{"minNumber":1,"minRatio":100}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"04b60562-0dfc-4211-a3b1-6069e259250c","name":"configTVRQwdIC","description":"This hook was created to test the .NET client.","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"AND","smartDetectionCondition":{"sensitivity":75,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":15,"minRatio":16}},"hardThresholdCondition":{"upperBound":9,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":11,"minRatio":12}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Koltaka"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}},{"group":{"dimension":{"city":"Delhi"}},"smartDetectionCondition":{"sensitivity":95,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":25,"minRatio":26}}}],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"4d6e2895-e8f5-47ef-98d7-f3e1e196baa7","name":"config1hMAIa2O","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"hardThresholdCondition":{"lowerBound":10,"anomalyDetectorDirection":"Down","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Delhi"}},"smartDetectionCondition":{"sensitivity":30,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":3,"minRatio":4}}},{"group":{"dimension":{"city":"Koltaka"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}}],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"bb7f5f55-b151-49d7-b5e2-481230fa152e","name":"configcXoFnv3b","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"hardThresholdCondition":{"upperBound":10,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"753c9c8b-9ced-497c-aa4a-ccc3f834870d","name":"configl9dCiQms","description":"This hook was created to test the .NET client.","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"hardThresholdCondition":{"upperBound":10,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"8e8f9b7e-cdac-483c-874b-c459a3d230ba","name":"configpkySQkj6","description":"This hook was created to test the .NET client.","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"hardThresholdCondition":{"upperBound":10,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"a327a75c-8df7-428f-b82a-c06e4b22c793","name":"configSAD22cBw","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","smartDetectionCondition":{"sensitivity":60,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":5,"minRatio":6}},"hardThresholdCondition":{"lowerBound":12,"anomalyDetectorDirection":"Down","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Koltaka"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}}],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Delhi","category":"Handmade"}},"smartDetectionCondition":{"sensitivity":30,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":3,"minRatio":4}}}]},{"anomalyDetectionConfigurationId":"251047f4-1798-41b8-b88c-7dd7dbea9875","name":"new Name","description":"new description","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","hardThresholdCondition":{"upperBound":500,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":5,"minRatio":5}},"changeThresholdCondition":{"changePercentage":44,"shiftPoint":2,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":4,"minRatio":4}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Mumbai"}},"hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}}}],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Kolkata","category":"Handmade"}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}}]},{"anomalyDetectionConfigurationId":"32c4de4c-9661-454b-8168-0293c551c049","name":"configy3Oq6hFB","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"hardThresholdCondition":{"upperBound":10,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]},{"anomalyDetectionConfigurationId":"44efdf66-870c-4156-b106-28b82e80f033","name":"configpCcwY1yh","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","smartDetectionCondition":{"sensitivity":60,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":5,"minRatio":6}},"hardThresholdCondition":{"lowerBound":10,"anomalyDetectorDirection":"Down","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Koltaka"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}}],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Delhi","category":"Handmade"}},"smartDetectionCondition":{"sensitivity":30,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":3,"minRatio":4}}}]},{"anomalyDetectionConfigurationId":"d485a2e1-c217-46cc-9c5a-8eb1b88afbdb","name":"configvD29PWyr","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"hardThresholdCondition":{"lowerBound":10,"upperBound":20,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Delhi","category":"Handmade"}},"smartDetectionCondition":{"sensitivity":30,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":3,"minRatio":4}}},{"series":{"dimension":{"city":"Koltaka","category":"Grocery & Gourmet Food"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}}]},{"anomalyDetectionConfigurationId":"aee13f5c-3bf8-4f7f-afea-bfbe2c9d52af","name":"new Name","description":"new description","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","hardThresholdCondition":{"upperBound":500,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":5,"minRatio":5}},"changeThresholdCondition":{"changePercentage":44,"shiftPoint":2,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":4,"minRatio":4}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Mumbai"}},"hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}}}],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Kolkata","category":"Handmade"}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}}]},{"anomalyDetectionConfigurationId":"d3d24c1f-a6de-437f-9276-bb8ff9fd40ab","name":"new Name","description":"new description","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","hardThresholdCondition":{"upperBound":500,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":5,"minRatio":5}},"changeThresholdCondition":{"changePercentage":44,"shiftPoint":2,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":4,"minRatio":4}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Mumbai"}},"hardThresholdCondition":{"upperBound":400,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":2,"minRatio":2}}}],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Kolkata","category":"Handmade"}},"changeThresholdCondition":{"changePercentage":33,"shiftPoint":1,"anomalyDetectorDirection":"Both","withinRange":true,"suppressCondition":{"minNumber":2,"minRatio":2}}}]},{"anomalyDetectionConfigurationId":"68e830d8-2c1c-4819-a9a0-7d3fb7cee396","name":"configlrxlJGPY","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"conditionOperator":"OR","smartDetectionCondition":{"sensitivity":60,"anomalyDetectorDirection":"Up","suppressCondition":{"minNumber":5,"minRatio":6}},"hardThresholdCondition":{"lowerBound":10,"anomalyDetectorDirection":"Down","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[{"group":{"dimension":{"city":"Koltaka"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}}],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Delhi","category":"Handmade"}},"smartDetectionCondition":{"sensitivity":30,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":3,"minRatio":4}}}]},{"anomalyDetectionConfigurationId":"59b7bc2f-dc33-42bd-931a-58ffa0959f5d","name":"configGNMNZ30a","description":"","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"hardThresholdCondition":{"lowerBound":10,"upperBound":20,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":1,"minRatio":2}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[{"series":{"dimension":{"city":"Delhi","category":"Handmade"}},"smartDetectionCondition":{"sensitivity":30,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":3,"minRatio":4}}},{"series":{"dimension":{"city":"Koltaka","category":"Grocery & Gourmet Food"}},"changeThresholdCondition":{"changePercentage":40,"shiftPoint":12,"anomalyDetectorDirection":"Up","withinRange":false,"suppressCondition":{"minNumber":5,"minRatio":6}}}]},{"anomalyDetectionConfigurationId":"26ece682-80a6-4415-89a2-05903dd9a640","name":"Default","description":"This description was generated by a sample.","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","wholeMetricConfiguration":{"smartDetectionCondition":{"sensitivity":100,"anomalyDetectorDirection":"Both","suppressCondition":{"minNumber":1,"minRatio":100}}},"dimensionGroupOverrideConfigurations":[],"seriesOverrideConfigurations":[]}]}, [
  'Content-Length',
  '20026',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  'd0e124ae-3df7-4790-b304-8cbb9c5ee4bb',
  'x-envoy-upstream-service-time',
  '5249',
  'apim-request-id',
  'd0e124ae-3df7-4790-b304-8cbb9c5ee4bb',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 03 May 2021 21:45:44 GMT'
]);
