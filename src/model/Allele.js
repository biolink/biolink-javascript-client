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
    define(['ApiClient', 'model/Association', 'model/Genotype', 'model/SequenceFeature', 'model/Taxon'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Association'), require('./Genotype'), require('./SequenceFeature'), require('./Taxon'));
  } else {
    // Browser globals (root is window)
    if (!root.BioLinkApi) {
      root.BioLinkApi = {};
    }
    root.BioLinkApi.Allele = factory(root.BioLinkApi.ApiClient, root.BioLinkApi.Association, root.BioLinkApi.Genotype, root.BioLinkApi.SequenceFeature, root.BioLinkApi.Taxon);
  }
}(this, function(ApiClient, Association, Genotype, SequenceFeature, Taxon) {
  'use strict';




  /**
   * The Allele model module.
   * @module model/Allele
   * @version 0.1
   */

  /**
   * Constructs a new <code>Allele</code>.
   * @alias module:model/Allele
   * @class
   * @implements module:model/Genotype
   */
  var exports = function() {
    var _this = this;

    Genotype.call(_this);

  };

  /**
   * Constructs a <code>Allele</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Allele} obj Optional instance to populate.
   * @return {module:model/Allele} The populated <code>Allele</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Genotype.constructFromObject(data, obj);
      if (data.hasOwnProperty('sequence_features')) {
        obj['sequence_features'] = ApiClient.convertToType(data['sequence_features'], [SequenceFeature]);
      }
    }
    return obj;
  }

  /**
   * Sequence feature representing particular instance on a genome
   * @member {Array.<module:model/SequenceFeature>} sequence_features
   */
  exports.prototype['sequence_features'] = undefined;

  // Implement Genotype interface:
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

  /**
   * @member {Array.<module:model/Association>} variant_associations
   */
exports.prototype['variant_associations'] = undefined;

  /**
   * @member {Array.<module:model/Association>} gene_associations
   */
exports.prototype['gene_associations'] = undefined;

  /**
   * @member {Array.<module:model/Association>} phenotype_associations
   */
exports.prototype['phenotype_associations'] = undefined;

  /**
   * @member {Array.<module:model/Association>} disease_associations
   */
exports.prototype['disease_associations'] = undefined;



  return exports;
}));


