export default `Every experienced rigger made these mistakes at some point. Learning to recognize them early, and understanding why they happen, will save you significant frustration and rework as you build your rigging skills. This guide walks through the most common beginner rigging mistakes and practical ways to avoid each one.

### Mistake 1: Placing Bones Without a Plan

A very common beginner approach is placing bones somewhat impulsively, adding a bone wherever seems reasonable in the moment, without first planning the full skeleton structure. This often results in an inconsistent, awkward hierarchy that becomes difficult to fix once significant work has already been built on top of it.

The fix: Before placing a single bone, take a few minutes to look over your model and mentally map out where every major bone needs to go: root, spine, chest, shoulders, arms, hips, legs, and head. Building outward from the root in a clear, planned order produces a far more consistent, easier-to-manage rig.

### Mistake 2: Ending Bones in the Wrong Spot at Joints

A bone that ends slightly above or below where a joint actually bends, such as an elbow or knee, will cause visibly incorrect deformation once that joint is animated, with the mesh bending in the wrong location relative to where the visual joint actually appears.

The fix: Zoom in closely on each joint while placing bones, and use multiple viewport angles, front, side, and top, to confirm precise bone placement rather than relying on a single view, which can be visually deceiving about depth and exact positioning.

### Mistake 3: Forgetting to Check the Hierarchy

It is surprisingly easy to accidentally parent a bone to the wrong parent bone, especially in a complex rig with many similarly named bones, resulting in strange, unexpected movement once you begin posing or animating.

The fix: Regularly open your hierarchy panel throughout the rigging process, not just at the very end, and visually confirm that each bone is nested under the correct parent. Catching a hierarchy mistake early, before you have built extensively on top of it, is far easier than discovering it after significant additional rigging work has been completed.

### Mistake 4: Building an Asymmetrical Rig

For characters that should be visually symmetrical, humans, most animals, many creatures, an asymmetrical rig, where the left and right sides do not precisely mirror each other, produces animations that look subtly, sometimes not so subtly, wrong, even if the individual bone placements each seem reasonable on their own.

The fix: Where your tool supports it, use mirroring features to build one side of a symmetrical rig and automatically generate an accurately mirrored version on the opposite side, rather than manually placing both sides independently and hoping they match closely enough.

### Mistake 5: Using Too Many Bones for a Simple Model

Beginners sometimes assume more bones automatically means better, more detailed control, adding an excessive number of bones to a relatively simple model. This actually tends to make a rig harder to manage and animate, without providing meaningful additional benefit, since a simple model does not need highly granular control that a simple bone structure cannot already provide.

The fix: Match your bone count to your model's actual complexity and your project's actual animation needs. A simple background character likely needs only a basic rig, while a detailed hero character with close-up facial animation might genuinely benefit from a more detailed bone structure. Add complexity only where it serves a real, specific purpose.

### Mistake 6: Skipping the Testing Phase

It is tempting to move straight from finishing a rig into full animation work, especially when eager to see a character actually moving. Skipping thorough testing of the rig itself, however, means deformation problems often surface midway through an animation, requiring you to stop, go back, fix the underlying rig, and then redo animation work built on top of the flawed rig.

The fix: Before beginning any real animation work, deliberately test every major joint by rotating it through a full range of motion and checking the resulting mesh deformation closely. This brief testing phase, typically just a few minutes, regularly catches problems while they are still quick and easy to fix.

### Mistake 7: Poor Naming Conventions

Using generic, default bone names, like "Bone_01," "Bone_02," and so on, makes a rig's hierarchy panel confusing and hard to navigate, especially as a project grows and you return to it after time away, or when collaborating with someone else who needs to understand your rig's structure quickly.

The fix: Use clear, descriptive names for every bone, such as "LeftUpperArm" or "RightFoot," and keep naming conventions consistent across the entire rig, particularly matching naming patterns between left and right sides of symmetrical characters.

### Mistake 8: Ignoring the Rest Pose

Many beginners do not pay close attention to their rig's rest pose, meaning the neutral pose the rig is in before any keyframes are added. An inconsistent or awkward rest pose, such as arms positioned tightly against the body rather than slightly out to the sides, can create deformation problems, particularly at the shoulders and hips, that persist throughout every subsequent animation built from that rest pose.

The fix: Establish a clean, sensible rest pose, often called a T-pose or A-pose for humanoid characters, with limbs positioned in a way that minimizes mesh distortion at the joints, before beginning detailed rigging work.

### Learning From These Mistakes Faster Than Trial and Error Alone

Every one of these mistakes is completely normal to make as a beginner, and even experienced riggers occasionally slip into one of these patterns when working quickly or on an unfamiliar character type. The real value of understanding this list in advance is catching these issues faster, sometimes before they even happen, rather than discovering each one independently through frustrating, time-consuming trial and error.`;