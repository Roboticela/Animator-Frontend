export default `Rigging your first humanoid character can feel intimidating, but broken down into clear, ordered steps, it becomes a manageable, repeatable process. This guide walks through building a complete, working humanoid rig from an unrigged model, start to finish.

### Step 1: Study Your Model Before Touching a Single Bone

Before placing any bones, spend a few minutes simply looking at your model from multiple angles in the 3D viewport. Notice where the joints naturally are: the elbows, knees, shoulders, hips, and neck. Notice the model's proportions, since a rig built for a realistic adult proportion will not directly transfer well to a stylized, short, large-headed cartoon character without adjustment. This upfront observation saves significant rework later.

### Step 2: Place the Root Bone

Every humanoid rig starts with a root bone, typically placed at the character's hips or pelvis, the natural center of mass for a standing human figure. This root bone becomes the parent for your entire skeleton, and moving or rotating it should move the entire character as a whole, which makes it essential for things like repositioning the whole character within a scene without breaking the pose.

### Step 3: Build the Spine

From the root bone, extend a chain of two or three spine bones upward toward the chest. Breaking the spine into multiple segments, rather than using a single long bone, allows for more natural bending during animation, such as a subtle curve when the character leans forward or twists at the waist. Each spine segment should be parented to the one below it, continuing the chain upward from the root.

### Step 4: Add the Chest, Shoulders, and Neck

At the top of your spine chain, add a chest bone, and from there, branch outward to a shoulder bone on each side, and upward to a neck bone leading to the head. This is the first point where your rig branches into multiple directions, one path continuing up through the neck to the head, and two paths extending outward through each shoulder toward the arms.

### Step 5: Build Each Arm

From each shoulder bone, extend an upper arm bone down to the elbow, then a forearm bone down to the wrist, and finally a hand bone. Take particular care that each bone ends precisely at the correct joint location, since a bone ending even slightly above or below the actual elbow or wrist will cause visibly incorrect bending once the arm is animated.

### Step 6: Build Each Leg

From the root or hip bone, extend an upper leg bone down to the knee, a lower leg bone down to the ankle, and a foot bone extending toward the toes. As with the arms, precise placement at each joint matters enormously for natural-looking movement, particularly at the knee, which should bend in a very specific, consistent direction.

### Step 7: Add the Head

Finally, extend a head bone upward from the neck bone. For a basic rig, a single head bone is often sufficient, though more advanced rigs may add additional bones for facial features or jaw movement.

### Step 8: Verify the Full Hierarchy

Open your hierarchy panel and review the complete bone structure. Confirm that the root connects up through the spine to the chest, out to both shoulders and arms, up through the neck to the head, and down from the root or hips to both legs. Check specifically for any bone that appears in the wrong place in this hierarchy, such as a hand accidentally parented under the head instead of the arm, which happens more often than beginners expect and is much easier to fix now than after you have started animating.

### Step 9: Bind the Mesh to the Skeleton

With your bone structure complete, the next step is connecting your model's mesh, its actual visible surface, to the underlying bone skeleton, a process often called skinning or binding. This step tells the software which parts of the mesh should move with which bones. Many tools handle an initial version of this automatically based on proximity, assigning mesh points to the nearest bone, though refining these assignments manually, especially around tricky areas like shoulders and hips, often improves the final result noticeably.

### Step 10: Test Every Joint Individually

Before moving on to actual animation, test your finished rig thoroughly. Rotate each shoulder and check that the whole arm follows naturally. Bend each knee and elbow and confirm they fold in a believable direction without the mesh tearing or pinching oddly. Twist the spine and check that the torso deforms smoothly. Fixing any deformation problems now, while your rig is simple and freshly built, is dramatically easier than discovering them midway through a complex animation later.

### You Now Have a Complete, Working Rig

Following these ten steps in order, planning first, building the hierarchy outward from the root, and testing thoroughly before moving on, gives you a solid, working humanoid rig ready for animation. This exact process, refined slightly with practice, is essentially the same one experienced riggers use on every new humanoid character they build, and it becomes noticeably faster and more intuitive each time you repeat it.`;