'use strict';Object.defineProperty(exports, "__esModule", { value: true });
/**
                                                                             *  Enumerates the possible actions of a role.
                                                                             *  An action defines the type of an operation that will be
                                                                             *  executed on a "resource" by a "role".
                                                                             *  This is known as CRUD (CREATE, READ, UPDATE, DELETE).
                                                                             *  @enum {String}
                                                                             *  @memberof! AccessControl
                                                                             */
var Action = {
  /**
                *  Specifies a CREATE action to be performed on a resource.
                *  For example, an HTTP POST request or an INSERT database operation.
                *  @type {String}
                */
  CREATE: 'create',
  /**
                     *  Specifies a READ action to be performed on a resource.
                     *  For example, an HTTP GET request or an database SELECT operation.
                     *  @type {String}
                     */
  READ: 'read',
  /**
                 *  Specifies an UPDATE action to be performed on a resource.
                 *  For example, an HTTP PUT or POST request or an database UPDATE operation.
                 *  @type {String}
                 */
  UPDATE: 'update',
  /**
                     *  Specifies a DELETE action to be performed on a resource.
                     *  For example, an HTTP DELETE request or a database DELETE operation.
                     *  @type {String}
                     */
  DELETE: 'delete' };


/**
                       *  @private
                       */
var actions = Object.keys(Action).map(function (item) {return item.toLowerCase();});

/**
                                                                                      *  Enumerates the possible possessions of a resource, for an action.
                                                                                      *  A possession defines whether the access is granted/denied for ANY or OWN resource(s).
                                                                                      *  @enum {String}
                                                                                      *  @memberof! AccessControl
                                                                                      */
var Possession = {
  /**
                    *  Indicates that the action is (or not) to be performed on **own**
                    *  resource(s) of the current subject.
                    *  @type {String}
                    */
  OWN: 'own',
  /**
               *  Indicates that the action is (or not) to be performed on **any**
               *  resource(s); including *own* resource(s) of the current subject.
               *  @type {String}
               */
  ANY: 'any' };


/**
                 *  @private
                 */
var possessions = Object.keys(Possession).map(function (item) {return item.toLowerCase();});exports.default =

Object.freeze({
  Action: Action,
  Possession: Possession,

  actions: actions,
  possessions: possessions });
