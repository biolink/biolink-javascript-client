# BioLinkApi.GenomefeaturesApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeaturesWithinResource**](GenomefeaturesApi.md#getFeaturesWithinResource) | **GET** /genome/features/within/{build}/{reference}/{begin}/{end} | Returns list of matches


<a name="getFeaturesWithinResource"></a>
# **getFeaturesWithinResource**
> [SequenceFeature] getFeaturesWithinResource(begin, end, build, reference)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.GenomefeaturesApi();

var begin = "begin_example"; // String | 

var end = "end_example"; // String | 

var build = "build_example"; // String | 

var reference = "reference_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeaturesWithinResource(begin, end, build, reference, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **begin** | **String**|  | 
 **end** | **String**|  | 
 **build** | **String**|  | 
 **reference** | **String**|  | 

### Return type

[**[SequenceFeature]**](SequenceFeature.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

