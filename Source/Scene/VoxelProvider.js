import DeveloperError from "../Core/DeveloperError.js";

/**
 * Provides voxel data. Intended to be used with {@link VoxelPrimitive}.
 * This type describes an interface and is not intended to be instantiated directly.
 *
 * @alias VoxelProvider
 * @constructor
 *
 * @experimental This feature is not final and is subject to change without Cesium's standard deprecation policy.
 *
 * @see Cesium3DTilesVoxelProvider
 * @see GltfVoxelProvider
 * @see VoxelPrimitive
 * @see VoxelShapeType
 */
function VoxelProvider() {
  DeveloperError.throwInstantiationError();
}

Object.defineProperties(VoxelProvider.prototype, {
  /**
   * Gets a value indicating whether or not the provider is ready for use.
   * @type {Boolean}
   * @readonly
   */
  ready: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the promise that will be resolved when the provider is ready for use.
   * @type {Promise.<VoxelProvider>}
   * @readonly
   */
  readyPromise: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * A model matrix that is applied to all tiles. If undefined, the identity matrix will be used instead.
   * @type {Matrix4}
   * @readonly
   */
  modelMatrix: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the {@link VoxelShapeType}
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {VoxelShapeType}
   * @readonly
   */
  shape: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the minimum bounds.
   * If undefined, the shape's default minimum bounds will be used instead.
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {Cartesian3}
   * @readonly
   */
  minBounds: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the maximum bounds.
   * If undefined, the shape's default maximum bounds will be used instead.
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {Cartesian3}
   * @readonly
   */
  maxBounds: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the number of voxels per dimension of a tile. This is the same for all tiles in the dataset.
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {Cartesian3}
   * @readonly
   */
  dimensions: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the number of padding voxels before the tile. This improves rendering quality when sampling the edge of a tile, but it increases memory usage. If
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {Cartesian3}
   * @readonly
   */
  paddingBefore: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the number of padding voxels after the tile. This improves rendering quality when sampling the edge of a tile, but it increases memory usage. If
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {Cartesian3}
   * @readonly
   */
  paddingAfter: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the metadata names.
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {String[]}
   */
  names: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the metadata types
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {MetadataType[]}
   */
  types: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the metadata component types
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {MetadataComponentType[]}
   */
  componentTypes: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the metadata minimum values.
   * @type {Number[]}
   */
  minimumValues: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * Gets the metadata maximum values.
   * @type {Number[]}
   */
  maximumValues: {
    get: DeveloperError.throwInstantiationError,
  },

  /**
   * The maximum number of tiles that exist for this provider. This value is used as a hint to the voxel renderer to allocate an appropriate amount of GPU memory. If this value is not known it can be undefined.
   * This should not be called before {@link VoxelProvider#ready} returns true.
   * @type {Number}
   */
  maximumTileCount: {
    get: DeveloperError.throwInstantiationError,
  },
});

/**
 * A hook to update the provider every frame, called from {@link VoxelPrimitive.update}.
 * If the provider doesn't need this functionality it should leave this function undefined.
 * @function
 * @param {FrameState} frameState
 *
 * @private
 * @experimental This feature is not final and is subject to change without Cesium's standard deprecation policy.
 */
VoxelProvider.prototype.update = DeveloperError.throwInstantiationError;

/**
 * Requests the data for a given tile. The data is a flattened 3D array ordered by X, then Y, then Z.
 * This function should not be called before {@link VoxelProvider#ready} returns true.
 * @function
 * @param {Object} [options] Object with the following properties:
 * @param {Number} [options.tileLevel=0] The tile's level.
 * @param {Number} [options.tileX=0] The tile's X coordinate.
 * @param {Number} [options.tileY=0] The tile's Y coordinate.
 * @param {Number} [options.tileZ=0] The tile's Z coordinate.
 * @returns {Promise<Array[]>|undefined} An array of promises for the requested voxel data or undefined if there was a problem loading the data.
 *
 * @private
 * @experimental This feature is not final and is subject to change without Cesium's standard deprecation policy.
 */
VoxelProvider.prototype.requestData = DeveloperError.throwInstantiationError;

export default VoxelProvider;