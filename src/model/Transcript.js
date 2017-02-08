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
    define(['ApiClient', 'model/BioObject', 'model/Exon', 'model/NamedObject', 'model/SequenceFeature', 'model/Taxon'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BioObject'), require('./Exon'), require('./NamedObject'), require('./SequenceFeature'), require('./Taxon'));
  } else {
    // Browser globals (root is window)
    if (!root.BioLinkApi) {
      root.BioLinkApi = {};
    }
    root.BioLinkApi.Transcript = factory(root.BioLinkApi.ApiClient, root.BioLinkApi.BioObject, root.BioLinkApi.Exon, root.BioLinkApi.NamedObject, root.BioLinkApi.SequenceFeature, root.BioLinkApi.Taxon);
  }
}(this, function(ApiClient, BioObject, Exon, NamedObject, SequenceFeature, Taxon) {
  'use strict';




  /**
   * The Transcript model module.
   * @module model/Transcript
   * @version 0.1
   */

  /**
   * Constructs a new <code>Transcript</code>.
   * @alias module:model/Transcript
   * @class
   * @implements module:model/BioObject
   */
  var exports = function() {
    var _this = this;

    BioObject.call(_this);



  };

  /**
   * Constructs a <code>Transcript</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transcript} obj Optional instance to populate.
   * @return {module:model/Transcript} The populated <code>Transcript</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BioObject.constructFromObject(data, obj);
      if (data.hasOwnProperty('sequence_features')) {
        obj['sequence_features'] = ApiClient.convertToType(data['sequence_features'], [SequenceFeature]);
      }
      if (data.hasOwnProperty('exons')) {
        obj['exons'] = ApiClient.convertToType(data['exons'], [Exon]);
      }
      if (data.hasOwnProperty('genes')) {
        obj['genes'] = ApiClient.convertToType(data['genes'], [NamedObject]);
      }
    }
    return obj;
  }

  /**
   * Sequence feature representing this particular instance on a genome
   * @member {Array.<module:model/SequenceFeature>} sequence_features
   */
  exports.prototype['sequence_features'] = undefined;
  /**
   * All exons used in this transcript
   * @member {Array.<module:model/Exon>} exons
   */
  exports.prototype['exons'] = undefined;
  /**
   * References to any gene objects that have this transcript. This may not be populated if this is contained in a gene object
   * @member {Array.<module:model/NamedObject>} genes
   */
  exports.prototype['genes'] = undefined;

  // Implement BioObject interface:
  /**
   * RDFS Label
   * @member {String} label
   */
exports.prototype['label'] = undefined;

  /**
   * ID or CURIE e.g. MGI:1201606
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * @member {Array.<String>} categories
   */
exports.prototype['categories'] = undefined;

  /**
   * Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940 
   * @member {Array.<String>} xrefs
   */
exports.prototype['xrefs'] = undefined;

  /**
   * Taxon to which the object belongs
   * @member {module:model/Taxon} taxon
   */
exports.prototype['taxon'] = undefined;



  return exports;
}));

