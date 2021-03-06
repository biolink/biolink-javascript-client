/**
 * BioLink API
 * API integration layer for linked biological objects.   __Source:__ https://github.com/monarch-initiative/biolink-api/
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/APageOfResults', 'model/AbstractPropertyValue', 'model/Allele', 'model/AnnotationExtension', 'model/Association', 'model/AssociationPropertyValue', 'model/AssociationResults', 'model/BioObject', 'model/Chromosome', 'model/CompactAssociationSet', 'model/Edge', 'model/Exon', 'model/Gene', 'model/Genotype', 'model/Graph', 'model/NamedObject', 'model/Node', 'model/PageOfVariantSets', 'model/Publication', 'model/Relation', 'model/SearchResult', 'model/Seq', 'model/SequenceFeature', 'model/SequenceLocation', 'model/SequencePosition', 'model/Substance', 'model/SummaryPropertyValue', 'model/Taxon', 'model/Transcript', 'model/VariantSet', 'api/AssociationApi', 'api/BioentityApi', 'api/BioentitysetApi', 'api/BioentitysethomologsApi', 'api/CamApi', 'api/EvidencegraphApi', 'api/GenomefeaturesApi', 'api/GraphApi', 'api/IdentifiermapperApi', 'api/IdentifierprefixesApi', 'api/IndividualApi', 'api/NlpannotateApi', 'api/OntolApi', 'api/OntolslimmerApi', 'api/OwlontologyApi', 'api/PairsimApi', 'api/PubpubsApi', 'api/RelationusageApi', 'api/SearchentityApi', 'api/VariationsetApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/APageOfResults'), require('./model/AbstractPropertyValue'), require('./model/Allele'), require('./model/AnnotationExtension'), require('./model/Association'), require('./model/AssociationPropertyValue'), require('./model/AssociationResults'), require('./model/BioObject'), require('./model/Chromosome'), require('./model/CompactAssociationSet'), require('./model/Edge'), require('./model/Exon'), require('./model/Gene'), require('./model/Genotype'), require('./model/Graph'), require('./model/NamedObject'), require('./model/Node'), require('./model/PageOfVariantSets'), require('./model/Publication'), require('./model/Relation'), require('./model/SearchResult'), require('./model/Seq'), require('./model/SequenceFeature'), require('./model/SequenceLocation'), require('./model/SequencePosition'), require('./model/Substance'), require('./model/SummaryPropertyValue'), require('./model/Taxon'), require('./model/Transcript'), require('./model/VariantSet'), require('./api/AssociationApi'), require('./api/BioentityApi'), require('./api/BioentitysetApi'), require('./api/BioentitysethomologsApi'), require('./api/CamApi'), require('./api/EvidencegraphApi'), require('./api/GenomefeaturesApi'), require('./api/GraphApi'), require('./api/IdentifiermapperApi'), require('./api/IdentifierprefixesApi'), require('./api/IndividualApi'), require('./api/NlpannotateApi'), require('./api/OntolApi'), require('./api/OntolslimmerApi'), require('./api/OwlontologyApi'), require('./api/PairsimApi'), require('./api/PubpubsApi'), require('./api/RelationusageApi'), require('./api/SearchentityApi'), require('./api/VariationsetApi'));
  }
}(function(ApiClient, APageOfResults, AbstractPropertyValue, Allele, AnnotationExtension, Association, AssociationPropertyValue, AssociationResults, BioObject, Chromosome, CompactAssociationSet, Edge, Exon, Gene, Genotype, Graph, NamedObject, Node, PageOfVariantSets, Publication, Relation, SearchResult, Seq, SequenceFeature, SequenceLocation, SequencePosition, Substance, SummaryPropertyValue, Taxon, Transcript, VariantSet, AssociationApi, BioentityApi, BioentitysetApi, BioentitysethomologsApi, CamApi, EvidencegraphApi, GenomefeaturesApi, GraphApi, IdentifiermapperApi, IdentifierprefixesApi, IndividualApi, NlpannotateApi, OntolApi, OntolslimmerApi, OwlontologyApi, PairsimApi, PubpubsApi, RelationusageApi, SearchentityApi, VariationsetApi) {
  'use strict';

  /**
   * API_integration_layer_for_linked_biological_objects____Source___httpsgithub_commonarch_initiativebiolink_api.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var BioLinkApi = require('index'); // See note below*.
   * var xxxSvc = new BioLinkApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new BioLinkApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new BioLinkApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new BioLinkApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The APageOfResults model constructor.
     * @property {module:model/APageOfResults}
     */
    APageOfResults: APageOfResults,
    /**
     * The AbstractPropertyValue model constructor.
     * @property {module:model/AbstractPropertyValue}
     */
    AbstractPropertyValue: AbstractPropertyValue,
    /**
     * The Allele model constructor.
     * @property {module:model/Allele}
     */
    Allele: Allele,
    /**
     * The AnnotationExtension model constructor.
     * @property {module:model/AnnotationExtension}
     */
    AnnotationExtension: AnnotationExtension,
    /**
     * The Association model constructor.
     * @property {module:model/Association}
     */
    Association: Association,
    /**
     * The AssociationPropertyValue model constructor.
     * @property {module:model/AssociationPropertyValue}
     */
    AssociationPropertyValue: AssociationPropertyValue,
    /**
     * The AssociationResults model constructor.
     * @property {module:model/AssociationResults}
     */
    AssociationResults: AssociationResults,
    /**
     * The BioObject model constructor.
     * @property {module:model/BioObject}
     */
    BioObject: BioObject,
    /**
     * The Chromosome model constructor.
     * @property {module:model/Chromosome}
     */
    Chromosome: Chromosome,
    /**
     * The CompactAssociationSet model constructor.
     * @property {module:model/CompactAssociationSet}
     */
    CompactAssociationSet: CompactAssociationSet,
    /**
     * The Edge model constructor.
     * @property {module:model/Edge}
     */
    Edge: Edge,
    /**
     * The Exon model constructor.
     * @property {module:model/Exon}
     */
    Exon: Exon,
    /**
     * The Gene model constructor.
     * @property {module:model/Gene}
     */
    Gene: Gene,
    /**
     * The Genotype model constructor.
     * @property {module:model/Genotype}
     */
    Genotype: Genotype,
    /**
     * The Graph model constructor.
     * @property {module:model/Graph}
     */
    Graph: Graph,
    /**
     * The NamedObject model constructor.
     * @property {module:model/NamedObject}
     */
    NamedObject: NamedObject,
    /**
     * The Node model constructor.
     * @property {module:model/Node}
     */
    Node: Node,
    /**
     * The PageOfVariantSets model constructor.
     * @property {module:model/PageOfVariantSets}
     */
    PageOfVariantSets: PageOfVariantSets,
    /**
     * The Publication model constructor.
     * @property {module:model/Publication}
     */
    Publication: Publication,
    /**
     * The Relation model constructor.
     * @property {module:model/Relation}
     */
    Relation: Relation,
    /**
     * The SearchResult model constructor.
     * @property {module:model/SearchResult}
     */
    SearchResult: SearchResult,
    /**
     * The Seq model constructor.
     * @property {module:model/Seq}
     */
    Seq: Seq,
    /**
     * The SequenceFeature model constructor.
     * @property {module:model/SequenceFeature}
     */
    SequenceFeature: SequenceFeature,
    /**
     * The SequenceLocation model constructor.
     * @property {module:model/SequenceLocation}
     */
    SequenceLocation: SequenceLocation,
    /**
     * The SequencePosition model constructor.
     * @property {module:model/SequencePosition}
     */
    SequencePosition: SequencePosition,
    /**
     * The Substance model constructor.
     * @property {module:model/Substance}
     */
    Substance: Substance,
    /**
     * The SummaryPropertyValue model constructor.
     * @property {module:model/SummaryPropertyValue}
     */
    SummaryPropertyValue: SummaryPropertyValue,
    /**
     * The Taxon model constructor.
     * @property {module:model/Taxon}
     */
    Taxon: Taxon,
    /**
     * The Transcript model constructor.
     * @property {module:model/Transcript}
     */
    Transcript: Transcript,
    /**
     * The VariantSet model constructor.
     * @property {module:model/VariantSet}
     */
    VariantSet: VariantSet,
    /**
     * The AssociationApi service constructor.
     * @property {module:api/AssociationApi}
     */
    AssociationApi: AssociationApi,
    /**
     * The BioentityApi service constructor.
     * @property {module:api/BioentityApi}
     */
    BioentityApi: BioentityApi,
    /**
     * The BioentitysetApi service constructor.
     * @property {module:api/BioentitysetApi}
     */
    BioentitysetApi: BioentitysetApi,
    /**
     * The BioentitysethomologsApi service constructor.
     * @property {module:api/BioentitysethomologsApi}
     */
    BioentitysethomologsApi: BioentitysethomologsApi,
    /**
     * The CamApi service constructor.
     * @property {module:api/CamApi}
     */
    CamApi: CamApi,
    /**
     * The EvidencegraphApi service constructor.
     * @property {module:api/EvidencegraphApi}
     */
    EvidencegraphApi: EvidencegraphApi,
    /**
     * The GenomefeaturesApi service constructor.
     * @property {module:api/GenomefeaturesApi}
     */
    GenomefeaturesApi: GenomefeaturesApi,
    /**
     * The GraphApi service constructor.
     * @property {module:api/GraphApi}
     */
    GraphApi: GraphApi,
    /**
     * The IdentifiermapperApi service constructor.
     * @property {module:api/IdentifiermapperApi}
     */
    IdentifiermapperApi: IdentifiermapperApi,
    /**
     * The IdentifierprefixesApi service constructor.
     * @property {module:api/IdentifierprefixesApi}
     */
    IdentifierprefixesApi: IdentifierprefixesApi,
    /**
     * The IndividualApi service constructor.
     * @property {module:api/IndividualApi}
     */
    IndividualApi: IndividualApi,
    /**
     * The NlpannotateApi service constructor.
     * @property {module:api/NlpannotateApi}
     */
    NlpannotateApi: NlpannotateApi,
    /**
     * The OntolApi service constructor.
     * @property {module:api/OntolApi}
     */
    OntolApi: OntolApi,
    /**
     * The OntolslimmerApi service constructor.
     * @property {module:api/OntolslimmerApi}
     */
    OntolslimmerApi: OntolslimmerApi,
    /**
     * The OwlontologyApi service constructor.
     * @property {module:api/OwlontologyApi}
     */
    OwlontologyApi: OwlontologyApi,
    /**
     * The PairsimApi service constructor.
     * @property {module:api/PairsimApi}
     */
    PairsimApi: PairsimApi,
    /**
     * The PubpubsApi service constructor.
     * @property {module:api/PubpubsApi}
     */
    PubpubsApi: PubpubsApi,
    /**
     * The RelationusageApi service constructor.
     * @property {module:api/RelationusageApi}
     */
    RelationusageApi: RelationusageApi,
    /**
     * The SearchentityApi service constructor.
     * @property {module:api/SearchentityApi}
     */
    SearchentityApi: SearchentityApi,
    /**
     * The VariationsetApi service constructor.
     * @property {module:api/VariationsetApi}
     */
    VariationsetApi: VariationsetApi
  };

  return exports;
}));
