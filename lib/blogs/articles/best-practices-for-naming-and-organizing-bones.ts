export default `Naming and organizing bones might seem like a minor, almost administrative detail compared to the more visible, creative aspects of rigging and animation. In practice, good naming and organization habits have an outsized impact on how efficiently you, and anyone else who works with your files, can navigate and understand a rig. This guide covers practical best practices worth adopting early.

### Why Naming Matters More Than It Seems

A rig with generic, default bone names, like "Bone," "Bone.001," "Bone.002," and so on, becomes genuinely difficult to navigate once it grows beyond a handful of bones. When you need to select a specific bone, perhaps to fix a rigging issue or check a keyframe, hunting through a long list of meaningless generic names wastes real time and mental energy that clear, descriptive names would have saved entirely.

### A Simple, Consistent Naming Convention

A practical naming convention for a humanoid rig typically includes the body part and, where relevant, a left or right indicator: names like "Spine01," "Spine02," "Chest," "Neck," "Head," "LeftShoulder," "LeftUpperArm," "LeftForearm," "LeftHand," and their mirrored right-side equivalents. This kind of clear, consistent pattern makes it immediately obvious what each bone controls, and makes symmetrical relationships between left and right sides easy to spot and verify at a glance in your hierarchy panel.

### Keeping Left and Right Consistent

A particularly important detail is keeping your left and right naming consistent throughout an entire rig, always using the same convention, whether that is "Left" and "Right," "L" and "R," or another consistent pair, rather than mixing different conventions in different parts of the same rig. Inconsistent naming makes it much harder to quickly verify that symmetrical body parts are actually built and named correctly as true mirrors of each other, which is a common source of subtle errors in otherwise well-built rigs.

### Numbering Segments Within a Chain

For bone chains with multiple similar segments, such as a multi-part spine or a long tail, numbering each segment sequentially, like "Spine01," "Spine02," "Spine03," or "Tail01" through "Tail05," keeps the naming clear and predictable, and makes it immediately obvious how many segments exist in that particular chain and in what order they connect.

### Organizing Bones Into Logical Groups

Beyond individual naming, many tools let you organize bones into visual groups or layers within the hierarchy panel, such as grouping all arm-related bones separately from leg-related bones, or separating a detailed facial rig from the main body skeleton. For complex rigs with many bones, this kind of grouping makes it much easier to focus on, and temporarily hide, specific sections of the rig depending on what you are currently working on, rather than navigating a single, long, undifferentiated list of every bone in the entire character at once.

### Naming Conventions for Non-Humanoid Characters

For non-humanoid characters, adapt your naming convention sensibly to the creature's actual anatomy. A four-legged animal might use names like "FrontLeftLeg," "FrontRightLeg," "BackLeftLeg," and "BackRightLeg," rather than the "arm" and "leg" terminology appropriate for a humanoid. A multi-limbed creature might use sequential numbering combined with a general limb identifier, like "Limb01" through "Limb06." Whatever specific convention you choose for an unusual creature, the underlying goal remains the same: names that are immediately, intuitively clear about which bone controls which specific part of the creature's body.

### Documenting Unusual or Complex Rig Elements

For particularly complex rigs, or rigs with unusual, non-obvious elements, such as a special bone added purely to help with a specific deformation problem rather than representing an actual anatomical joint, it can be worth keeping brief notes, either within the tool itself if it supports annotations, or in a separate reference document, explaining what these less obvious elements are for. This is especially valuable if you expect to return to a rig after significant time away, or if someone else may need to work with your rig later.

### The Long-Term Payoff of Good Organization

The time invested in clear naming and thoughtful organization is genuinely small compared to the overall time spent building and animating a character, but the payoff compounds significantly over the life of a project. Every time you need to select a specific bone, verify a hierarchy relationship, or return to a rig after time away, clear naming and organization saves real time and reduces the chance of costly mistakes, like accidentally selecting or animating the wrong bone due to confusing, generic naming. This is one of those unglamorous best practices that experienced riggers adopt not because it is exciting, but because they have personally felt the pain of not doing it early in their own learning.`;
