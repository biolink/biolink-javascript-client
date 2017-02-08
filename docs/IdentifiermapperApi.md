# BioLinkApi.IdentifiermapperApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrefixCollection**](IdentifiermapperApi.md#getPrefixCollection) | **GET** /identifier/mapper/{source}/{target}/ | TODO maps a list of identifiers from a source to a target


<a name="getPrefixCollection"></a>
# **getPrefixCollection**
> [Association] getPrefixCollection(source, target)

TODO maps a list of identifiers from a source to a target

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.IdentifiermapperApi();

var source = "source_example"; // String | 

var target = "target_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPrefixCollection(source, target, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**|  | 
 **target** | **String**|  | 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

