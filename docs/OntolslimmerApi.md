# BioLinkApi.OntolslimmerApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFoo**](OntolslimmerApi.md#getFoo) | **GET** /ontol/slimmer/{subset} | Maps to slim


<a name="getFoo"></a>
# **getFoo**
> [Association] getFoo(subset)

Maps to slim

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.OntolslimmerApi();

var subset = "subset_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFoo(subset, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subset** | **String**|  | 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

