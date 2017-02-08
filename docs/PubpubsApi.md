# BioLinkApi.PubpubsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFoo**](PubpubsApi.md#getFoo) | **GET** /pub/pubs/{term} | Returns list of matches


<a name="getFoo"></a>
# **getFoo**
> [Association] getFoo(term)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.PubpubsApi();

var term = "term_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFoo(term, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**|  | 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

