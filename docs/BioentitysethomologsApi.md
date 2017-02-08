# BioLinkApi.BioentitysethomologsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEntitySetHomologs**](BioentitysethomologsApi.md#getEntitySetHomologs) | **GET** /bioentityset/homologs/homologs/ | Returns homology associations for a given input set of genes


<a name="getEntitySetHomologs"></a>
# **getEntitySetHomologs**
> [CompactAssociationSet] getEntitySetHomologs(opts)

Returns homology associations for a given input set of genes

### Example
```javascript
var BioLinkApi = require('bio_link_api');

var apiInstance = new BioLinkApi.BioentitysethomologsApi();

var opts = { 
  'subject': ["subject_example"] // [String] | Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEntitySetHomologs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subject** | [**[String]**](String.md)| Entity ids to be examined, e.g. NCBIGene:9342, NCBIGene:7227, NCBIGene:8131, NCBIGene:157570, NCBIGene:51164, NCBIGene:6689, NCBIGene:6387 | [optional] 

### Return type

[**[CompactAssociationSet]**](CompactAssociationSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

