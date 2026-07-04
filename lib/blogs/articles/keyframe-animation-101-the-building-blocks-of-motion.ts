export default `If bones are the skeleton of an animated character, keyframes are its heartbeat. Every smooth walk, every subtle head turn, every dramatic jump is built from a series of keyframes working together. This article breaks down exactly what a keyframe is, how keyframes create the illusion of motion, and how to start using them with confidence.

### What Is a Keyframe, Really?

A keyframe is a saved snapshot of a pose at a specific moment in time. Imagine your character standing straight at the very start of your timeline. If you save that pose, you have created a keyframe at time zero. Now move the timeline forward one second, raise the character's arm, and save that new pose. You now have a second keyframe.

The software's job is to figure out everything that should happen between those two saved poses. It looks at where the arm was in keyframe one, where it ends up in keyframe two, and smoothly calculates every position in between, frame by frame. This automatic filling-in process is called interpolation, and it is the reason you do not have to manually pose every single frame of an animation.

### Why "Key" Frames?

The word "key" is important here. A keyframe is a frame you have deliberately chosen as important enough to save. Everything else, all the in-between frames, are generated automatically. This is a huge time-saver compared to old hand-drawn animation, where an artist had to draw every single frame by hand. With keyframes, you focus your effort on the poses that matter most, and let the software handle the repetitive math of filling in the gaps.

### The Two Keyframes Every Animation Needs

At a minimum, any animation needs at least two keyframes: a starting pose and an ending pose. Even something as simple as a door swinging open needs a "closed" keyframe and an "open" keyframe. Everything else builds outward from this basic pair.

### Adding More Keyframes for Control

Two keyframes alone often produce movement that looks too even and mechanical, because the interpolation between them is usually smooth and constant. Real movement rarely works that way. A raised arm, for example, might start slowly, speed up in the middle, and then ease gently into its final position. To capture that, animators add extra keyframes along the way, sometimes called "breakdown" poses, which sit between the main keyframes and shape the timing more precisely.

### Understanding Timing and Spacing

Two ideas sit underneath every good keyframe animation: timing and spacing.

**Timing** is about when things happen, meaning how many frames or seconds pass between keyframes. A punch that takes ten frames to throw feels fast and sharp. The same punch stretched across sixty frames feels slow and weak.

**Spacing** is about how far something moves between each frame, even when the total number of frames stays the same. Movement that starts slow, speeds up in the middle, and slows down again near the end (often called "ease in, ease out") looks far more natural than movement that travels the exact same distance every single frame, which tends to look robotic and stiff.

Most animation tools let you adjust spacing using a curve editor or similar tool, letting you fine-tune exactly how quickly movement speeds up or slows down between keyframes.

### A Simple Practice Exercise

A great way to build keyframe intuition is to animate a bouncing ball, without any bones or rigging at all, just a single object moving through space. Set a keyframe at the top of the bounce, another at the bottom where it touches the ground, and another back at the top for the next bounce. Watch it play. It will probably look floaty and unnatural at first. Then start adjusting spacing, squashing the ball slightly at the moment of impact, and adding a few extra keyframes to break up the timing. Within a short practice session, you can turn a stiff, mechanical bounce into one that feels like it has real weight and energy, and that exact same skill applies directly to animating a full character.

### Keyframes Are a Language, Not Just a Feature

Once you understand keyframes deeply, you stop thinking of animation as "moving parts around" and start thinking of it as a language for expressing timing, weight, and emotion. A slow, heavy set of keyframes can make a giant feel powerful. A fast, snappy set of keyframes can make a small creature feel nervous and energetic. Learning to read and control that language is really what learning to animate means, and keyframes are the alphabet it is all written in.`;
