export default `A well-rigged, well-animated character can still look flat and lifeless if it is not textured properly. Texture maps are what give a 3D model its color, surface detail, and material feel, from rough, worn leather to smooth, reflective metal. This guide explains the four most common texture maps you will encounter, and what each one actually does.

### What Is a Texture Map?

A texture map is essentially a flat, 2D image that gets wrapped around your 3D model's surface, much like wrapping paper around a gift, telling the computer exactly how each tiny point on the surface should look or behave. Different types of texture maps control different visual properties, and modern, realistic-looking 3D models typically combine several of these maps together to achieve a convincing final appearance.

### Albedo Maps: The Base Color

The albedo map, sometimes called a diffuse map or color map, is the most intuitive of the four. It is simply the base color and pattern of the surface, without any lighting information baked in. If you are texturing a character's shirt, the albedo map is the flat, plain-colored (or patterned) image showing what color that shirt fabric actually is, independent of how light happens to be hitting it in any particular scene.

Because the albedo map contains only color information, and not lighting or shading, it can be reused correctly under any lighting condition. The lighting itself is calculated separately, in real time, based on the scene's actual light sources, which is what makes modern real-time 3D rendering look convincing under a wide variety of lighting setups.

### Normal Maps: Faking Surface Detail

Adding real, physical bumps and grooves to a 3D model, like the texture of tree bark or the stitching on a jacket, would require an enormous number of extra polygons, which can slow down performance significantly. Normal maps solve this problem cleverly, using a specially colored image to trick the lighting calculations into behaving as though the surface has fine detail, even though the underlying geometry remains flat and simple.

The distinctive purple-blue coloring you often see in normal map images is not meant to be seen directly. It encodes directional information that tells the rendering engine which way each tiny point on the surface should appear to be facing, which affects how light reflects off it. The result is a surface that appears to have real bumps, wrinkles, and fine detail, without the actual mesh needing that level of geometric complexity.

### Roughness Maps: Controlling Shine

The roughness map controls how sharp or blurry reflections appear across the surface of your model. A very smooth, polished surface, like glass or polished metal, has low roughness, producing sharp, clear reflections. A rough, matte surface, like unfinished wood or fabric, has high roughness, scattering light in many directions and producing soft, blurry reflections, or in extreme cases, almost no visible reflection at all.

Roughness maps let a single material vary in shininess across its surface, which is incredibly useful for realism. A worn metal object, for example, might be scratched and dull in some areas while still shiny and polished in others, and a roughness map lets you paint exactly where each level of shine should appear.

### Metallic Maps: Metal or Not Metal

The metallic map is often the simplest of the four, typically just distinguishing between metallic and non-metallic surfaces, sometimes with values in between for partially metallic or mixed materials. This map fundamentally changes how a surface's color interacts with light. Metallic surfaces reflect the color of their surroundings and lose most of their own diffuse color, while non-metallic surfaces retain their own base color and reflect light in a very different, softer way.

Correctly setting the metallic map is often what separates a "shiny gray plastic" look from a genuinely convincing metal appearance, even when the albedo color is identical between the two.

### How These Maps Work Together

These four maps are not used in isolation. A modern, realistic material typically combines all of them together: the albedo map providing the base color, the normal map adding fine surface detail, the roughness map controlling how sharp or soft reflections appear, and the metallic map determining whether the surface behaves like metal or not. Together, these maps let a rendering engine calculate a remarkably realistic final appearance in real time, which is exactly why a good animator tool supports previewing all of them directly in the 3D viewport, letting you see your fully textured, materially accurate character while you work, rather than only after export.

### Practical Tips for Beginners

- Start with just an albedo map if you are new to texturing. Getting a convincing base color and pattern right is the foundation everything else builds on.
- Add a roughness map next, since controlling shine has an enormous visual impact for relatively little extra effort.
- Save normal and metallic maps for once you are comfortable with the first two, since they require a slightly better understanding of how surfaces behave under different lighting.

Understanding texture maps transforms how you think about a model's surface, from a single flat color into a rich combination of color, detail, shine, and material type, all working together to make your animated character look genuinely convincing in real-time 3D.`;
