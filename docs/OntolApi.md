# BioLinkApi.OntolApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInformationContentResource**](OntolApi.md#getInformationContentResource) | **GET** /ontol/information_content/{subject_category}/{object_category}/{subject_taxon} | Calculates information content


<a name="getInformationContentResource"></a>
# **getInformationContentResource**
> getInformationContentResource(objectCategory, subjectTaxon, subjectCategory, opts)

Calculates information content

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.OntolApi();

var objectCategory = "objectCategory_example"; // String | 

var subjectTaxon = "subjectTaxon_example"; // String | 

var subjectCategory = "subjectCategory_example"; // String | 

var opts = { 
  'evidence': "evidence_example" // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getInformationContentResource(objectCategory, subjectTaxon, subjectCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectCategory** | **String**|  | 
 **subjectTaxon** | **String**|  | 
 **subjectCategory** | **String**|  | 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

