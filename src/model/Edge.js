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
    root.BioLinkApi.Edge = factory(root.BioLinkApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Edge model module.
   * @module model/Edge
   * @version 0.1
   */

  /**
   * Constructs a new <code>Edge</code>.
   * @alias module:model/Edge
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Edge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Edge} obj Optional instance to populate.
   * @return {module:model/Edge} The populated <code>Edge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('obj')) {
        obj['obj'] = ApiClient.convertToType(data['obj'], 'String');
      }
      if (data.hasOwnProperty('pred')) {
        obj['pred'] = ApiClient.convertToType(data['pred'], 'String');
      }
      if (data.hasOwnProperty('sub')) {
        obj['sub'] = ApiClient.convertToType(data['sub'], 'String');
      }
    }
    return obj;
  }

  /**
   * Object (target) Node ID
   * @member {String} obj
   */
  exports.prototype['obj'] = undefined;
  /**
   * Predicate (relation) ID
   * @member {String} pred
   */
  exports.prototype['pred'] = undefined;
  /**
   * Subject (source) Node ID
   * @member {String} sub
   */
  exports.prototype['sub'] = undefined;



  return exports;
}));


