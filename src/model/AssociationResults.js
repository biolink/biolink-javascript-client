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
    define(['ApiClient', 'model/Association', 'model/CompactAssociationSet', 'model/SearchResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Association'), require('./CompactAssociationSet'), require('./SearchResult'));
  } else {
    // Browser globals (root is window)
    if (!root.BioLinkApi) {
      root.BioLinkApi = {};
    }
    root.BioLinkApi.AssociationResults = factory(root.BioLinkApi.ApiClient, root.BioLinkApi.Association, root.BioLinkApi.CompactAssociationSet, root.BioLinkApi.SearchResult);
  }
}(this, function(ApiClient, Association, CompactAssociationSet, SearchResult) {
  'use strict';




  /**
   * The AssociationResults model module.
   * @module model/AssociationResults
   * @version 0.1
   */

  /**
   * Constructs a new <code>AssociationResults</code>.
   * @alias module:model/AssociationResults
   * @class
   * @implements module:model/SearchResult
   */
  var exports = function() {
    var _this = this;

    SearchResult.call(_this);



  };

  /**
   * Constructs a <code>AssociationResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssociationResults} obj Optional instance to populate.
   * @return {module:model/AssociationResults} The populated <code>AssociationResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      SearchResult.constructFromObject(data, obj);
      if (data.hasOwnProperty('objects')) {
        obj['objects'] = ApiClient.convertToType(data['objects'], ['String']);
      }
      if (data.hasOwnProperty('compact_associations')) {
        obj['compact_associations'] = ApiClient.convertToType(data['compact_associations'], [CompactAssociationSet]);
      }
      if (data.hasOwnProperty('associations')) {
        obj['associations'] = ApiClient.convertToType(data['associations'], [Association]);
      }
    }
    return obj;
  }

  /**
   * List of distinct objects used
   * @member {Array.<String>} objects
   */
  exports.prototype['objects'] = undefined;
  /**
   * Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs
   * @member {Array.<module:model/CompactAssociationSet>} compact_associations
   */
  exports.prototype['compact_associations'] = undefined;
  /**
   * Complete representation of full association object, plus evidence
   * @member {Array.<module:model/Association>} associations
   */
  exports.prototype['associations'] = undefined;

  // Implement SearchResult interface:
  /**
   * total number of associations matching query
   * @member {Integer} numFound
   */
exports.prototype['numFound'] = undefined;

  /**
   * Cursor position
   * @member {Integer} start
   */
exports.prototype['start'] = undefined;

  /**
   * Populated in facet_pivots is passed
   * @member {Object} facet_pivot
   */
exports.prototype['facet_pivot'] = undefined;

  /**
   * Mapping between field names and association counts
   * @member {Object} facet_counts
   */
exports.prototype['facet_counts'] = undefined;



  return exports;
}));


