export default `Gizmos are the small, colored handles that appear around a selected object in a 3D viewport, and they are one of the most important tools you will use every single day as a 3D animator. This guide explains exactly what gizmos are, how the three core types work, and how to use them with real precision instead of frustrating guesswork.

### What Is a Gizmo?

When you select a bone, a mesh, or any other object in a 3D viewport, a gizmo appears directly on top of it, usually made up of colored arrows, curved lines, or small squares extending outward in different directions. Each part of the gizmo controls a very specific kind of movement, letting you make precise adjustments instead of dragging an object freely and hoping it lands in the right spot.

Without gizmos, moving something in 3D space would be far harder than it sounds, because your mouse only moves in two dimensions, up, down, left, and right, on a flat screen, while your object exists in three dimensions, with an added depth axis moving toward or away from the camera. Gizmos solve this mismatch by letting you constrain movement to a single axis, or a single plane, so a two-dimensional mouse movement can still produce a precise, predictable three-dimensional result.

### The Translate Gizmo: Moving Things

The translate gizmo, sometimes called the move tool, typically looks like three colored arrows extending from the selected object, one for each axis: commonly red for the X axis, green for the Y axis, and blue for the Z axis. Clicking and dragging a single arrow moves the object only along that one axis, leaving the other two untouched. This is enormously useful when you want to slide a bone slightly forward without accidentally shifting it up or sideways as well.

Many tools also show small colored squares between pairs of arrows, letting you drag along two axes at once, such as moving freely along the ground plane without affecting height at all.

### The Rotate Gizmo: Turning Things

The rotate gizmo usually appears as a set of colored rings or circles around the selected object, again typically one for each axis. Clicking and dragging along a specific ring rotates the object only around that axis, which is exactly what you want when posing a rig. Rotating a shoulder bone, for example, should typically happen around one specific axis to create a natural swinging motion, and the rotate gizmo lets you isolate exactly that motion without accidentally introducing rotation on the other two axes at the same time.

### The Scale Gizmo: Resizing Things

The scale gizmo typically looks similar to the translate gizmo, but with small cubes or squares at the end of each axis line instead of arrowheads. Dragging one of these lets you stretch or shrink the object along a single axis, while dragging a central handle usually scales the object uniformly across all three axes at once. In animation specifically, scaling individual bones is less common than translating or rotating them, but it becomes useful for certain stylized effects, like a cartoonish squash-and-stretch motion.

### Switching Between Gizmo Modes

Most 3D animator tools let you switch quickly between translate, rotate, and scale modes using either on-screen buttons or simple keyboard shortcuts. Because you will switch between these modes constantly while working, learning the keyboard shortcuts specific to your tool, rather than always reaching for an on-screen button, will noticeably speed up your workflow once the habit becomes automatic.

### Local Space Versus World Space

An important, sometimes confusing detail is the difference between local space and world space when using gizmos. World space axes always point in the same fixed directions, regardless of how an object is currently rotated, similar to how north always points the same direction on a map. Local space axes are relative to the object's own current rotation, meaning the axes rotate along with the object itself.

For rigging and animation specifically, local space is usually what you want, since rotating a bone "around its own local axis" behaves naturally as the bone bends at different angles throughout an animation, while world space rotations can produce confusing, unintuitive results once a bone is no longer perfectly aligned with the world's fixed directions.

### Practical Tips for Getting Comfortable With Gizmos

- Practice on a simple object first, before jumping into a full character rig, until moving, rotating, and scaling along individual axes feels automatic.
- Pay close attention to which axis color corresponds to which direction in your specific tool, since this can vary slightly between different software.
- When posing a rig, prefer rotating bones over translating them for most joint movement, since real joints bend through rotation, not by sliding position, and rotating bones keeps your rig behaving in an anatomically believable way.

### Why Mastering Gizmos Pays Off

Gizmos might seem like a small, almost invisible detail compared to the excitement of finishing a full animation, but they are the actual physical interface between your intentions and your rig's movement. Every single keyframe you create starts with a gizmo interaction: rotating a bone, nudging a hand into position, adjusting a foot's placement. Getting genuinely comfortable and precise with translate, rotate, and scale gizmos is one of those foundational skills that quietly makes everything else in 3D animation faster, cleaner, and far less frustrating.`;