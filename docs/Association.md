# BioLinkApi.Association

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evidenceGraph** | [**Graph**](Graph.md) | An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object | [optional] 
**evidenceTypes** | [**[NamedObject]**](NamedObject.md) | Evidence types (ECO classes) extracted from evidence graph | [optional] 
**id** | **String** | Association/annotation unique ID | [optional] 
**_object** | [**BioObject**](BioObject.md) | Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330 | [optional] 
**objectExtension** | [**[AnnotationExtension]**](AnnotationExtension.md) |  | [optional] 
**providedBy** | **[String]** | Provider of association, e.g. Orphanet, ClinVar | [optional] 
**publications** | [**[Publication]**](Publication.md) | Publications supporting association, extracted from evidence graph | [optional] 
**qualifiers** | [**[AssociationPropertyValue]**](AssociationPropertyValue.md) |  | [optional] 
**relation** | [**Relation**](Relation.md) | Relationship type connecting subject and object | [optional] 
**slim** | **[String]** | Objects mapped to a slim | [optional] 
**subject** | [**BioObject**](BioObject.md) | Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606 | [optional] 
**subjectExtension** | [**[AnnotationExtension]**](AnnotationExtension.md) |  | [optional] 
**type** | **String** | Type of association, e.g. gene-phenotype | [optional] 


