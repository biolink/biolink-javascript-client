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
    define(['ApiClient', 'model/Association'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Association'));
  } else {
    // Browser globals (root is window)
    if (!root.BioLinkApi) {
      root.BioLinkApi = {};
    }
    root.BioLinkApi.IdentifiermapperApi = factory(root.BioLinkApi.ApiClient, root.BioLinkApi.Association);
  }
}(this, function(ApiClient, Association) {
  'use strict';

  /**
   * Identifiermapper service.
   * @module api/IdentifiermapperApi
   * @version 0.1
   */

  /**
   * Constructs a new IdentifiermapperApi. 
   * @alias module:api/IdentifiermapperApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPrefixCollection operation.
     * @callback module:api/IdentifiermapperApi~getPrefixCollectionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Association>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * TODO maps a list of identifiers from a source to a target
     * @param {String} source 
     * @param {String} target 
     * @param {module:api/IdentifiermapperApi~getPrefixCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Association>}
     */
    this.getPrefixCollection = function(source, target, callback) {
      var postBody = null;

      // verify the required parameter 'source' is set
      if (source == undefined || source == null) {
        throw "Missing the required parameter 'source' when calling getPrefixCollection";
      }

      // verify the required parameter 'target' is set
      if (target == undefined || target == null) {
        throw "Missing the required parameter 'target' when calling getPrefixCollection";
      }


      var pathParams = {
        'source': source,
        'target': target
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Association];

      return this.apiClient.callApi(
        '/identifier/mapper/{source}/{target}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));