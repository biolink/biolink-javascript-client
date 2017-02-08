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
    define(['ApiClient', 'model/Association', 'model/AssociationResults'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Association'), require('../model/AssociationResults'));
  } else {
    // Browser globals (root is window)
    if (!root.BioLinkApi) {
      root.BioLinkApi = {};
    }
    root.BioLinkApi.AssociationApi = factory(root.BioLinkApi.ApiClient, root.BioLinkApi.Association, root.BioLinkApi.AssociationResults);
  }
}(this, function(ApiClient, Association, AssociationResults) {
  'use strict';

  /**
   * Association service.
   * @module api/AssociationApi
   * @version 0.1
   */

  /**
   * Constructs a new AssociationApi. 
   * @alias module:api/AssociationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAssociationObject operation.
     * @callback module:api/AssociationApi~getAssociationObjectCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Association>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the association with a given identifier
     * An association connects, at a minimum, two things, designated subject and object, via some relationship. Associations also include evidence, provenance etc.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.rows number of rows (default to 10)
     * @param {Boolean} opts.flExcludesEvidence If set, excludes evidence objects in response
     * @param {String} opts.evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
     * @param {Integer} opts.page Page number (default to 1)
     * @param {String} opts._object OBJECT id, e.g. HP:0011927. Includes inferred by default
     * @param {String} opts.subject SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default
     * @param {String} opts.subjectTaxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
     * @param {Boolean} opts.graphize If set, includes graph object in response
     * @param {String} opts.mapIdentifiers Prefix to map all IDs to. E.g. NCBIGene
     * @param {module:api/AssociationApi~getAssociationObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/Association>}
     */
    this.getAssociationObject = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getAssociationObject";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'rows': opts['rows'],
        'fl_excludes_evidence': opts['flExcludesEvidence'],
        'evidence': opts['evidence'],
        'page': opts['page'],
        'object': opts['_object'],
        'subject': opts['subject'],
        'subject_taxon': opts['subjectTaxon'],
        'graphize': opts['graphize'],
        'map_identifiers': opts['mapIdentifiers']
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
        '/association/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssociationSearch operation.
     * @callback module:api/AssociationApi~getAssociationSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AssociationResults>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matching associations
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.rows number of rows (default to 10)
     * @param {Boolean} opts.flExcludesEvidence If set, excludes evidence objects in response
     * @param {String} opts.evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
     * @param {Integer} opts.page Page number (default to 1)
     * @param {String} opts._object OBJECT id, e.g. HP:0011927. Includes inferred by default
     * @param {String} opts.subject SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default
     * @param {String} opts.subjectTaxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
     * @param {Boolean} opts.graphize If set, includes graph object in response
     * @param {String} opts.mapIdentifiers Prefix to map all IDs to. E.g. NCBIGene
     * @param {module:api/AssociationApi~getAssociationSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/AssociationResults>}
     */
    this.getAssociationSearch = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'rows': opts['rows'],
        'fl_excludes_evidence': opts['flExcludesEvidence'],
        'evidence': opts['evidence'],
        'page': opts['page'],
        'object': opts['_object'],
        'subject': opts['subject'],
        'subject_taxon': opts['subjectTaxon'],
        'graphize': opts['graphize'],
        'map_identifiers': opts['mapIdentifiers']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [AssociationResults];

      return this.apiClient.callApi(
        '/association/find/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssociationSearch_0 operation.
     * @callback module:api/AssociationApi~getAssociationSearch_0Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AssociationResults>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matching associations
     * @param {String} objectCategory CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease
     * @param {String} subjectCategory CATEGORY of entity at link SUBJECT (source), e.g. gene, disease, genotype
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.rows number of rows (default to 10)
     * @param {Boolean} opts.flExcludesEvidence If set, excludes evidence objects in response
     * @param {String} opts.evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
     * @param {Integer} opts.page Page number (default to 1)
     * @param {String} opts._object OBJECT id, e.g. HP:0011927. Includes inferred by default
     * @param {String} opts.subject SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default
     * @param {String} opts.subjectTaxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
     * @param {Boolean} opts.graphize If set, includes graph object in response
     * @param {String} opts.mapIdentifiers Prefix to map all IDs to. E.g. NCBIGene
     * @param {module:api/AssociationApi~getAssociationSearch_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/AssociationResults>}
     */
    this.getAssociationSearch_0 = function(objectCategory, subjectCategory, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'objectCategory' is set
      if (objectCategory == undefined || objectCategory == null) {
        throw "Missing the required parameter 'objectCategory' when calling getAssociationSearch_0";
      }

      // verify the required parameter 'subjectCategory' is set
      if (subjectCategory == undefined || subjectCategory == null) {
        throw "Missing the required parameter 'subjectCategory' when calling getAssociationSearch_0";
      }


      var pathParams = {
        'object_category': objectCategory,
        'subject_category': subjectCategory
      };
      var queryParams = {
        'rows': opts['rows'],
        'fl_excludes_evidence': opts['flExcludesEvidence'],
        'evidence': opts['evidence'],
        'page': opts['page'],
        'object': opts['_object'],
        'subject': opts['subject'],
        'subject_taxon': opts['subjectTaxon'],
        'graphize': opts['graphize'],
        'map_identifiers': opts['mapIdentifiers']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [AssociationResults];

      return this.apiClient.callApi(
        '/association/find/{subject_category}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssociationSearch_1 operation.
     * @callback module:api/AssociationApi~getAssociationSearch_1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AssociationResults>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matching associations
     * @param {String} objectCategory CATEGORY of entity at link OBJECT (target), e.g. phenotype, disease
     * @param {String} subjectCategory CATEGORY of entity at link SUBJECT (source), e.g. gene, disease, genotype
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.rows number of rows (default to 10)
     * @param {Boolean} opts.flExcludesEvidence If set, excludes evidence objects in response
     * @param {String} opts.evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
     * @param {Integer} opts.page Page number (default to 1)
     * @param {String} opts._object OBJECT id, e.g. HP:0011927. Includes inferred by default
     * @param {String} opts.subject SUBJECT id, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357. Includes inferred by default
     * @param {String} opts.subjectTaxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
     * @param {Boolean} opts.graphize If set, includes graph object in response
     * @param {String} opts.mapIdentifiers Prefix to map all IDs to. E.g. NCBIGene
     * @param {module:api/AssociationApi~getAssociationSearch_1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/AssociationResults>}
     */
    this.getAssociationSearch_1 = function(objectCategory, subjectCategory, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'objectCategory' is set
      if (objectCategory == undefined || objectCategory == null) {
        throw "Missing the required parameter 'objectCategory' when calling getAssociationSearch_1";
      }

      // verify the required parameter 'subjectCategory' is set
      if (subjectCategory == undefined || subjectCategory == null) {
        throw "Missing the required parameter 'subjectCategory' when calling getAssociationSearch_1";
      }


      var pathParams = {
        'object_category': objectCategory,
        'subject_category': subjectCategory
      };
      var queryParams = {
        'rows': opts['rows'],
        'fl_excludes_evidence': opts['flExcludesEvidence'],
        'evidence': opts['evidence'],
        'page': opts['page'],
        'object': opts['_object'],
        'subject': opts['subject'],
        'subject_taxon': opts['subjectTaxon'],
        'graphize': opts['graphize'],
        'map_identifiers': opts['mapIdentifiers']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [AssociationResults];

      return this.apiClient.callApi(
        '/association/find/{subject_category}/{object_category}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssociationsFrom operation.
     * @callback module:api/AssociationApi~getAssociationsFromCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AssociationResults>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns associations connecting two entities
     * Given two entities (e.g. a particular gene and a particular disease), if these two entities are connected (directly or indirectly), then return the association objects describing the connection.
     * @param {String} _object E.g. e.g. MP:0013765, can also be a biological entity such as a gene
     * @param {String} subject E.g. e.g. MGI:1342287
     * @param {Object} opts Optional parameters
     * @param {String} opts.objectCategory e.g. disease, phenotype, gene
     * @param {String} opts.mapIdentifiers Prefix to map all IDs to. E.g. NCBIGene
     * @param {String} opts.evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
     * @param {String} opts.subjectCategory e.g. gene, genotype, disease
     * @param {Integer} opts.page Page number (default to 1)
     * @param {Boolean} opts.flExcludesEvidence If set, excludes evidence objects in response
     * @param {String} opts.subjectTaxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
     * @param {Boolean} opts.graphize If set, includes graph object in response
     * @param {Integer} opts.rows number of rows (default to 10)
     * @param {Boolean} opts.useCompactAssociations If true, returns results in compact associations format
     * @param {module:api/AssociationApi~getAssociationsFromCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/AssociationResults>}
     */
    this.getAssociationsFrom = function(_object, subject, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter '_object' is set
      if (_object == undefined || _object == null) {
        throw "Missing the required parameter '_object' when calling getAssociationsFrom";
      }

      // verify the required parameter 'subject' is set
      if (subject == undefined || subject == null) {
        throw "Missing the required parameter 'subject' when calling getAssociationsFrom";
      }


      var pathParams = {
        'object': _object,
        'subject': subject
      };
      var queryParams = {
        'object_category': opts['objectCategory'],
        'map_identifiers': opts['mapIdentifiers'],
        'evidence': opts['evidence'],
        'subject_category': opts['subjectCategory'],
        'page': opts['page'],
        'fl_excludes_evidence': opts['flExcludesEvidence'],
        'subject_taxon': opts['subjectTaxon'],
        'graphize': opts['graphize'],
        'rows': opts['rows'],
        'use_compact_associations': opts['useCompactAssociations']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [AssociationResults];

      return this.apiClient.callApi(
        '/association/between/{subject}/{object}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssociationsFrom_0 operation.
     * @callback module:api/AssociationApi~getAssociationsFrom_0Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AssociationResults>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matching associations
     * @param {String} subject E.g. e.g. NCBIGene:84570
     * @param {Object} opts Optional parameters
     * @param {String} opts.objectCategory e.g. disease, phenotype, gene
     * @param {String} opts.mapIdentifiers Prefix to map all IDs to. E.g. NCBIGene
     * @param {String} opts.evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
     * @param {String} opts.subjectCategory e.g. gene, genotype, disease
     * @param {Integer} opts.page Page number (default to 1)
     * @param {Boolean} opts.flExcludesEvidence If set, excludes evidence objects in response
     * @param {String} opts.subjectTaxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
     * @param {Boolean} opts.graphize If set, includes graph object in response
     * @param {Integer} opts.rows number of rows (default to 10)
     * @param {Boolean} opts.useCompactAssociations If true, returns results in compact associations format
     * @param {module:api/AssociationApi~getAssociationsFrom_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/AssociationResults>}
     */
    this.getAssociationsFrom_0 = function(subject, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'subject' is set
      if (subject == undefined || subject == null) {
        throw "Missing the required parameter 'subject' when calling getAssociationsFrom_0";
      }


      var pathParams = {
        'subject': subject
      };
      var queryParams = {
        'object_category': opts['objectCategory'],
        'map_identifiers': opts['mapIdentifiers'],
        'evidence': opts['evidence'],
        'subject_category': opts['subjectCategory'],
        'page': opts['page'],
        'fl_excludes_evidence': opts['flExcludesEvidence'],
        'subject_taxon': opts['subjectTaxon'],
        'graphize': opts['graphize'],
        'rows': opts['rows'],
        'use_compact_associations': opts['useCompactAssociations']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [AssociationResults];

      return this.apiClient.callApi(
        '/association/from/{subject}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssociationsTo operation.
     * @callback module:api/AssociationApi~getAssociationsToCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AssociationResults>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of matching associations
     * @param {String} _object E.g. e.g. MP:0013765, can also be a biological entity such as a gene
     * @param {Object} opts Optional parameters
     * @param {String} opts.objectCategory e.g. disease, phenotype, gene
     * @param {String} opts.mapIdentifiers Prefix to map all IDs to. E.g. NCBIGene
     * @param {String} opts.evidence Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.                     
     * @param {String} opts.subjectCategory e.g. gene, genotype, disease
     * @param {Integer} opts.page Page number (default to 1)
     * @param {Boolean} opts.flExcludesEvidence If set, excludes evidence objects in response
     * @param {String} opts.subjectTaxon SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
     * @param {Boolean} opts.graphize If set, includes graph object in response
     * @param {Integer} opts.rows number of rows (default to 10)
     * @param {Boolean} opts.useCompactAssociations If true, returns results in compact associations format
     * @param {module:api/AssociationApi~getAssociationsToCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/AssociationResults>}
     */
    this.getAssociationsTo = function(_object, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter '_object' is set
      if (_object == undefined || _object == null) {
        throw "Missing the required parameter '_object' when calling getAssociationsTo";
      }


      var pathParams = {
        'object': _object
      };
      var queryParams = {
        'object_category': opts['objectCategory'],
        'map_identifiers': opts['mapIdentifiers'],
        'evidence': opts['evidence'],
        'subject_category': opts['subjectCategory'],
        'page': opts['page'],
        'fl_excludes_evidence': opts['flExcludesEvidence'],
        'subject_taxon': opts['subjectTaxon'],
        'graphize': opts['graphize'],
        'rows': opts['rows'],
        'use_compact_associations': opts['useCompactAssociations']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [AssociationResults];

      return this.apiClient.callApi(
        '/association/to/{object}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
