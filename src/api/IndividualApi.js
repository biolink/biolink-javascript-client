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
    root.BioLinkApi.IndividualApi = factory(root.BioLinkApi.ApiClient, root.BioLinkApi.Association);
  }
}(this, function(ApiClient, Association) {
  'use strict';

  /**
   * Individual service.
   * @module api/IndividualApi
   * @version 0.1
   */

  /**
   * Constructs a new IndividualApi. 
   * @alias module:api/IndividualApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getIndividual operation.
     * @callback module:api/IndividualApi~getIndividualCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Association>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matches
     * @param {String} id 
     * @param {module:api/IndividualApi~getIndividualCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Association>}
     */
    this.getIndividual = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getIndividual";
      }


      var pathParams = {
        'id': id
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
        '/individual/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPedigree operation.
     * @callback module:api/IndividualApi~getPedigreeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Association>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matches
     * @param {String} id 
     * @param {module:api/IndividualApi~getPedigreeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Association>}
     */
    this.getPedigree = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getPedigree";
      }


      var pathParams = {
        'id': id
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
        '/individual/pedigree/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));