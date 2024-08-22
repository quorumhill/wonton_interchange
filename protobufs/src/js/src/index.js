/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots.wonton_interchange_protobufs || ($protobuf.roots.wonton_interchange_protobufs = {});

export const com = $root.com = (() => {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    const com = {};

    com.quorumhill = (function() {

        /**
         * Namespace quorumhill.
         * @memberof com
         * @namespace
         */
        const quorumhill = {};

        quorumhill.wonton = (function() {

            /**
             * Namespace wonton.
             * @memberof com.quorumhill
             * @namespace
             */
            const wonton = {};

            wonton.ApiPledgeInvalidationRequest = (function() {

                /**
                 * Properties of an ApiPledgeInvalidationRequest.
                 * @memberof com.quorumhill.wonton
                 * @interface IApiPledgeInvalidationRequest
                 * @property {com.quorumhill.wonton.PledgeId|null} [pledgeId] ApiPledgeInvalidationRequest pledgeId
                 * @property {string|null} [reason] ApiPledgeInvalidationRequest reason
                 */

                /**
                 * Constructs a new ApiPledgeInvalidationRequest.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an ApiPledgeInvalidationRequest.
                 * @implements IApiPledgeInvalidationRequest
                 * @constructor
                 * @param {com.quorumhill.wonton.IApiPledgeInvalidationRequest=} [properties] Properties to set
                 */
                function ApiPledgeInvalidationRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ApiPledgeInvalidationRequest pledgeId.
                 * @member {com.quorumhill.wonton.PledgeId|null|undefined} pledgeId
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationRequest
                 * @instance
                 */
                ApiPledgeInvalidationRequest.prototype.pledgeId = null;

                /**
                 * ApiPledgeInvalidationRequest reason.
                 * @member {string} reason
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationRequest
                 * @instance
                 */
                ApiPledgeInvalidationRequest.prototype.reason = "";

                /**
                 * Encodes the specified ApiPledgeInvalidationRequest message. Does not implicitly {@link com.quorumhill.wonton.ApiPledgeInvalidationRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationRequest
                 * @static
                 * @param {com.quorumhill.wonton.ApiPledgeInvalidationRequest} message ApiPledgeInvalidationRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ApiPledgeInvalidationRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.pledgeId != null && Object.hasOwnProperty.call(message, "pledgeId"))
                        $root.com.quorumhill.wonton.PledgeId.encode(message.pledgeId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                    return writer;
                };

                /**
                 * Decodes an ApiPledgeInvalidationRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.ApiPledgeInvalidationRequest} ApiPledgeInvalidationRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ApiPledgeInvalidationRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.ApiPledgeInvalidationRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.pledgeId = $root.com.quorumhill.wonton.PledgeId.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.reason = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an ApiPledgeInvalidationRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.ApiPledgeInvalidationRequest} ApiPledgeInvalidationRequest
                 */
                ApiPledgeInvalidationRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.ApiPledgeInvalidationRequest)
                        return object;
                    let message = new $root.com.quorumhill.wonton.ApiPledgeInvalidationRequest();
                    if (object.pledgeId != null) {
                        if (typeof object.pledgeId !== "object")
                            throw TypeError(".com.quorumhill.wonton.ApiPledgeInvalidationRequest.pledgeId: object expected");
                        message.pledgeId = $root.com.quorumhill.wonton.PledgeId.fromObject(object.pledgeId);
                    }
                    if (object.reason != null)
                        message.reason = String(object.reason);
                    return message;
                };

                /**
                 * Creates a plain object from an ApiPledgeInvalidationRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationRequest
                 * @static
                 * @param {com.quorumhill.wonton.ApiPledgeInvalidationRequest} message ApiPledgeInvalidationRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ApiPledgeInvalidationRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.pledgeId = null;
                        object.reason = "";
                    }
                    if (message.pledgeId != null && message.hasOwnProperty("pledgeId"))
                        object.pledgeId = $root.com.quorumhill.wonton.PledgeId.toObject(message.pledgeId, options);
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        object.reason = message.reason;
                    return object;
                };

                /**
                 * Converts this ApiPledgeInvalidationRequest to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ApiPledgeInvalidationRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ApiPledgeInvalidationRequest
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ApiPledgeInvalidationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.ApiPledgeInvalidationRequest";
                };

                return ApiPledgeInvalidationRequest;
            })();

            wonton.ApiPledgeInvalidationResponse = (function() {

                /**
                 * Properties of an ApiPledgeInvalidationResponse.
                 * @memberof com.quorumhill.wonton
                 * @interface IApiPledgeInvalidationResponse
                 */

                /**
                 * Constructs a new ApiPledgeInvalidationResponse.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an ApiPledgeInvalidationResponse.
                 * @implements IApiPledgeInvalidationResponse
                 * @constructor
                 * @param {com.quorumhill.wonton.IApiPledgeInvalidationResponse=} [properties] Properties to set
                 */
                function ApiPledgeInvalidationResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified ApiPledgeInvalidationResponse message. Does not implicitly {@link com.quorumhill.wonton.ApiPledgeInvalidationResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationResponse
                 * @static
                 * @param {com.quorumhill.wonton.ApiPledgeInvalidationResponse} message ApiPledgeInvalidationResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ApiPledgeInvalidationResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes an ApiPledgeInvalidationResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.ApiPledgeInvalidationResponse} ApiPledgeInvalidationResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ApiPledgeInvalidationResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.ApiPledgeInvalidationResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an ApiPledgeInvalidationResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.ApiPledgeInvalidationResponse} ApiPledgeInvalidationResponse
                 */
                ApiPledgeInvalidationResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.ApiPledgeInvalidationResponse)
                        return object;
                    return new $root.com.quorumhill.wonton.ApiPledgeInvalidationResponse();
                };

                /**
                 * Creates a plain object from an ApiPledgeInvalidationResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationResponse
                 * @static
                 * @param {com.quorumhill.wonton.ApiPledgeInvalidationResponse} message ApiPledgeInvalidationResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ApiPledgeInvalidationResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ApiPledgeInvalidationResponse to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ApiPledgeInvalidationResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ApiPledgeInvalidationResponse
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.ApiPledgeInvalidationResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ApiPledgeInvalidationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.ApiPledgeInvalidationResponse";
                };

                return ApiPledgeInvalidationResponse;
            })();

            wonton.ApiPledgeStructureConditionRequest = (function() {

                /**
                 * Properties of an ApiPledgeStructureConditionRequest.
                 * @memberof com.quorumhill.wonton
                 * @interface IApiPledgeStructureConditionRequest
                 * @property {com.quorumhill.wonton.PledgeId|null} [pledgeId] ApiPledgeStructureConditionRequest pledgeId
                 * @property {com.quorumhill.wonton.PledgeCondition|null} [commitmentConditionFormatStructured] ApiPledgeStructureConditionRequest commitmentConditionFormatStructured
                 */

                /**
                 * Constructs a new ApiPledgeStructureConditionRequest.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an ApiPledgeStructureConditionRequest.
                 * @implements IApiPledgeStructureConditionRequest
                 * @constructor
                 * @param {com.quorumhill.wonton.IApiPledgeStructureConditionRequest=} [properties] Properties to set
                 */
                function ApiPledgeStructureConditionRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ApiPledgeStructureConditionRequest pledgeId.
                 * @member {com.quorumhill.wonton.PledgeId|null|undefined} pledgeId
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionRequest
                 * @instance
                 */
                ApiPledgeStructureConditionRequest.prototype.pledgeId = null;

                /**
                 * ApiPledgeStructureConditionRequest commitmentConditionFormatStructured.
                 * @member {com.quorumhill.wonton.PledgeCondition|null|undefined} commitmentConditionFormatStructured
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionRequest
                 * @instance
                 */
                ApiPledgeStructureConditionRequest.prototype.commitmentConditionFormatStructured = null;

                /**
                 * Encodes the specified ApiPledgeStructureConditionRequest message. Does not implicitly {@link com.quorumhill.wonton.ApiPledgeStructureConditionRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionRequest
                 * @static
                 * @param {com.quorumhill.wonton.ApiPledgeStructureConditionRequest} message ApiPledgeStructureConditionRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ApiPledgeStructureConditionRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.pledgeId != null && Object.hasOwnProperty.call(message, "pledgeId"))
                        $root.com.quorumhill.wonton.PledgeId.encode(message.pledgeId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.commitmentConditionFormatStructured != null && Object.hasOwnProperty.call(message, "commitmentConditionFormatStructured"))
                        $root.com.quorumhill.wonton.PledgeCondition.encode(message.commitmentConditionFormatStructured, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an ApiPledgeStructureConditionRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.ApiPledgeStructureConditionRequest} ApiPledgeStructureConditionRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ApiPledgeStructureConditionRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.ApiPledgeStructureConditionRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.pledgeId = $root.com.quorumhill.wonton.PledgeId.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.commitmentConditionFormatStructured = $root.com.quorumhill.wonton.PledgeCondition.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an ApiPledgeStructureConditionRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.ApiPledgeStructureConditionRequest} ApiPledgeStructureConditionRequest
                 */
                ApiPledgeStructureConditionRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.ApiPledgeStructureConditionRequest)
                        return object;
                    let message = new $root.com.quorumhill.wonton.ApiPledgeStructureConditionRequest();
                    if (object.pledgeId != null) {
                        if (typeof object.pledgeId !== "object")
                            throw TypeError(".com.quorumhill.wonton.ApiPledgeStructureConditionRequest.pledgeId: object expected");
                        message.pledgeId = $root.com.quorumhill.wonton.PledgeId.fromObject(object.pledgeId);
                    }
                    if (object.commitmentConditionFormatStructured != null) {
                        if (typeof object.commitmentConditionFormatStructured !== "object")
                            throw TypeError(".com.quorumhill.wonton.ApiPledgeStructureConditionRequest.commitmentConditionFormatStructured: object expected");
                        message.commitmentConditionFormatStructured = $root.com.quorumhill.wonton.PledgeCondition.fromObject(object.commitmentConditionFormatStructured);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an ApiPledgeStructureConditionRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionRequest
                 * @static
                 * @param {com.quorumhill.wonton.ApiPledgeStructureConditionRequest} message ApiPledgeStructureConditionRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ApiPledgeStructureConditionRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.pledgeId = null;
                        object.commitmentConditionFormatStructured = null;
                    }
                    if (message.pledgeId != null && message.hasOwnProperty("pledgeId"))
                        object.pledgeId = $root.com.quorumhill.wonton.PledgeId.toObject(message.pledgeId, options);
                    if (message.commitmentConditionFormatStructured != null && message.hasOwnProperty("commitmentConditionFormatStructured"))
                        object.commitmentConditionFormatStructured = $root.com.quorumhill.wonton.PledgeCondition.toObject(message.commitmentConditionFormatStructured, options);
                    return object;
                };

                /**
                 * Converts this ApiPledgeStructureConditionRequest to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ApiPledgeStructureConditionRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ApiPledgeStructureConditionRequest
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ApiPledgeStructureConditionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.ApiPledgeStructureConditionRequest";
                };

                return ApiPledgeStructureConditionRequest;
            })();

            wonton.ApiPledgeStructureConditionResponse = (function() {

                /**
                 * Properties of an ApiPledgeStructureConditionResponse.
                 * @memberof com.quorumhill.wonton
                 * @interface IApiPledgeStructureConditionResponse
                 */

                /**
                 * Constructs a new ApiPledgeStructureConditionResponse.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an ApiPledgeStructureConditionResponse.
                 * @implements IApiPledgeStructureConditionResponse
                 * @constructor
                 * @param {com.quorumhill.wonton.IApiPledgeStructureConditionResponse=} [properties] Properties to set
                 */
                function ApiPledgeStructureConditionResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified ApiPledgeStructureConditionResponse message. Does not implicitly {@link com.quorumhill.wonton.ApiPledgeStructureConditionResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionResponse
                 * @static
                 * @param {com.quorumhill.wonton.ApiPledgeStructureConditionResponse} message ApiPledgeStructureConditionResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ApiPledgeStructureConditionResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes an ApiPledgeStructureConditionResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.ApiPledgeStructureConditionResponse} ApiPledgeStructureConditionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ApiPledgeStructureConditionResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.ApiPledgeStructureConditionResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an ApiPledgeStructureConditionResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.ApiPledgeStructureConditionResponse} ApiPledgeStructureConditionResponse
                 */
                ApiPledgeStructureConditionResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.ApiPledgeStructureConditionResponse)
                        return object;
                    return new $root.com.quorumhill.wonton.ApiPledgeStructureConditionResponse();
                };

                /**
                 * Creates a plain object from an ApiPledgeStructureConditionResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionResponse
                 * @static
                 * @param {com.quorumhill.wonton.ApiPledgeStructureConditionResponse} message ApiPledgeStructureConditionResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ApiPledgeStructureConditionResponse.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ApiPledgeStructureConditionResponse to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ApiPledgeStructureConditionResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ApiPledgeStructureConditionResponse
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.ApiPledgeStructureConditionResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ApiPledgeStructureConditionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.ApiPledgeStructureConditionResponse";
                };

                return ApiPledgeStructureConditionResponse;
            })();

            wonton.PledgeId = (function() {

                /**
                 * Properties of a PledgeId.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeId
                 * @property {string|null} [versionForm] PledgeId versionForm
                 */

                /**
                 * Constructs a new PledgeId.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeId.
                 * @implements IPledgeId
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeId=} [properties] Properties to set
                 */
                function PledgeId(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeId versionForm.
                 * @member {string|null|undefined} versionForm
                 * @memberof com.quorumhill.wonton.PledgeId
                 * @instance
                 */
                PledgeId.prototype.versionForm = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * PledgeId version.
                 * @member {"versionForm"|undefined} version
                 * @memberof com.quorumhill.wonton.PledgeId
                 * @instance
                 */
                Object.defineProperty(PledgeId.prototype, "version", {
                    get: $util.oneOfGetter($oneOfFields = ["versionForm"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified PledgeId message. Does not implicitly {@link com.quorumhill.wonton.PledgeId.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeId
                 * @static
                 * @param {com.quorumhill.wonton.PledgeId} message PledgeId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.versionForm != null && Object.hasOwnProperty.call(message, "versionForm"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.versionForm);
                    return writer;
                };

                /**
                 * Decodes a PledgeId message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeId} PledgeId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeId();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.versionForm = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeId} PledgeId
                 */
                PledgeId.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeId)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeId();
                    if (object.versionForm != null)
                        message.versionForm = String(object.versionForm);
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeId
                 * @static
                 * @param {com.quorumhill.wonton.PledgeId} message PledgeId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.versionForm != null && message.hasOwnProperty("versionForm")) {
                        object.versionForm = message.versionForm;
                        if (options.oneofs)
                            object.version = "versionForm";
                    }
                    return object;
                };

                /**
                 * Converts this PledgeId to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeId
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeId
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeId";
                };

                return PledgeId;
            })();

            wonton.PledgeCreator = (function() {

                /**
                 * Properties of a PledgeCreator.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeCreator
                 * @property {com.quorumhill.wonton.UserType.Enum|null} [type] PledgeCreator type
                 * @property {string|null} [username] PledgeCreator username
                 * @property {string|null} [password] PledgeCreator password
                 */

                /**
                 * Constructs a new PledgeCreator.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeCreator.
                 * @implements IPledgeCreator
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeCreator=} [properties] Properties to set
                 */
                function PledgeCreator(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeCreator type.
                 * @member {com.quorumhill.wonton.UserType.Enum} type
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @instance
                 */
                PledgeCreator.prototype.type = 0;

                /**
                 * PledgeCreator username.
                 * @member {string} username
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @instance
                 */
                PledgeCreator.prototype.username = "";

                /**
                 * PledgeCreator password.
                 * @member {string} password
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @instance
                 */
                PledgeCreator.prototype.password = "";

                /**
                 * Encodes the specified PledgeCreator message. Does not implicitly {@link com.quorumhill.wonton.PledgeCreator.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @static
                 * @param {com.quorumhill.wonton.PledgeCreator} message PledgeCreator message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeCreator.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                    return writer;
                };

                /**
                 * Decodes a PledgeCreator message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeCreator} PledgeCreator
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeCreator.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeCreator();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.int32();
                                break;
                            }
                        case 2: {
                                message.username = reader.string();
                                break;
                            }
                        case 3: {
                                message.password = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeCreator message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeCreator} PledgeCreator
                 */
                PledgeCreator.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeCreator)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeCreator();
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.type = 0;
                        break;
                    case "SYSTEM":
                    case 1:
                        message.type = 1;
                        break;
                    case "UNIVERSITY":
                    case 2:
                        message.type = 2;
                        break;
                    }
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeCreator message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @static
                 * @param {com.quorumhill.wonton.PledgeCreator} message PledgeCreator
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeCreator.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.type = options.enums === String ? "UNKNOWN" : 0;
                        object.username = "";
                        object.password = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.com.quorumhill.wonton.UserType.Enum[message.type] === undefined ? message.type : $root.com.quorumhill.wonton.UserType.Enum[message.type] : message.type;
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this PledgeCreator to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeCreator.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeCreator
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeCreator
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeCreator.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeCreator";
                };

                return PledgeCreator;
            })();

            wonton.PledgeSource = (function() {

                /**
                 * Properties of a PledgeSource.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeSource
                 */

                /**
                 * Constructs a new PledgeSource.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeSource.
                 * @implements IPledgeSource
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeSource=} [properties] Properties to set
                 */
                function PledgeSource(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified PledgeSource message. Does not implicitly {@link com.quorumhill.wonton.PledgeSource.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeSource
                 * @static
                 * @param {com.quorumhill.wonton.PledgeSource} message PledgeSource message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeSource.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes a PledgeSource message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeSource
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeSource} PledgeSource
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeSource.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeSource();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeSource message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeSource
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeSource} PledgeSource
                 */
                PledgeSource.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeSource)
                        return object;
                    return new $root.com.quorumhill.wonton.PledgeSource();
                };

                /**
                 * Creates a plain object from a PledgeSource message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeSource
                 * @static
                 * @param {com.quorumhill.wonton.PledgeSource} message PledgeSource
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeSource.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this PledgeSource to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeSource
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeSource.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeSource
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeSource
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeSource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeSource";
                };

                /**
                 * Enum enum.
                 * @name com.quorumhill.wonton.PledgeSource.Enum
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} FORM=1 FORM value
                 * @property {number} API=2 API value
                 */
                PledgeSource.Enum = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "FORM"] = 1;
                    values[valuesById[2] = "API"] = 2;
                    return values;
                })();

                return PledgeSource;
            })();

            wonton.PledgeMetadata = (function() {

                /**
                 * Properties of a PledgeMetadata.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeMetadata
                 * @property {com.quorumhill.wonton.PledgeCreator|null} [creator] PledgeMetadata creator
                 * @property {com.quorumhill.wonton.PledgeSource.Enum|null} [source] PledgeMetadata source
                 */

                /**
                 * Constructs a new PledgeMetadata.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeMetadata.
                 * @implements IPledgeMetadata
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeMetadata=} [properties] Properties to set
                 */
                function PledgeMetadata(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeMetadata creator.
                 * @member {com.quorumhill.wonton.PledgeCreator|null|undefined} creator
                 * @memberof com.quorumhill.wonton.PledgeMetadata
                 * @instance
                 */
                PledgeMetadata.prototype.creator = null;

                /**
                 * PledgeMetadata source.
                 * @member {com.quorumhill.wonton.PledgeSource.Enum} source
                 * @memberof com.quorumhill.wonton.PledgeMetadata
                 * @instance
                 */
                PledgeMetadata.prototype.source = 0;

                /**
                 * Encodes the specified PledgeMetadata message. Does not implicitly {@link com.quorumhill.wonton.PledgeMetadata.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeMetadata
                 * @static
                 * @param {com.quorumhill.wonton.PledgeMetadata} message PledgeMetadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeMetadata.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.creator != null && Object.hasOwnProperty.call(message, "creator"))
                        $root.com.quorumhill.wonton.PledgeCreator.encode(message.creator, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.source);
                    return writer;
                };

                /**
                 * Decodes a PledgeMetadata message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeMetadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeMetadata} PledgeMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeMetadata.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeMetadata();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.creator = $root.com.quorumhill.wonton.PledgeCreator.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.source = reader.int32();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeMetadata message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeMetadata
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeMetadata} PledgeMetadata
                 */
                PledgeMetadata.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeMetadata)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeMetadata();
                    if (object.creator != null) {
                        if (typeof object.creator !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeMetadata.creator: object expected");
                        message.creator = $root.com.quorumhill.wonton.PledgeCreator.fromObject(object.creator);
                    }
                    switch (object.source) {
                    default:
                        if (typeof object.source === "number") {
                            message.source = object.source;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.source = 0;
                        break;
                    case "FORM":
                    case 1:
                        message.source = 1;
                        break;
                    case "API":
                    case 2:
                        message.source = 2;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeMetadata message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeMetadata
                 * @static
                 * @param {com.quorumhill.wonton.PledgeMetadata} message PledgeMetadata
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeMetadata.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.creator = null;
                        object.source = options.enums === String ? "UNKNOWN" : 0;
                    }
                    if (message.creator != null && message.hasOwnProperty("creator"))
                        object.creator = $root.com.quorumhill.wonton.PledgeCreator.toObject(message.creator, options);
                    if (message.source != null && message.hasOwnProperty("source"))
                        object.source = options.enums === String ? $root.com.quorumhill.wonton.PledgeSource.Enum[message.source] === undefined ? message.source : $root.com.quorumhill.wonton.PledgeSource.Enum[message.source] : message.source;
                    return object;
                };

                /**
                 * Converts this PledgeMetadata to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeMetadata
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeMetadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeMetadata
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeMetadata
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeMetadata";
                };

                return PledgeMetadata;
            })();

            wonton.PledgeConditionCombinerFunction = (function() {

                /**
                 * Properties of a PledgeConditionCombinerFunction.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionCombinerFunction
                 */

                /**
                 * Constructs a new PledgeConditionCombinerFunction.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionCombinerFunction.
                 * @implements IPledgeConditionCombinerFunction
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionCombinerFunction=} [properties] Properties to set
                 */
                function PledgeConditionCombinerFunction(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified PledgeConditionCombinerFunction message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionCombinerFunction.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionCombinerFunction
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionCombinerFunction} message PledgeConditionCombinerFunction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionCombinerFunction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionCombinerFunction message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionCombinerFunction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionCombinerFunction} PledgeConditionCombinerFunction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionCombinerFunction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionCombinerFunction();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionCombinerFunction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionCombinerFunction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionCombinerFunction} PledgeConditionCombinerFunction
                 */
                PledgeConditionCombinerFunction.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionCombinerFunction)
                        return object;
                    return new $root.com.quorumhill.wonton.PledgeConditionCombinerFunction();
                };

                /**
                 * Creates a plain object from a PledgeConditionCombinerFunction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionCombinerFunction
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionCombinerFunction} message PledgeConditionCombinerFunction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionCombinerFunction.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this PledgeConditionCombinerFunction to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionCombinerFunction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionCombinerFunction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionCombinerFunction
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionCombinerFunction
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionCombinerFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionCombinerFunction";
                };

                /**
                 * Enum enum.
                 * @name com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} AND=1 AND value
                 * @property {number} OR=2 OR value
                 */
                PledgeConditionCombinerFunction.Enum = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "AND"] = 1;
                    values[valuesById[2] = "OR"] = 2;
                    return values;
                })();

                return PledgeConditionCombinerFunction;
            })();

            wonton.PledgeConditionComparatorFunction = (function() {

                /**
                 * Properties of a PledgeConditionComparatorFunction.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionComparatorFunction
                 */

                /**
                 * Constructs a new PledgeConditionComparatorFunction.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionComparatorFunction.
                 * @implements IPledgeConditionComparatorFunction
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionComparatorFunction=} [properties] Properties to set
                 */
                function PledgeConditionComparatorFunction(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified PledgeConditionComparatorFunction message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionComparatorFunction.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionComparatorFunction
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionComparatorFunction} message PledgeConditionComparatorFunction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionComparatorFunction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionComparatorFunction message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionComparatorFunction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionComparatorFunction} PledgeConditionComparatorFunction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionComparatorFunction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionComparatorFunction();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionComparatorFunction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionComparatorFunction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionComparatorFunction} PledgeConditionComparatorFunction
                 */
                PledgeConditionComparatorFunction.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionComparatorFunction)
                        return object;
                    return new $root.com.quorumhill.wonton.PledgeConditionComparatorFunction();
                };

                /**
                 * Creates a plain object from a PledgeConditionComparatorFunction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionComparatorFunction
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionComparatorFunction} message PledgeConditionComparatorFunction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionComparatorFunction.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this PledgeConditionComparatorFunction to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionComparatorFunction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionComparatorFunction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionComparatorFunction
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionComparatorFunction
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionComparatorFunction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionComparatorFunction";
                };

                /**
                 * Enum enum.
                 * @name com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} GREATER_EQUAL=1 GREATER_EQUAL value
                 */
                PledgeConditionComparatorFunction.Enum = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "GREATER_EQUAL"] = 1;
                    return values;
                })();

                return PledgeConditionComparatorFunction;
            })();

            wonton.PledgeConditionPredicateCombiner = (function() {

                /**
                 * Properties of a PledgeConditionPredicateCombiner.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionPredicateCombiner
                 * @property {com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum|null} [combiner] PledgeConditionPredicateCombiner combiner
                 * @property {Array.<com.quorumhill.wonton.PledgeConditionPredicate>|null} [clauses] PledgeConditionPredicateCombiner clauses
                 */

                /**
                 * Constructs a new PledgeConditionPredicateCombiner.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionPredicateCombiner.
                 * @implements IPledgeConditionPredicateCombiner
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionPredicateCombiner=} [properties] Properties to set
                 */
                function PledgeConditionPredicateCombiner(properties) {
                    this.clauses = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionPredicateCombiner combiner.
                 * @member {com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum} combiner
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCombiner
                 * @instance
                 */
                PledgeConditionPredicateCombiner.prototype.combiner = 0;

                /**
                 * PledgeConditionPredicateCombiner clauses.
                 * @member {Array.<com.quorumhill.wonton.PledgeConditionPredicate>} clauses
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCombiner
                 * @instance
                 */
                PledgeConditionPredicateCombiner.prototype.clauses = $util.emptyArray;

                /**
                 * Encodes the specified PledgeConditionPredicateCombiner message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionPredicateCombiner.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCombiner
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionPredicateCombiner} message PledgeConditionPredicateCombiner message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionPredicateCombiner.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.combiner != null && Object.hasOwnProperty.call(message, "combiner"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.combiner);
                    if (message.clauses != null && message.clauses.length)
                        for (let i = 0; i < message.clauses.length; ++i)
                            $root.com.quorumhill.wonton.PledgeConditionPredicate.encode(message.clauses[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionPredicateCombiner message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCombiner
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionPredicateCombiner} PledgeConditionPredicateCombiner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionPredicateCombiner.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionPredicateCombiner();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.combiner = reader.int32();
                                break;
                            }
                        case 2: {
                                if (!(message.clauses && message.clauses.length))
                                    message.clauses = [];
                                message.clauses.push($root.com.quorumhill.wonton.PledgeConditionPredicate.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionPredicateCombiner message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCombiner
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionPredicateCombiner} PledgeConditionPredicateCombiner
                 */
                PledgeConditionPredicateCombiner.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionPredicateCombiner)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionPredicateCombiner();
                    switch (object.combiner) {
                    default:
                        if (typeof object.combiner === "number") {
                            message.combiner = object.combiner;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.combiner = 0;
                        break;
                    case "AND":
                    case 1:
                        message.combiner = 1;
                        break;
                    case "OR":
                    case 2:
                        message.combiner = 2;
                        break;
                    }
                    if (object.clauses) {
                        if (!Array.isArray(object.clauses))
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionPredicateCombiner.clauses: array expected");
                        message.clauses = [];
                        for (let i = 0; i < object.clauses.length; ++i) {
                            if (typeof object.clauses[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.PledgeConditionPredicateCombiner.clauses: object expected");
                            message.clauses[i] = $root.com.quorumhill.wonton.PledgeConditionPredicate.fromObject(object.clauses[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionPredicateCombiner message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCombiner
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionPredicateCombiner} message PledgeConditionPredicateCombiner
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionPredicateCombiner.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.clauses = [];
                    if (options.defaults)
                        object.combiner = options.enums === String ? "UNKNOWN" : 0;
                    if (message.combiner != null && message.hasOwnProperty("combiner"))
                        object.combiner = options.enums === String ? $root.com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum[message.combiner] === undefined ? message.combiner : $root.com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum[message.combiner] : message.combiner;
                    if (message.clauses && message.clauses.length) {
                        object.clauses = [];
                        for (let j = 0; j < message.clauses.length; ++j)
                            object.clauses[j] = $root.com.quorumhill.wonton.PledgeConditionPredicate.toObject(message.clauses[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this PledgeConditionPredicateCombiner to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCombiner
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionPredicateCombiner.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionPredicateCombiner
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCombiner
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionPredicateCombiner.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionPredicateCombiner";
                };

                return PledgeConditionPredicateCombiner;
            })();

            wonton.PledgeConditionPredicateUniversityCount = (function() {

                /**
                 * Properties of a PledgeConditionPredicateUniversityCount.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionPredicateUniversityCount
                 * @property {com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum|null} [comparator] PledgeConditionPredicateUniversityCount comparator
                 * @property {Long|null} [universityCount] PledgeConditionPredicateUniversityCount universityCount
                 */

                /**
                 * Constructs a new PledgeConditionPredicateUniversityCount.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionPredicateUniversityCount.
                 * @implements IPledgeConditionPredicateUniversityCount
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionPredicateUniversityCount=} [properties] Properties to set
                 */
                function PledgeConditionPredicateUniversityCount(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionPredicateUniversityCount comparator.
                 * @member {com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum} comparator
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateUniversityCount
                 * @instance
                 */
                PledgeConditionPredicateUniversityCount.prototype.comparator = 0;

                /**
                 * PledgeConditionPredicateUniversityCount universityCount.
                 * @member {Long} universityCount
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateUniversityCount
                 * @instance
                 */
                PledgeConditionPredicateUniversityCount.prototype.universityCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified PledgeConditionPredicateUniversityCount message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionPredicateUniversityCount.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateUniversityCount
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionPredicateUniversityCount} message PledgeConditionPredicateUniversityCount message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionPredicateUniversityCount.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.comparator != null && Object.hasOwnProperty.call(message, "comparator"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.comparator);
                    if (message.universityCount != null && Object.hasOwnProperty.call(message, "universityCount"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.universityCount);
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionPredicateUniversityCount message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateUniversityCount
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionPredicateUniversityCount} PledgeConditionPredicateUniversityCount
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionPredicateUniversityCount.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionPredicateUniversityCount();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.comparator = reader.int32();
                                break;
                            }
                        case 2: {
                                message.universityCount = reader.int64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionPredicateUniversityCount message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateUniversityCount
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionPredicateUniversityCount} PledgeConditionPredicateUniversityCount
                 */
                PledgeConditionPredicateUniversityCount.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionPredicateUniversityCount)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionPredicateUniversityCount();
                    switch (object.comparator) {
                    default:
                        if (typeof object.comparator === "number") {
                            message.comparator = object.comparator;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.comparator = 0;
                        break;
                    case "GREATER_EQUAL":
                    case 1:
                        message.comparator = 1;
                        break;
                    }
                    if (object.universityCount != null)
                        if ($util.Long)
                            (message.universityCount = $util.Long.fromValue(object.universityCount)).unsigned = false;
                        else if (typeof object.universityCount === "string")
                            message.universityCount = parseInt(object.universityCount, 10);
                        else if (typeof object.universityCount === "number")
                            message.universityCount = object.universityCount;
                        else if (typeof object.universityCount === "object")
                            message.universityCount = new $util.LongBits(object.universityCount.low >>> 0, object.universityCount.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionPredicateUniversityCount message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateUniversityCount
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionPredicateUniversityCount} message PledgeConditionPredicateUniversityCount
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionPredicateUniversityCount.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.comparator = options.enums === String ? "UNKNOWN" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.universityCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.universityCount = options.longs === String ? "0" : 0;
                    }
                    if (message.comparator != null && message.hasOwnProperty("comparator"))
                        object.comparator = options.enums === String ? $root.com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum[message.comparator] === undefined ? message.comparator : $root.com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum[message.comparator] : message.comparator;
                    if (message.universityCount != null && message.hasOwnProperty("universityCount"))
                        if (typeof message.universityCount === "number")
                            object.universityCount = options.longs === String ? String(message.universityCount) : message.universityCount;
                        else
                            object.universityCount = options.longs === String ? $util.Long.prototype.toString.call(message.universityCount) : options.longs === Number ? new $util.LongBits(message.universityCount.low >>> 0, message.universityCount.high >>> 0).toNumber() : message.universityCount;
                    return object;
                };

                /**
                 * Converts this PledgeConditionPredicateUniversityCount to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateUniversityCount
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionPredicateUniversityCount.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionPredicateUniversityCount
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateUniversityCount
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionPredicateUniversityCount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionPredicateUniversityCount";
                };

                return PledgeConditionPredicateUniversityCount;
            })();

            wonton.PledgeConditionPredicateCommitmentValue = (function() {

                /**
                 * Properties of a PledgeConditionPredicateCommitmentValue.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionPredicateCommitmentValue
                 * @property {com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum|null} [comparator] PledgeConditionPredicateCommitmentValue comparator
                 * @property {Long|null} [commitmentValueUsd] PledgeConditionPredicateCommitmentValue commitmentValueUsd
                 */

                /**
                 * Constructs a new PledgeConditionPredicateCommitmentValue.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionPredicateCommitmentValue.
                 * @implements IPledgeConditionPredicateCommitmentValue
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionPredicateCommitmentValue=} [properties] Properties to set
                 */
                function PledgeConditionPredicateCommitmentValue(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionPredicateCommitmentValue comparator.
                 * @member {com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum} comparator
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue
                 * @instance
                 */
                PledgeConditionPredicateCommitmentValue.prototype.comparator = 0;

                /**
                 * PledgeConditionPredicateCommitmentValue commitmentValueUsd.
                 * @member {Long} commitmentValueUsd
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue
                 * @instance
                 */
                PledgeConditionPredicateCommitmentValue.prototype.commitmentValueUsd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified PledgeConditionPredicateCommitmentValue message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue} message PledgeConditionPredicateCommitmentValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionPredicateCommitmentValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.comparator != null && Object.hasOwnProperty.call(message, "comparator"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.comparator);
                    if (message.commitmentValueUsd != null && Object.hasOwnProperty.call(message, "commitmentValueUsd"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.commitmentValueUsd);
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionPredicateCommitmentValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue} PledgeConditionPredicateCommitmentValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionPredicateCommitmentValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.comparator = reader.int32();
                                break;
                            }
                        case 2: {
                                message.commitmentValueUsd = reader.int64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionPredicateCommitmentValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue} PledgeConditionPredicateCommitmentValue
                 */
                PledgeConditionPredicateCommitmentValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue();
                    switch (object.comparator) {
                    default:
                        if (typeof object.comparator === "number") {
                            message.comparator = object.comparator;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.comparator = 0;
                        break;
                    case "GREATER_EQUAL":
                    case 1:
                        message.comparator = 1;
                        break;
                    }
                    if (object.commitmentValueUsd != null)
                        if ($util.Long)
                            (message.commitmentValueUsd = $util.Long.fromValue(object.commitmentValueUsd)).unsigned = false;
                        else if (typeof object.commitmentValueUsd === "string")
                            message.commitmentValueUsd = parseInt(object.commitmentValueUsd, 10);
                        else if (typeof object.commitmentValueUsd === "number")
                            message.commitmentValueUsd = object.commitmentValueUsd;
                        else if (typeof object.commitmentValueUsd === "object")
                            message.commitmentValueUsd = new $util.LongBits(object.commitmentValueUsd.low >>> 0, object.commitmentValueUsd.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionPredicateCommitmentValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue} message PledgeConditionPredicateCommitmentValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionPredicateCommitmentValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.comparator = options.enums === String ? "UNKNOWN" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.commitmentValueUsd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.commitmentValueUsd = options.longs === String ? "0" : 0;
                    }
                    if (message.comparator != null && message.hasOwnProperty("comparator"))
                        object.comparator = options.enums === String ? $root.com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum[message.comparator] === undefined ? message.comparator : $root.com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum[message.comparator] : message.comparator;
                    if (message.commitmentValueUsd != null && message.hasOwnProperty("commitmentValueUsd"))
                        if (typeof message.commitmentValueUsd === "number")
                            object.commitmentValueUsd = options.longs === String ? String(message.commitmentValueUsd) : message.commitmentValueUsd;
                        else
                            object.commitmentValueUsd = options.longs === String ? $util.Long.prototype.toString.call(message.commitmentValueUsd) : options.longs === Number ? new $util.LongBits(message.commitmentValueUsd.low >>> 0, message.commitmentValueUsd.high >>> 0).toNumber() : message.commitmentValueUsd;
                    return object;
                };

                /**
                 * Converts this PledgeConditionPredicateCommitmentValue to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionPredicateCommitmentValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionPredicateCommitmentValue
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionPredicateCommitmentValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue";
                };

                return PledgeConditionPredicateCommitmentValue;
            })();

            wonton.PledgeConditionPredicate = (function() {

                /**
                 * Properties of a PledgeConditionPredicate.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionPredicate
                 * @property {com.quorumhill.wonton.PledgeConditionPredicateCombiner|null} [predicateCombiner] PledgeConditionPredicate predicateCombiner
                 * @property {com.quorumhill.wonton.PledgeConditionPredicateUniversityCount|null} [predicateUniversityCount] PledgeConditionPredicate predicateUniversityCount
                 * @property {com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue|null} [predicateCommitmentValue] PledgeConditionPredicate predicateCommitmentValue
                 */

                /**
                 * Constructs a new PledgeConditionPredicate.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionPredicate.
                 * @implements IPledgeConditionPredicate
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionPredicate=} [properties] Properties to set
                 */
                function PledgeConditionPredicate(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionPredicate predicateCombiner.
                 * @member {com.quorumhill.wonton.PledgeConditionPredicateCombiner|null|undefined} predicateCombiner
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @instance
                 */
                PledgeConditionPredicate.prototype.predicateCombiner = null;

                /**
                 * PledgeConditionPredicate predicateUniversityCount.
                 * @member {com.quorumhill.wonton.PledgeConditionPredicateUniversityCount|null|undefined} predicateUniversityCount
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @instance
                 */
                PledgeConditionPredicate.prototype.predicateUniversityCount = null;

                /**
                 * PledgeConditionPredicate predicateCommitmentValue.
                 * @member {com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue|null|undefined} predicateCommitmentValue
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @instance
                 */
                PledgeConditionPredicate.prototype.predicateCommitmentValue = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * PledgeConditionPredicate predicate.
                 * @member {"predicateCombiner"|"predicateUniversityCount"|"predicateCommitmentValue"|undefined} predicate
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @instance
                 */
                Object.defineProperty(PledgeConditionPredicate.prototype, "predicate", {
                    get: $util.oneOfGetter($oneOfFields = ["predicateCombiner", "predicateUniversityCount", "predicateCommitmentValue"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified PledgeConditionPredicate message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionPredicate.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionPredicate} message PledgeConditionPredicate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionPredicate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.predicateCombiner != null && Object.hasOwnProperty.call(message, "predicateCombiner"))
                        $root.com.quorumhill.wonton.PledgeConditionPredicateCombiner.encode(message.predicateCombiner, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.predicateUniversityCount != null && Object.hasOwnProperty.call(message, "predicateUniversityCount"))
                        $root.com.quorumhill.wonton.PledgeConditionPredicateUniversityCount.encode(message.predicateUniversityCount, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.predicateCommitmentValue != null && Object.hasOwnProperty.call(message, "predicateCommitmentValue"))
                        $root.com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue.encode(message.predicateCommitmentValue, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionPredicate message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionPredicate} PledgeConditionPredicate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionPredicate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionPredicate();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.predicateCombiner = $root.com.quorumhill.wonton.PledgeConditionPredicateCombiner.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.predicateUniversityCount = $root.com.quorumhill.wonton.PledgeConditionPredicateUniversityCount.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.predicateCommitmentValue = $root.com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionPredicate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionPredicate} PledgeConditionPredicate
                 */
                PledgeConditionPredicate.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionPredicate)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionPredicate();
                    if (object.predicateCombiner != null) {
                        if (typeof object.predicateCombiner !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionPredicate.predicateCombiner: object expected");
                        message.predicateCombiner = $root.com.quorumhill.wonton.PledgeConditionPredicateCombiner.fromObject(object.predicateCombiner);
                    }
                    if (object.predicateUniversityCount != null) {
                        if (typeof object.predicateUniversityCount !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionPredicate.predicateUniversityCount: object expected");
                        message.predicateUniversityCount = $root.com.quorumhill.wonton.PledgeConditionPredicateUniversityCount.fromObject(object.predicateUniversityCount);
                    }
                    if (object.predicateCommitmentValue != null) {
                        if (typeof object.predicateCommitmentValue !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionPredicate.predicateCommitmentValue: object expected");
                        message.predicateCommitmentValue = $root.com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue.fromObject(object.predicateCommitmentValue);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionPredicate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionPredicate} message PledgeConditionPredicate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionPredicate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.predicateCombiner != null && message.hasOwnProperty("predicateCombiner")) {
                        object.predicateCombiner = $root.com.quorumhill.wonton.PledgeConditionPredicateCombiner.toObject(message.predicateCombiner, options);
                        if (options.oneofs)
                            object.predicate = "predicateCombiner";
                    }
                    if (message.predicateUniversityCount != null && message.hasOwnProperty("predicateUniversityCount")) {
                        object.predicateUniversityCount = $root.com.quorumhill.wonton.PledgeConditionPredicateUniversityCount.toObject(message.predicateUniversityCount, options);
                        if (options.oneofs)
                            object.predicate = "predicateUniversityCount";
                    }
                    if (message.predicateCommitmentValue != null && message.hasOwnProperty("predicateCommitmentValue")) {
                        object.predicateCommitmentValue = $root.com.quorumhill.wonton.PledgeConditionPredicateCommitmentValue.toObject(message.predicateCommitmentValue, options);
                        if (options.oneofs)
                            object.predicate = "predicateCommitmentValue";
                    }
                    return object;
                };

                /**
                 * Converts this PledgeConditionPredicate to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionPredicate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionPredicate
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionPredicate
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionPredicate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionPredicate";
                };

                return PledgeConditionPredicate;
            })();

            wonton.PledgeConditionWhereCombiner = (function() {

                /**
                 * Properties of a PledgeConditionWhereCombiner.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionWhereCombiner
                 * @property {com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum|null} [combiner] PledgeConditionWhereCombiner combiner
                 * @property {Array.<com.quorumhill.wonton.PledgeConditionWhere>|null} [clauses] PledgeConditionWhereCombiner clauses
                 */

                /**
                 * Constructs a new PledgeConditionWhereCombiner.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionWhereCombiner.
                 * @implements IPledgeConditionWhereCombiner
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionWhereCombiner=} [properties] Properties to set
                 */
                function PledgeConditionWhereCombiner(properties) {
                    this.clauses = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionWhereCombiner combiner.
                 * @member {com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum} combiner
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCombiner
                 * @instance
                 */
                PledgeConditionWhereCombiner.prototype.combiner = 0;

                /**
                 * PledgeConditionWhereCombiner clauses.
                 * @member {Array.<com.quorumhill.wonton.PledgeConditionWhere>} clauses
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCombiner
                 * @instance
                 */
                PledgeConditionWhereCombiner.prototype.clauses = $util.emptyArray;

                /**
                 * Encodes the specified PledgeConditionWhereCombiner message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionWhereCombiner.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCombiner
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereCombiner} message PledgeConditionWhereCombiner message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionWhereCombiner.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.combiner != null && Object.hasOwnProperty.call(message, "combiner"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.combiner);
                    if (message.clauses != null && message.clauses.length)
                        for (let i = 0; i < message.clauses.length; ++i)
                            $root.com.quorumhill.wonton.PledgeConditionWhere.encode(message.clauses[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionWhereCombiner message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCombiner
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereCombiner} PledgeConditionWhereCombiner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionWhereCombiner.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionWhereCombiner();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.combiner = reader.int32();
                                break;
                            }
                        case 2: {
                                if (!(message.clauses && message.clauses.length))
                                    message.clauses = [];
                                message.clauses.push($root.com.quorumhill.wonton.PledgeConditionWhere.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionWhereCombiner message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCombiner
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereCombiner} PledgeConditionWhereCombiner
                 */
                PledgeConditionWhereCombiner.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionWhereCombiner)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionWhereCombiner();
                    switch (object.combiner) {
                    default:
                        if (typeof object.combiner === "number") {
                            message.combiner = object.combiner;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.combiner = 0;
                        break;
                    case "AND":
                    case 1:
                        message.combiner = 1;
                        break;
                    case "OR":
                    case 2:
                        message.combiner = 2;
                        break;
                    }
                    if (object.clauses) {
                        if (!Array.isArray(object.clauses))
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionWhereCombiner.clauses: array expected");
                        message.clauses = [];
                        for (let i = 0; i < object.clauses.length; ++i) {
                            if (typeof object.clauses[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.PledgeConditionWhereCombiner.clauses: object expected");
                            message.clauses[i] = $root.com.quorumhill.wonton.PledgeConditionWhere.fromObject(object.clauses[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionWhereCombiner message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCombiner
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereCombiner} message PledgeConditionWhereCombiner
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionWhereCombiner.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.clauses = [];
                    if (options.defaults)
                        object.combiner = options.enums === String ? "UNKNOWN" : 0;
                    if (message.combiner != null && message.hasOwnProperty("combiner"))
                        object.combiner = options.enums === String ? $root.com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum[message.combiner] === undefined ? message.combiner : $root.com.quorumhill.wonton.PledgeConditionCombinerFunction.Enum[message.combiner] : message.combiner;
                    if (message.clauses && message.clauses.length) {
                        object.clauses = [];
                        for (let j = 0; j < message.clauses.length; ++j)
                            object.clauses[j] = $root.com.quorumhill.wonton.PledgeConditionWhere.toObject(message.clauses[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this PledgeConditionWhereCombiner to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCombiner
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionWhereCombiner.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionWhereCombiner
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCombiner
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionWhereCombiner.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionWhereCombiner";
                };

                return PledgeConditionWhereCombiner;
            })();

            wonton.PledgeConditionWhereUniversityName = (function() {

                /**
                 * Properties of a PledgeConditionWhereUniversityName.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionWhereUniversityName
                 * @property {string|null} [domainName] PledgeConditionWhereUniversityName domainName
                 */

                /**
                 * Constructs a new PledgeConditionWhereUniversityName.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionWhereUniversityName.
                 * @implements IPledgeConditionWhereUniversityName
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionWhereUniversityName=} [properties] Properties to set
                 */
                function PledgeConditionWhereUniversityName(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionWhereUniversityName domainName.
                 * @member {string} domainName
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereUniversityName
                 * @instance
                 */
                PledgeConditionWhereUniversityName.prototype.domainName = "";

                /**
                 * Encodes the specified PledgeConditionWhereUniversityName message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionWhereUniversityName.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereUniversityName
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereUniversityName} message PledgeConditionWhereUniversityName message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionWhereUniversityName.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.domainName != null && Object.hasOwnProperty.call(message, "domainName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.domainName);
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionWhereUniversityName message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereUniversityName
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereUniversityName} PledgeConditionWhereUniversityName
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionWhereUniversityName.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionWhereUniversityName();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.domainName = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionWhereUniversityName message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereUniversityName
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereUniversityName} PledgeConditionWhereUniversityName
                 */
                PledgeConditionWhereUniversityName.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionWhereUniversityName)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionWhereUniversityName();
                    if (object.domainName != null)
                        message.domainName = String(object.domainName);
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionWhereUniversityName message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereUniversityName
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereUniversityName} message PledgeConditionWhereUniversityName
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionWhereUniversityName.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.domainName = "";
                    if (message.domainName != null && message.hasOwnProperty("domainName"))
                        object.domainName = message.domainName;
                    return object;
                };

                /**
                 * Converts this PledgeConditionWhereUniversityName to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereUniversityName
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionWhereUniversityName.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionWhereUniversityName
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereUniversityName
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionWhereUniversityName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionWhereUniversityName";
                };

                return PledgeConditionWhereUniversityName;
            })();

            wonton.PledgeConditionWhereCountryName = (function() {

                /**
                 * Properties of a PledgeConditionWhereCountryName.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionWhereCountryName
                 * @property {string|null} [countryCode] PledgeConditionWhereCountryName countryCode
                 */

                /**
                 * Constructs a new PledgeConditionWhereCountryName.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionWhereCountryName.
                 * @implements IPledgeConditionWhereCountryName
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionWhereCountryName=} [properties] Properties to set
                 */
                function PledgeConditionWhereCountryName(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionWhereCountryName countryCode.
                 * @member {string} countryCode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCountryName
                 * @instance
                 */
                PledgeConditionWhereCountryName.prototype.countryCode = "";

                /**
                 * Encodes the specified PledgeConditionWhereCountryName message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionWhereCountryName.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCountryName
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereCountryName} message PledgeConditionWhereCountryName message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionWhereCountryName.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.countryCode != null && Object.hasOwnProperty.call(message, "countryCode"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.countryCode);
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionWhereCountryName message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCountryName
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereCountryName} PledgeConditionWhereCountryName
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionWhereCountryName.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionWhereCountryName();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.countryCode = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionWhereCountryName message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCountryName
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereCountryName} PledgeConditionWhereCountryName
                 */
                PledgeConditionWhereCountryName.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionWhereCountryName)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionWhereCountryName();
                    if (object.countryCode != null)
                        message.countryCode = String(object.countryCode);
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionWhereCountryName message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCountryName
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereCountryName} message PledgeConditionWhereCountryName
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionWhereCountryName.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.countryCode = "";
                    if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                        object.countryCode = message.countryCode;
                    return object;
                };

                /**
                 * Converts this PledgeConditionWhereCountryName to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCountryName
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionWhereCountryName.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionWhereCountryName
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCountryName
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionWhereCountryName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionWhereCountryName";
                };

                return PledgeConditionWhereCountryName;
            })();

            wonton.PledgeConditionWhereCommitmentValueSlice = (function() {

                /**
                 * Properties of a PledgeConditionWhereCommitmentValueSlice.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionWhereCommitmentValueSlice
                 */

                /**
                 * Constructs a new PledgeConditionWhereCommitmentValueSlice.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionWhereCommitmentValueSlice.
                 * @implements IPledgeConditionWhereCommitmentValueSlice
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionWhereCommitmentValueSlice=} [properties] Properties to set
                 */
                function PledgeConditionWhereCommitmentValueSlice(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified PledgeConditionWhereCommitmentValueSlice message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice} message PledgeConditionWhereCommitmentValueSlice message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionWhereCommitmentValueSlice.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionWhereCommitmentValueSlice message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice} PledgeConditionWhereCommitmentValueSlice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionWhereCommitmentValueSlice.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionWhereCommitmentValueSlice message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice} PledgeConditionWhereCommitmentValueSlice
                 */
                PledgeConditionWhereCommitmentValueSlice.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice)
                        return object;
                    return new $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice();
                };

                /**
                 * Creates a plain object from a PledgeConditionWhereCommitmentValueSlice message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice} message PledgeConditionWhereCommitmentValueSlice
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionWhereCommitmentValueSlice.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this PledgeConditionWhereCommitmentValueSlice to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionWhereCommitmentValueSlice.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionWhereCommitmentValueSlice
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionWhereCommitmentValueSlice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice";
                };

                /**
                 * Enum enum.
                 * @name com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice.Enum
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} COUNTRY=1 COUNTRY value
                 * @property {number} UNIVERSITY=2 UNIVERSITY value
                 * @property {number} PLEDGE=3 PLEDGE value
                 */
                PledgeConditionWhereCommitmentValueSlice.Enum = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "COUNTRY"] = 1;
                    values[valuesById[2] = "UNIVERSITY"] = 2;
                    values[valuesById[3] = "PLEDGE"] = 3;
                    return values;
                })();

                return PledgeConditionWhereCommitmentValueSlice;
            })();

            wonton.PledgeConditionWhereCommitmentValue = (function() {

                /**
                 * Properties of a PledgeConditionWhereCommitmentValue.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionWhereCommitmentValue
                 * @property {com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice.Enum|null} [aggregationSlice] PledgeConditionWhereCommitmentValue aggregationSlice
                 * @property {com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum|null} [comparator] PledgeConditionWhereCommitmentValue comparator
                 * @property {Long|null} [commitmentValueUsd] PledgeConditionWhereCommitmentValue commitmentValueUsd
                 */

                /**
                 * Constructs a new PledgeConditionWhereCommitmentValue.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionWhereCommitmentValue.
                 * @implements IPledgeConditionWhereCommitmentValue
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionWhereCommitmentValue=} [properties] Properties to set
                 */
                function PledgeConditionWhereCommitmentValue(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionWhereCommitmentValue aggregationSlice.
                 * @member {com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice.Enum} aggregationSlice
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @instance
                 */
                PledgeConditionWhereCommitmentValue.prototype.aggregationSlice = 0;

                /**
                 * PledgeConditionWhereCommitmentValue comparator.
                 * @member {com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum} comparator
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @instance
                 */
                PledgeConditionWhereCommitmentValue.prototype.comparator = 0;

                /**
                 * PledgeConditionWhereCommitmentValue commitmentValueUsd.
                 * @member {Long} commitmentValueUsd
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @instance
                 */
                PledgeConditionWhereCommitmentValue.prototype.commitmentValueUsd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified PledgeConditionWhereCommitmentValue message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionWhereCommitmentValue.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereCommitmentValue} message PledgeConditionWhereCommitmentValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionWhereCommitmentValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.aggregationSlice != null && Object.hasOwnProperty.call(message, "aggregationSlice"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.aggregationSlice);
                    if (message.comparator != null && Object.hasOwnProperty.call(message, "comparator"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.comparator);
                    if (message.commitmentValueUsd != null && Object.hasOwnProperty.call(message, "commitmentValueUsd"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.commitmentValueUsd);
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionWhereCommitmentValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereCommitmentValue} PledgeConditionWhereCommitmentValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionWhereCommitmentValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValue();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.aggregationSlice = reader.int32();
                                break;
                            }
                        case 2: {
                                message.comparator = reader.int32();
                                break;
                            }
                        case 3: {
                                message.commitmentValueUsd = reader.int64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionWhereCommitmentValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionWhereCommitmentValue} PledgeConditionWhereCommitmentValue
                 */
                PledgeConditionWhereCommitmentValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValue)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValue();
                    switch (object.aggregationSlice) {
                    default:
                        if (typeof object.aggregationSlice === "number") {
                            message.aggregationSlice = object.aggregationSlice;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.aggregationSlice = 0;
                        break;
                    case "COUNTRY":
                    case 1:
                        message.aggregationSlice = 1;
                        break;
                    case "UNIVERSITY":
                    case 2:
                        message.aggregationSlice = 2;
                        break;
                    case "PLEDGE":
                    case 3:
                        message.aggregationSlice = 3;
                        break;
                    }
                    switch (object.comparator) {
                    default:
                        if (typeof object.comparator === "number") {
                            message.comparator = object.comparator;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.comparator = 0;
                        break;
                    case "GREATER_EQUAL":
                    case 1:
                        message.comparator = 1;
                        break;
                    }
                    if (object.commitmentValueUsd != null)
                        if ($util.Long)
                            (message.commitmentValueUsd = $util.Long.fromValue(object.commitmentValueUsd)).unsigned = false;
                        else if (typeof object.commitmentValueUsd === "string")
                            message.commitmentValueUsd = parseInt(object.commitmentValueUsd, 10);
                        else if (typeof object.commitmentValueUsd === "number")
                            message.commitmentValueUsd = object.commitmentValueUsd;
                        else if (typeof object.commitmentValueUsd === "object")
                            message.commitmentValueUsd = new $util.LongBits(object.commitmentValueUsd.low >>> 0, object.commitmentValueUsd.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionWhereCommitmentValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhereCommitmentValue} message PledgeConditionWhereCommitmentValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionWhereCommitmentValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.aggregationSlice = options.enums === String ? "UNKNOWN" : 0;
                        object.comparator = options.enums === String ? "UNKNOWN" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.commitmentValueUsd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.commitmentValueUsd = options.longs === String ? "0" : 0;
                    }
                    if (message.aggregationSlice != null && message.hasOwnProperty("aggregationSlice"))
                        object.aggregationSlice = options.enums === String ? $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice.Enum[message.aggregationSlice] === undefined ? message.aggregationSlice : $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValueSlice.Enum[message.aggregationSlice] : message.aggregationSlice;
                    if (message.comparator != null && message.hasOwnProperty("comparator"))
                        object.comparator = options.enums === String ? $root.com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum[message.comparator] === undefined ? message.comparator : $root.com.quorumhill.wonton.PledgeConditionComparatorFunction.Enum[message.comparator] : message.comparator;
                    if (message.commitmentValueUsd != null && message.hasOwnProperty("commitmentValueUsd"))
                        if (typeof message.commitmentValueUsd === "number")
                            object.commitmentValueUsd = options.longs === String ? String(message.commitmentValueUsd) : message.commitmentValueUsd;
                        else
                            object.commitmentValueUsd = options.longs === String ? $util.Long.prototype.toString.call(message.commitmentValueUsd) : options.longs === Number ? new $util.LongBits(message.commitmentValueUsd.low >>> 0, message.commitmentValueUsd.high >>> 0).toNumber() : message.commitmentValueUsd;
                    return object;
                };

                /**
                 * Converts this PledgeConditionWhereCommitmentValue to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionWhereCommitmentValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionWhereCommitmentValue
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionWhereCommitmentValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionWhereCommitmentValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionWhereCommitmentValue";
                };

                return PledgeConditionWhereCommitmentValue;
            })();

            wonton.PledgeConditionWhere = (function() {

                /**
                 * Properties of a PledgeConditionWhere.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeConditionWhere
                 * @property {com.quorumhill.wonton.PledgeConditionWhereCombiner|null} [whereCombiner] PledgeConditionWhere whereCombiner
                 * @property {com.quorumhill.wonton.PledgeConditionWhereUniversityName|null} [whereUniversityName] PledgeConditionWhere whereUniversityName
                 * @property {com.quorumhill.wonton.PledgeConditionWhereCountryName|null} [whereCountryName] PledgeConditionWhere whereCountryName
                 * @property {com.quorumhill.wonton.PledgeConditionWhereCommitmentValue|null} [whereCommitmentValue] PledgeConditionWhere whereCommitmentValue
                 */

                /**
                 * Constructs a new PledgeConditionWhere.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeConditionWhere.
                 * @implements IPledgeConditionWhere
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeConditionWhere=} [properties] Properties to set
                 */
                function PledgeConditionWhere(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeConditionWhere whereCombiner.
                 * @member {com.quorumhill.wonton.PledgeConditionWhereCombiner|null|undefined} whereCombiner
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @instance
                 */
                PledgeConditionWhere.prototype.whereCombiner = null;

                /**
                 * PledgeConditionWhere whereUniversityName.
                 * @member {com.quorumhill.wonton.PledgeConditionWhereUniversityName|null|undefined} whereUniversityName
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @instance
                 */
                PledgeConditionWhere.prototype.whereUniversityName = null;

                /**
                 * PledgeConditionWhere whereCountryName.
                 * @member {com.quorumhill.wonton.PledgeConditionWhereCountryName|null|undefined} whereCountryName
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @instance
                 */
                PledgeConditionWhere.prototype.whereCountryName = null;

                /**
                 * PledgeConditionWhere whereCommitmentValue.
                 * @member {com.quorumhill.wonton.PledgeConditionWhereCommitmentValue|null|undefined} whereCommitmentValue
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @instance
                 */
                PledgeConditionWhere.prototype.whereCommitmentValue = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * PledgeConditionWhere where.
                 * @member {"whereCombiner"|"whereUniversityName"|"whereCountryName"|"whereCommitmentValue"|undefined} where
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @instance
                 */
                Object.defineProperty(PledgeConditionWhere.prototype, "where", {
                    get: $util.oneOfGetter($oneOfFields = ["whereCombiner", "whereUniversityName", "whereCountryName", "whereCommitmentValue"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified PledgeConditionWhere message. Does not implicitly {@link com.quorumhill.wonton.PledgeConditionWhere.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhere} message PledgeConditionWhere message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeConditionWhere.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.whereCombiner != null && Object.hasOwnProperty.call(message, "whereCombiner"))
                        $root.com.quorumhill.wonton.PledgeConditionWhereCombiner.encode(message.whereCombiner, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.whereUniversityName != null && Object.hasOwnProperty.call(message, "whereUniversityName"))
                        $root.com.quorumhill.wonton.PledgeConditionWhereUniversityName.encode(message.whereUniversityName, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.whereCountryName != null && Object.hasOwnProperty.call(message, "whereCountryName"))
                        $root.com.quorumhill.wonton.PledgeConditionWhereCountryName.encode(message.whereCountryName, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.whereCommitmentValue != null && Object.hasOwnProperty.call(message, "whereCommitmentValue"))
                        $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValue.encode(message.whereCommitmentValue, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeConditionWhere message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeConditionWhere} PledgeConditionWhere
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeConditionWhere.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeConditionWhere();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.whereCombiner = $root.com.quorumhill.wonton.PledgeConditionWhereCombiner.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.whereUniversityName = $root.com.quorumhill.wonton.PledgeConditionWhereUniversityName.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.whereCountryName = $root.com.quorumhill.wonton.PledgeConditionWhereCountryName.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.whereCommitmentValue = $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValue.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeConditionWhere message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeConditionWhere} PledgeConditionWhere
                 */
                PledgeConditionWhere.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeConditionWhere)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeConditionWhere();
                    if (object.whereCombiner != null) {
                        if (typeof object.whereCombiner !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionWhere.whereCombiner: object expected");
                        message.whereCombiner = $root.com.quorumhill.wonton.PledgeConditionWhereCombiner.fromObject(object.whereCombiner);
                    }
                    if (object.whereUniversityName != null) {
                        if (typeof object.whereUniversityName !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionWhere.whereUniversityName: object expected");
                        message.whereUniversityName = $root.com.quorumhill.wonton.PledgeConditionWhereUniversityName.fromObject(object.whereUniversityName);
                    }
                    if (object.whereCountryName != null) {
                        if (typeof object.whereCountryName !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionWhere.whereCountryName: object expected");
                        message.whereCountryName = $root.com.quorumhill.wonton.PledgeConditionWhereCountryName.fromObject(object.whereCountryName);
                    }
                    if (object.whereCommitmentValue != null) {
                        if (typeof object.whereCommitmentValue !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeConditionWhere.whereCommitmentValue: object expected");
                        message.whereCommitmentValue = $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValue.fromObject(object.whereCommitmentValue);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeConditionWhere message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @static
                 * @param {com.quorumhill.wonton.PledgeConditionWhere} message PledgeConditionWhere
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeConditionWhere.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.whereCombiner != null && message.hasOwnProperty("whereCombiner")) {
                        object.whereCombiner = $root.com.quorumhill.wonton.PledgeConditionWhereCombiner.toObject(message.whereCombiner, options);
                        if (options.oneofs)
                            object.where = "whereCombiner";
                    }
                    if (message.whereUniversityName != null && message.hasOwnProperty("whereUniversityName")) {
                        object.whereUniversityName = $root.com.quorumhill.wonton.PledgeConditionWhereUniversityName.toObject(message.whereUniversityName, options);
                        if (options.oneofs)
                            object.where = "whereUniversityName";
                    }
                    if (message.whereCountryName != null && message.hasOwnProperty("whereCountryName")) {
                        object.whereCountryName = $root.com.quorumhill.wonton.PledgeConditionWhereCountryName.toObject(message.whereCountryName, options);
                        if (options.oneofs)
                            object.where = "whereCountryName";
                    }
                    if (message.whereCommitmentValue != null && message.hasOwnProperty("whereCommitmentValue")) {
                        object.whereCommitmentValue = $root.com.quorumhill.wonton.PledgeConditionWhereCommitmentValue.toObject(message.whereCommitmentValue, options);
                        if (options.oneofs)
                            object.where = "whereCommitmentValue";
                    }
                    return object;
                };

                /**
                 * Converts this PledgeConditionWhere to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeConditionWhere.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeConditionWhere
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeConditionWhere
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeConditionWhere.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeConditionWhere";
                };

                return PledgeConditionWhere;
            })();

            wonton.PledgeCondition = (function() {

                /**
                 * Properties of a PledgeCondition.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeCondition
                 * @property {com.quorumhill.wonton.PledgeConditionPredicate|null} [predicate] PledgeCondition predicate
                 * @property {com.quorumhill.wonton.PledgeConditionWhere|null} [where] PledgeCondition where
                 */

                /**
                 * Constructs a new PledgeCondition.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeCondition.
                 * @implements IPledgeCondition
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeCondition=} [properties] Properties to set
                 */
                function PledgeCondition(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeCondition predicate.
                 * @member {com.quorumhill.wonton.PledgeConditionPredicate|null|undefined} predicate
                 * @memberof com.quorumhill.wonton.PledgeCondition
                 * @instance
                 */
                PledgeCondition.prototype.predicate = null;

                /**
                 * PledgeCondition where.
                 * @member {com.quorumhill.wonton.PledgeConditionWhere|null|undefined} where
                 * @memberof com.quorumhill.wonton.PledgeCondition
                 * @instance
                 */
                PledgeCondition.prototype.where = null;

                /**
                 * Encodes the specified PledgeCondition message. Does not implicitly {@link com.quorumhill.wonton.PledgeCondition.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeCondition
                 * @static
                 * @param {com.quorumhill.wonton.PledgeCondition} message PledgeCondition message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeCondition.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.predicate != null && Object.hasOwnProperty.call(message, "predicate"))
                        $root.com.quorumhill.wonton.PledgeConditionPredicate.encode(message.predicate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.where != null && Object.hasOwnProperty.call(message, "where"))
                        $root.com.quorumhill.wonton.PledgeConditionWhere.encode(message.where, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeCondition message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeCondition
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeCondition} PledgeCondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeCondition.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeCondition();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.predicate = $root.com.quorumhill.wonton.PledgeConditionPredicate.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.where = $root.com.quorumhill.wonton.PledgeConditionWhere.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeCondition message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeCondition
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeCondition} PledgeCondition
                 */
                PledgeCondition.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeCondition)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeCondition();
                    if (object.predicate != null) {
                        if (typeof object.predicate !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeCondition.predicate: object expected");
                        message.predicate = $root.com.quorumhill.wonton.PledgeConditionPredicate.fromObject(object.predicate);
                    }
                    if (object.where != null) {
                        if (typeof object.where !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeCondition.where: object expected");
                        message.where = $root.com.quorumhill.wonton.PledgeConditionWhere.fromObject(object.where);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeCondition message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeCondition
                 * @static
                 * @param {com.quorumhill.wonton.PledgeCondition} message PledgeCondition
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeCondition.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.predicate = null;
                        object.where = null;
                    }
                    if (message.predicate != null && message.hasOwnProperty("predicate"))
                        object.predicate = $root.com.quorumhill.wonton.PledgeConditionPredicate.toObject(message.predicate, options);
                    if (message.where != null && message.hasOwnProperty("where"))
                        object.where = $root.com.quorumhill.wonton.PledgeConditionWhere.toObject(message.where, options);
                    return object;
                };

                /**
                 * Converts this PledgeCondition to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeCondition
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeCondition.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeCondition
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeCondition
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeCondition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeCondition";
                };

                return PledgeCondition;
            })();

            wonton.PledgeSwitchCondition = (function() {

                /**
                 * Properties of a PledgeSwitchCondition.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeSwitchCondition
                 * @property {string|null} [formatUnstructured] PledgeSwitchCondition formatUnstructured
                 * @property {com.quorumhill.wonton.PledgeCondition|null} [formatStructured] PledgeSwitchCondition formatStructured
                 */

                /**
                 * Constructs a new PledgeSwitchCondition.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeSwitchCondition.
                 * @implements IPledgeSwitchCondition
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeSwitchCondition=} [properties] Properties to set
                 */
                function PledgeSwitchCondition(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeSwitchCondition formatUnstructured.
                 * @member {string|null|undefined} formatUnstructured
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @instance
                 */
                PledgeSwitchCondition.prototype.formatUnstructured = null;

                /**
                 * PledgeSwitchCondition formatStructured.
                 * @member {com.quorumhill.wonton.PledgeCondition|null|undefined} formatStructured
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @instance
                 */
                PledgeSwitchCondition.prototype.formatStructured = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * PledgeSwitchCondition format.
                 * @member {"formatUnstructured"|"formatStructured"|undefined} format
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @instance
                 */
                Object.defineProperty(PledgeSwitchCondition.prototype, "format", {
                    get: $util.oneOfGetter($oneOfFields = ["formatUnstructured", "formatStructured"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified PledgeSwitchCondition message. Does not implicitly {@link com.quorumhill.wonton.PledgeSwitchCondition.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @static
                 * @param {com.quorumhill.wonton.PledgeSwitchCondition} message PledgeSwitchCondition message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeSwitchCondition.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.formatUnstructured != null && Object.hasOwnProperty.call(message, "formatUnstructured"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.formatUnstructured);
                    if (message.formatStructured != null && Object.hasOwnProperty.call(message, "formatStructured"))
                        $root.com.quorumhill.wonton.PledgeCondition.encode(message.formatStructured, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeSwitchCondition message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeSwitchCondition} PledgeSwitchCondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeSwitchCondition.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeSwitchCondition();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.formatUnstructured = reader.string();
                                break;
                            }
                        case 2: {
                                message.formatStructured = $root.com.quorumhill.wonton.PledgeCondition.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeSwitchCondition message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeSwitchCondition} PledgeSwitchCondition
                 */
                PledgeSwitchCondition.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeSwitchCondition)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeSwitchCondition();
                    if (object.formatUnstructured != null)
                        message.formatUnstructured = String(object.formatUnstructured);
                    if (object.formatStructured != null) {
                        if (typeof object.formatStructured !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeSwitchCondition.formatStructured: object expected");
                        message.formatStructured = $root.com.quorumhill.wonton.PledgeCondition.fromObject(object.formatStructured);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeSwitchCondition message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @static
                 * @param {com.quorumhill.wonton.PledgeSwitchCondition} message PledgeSwitchCondition
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeSwitchCondition.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.formatUnstructured != null && message.hasOwnProperty("formatUnstructured")) {
                        object.formatUnstructured = message.formatUnstructured;
                        if (options.oneofs)
                            object.format = "formatUnstructured";
                    }
                    if (message.formatStructured != null && message.hasOwnProperty("formatStructured")) {
                        object.formatStructured = $root.com.quorumhill.wonton.PledgeCondition.toObject(message.formatStructured, options);
                        if (options.oneofs)
                            object.format = "formatStructured";
                    }
                    return object;
                };

                /**
                 * Converts this PledgeSwitchCondition to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeSwitchCondition.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeSwitchCondition
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeSwitchCondition
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeSwitchCondition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeSwitchCondition";
                };

                return PledgeSwitchCondition;
            })();

            wonton.PledgeUpdateCreation = (function() {

                /**
                 * Properties of a PledgeUpdateCreation.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeUpdateCreation
                 * @property {string|null} [universityDomainName] PledgeUpdateCreation universityDomainName
                 * @property {com.quorumhill.wonton.PledgeSwitchCondition|null} [commitmentCondition] PledgeUpdateCreation commitmentCondition
                 * @property {Long|null} [commitmentValueUsd] PledgeUpdateCreation commitmentValueUsd
                 */

                /**
                 * Constructs a new PledgeUpdateCreation.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeUpdateCreation.
                 * @implements IPledgeUpdateCreation
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeUpdateCreation=} [properties] Properties to set
                 */
                function PledgeUpdateCreation(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeUpdateCreation universityDomainName.
                 * @member {string} universityDomainName
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @instance
                 */
                PledgeUpdateCreation.prototype.universityDomainName = "";

                /**
                 * PledgeUpdateCreation commitmentCondition.
                 * @member {com.quorumhill.wonton.PledgeSwitchCondition|null|undefined} commitmentCondition
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @instance
                 */
                PledgeUpdateCreation.prototype.commitmentCondition = null;

                /**
                 * PledgeUpdateCreation commitmentValueUsd.
                 * @member {Long} commitmentValueUsd
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @instance
                 */
                PledgeUpdateCreation.prototype.commitmentValueUsd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified PledgeUpdateCreation message. Does not implicitly {@link com.quorumhill.wonton.PledgeUpdateCreation.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdateCreation} message PledgeUpdateCreation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeUpdateCreation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.universityDomainName != null && Object.hasOwnProperty.call(message, "universityDomainName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.universityDomainName);
                    if (message.commitmentCondition != null && Object.hasOwnProperty.call(message, "commitmentCondition"))
                        $root.com.quorumhill.wonton.PledgeSwitchCondition.encode(message.commitmentCondition, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.commitmentValueUsd != null && Object.hasOwnProperty.call(message, "commitmentValueUsd"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.commitmentValueUsd);
                    return writer;
                };

                /**
                 * Decodes a PledgeUpdateCreation message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeUpdateCreation} PledgeUpdateCreation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeUpdateCreation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeUpdateCreation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.universityDomainName = reader.string();
                                break;
                            }
                        case 2: {
                                message.commitmentCondition = $root.com.quorumhill.wonton.PledgeSwitchCondition.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.commitmentValueUsd = reader.int64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeUpdateCreation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeUpdateCreation} PledgeUpdateCreation
                 */
                PledgeUpdateCreation.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeUpdateCreation)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeUpdateCreation();
                    if (object.universityDomainName != null)
                        message.universityDomainName = String(object.universityDomainName);
                    if (object.commitmentCondition != null) {
                        if (typeof object.commitmentCondition !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeUpdateCreation.commitmentCondition: object expected");
                        message.commitmentCondition = $root.com.quorumhill.wonton.PledgeSwitchCondition.fromObject(object.commitmentCondition);
                    }
                    if (object.commitmentValueUsd != null)
                        if ($util.Long)
                            (message.commitmentValueUsd = $util.Long.fromValue(object.commitmentValueUsd)).unsigned = false;
                        else if (typeof object.commitmentValueUsd === "string")
                            message.commitmentValueUsd = parseInt(object.commitmentValueUsd, 10);
                        else if (typeof object.commitmentValueUsd === "number")
                            message.commitmentValueUsd = object.commitmentValueUsd;
                        else if (typeof object.commitmentValueUsd === "object")
                            message.commitmentValueUsd = new $util.LongBits(object.commitmentValueUsd.low >>> 0, object.commitmentValueUsd.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeUpdateCreation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdateCreation} message PledgeUpdateCreation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeUpdateCreation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.universityDomainName = "";
                        object.commitmentCondition = null;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.commitmentValueUsd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.commitmentValueUsd = options.longs === String ? "0" : 0;
                    }
                    if (message.universityDomainName != null && message.hasOwnProperty("universityDomainName"))
                        object.universityDomainName = message.universityDomainName;
                    if (message.commitmentCondition != null && message.hasOwnProperty("commitmentCondition"))
                        object.commitmentCondition = $root.com.quorumhill.wonton.PledgeSwitchCondition.toObject(message.commitmentCondition, options);
                    if (message.commitmentValueUsd != null && message.hasOwnProperty("commitmentValueUsd"))
                        if (typeof message.commitmentValueUsd === "number")
                            object.commitmentValueUsd = options.longs === String ? String(message.commitmentValueUsd) : message.commitmentValueUsd;
                        else
                            object.commitmentValueUsd = options.longs === String ? $util.Long.prototype.toString.call(message.commitmentValueUsd) : options.longs === Number ? new $util.LongBits(message.commitmentValueUsd.low >>> 0, message.commitmentValueUsd.high >>> 0).toNumber() : message.commitmentValueUsd;
                    return object;
                };

                /**
                 * Converts this PledgeUpdateCreation to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeUpdateCreation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeUpdateCreation
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeUpdateCreation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeUpdateCreation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeUpdateCreation";
                };

                return PledgeUpdateCreation;
            })();

            wonton.PledgeUpdateDeletion = (function() {

                /**
                 * Properties of a PledgeUpdateDeletion.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeUpdateDeletion
                 */

                /**
                 * Constructs a new PledgeUpdateDeletion.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeUpdateDeletion.
                 * @implements IPledgeUpdateDeletion
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeUpdateDeletion=} [properties] Properties to set
                 */
                function PledgeUpdateDeletion(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified PledgeUpdateDeletion message. Does not implicitly {@link com.quorumhill.wonton.PledgeUpdateDeletion.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeUpdateDeletion
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdateDeletion} message PledgeUpdateDeletion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeUpdateDeletion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes a PledgeUpdateDeletion message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeUpdateDeletion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeUpdateDeletion} PledgeUpdateDeletion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeUpdateDeletion.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeUpdateDeletion();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeUpdateDeletion message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeUpdateDeletion
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeUpdateDeletion} PledgeUpdateDeletion
                 */
                PledgeUpdateDeletion.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeUpdateDeletion)
                        return object;
                    return new $root.com.quorumhill.wonton.PledgeUpdateDeletion();
                };

                /**
                 * Creates a plain object from a PledgeUpdateDeletion message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeUpdateDeletion
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdateDeletion} message PledgeUpdateDeletion
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeUpdateDeletion.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this PledgeUpdateDeletion to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeUpdateDeletion
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeUpdateDeletion.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeUpdateDeletion
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeUpdateDeletion
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeUpdateDeletion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeUpdateDeletion";
                };

                return PledgeUpdateDeletion;
            })();

            wonton.PledgeUpdateInvalidation = (function() {

                /**
                 * Properties of a PledgeUpdateInvalidation.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeUpdateInvalidation
                 * @property {string|null} [reason] PledgeUpdateInvalidation reason
                 */

                /**
                 * Constructs a new PledgeUpdateInvalidation.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeUpdateInvalidation.
                 * @implements IPledgeUpdateInvalidation
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeUpdateInvalidation=} [properties] Properties to set
                 */
                function PledgeUpdateInvalidation(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeUpdateInvalidation reason.
                 * @member {string} reason
                 * @memberof com.quorumhill.wonton.PledgeUpdateInvalidation
                 * @instance
                 */
                PledgeUpdateInvalidation.prototype.reason = "";

                /**
                 * Encodes the specified PledgeUpdateInvalidation message. Does not implicitly {@link com.quorumhill.wonton.PledgeUpdateInvalidation.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeUpdateInvalidation
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdateInvalidation} message PledgeUpdateInvalidation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeUpdateInvalidation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                    return writer;
                };

                /**
                 * Decodes a PledgeUpdateInvalidation message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeUpdateInvalidation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeUpdateInvalidation} PledgeUpdateInvalidation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeUpdateInvalidation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeUpdateInvalidation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.reason = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeUpdateInvalidation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeUpdateInvalidation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeUpdateInvalidation} PledgeUpdateInvalidation
                 */
                PledgeUpdateInvalidation.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeUpdateInvalidation)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeUpdateInvalidation();
                    if (object.reason != null)
                        message.reason = String(object.reason);
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeUpdateInvalidation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeUpdateInvalidation
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdateInvalidation} message PledgeUpdateInvalidation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeUpdateInvalidation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.reason = "";
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        object.reason = message.reason;
                    return object;
                };

                /**
                 * Converts this PledgeUpdateInvalidation to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeUpdateInvalidation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeUpdateInvalidation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeUpdateInvalidation
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeUpdateInvalidation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeUpdateInvalidation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeUpdateInvalidation";
                };

                return PledgeUpdateInvalidation;
            })();

            wonton.PledgeUpdateConditionStructure = (function() {

                /**
                 * Properties of a PledgeUpdateConditionStructure.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeUpdateConditionStructure
                 * @property {com.quorumhill.wonton.PledgeCondition|null} [commitmentConditionFormatStructured] PledgeUpdateConditionStructure commitmentConditionFormatStructured
                 */

                /**
                 * Constructs a new PledgeUpdateConditionStructure.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeUpdateConditionStructure.
                 * @implements IPledgeUpdateConditionStructure
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeUpdateConditionStructure=} [properties] Properties to set
                 */
                function PledgeUpdateConditionStructure(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeUpdateConditionStructure commitmentConditionFormatStructured.
                 * @member {com.quorumhill.wonton.PledgeCondition|null|undefined} commitmentConditionFormatStructured
                 * @memberof com.quorumhill.wonton.PledgeUpdateConditionStructure
                 * @instance
                 */
                PledgeUpdateConditionStructure.prototype.commitmentConditionFormatStructured = null;

                /**
                 * Encodes the specified PledgeUpdateConditionStructure message. Does not implicitly {@link com.quorumhill.wonton.PledgeUpdateConditionStructure.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeUpdateConditionStructure
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdateConditionStructure} message PledgeUpdateConditionStructure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeUpdateConditionStructure.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.commitmentConditionFormatStructured != null && Object.hasOwnProperty.call(message, "commitmentConditionFormatStructured"))
                        $root.com.quorumhill.wonton.PledgeCondition.encode(message.commitmentConditionFormatStructured, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeUpdateConditionStructure message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeUpdateConditionStructure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeUpdateConditionStructure} PledgeUpdateConditionStructure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeUpdateConditionStructure.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeUpdateConditionStructure();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.commitmentConditionFormatStructured = $root.com.quorumhill.wonton.PledgeCondition.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeUpdateConditionStructure message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeUpdateConditionStructure
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeUpdateConditionStructure} PledgeUpdateConditionStructure
                 */
                PledgeUpdateConditionStructure.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeUpdateConditionStructure)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeUpdateConditionStructure();
                    if (object.commitmentConditionFormatStructured != null) {
                        if (typeof object.commitmentConditionFormatStructured !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeUpdateConditionStructure.commitmentConditionFormatStructured: object expected");
                        message.commitmentConditionFormatStructured = $root.com.quorumhill.wonton.PledgeCondition.fromObject(object.commitmentConditionFormatStructured);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeUpdateConditionStructure message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeUpdateConditionStructure
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdateConditionStructure} message PledgeUpdateConditionStructure
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeUpdateConditionStructure.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.commitmentConditionFormatStructured = null;
                    if (message.commitmentConditionFormatStructured != null && message.hasOwnProperty("commitmentConditionFormatStructured"))
                        object.commitmentConditionFormatStructured = $root.com.quorumhill.wonton.PledgeCondition.toObject(message.commitmentConditionFormatStructured, options);
                    return object;
                };

                /**
                 * Converts this PledgeUpdateConditionStructure to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeUpdateConditionStructure
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeUpdateConditionStructure.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeUpdateConditionStructure
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeUpdateConditionStructure
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeUpdateConditionStructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeUpdateConditionStructure";
                };

                return PledgeUpdateConditionStructure;
            })();

            wonton.PledgeUpdate = (function() {

                /**
                 * Properties of a PledgeUpdate.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeUpdate
                 * @property {com.quorumhill.wonton.PledgeMetadata|null} [metadata] PledgeUpdate metadata
                 * @property {com.quorumhill.wonton.PledgeUpdateCreation|null} [updateCreation] PledgeUpdate updateCreation
                 * @property {com.quorumhill.wonton.PledgeUpdateDeletion|null} [updateDeletion] PledgeUpdate updateDeletion
                 * @property {com.quorumhill.wonton.PledgeUpdateInvalidation|null} [updateInvalidation] PledgeUpdate updateInvalidation
                 * @property {com.quorumhill.wonton.PledgeUpdateConditionStructure|null} [updateConditionStructure] PledgeUpdate updateConditionStructure
                 */

                /**
                 * Constructs a new PledgeUpdate.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeUpdate.
                 * @implements IPledgeUpdate
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeUpdate=} [properties] Properties to set
                 */
                function PledgeUpdate(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeUpdate metadata.
                 * @member {com.quorumhill.wonton.PledgeMetadata|null|undefined} metadata
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @instance
                 */
                PledgeUpdate.prototype.metadata = null;

                /**
                 * PledgeUpdate updateCreation.
                 * @member {com.quorumhill.wonton.PledgeUpdateCreation|null|undefined} updateCreation
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @instance
                 */
                PledgeUpdate.prototype.updateCreation = null;

                /**
                 * PledgeUpdate updateDeletion.
                 * @member {com.quorumhill.wonton.PledgeUpdateDeletion|null|undefined} updateDeletion
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @instance
                 */
                PledgeUpdate.prototype.updateDeletion = null;

                /**
                 * PledgeUpdate updateInvalidation.
                 * @member {com.quorumhill.wonton.PledgeUpdateInvalidation|null|undefined} updateInvalidation
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @instance
                 */
                PledgeUpdate.prototype.updateInvalidation = null;

                /**
                 * PledgeUpdate updateConditionStructure.
                 * @member {com.quorumhill.wonton.PledgeUpdateConditionStructure|null|undefined} updateConditionStructure
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @instance
                 */
                PledgeUpdate.prototype.updateConditionStructure = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * PledgeUpdate update.
                 * @member {"updateCreation"|"updateDeletion"|"updateInvalidation"|"updateConditionStructure"|undefined} update
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @instance
                 */
                Object.defineProperty(PledgeUpdate.prototype, "update", {
                    get: $util.oneOfGetter($oneOfFields = ["updateCreation", "updateDeletion", "updateInvalidation", "updateConditionStructure"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified PledgeUpdate message. Does not implicitly {@link com.quorumhill.wonton.PledgeUpdate.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdate} message PledgeUpdate message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeUpdate.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.com.quorumhill.wonton.PledgeMetadata.encode(message.metadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.updateCreation != null && Object.hasOwnProperty.call(message, "updateCreation"))
                        $root.com.quorumhill.wonton.PledgeUpdateCreation.encode(message.updateCreation, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.updateDeletion != null && Object.hasOwnProperty.call(message, "updateDeletion"))
                        $root.com.quorumhill.wonton.PledgeUpdateDeletion.encode(message.updateDeletion, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.updateInvalidation != null && Object.hasOwnProperty.call(message, "updateInvalidation"))
                        $root.com.quorumhill.wonton.PledgeUpdateInvalidation.encode(message.updateInvalidation, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.updateConditionStructure != null && Object.hasOwnProperty.call(message, "updateConditionStructure"))
                        $root.com.quorumhill.wonton.PledgeUpdateConditionStructure.encode(message.updateConditionStructure, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeUpdate message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeUpdate} PledgeUpdate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeUpdate.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeUpdate();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.metadata = $root.com.quorumhill.wonton.PledgeMetadata.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.updateCreation = $root.com.quorumhill.wonton.PledgeUpdateCreation.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.updateDeletion = $root.com.quorumhill.wonton.PledgeUpdateDeletion.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.updateInvalidation = $root.com.quorumhill.wonton.PledgeUpdateInvalidation.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
                                message.updateConditionStructure = $root.com.quorumhill.wonton.PledgeUpdateConditionStructure.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeUpdate message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeUpdate} PledgeUpdate
                 */
                PledgeUpdate.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeUpdate)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeUpdate();
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeUpdate.metadata: object expected");
                        message.metadata = $root.com.quorumhill.wonton.PledgeMetadata.fromObject(object.metadata);
                    }
                    if (object.updateCreation != null) {
                        if (typeof object.updateCreation !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeUpdate.updateCreation: object expected");
                        message.updateCreation = $root.com.quorumhill.wonton.PledgeUpdateCreation.fromObject(object.updateCreation);
                    }
                    if (object.updateDeletion != null) {
                        if (typeof object.updateDeletion !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeUpdate.updateDeletion: object expected");
                        message.updateDeletion = $root.com.quorumhill.wonton.PledgeUpdateDeletion.fromObject(object.updateDeletion);
                    }
                    if (object.updateInvalidation != null) {
                        if (typeof object.updateInvalidation !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeUpdate.updateInvalidation: object expected");
                        message.updateInvalidation = $root.com.quorumhill.wonton.PledgeUpdateInvalidation.fromObject(object.updateInvalidation);
                    }
                    if (object.updateConditionStructure != null) {
                        if (typeof object.updateConditionStructure !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeUpdate.updateConditionStructure: object expected");
                        message.updateConditionStructure = $root.com.quorumhill.wonton.PledgeUpdateConditionStructure.fromObject(object.updateConditionStructure);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeUpdate message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @static
                 * @param {com.quorumhill.wonton.PledgeUpdate} message PledgeUpdate
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeUpdate.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.metadata = null;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.com.quorumhill.wonton.PledgeMetadata.toObject(message.metadata, options);
                    if (message.updateCreation != null && message.hasOwnProperty("updateCreation")) {
                        object.updateCreation = $root.com.quorumhill.wonton.PledgeUpdateCreation.toObject(message.updateCreation, options);
                        if (options.oneofs)
                            object.update = "updateCreation";
                    }
                    if (message.updateDeletion != null && message.hasOwnProperty("updateDeletion")) {
                        object.updateDeletion = $root.com.quorumhill.wonton.PledgeUpdateDeletion.toObject(message.updateDeletion, options);
                        if (options.oneofs)
                            object.update = "updateDeletion";
                    }
                    if (message.updateInvalidation != null && message.hasOwnProperty("updateInvalidation")) {
                        object.updateInvalidation = $root.com.quorumhill.wonton.PledgeUpdateInvalidation.toObject(message.updateInvalidation, options);
                        if (options.oneofs)
                            object.update = "updateInvalidation";
                    }
                    if (message.updateConditionStructure != null && message.hasOwnProperty("updateConditionStructure")) {
                        object.updateConditionStructure = $root.com.quorumhill.wonton.PledgeUpdateConditionStructure.toObject(message.updateConditionStructure, options);
                        if (options.oneofs)
                            object.update = "updateConditionStructure";
                    }
                    return object;
                };

                /**
                 * Converts this PledgeUpdate to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeUpdate.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeUpdate
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeUpdate
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeUpdate";
                };

                return PledgeUpdate;
            })();

            wonton.UserType = (function() {

                /**
                 * Properties of a UserType.
                 * @memberof com.quorumhill.wonton
                 * @interface IUserType
                 */

                /**
                 * Constructs a new UserType.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a UserType.
                 * @implements IUserType
                 * @constructor
                 * @param {com.quorumhill.wonton.IUserType=} [properties] Properties to set
                 */
                function UserType(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified UserType message. Does not implicitly {@link com.quorumhill.wonton.UserType.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UserType
                 * @static
                 * @param {com.quorumhill.wonton.UserType} message UserType message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserType.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes a UserType message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UserType
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UserType} UserType
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserType.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UserType();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a UserType message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UserType
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UserType} UserType
                 */
                UserType.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UserType)
                        return object;
                    return new $root.com.quorumhill.wonton.UserType();
                };

                /**
                 * Creates a plain object from a UserType message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UserType
                 * @static
                 * @param {com.quorumhill.wonton.UserType} message UserType
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserType.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this UserType to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UserType
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserType.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UserType
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UserType
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UserType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UserType";
                };

                /**
                 * Enum enum.
                 * @name com.quorumhill.wonton.UserType.Enum
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} SYSTEM=1 SYSTEM value
                 * @property {number} UNIVERSITY=2 UNIVERSITY value
                 */
                UserType.Enum = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "SYSTEM"] = 1;
                    values[valuesById[2] = "UNIVERSITY"] = 2;
                    return values;
                })();

                return UserType;
            })();

            wonton.UserPassword = (function() {

                /**
                 * Properties of a UserPassword.
                 * @memberof com.quorumhill.wonton
                 * @interface IUserPassword
                 * @property {Long|null} [activationTimestampUsec] UserPassword activationTimestampUsec
                 * @property {Long|null} [deactivationTimestampUsec] UserPassword deactivationTimestampUsec
                 * @property {string|null} [password] UserPassword password
                 */

                /**
                 * Constructs a new UserPassword.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a UserPassword.
                 * @implements IUserPassword
                 * @constructor
                 * @param {com.quorumhill.wonton.IUserPassword=} [properties] Properties to set
                 */
                function UserPassword(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserPassword activationTimestampUsec.
                 * @member {Long} activationTimestampUsec
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @instance
                 */
                UserPassword.prototype.activationTimestampUsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UserPassword deactivationTimestampUsec.
                 * @member {Long} deactivationTimestampUsec
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @instance
                 */
                UserPassword.prototype.deactivationTimestampUsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UserPassword password.
                 * @member {string} password
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @instance
                 */
                UserPassword.prototype.password = "";

                /**
                 * Encodes the specified UserPassword message. Does not implicitly {@link com.quorumhill.wonton.UserPassword.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @static
                 * @param {com.quorumhill.wonton.UserPassword} message UserPassword message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserPassword.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.activationTimestampUsec != null && Object.hasOwnProperty.call(message, "activationTimestampUsec"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.activationTimestampUsec);
                    if (message.deactivationTimestampUsec != null && Object.hasOwnProperty.call(message, "deactivationTimestampUsec"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deactivationTimestampUsec);
                    if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
                    return writer;
                };

                /**
                 * Decodes a UserPassword message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UserPassword} UserPassword
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserPassword.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UserPassword();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.activationTimestampUsec = reader.int64();
                                break;
                            }
                        case 2: {
                                message.deactivationTimestampUsec = reader.int64();
                                break;
                            }
                        case 3: {
                                message.password = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a UserPassword message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UserPassword} UserPassword
                 */
                UserPassword.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UserPassword)
                        return object;
                    let message = new $root.com.quorumhill.wonton.UserPassword();
                    if (object.activationTimestampUsec != null)
                        if ($util.Long)
                            (message.activationTimestampUsec = $util.Long.fromValue(object.activationTimestampUsec)).unsigned = false;
                        else if (typeof object.activationTimestampUsec === "string")
                            message.activationTimestampUsec = parseInt(object.activationTimestampUsec, 10);
                        else if (typeof object.activationTimestampUsec === "number")
                            message.activationTimestampUsec = object.activationTimestampUsec;
                        else if (typeof object.activationTimestampUsec === "object")
                            message.activationTimestampUsec = new $util.LongBits(object.activationTimestampUsec.low >>> 0, object.activationTimestampUsec.high >>> 0).toNumber();
                    if (object.deactivationTimestampUsec != null)
                        if ($util.Long)
                            (message.deactivationTimestampUsec = $util.Long.fromValue(object.deactivationTimestampUsec)).unsigned = false;
                        else if (typeof object.deactivationTimestampUsec === "string")
                            message.deactivationTimestampUsec = parseInt(object.deactivationTimestampUsec, 10);
                        else if (typeof object.deactivationTimestampUsec === "number")
                            message.deactivationTimestampUsec = object.deactivationTimestampUsec;
                        else if (typeof object.deactivationTimestampUsec === "object")
                            message.deactivationTimestampUsec = new $util.LongBits(object.deactivationTimestampUsec.low >>> 0, object.deactivationTimestampUsec.high >>> 0).toNumber();
                    if (object.password != null)
                        message.password = String(object.password);
                    return message;
                };

                /**
                 * Creates a plain object from a UserPassword message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @static
                 * @param {com.quorumhill.wonton.UserPassword} message UserPassword
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserPassword.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.activationTimestampUsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.activationTimestampUsec = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.deactivationTimestampUsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.deactivationTimestampUsec = options.longs === String ? "0" : 0;
                        object.password = "";
                    }
                    if (message.activationTimestampUsec != null && message.hasOwnProperty("activationTimestampUsec"))
                        if (typeof message.activationTimestampUsec === "number")
                            object.activationTimestampUsec = options.longs === String ? String(message.activationTimestampUsec) : message.activationTimestampUsec;
                        else
                            object.activationTimestampUsec = options.longs === String ? $util.Long.prototype.toString.call(message.activationTimestampUsec) : options.longs === Number ? new $util.LongBits(message.activationTimestampUsec.low >>> 0, message.activationTimestampUsec.high >>> 0).toNumber() : message.activationTimestampUsec;
                    if (message.deactivationTimestampUsec != null && message.hasOwnProperty("deactivationTimestampUsec"))
                        if (typeof message.deactivationTimestampUsec === "number")
                            object.deactivationTimestampUsec = options.longs === String ? String(message.deactivationTimestampUsec) : message.deactivationTimestampUsec;
                        else
                            object.deactivationTimestampUsec = options.longs === String ? $util.Long.prototype.toString.call(message.deactivationTimestampUsec) : options.longs === Number ? new $util.LongBits(message.deactivationTimestampUsec.low >>> 0, message.deactivationTimestampUsec.high >>> 0).toNumber() : message.deactivationTimestampUsec;
                    if (message.password != null && message.hasOwnProperty("password"))
                        object.password = message.password;
                    return object;
                };

                /**
                 * Converts this UserPassword to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserPassword.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UserPassword
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UserPassword
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UserPassword.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UserPassword";
                };

                return UserPassword;
            })();

            wonton.UserRepresentative = (function() {

                /**
                 * Properties of a UserRepresentative.
                 * @memberof com.quorumhill.wonton
                 * @interface IUserRepresentative
                 * @property {string|null} [email] UserRepresentative email
                 * @property {string|null} [verification] UserRepresentative verification
                 */

                /**
                 * Constructs a new UserRepresentative.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a UserRepresentative.
                 * @implements IUserRepresentative
                 * @constructor
                 * @param {com.quorumhill.wonton.IUserRepresentative=} [properties] Properties to set
                 */
                function UserRepresentative(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserRepresentative email.
                 * @member {string} email
                 * @memberof com.quorumhill.wonton.UserRepresentative
                 * @instance
                 */
                UserRepresentative.prototype.email = "";

                /**
                 * UserRepresentative verification.
                 * @member {string} verification
                 * @memberof com.quorumhill.wonton.UserRepresentative
                 * @instance
                 */
                UserRepresentative.prototype.verification = "";

                /**
                 * Encodes the specified UserRepresentative message. Does not implicitly {@link com.quorumhill.wonton.UserRepresentative.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UserRepresentative
                 * @static
                 * @param {com.quorumhill.wonton.UserRepresentative} message UserRepresentative message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserRepresentative.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
                    if (message.verification != null && Object.hasOwnProperty.call(message, "verification"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.verification);
                    return writer;
                };

                /**
                 * Decodes a UserRepresentative message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UserRepresentative
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UserRepresentative} UserRepresentative
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserRepresentative.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UserRepresentative();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.email = reader.string();
                                break;
                            }
                        case 2: {
                                message.verification = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a UserRepresentative message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UserRepresentative
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UserRepresentative} UserRepresentative
                 */
                UserRepresentative.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UserRepresentative)
                        return object;
                    let message = new $root.com.quorumhill.wonton.UserRepresentative();
                    if (object.email != null)
                        message.email = String(object.email);
                    if (object.verification != null)
                        message.verification = String(object.verification);
                    return message;
                };

                /**
                 * Creates a plain object from a UserRepresentative message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UserRepresentative
                 * @static
                 * @param {com.quorumhill.wonton.UserRepresentative} message UserRepresentative
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserRepresentative.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.email = "";
                        object.verification = "";
                    }
                    if (message.email != null && message.hasOwnProperty("email"))
                        object.email = message.email;
                    if (message.verification != null && message.hasOwnProperty("verification"))
                        object.verification = message.verification;
                    return object;
                };

                /**
                 * Converts this UserRepresentative to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UserRepresentative
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserRepresentative.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UserRepresentative
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UserRepresentative
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UserRepresentative.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UserRepresentative";
                };

                return UserRepresentative;
            })();

            wonton.UserSecretInfo = (function() {

                /**
                 * Properties of a UserSecretInfo.
                 * @memberof com.quorumhill.wonton
                 * @interface IUserSecretInfo
                 * @property {com.quorumhill.wonton.UserType.Enum|null} [type] UserSecretInfo type
                 * @property {string|null} [username] UserSecretInfo username
                 * @property {Array.<com.quorumhill.wonton.UserPassword>|null} [passwords] UserSecretInfo passwords
                 * @property {Array.<com.quorumhill.wonton.UserRepresentative>|null} [representatives] UserSecretInfo representatives
                 */

                /**
                 * Constructs a new UserSecretInfo.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a UserSecretInfo.
                 * @implements IUserSecretInfo
                 * @constructor
                 * @param {com.quorumhill.wonton.IUserSecretInfo=} [properties] Properties to set
                 */
                function UserSecretInfo(properties) {
                    this.passwords = [];
                    this.representatives = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UserSecretInfo type.
                 * @member {com.quorumhill.wonton.UserType.Enum} type
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @instance
                 */
                UserSecretInfo.prototype.type = 0;

                /**
                 * UserSecretInfo username.
                 * @member {string} username
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @instance
                 */
                UserSecretInfo.prototype.username = "";

                /**
                 * UserSecretInfo passwords.
                 * @member {Array.<com.quorumhill.wonton.UserPassword>} passwords
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @instance
                 */
                UserSecretInfo.prototype.passwords = $util.emptyArray;

                /**
                 * UserSecretInfo representatives.
                 * @member {Array.<com.quorumhill.wonton.UserRepresentative>} representatives
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @instance
                 */
                UserSecretInfo.prototype.representatives = $util.emptyArray;

                /**
                 * Encodes the specified UserSecretInfo message. Does not implicitly {@link com.quorumhill.wonton.UserSecretInfo.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @static
                 * @param {com.quorumhill.wonton.UserSecretInfo} message UserSecretInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserSecretInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                    if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
                    if (message.passwords != null && message.passwords.length)
                        for (let i = 0; i < message.passwords.length; ++i)
                            $root.com.quorumhill.wonton.UserPassword.encode(message.passwords[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.representatives != null && message.representatives.length)
                        for (let i = 0; i < message.representatives.length; ++i)
                            $root.com.quorumhill.wonton.UserRepresentative.encode(message.representatives[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a UserSecretInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UserSecretInfo} UserSecretInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserSecretInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UserSecretInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.int32();
                                break;
                            }
                        case 2: {
                                message.username = reader.string();
                                break;
                            }
                        case 3: {
                                if (!(message.passwords && message.passwords.length))
                                    message.passwords = [];
                                message.passwords.push($root.com.quorumhill.wonton.UserPassword.decode(reader, reader.uint32()));
                                break;
                            }
                        case 4: {
                                if (!(message.representatives && message.representatives.length))
                                    message.representatives = [];
                                message.representatives.push($root.com.quorumhill.wonton.UserRepresentative.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a UserSecretInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UserSecretInfo} UserSecretInfo
                 */
                UserSecretInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UserSecretInfo)
                        return object;
                    let message = new $root.com.quorumhill.wonton.UserSecretInfo();
                    switch (object.type) {
                    default:
                        if (typeof object.type === "number") {
                            message.type = object.type;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.type = 0;
                        break;
                    case "SYSTEM":
                    case 1:
                        message.type = 1;
                        break;
                    case "UNIVERSITY":
                    case 2:
                        message.type = 2;
                        break;
                    }
                    if (object.username != null)
                        message.username = String(object.username);
                    if (object.passwords) {
                        if (!Array.isArray(object.passwords))
                            throw TypeError(".com.quorumhill.wonton.UserSecretInfo.passwords: array expected");
                        message.passwords = [];
                        for (let i = 0; i < object.passwords.length; ++i) {
                            if (typeof object.passwords[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.UserSecretInfo.passwords: object expected");
                            message.passwords[i] = $root.com.quorumhill.wonton.UserPassword.fromObject(object.passwords[i]);
                        }
                    }
                    if (object.representatives) {
                        if (!Array.isArray(object.representatives))
                            throw TypeError(".com.quorumhill.wonton.UserSecretInfo.representatives: array expected");
                        message.representatives = [];
                        for (let i = 0; i < object.representatives.length; ++i) {
                            if (typeof object.representatives[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.UserSecretInfo.representatives: object expected");
                            message.representatives[i] = $root.com.quorumhill.wonton.UserRepresentative.fromObject(object.representatives[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a UserSecretInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @static
                 * @param {com.quorumhill.wonton.UserSecretInfo} message UserSecretInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserSecretInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults) {
                        object.passwords = [];
                        object.representatives = [];
                    }
                    if (options.defaults) {
                        object.type = options.enums === String ? "UNKNOWN" : 0;
                        object.username = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.com.quorumhill.wonton.UserType.Enum[message.type] === undefined ? message.type : $root.com.quorumhill.wonton.UserType.Enum[message.type] : message.type;
                    if (message.username != null && message.hasOwnProperty("username"))
                        object.username = message.username;
                    if (message.passwords && message.passwords.length) {
                        object.passwords = [];
                        for (let j = 0; j < message.passwords.length; ++j)
                            object.passwords[j] = $root.com.quorumhill.wonton.UserPassword.toObject(message.passwords[j], options);
                    }
                    if (message.representatives && message.representatives.length) {
                        object.representatives = [];
                        for (let j = 0; j < message.representatives.length; ++j)
                            object.representatives[j] = $root.com.quorumhill.wonton.UserRepresentative.toObject(message.representatives[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this UserSecretInfo to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserSecretInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UserSecretInfo
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UserSecretInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UserSecretInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UserSecretInfo";
                };

                return UserSecretInfo;
            })();

            wonton.SecretInfo = (function() {

                /**
                 * Properties of a SecretInfo.
                 * @memberof com.quorumhill.wonton
                 * @interface ISecretInfo
                 * @property {Array.<com.quorumhill.wonton.UserSecretInfo>|null} [userInfos] SecretInfo userInfos
                 */

                /**
                 * Constructs a new SecretInfo.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a SecretInfo.
                 * @implements ISecretInfo
                 * @constructor
                 * @param {com.quorumhill.wonton.ISecretInfo=} [properties] Properties to set
                 */
                function SecretInfo(properties) {
                    this.userInfos = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SecretInfo userInfos.
                 * @member {Array.<com.quorumhill.wonton.UserSecretInfo>} userInfos
                 * @memberof com.quorumhill.wonton.SecretInfo
                 * @instance
                 */
                SecretInfo.prototype.userInfos = $util.emptyArray;

                /**
                 * Encodes the specified SecretInfo message. Does not implicitly {@link com.quorumhill.wonton.SecretInfo.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.SecretInfo
                 * @static
                 * @param {com.quorumhill.wonton.SecretInfo} message SecretInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SecretInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.userInfos != null && message.userInfos.length)
                        for (let i = 0; i < message.userInfos.length; ++i)
                            $root.com.quorumhill.wonton.UserSecretInfo.encode(message.userInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a SecretInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.SecretInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.SecretInfo} SecretInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SecretInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.SecretInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.userInfos && message.userInfos.length))
                                    message.userInfos = [];
                                message.userInfos.push($root.com.quorumhill.wonton.UserSecretInfo.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a SecretInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.SecretInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.SecretInfo} SecretInfo
                 */
                SecretInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.SecretInfo)
                        return object;
                    let message = new $root.com.quorumhill.wonton.SecretInfo();
                    if (object.userInfos) {
                        if (!Array.isArray(object.userInfos))
                            throw TypeError(".com.quorumhill.wonton.SecretInfo.userInfos: array expected");
                        message.userInfos = [];
                        for (let i = 0; i < object.userInfos.length; ++i) {
                            if (typeof object.userInfos[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.SecretInfo.userInfos: object expected");
                            message.userInfos[i] = $root.com.quorumhill.wonton.UserSecretInfo.fromObject(object.userInfos[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SecretInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.SecretInfo
                 * @static
                 * @param {com.quorumhill.wonton.SecretInfo} message SecretInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SecretInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.userInfos = [];
                    if (message.userInfos && message.userInfos.length) {
                        object.userInfos = [];
                        for (let j = 0; j < message.userInfos.length; ++j)
                            object.userInfos[j] = $root.com.quorumhill.wonton.UserSecretInfo.toObject(message.userInfos[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this SecretInfo to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.SecretInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SecretInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for SecretInfo
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.SecretInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                SecretInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.SecretInfo";
                };

                return SecretInfo;
            })();

            wonton.ApiStageGetRequest = (function() {

                /**
                 * Properties of an ApiStageGetRequest.
                 * @memberof com.quorumhill.wonton
                 * @interface IApiStageGetRequest
                 */

                /**
                 * Constructs a new ApiStageGetRequest.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an ApiStageGetRequest.
                 * @implements IApiStageGetRequest
                 * @constructor
                 * @param {com.quorumhill.wonton.IApiStageGetRequest=} [properties] Properties to set
                 */
                function ApiStageGetRequest(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified ApiStageGetRequest message. Does not implicitly {@link com.quorumhill.wonton.ApiStageGetRequest.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.ApiStageGetRequest
                 * @static
                 * @param {com.quorumhill.wonton.ApiStageGetRequest} message ApiStageGetRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ApiStageGetRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes an ApiStageGetRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.ApiStageGetRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.ApiStageGetRequest} ApiStageGetRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ApiStageGetRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.ApiStageGetRequest();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an ApiStageGetRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.ApiStageGetRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.ApiStageGetRequest} ApiStageGetRequest
                 */
                ApiStageGetRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.ApiStageGetRequest)
                        return object;
                    return new $root.com.quorumhill.wonton.ApiStageGetRequest();
                };

                /**
                 * Creates a plain object from an ApiStageGetRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.ApiStageGetRequest
                 * @static
                 * @param {com.quorumhill.wonton.ApiStageGetRequest} message ApiStageGetRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ApiStageGetRequest.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this ApiStageGetRequest to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.ApiStageGetRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ApiStageGetRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ApiStageGetRequest
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.ApiStageGetRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ApiStageGetRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.ApiStageGetRequest";
                };

                return ApiStageGetRequest;
            })();

            wonton.ApiStageGetResponse = (function() {

                /**
                 * Properties of an ApiStageGetResponse.
                 * @memberof com.quorumhill.wonton
                 * @interface IApiStageGetResponse
                 * @property {com.quorumhill.wonton.StageInfo|null} [stageInfo] ApiStageGetResponse stageInfo
                 */

                /**
                 * Constructs a new ApiStageGetResponse.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an ApiStageGetResponse.
                 * @implements IApiStageGetResponse
                 * @constructor
                 * @param {com.quorumhill.wonton.IApiStageGetResponse=} [properties] Properties to set
                 */
                function ApiStageGetResponse(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ApiStageGetResponse stageInfo.
                 * @member {com.quorumhill.wonton.StageInfo|null|undefined} stageInfo
                 * @memberof com.quorumhill.wonton.ApiStageGetResponse
                 * @instance
                 */
                ApiStageGetResponse.prototype.stageInfo = null;

                /**
                 * Encodes the specified ApiStageGetResponse message. Does not implicitly {@link com.quorumhill.wonton.ApiStageGetResponse.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.ApiStageGetResponse
                 * @static
                 * @param {com.quorumhill.wonton.ApiStageGetResponse} message ApiStageGetResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ApiStageGetResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.stageInfo != null && Object.hasOwnProperty.call(message, "stageInfo"))
                        $root.com.quorumhill.wonton.StageInfo.encode(message.stageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an ApiStageGetResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.ApiStageGetResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.ApiStageGetResponse} ApiStageGetResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ApiStageGetResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.ApiStageGetResponse();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.stageInfo = $root.com.quorumhill.wonton.StageInfo.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an ApiStageGetResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.ApiStageGetResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.ApiStageGetResponse} ApiStageGetResponse
                 */
                ApiStageGetResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.ApiStageGetResponse)
                        return object;
                    let message = new $root.com.quorumhill.wonton.ApiStageGetResponse();
                    if (object.stageInfo != null) {
                        if (typeof object.stageInfo !== "object")
                            throw TypeError(".com.quorumhill.wonton.ApiStageGetResponse.stageInfo: object expected");
                        message.stageInfo = $root.com.quorumhill.wonton.StageInfo.fromObject(object.stageInfo);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an ApiStageGetResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.ApiStageGetResponse
                 * @static
                 * @param {com.quorumhill.wonton.ApiStageGetResponse} message ApiStageGetResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ApiStageGetResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.stageInfo = null;
                    if (message.stageInfo != null && message.hasOwnProperty("stageInfo"))
                        object.stageInfo = $root.com.quorumhill.wonton.StageInfo.toObject(message.stageInfo, options);
                    return object;
                };

                /**
                 * Converts this ApiStageGetResponse to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.ApiStageGetResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ApiStageGetResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ApiStageGetResponse
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.ApiStageGetResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ApiStageGetResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.ApiStageGetResponse";
                };

                return ApiStageGetResponse;
            })();

            wonton.PledgeStageStatusProcessing = (function() {

                /**
                 * Properties of a PledgeStageStatusProcessing.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeStageStatusProcessing
                 */

                /**
                 * Constructs a new PledgeStageStatusProcessing.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeStageStatusProcessing.
                 * @implements IPledgeStageStatusProcessing
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeStageStatusProcessing=} [properties] Properties to set
                 */
                function PledgeStageStatusProcessing(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified PledgeStageStatusProcessing message. Does not implicitly {@link com.quorumhill.wonton.PledgeStageStatusProcessing.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusProcessing
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusProcessing} message PledgeStageStatusProcessing message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeStageStatusProcessing.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes a PledgeStageStatusProcessing message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusProcessing
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeStageStatusProcessing} PledgeStageStatusProcessing
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeStageStatusProcessing.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeStageStatusProcessing();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeStageStatusProcessing message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusProcessing
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeStageStatusProcessing} PledgeStageStatusProcessing
                 */
                PledgeStageStatusProcessing.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeStageStatusProcessing)
                        return object;
                    return new $root.com.quorumhill.wonton.PledgeStageStatusProcessing();
                };

                /**
                 * Creates a plain object from a PledgeStageStatusProcessing message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusProcessing
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusProcessing} message PledgeStageStatusProcessing
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeStageStatusProcessing.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this PledgeStageStatusProcessing to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeStageStatusProcessing
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeStageStatusProcessing.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeStageStatusProcessing
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeStageStatusProcessing
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeStageStatusProcessing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeStageStatusProcessing";
                };

                return PledgeStageStatusProcessing;
            })();

            wonton.PledgeStageStatusRegisteredConditionStatusSatisfied = (function() {

                /**
                 * Properties of a PledgeStageStatusRegisteredConditionStatusSatisfied.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeStageStatusRegisteredConditionStatusSatisfied
                 */

                /**
                 * Constructs a new PledgeStageStatusRegisteredConditionStatusSatisfied.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeStageStatusRegisteredConditionStatusSatisfied.
                 * @implements IPledgeStageStatusRegisteredConditionStatusSatisfied
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeStageStatusRegisteredConditionStatusSatisfied=} [properties] Properties to set
                 */
                function PledgeStageStatusRegisteredConditionStatusSatisfied(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified PledgeStageStatusRegisteredConditionStatusSatisfied message. Does not implicitly {@link com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied} message PledgeStageStatusRegisteredConditionStatusSatisfied message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeStageStatusRegisteredConditionStatusSatisfied.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes a PledgeStageStatusRegisteredConditionStatusSatisfied message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied} PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeStageStatusRegisteredConditionStatusSatisfied.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeStageStatusRegisteredConditionStatusSatisfied message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied} PledgeStageStatusRegisteredConditionStatusSatisfied
                 */
                PledgeStageStatusRegisteredConditionStatusSatisfied.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied)
                        return object;
                    return new $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied();
                };

                /**
                 * Creates a plain object from a PledgeStageStatusRegisteredConditionStatusSatisfied message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied} message PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeStageStatusRegisteredConditionStatusSatisfied.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this PledgeStageStatusRegisteredConditionStatusSatisfied to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeStageStatusRegisteredConditionStatusSatisfied.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeStageStatusRegisteredConditionStatusSatisfied.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied";
                };

                return PledgeStageStatusRegisteredConditionStatusSatisfied;
            })();

            wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied = (function() {

                /**
                 * Properties of a PledgeStageStatusRegisteredConditionStatusUnsatisfied.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @property {number|null} [conditionProgressEstimate] PledgeStageStatusRegisteredConditionStatusUnsatisfied conditionProgressEstimate
                 */

                /**
                 * Constructs a new PledgeStageStatusRegisteredConditionStatusUnsatisfied.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeStageStatusRegisteredConditionStatusUnsatisfied.
                 * @implements IPledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeStageStatusRegisteredConditionStatusUnsatisfied=} [properties] Properties to set
                 */
                function PledgeStageStatusRegisteredConditionStatusUnsatisfied(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeStageStatusRegisteredConditionStatusUnsatisfied conditionProgressEstimate.
                 * @member {number} conditionProgressEstimate
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @instance
                 */
                PledgeStageStatusRegisteredConditionStatusUnsatisfied.prototype.conditionProgressEstimate = 0;

                /**
                 * Encodes the specified PledgeStageStatusRegisteredConditionStatusUnsatisfied message. Does not implicitly {@link com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied} message PledgeStageStatusRegisteredConditionStatusUnsatisfied message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeStageStatusRegisteredConditionStatusUnsatisfied.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.conditionProgressEstimate != null && Object.hasOwnProperty.call(message, "conditionProgressEstimate"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.conditionProgressEstimate);
                    return writer;
                };

                /**
                 * Decodes a PledgeStageStatusRegisteredConditionStatusUnsatisfied message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied} PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeStageStatusRegisteredConditionStatusUnsatisfied.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.conditionProgressEstimate = reader.double();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeStageStatusRegisteredConditionStatusUnsatisfied message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied} PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 */
                PledgeStageStatusRegisteredConditionStatusUnsatisfied.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied();
                    if (object.conditionProgressEstimate != null)
                        message.conditionProgressEstimate = Number(object.conditionProgressEstimate);
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeStageStatusRegisteredConditionStatusUnsatisfied message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied} message PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeStageStatusRegisteredConditionStatusUnsatisfied.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.conditionProgressEstimate = 0;
                    if (message.conditionProgressEstimate != null && message.hasOwnProperty("conditionProgressEstimate"))
                        object.conditionProgressEstimate = options.json && !isFinite(message.conditionProgressEstimate) ? String(message.conditionProgressEstimate) : message.conditionProgressEstimate;
                    return object;
                };

                /**
                 * Converts this PledgeStageStatusRegisteredConditionStatusUnsatisfied to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeStageStatusRegisteredConditionStatusUnsatisfied.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeStageStatusRegisteredConditionStatusUnsatisfied.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied";
                };

                return PledgeStageStatusRegisteredConditionStatusUnsatisfied;
            })();

            wonton.PledgeStageStatusRegistered = (function() {

                /**
                 * Properties of a PledgeStageStatusRegistered.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeStageStatusRegistered
                 * @property {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied|null} [conditionStatusSatisfied] PledgeStageStatusRegistered conditionStatusSatisfied
                 * @property {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied|null} [conditionStatusUnsatisfied] PledgeStageStatusRegistered conditionStatusUnsatisfied
                 */

                /**
                 * Constructs a new PledgeStageStatusRegistered.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeStageStatusRegistered.
                 * @implements IPledgeStageStatusRegistered
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeStageStatusRegistered=} [properties] Properties to set
                 */
                function PledgeStageStatusRegistered(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeStageStatusRegistered conditionStatusSatisfied.
                 * @member {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied|null|undefined} conditionStatusSatisfied
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @instance
                 */
                PledgeStageStatusRegistered.prototype.conditionStatusSatisfied = null;

                /**
                 * PledgeStageStatusRegistered conditionStatusUnsatisfied.
                 * @member {com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied|null|undefined} conditionStatusUnsatisfied
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @instance
                 */
                PledgeStageStatusRegistered.prototype.conditionStatusUnsatisfied = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * PledgeStageStatusRegistered conditionStatus.
                 * @member {"conditionStatusSatisfied"|"conditionStatusUnsatisfied"|undefined} conditionStatus
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @instance
                 */
                Object.defineProperty(PledgeStageStatusRegistered.prototype, "conditionStatus", {
                    get: $util.oneOfGetter($oneOfFields = ["conditionStatusSatisfied", "conditionStatusUnsatisfied"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified PledgeStageStatusRegistered message. Does not implicitly {@link com.quorumhill.wonton.PledgeStageStatusRegistered.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusRegistered} message PledgeStageStatusRegistered message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeStageStatusRegistered.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.conditionStatusSatisfied != null && Object.hasOwnProperty.call(message, "conditionStatusSatisfied"))
                        $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied.encode(message.conditionStatusSatisfied, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.conditionStatusUnsatisfied != null && Object.hasOwnProperty.call(message, "conditionStatusUnsatisfied"))
                        $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied.encode(message.conditionStatusUnsatisfied, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeStageStatusRegistered message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeStageStatusRegistered} PledgeStageStatusRegistered
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeStageStatusRegistered.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeStageStatusRegistered();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.conditionStatusSatisfied = $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.conditionStatusUnsatisfied = $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeStageStatusRegistered message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeStageStatusRegistered} PledgeStageStatusRegistered
                 */
                PledgeStageStatusRegistered.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeStageStatusRegistered)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeStageStatusRegistered();
                    if (object.conditionStatusSatisfied != null) {
                        if (typeof object.conditionStatusSatisfied !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageStatusRegistered.conditionStatusSatisfied: object expected");
                        message.conditionStatusSatisfied = $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied.fromObject(object.conditionStatusSatisfied);
                    }
                    if (object.conditionStatusUnsatisfied != null) {
                        if (typeof object.conditionStatusUnsatisfied !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageStatusRegistered.conditionStatusUnsatisfied: object expected");
                        message.conditionStatusUnsatisfied = $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied.fromObject(object.conditionStatusUnsatisfied);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeStageStatusRegistered message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusRegistered} message PledgeStageStatusRegistered
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeStageStatusRegistered.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.conditionStatusSatisfied != null && message.hasOwnProperty("conditionStatusSatisfied")) {
                        object.conditionStatusSatisfied = $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusSatisfied.toObject(message.conditionStatusSatisfied, options);
                        if (options.oneofs)
                            object.conditionStatus = "conditionStatusSatisfied";
                    }
                    if (message.conditionStatusUnsatisfied != null && message.hasOwnProperty("conditionStatusUnsatisfied")) {
                        object.conditionStatusUnsatisfied = $root.com.quorumhill.wonton.PledgeStageStatusRegisteredConditionStatusUnsatisfied.toObject(message.conditionStatusUnsatisfied, options);
                        if (options.oneofs)
                            object.conditionStatus = "conditionStatusUnsatisfied";
                    }
                    return object;
                };

                /**
                 * Converts this PledgeStageStatusRegistered to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeStageStatusRegistered.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeStageStatusRegistered
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeStageStatusRegistered
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeStageStatusRegistered.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeStageStatusRegistered";
                };

                return PledgeStageStatusRegistered;
            })();

            wonton.PledgeStageStatusInvalid = (function() {

                /**
                 * Properties of a PledgeStageStatusInvalid.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeStageStatusInvalid
                 * @property {string|null} [reason] PledgeStageStatusInvalid reason
                 */

                /**
                 * Constructs a new PledgeStageStatusInvalid.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeStageStatusInvalid.
                 * @implements IPledgeStageStatusInvalid
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeStageStatusInvalid=} [properties] Properties to set
                 */
                function PledgeStageStatusInvalid(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeStageStatusInvalid reason.
                 * @member {string} reason
                 * @memberof com.quorumhill.wonton.PledgeStageStatusInvalid
                 * @instance
                 */
                PledgeStageStatusInvalid.prototype.reason = "";

                /**
                 * Encodes the specified PledgeStageStatusInvalid message. Does not implicitly {@link com.quorumhill.wonton.PledgeStageStatusInvalid.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusInvalid
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusInvalid} message PledgeStageStatusInvalid message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeStageStatusInvalid.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                    return writer;
                };

                /**
                 * Decodes a PledgeStageStatusInvalid message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeStageStatusInvalid
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeStageStatusInvalid} PledgeStageStatusInvalid
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeStageStatusInvalid.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeStageStatusInvalid();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.reason = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeStageStatusInvalid message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusInvalid
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeStageStatusInvalid} PledgeStageStatusInvalid
                 */
                PledgeStageStatusInvalid.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeStageStatusInvalid)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeStageStatusInvalid();
                    if (object.reason != null)
                        message.reason = String(object.reason);
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeStageStatusInvalid message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatusInvalid
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatusInvalid} message PledgeStageStatusInvalid
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeStageStatusInvalid.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        object.reason = "";
                    if (message.reason != null && message.hasOwnProperty("reason"))
                        object.reason = message.reason;
                    return object;
                };

                /**
                 * Converts this PledgeStageStatusInvalid to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeStageStatusInvalid
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeStageStatusInvalid.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeStageStatusInvalid
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeStageStatusInvalid
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeStageStatusInvalid.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeStageStatusInvalid";
                };

                return PledgeStageStatusInvalid;
            })();

            wonton.PledgeStageStatus = (function() {

                /**
                 * Properties of a PledgeStageStatus.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeStageStatus
                 * @property {com.quorumhill.wonton.PledgeStageStatusProcessing|null} [statusProcessing] PledgeStageStatus statusProcessing
                 * @property {com.quorumhill.wonton.PledgeStageStatusRegistered|null} [statusRegistered] PledgeStageStatus statusRegistered
                 * @property {com.quorumhill.wonton.PledgeStageStatusInvalid|null} [statusInvalid] PledgeStageStatus statusInvalid
                 */

                /**
                 * Constructs a new PledgeStageStatus.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeStageStatus.
                 * @implements IPledgeStageStatus
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeStageStatus=} [properties] Properties to set
                 */
                function PledgeStageStatus(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeStageStatus statusProcessing.
                 * @member {com.quorumhill.wonton.PledgeStageStatusProcessing|null|undefined} statusProcessing
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @instance
                 */
                PledgeStageStatus.prototype.statusProcessing = null;

                /**
                 * PledgeStageStatus statusRegistered.
                 * @member {com.quorumhill.wonton.PledgeStageStatusRegistered|null|undefined} statusRegistered
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @instance
                 */
                PledgeStageStatus.prototype.statusRegistered = null;

                /**
                 * PledgeStageStatus statusInvalid.
                 * @member {com.quorumhill.wonton.PledgeStageStatusInvalid|null|undefined} statusInvalid
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @instance
                 */
                PledgeStageStatus.prototype.statusInvalid = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * PledgeStageStatus status.
                 * @member {"statusProcessing"|"statusRegistered"|"statusInvalid"|undefined} status
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @instance
                 */
                Object.defineProperty(PledgeStageStatus.prototype, "status", {
                    get: $util.oneOfGetter($oneOfFields = ["statusProcessing", "statusRegistered", "statusInvalid"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified PledgeStageStatus message. Does not implicitly {@link com.quorumhill.wonton.PledgeStageStatus.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatus} message PledgeStageStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeStageStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.statusProcessing != null && Object.hasOwnProperty.call(message, "statusProcessing"))
                        $root.com.quorumhill.wonton.PledgeStageStatusProcessing.encode(message.statusProcessing, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.statusRegistered != null && Object.hasOwnProperty.call(message, "statusRegistered"))
                        $root.com.quorumhill.wonton.PledgeStageStatusRegistered.encode(message.statusRegistered, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.statusInvalid != null && Object.hasOwnProperty.call(message, "statusInvalid"))
                        $root.com.quorumhill.wonton.PledgeStageStatusInvalid.encode(message.statusInvalid, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeStageStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeStageStatus} PledgeStageStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeStageStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeStageStatus();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.statusProcessing = $root.com.quorumhill.wonton.PledgeStageStatusProcessing.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.statusRegistered = $root.com.quorumhill.wonton.PledgeStageStatusRegistered.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.statusInvalid = $root.com.quorumhill.wonton.PledgeStageStatusInvalid.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeStageStatus message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeStageStatus} PledgeStageStatus
                 */
                PledgeStageStatus.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeStageStatus)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeStageStatus();
                    if (object.statusProcessing != null) {
                        if (typeof object.statusProcessing !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageStatus.statusProcessing: object expected");
                        message.statusProcessing = $root.com.quorumhill.wonton.PledgeStageStatusProcessing.fromObject(object.statusProcessing);
                    }
                    if (object.statusRegistered != null) {
                        if (typeof object.statusRegistered !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageStatus.statusRegistered: object expected");
                        message.statusRegistered = $root.com.quorumhill.wonton.PledgeStageStatusRegistered.fromObject(object.statusRegistered);
                    }
                    if (object.statusInvalid != null) {
                        if (typeof object.statusInvalid !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageStatus.statusInvalid: object expected");
                        message.statusInvalid = $root.com.quorumhill.wonton.PledgeStageStatusInvalid.fromObject(object.statusInvalid);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeStageStatus message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageStatus} message PledgeStageStatus
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeStageStatus.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.statusProcessing != null && message.hasOwnProperty("statusProcessing")) {
                        object.statusProcessing = $root.com.quorumhill.wonton.PledgeStageStatusProcessing.toObject(message.statusProcessing, options);
                        if (options.oneofs)
                            object.status = "statusProcessing";
                    }
                    if (message.statusRegistered != null && message.hasOwnProperty("statusRegistered")) {
                        object.statusRegistered = $root.com.quorumhill.wonton.PledgeStageStatusRegistered.toObject(message.statusRegistered, options);
                        if (options.oneofs)
                            object.status = "statusRegistered";
                    }
                    if (message.statusInvalid != null && message.hasOwnProperty("statusInvalid")) {
                        object.statusInvalid = $root.com.quorumhill.wonton.PledgeStageStatusInvalid.toObject(message.statusInvalid, options);
                        if (options.oneofs)
                            object.status = "statusInvalid";
                    }
                    return object;
                };

                /**
                 * Converts this PledgeStageStatus to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeStageStatus.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeStageStatus
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeStageStatus
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeStageStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeStageStatus";
                };

                return PledgeStageStatus;
            })();

            wonton.PledgeStageCondition = (function() {

                /**
                 * Properties of a PledgeStageCondition.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeStageCondition
                 * @property {string|null} [formatUnstructured] PledgeStageCondition formatUnstructured
                 * @property {com.quorumhill.wonton.PledgeCondition|null} [formatStructured] PledgeStageCondition formatStructured
                 */

                /**
                 * Constructs a new PledgeStageCondition.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeStageCondition.
                 * @implements IPledgeStageCondition
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeStageCondition=} [properties] Properties to set
                 */
                function PledgeStageCondition(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeStageCondition formatUnstructured.
                 * @member {string} formatUnstructured
                 * @memberof com.quorumhill.wonton.PledgeStageCondition
                 * @instance
                 */
                PledgeStageCondition.prototype.formatUnstructured = "";

                /**
                 * PledgeStageCondition formatStructured.
                 * @member {com.quorumhill.wonton.PledgeCondition|null|undefined} formatStructured
                 * @memberof com.quorumhill.wonton.PledgeStageCondition
                 * @instance
                 */
                PledgeStageCondition.prototype.formatStructured = null;

                /**
                 * Encodes the specified PledgeStageCondition message. Does not implicitly {@link com.quorumhill.wonton.PledgeStageCondition.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeStageCondition
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageCondition} message PledgeStageCondition message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeStageCondition.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.formatUnstructured != null && Object.hasOwnProperty.call(message, "formatUnstructured"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.formatUnstructured);
                    if (message.formatStructured != null && Object.hasOwnProperty.call(message, "formatStructured"))
                        $root.com.quorumhill.wonton.PledgeCondition.encode(message.formatStructured, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a PledgeStageCondition message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeStageCondition
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeStageCondition} PledgeStageCondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeStageCondition.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeStageCondition();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.formatUnstructured = reader.string();
                                break;
                            }
                        case 2: {
                                message.formatStructured = $root.com.quorumhill.wonton.PledgeCondition.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeStageCondition message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeStageCondition
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeStageCondition} PledgeStageCondition
                 */
                PledgeStageCondition.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeStageCondition)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeStageCondition();
                    if (object.formatUnstructured != null)
                        message.formatUnstructured = String(object.formatUnstructured);
                    if (object.formatStructured != null) {
                        if (typeof object.formatStructured !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageCondition.formatStructured: object expected");
                        message.formatStructured = $root.com.quorumhill.wonton.PledgeCondition.fromObject(object.formatStructured);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeStageCondition message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeStageCondition
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageCondition} message PledgeStageCondition
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeStageCondition.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.formatUnstructured = "";
                        object.formatStructured = null;
                    }
                    if (message.formatUnstructured != null && message.hasOwnProperty("formatUnstructured"))
                        object.formatUnstructured = message.formatUnstructured;
                    if (message.formatStructured != null && message.hasOwnProperty("formatStructured"))
                        object.formatStructured = $root.com.quorumhill.wonton.PledgeCondition.toObject(message.formatStructured, options);
                    return object;
                };

                /**
                 * Converts this PledgeStageCondition to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeStageCondition
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeStageCondition.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeStageCondition
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeStageCondition
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeStageCondition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeStageCondition";
                };

                return PledgeStageCondition;
            })();

            wonton.PledgeStageInfo = (function() {

                /**
                 * Properties of a PledgeStageInfo.
                 * @memberof com.quorumhill.wonton
                 * @interface IPledgeStageInfo
                 * @property {com.quorumhill.wonton.PledgeId|null} [pledgeId] PledgeStageInfo pledgeId
                 * @property {Long|null} [creationTimestampUsec] PledgeStageInfo creationTimestampUsec
                 * @property {com.quorumhill.wonton.PledgeStageStatus|null} [status] PledgeStageInfo status
                 * @property {com.quorumhill.wonton.PledgeStageCondition|null} [commitmentCondition] PledgeStageInfo commitmentCondition
                 * @property {Long|null} [commitmentValueUsd] PledgeStageInfo commitmentValueUsd
                 */

                /**
                 * Constructs a new PledgeStageInfo.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a PledgeStageInfo.
                 * @implements IPledgeStageInfo
                 * @constructor
                 * @param {com.quorumhill.wonton.IPledgeStageInfo=} [properties] Properties to set
                 */
                function PledgeStageInfo(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PledgeStageInfo pledgeId.
                 * @member {com.quorumhill.wonton.PledgeId|null|undefined} pledgeId
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @instance
                 */
                PledgeStageInfo.prototype.pledgeId = null;

                /**
                 * PledgeStageInfo creationTimestampUsec.
                 * @member {Long} creationTimestampUsec
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @instance
                 */
                PledgeStageInfo.prototype.creationTimestampUsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * PledgeStageInfo status.
                 * @member {com.quorumhill.wonton.PledgeStageStatus|null|undefined} status
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @instance
                 */
                PledgeStageInfo.prototype.status = null;

                /**
                 * PledgeStageInfo commitmentCondition.
                 * @member {com.quorumhill.wonton.PledgeStageCondition|null|undefined} commitmentCondition
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @instance
                 */
                PledgeStageInfo.prototype.commitmentCondition = null;

                /**
                 * PledgeStageInfo commitmentValueUsd.
                 * @member {Long} commitmentValueUsd
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @instance
                 */
                PledgeStageInfo.prototype.commitmentValueUsd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified PledgeStageInfo message. Does not implicitly {@link com.quorumhill.wonton.PledgeStageInfo.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageInfo} message PledgeStageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PledgeStageInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.pledgeId != null && Object.hasOwnProperty.call(message, "pledgeId"))
                        $root.com.quorumhill.wonton.PledgeId.encode(message.pledgeId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.creationTimestampUsec != null && Object.hasOwnProperty.call(message, "creationTimestampUsec"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.creationTimestampUsec);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        $root.com.quorumhill.wonton.PledgeStageStatus.encode(message.status, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.commitmentCondition != null && Object.hasOwnProperty.call(message, "commitmentCondition"))
                        $root.com.quorumhill.wonton.PledgeStageCondition.encode(message.commitmentCondition, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.commitmentValueUsd != null && Object.hasOwnProperty.call(message, "commitmentValueUsd"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.commitmentValueUsd);
                    return writer;
                };

                /**
                 * Decodes a PledgeStageInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.PledgeStageInfo} PledgeStageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PledgeStageInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.PledgeStageInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.pledgeId = $root.com.quorumhill.wonton.PledgeId.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.creationTimestampUsec = reader.int64();
                                break;
                            }
                        case 3: {
                                message.status = $root.com.quorumhill.wonton.PledgeStageStatus.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.commitmentCondition = $root.com.quorumhill.wonton.PledgeStageCondition.decode(reader, reader.uint32());
                                break;
                            }
                        case 5: {
                                message.commitmentValueUsd = reader.int64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a PledgeStageInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.PledgeStageInfo} PledgeStageInfo
                 */
                PledgeStageInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.PledgeStageInfo)
                        return object;
                    let message = new $root.com.quorumhill.wonton.PledgeStageInfo();
                    if (object.pledgeId != null) {
                        if (typeof object.pledgeId !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageInfo.pledgeId: object expected");
                        message.pledgeId = $root.com.quorumhill.wonton.PledgeId.fromObject(object.pledgeId);
                    }
                    if (object.creationTimestampUsec != null)
                        if ($util.Long)
                            (message.creationTimestampUsec = $util.Long.fromValue(object.creationTimestampUsec)).unsigned = false;
                        else if (typeof object.creationTimestampUsec === "string")
                            message.creationTimestampUsec = parseInt(object.creationTimestampUsec, 10);
                        else if (typeof object.creationTimestampUsec === "number")
                            message.creationTimestampUsec = object.creationTimestampUsec;
                        else if (typeof object.creationTimestampUsec === "object")
                            message.creationTimestampUsec = new $util.LongBits(object.creationTimestampUsec.low >>> 0, object.creationTimestampUsec.high >>> 0).toNumber();
                    if (object.status != null) {
                        if (typeof object.status !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageInfo.status: object expected");
                        message.status = $root.com.quorumhill.wonton.PledgeStageStatus.fromObject(object.status);
                    }
                    if (object.commitmentCondition != null) {
                        if (typeof object.commitmentCondition !== "object")
                            throw TypeError(".com.quorumhill.wonton.PledgeStageInfo.commitmentCondition: object expected");
                        message.commitmentCondition = $root.com.quorumhill.wonton.PledgeStageCondition.fromObject(object.commitmentCondition);
                    }
                    if (object.commitmentValueUsd != null)
                        if ($util.Long)
                            (message.commitmentValueUsd = $util.Long.fromValue(object.commitmentValueUsd)).unsigned = false;
                        else if (typeof object.commitmentValueUsd === "string")
                            message.commitmentValueUsd = parseInt(object.commitmentValueUsd, 10);
                        else if (typeof object.commitmentValueUsd === "number")
                            message.commitmentValueUsd = object.commitmentValueUsd;
                        else if (typeof object.commitmentValueUsd === "object")
                            message.commitmentValueUsd = new $util.LongBits(object.commitmentValueUsd.low >>> 0, object.commitmentValueUsd.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a PledgeStageInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @static
                 * @param {com.quorumhill.wonton.PledgeStageInfo} message PledgeStageInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PledgeStageInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.pledgeId = null;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.creationTimestampUsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.creationTimestampUsec = options.longs === String ? "0" : 0;
                        object.status = null;
                        object.commitmentCondition = null;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.commitmentValueUsd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.commitmentValueUsd = options.longs === String ? "0" : 0;
                    }
                    if (message.pledgeId != null && message.hasOwnProperty("pledgeId"))
                        object.pledgeId = $root.com.quorumhill.wonton.PledgeId.toObject(message.pledgeId, options);
                    if (message.creationTimestampUsec != null && message.hasOwnProperty("creationTimestampUsec"))
                        if (typeof message.creationTimestampUsec === "number")
                            object.creationTimestampUsec = options.longs === String ? String(message.creationTimestampUsec) : message.creationTimestampUsec;
                        else
                            object.creationTimestampUsec = options.longs === String ? $util.Long.prototype.toString.call(message.creationTimestampUsec) : options.longs === Number ? new $util.LongBits(message.creationTimestampUsec.low >>> 0, message.creationTimestampUsec.high >>> 0).toNumber() : message.creationTimestampUsec;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = $root.com.quorumhill.wonton.PledgeStageStatus.toObject(message.status, options);
                    if (message.commitmentCondition != null && message.hasOwnProperty("commitmentCondition"))
                        object.commitmentCondition = $root.com.quorumhill.wonton.PledgeStageCondition.toObject(message.commitmentCondition, options);
                    if (message.commitmentValueUsd != null && message.hasOwnProperty("commitmentValueUsd"))
                        if (typeof message.commitmentValueUsd === "number")
                            object.commitmentValueUsd = options.longs === String ? String(message.commitmentValueUsd) : message.commitmentValueUsd;
                        else
                            object.commitmentValueUsd = options.longs === String ? $util.Long.prototype.toString.call(message.commitmentValueUsd) : options.longs === Number ? new $util.LongBits(message.commitmentValueUsd.low >>> 0, message.commitmentValueUsd.high >>> 0).toNumber() : message.commitmentValueUsd;
                    return object;
                };

                /**
                 * Converts this PledgeStageInfo to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PledgeStageInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for PledgeStageInfo
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.PledgeStageInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                PledgeStageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.PledgeStageInfo";
                };

                return PledgeStageInfo;
            })();

            wonton.UniversityStageInfo = (function() {

                /**
                 * Properties of an UniversityStageInfo.
                 * @memberof com.quorumhill.wonton
                 * @interface IUniversityStageInfo
                 * @property {string|null} [domainName] UniversityStageInfo domainName
                 * @property {Array.<com.quorumhill.wonton.PledgeStageInfo>|null} [pledgeInfos] UniversityStageInfo pledgeInfos
                 */

                /**
                 * Constructs a new UniversityStageInfo.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an UniversityStageInfo.
                 * @implements IUniversityStageInfo
                 * @constructor
                 * @param {com.quorumhill.wonton.IUniversityStageInfo=} [properties] Properties to set
                 */
                function UniversityStageInfo(properties) {
                    this.pledgeInfos = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UniversityStageInfo domainName.
                 * @member {string} domainName
                 * @memberof com.quorumhill.wonton.UniversityStageInfo
                 * @instance
                 */
                UniversityStageInfo.prototype.domainName = "";

                /**
                 * UniversityStageInfo pledgeInfos.
                 * @member {Array.<com.quorumhill.wonton.PledgeStageInfo>} pledgeInfos
                 * @memberof com.quorumhill.wonton.UniversityStageInfo
                 * @instance
                 */
                UniversityStageInfo.prototype.pledgeInfos = $util.emptyArray;

                /**
                 * Encodes the specified UniversityStageInfo message. Does not implicitly {@link com.quorumhill.wonton.UniversityStageInfo.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UniversityStageInfo
                 * @static
                 * @param {com.quorumhill.wonton.UniversityStageInfo} message UniversityStageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UniversityStageInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.domainName != null && Object.hasOwnProperty.call(message, "domainName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.domainName);
                    if (message.pledgeInfos != null && message.pledgeInfos.length)
                        for (let i = 0; i < message.pledgeInfos.length; ++i)
                            $root.com.quorumhill.wonton.PledgeStageInfo.encode(message.pledgeInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes an UniversityStageInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UniversityStageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UniversityStageInfo} UniversityStageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UniversityStageInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UniversityStageInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.domainName = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.pledgeInfos && message.pledgeInfos.length))
                                    message.pledgeInfos = [];
                                message.pledgeInfos.push($root.com.quorumhill.wonton.PledgeStageInfo.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an UniversityStageInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UniversityStageInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UniversityStageInfo} UniversityStageInfo
                 */
                UniversityStageInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UniversityStageInfo)
                        return object;
                    let message = new $root.com.quorumhill.wonton.UniversityStageInfo();
                    if (object.domainName != null)
                        message.domainName = String(object.domainName);
                    if (object.pledgeInfos) {
                        if (!Array.isArray(object.pledgeInfos))
                            throw TypeError(".com.quorumhill.wonton.UniversityStageInfo.pledgeInfos: array expected");
                        message.pledgeInfos = [];
                        for (let i = 0; i < object.pledgeInfos.length; ++i) {
                            if (typeof object.pledgeInfos[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.UniversityStageInfo.pledgeInfos: object expected");
                            message.pledgeInfos[i] = $root.com.quorumhill.wonton.PledgeStageInfo.fromObject(object.pledgeInfos[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an UniversityStageInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UniversityStageInfo
                 * @static
                 * @param {com.quorumhill.wonton.UniversityStageInfo} message UniversityStageInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UniversityStageInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.pledgeInfos = [];
                    if (options.defaults)
                        object.domainName = "";
                    if (message.domainName != null && message.hasOwnProperty("domainName"))
                        object.domainName = message.domainName;
                    if (message.pledgeInfos && message.pledgeInfos.length) {
                        object.pledgeInfos = [];
                        for (let j = 0; j < message.pledgeInfos.length; ++j)
                            object.pledgeInfos[j] = $root.com.quorumhill.wonton.PledgeStageInfo.toObject(message.pledgeInfos[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this UniversityStageInfo to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UniversityStageInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UniversityStageInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UniversityStageInfo
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UniversityStageInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UniversityStageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UniversityStageInfo";
                };

                return UniversityStageInfo;
            })();

            wonton.StageInfo = (function() {

                /**
                 * Properties of a StageInfo.
                 * @memberof com.quorumhill.wonton
                 * @interface IStageInfo
                 * @property {Array.<com.quorumhill.wonton.UniversityStageInfo>|null} [universityInfos] StageInfo universityInfos
                 */

                /**
                 * Constructs a new StageInfo.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a StageInfo.
                 * @implements IStageInfo
                 * @constructor
                 * @param {com.quorumhill.wonton.IStageInfo=} [properties] Properties to set
                 */
                function StageInfo(properties) {
                    this.universityInfos = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StageInfo universityInfos.
                 * @member {Array.<com.quorumhill.wonton.UniversityStageInfo>} universityInfos
                 * @memberof com.quorumhill.wonton.StageInfo
                 * @instance
                 */
                StageInfo.prototype.universityInfos = $util.emptyArray;

                /**
                 * Encodes the specified StageInfo message. Does not implicitly {@link com.quorumhill.wonton.StageInfo.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.StageInfo
                 * @static
                 * @param {com.quorumhill.wonton.StageInfo} message StageInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StageInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.universityInfos != null && message.universityInfos.length)
                        for (let i = 0; i < message.universityInfos.length; ++i)
                            $root.com.quorumhill.wonton.UniversityStageInfo.encode(message.universityInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a StageInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.StageInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.StageInfo} StageInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StageInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.StageInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.universityInfos && message.universityInfos.length))
                                    message.universityInfos = [];
                                message.universityInfos.push($root.com.quorumhill.wonton.UniversityStageInfo.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a StageInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.StageInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.StageInfo} StageInfo
                 */
                StageInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.StageInfo)
                        return object;
                    let message = new $root.com.quorumhill.wonton.StageInfo();
                    if (object.universityInfos) {
                        if (!Array.isArray(object.universityInfos))
                            throw TypeError(".com.quorumhill.wonton.StageInfo.universityInfos: array expected");
                        message.universityInfos = [];
                        for (let i = 0; i < object.universityInfos.length; ++i) {
                            if (typeof object.universityInfos[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.StageInfo.universityInfos: object expected");
                            message.universityInfos[i] = $root.com.quorumhill.wonton.UniversityStageInfo.fromObject(object.universityInfos[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a StageInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.StageInfo
                 * @static
                 * @param {com.quorumhill.wonton.StageInfo} message StageInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StageInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.universityInfos = [];
                    if (message.universityInfos && message.universityInfos.length) {
                        object.universityInfos = [];
                        for (let j = 0; j < message.universityInfos.length; ++j)
                            object.universityInfos[j] = $root.com.quorumhill.wonton.UniversityStageInfo.toObject(message.universityInfos[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this StageInfo to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.StageInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StageInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for StageInfo
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.StageInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                StageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.StageInfo";
                };

                return StageInfo;
            })();

            wonton.InvestmentsBackdropInfo = (function() {

                /**
                 * Properties of an InvestmentsBackdropInfo.
                 * @memberof com.quorumhill.wonton
                 * @interface IInvestmentsBackdropInfo
                 * @property {Long|null} [investmentDeadlineUsec] InvestmentsBackdropInfo investmentDeadlineUsec
                 */

                /**
                 * Constructs a new InvestmentsBackdropInfo.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an InvestmentsBackdropInfo.
                 * @implements IInvestmentsBackdropInfo
                 * @constructor
                 * @param {com.quorumhill.wonton.IInvestmentsBackdropInfo=} [properties] Properties to set
                 */
                function InvestmentsBackdropInfo(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * InvestmentsBackdropInfo investmentDeadlineUsec.
                 * @member {Long} investmentDeadlineUsec
                 * @memberof com.quorumhill.wonton.InvestmentsBackdropInfo
                 * @instance
                 */
                InvestmentsBackdropInfo.prototype.investmentDeadlineUsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Encodes the specified InvestmentsBackdropInfo message. Does not implicitly {@link com.quorumhill.wonton.InvestmentsBackdropInfo.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.InvestmentsBackdropInfo
                 * @static
                 * @param {com.quorumhill.wonton.InvestmentsBackdropInfo} message InvestmentsBackdropInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                InvestmentsBackdropInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.investmentDeadlineUsec != null && Object.hasOwnProperty.call(message, "investmentDeadlineUsec"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.investmentDeadlineUsec);
                    return writer;
                };

                /**
                 * Decodes an InvestmentsBackdropInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.InvestmentsBackdropInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.InvestmentsBackdropInfo} InvestmentsBackdropInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                InvestmentsBackdropInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.InvestmentsBackdropInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.investmentDeadlineUsec = reader.int64();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an InvestmentsBackdropInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.InvestmentsBackdropInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.InvestmentsBackdropInfo} InvestmentsBackdropInfo
                 */
                InvestmentsBackdropInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.InvestmentsBackdropInfo)
                        return object;
                    let message = new $root.com.quorumhill.wonton.InvestmentsBackdropInfo();
                    if (object.investmentDeadlineUsec != null)
                        if ($util.Long)
                            (message.investmentDeadlineUsec = $util.Long.fromValue(object.investmentDeadlineUsec)).unsigned = false;
                        else if (typeof object.investmentDeadlineUsec === "string")
                            message.investmentDeadlineUsec = parseInt(object.investmentDeadlineUsec, 10);
                        else if (typeof object.investmentDeadlineUsec === "number")
                            message.investmentDeadlineUsec = object.investmentDeadlineUsec;
                        else if (typeof object.investmentDeadlineUsec === "object")
                            message.investmentDeadlineUsec = new $util.LongBits(object.investmentDeadlineUsec.low >>> 0, object.investmentDeadlineUsec.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from an InvestmentsBackdropInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.InvestmentsBackdropInfo
                 * @static
                 * @param {com.quorumhill.wonton.InvestmentsBackdropInfo} message InvestmentsBackdropInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                InvestmentsBackdropInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.investmentDeadlineUsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.investmentDeadlineUsec = options.longs === String ? "0" : 0;
                    if (message.investmentDeadlineUsec != null && message.hasOwnProperty("investmentDeadlineUsec"))
                        if (typeof message.investmentDeadlineUsec === "number")
                            object.investmentDeadlineUsec = options.longs === String ? String(message.investmentDeadlineUsec) : message.investmentDeadlineUsec;
                        else
                            object.investmentDeadlineUsec = options.longs === String ? $util.Long.prototype.toString.call(message.investmentDeadlineUsec) : options.longs === Number ? new $util.LongBits(message.investmentDeadlineUsec.low >>> 0, message.investmentDeadlineUsec.high >>> 0).toNumber() : message.investmentDeadlineUsec;
                    return object;
                };

                /**
                 * Converts this InvestmentsBackdropInfo to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.InvestmentsBackdropInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                InvestmentsBackdropInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for InvestmentsBackdropInfo
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.InvestmentsBackdropInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                InvestmentsBackdropInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.InvestmentsBackdropInfo";
                };

                return InvestmentsBackdropInfo;
            })();

            wonton.UniversityStatus = (function() {

                /**
                 * Properties of an UniversityStatus.
                 * @memberof com.quorumhill.wonton
                 * @interface IUniversityStatus
                 */

                /**
                 * Constructs a new UniversityStatus.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an UniversityStatus.
                 * @implements IUniversityStatus
                 * @constructor
                 * @param {com.quorumhill.wonton.IUniversityStatus=} [properties] Properties to set
                 */
                function UniversityStatus(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified UniversityStatus message. Does not implicitly {@link com.quorumhill.wonton.UniversityStatus.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UniversityStatus
                 * @static
                 * @param {com.quorumhill.wonton.UniversityStatus} message UniversityStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UniversityStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes an UniversityStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UniversityStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UniversityStatus} UniversityStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UniversityStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UniversityStatus();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an UniversityStatus message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UniversityStatus
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UniversityStatus} UniversityStatus
                 */
                UniversityStatus.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UniversityStatus)
                        return object;
                    return new $root.com.quorumhill.wonton.UniversityStatus();
                };

                /**
                 * Creates a plain object from an UniversityStatus message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UniversityStatus
                 * @static
                 * @param {com.quorumhill.wonton.UniversityStatus} message UniversityStatus
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UniversityStatus.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this UniversityStatus to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UniversityStatus
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UniversityStatus.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UniversityStatus
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UniversityStatus
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UniversityStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UniversityStatus";
                };

                /**
                 * Enum enum.
                 * @name com.quorumhill.wonton.UniversityStatus.Enum
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} ENABLED=1 ENABLED value
                 * @property {number} DISABLED=2 DISABLED value
                 */
                UniversityStatus.Enum = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "ENABLED"] = 1;
                    values[valuesById[2] = "DISABLED"] = 2;
                    return values;
                })();

                return UniversityStatus;
            })();

            wonton.UniversityStatusEventReason = (function() {

                /**
                 * Properties of an UniversityStatusEventReason.
                 * @memberof com.quorumhill.wonton
                 * @interface IUniversityStatusEventReason
                 */

                /**
                 * Constructs a new UniversityStatusEventReason.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an UniversityStatusEventReason.
                 * @implements IUniversityStatusEventReason
                 * @constructor
                 * @param {com.quorumhill.wonton.IUniversityStatusEventReason=} [properties] Properties to set
                 */
                function UniversityStatusEventReason(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Encodes the specified UniversityStatusEventReason message. Does not implicitly {@link com.quorumhill.wonton.UniversityStatusEventReason.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UniversityStatusEventReason
                 * @static
                 * @param {com.quorumhill.wonton.UniversityStatusEventReason} message UniversityStatusEventReason message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UniversityStatusEventReason.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };

                /**
                 * Decodes an UniversityStatusEventReason message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UniversityStatusEventReason
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UniversityStatusEventReason} UniversityStatusEventReason
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UniversityStatusEventReason.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UniversityStatusEventReason();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an UniversityStatusEventReason message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UniversityStatusEventReason
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UniversityStatusEventReason} UniversityStatusEventReason
                 */
                UniversityStatusEventReason.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UniversityStatusEventReason)
                        return object;
                    return new $root.com.quorumhill.wonton.UniversityStatusEventReason();
                };

                /**
                 * Creates a plain object from an UniversityStatusEventReason message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UniversityStatusEventReason
                 * @static
                 * @param {com.quorumhill.wonton.UniversityStatusEventReason} message UniversityStatusEventReason
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UniversityStatusEventReason.toObject = function toObject() {
                    return {};
                };

                /**
                 * Converts this UniversityStatusEventReason to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UniversityStatusEventReason
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UniversityStatusEventReason.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UniversityStatusEventReason
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UniversityStatusEventReason
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UniversityStatusEventReason.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UniversityStatusEventReason";
                };

                /**
                 * Enum enum.
                 * @name com.quorumhill.wonton.UniversityStatusEventReason.Enum
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} INITIAL_ACCESS=1 INITIAL_ACCESS value
                 */
                UniversityStatusEventReason.Enum = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "INITIAL_ACCESS"] = 1;
                    return values;
                })();

                return UniversityStatusEventReason;
            })();

            wonton.UniversityStatusEvent = (function() {

                /**
                 * Properties of an UniversityStatusEvent.
                 * @memberof com.quorumhill.wonton
                 * @interface IUniversityStatusEvent
                 * @property {com.quorumhill.wonton.UniversityStatus.Enum|null} [status] UniversityStatusEvent status
                 * @property {Long|null} [eventTimestampUsec] UniversityStatusEvent eventTimestampUsec
                 * @property {com.quorumhill.wonton.UniversityStatusEventReason.Enum|null} [reasonEnum] UniversityStatusEvent reasonEnum
                 * @property {string|null} [reasonString] UniversityStatusEvent reasonString
                 */

                /**
                 * Constructs a new UniversityStatusEvent.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an UniversityStatusEvent.
                 * @implements IUniversityStatusEvent
                 * @constructor
                 * @param {com.quorumhill.wonton.IUniversityStatusEvent=} [properties] Properties to set
                 */
                function UniversityStatusEvent(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UniversityStatusEvent status.
                 * @member {com.quorumhill.wonton.UniversityStatus.Enum} status
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @instance
                 */
                UniversityStatusEvent.prototype.status = 0;

                /**
                 * UniversityStatusEvent eventTimestampUsec.
                 * @member {Long} eventTimestampUsec
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @instance
                 */
                UniversityStatusEvent.prototype.eventTimestampUsec = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * UniversityStatusEvent reasonEnum.
                 * @member {com.quorumhill.wonton.UniversityStatusEventReason.Enum|null|undefined} reasonEnum
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @instance
                 */
                UniversityStatusEvent.prototype.reasonEnum = null;

                /**
                 * UniversityStatusEvent reasonString.
                 * @member {string|null|undefined} reasonString
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @instance
                 */
                UniversityStatusEvent.prototype.reasonString = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * UniversityStatusEvent reason.
                 * @member {"reasonEnum"|"reasonString"|undefined} reason
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @instance
                 */
                Object.defineProperty(UniversityStatusEvent.prototype, "reason", {
                    get: $util.oneOfGetter($oneOfFields = ["reasonEnum", "reasonString"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Encodes the specified UniversityStatusEvent message. Does not implicitly {@link com.quorumhill.wonton.UniversityStatusEvent.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @static
                 * @param {com.quorumhill.wonton.UniversityStatusEvent} message UniversityStatusEvent message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UniversityStatusEvent.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                    if (message.eventTimestampUsec != null && Object.hasOwnProperty.call(message, "eventTimestampUsec"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.eventTimestampUsec);
                    if (message.reasonEnum != null && Object.hasOwnProperty.call(message, "reasonEnum"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reasonEnum);
                    if (message.reasonString != null && Object.hasOwnProperty.call(message, "reasonString"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.reasonString);
                    return writer;
                };

                /**
                 * Decodes an UniversityStatusEvent message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UniversityStatusEvent} UniversityStatusEvent
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UniversityStatusEvent.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UniversityStatusEvent();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.status = reader.int32();
                                break;
                            }
                        case 2: {
                                message.eventTimestampUsec = reader.int64();
                                break;
                            }
                        case 3: {
                                message.reasonEnum = reader.int32();
                                break;
                            }
                        case 4: {
                                message.reasonString = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an UniversityStatusEvent message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UniversityStatusEvent} UniversityStatusEvent
                 */
                UniversityStatusEvent.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UniversityStatusEvent)
                        return object;
                    let message = new $root.com.quorumhill.wonton.UniversityStatusEvent();
                    switch (object.status) {
                    default:
                        if (typeof object.status === "number") {
                            message.status = object.status;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.status = 0;
                        break;
                    case "ENABLED":
                    case 1:
                        message.status = 1;
                        break;
                    case "DISABLED":
                    case 2:
                        message.status = 2;
                        break;
                    }
                    if (object.eventTimestampUsec != null)
                        if ($util.Long)
                            (message.eventTimestampUsec = $util.Long.fromValue(object.eventTimestampUsec)).unsigned = false;
                        else if (typeof object.eventTimestampUsec === "string")
                            message.eventTimestampUsec = parseInt(object.eventTimestampUsec, 10);
                        else if (typeof object.eventTimestampUsec === "number")
                            message.eventTimestampUsec = object.eventTimestampUsec;
                        else if (typeof object.eventTimestampUsec === "object")
                            message.eventTimestampUsec = new $util.LongBits(object.eventTimestampUsec.low >>> 0, object.eventTimestampUsec.high >>> 0).toNumber();
                    switch (object.reasonEnum) {
                    default:
                        if (typeof object.reasonEnum === "number") {
                            message.reasonEnum = object.reasonEnum;
                            break;
                        }
                        break;
                    case "UNKNOWN":
                    case 0:
                        message.reasonEnum = 0;
                        break;
                    case "INITIAL_ACCESS":
                    case 1:
                        message.reasonEnum = 1;
                        break;
                    }
                    if (object.reasonString != null)
                        message.reasonString = String(object.reasonString);
                    return message;
                };

                /**
                 * Creates a plain object from an UniversityStatusEvent message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @static
                 * @param {com.quorumhill.wonton.UniversityStatusEvent} message UniversityStatusEvent
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UniversityStatusEvent.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.status = options.enums === String ? "UNKNOWN" : 0;
                        if ($util.Long) {
                            let long = new $util.Long(0, 0, false);
                            object.eventTimestampUsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.eventTimestampUsec = options.longs === String ? "0" : 0;
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.com.quorumhill.wonton.UniversityStatus.Enum[message.status] === undefined ? message.status : $root.com.quorumhill.wonton.UniversityStatus.Enum[message.status] : message.status;
                    if (message.eventTimestampUsec != null && message.hasOwnProperty("eventTimestampUsec"))
                        if (typeof message.eventTimestampUsec === "number")
                            object.eventTimestampUsec = options.longs === String ? String(message.eventTimestampUsec) : message.eventTimestampUsec;
                        else
                            object.eventTimestampUsec = options.longs === String ? $util.Long.prototype.toString.call(message.eventTimestampUsec) : options.longs === Number ? new $util.LongBits(message.eventTimestampUsec.low >>> 0, message.eventTimestampUsec.high >>> 0).toNumber() : message.eventTimestampUsec;
                    if (message.reasonEnum != null && message.hasOwnProperty("reasonEnum")) {
                        object.reasonEnum = options.enums === String ? $root.com.quorumhill.wonton.UniversityStatusEventReason.Enum[message.reasonEnum] === undefined ? message.reasonEnum : $root.com.quorumhill.wonton.UniversityStatusEventReason.Enum[message.reasonEnum] : message.reasonEnum;
                        if (options.oneofs)
                            object.reason = "reasonEnum";
                    }
                    if (message.reasonString != null && message.hasOwnProperty("reasonString")) {
                        object.reasonString = message.reasonString;
                        if (options.oneofs)
                            object.reason = "reasonString";
                    }
                    return object;
                };

                /**
                 * Converts this UniversityStatusEvent to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UniversityStatusEvent.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UniversityStatusEvent
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UniversityStatusEvent
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UniversityStatusEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UniversityStatusEvent";
                };

                return UniversityStatusEvent;
            })();

            wonton.UniversityBackdropInfo = (function() {

                /**
                 * Properties of an UniversityBackdropInfo.
                 * @memberof com.quorumhill.wonton
                 * @interface IUniversityBackdropInfo
                 * @property {string|null} [domainName] UniversityBackdropInfo domainName
                 * @property {Array.<com.quorumhill.wonton.UniversityStatusEvent>|null} [statuses] UniversityBackdropInfo statuses
                 * @property {string|null} [countryCode] UniversityBackdropInfo countryCode
                 */

                /**
                 * Constructs a new UniversityBackdropInfo.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents an UniversityBackdropInfo.
                 * @implements IUniversityBackdropInfo
                 * @constructor
                 * @param {com.quorumhill.wonton.IUniversityBackdropInfo=} [properties] Properties to set
                 */
                function UniversityBackdropInfo(properties) {
                    this.statuses = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UniversityBackdropInfo domainName.
                 * @member {string} domainName
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @instance
                 */
                UniversityBackdropInfo.prototype.domainName = "";

                /**
                 * UniversityBackdropInfo statuses.
                 * @member {Array.<com.quorumhill.wonton.UniversityStatusEvent>} statuses
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @instance
                 */
                UniversityBackdropInfo.prototype.statuses = $util.emptyArray;

                /**
                 * UniversityBackdropInfo countryCode.
                 * @member {string} countryCode
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @instance
                 */
                UniversityBackdropInfo.prototype.countryCode = "";

                /**
                 * Encodes the specified UniversityBackdropInfo message. Does not implicitly {@link com.quorumhill.wonton.UniversityBackdropInfo.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @static
                 * @param {com.quorumhill.wonton.UniversityBackdropInfo} message UniversityBackdropInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UniversityBackdropInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.domainName != null && Object.hasOwnProperty.call(message, "domainName"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.domainName);
                    if (message.statuses != null && message.statuses.length)
                        for (let i = 0; i < message.statuses.length; ++i)
                            $root.com.quorumhill.wonton.UniversityStatusEvent.encode(message.statuses[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.countryCode != null && Object.hasOwnProperty.call(message, "countryCode"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.countryCode);
                    return writer;
                };

                /**
                 * Decodes an UniversityBackdropInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.UniversityBackdropInfo} UniversityBackdropInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UniversityBackdropInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.UniversityBackdropInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.domainName = reader.string();
                                break;
                            }
                        case 2: {
                                if (!(message.statuses && message.statuses.length))
                                    message.statuses = [];
                                message.statuses.push($root.com.quorumhill.wonton.UniversityStatusEvent.decode(reader, reader.uint32()));
                                break;
                            }
                        case 3: {
                                message.countryCode = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates an UniversityBackdropInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.UniversityBackdropInfo} UniversityBackdropInfo
                 */
                UniversityBackdropInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.UniversityBackdropInfo)
                        return object;
                    let message = new $root.com.quorumhill.wonton.UniversityBackdropInfo();
                    if (object.domainName != null)
                        message.domainName = String(object.domainName);
                    if (object.statuses) {
                        if (!Array.isArray(object.statuses))
                            throw TypeError(".com.quorumhill.wonton.UniversityBackdropInfo.statuses: array expected");
                        message.statuses = [];
                        for (let i = 0; i < object.statuses.length; ++i) {
                            if (typeof object.statuses[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.UniversityBackdropInfo.statuses: object expected");
                            message.statuses[i] = $root.com.quorumhill.wonton.UniversityStatusEvent.fromObject(object.statuses[i]);
                        }
                    }
                    if (object.countryCode != null)
                        message.countryCode = String(object.countryCode);
                    return message;
                };

                /**
                 * Creates a plain object from an UniversityBackdropInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @static
                 * @param {com.quorumhill.wonton.UniversityBackdropInfo} message UniversityBackdropInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UniversityBackdropInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.statuses = [];
                    if (options.defaults) {
                        object.domainName = "";
                        object.countryCode = "";
                    }
                    if (message.domainName != null && message.hasOwnProperty("domainName"))
                        object.domainName = message.domainName;
                    if (message.statuses && message.statuses.length) {
                        object.statuses = [];
                        for (let j = 0; j < message.statuses.length; ++j)
                            object.statuses[j] = $root.com.quorumhill.wonton.UniversityStatusEvent.toObject(message.statuses[j], options);
                    }
                    if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                        object.countryCode = message.countryCode;
                    return object;
                };

                /**
                 * Converts this UniversityBackdropInfo to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UniversityBackdropInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for UniversityBackdropInfo
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.UniversityBackdropInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                UniversityBackdropInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.UniversityBackdropInfo";
                };

                return UniversityBackdropInfo;
            })();

            wonton.BackdropInfo = (function() {

                /**
                 * Properties of a BackdropInfo.
                 * @memberof com.quorumhill.wonton
                 * @interface IBackdropInfo
                 * @property {com.quorumhill.wonton.InvestmentsBackdropInfo|null} [investmentsInfo] BackdropInfo investmentsInfo
                 * @property {Array.<com.quorumhill.wonton.UniversityBackdropInfo>|null} [universityInfos] BackdropInfo universityInfos
                 */

                /**
                 * Constructs a new BackdropInfo.
                 * @memberof com.quorumhill.wonton
                 * @classdesc Represents a BackdropInfo.
                 * @implements IBackdropInfo
                 * @constructor
                 * @param {com.quorumhill.wonton.IBackdropInfo=} [properties] Properties to set
                 */
                function BackdropInfo(properties) {
                    this.universityInfos = [];
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BackdropInfo investmentsInfo.
                 * @member {com.quorumhill.wonton.InvestmentsBackdropInfo|null|undefined} investmentsInfo
                 * @memberof com.quorumhill.wonton.BackdropInfo
                 * @instance
                 */
                BackdropInfo.prototype.investmentsInfo = null;

                /**
                 * BackdropInfo universityInfos.
                 * @member {Array.<com.quorumhill.wonton.UniversityBackdropInfo>} universityInfos
                 * @memberof com.quorumhill.wonton.BackdropInfo
                 * @instance
                 */
                BackdropInfo.prototype.universityInfos = $util.emptyArray;

                /**
                 * Encodes the specified BackdropInfo message. Does not implicitly {@link com.quorumhill.wonton.BackdropInfo.verify|verify} messages.
                 * @function encode
                 * @memberof com.quorumhill.wonton.BackdropInfo
                 * @static
                 * @param {com.quorumhill.wonton.BackdropInfo} message BackdropInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BackdropInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.investmentsInfo != null && Object.hasOwnProperty.call(message, "investmentsInfo"))
                        $root.com.quorumhill.wonton.InvestmentsBackdropInfo.encode(message.investmentsInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.universityInfos != null && message.universityInfos.length)
                        for (let i = 0; i < message.universityInfos.length; ++i)
                            $root.com.quorumhill.wonton.UniversityBackdropInfo.encode(message.universityInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Decodes a BackdropInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.quorumhill.wonton.BackdropInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {com.quorumhill.wonton.BackdropInfo} BackdropInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BackdropInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.quorumhill.wonton.BackdropInfo();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.investmentsInfo = $root.com.quorumhill.wonton.InvestmentsBackdropInfo.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                if (!(message.universityInfos && message.universityInfos.length))
                                    message.universityInfos = [];
                                message.universityInfos.push($root.com.quorumhill.wonton.UniversityBackdropInfo.decode(reader, reader.uint32()));
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Creates a BackdropInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof com.quorumhill.wonton.BackdropInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {com.quorumhill.wonton.BackdropInfo} BackdropInfo
                 */
                BackdropInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.com.quorumhill.wonton.BackdropInfo)
                        return object;
                    let message = new $root.com.quorumhill.wonton.BackdropInfo();
                    if (object.investmentsInfo != null) {
                        if (typeof object.investmentsInfo !== "object")
                            throw TypeError(".com.quorumhill.wonton.BackdropInfo.investmentsInfo: object expected");
                        message.investmentsInfo = $root.com.quorumhill.wonton.InvestmentsBackdropInfo.fromObject(object.investmentsInfo);
                    }
                    if (object.universityInfos) {
                        if (!Array.isArray(object.universityInfos))
                            throw TypeError(".com.quorumhill.wonton.BackdropInfo.universityInfos: array expected");
                        message.universityInfos = [];
                        for (let i = 0; i < object.universityInfos.length; ++i) {
                            if (typeof object.universityInfos[i] !== "object")
                                throw TypeError(".com.quorumhill.wonton.BackdropInfo.universityInfos: object expected");
                            message.universityInfos[i] = $root.com.quorumhill.wonton.UniversityBackdropInfo.fromObject(object.universityInfos[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a BackdropInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof com.quorumhill.wonton.BackdropInfo
                 * @static
                 * @param {com.quorumhill.wonton.BackdropInfo} message BackdropInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BackdropInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.arrays || options.defaults)
                        object.universityInfos = [];
                    if (options.defaults)
                        object.investmentsInfo = null;
                    if (message.investmentsInfo != null && message.hasOwnProperty("investmentsInfo"))
                        object.investmentsInfo = $root.com.quorumhill.wonton.InvestmentsBackdropInfo.toObject(message.investmentsInfo, options);
                    if (message.universityInfos && message.universityInfos.length) {
                        object.universityInfos = [];
                        for (let j = 0; j < message.universityInfos.length; ++j)
                            object.universityInfos[j] = $root.com.quorumhill.wonton.UniversityBackdropInfo.toObject(message.universityInfos[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this BackdropInfo to JSON.
                 * @function toJSON
                 * @memberof com.quorumhill.wonton.BackdropInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BackdropInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for BackdropInfo
                 * @function getTypeUrl
                 * @memberof com.quorumhill.wonton.BackdropInfo
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                BackdropInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/com.quorumhill.wonton.BackdropInfo";
                };

                return BackdropInfo;
            })();

            return wonton;
        })();

        return quorumhill;
    })();

    return com;
})();

export { $root as default };
