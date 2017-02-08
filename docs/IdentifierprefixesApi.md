# BioLinkApi.IdentifierprefixesApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPrefixCollection**](IdentifierprefixesApi.md#getPrefixCollection) | **GET** /identifier/prefixes/ | Returns list of prefixes
[**getPrefixCollection_0**](IdentifierprefixesApi.md#getPrefixCollection_0) | **GET** /identifier/prefixes/contract/{uri} | Returns contracted URI
[**getPrefixCollection_1**](IdentifierprefixesApi.md#getPrefixCollection_1) | **GET** /identifier/prefixes/expand/{id} | Returns expanded URI


<a name="getPrefixCollection"></a>
# **getPrefixCollection**
> getPrefixCollection()

Returns list of prefixes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.IdentifierprefixesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPrefixCollection(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPrefixCollection_0"></a>
# **getPrefixCollection_0**
> getPrefixCollection_0(uri)

Returns contracted URI

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.IdentifierprefixesApi();

var uri = "uri_example"; // String | URI of entity to be contracted to identifier/CURIE, e.g \"http://www.informatics.jax.org/accession/MGI:1\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPrefixCollection_0(uri, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uri** | **String**| URI of entity to be contracted to identifier/CURIE, e.g \&quot;http://www.informatics.jax.org/accession/MGI:1\&quot; | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPrefixCollection_1"></a>
# **getPrefixCollection_1**
> getPrefixCollection_1(id)

Returns expanded URI

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.IdentifierprefixesApi();

var id = "id_example"; // String | ID of entity to be contracted to URI, e.g \"MGI:1\"


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPrefixCollection_1(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of entity to be contracted to URI, e.g \&quot;MGI:1\&quot; | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

