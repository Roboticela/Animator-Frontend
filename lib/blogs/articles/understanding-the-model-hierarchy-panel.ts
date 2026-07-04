export default `While the 3D viewport shows you what your model looks like, the hierarchy panel shows you how it is actually built underneath. This panel, often presented as a collapsible tree list, is one of the most underrated tools in any 3D animator, and understanding it deeply will save you from countless confusing bugs and mistakes.

### What the Hierarchy Panel Actually Shows

The hierarchy panel, sometimes called the outliner or scene tree, displays every object in your scene, organized by how they are nested inside one another. A typical character hierarchy might look like this: a root bone at the top, with a spine bone nested beneath it, a chest bone beneath that, and shoulder, arm, and hand bones branching out from there. Meshes are usually listed too, showing which parts of the model are linked to which bones.

This nested structure is not just a visual convenience. It reflects the actual parent-child relationships that determine how your rig moves. If a bone appears nested under the wrong parent in this panel, that mistake will show up directly in how your character animates, since rotating the parent will carry that error along with it.

### Why the Hierarchy Matters So Much

Every movement in a rigged character flows downward through this hierarchy. When you rotate a shoulder bone, that rotation affects every bone nested beneath it: the upper arm, forearm, and hand, in a smooth, connected chain. This is exactly how a real arm works, and it is why understanding, and correctly building, this parent-child structure is so central to good rigging.

Get the hierarchy wrong, for instance, by accidentally parenting a hand bone to the head instead of the arm, and the mistake might not be obvious right away. It could sit quietly until you rotate the head during an animation, only to watch the hand awkwardly follow along with it. Catching these mistakes early, by regularly reviewing the hierarchy panel, saves enormous debugging time later.

### Navigating a Complex Hierarchy

As your rigs grow more detailed, especially with individual finger bones, facial bones, or multiple clothing layers, the hierarchy panel can get long and busy. Most tools let you collapse and expand branches, similar to folders on a computer, so you can hide the parts of the hierarchy you are not currently working with and focus only on the section relevant to your current task.

Clicking an item in the hierarchy panel typically selects it in the 3D viewport as well, and vice versa, giving you two connected ways to find and work with any part of your rig, whichever feels more natural for the task at hand.

### Using the Hierarchy Panel to Debug Problems

When something in your animation looks wrong, the hierarchy panel is often the fastest place to start investigating. Ask yourself: is this bone parented where I expect it to be? Is this mesh assigned to the correct bone group? Is there an extra, unnecessary bone accidentally left in the chain? Working through the hierarchy systematically, rather than guessing randomly in the viewport, tends to find the root cause much faster.

### Organizing Your Hierarchy Well From the Start

Good habits early on make the hierarchy panel far more useful later. Give bones clear, descriptive names, like "LeftUpperArm" or "RightFoot," rather than generic default names like "Bone_04," which become impossible to distinguish from each other in a busy hierarchy. Keep your naming consistent between the left and right sides of a symmetrical character, which also makes it far easier to spot when something is mirrored incorrectly.

### The Hierarchy Panel as a Map

Think of the hierarchy panel as a map of your character's internal structure. The 3D viewport shows you the surface, but the hierarchy panel shows you the skeleton and logic underneath, the actual relationships that determine how everything moves. Spending time learning to read this map fluently is one of the quiet, unglamorous skills that separates someone who fights with their rigs constantly from someone who builds clean, predictable, easy-to-animate characters every time.`;
