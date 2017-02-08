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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BioLinkApi) {
      root.BioLinkApi = {};
    }
    root.BioLinkApi.SearchResult = factory(root.BioLinkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SearchResult model module.
   * @module model/SearchResult
   * @version 0.1
   */

  /**
   * Constructs a new <code>SearchResult</code>.
   * @alias module:model/SearchResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResult} obj Optional instance to populate.
   * @return {module:model/SearchResult} The populated <code>SearchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('numFound')) {
        obj['numFound'] = ApiClient.convertToType(data['numFound'], 'Integer');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Integer');
      }
      if (data.hasOwnProperty('facet_pivot')) {
        obj['facet_pivot'] = ApiClient.convertToType(data['facet_pivot'], Object);
      }
      if (data.hasOwnProperty('facet_counts')) {
        obj['facet_counts'] = ApiClient.convertToType(data['facet_counts'], Object);
      }
    }
    return obj;
  }

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

