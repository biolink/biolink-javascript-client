# BioLinkApi.BioentityApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlleleObject**](BioentityApi.md#getAlleleObject) | **GET** /bioentity/allele/{id} | TODO Returns allele object
[**getAnatomyGeneAssociations**](BioentityApi.md#getAnatomyGeneAssociations) | **GET** /bioentity/anatomy/{id}/genes/ | TODO Returns associations between anatomical entity and genes
[**getAnatomyObject**](BioentityApi.md#getAnatomyObject) | **GET** /bioentity/anatomy/{id} | TODO Returns anatomical entity
[**getAnatomyPhenotypeAssociations**](BioentityApi.md#getAnatomyPhenotypeAssociations) | **GET** /bioentity/anatomy/{id}/phenotypes/ | TODO Returns associations between anatomical entity and phenotypes
[**getDiseaseAnatomyAssociations**](BioentityApi.md#getDiseaseAnatomyAssociations) | **GET** /bioentity/disease/{id}/anatomy/ | TODO Returns anatomical locations associated with a disease
[**getDiseaseFunctionAssociations**](BioentityApi.md#getDiseaseFunctionAssociations) | **GET** /bioentity/disease/{id}/function/ | TODO Returns biological functions associated with a disease
[**getDiseaseGeneAssociations**](BioentityApi.md#getDiseaseGeneAssociations) | **GET** /bioentity/disease/{id}/genes/ | Returns genes associated with a disease
[**getDiseaseModelAssociations**](BioentityApi.md#getDiseaseModelAssociations) | **GET** /bioentity/disease/{id}/models/ | Returns associations to models of the disease
[**getDiseaseModelTaxonAssociations**](BioentityApi.md#getDiseaseModelTaxonAssociations) | **GET** /bioentity/disease/{id}/models/{taxon} | Same as &#x60;/disease/&lt;id&gt;/models&#x60; but constrain models by taxon
[**getDiseaseObject**](BioentityApi.md#getDiseaseObject) | **GET** /bioentity/disease/{id} | TODO Returns disease object
[**getDiseasePhenotypeAssociations**](BioentityApi.md#getDiseasePhenotypeAssociations) | **GET** /bioentity/disease/{id}/phenotypes/ | Returns phenotypes associated with disease
[**getDiseaseSubstanceAssociations**](BioentityApi.md#getDiseaseSubstanceAssociations) | **GET** /bioentity/disease/{id}/substance/ | Returns substances associated with a disease
[**getDiseaseSubstanceAssociations_0**](BioentityApi.md#getDiseaseSubstanceAssociations_0) | **GET** /bioentity/substance/{id}/treats/ | Returns substances associated with a disease
[**getEnvironmentObject**](BioentityApi.md#getEnvironmentObject) | **GET** /bioentity/environment/{id} | TODO Returns environment entity
[**getEnvironmentPhenotypeAssociations**](BioentityApi.md#getEnvironmentPhenotypeAssociations) | **GET** /bioentity/environment/{id}/phenotypes/ | TODO Returns list of associations
[**getGeneExpressionAssociations**](BioentityApi.md#getGeneExpressionAssociations) | **GET** /bioentity/gene/{id}/expressed/ | TODO Returns expression events for a gene
[**getGeneFunctionAssociations**](BioentityApi.md#getGeneFunctionAssociations) | **GET** /bioentity/gene/{id}/function/ | Returns function associations for a gene
[**getGeneHomologAssociations**](BioentityApi.md#getGeneHomologAssociations) | **GET** /bioentity/gene/{id}/homologs/ | Returns homologs for a gene
[**getGeneInteractions**](BioentityApi.md#getGeneInteractions) | **GET** /bioentity/gene/{id}/interactions/ | Returns interactions for a gene
[**getGeneObject**](BioentityApi.md#getGeneObject) | **GET** /bioentity/gene/{id} | Returns gene object
[**getGenePhenotypeAssociations**](BioentityApi.md#getGenePhenotypeAssociations) | **GET** /bioentity/gene/{id}/phenotypes/ | Returns phenotypes associated with gene
[**getGenePublicationList**](BioentityApi.md#getGenePublicationList) | **GET** /bioentity/gene/{id}/pubs/ | TODO Returns expression events for a gene
[**getGeneproductObject**](BioentityApi.md#getGeneproductObject) | **GET** /bioentity/geneproduct/{id} | TODO Returns gene product object
[**getGenericAssociations**](BioentityApi.md#getGenericAssociations) | **GET** /bioentity/{id}/associations/ | Returns associations for an entity regardless of the type
[**getGenericObject**](BioentityApi.md#getGenericObject) | **GET** /bioentity/{id} | TODO Returns object of any type
[**getGenotypeDiseaseAssociations**](BioentityApi.md#getGenotypeDiseaseAssociations) | **GET** /bioentity/genotype/{id}/diseases/ | Returns diseases associated with a genotype
[**getGenotypeGeneAssociations**](BioentityApi.md#getGenotypeGeneAssociations) | **GET** /bioentity/genotype/{id}/genes/ | Returns genes associated with a genotype
[**getGenotypeGenotypeAssociations**](BioentityApi.md#getGenotypeGenotypeAssociations) | **GET** /bioentity/genotype/{id}/genotypes/ | Returns genotypes-genotype associations
[**getGenotypeObject**](BioentityApi.md#getGenotypeObject) | **GET** /bioentity/genotype/{id} | Returns genotype object
[**getGenotypePhenotypeAssociations**](BioentityApi.md#getGenotypePhenotypeAssociations) | **GET** /bioentity/genotype/{id}/phenotypes/ | Returns phenotypes associated with a genotype
[**getGotermGeneAssociations**](BioentityApi.md#getGotermGeneAssociations) | **GET** /bioentity/goterm/{id}/genes/ | TODO Returns associated phenotypes
[**getGotermObject**](BioentityApi.md#getGotermObject) | **GET** /bioentity/goterm/{id} | TODO Returns GO class object
[**getGotermPhenotypeAssociations**](BioentityApi.md#getGotermPhenotypeAssociations) | **GET** /bioentity/goterm/{id}/phenotype/ | TODO Returns associated phenotypes
[**getLiteratureDiseaseAssociations**](BioentityApi.md#getLiteratureDiseaseAssociations) | **GET** /bioentity/literature/{id}/diseases/ | Returns associations between a lit entity and a disease
[**getLiteratureGeneAssociations**](BioentityApi.md#getLiteratureGeneAssociations) | **GET** /bioentity/literature/{id}/genes/ | Returns associations between a lit entity and a gene
[**getLiteratureGenotypeAssociations**](BioentityApi.md#getLiteratureGenotypeAssociations) | **GET** /bioentity/literature/{id}/genotypes/ | Returns associations between a lit entity and a genotype
[**getParentObject**](BioentityApi.md#getParentObject) | **GET** /bioentity/individual/{id} | TODO Returns individual
[**getParentObject_0**](BioentityApi.md#getParentObject_0) | **GET** /bioentity/investigation/{id} | TODO Returns investigation object
[**getPathwayGeneAssociations**](BioentityApi.md#getPathwayGeneAssociations) | **GET** /bioentity/pathway/{id}/genes/ | TODO Returns list of genes associated with a pathway
[**getPathwayObject**](BioentityApi.md#getPathwayObject) | **GET** /bioentity/pathway/{id} | TODO Returns pathway object
[**getPathwayParticipantAssociations**](BioentityApi.md#getPathwayParticipantAssociations) | **GET** /bioentity/pathway/{id}/participants/ | TODO Returns associations to participants (molecules, etc) for a pathway
[**getPhenotypeAnatomyAssociations**](BioentityApi.md#getPhenotypeAnatomyAssociations) | **GET** /bioentity/phenotype/{id}/anatomy/ | Returns anatomical entities associated with a phenotype
[**getPhenotypeFunctionAssociations**](BioentityApi.md#getPhenotypeFunctionAssociations) | **GET** /bioentity/phenotype/{id}/function/ | TODO Returns biological functions associated with a Phenotype
[**getPhenotypeGeneAssociations**](BioentityApi.md#getPhenotypeGeneAssociations) | **GET** /bioentity/phenotype/{id}/gene/{taxid}/ids | Returns gene ids for all genes for a particular phenotype in a taxon
[**getPhenotypeGeneAssociations_0**](BioentityApi.md#getPhenotypeGeneAssociations_0) | **GET** /bioentity/phenotype/{id}/genes/ | TODO Returns associated phenotypes
[**getPhenotypeObject**](BioentityApi.md#getPhenotypeObject) | **GET** /bioentity/phenotype/{id} | TODO Returns phenotype class object
[**getPhenotypePhenotypeAssociations**](BioentityApi.md#getPhenotypePhenotypeAssociations) | **GET** /bioentity/phenotype/{id}/phenotype/ | TODO Returns associated phenotypes
[**getPubObject**](BioentityApi.md#getPubObject) | **GET** /bioentity/literature/{id} | TODO Returns publication object
[**getSequenceFeatureObject**](BioentityApi.md#getSequenceFeatureObject) | **GET** /bioentity/sequence_feature/{id} | TODO Returns seqfeature
[**getSubstanceExposures**](BioentityApi.md#getSubstanceExposures) | **GET** /bioentity/substance/{id}/exposures/ | TODO Returns associations between a substance and related exposures
[**getSubstanceInteractions**](BioentityApi.md#getSubstanceInteractions) | **GET** /bioentity/substance/{id}/interactions/ | TODO Returns associations between given drug and interactions
[**getSubstanceObject**](BioentityApi.md#getSubstanceObject) | **GET** /bioentity/substance/{id} | TODO Returns substance entity
[**getSubstanceParticipantInAssociations**](BioentityApi.md#getSubstanceParticipantInAssociations) | **GET** /bioentity/substance/{id}/participant_in/ | Returns associations between an activity and process and the specified substance
[**getSubstanceRelationships**](BioentityApi.md#getSubstanceRelationships) | **GET** /bioentity/substance/{id}/substances/ | TODO Returns associations between a substance and other substances
[**getSubstanceRoleAssociations**](BioentityApi.md#getSubstanceRoleAssociations) | **GET** /bioentity/substance/{id}/roles/ | Returns associations between given drug and roles
[**getSubstanceTargetAssociations**](BioentityApi.md#getSubstanceTargetAssociations) | **GET** /bioentity/substance/{id}/targets/ | TODO Returns associations between given drug and targets
[**getVariantGeneAssociations**](BioentityApi.md#getVariantGeneAssociations) | **GET** /bioentity/variant/{id}/genes/ | Returns genes associated with a variant
[**getVariantGenotypeAssociations**](BioentityApi.md#getVariantGenotypeAssociations) | **GET** /bioentity/variant/{id}/genotypes/ | Returns genotypes associated with a variant
[**getVariantObject**](BioentityApi.md#getVariantObject) | **GET** /bioentity/variant/{id} | TODO Returns sequence variant entity
[**getVariantPhenotypeAssociations**](BioentityApi.md#getVariantPhenotypeAssociations) | **GET** /bioentity/variant/{id}/phenotypes/ | Returns phenotypes associated with a variant


<a name="getAlleleObject"></a>
# **getAlleleObject**
> [Allele] getAlleleObject(id, opts)

TODO Returns allele object

This is a composition of multiple smaller operations, including fetching allele metadata, plus allele associations  TODO - should allele be subsumed into variant?

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAlleleObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Allele]**](Allele.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAnatomyGeneAssociations"></a>
# **getAnatomyGeneAssociations**
> [Association] getAnatomyGeneAssociations(id, opts)

TODO Returns associations between anatomical entity and genes

Typically encompasses genes expressed in a particular location.

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAnatomyGeneAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAnatomyObject"></a>
# **getAnatomyObject**
> getAnatomyObject(id, opts)

TODO Returns anatomical entity

Anatomical entities span ranges from the subcellular (e.g. nucleus) through cells to tissues, organs and organ systems.

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAnatomyObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAnatomyPhenotypeAssociations"></a>
# **getAnatomyPhenotypeAssociations**
> [Association] getAnatomyPhenotypeAssociations(id, opts)

TODO Returns associations between anatomical entity and phenotypes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAnatomyPhenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseaseAnatomyAssociations"></a>
# **getDiseaseAnatomyAssociations**
> [Association] getDiseaseAnatomyAssociations(id, opts)

TODO Returns anatomical locations associated with a disease

For example, neurodegeneratibe disease located in nervous system. For cancer, this may include both site of original and end location.

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiseaseAnatomyAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseaseFunctionAssociations"></a>
# **getDiseaseFunctionAssociations**
> [Association] getDiseaseFunctionAssociations(id, opts)

TODO Returns biological functions associated with a disease

This may come from a combination of asserted knowledge (e.g. Fanconi Anemia affects DNA repair) or from data-driven approach (cf Translator)  Results are typically represented as GO classes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiseaseFunctionAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseaseGeneAssociations"></a>
# **getDiseaseGeneAssociations**
> [AssociationResults] getDiseaseGeneAssociations(id, opts)

Returns genes associated with a disease

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiseaseGeneAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseaseModelAssociations"></a>
# **getDiseaseModelAssociations**
> [AssociationResults] getDiseaseModelAssociations(id, opts)

Returns associations to models of the disease

In the association object returned, the subject will be the disease, and the object will be the model. The model may be a gene or genetic element.  If the query disease is a general class, the association subject may be to a specific disease.  In some cases the association will be *direct*, for example if a paper asserts a genotype is a model of a disease.  In other cases, the association will be *indirect*, for example, chaining over orthology. In these cases the chain will be reflected in the *evidence graph*  * TODO: provide hook into owlsim for dynamic computation of models by similarity

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiseaseModelAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseaseModelTaxonAssociations"></a>
# **getDiseaseModelTaxonAssociations**
> [AssociationResults] getDiseaseModelTaxonAssociations(taxon, id, opts)

Same as &#x60;/disease/&lt;id&gt;/models&#x60; but constrain models by taxon

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var taxon = "taxon_example"; // String | CURIE of organism taxonomy class to constrain models, e.g NCBITaxon:6239 (C elegans).   Higher level taxa may be used

var id = "id_example"; // String | CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiseaseModelTaxonAssociations(taxon, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxon** | **String**| CURIE of organism taxonomy class to constrain models, e.g NCBITaxon:6239 (C elegans).   Higher level taxa may be used | 
 **id** | **String**| CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseaseObject"></a>
# **getDiseaseObject**
> getDiseaseObject(id, opts)

TODO Returns disease object

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDiseaseObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseasePhenotypeAssociations"></a>
# **getDiseasePhenotypeAssociations**
> [AssociationResults] getDiseasePhenotypeAssociations(id, opts)

Returns phenotypes associated with disease

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDiseasePhenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of disease, e.g. OMIM:605543, DOID:678. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseaseSubstanceAssociations"></a>
# **getDiseaseSubstanceAssociations**
> getDiseaseSubstanceAssociations(id, opts)

Returns substances associated with a disease

e.g. drugs or small molecules used to treat

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of disease, e.g. DOID:2841 (asthma). Equivalent IDs not yet supported

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDiseaseSubstanceAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of disease, e.g. DOID:2841 (asthma). Equivalent IDs not yet supported | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDiseaseSubstanceAssociations_0"></a>
# **getDiseaseSubstanceAssociations_0**
> getDiseaseSubstanceAssociations_0(id, opts)

Returns substances associated with a disease

e.g. drugs or small molecules used to treat

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDiseaseSubstanceAssociations_0(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEnvironmentObject"></a>
# **getEnvironmentObject**
> getEnvironmentObject(id, opts)

TODO Returns environment entity

TODO consider renaming exposure

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEnvironmentObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEnvironmentPhenotypeAssociations"></a>
# **getEnvironmentPhenotypeAssociations**
> [Association] getEnvironmentPhenotypeAssociations(id, opts)

TODO Returns list of associations

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEnvironmentPhenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGeneExpressionAssociations"></a>
# **getGeneExpressionAssociations**
> [AssociationResults] getGeneExpressionAssociations(id, opts)

TODO Returns expression events for a gene

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGeneExpressionAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGeneFunctionAssociations"></a>
# **getGeneFunctionAssociations**
> [AssociationResults] getGeneFunctionAssociations(id, opts)

Returns function associations for a gene

Note: currently this is implemented as a query to the GO solr instance. A smaller set of identifiers may be supported:   - ZFIN e.g. ZFIN:ZDB-GENE-050417-357  - MGI e.g. MGI:1342287  - Use UniProt for human (TODO: map this)

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'type': "type_example", // String | P, O or LDO (paralog, ortholog or least-diverged).
  'homologTaxon': "homologTaxon_example", // String | Taxon CURIE of homolog, e.g. NCBITaxon:9606. Can be intermediate note, includes inferred by default
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGeneFunctionAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **type** | **String**| P, O or LDO (paralog, ortholog or least-diverged). | [optional] 
 **homologTaxon** | **String**| Taxon CURIE of homolog, e.g. NCBITaxon:9606. Can be intermediate note, includes inferred by default | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGeneHomologAssociations"></a>
# **getGeneHomologAssociations**
> [AssociationResults] getGeneHomologAssociations(id, opts)

Returns homologs for a gene

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'type': "type_example", // String | P, O or LDO (paralog, ortholog or least-diverged).
  'homologTaxon': "homologTaxon_example", // String | Taxon CURIE of homolog, e.g. NCBITaxon:9606. Can be intermediate note, includes inferred by default
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGeneHomologAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **type** | **String**| P, O or LDO (paralog, ortholog or least-diverged). | [optional] 
 **homologTaxon** | **String**| Taxon CURIE of homolog, e.g. NCBITaxon:9606. Can be intermediate note, includes inferred by default | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGeneInteractions"></a>
# **getGeneInteractions**
> [AssociationResults] getGeneInteractions(id, opts)

Returns interactions for a gene

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGeneInteractions(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGeneObject"></a>
# **getGeneObject**
> [Gene] getGeneObject(id, opts)

Returns gene object

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | id, e.g. NCBIGene:84570

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGeneObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id, e.g. NCBIGene:84570 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Gene]**](Gene.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenePhenotypeAssociations"></a>
# **getGenePhenotypeAssociations**
> getGenePhenotypeAssociations(id, opts)

Returns phenotypes associated with gene

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getGenePhenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenePublicationList"></a>
# **getGenePublicationList**
> [AssociationResults] getGenePublicationList(id, opts)

TODO Returns expression events for a gene

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenePublicationList(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of gene, e.g. NCBIGene:4750. Equivalent IDs can be used with same results | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGeneproductObject"></a>
# **getGeneproductObject**
> getGeneproductObject(id, opts)

TODO Returns gene product object

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getGeneproductObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenericAssociations"></a>
# **getGenericAssociations**
> [AssociationResults] getGenericAssociations(id, opts)

Returns associations for an entity regardless of the type

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenericAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenericObject"></a>
# **getGenericObject**
> [BioObject] getGenericObject(id, opts)

TODO Returns object of any type

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | id, e.g. NCBIGene:84570

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenericObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id, e.g. NCBIGene:84570 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[BioObject]**](BioObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenotypeDiseaseAssociations"></a>
# **getGenotypeDiseaseAssociations**
> [AssociationResults] getGenotypeDiseaseAssociations(id, opts)

Returns diseases associated with a genotype

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-4286 (if non-human will return models)

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenotypeDiseaseAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-4286 (if non-human will return models) | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenotypeGeneAssociations"></a>
# **getGenotypeGeneAssociations**
> [AssociationResults] getGenotypeGeneAssociations(id, opts)

Returns genes associated with a genotype

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenotypeGeneAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenotypeGenotypeAssociations"></a>
# **getGenotypeGenotypeAssociations**
> [AssociationResults] getGenotypeGenotypeAssociations(id, opts)

Returns genotypes-genotype associations

Genotypes may be related to one another according to the GENO model

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenotypeGenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenotypeObject"></a>
# **getGenotypeObject**
> [Genotype] getGenotypeObject(id, opts)

Returns genotype object

The genotype object will have the following association sets populated:   * gene  * phenotype  * disease

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenotypeObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-6607 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Genotype]**](Genotype.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGenotypePhenotypeAssociations"></a>
# **getGenotypePhenotypeAssociations**
> [AssociationResults] getGenotypePhenotypeAssociations(id, opts)

Returns phenotypes associated with a genotype

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-4286

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGenotypePhenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of genotype, e.g. ZFIN:ZDB-FISH-150901-4286 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGotermGeneAssociations"></a>
# **getGotermGeneAssociations**
> [Association] getGotermGeneAssociations(id, opts)

TODO Returns associated phenotypes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGotermGeneAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGotermObject"></a>
# **getGotermObject**
> getGotermObject(id, opts)

TODO Returns GO class object

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | GO class CURIE identifier, e.g GO:0016301 (kinase activity)

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getGotermObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GO class CURIE identifier, e.g GO:0016301 (kinase activity) | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGotermPhenotypeAssociations"></a>
# **getGotermPhenotypeAssociations**
> [Association] getGotermPhenotypeAssociations(id, opts)

TODO Returns associated phenotypes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGotermPhenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLiteratureDiseaseAssociations"></a>
# **getLiteratureDiseaseAssociations**
> [Association] getLiteratureDiseaseAssociations(id, opts)

Returns associations between a lit entity and a disease

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLiteratureDiseaseAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLiteratureGeneAssociations"></a>
# **getLiteratureGeneAssociations**
> [Association] getLiteratureGeneAssociations(id, opts)

Returns associations between a lit entity and a gene

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLiteratureGeneAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLiteratureGenotypeAssociations"></a>
# **getLiteratureGenotypeAssociations**
> [Association] getLiteratureGenotypeAssociations(id, opts)

Returns associations between a lit entity and a genotype

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLiteratureGenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getParentObject"></a>
# **getParentObject**
> getParentObject(id, opts)

TODO Returns individual

Individuals may typically encompass patients, but can be individuals of any species

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getParentObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getParentObject_0"></a>
# **getParentObject_0**
> getParentObject_0(id, opts)

TODO Returns investigation object

Investigations encompass clinical trials, molecular biology experiments or any kind of study

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getParentObject_0(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPathwayGeneAssociations"></a>
# **getPathwayGeneAssociations**
> [Association] getPathwayGeneAssociations(id, opts)

TODO Returns list of genes associated with a pathway

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPathwayGeneAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPathwayObject"></a>
# **getPathwayObject**
> getPathwayObject(id, opts)

TODO Returns pathway object

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE any pathway element. May be a GO ID or a pathway database ID

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPathwayObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE any pathway element. May be a GO ID or a pathway database ID | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPathwayParticipantAssociations"></a>
# **getPathwayParticipantAssociations**
> [Association] getPathwayParticipantAssociations(id, opts)

TODO Returns associations to participants (molecules, etc) for a pathway

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPathwayParticipantAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhenotypeAnatomyAssociations"></a>
# **getPhenotypeAnatomyAssociations**
> [NamedObject] getPhenotypeAnatomyAssociations(id, opts)

Returns anatomical entities associated with a phenotype

Example IDs:   * ZP:0004204   * MP:0008521 abnormal Bowman membrane  For example, *abnormal limb development* will map to *limb*

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhenotypeAnatomyAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[NamedObject]**](NamedObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhenotypeFunctionAssociations"></a>
# **getPhenotypeFunctionAssociations**
> [Association] getPhenotypeFunctionAssociations(id, opts)

TODO Returns biological functions associated with a Phenotype

This may come from a combination of asserted knowledge (e.g. abnormal levels of metabolite to corresponding GO activity) or from data-driven approach (cf Translator)  Results are typically represented as GO classes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhenotypeFunctionAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhenotypeGeneAssociations"></a>
# **getPhenotypeGeneAssociations**
> getPhenotypeGeneAssociations(taxid, id, opts)

Returns gene ids for all genes for a particular phenotype in a taxon

For example, + NCBITaxon:10090 (mouse)

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var taxid = "taxid_example"; // String | Species or high level taxon grouping, e.g  NCBITaxon:10090 (Mus musculus)

var id = "id_example"; // String | Pheno class CURIE identifier, e.g  MP:0001569 (abnormal circulating bilirubin level)

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPhenotypeGeneAssociations(taxid, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taxid** | **String**| Species or high level taxon grouping, e.g  NCBITaxon:10090 (Mus musculus) | 
 **id** | **String**| Pheno class CURIE identifier, e.g  MP:0001569 (abnormal circulating bilirubin level) | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhenotypeGeneAssociations_0"></a>
# **getPhenotypeGeneAssociations_0**
> [Association] getPhenotypeGeneAssociations_0(id, opts)

TODO Returns associated phenotypes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhenotypeGeneAssociations_0(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhenotypeObject"></a>
# **getPhenotypeObject**
> getPhenotypeObject(id, opts)

TODO Returns phenotype class object

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPhenotypeObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhenotypePhenotypeAssociations"></a>
# **getPhenotypePhenotypeAssociations**
> [Association] getPhenotypePhenotypeAssociations(id, opts)

TODO Returns associated phenotypes

Includes phenologs, as well as equivalent phenotypes in other species

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhenotypePhenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPubObject"></a>
# **getPubObject**
> getPubObject(id, opts)

TODO Returns publication object

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPubObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSequenceFeatureObject"></a>
# **getSequenceFeatureObject**
> getSequenceFeatureObject(id, opts)

TODO Returns seqfeature

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSequenceFeatureObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubstanceExposures"></a>
# **getSubstanceExposures**
> [Association] getSubstanceExposures(id, opts)

TODO Returns associations between a substance and related exposures

E.g. between pesticide and occupational exposure class

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubstanceExposures(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubstanceInteractions"></a>
# **getSubstanceInteractions**
> [Association] getSubstanceInteractions(id, opts)

TODO Returns associations between given drug and interactions

Interactions can encompass drugs or environments

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubstanceInteractions(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubstanceObject"></a>
# **getSubstanceObject**
> [Substance] getSubstanceObject(id, opts)

TODO Returns substance entity

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubstanceObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Substance]**](Substance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubstanceParticipantInAssociations"></a>
# **getSubstanceParticipantInAssociations**
> [Association] getSubstanceParticipantInAssociations(id, opts)

Returns associations between an activity and process and the specified substance

Examples relationships:   * substance is a metabolite of a process  * substance is synthesized by a process  * substance is modified by an activity  * substance elicits a response program/pathway  * substance is transported by activity or pathway  For example, CHEBI:40036 (amitrole)

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubstanceParticipantInAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubstanceRelationships"></a>
# **getSubstanceRelationships**
> [Association] getSubstanceRelationships(id, opts)

TODO Returns associations between a substance and other substances

E.g. metabolite-of, tautomer-of, parent-of, ...

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubstanceRelationships(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubstanceRoleAssociations"></a>
# **getSubstanceRoleAssociations**
> [Association] getSubstanceRoleAssociations(id, opts)

Returns associations between given drug and roles

Roles may be human-oriented (e.g. pesticide) or molecular (e.g. enzyme inhibitor)

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubstanceRoleAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubstanceTargetAssociations"></a>
# **getSubstanceTargetAssociations**
> [Association] getSubstanceTargetAssociations(id, opts)

TODO Returns associations between given drug and targets

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | 

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubstanceTargetAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[Association]**](Association.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariantGeneAssociations"></a>
# **getVariantGeneAssociations**
> [AssociationResults] getVariantGeneAssociations(id, opts)

Returns genes associated with a variant

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariantGeneAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariantGenotypeAssociations"></a>
# **getVariantGenotypeAssociations**
> [AssociationResults] getVariantGenotypeAssociations(id, opts)

Returns genotypes associated with a variant

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariantGenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariantObject"></a>
# **getVariantObject**
> getVariantObject(id, opts)

TODO Returns sequence variant entity

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getVariantObject(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariantPhenotypeAssociations"></a>
# **getVariantPhenotypeAssociations**
> [AssociationResults] getVariantPhenotypeAssociations(id, opts)

Returns phenotypes associated with a variant

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentityApi();

var id = "id_example"; // String | CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783

var opts = { 
  'fetchObjects': true, // Boolean | If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
  'rows': 20, // Integer | number of rows
  'excludeAutomaticAssertions': true, // Boolean | If set, excludes associations that involve IEAs (ECO:0000501)
  'unselectEvidence': true, // Boolean | If set, excludes evidence objects in response
  'useCompactAssociations': true // Boolean | If true, returns results in compact associations format
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariantPhenotypeAssociations(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| CURIE identifier of variant, e.g. ZFIN:ZDB-ALT-010427-8, ClinVarVariant:39783 | 
 **fetchObjects** | **Boolean**| If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload | [optional] [default to true]
 **rows** | **Integer**| number of rows | [optional] [default to 20]
 **excludeAutomaticAssertions** | **Boolean**| If set, excludes associations that involve IEAs (ECO:0000501) | [optional] 
 **unselectEvidence** | **Boolean**| If set, excludes evidence objects in response | [optional] 
 **useCompactAssociations** | **Boolean**| If true, returns results in compact associations format | [optional] 

### Return type

[**[AssociationResults]**](AssociationResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

