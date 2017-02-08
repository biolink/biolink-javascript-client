# BioLinkApi.VariationsetApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteVariantSetItem**](VariationsetApi.md#deleteVariantSetItem) | **DELETE** /variation/set/{id} | Deletes variant set
[**getAnalyze**](VariationsetApi.md#getAnalyze) | **GET** /variation/set/analyze/{id} | Returns list of matches
[**getVariantSetItem**](VariationsetApi.md#getVariantSetItem) | **GET** /variation/set/{id} | Returns a variant set
[**getVariantSetsArchiveCollection**](VariationsetApi.md#getVariantSetsArchiveCollection) | **GET** /variation/set/archive/{year}/{month}/{day}/ | Returns list of variant sets from a specified time period
[**getVariantSetsCollection**](VariationsetApi.md#getVariantSetsCollection) | **GET** /variation/set/ | Returns list of variant sets
[**postVariantSetsCollection**](VariationsetApi.md#postVariantSetsCollection) | **POST** /variation/set/ | Creates a new variant set
[**putVariantSetItem**](VariationsetApi.md#putVariantSetItem) | **PUT** /variation/set/{id} | Updates a variant set


<a name="deleteVariantSetItem"></a>
# **deleteVariantSetItem**
> deleteVariantSetItem(idid2id3)

Deletes variant set

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.VariationsetApi();

var id = "id_example"; // String | 

var id2 = "id_example"; // String | 

var id3 = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteVariantSetItem(idid2id3, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **id2** | **String**|  | 
 **id3** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAnalyze"></a>
# **getAnalyze**
> [Association] getAnalyze(id)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.VariationsetApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAnalyze(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariantSetItem"></a>
# **getVariantSetItem**
> VariantSet getVariantSetItem(id)

Returns a variant set

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.VariationsetApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariantSetItem(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**VariantSet**](VariantSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariantSetsArchiveCollection"></a>
# **getVariantSetsArchiveCollection**
> PageOfVariantSets getVariantSetsArchiveCollection(year, month, day, opts)

Returns list of variant sets from a specified time period

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.VariationsetApi();

var year = 56; // Integer | 

var month = 56; // Integer | 

var day = 56; // Integer | 

var opts = { 
  'page': 1, // Integer | Page number
  'perPage': 10 // Integer | Results per page {error_msg}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariantSetsArchiveCollection(year, month, day, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Integer**|  | 
 **month** | **Integer**|  | 
 **day** | **Integer**|  | 
 **page** | **Integer**| Page number | [optional] [default to 1]
 **perPage** | **Integer**| Results per page {error_msg} | [optional] [default to 10]

### Return type

[**PageOfVariantSets**](PageOfVariantSets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariantSetsCollection"></a>
# **getVariantSetsCollection**
> PageOfVariantSets getVariantSetsCollection(opts)

Returns list of variant sets

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.VariationsetApi();

var opts = { 
  'page': 1, // Integer | Page number
  'perPage': 10 // Integer | Results per page {error_msg}
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariantSetsCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Page number | [optional] [default to 1]
 **perPage** | **Integer**| Results per page {error_msg} | [optional] [default to 10]

### Return type

[**PageOfVariantSets**](PageOfVariantSets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postVariantSetsCollection"></a>
# **postVariantSetsCollection**
> postVariantSetsCollection(payload)

Creates a new variant set

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.VariationsetApi();

var payload = new BioLinkApi.VariantSet(); // VariantSet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postVariantSetsCollection(payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**VariantSet**](VariantSet.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putVariantSetItem"></a>
# **putVariantSetItem**
> putVariantSetItem(idid2payload)

Updates a variant set

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.VariationsetApi();

var id = "id_example"; // String | 

var id2 = "id_example"; // String | 

var payload = new BioLinkApi.VariantSet(); // VariantSet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putVariantSetItem(idid2payload, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **id2** | **String**|  | 
 **payload** | [**VariantSet**](VariantSet.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

