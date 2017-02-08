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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnnotationExtension', 'model/AssociationPropertyValue', 'model/BioObject', 'model/Graph', 'model/NamedObject', 'model/Publication', 'model/Relation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnnotationExtension'), require('./AssociationPropertyValue'), require('./BioObject'), require('./Graph'), require('./NamedObject'), require('./Publication'), require('./Relation'));
  } else {
    // Browser globals (root is window)
    if (!root.BioLinkApi) {
      root.BioLinkApi = {};
    }
    root.BioLinkApi.Association = factory(root.BioLinkApi.ApiClient, root.BioLinkApi.AnnotationExtension, root.BioLinkApi.AssociationPropertyValue, root.BioLinkApi.BioObject, root.BioLinkApi.Graph, root.BioLinkApi.NamedObject, root.BioLinkApi.Publication, root.BioLinkApi.Relation);
  }
}(this, function(ApiClient, AnnotationExtension, AssociationPropertyValue, BioObject, Graph, NamedObject, Publication, Relation) {
  'use strict';




  /**
   * The Association model module.
   * @module model/Association
   * @version 0.1
   */

  /**
   * Constructs a new <code>Association</code>.
   * @alias module:model/Association
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Association</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Association} obj Optional instance to populate.
   * @return {module:model/Association} The populated <code>Association</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('evidence_graph')) {
        obj['evidence_graph'] = Graph.constructFromObject(data['evidence_graph']);
      }
      if (data.hasOwnProperty('evidence_types')) {
        obj['evidence_types'] = ApiClient.convertToType(data['evidence_types'], [NamedObject]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = BioObject.constructFromObject(data['object']);
      }
      if (data.hasOwnProperty('object_extension')) {
        obj['object_extension'] = ApiClient.convertToType(data['object_extension'], [AnnotationExtension]);
      }
      if (data.hasOwnProperty('provided_by')) {
        obj['provided_by'] = ApiClient.convertToType(data['provided_by'], ['String']);
      }
      if (data.hasOwnProperty('publications')) {
        obj['publications'] = ApiClient.convertToType(data['publications'], [Publication]);
      }
      if (data.hasOwnProperty('qualifiers')) {
        obj['qualifiers'] = ApiClient.convertToType(data['qualifiers'], [AssociationPropertyValue]);
      }
      if (data.hasOwnProperty('relation')) {
        obj['relation'] = Relation.constructFromObject(data['relation']);
      }
      if (data.hasOwnProperty('slim')) {
        obj['slim'] = ApiClient.convertToType(data['slim'], ['String']);
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = BioObject.constructFromObject(data['subject']);
      }
      if (data.hasOwnProperty('subject_extension')) {
        obj['subject_extension'] = ApiClient.convertToType(data['subject_extension'], [AnnotationExtension]);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * An indirect association is a join between two or more direct assocations, e.g. gene to disease via ortholog. We record the full set of associations as a graph object
   * @member {module:model/Graph} evidence_graph
   */
  exports.prototype['evidence_graph'] = undefined;
  /**
   * Evidence types (ECO classes) extracted from evidence graph
   * @member {Array.<module:model/NamedObject>} evidence_types
   */
  exports.prototype['evidence_types'] = undefined;
  /**
   * Association/annotation unique ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Object (sensu RDF), aka target, e.g. HP:0000448, MP:0002109, DOID:14330
   * @member {module:model/BioObject} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {Array.<module:model/AnnotationExtension>} object_extension
   */
  exports.prototype['object_extension'] = undefined;
  /**
   * Provider of association, e.g. Orphanet, ClinVar
   * @member {Array.<String>} provided_by
   */
  exports.prototype['provided_by'] = undefined;
  /**
   * Publications supporting association, extracted from evidence graph
   * @member {Array.<module:model/Publication>} publications
   */
  exports.prototype['publications'] = undefined;
  /**
   * @member {Array.<module:model/AssociationPropertyValue>} qualifiers
   */
  exports.prototype['qualifiers'] = undefined;
  /**
   * Relationship type connecting subject and object
   * @member {module:model/Relation} relation
   */
  exports.prototype['relation'] = undefined;
  /**
   * Objects mapped to a slim
   * @member {Array.<String>} slim
   */
  exports.prototype['slim'] = undefined;
  /**
   * Subject of association (what it is about), e.g. ClinVar:nnn, MGI:1201606
   * @member {module:model/BioObject} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {Array.<module:model/AnnotationExtension>} subject_extension
   */
  exports.prototype['subject_extension'] = undefined;
  /**
   * Type of association, e.g. gene-phenotype
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


