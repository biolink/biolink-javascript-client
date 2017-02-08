# BioLinkApi.OwlontologyApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDlQuery**](OwlontologyApi.md#getDlQuery) | **GET** /owl/ontology/dlquery/{query} | Returns list of matches
[**getDlQuery_0**](OwlontologyApi.md#getDlQuery_0) | **GET** /owl/ontology/sparql/{query} | Returns list of matches


<a name="getDlQuery"></a>
# **getDlQuery**
> [Association] getDlQuery(query)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.OwlontologyApi();

var query = "query_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDlQuery(query, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDlQuery_0"></a>
# **getDlQuery_0**
> [Association] getDlQuery_0(query)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.OwlontologyApi();

var query = "query_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDlQuery_0(query, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**|  | 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

