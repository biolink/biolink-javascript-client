# BioLinkApi.CamApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivityCollection**](CamApi.md#getActivityCollection) | **GET** /cam/activity/ | Returns list of models
[**getInstance**](CamApi.md#getInstance) | **GET** /cam/instance/{id} | Returns list of matches
[**getModel**](CamApi.md#getModel) | **GET** /cam/model/{id} | Returns a complete model
[**getModelCollection**](CamApi.md#getModelCollection) | **GET** /cam/model/ | Returns list of ALL models
[**getModelCollection_0**](CamApi.md#getModelCollection_0) | **GET** /cam/model/properties/ | Returns list of all properties used across all models
[**getModelCollection_1**](CamApi.md#getModelCollection_1) | **GET** /cam/model/property_values/ | Returns list property-values for all models
[**getModelCollection_2**](CamApi.md#getModelCollection_2) | **GET** /cam/model/query/ | Returns list of models matching query
[**getModelContibutors**](CamApi.md#getModelContibutors) | **GET** /cam/instances/ | Returns list of all instances
[**getModelContibutors_0**](CamApi.md#getModelContibutors_0) | **GET** /cam/model/contributors/ | Returns list of all contributors across all models
[**getPhysicalInteraction**](CamApi.md#getPhysicalInteraction) | **GET** /cam/physical_interaction/ | Returns list of models


<a name="getActivityCollection"></a>
# **getActivityCollection**
> getActivityCollection(opts)

Returns list of models

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var opts = { 
  'contributor': "contributor_example", // String | string to search for in contributor of model
  'title': "title_example" // String | string to search for in title of model
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getActivityCollection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contributor** | **String**| string to search for in contributor of model | [optional] 
 **title** | **String**| string to search for in title of model | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInstance"></a>
# **getInstance**
> [Association] getInstance(id, opts)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var id = "id_example"; // String | 

var opts = { 
  'contributor': "contributor_example", // String | string to search for in contributor of model
  'title': "title_example" // String | string to search for in title of model
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstance(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **contributor** | **String**| string to search for in contributor of model | [optional] 
 **title** | **String**| string to search for in title of model | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModel"></a>
# **getModel**
> getModel(id)

Returns a complete model

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getModel(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelCollection"></a>
# **getModelCollection**
> getModelCollection()

Returns list of ALL models

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getModelCollection(callback);
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

<a name="getModelCollection_0"></a>
# **getModelCollection_0**
> getModelCollection_0(opts)

Returns list of all properties used across all models

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var opts = { 
  'contributor': "contributor_example", // String | string to search for in contributor of model
  'title': "title_example" // String | string to search for in title of model
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getModelCollection_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contributor** | **String**| string to search for in contributor of model | [optional] 
 **title** | **String**| string to search for in title of model | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelCollection_1"></a>
# **getModelCollection_1**
> getModelCollection_1(opts)

Returns list property-values for all models

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var opts = { 
  'contributor': "contributor_example", // String | string to search for in contributor of model
  'title': "title_example" // String | string to search for in title of model
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getModelCollection_1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contributor** | **String**| string to search for in contributor of model | [optional] 
 **title** | **String**| string to search for in title of model | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelCollection_2"></a>
# **getModelCollection_2**
> getModelCollection_2(opts)

Returns list of models matching query

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var opts = { 
  'contributor': "contributor_example", // String | string to search for in contributor of model
  'title': "title_example" // String | string to search for in title of model
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getModelCollection_2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contributor** | **String**| string to search for in contributor of model | [optional] 
 **title** | **String**| string to search for in title of model | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModelContibutors"></a>
# **getModelContibutors**
> getModelContibutors()

Returns list of all instances

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getModelContibutors(callback);
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

<a name="getModelContibutors_0"></a>
# **getModelContibutors_0**
> getModelContibutors_0()

Returns list of all contributors across all models

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getModelContibutors_0(callback);
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

<a name="getPhysicalInteraction"></a>
# **getPhysicalInteraction**
> getPhysicalInteraction(opts)

Returns list of models

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.CamApi();

var opts = { 
  'contributor': "contributor_example", // String | string to search for in contributor of model
  'title': "title_example" // String | string to search for in title of model
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPhysicalInteraction(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contributor** | **String**| string to search for in contributor of model | [optional] 
 **title** | **String**| string to search for in title of model | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

