# BioLinkApi.BioentitysetApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEntitySetAssociations**](BioentitysetApi.md#getEntitySetAssociations) | **GET** /bioentityset/associations/ | Returns compact associations for a given input set
[**getEntitySetGraphResource**](BioentitysetApi.md#getEntitySetGraphResource) | **GET** /bioentityset/graph/ | TODO Graph object spanning all entities
[**getEntitySetHomologsDeprecated**](BioentitysetApi.md#getEntitySetHomologsDeprecated) | **GET** /bioentityset/DEPRECATEDhomologs/ | Returns homology associations for a given input set of genes
[**getEntitySetOverRepresentationAnalysis**](BioentitysetApi.md#getEntitySetOverRepresentationAnalysis) | **GET** /bioentityset/ora/ | TODO Over-representation analysis
[**getEntitySetOverRepresentationAnalysis_0**](BioentitysetApi.md#getEntitySetOverRepresentationAnalysis_0) | **GET** /bioentityset/ora/{object_category}/ | TODO Over-representation analysis
[**getEntitySetSummary**](BioentitysetApi.md#getEntitySetSummary) | **GET** /bioentityset/descriptor/counts/ | Summary statistics for objects associated


<a name="getEntitySetAssociations"></a>
# **getEntitySetAssociations**
> [AssociationResults] getEntitySetAssociations(opts)

Returns compact associations for a given input set

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentitysetApi();

var opts = { 
  'objectSlim': "objectSlim_example", // String | Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
  'objectCategory': "objectCategory_example", // String | E.g. phenotype, function
  'subject': ["subject_example"], // [String] | Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  'background': ["background_example"] // [String] | Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntitySetAssociations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectSlim** | **String**| Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED | [optional] 
 **objectCategory** | **String**| E.g. phenotype, function | [optional] 
 **subject** | [**[String]**](String.md)| Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387 | [optional] 
 **background** | [**[String]**](String.md)| Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntitySetGraphResource"></a>
# **getEntitySetGraphResource**
> getEntitySetGraphResource(opts)

TODO Graph object spanning all entities

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentitysetApi();

var opts = { 
  'objectSlim': "objectSlim_example", // String | Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
  'objectCategory': "objectCategory_example", // String | E.g. phenotype, function
  'subject': ["subject_example"], // [String] | Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  'background': ["background_example"] // [String] | Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEntitySetGraphResource(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectSlim** | **String**| Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED | [optional] 
 **objectCategory** | **String**| E.g. phenotype, function | [optional] 
 **subject** | [**[String]**](String.md)| Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387 | [optional] 
 **background** | [**[String]**](String.md)| Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntitySetHomologsDeprecated"></a>
# **getEntitySetHomologsDeprecated**
> [AssociationResults] getEntitySetHomologsDeprecated(opts)

Returns homology associations for a given input set of genes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentitysetApi();

var opts = { 
  'objectSlim': "objectSlim_example", // String | Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
  'objectCategory': "objectCategory_example", // String | E.g. phenotype, function
  'subject': ["subject_example"], // [String] | Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  'background': ["background_example"] // [String] | Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntitySetHomologsDeprecated(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectSlim** | **String**| Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED | [optional] 
 **objectCategory** | **String**| E.g. phenotype, function | [optional] 
 **subject** | [**[String]**](String.md)| Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387 | [optional] 
 **background** | [**[String]**](String.md)| Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntitySetOverRepresentationAnalysis"></a>
# **getEntitySetOverRepresentationAnalysis**
> getEntitySetOverRepresentationAnalysis(objectCategory, objectCategory2, opts)

TODO Over-representation analysis

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentitysetApi();

var objectCategory = "objectCategory_example"; // String | CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease

var objectCategory2 = "objectCategory_example"; // String | E.g. phenotype, function

var opts = { 
  'objectSlim': "objectSlim_example", // String | Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
  'subject': ["subject_example"], // [String] | Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  'background': ["background_example"] // [String] | Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEntitySetOverRepresentationAnalysis(objectCategory, objectCategory2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectCategory** | **String**| CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease | 
 **objectCategory2** | **String**| E.g. phenotype, function | 
 **objectSlim** | **String**| Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED | [optional] 
 **subject** | [**[String]**](String.md)| Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387 | [optional] 
 **background** | [**[String]**](String.md)| Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntitySetOverRepresentationAnalysis_0"></a>
# **getEntitySetOverRepresentationAnalysis_0**
> getEntitySetOverRepresentationAnalysis_0(objectCategory, objectCategory2, opts)

TODO Over-representation analysis

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentitysetApi();

var objectCategory = "objectCategory_example"; // String | CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease

var objectCategory2 = "objectCategory_example"; // String | E.g. phenotype, function

var opts = { 
  'objectSlim': "objectSlim_example", // String | Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
  'subject': ["subject_example"], // [String] | Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  'background': ["background_example"] // [String] | Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEntitySetOverRepresentationAnalysis_0(objectCategory, objectCategory2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectCategory** | **String**| CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease | 
 **objectCategory2** | **String**| E.g. phenotype, function | 
 **objectSlim** | **String**| Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED | [optional] 
 **subject** | [**[String]**](String.md)| Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387 | [optional] 
 **background** | [**[String]**](String.md)| Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEntitySetSummary"></a>
# **getEntitySetSummary**
> getEntitySetSummary(opts)

Summary statistics for objects associated

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentitysetApi();

var opts = { 
  'objectSlim': "objectSlim_example", // String | Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED
  'objectCategory': "objectCategory_example", // String | E.g. phenotype, function
  'subject': ["subject_example"], // [String] | Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
  'background': ["background_example"] // [String] | Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEntitySetSummary(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectSlim** | **String**| Slim or subset to which the descriptors are to be mapped, NOT IMPLEMENTED | [optional] 
 **objectCategory** | **String**| E.g. phenotype, function | [optional] 
 **subject** | [**[String]**](String.md)| Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387 | [optional] 
 **background** | [**[String]**](String.md)| Entity ids in background set, e.g. NCBIGene:84570, NCBIGene:3630; used in over-representation tests | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

