/**
 * Struct for representing a material for a glTF model. This is used in the
 * {@link ModelExperimental} pipeline to pass between material, custom shaders,
 * and lighting stages. This is not to be confused with {@link czm_material}
 * which is used by the older Fabric materials system, although they are similar
 *
 * @name czm_modelMaterial
 * @glslStruct
 *
 * @property {vec3} diffuse Incoming light that scatters evenly in all directions.
 * @property {float} alpha Opacity of this material. 0.0 is completely transparent; 1.0 is completely opaque.
 * @property {vec3} specular Color of reflected light at normal incidence in PBR materials. This is sometimes referred to as f0 in the literature.
 * @property {float} roughness A number from 0.0 to 1.0 representing how rough the surface is. Values near 0.0 produce glossy surfaces, while values near 1.0 produce rough surfaces.
 * @property {vec3} normal Surface's normal in eye coordinates. It is used for effects such as normal mapping. The default is the surface's unmodified normal.
 * @property {vec3} emission Light emitted by the material equally in all directions. The default is vec3(0.0), which emits no light.
 * @property {float} alpha Opacity of this material. 0.0 is completely transparent; 1.0 is completely opaque.
 */
struct czm_modelMaterial {
  vec3 diffuse;
  float alpha;
  vec3 specular;
  float roughness;
  vec3 normal;
  float occlusion;
  vec3 emissive;
};