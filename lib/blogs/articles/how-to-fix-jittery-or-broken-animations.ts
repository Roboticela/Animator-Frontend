export default `Few things are more frustrating for a beginner than an animation that looks jittery, glitchy, or visibly broken, especially when the cause is not immediately obvious. This guide walks through the most common causes of jittery or broken animation, and practical steps to diagnose and fix each one.

### Symptom: Sudden, Unexpected Snapping Between Poses

If your character's pose suddenly snaps or jumps unexpectedly at a certain point in your timeline, rather than moving smoothly, the most likely cause is a keyframe that was accidentally set incorrectly, perhaps at the wrong point in time, or with an unintended pose that does not fit smoothly between its neighboring keyframes. Scrub slowly through the timeline around the point where the snap occurs, and check each nearby keyframe individually to identify which one holds the unexpected, out-of-place pose.

### Symptom: Mesh Tearing or Pinching at Joints

If the visible mesh appears to tear, pinch unnaturally, or stretch strangely at a joint like an elbow or knee during movement, this usually points to a rigging issue rather than an animation timing issue. Common culprits include a bone that ends in the wrong location relative to the actual visual joint, or an issue with how the mesh is bound or skinned to the underlying bones at that specific location. Test the affected joint in isolation, rotating it through its full range of motion outside of your full animation, to confirm whether the deformation problem exists in the rig itself, separate from any specific animation.

### Symptom: Small, Constant Shaking or Vibration

A subtle, constant jittering or vibrating appearance, rather than a single obvious snap, often results from two keyframes set extremely close together in time but with slightly different pose values, causing the interpolation between them to oscillate rapidly and visibly. Check for accidentally duplicated or near-duplicate keyframes placed very close together on your timeline, and remove or consolidate any unintentional near-duplicates you find.

### Symptom: An Entire Limb Rotating Incorrectly

If an entire limb, such as a whole arm or leg, seems to rotate strangely, in a way that does not match how you intended to pose it, this often points to a hierarchy problem, a bone parented incorrectly to the wrong parent bone. Open your hierarchy panel and carefully trace the affected limb's bone chain from its root all the way out, confirming each parent-child connection matches what you actually intended when you originally built the rig.

### Symptom: The Loop Point Visibly Jumps

For any looping animation, like a walk cycle or idle pose, a visible jump or discontinuity exactly at the point where the animation repeats usually means the very first and very last keyframes of the loop do not match closely enough. Compare these two keyframes directly, ideally by viewing them side by side or flipping quickly back and forth between them, and adjust whichever one needs correction so that the loop connects seamlessly.

### Symptom: Animation Looks Fine in the Animator but Broken After Export

If your animation looks correct within your animator tool but appears broken, jittery, or distorted once exported and viewed in a different piece of software, such as a game engine, the issue is very often related to export settings or rest pose consistency, rather than the animation itself. Double check that your rig's rest pose was clean and consistent at export time, and confirm you used export settings appropriate for your specific destination software, as covered in guides specific to exporting for Unity, Unreal, or Godot.

### A General Diagnostic Approach

When facing any jittery or broken animation issue, work through a systematic process rather than randomly guessing at fixes. First, isolate whether the problem is a rigging issue, testing the affected bone or joint outside of any specific animation, or an animation timing issue, specific to particular keyframes on your timeline. Second, narrow down exactly where in time, or which specific bone, the problem occurs, using slow scrubbing rather than only full-speed playback. Third, check the hierarchy panel for any structural issues if the problem involves unexpected movement propagating through connected bones incorrectly.

### Prevention Is Easier Than Debugging

Many jittery or broken animation issues can be avoided entirely through good habits established earlier in your workflow: thoroughly testing your rig before beginning detailed animation, regularly reviewing your hierarchy panel throughout the rigging process, and periodically scrubbing slowly through your animation as you build it, rather than only reviewing it at full speed after completing significant portions of work. Catching potential issues early, through these preventive habits, is almost always faster and less frustrating than debugging a fully broken, jittery animation after a great deal of work has already been built on top of an underlying problem.`;
