# BioLinkApi.NlpannotateApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAnnotate**](NlpannotateApi.md#getAnnotate) | **GET** /nlp/annotate/{text} | Returns list of matches


<a name="getAnnotate"></a>
# **getAnnotate**
> [Association] getAnnotate(text, opts)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.NlpannotateApi();

var text = "text_example"; // String | 

var opts = { 
  'category': ["category_example"] // [String] | E.g. phenotype
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAnnotate(text, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text** | **String**|  | 
 **category** | [**[String]**](String.md)| E.g. phenotype | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

