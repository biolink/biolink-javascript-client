# BioLinkApi.AssociationApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssociationObject**](AssociationApi.md#getAssociationObject) | **GET** /association/{id} | Returns the association with a given identifier
[**getAssociationSearch**](AssociationApi.md#getAssociationSearch) | **GET** /association/find/ | Returns list of matching associations
[**getAssociationSearch_0**](AssociationApi.md#getAssociationSearch_0) | **GET** /association/find/{subject_category}/ | Returns list of matching associations
[**getAssociationSearch_1**](AssociationApi.md#getAssociationSearch_1) | **GET** /association/find/{subject_category}/{object_category}/ | Returns list of matching associations
[**getAssociationsFrom**](AssociationApi.md#getAssociationsFrom) | **GET** /association/between/{subject}/{object} | Returns associations connecting two entities
[**getAssociationsFrom_0**](AssociationApi.md#getAssociationsFrom_0) | **GET** /association/from/{subject} | Returns list of matching associations
[**getAssociationsTo**](AssociationApi.md#getAssociationsTo) | **GET** /association/to/{object} | Returns list of matching associations


<a name="getAssociationObject"></a>
# **getAssociationObject**
> [Association] getAssociationObject(id, opts)

Returns the association with a given identifier

An association connects, at a minimum, two things, designated subject and object, via some relationship. Associations also include evidence, provenance etc.

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.AssociationApi();

var id = "id_example"; // String | 

var opts = { 
  'evidence': "evidence_example", // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
  'mapIdentifiers': "mapIdentifiers_example", // String | Prefix to map all IDs to. E.g. NCBIGene
  '_object': "_object_example", // String | OBJECT id, e.g. HP:0011927. Includes inferred by default
  'graphize': true, // Boolean | If set, includes graph object in response
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'page': 1, // Integer | Page number
  'subject': "subject_example", // String | SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default
  'flExcludesEvidence': true, // Boolean | If set, excludes evidence objects in response
  'rows': 10 // Integer | number of rows
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssociationObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 
 **mapIdentifiers** | **String**| Prefix to map all IDs to. E.g. NCBIGene | [optional] 
 **_object** | **String**| OBJECT id, e.g. HP:0011927. Includes inferred by default | [optional] 
 **graphize** | **Boolean**| If set, includes graph object in response | [optional] 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **page** | **Integer**| Page number | [optional] [default to 1]
 **subject** | **String**| SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default | [optional] 
 **flExcludesEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **rows** | **Integer**| number of rows | [optional] [default to 10]

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssociationSearch"></a>
# **getAssociationSearch**
> [AssociationResults] getAssociationSearch(opts)

Returns list of matching associations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.AssociationApi();

var opts = { 
  'evidence': "evidence_example", // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
  'mapIdentifiers': "mapIdentifiers_example", // String | Prefix to map all IDs to. E.g. NCBIGene
  '_object': "_object_example", // String | OBJECT id, e.g. HP:0011927. Includes inferred by default
  'graphize': true, // Boolean | If set, includes graph object in response
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'page': 1, // Integer | Page number
  'subject': "subject_example", // String | SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default
  'flExcludesEvidence': true, // Boolean | If set, excludes evidence objects in response
  'rows': 10 // Integer | number of rows
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssociationSearch(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 
 **mapIdentifiers** | **String**| Prefix to map all IDs to. E.g. NCBIGene | [optional] 
 **_object** | **String**| OBJECT id, e.g. HP:0011927. Includes inferred by default | [optional] 
 **graphize** | **Boolean**| If set, includes graph object in response | [optional] 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **page** | **Integer**| Page number | [optional] [default to 1]
 **subject** | **String**| SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default | [optional] 
 **flExcludesEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **rows** | **Integer**| number of rows | [optional] [default to 10]

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssociationSearch_0"></a>
# **getAssociationSearch_0**
> [AssociationResults] getAssociationSearch_0(objectCategory, subjectCategory, opts)

Returns list of matching associations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.AssociationApi();

var objectCategory = "objectCategory_example"; // String | CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease

var subjectCategory = "subjectCategory_example"; // String | CATEGORY of entity at link SUBJECT (source), e.g. gene, disease, genotype

var opts = { 
  'evidence': "evidence_example", // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
  'mapIdentifiers': "mapIdentifiers_example", // String | Prefix to map all IDs to. E.g. NCBIGene
  '_object': "_object_example", // String | OBJECT id, e.g. HP:0011927. Includes inferred by default
  'graphize': true, // Boolean | If set, includes graph object in response
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'page': 1, // Integer | Page number
  'subject': "subject_example", // String | SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default
  'flExcludesEvidence': true, // Boolean | If set, excludes evidence objects in response
  'rows': 10 // Integer | number of rows
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssociationSearch_0(objectCategory, subjectCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectCategory** | **String**| CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease | 
 **subjectCategory** | **String**| CATEGORY of entity at link SUBJECT (source), e.g. gene, disease, genotype | 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 
 **mapIdentifiers** | **String**| Prefix to map all IDs to. E.g. NCBIGene | [optional] 
 **_object** | **String**| OBJECT id, e.g. HP:0011927. Includes inferred by default | [optional] 
 **graphize** | **Boolean**| If set, includes graph object in response | [optional] 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **page** | **Integer**| Page number | [optional] [default to 1]
 **subject** | **String**| SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default | [optional] 
 **flExcludesEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **rows** | **Integer**| number of rows | [optional] [default to 10]

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssociationSearch_1"></a>
# **getAssociationSearch_1**
> [AssociationResults] getAssociationSearch_1(objectCategory, subjectCategory, opts)

Returns list of matching associations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.AssociationApi();

var objectCategory = "objectCategory_example"; // String | CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease

var subjectCategory = "subjectCategory_example"; // String | CATEGORY of entity at link SUBJECT (source), e.g. gene, disease, genotype

var opts = { 
  'evidence': "evidence_example", // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
  'mapIdentifiers': "mapIdentifiers_example", // String | Prefix to map all IDs to. E.g. NCBIGene
  '_object': "_object_example", // String | OBJECT id, e.g. HP:0011927. Includes inferred by default
  'graphize': true, // Boolean | If set, includes graph object in response
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'page': 1, // Integer | Page number
  'subject': "subject_example", // String | SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default
  'flExcludesEvidence': true, // Boolean | If set, excludes evidence objects in response
  'rows': 10 // Integer | number of rows
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssociationSearch_1(objectCategory, subjectCategory, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectCategory** | **String**| CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease | 
 **subjectCategory** | **String**| CATEGORY of entity at link SUBJECT (source), e.g. gene, disease, genotype | 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 
 **mapIdentifiers** | **String**| Prefix to map all IDs to. E.g. NCBIGene | [optional] 
 **_object** | **String**| OBJECT id, e.g. HP:0011927. Includes inferred by default | [optional] 
 **graphize** | **Boolean**| If set, includes graph object in response | [optional] 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **page** | **Integer**| Page number | [optional] [default to 1]
 **subject** | **String**| SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default | [optional] 
 **flExcludesEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **rows** | **Integer**| number of rows | [optional] [default to 10]

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssociationsFrom"></a>
# **getAssociationsFrom**
> [AssociationResults] getAssociationsFrom(subject, _object, opts)

Returns associations connecting two entities

Given two entities (e.g. a particular gene and a particular disease), if these two entities are connected (directly or indirectly), then return the association objects describing the connection.

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.AssociationApi();

var subject = "subject_example"; // String | E.g. e.g. MGI:1342287

var _object = "_object_example"; // String | E.g. e.g. MP:0013765, can also be a biological entity such as a gene

var opts = { 
  'objectCategory': "objectCategory_example", // String | e.g. disease, phenotype, gene
  'evidence': "evidence_example", // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
  'mapIdentifiers': "mapIdentifiers_example", // String | Prefix to map all IDs to. E.g. NCBIGene
  'page': 1, // Integer | Page number
  'graphize': true, // Boolean | If set, includes graph object in response
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'slim': ["slim_example"], // [String] | Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  'useCompactAssociations': true, // Boolean | If true, returns results in compact associations format
  'subjectCategory': "subjectCategory_example", // String | e.g. gene, genotype, disease
  'rows': 10, // Integer | number of rows
  'flExcludesEvidence': true // Boolean | If set, excludes evidence objects in response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssociationsFrom(subject, _object, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subject** | **String**| E.g. e.g. MGI:1342287 | 
 **_object** | **String**| E.g. e.g. MP:0013765, can also be a biological entity such as a gene | 
 **objectCategory** | **String**| e.g. disease, phenotype, gene | [optional] 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 
 **mapIdentifiers** | **String**| Prefix to map all IDs to. E.g. NCBIGene | [optional] 
 **page** | **Integer**| Page number | [optional] [default to 1]
 **graphize** | **Boolean**| If set, includes graph object in response | [optional] 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **slim** | [**[String]**](String.md)| Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 
 **subjectCategory** | **String**| e.g. gene, genotype, disease | [optional] 
 **rows** | **Integer**| number of rows | [optional] [default to 10]
 **flExcludesEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssociationsFrom_0"></a>
# **getAssociationsFrom_0**
> [AssociationResults] getAssociationsFrom_0(subject, opts)

Returns list of matching associations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.AssociationApi();

var subject = "subject_example"; // String | E.g. e.g. NCBIGene:84570

var opts = { 
  'objectCategory': "objectCategory_example", // String | e.g. disease, phenotype, gene
  'evidence': "evidence_example", // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
  'mapIdentifiers': "mapIdentifiers_example", // String | Prefix to map all IDs to. E.g. NCBIGene
  'page': 1, // Integer | Page number
  'graphize': true, // Boolean | If set, includes graph object in response
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'slim': ["slim_example"], // [String] | Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  'useCompactAssociations': true, // Boolean | If true, returns results in compact associations format
  'subjectCategory': "subjectCategory_example", // String | e.g. gene, genotype, disease
  'rows': 10, // Integer | number of rows
  'flExcludesEvidence': true // Boolean | If set, excludes evidence objects in response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssociationsFrom_0(subject, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subject** | **String**| E.g. e.g. NCBIGene:84570 | 
 **objectCategory** | **String**| e.g. disease, phenotype, gene | [optional] 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 
 **mapIdentifiers** | **String**| Prefix to map all IDs to. E.g. NCBIGene | [optional] 
 **page** | **Integer**| Page number | [optional] [default to 1]
 **graphize** | **Boolean**| If set, includes graph object in response | [optional] 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **slim** | [**[String]**](String.md)| Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 
 **subjectCategory** | **String**| e.g. gene, genotype, disease | [optional] 
 **rows** | **Integer**| number of rows | [optional] [default to 10]
 **flExcludesEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAssociationsTo"></a>
# **getAssociationsTo**
> [AssociationResults] getAssociationsTo(_object, opts)

Returns list of matching associations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.AssociationApi();

var _object = "_object_example"; // String | E.g. e.g. MP:0013765, can also be a biological entity such as a gene

var opts = { 
  'objectCategory': "objectCategory_example", // String | e.g. disease, phenotype, gene
  'evidence': "evidence_example", // String | Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
  'mapIdentifiers': "mapIdentifiers_example", // String | Prefix to map all IDs to. E.g. NCBIGene
  'page': 1, // Integer | Page number
  'graphize': true, // Boolean | If set, includes graph object in response
  'subjectTaxon': "subjectTaxon_example", // String | SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
  'slim': ["slim_example"], // [String] | Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
  'useCompactAssociations': true, // Boolean | If true, returns results in compact associations format
  'subjectCategory': "subjectCategory_example", // String | e.g. gene, genotype, disease
  'rows': 10, // Integer | number of rows
  'flExcludesEvidence': true // Boolean | If set, excludes evidence objects in response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAssociationsTo(_object, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_object** | **String**| E.g. e.g. MP:0013765, can also be a biological entity such as a gene | 
 **objectCategory** | **String**| e.g. disease, phenotype, gene | [optional] 
 **evidence** | **String**| Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                      | [optional] 
 **mapIdentifiers** | **String**| Prefix to map all IDs to. E.g. NCBIGene | [optional] 
 **page** | **Integer**| Page number | [optional] [default to 1]
 **graphize** | **Boolean**| If set, includes graph object in response | [optional] 
 **subjectTaxon** | **String**| SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default | [optional] 
 **slim** | [**[String]**](String.md)| Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 
 **subjectCategory** | **String**| e.g. gene, genotype, disease | [optional] 
 **rows** | **Integer**| number of rows | [optional] [default to 10]
 **flExcludesEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

