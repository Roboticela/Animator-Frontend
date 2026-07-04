export default `Once your character is rigged, animated, and looking great in the viewport, the next big step is getting that animation into an actual game. For many developers, that game is being built in Unity, one of the most widely used game engines in the world. This guide walks through exactly how to get your animated model out of your 3D animator and working correctly inside Unity.

### Why the Export Step Matters So Much

It is easy to think of exporting as an afterthought, a quick button click after the "real" work of animating is done. In practice, export is where many projects run into trouble. A rig that looks perfect in your animator can end up with broken joints, missing textures, or animations that do not play at all once imported into a game engine, if the export settings are not handled carefully. Understanding the process removes almost all of that risk.

### Choosing the Right Format for Unity

Unity can import several 3D formats, but the two most reliable choices for animated characters are FBX and GLTF/GLB. FBX has long been the standard format for games, with excellent support for skeletal animation, and Unity's importer is built with FBX specifically in mind. GLTF and its binary version GLB are newer, more open formats that Unity also supports well, especially through additional packages, and they tend to produce smaller file sizes.

For most beginners, FBX is the safer starting choice, simply because Unity's tooling around it is the most mature and well documented. If your project already uses GLTF elsewhere, such as for a web build, GLB is a perfectly reasonable choice too.

### Preparing Your Animation Before Export

Before exporting, do a final pass over your animation:

- Make sure your timeline has no accidental extra keyframes at the very start or end, which can cause a jarring snap when the animation loops in-game.
- Check that your rig's rest pose, sometimes called the bind pose, matches what you expect. Export tools use this rest pose as the reference point for all bone rotations.
- Confirm your textures are properly assigned in the viewport, since most export formats will attempt to carry texture references along with the model.

### The Export Process

Exporting is usually a straightforward process: select your animated model, choose your export format, and confirm settings like whether to include textures and animation data. Once exported, you will have a file, such as a \`.fbx\` or \`.glb\` file, ready to bring into Unity.

### Importing Into Unity

Once inside Unity, drag your exported file into your Assets folder. Unity will automatically process it and create a model asset. Click on that asset in the Project window, and look at the Inspector panel, specifically the "Rig" tab. Here, you will usually want to set the Animation Type to "Humanoid" if your character follows a standard human skeleton, which unlocks Unity's powerful humanoid animation retargeting system, or "Generic" for non-humanoid characters like animals, robots, or creatures with unusual skeletons.

Next, check the "Animation" tab in the Inspector. This is where you will see any animation clips that were included in your exported file. You can preview these clips directly inside Unity's inspector before ever placing the character in a scene.

### Setting Up the Animator Controller

Unity plays animations through a system called an Animator Controller, a separate asset that manages transitions between different animation clips, such as switching from an idle pose to a walk cycle when the player presses a movement key. Create a new Animator Controller, drag your imported animation clips into it as states, and connect them with transitions based on whatever conditions make sense for your game, like a "speed" parameter that triggers a switch from idle to walking.

### Common Problems and How to Fix Them

**The character appears in a strange, twisted pose.** This is often caused by a mismatch in the rest pose during export, or an incorrect Animation Type setting in Unity. Double-check that your rig was in its proper rest pose when exported, and try switching between Humanoid and Generic rig types to see which one displays correctly.

**Textures appear missing or pink.** This usually means the texture files were not included, or not properly linked, during export. Make sure texture maps are assigned in your animator before exporting, and check that any external texture files are placed correctly relative to your exported model file.

**The animation loops with a visible jump.** This typically means the first and last keyframes of your animation clip do not match closely enough. Go back into your animator, compare the very first and very last poses of the loop, and adjust them to match more precisely.

### Final Thoughts

Exporting for Unity is not complicated once you understand the handful of settings that actually matter: choosing FBX or GLTF/GLB, confirming your rest pose and textures before export, and correctly configuring the Animation Type after import. Once you have done this process a couple of times, it becomes a quick, reliable step rather than a source of stress, and you can focus your energy on what really matters: making your characters move in ways that make your game feel alive.`;
