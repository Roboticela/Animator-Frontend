export default `Unreal Engine is known for its high-end visuals and powerful animation systems, which makes it a popular choice for everything from indie passion projects to major studio productions. Getting your animated characters from a 3D animator into Unreal correctly involves a few Unreal-specific concepts worth understanding. This guide walks through the full process.

### Why Unreal's Import Process Feels Different

Unreal Engine has its own conventions around scale, axis orientation, and skeleton naming that can trip up newcomers coming from other engines. A model that imports cleanly into one engine might appear tiny, rotated incorrectly, or misaligned in Unreal if these conventions are not accounted for. Understanding them upfront saves a lot of frustrating trial and error.

### Choosing FBX for Unreal

While Unreal does support other formats to varying degrees, FBX remains the gold standard for animated characters in Unreal Engine. Unreal's FBX importer is specifically built to handle skeletal meshes, bone hierarchies, and animation clips, and the vast majority of Unreal tutorials, documentation, and community tools assume you are working with FBX. Unless you have a specific reason to use another format, export your animated model as FBX for the smoothest Unreal experience.

### Scale and Units

Unreal Engine uses centimeters as its default unit, while many 3D tools default to meters. If your model was built and animated assuming a different unit scale, it can appear either enormous or microscopically small once imported into Unreal. Before exporting, check your animator's export settings for a unit or scale option, and set it to match Unreal's expectations, or be prepared to adjust the import scale factor inside Unreal's FBX import dialog.

### Exporting the Skeletal Mesh and Animations

For a fully animated character, you typically want two things out of your export: the skeletal mesh itself, meaning the model plus its bone rig, and one or more animation sequences built on that same skeleton. Many exporters let you bundle both into a single FBX file, or you can export the mesh once and export additional animation-only FBX files afterward, all built on the identical skeleton, so Unreal recognizes them as compatible with the same character.

### Importing Into Unreal Engine

Once your FBX file is ready, bring it into Unreal through the Content Browser's Import button, or by dragging the file directly into the editor. Unreal will open an FBX Import Options dialog. For a character with animation, make sure "Skeletal Mesh" is checked, and if this is your very first import of this character, leave the Skeleton field set to "None" so Unreal creates a new Skeleton asset. For any additional animation files for the same character afterward, select that existing Skeleton asset in the import dialog, so the new animations are correctly linked to the same skeleton rather than creating duplicates.

### Setting Up an Animation Blueprint

Unreal uses a visual scripting system called an Animation Blueprint to control how and when different animations play on a character. Inside the Animation Blueprint, you build an "AnimGraph," which is a node-based system where you connect animation clips together, blend between them, and drive transitions using variables like movement speed or whether the character is in the air. This is more involved than Unity's Animator Controller, but it is also considerably more powerful once you get comfortable with it, allowing for detailed blending between many animations simultaneously.

### Common Problems and How to Fix Them

**The character appears tiny or huge in the level.** This is almost always a unit scale mismatch. Adjust the Import Uniform Scale in the FBX import settings, or fix the unit scale at export time in your animator, so one unit in your source file matches Unreal's centimeter-based expectations.

**New animations do not show up as compatible with your character.** This usually means the new animation was imported with a different or newly created Skeleton asset instead of being linked to your character's original Skeleton. Re-import the animation and make sure to select the correct, existing Skeleton asset in the import options.

**The mesh looks correct, but bones seem to rotate strangely.** This can happen when the rest pose used during animation differs from the rest pose baked into the exported skeletal mesh. Double-check that your rig was in a clean, neutral rest pose both when the base mesh was exported and when each animation clip was created.

### Final Thoughts

Unreal Engine rewards a bit of upfront care around units, skeleton consistency, and the FBX import workflow. Once your first character is successfully imported with its skeleton and animations linked correctly, adding further animations for that same character becomes a quick, repeatable process, and you can spend your time building the rich, blended animation systems that Unreal's Animation Blueprints make possible.`;
