# BioLinkApi.Gene

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pathwayAssociations** | [**[Association]**](Association.md) | Assocations to pathways in which this gene is involved, including LEGO models | [optional] 
**genotypeAssociations** | [**[Association]**](Association.md) | associations to genotypes in which this gene is altered | [optional] 
**fullName** | **String** | full name, e.g. Synaptosome Associated Protein 29 | [optional] 
**sequenceFeatures** | [**[SequenceFeature]**](SequenceFeature.md) | Sequence feature representing particular instance on a genome | [optional] 
**functionAssociations** | [**[Association]**](Association.md) | GO assocations for wild type gene | [optional] 
**interactionAssociations** | [**[Association]**](Association.md) | associations to genes that interact (may be physical or genetic) | [optional] 
**transcripts** | [**[Transcript]**](Transcript.md) | All transcripts belonging to this gene | [optional] 
**literatureAssociations** | [**[Association]**](Association.md) | publications for this gene | [optional] 
**summaries** | [**[SummaryPropertyValue]**](SummaryPropertyValue.md) | Attributed textual summaries | [optional] 
**chromosome** | [**Chromosome**](Chromosome.md) | chromosome on which this gene is located. This may be redundant with information in sequence_feature objects but is included here for convenience | [optional] 
**diseaseAssociations** | [**[Association]**](Association.md) | diseases associated with alterations of gene | [optional] 
**phenotypeAssociations** | [**[Association]**](Association.md) | phenotypes associated with alterations of gene | [optional] 
**homologyAssociations** | [**[Association]**](Association.md) | orthology and paralogy assocations for this gene | [optional] 
**description** | **String** | full text description | [optional] 
**systematicName** | **String** | E.g. SPBC428.08c for clr4 in PomBase | [optional] 
**families** | [**[NamedObject]**](NamedObject.md) | Families, superfamilies etc to which these gene belongs | [optional] 


