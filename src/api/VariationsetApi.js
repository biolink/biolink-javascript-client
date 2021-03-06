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
    define(['ApiClient', 'model/Association', 'model/VariantSet', 'model/PageOfVariantSets'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Association'), require('../model/VariantSet'), require('../model/PageOfVariantSets'));
  } else {
    // Browser globals (root is window)
    if (!root.BioLinkApi) {
      root.BioLinkApi = {};
    }
    root.BioLinkApi.VariationsetApi = factory(root.BioLinkApi.ApiClient, root.BioLinkApi.Association, root.BioLinkApi.VariantSet, root.BioLinkApi.PageOfVariantSets);
  }
}(this, function(ApiClient, Association, VariantSet, PageOfVariantSets) {
  'use strict';

  /**
   * Variationset service.
   * @module api/VariationsetApi
   * @version 0.1
   */

  /**
   * Constructs a new VariationsetApi. 
   * @alias module:api/VariationsetApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteVariantSetItem operation.
     * @callback module:api/VariationsetApi~deleteVariantSetItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes variant set
     * @param {String} id 
     * @param {String} id2 
     * @param {String} id3 
     * @param {module:api/VariationsetApi~deleteVariantSetItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteVariantSetItem = function(id, id2, id3, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteVariantSetItem";
      }

      // verify the required parameter 'id2' is set
      if (id2 == undefined || id2 == null) {
        throw "Missing the required parameter 'id2' when calling deleteVariantSetItem";
      }

      // verify the required parameter 'id3' is set
      if (id3 == undefined || id3 == null) {
        throw "Missing the required parameter 'id3' when calling deleteVariantSetItem";
      }


      var pathParams = {
        'id': id,
        'id': id2,
        'id': id3
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
      var returnType = null;

      return this.apiClient.callApi(
        '/variation/set/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnalyze operation.
     * @callback module:api/VariationsetApi~getAnalyzeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Association>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matches
     * @param {String} id 
     * @param {module:api/VariationsetApi~getAnalyzeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Association>}
     */
    this.getAnalyze = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getAnalyze";
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
        '/variation/set/analyze/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVariantSetItem operation.
     * @callback module:api/VariationsetApi~getVariantSetItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VariantSet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a variant set
     * @param {String} id 
     * @param {module:api/VariationsetApi~getVariantSetItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/VariantSet}
     */
    this.getVariantSetItem = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getVariantSetItem";
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
      var returnType = VariantSet;

      return this.apiClient.callApi(
        '/variation/set/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVariantSetsArchiveCollection operation.
     * @callback module:api/VariationsetApi~getVariantSetsArchiveCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOfVariantSets} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of variant sets from a specified time period
     * @param {Integer} year 
     * @param {Integer} month 
     * @param {Integer} day 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page number (default to 1)
     * @param {Integer} opts.perPage Results per page {error_msg} (default to 10)
     * @param {module:api/VariationsetApi~getVariantSetsArchiveCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOfVariantSets}
     */
    this.getVariantSetsArchiveCollection = function(year, month, day, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year == undefined || year == null) {
        throw "Missing the required parameter 'year' when calling getVariantSetsArchiveCollection";
      }

      // verify the required parameter 'month' is set
      if (month == undefined || month == null) {
        throw "Missing the required parameter 'month' when calling getVariantSetsArchiveCollection";
      }

      // verify the required parameter 'day' is set
      if (day == undefined || day == null) {
        throw "Missing the required parameter 'day' when calling getVariantSetsArchiveCollection";
      }


      var pathParams = {
        'year': year,
        'month': month,
        'day': day
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOfVariantSets;

      return this.apiClient.callApi(
        '/variation/set/archive/{year}/{month}/{day}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getVariantSetsCollection operation.
     * @callback module:api/VariationsetApi~getVariantSetsCollectionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOfVariantSets} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of variant sets
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page number (default to 1)
     * @param {Integer} opts.perPage Results per page {error_msg} (default to 10)
     * @param {module:api/VariationsetApi~getVariantSetsCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PageOfVariantSets}
     */
    this.getVariantSetsCollection = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PageOfVariantSets;

      return this.apiClient.callApi(
        '/variation/set/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postVariantSetsCollection operation.
     * @callback module:api/VariationsetApi~postVariantSetsCollectionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new variant set
     * @param {module:model/VariantSet} payload 
     * @param {module:api/VariationsetApi~postVariantSetsCollectionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postVariantSetsCollection = function(payload, callback) {
      var postBody = payload;

      // verify the required parameter 'payload' is set
      if (payload == undefined || payload == null) {
        throw "Missing the required parameter 'payload' when calling postVariantSetsCollection";
      }


      var pathParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/variation/set/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putVariantSetItem operation.
     * @callback module:api/VariationsetApi~putVariantSetItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a variant set
     * @param {String} id 
     * @param {String} id2 
     * @param {module:model/VariantSet} payload 
     * @param {module:api/VariationsetApi~putVariantSetItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putVariantSetItem = function(id, id2, payload, callback) {
      var postBody = payload;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling putVariantSetItem";
      }

      // verify the required parameter 'id2' is set
      if (id2 == undefined || id2 == null) {
        throw "Missing the required parameter 'id2' when calling putVariantSetItem";
      }

      // verify the required parameter 'payload' is set
      if (payload == undefined || payload == null) {
        throw "Missing the required parameter 'payload' when calling putVariantSetItem";
      }


      var pathParams = {
        'id': id,
        'id': id2
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
      var returnType = null;

      return this.apiClient.callApi(
        '/variation/set/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
