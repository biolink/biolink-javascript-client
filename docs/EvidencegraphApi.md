# BioLinkApi.EvidencegraphApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssociationObject**](EvidencegraphApi.md#getAssociationObject) | **GET** /evidence/graph/{id} | Returns evidence graph object for a given association
[**getAssociationObject_0**](EvidencegraphApi.md#getAssociationObject_0) | **GET** /evidence/graph/{id}/image | Returns evidence graph as a png


<a name="getAssociationObject"></a>
# **getAssociationObject**
> [Graph] getAssociationObject(id)

Returns evidence graph object for a given association

Note that every association is assumed to have a unique ID

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.EvidencegraphApi();

var id = "id_example"; // String | association id, e.g. cfef92b7-bfa3-44c2-a537-579078d2de37


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssociationObject(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| association id, e.g. cfef92b7-bfa3-44c2-a537-579078d2de37 | 

### Return type

[**[Graph]**](Graph.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssociationObject_0"></a>
# **getAssociationObject_0**
> getAssociationObject_0(id)

Returns evidence graph as a png

TODO - requires matplotlib which is hard to install

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.EvidencegraphApi();

var id = "id_example"; // String | association id, e.g. cfef92b7-bfa3-44c2-a537-579078d2de37


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAssociationObject_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| association id, e.g. cfef92b7-bfa3-44c2-a537-579078d2de37 | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

