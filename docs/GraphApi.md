# BioLinkApi.GraphApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEdgeResource**](GraphApi.md#getEdgeResource) | **GET** /graph/edges/from/{id} | Returns edges emanating from a node
[**getNodeResource**](GraphApi.md#getNodeResource) | **GET** /graph/node/{id} | Returns a graph node


<a name="getEdgeResource"></a>
# **getEdgeResource**
> [Graph] getEdgeResource(id)

Returns edges emanating from a node

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.GraphApi();

var id = "id_example"; // String | CURIE e.g. HP:0000465


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEdgeResource(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE e.g. HP:0000465 | 

### Return type

[**[Graph]**](Graph.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodeResource"></a>
# **getNodeResource**
> [Graph] getNodeResource(id)

Returns a graph node

A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient, a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.GraphApi();

var id = "id_example"; // String | CURIE e.g. HP:0000465


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNodeResource(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE e.g. HP:0000465 | 

### Return type

[**[Graph]**](Graph.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

