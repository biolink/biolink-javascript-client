# BioLinkApi.RelationusageApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRelationUsageBetweenResource**](RelationusageApi.md#getRelationUsageBetweenResource) | **GET** /relation/usage/between/{subject_category}/{object_category} | All relations used plus count of associations
[**getRelationUsagePivotLabelResource**](RelationusageApi.md#getRelationUsagePivotLabelResource) | **GET** /relation/usage/pivot/label | Relation usage count for all subj x obj category combinations, showing label
[**getRelationUsagePivotResource**](RelationusageApi.md#getRelationUsagePivotResource) | **GET** /relation/usage/pivot/ | Relation usage count for all subj x obj category combinations
[**getRelationUsageResource**](RelationusageApi.md#getRelationUsageResource) | **GET** /relation/usage/ | All relations used plus count of associations


<a name="getRelationUsageBetweenResource"></a>
# **getRelationUsageBetweenResource**
> [AssociationResults] getRelationUsageBetweenResource(objectCategory, subjectCategory, opts)

All relations used plus count of associations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.RelationusageApi();

var objectCategory = "objectCategory_example"; // String | 

var subjectCategory = "subjectCategory_example"; // String | 

var opts = { 
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'evidence': "evidence_example" // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelationUsageBetweenResource(objectCategory, subjectCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectCategory** | **String**|  | 
 **subjectCategory** | **String**|  | 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelationUsagePivotLabelResource"></a>
# **getRelationUsagePivotLabelResource**
> [AssociationResults] getRelationUsagePivotLabelResource(opts)

Relation usage count for all subj x obj category combinations, showing label

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.RelationusageApi();

var opts = { 
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'evidence': "evidence_example" // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelationUsagePivotLabelResource(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelationUsagePivotResource"></a>
# **getRelationUsagePivotResource**
> [AssociationResults] getRelationUsagePivotResource(opts)

Relation usage count for all subj x obj category combinations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.RelationusageApi();

var opts = { 
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'evidence': "evidence_example" // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelationUsagePivotResource(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelationUsageResource"></a>
# **getRelationUsageResource**
> [AssociationResults] getRelationUsageResource(opts)

All relations used plus count of associations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.RelationusageApi();

var opts = { 
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'evidence': "evidence_example" // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelationUsageResource(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

