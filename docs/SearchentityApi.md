# BioLinkApi.SearchentityApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthocomplete**](SearchentityApi.md#getAuthocomplete) | **GET** /search/entity/autocomplete/{term} | Returns list of matches
[**getAuthocomplete_0**](SearchentityApi.md#getAuthocomplete_0) | **GET** /search/entity/query/ | Returns list of matches
[**getSearchEntities**](SearchentityApi.md#getSearchEntities) | **GET** /search/entity/{term} | Returns list of matches


<a name="getAuthocomplete"></a>
# **getAuthocomplete**
> [Association] getAuthocomplete(term, opts)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.SearchentityApi();

var term = "term_example"; // String | 

var opts = { 
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'attribute': ["attribute_example"], // [String] | positive attributes, e.g. ontology terms, to include in query
  'weightedAttribute': ["weightedAttribute_example"], // [String] | weighted attributes, specified as a range from 0 to 1 plus an ontology term, e.g. 0.3*HP:0000001
  'negativeAttribute': ["negativeAttribute_example"], // [String] | negative attributes, e.g. ontology terms, to exclude in query
  'noise': true // Boolean | If set, uses noise-tolerant querying, e.g owlsim, boqa
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthocomplete(term, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**|  | 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **attribute** | [**[String]**](String.md)| positive attributes, e.g. ontology terms, to include in query | [optional] 
 **weightedAttribute** | [**[String]**](String.md)| weighted attributes, specified as a range from 0 to 1 plus an ontology term, e.g. 0.3*HP:0000001 | [optional] 
 **negativeAttribute** | [**[String]**](String.md)| negative attributes, e.g. ontology terms, to exclude in query | [optional] 
 **noise** | **Boolean**| If set, uses noise-tolerant querying, e.g owlsim, boqa | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAuthocomplete_0"></a>
# **getAuthocomplete_0**
> [Association] getAuthocomplete_0(opts)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.SearchentityApi();

var opts = { 
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'attribute': ["attribute_example"], // [String] | positive attributes, e.g. ontology terms, to include in query
  'weightedAttribute': ["weightedAttribute_example"], // [String] | weighted attributes, specified as a range from 0 to 1 plus an ontology term, e.g. 0.3*HP:0000001
  'negativeAttribute': ["negativeAttribute_example"], // [String] | negative attributes, e.g. ontology terms, to exclude in query
  'noise': true // Boolean | If set, uses noise-tolerant querying, e.g owlsim, boqa
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAuthocomplete_0(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **attribute** | [**[String]**](String.md)| positive attributes, e.g. ontology terms, to include in query | [optional] 
 **weightedAttribute** | [**[String]**](String.md)| weighted attributes, specified as a range from 0 to 1 plus an ontology term, e.g. 0.3*HP:0000001 | [optional] 
 **negativeAttribute** | [**[String]**](String.md)| negative attributes, e.g. ontology terms, to exclude in query | [optional] 
 **noise** | **Boolean**| If set, uses noise-tolerant querying, e.g owlsim, boqa | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSearchEntities"></a>
# **getSearchEntities**
> [Association] getSearchEntities(term, opts)

Returns list of matches

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.SearchentityApi();

var term = "term_example"; // String | 

var opts = { 
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'attribute': ["attribute_example"], // [String] | positive attributes, e.g. ontology terms, to include in query
  'weightedAttribute': ["weightedAttribute_example"], // [String] | weighted attributes, specified as a range from 0 to 1 plus an ontology term, e.g. 0.3*HP:0000001
  'negativeAttribute': ["negativeAttribute_example"], // [String] | negative attributes, e.g. ontology terms, to exclude in query
  'noise': true // Boolean | If set, uses noise-tolerant querying, e.g owlsim, boqa
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSearchEntities(term, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**|  | 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **attribute** | [**[String]**](String.md)| positive attributes, e.g. ontology terms, to include in query | [optional] 
 **weightedAttribute** | [**[String]**](String.md)| weighted attributes, specified as a range from 0 to 1 plus an ontology term, e.g. 0.3*HP:0000001 | [optional] 
 **negativeAttribute** | [**[String]**](String.md)| negative attributes, e.g. ontology terms, to exclude in query | [optional] 
 **noise** | **Boolean**| If set, uses noise-tolerant querying, e.g owlsim, boqa | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

