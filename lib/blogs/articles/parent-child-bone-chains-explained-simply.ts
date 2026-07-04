export default `The parent-child relationship between bones is the single most important concept underlying every 3D character rig. Once it genuinely clicks, rigging stops feeling like a mysterious, technical process and starts feeling like straightforward, logical common sense. This guide explains the concept as simply and clearly as possible.

### The Basic Idea: A Chain of Command

Imagine holding a stick in your hand, and taped to the end of that stick is a second, shorter stick, and taped to the end of that second stick is a third, even shorter stick. If you move your hand, the first stick moves. Because the second stick is attached to the end of the first, it moves along with it. And because the third stick is attached to the end of the second, it moves along too, following the motion of everything above it in the chain.

This is exactly how parent-child bone relationships work. A "child" bone is attached to, and follows the movement of, its "parent" bone. If the parent bone moves or rotates, every child bone attached to it moves along automatically, without you needing to move each one individually.

### Why This Matches How Real Bodies Work

This chain-like behavior mirrors how real skeletons function. Your shoulder is effectively the "parent" of your elbow, which is the "parent" of your wrist. When you rotate your shoulder, your entire arm swings as a connected unit; you do not need to separately, consciously move your elbow and wrist to keep up with the shoulder's motion. A properly built bone rig recreates this exact same natural, connected behavior inside a 3D character.

### Building a Chain, Step by Step

When rigging a character, you typically start with a root bone, often placed at the hips, which becomes the very top of the entire hierarchy, the ultimate parent that everything else eventually connects back to, directly or indirectly. From there, you extend outward: the spine becomes a child of the root, the chest becomes a child of the top spine bone, the shoulders become children of the chest, the upper arms become children of the shoulders, and so on, all the way out to the hands and feet.

Each bone in this chain has exactly one parent, but can have multiple children. The chest bone, for example, is a child of the spine above it, but is itself the parent of both the left and right shoulder bones, and often the neck bone too, branching outward in multiple directions from that single point.

### What Happens When You Rotate a Parent Bone

When you select and rotate a bone partway down the chain, such as an elbow, only that bone and everything below it in the hierarchy, in this case just the forearm and hand, are affected. Everything above the elbow, the upper arm, shoulder, and rest of the body, stays exactly where it was. This selective, cascading effect is precisely what allows you to pose individual parts of a character independently, while still maintaining natural, connected movement throughout the rest of the body.

### Why Getting the Hierarchy Right Matters So Much

Because every animation you create depends on this underlying parent-child structure, a mistake in the hierarchy, such as accidentally connecting a hand bone to the head instead of the arm, creates behavior that looks correct in a static rest pose but becomes obviously broken the moment you animate the head independently from the arm, since the hand would incorrectly follow the head's movement instead of the arm's.

This is exactly why reviewing the hierarchy panel carefully during rigging matters so much. It is not simply an organizational nicety; it is the literal, functional blueprint determining how every future animation will behave.

### A Helpful Mental Model

Whenever you are unsure whether a bone relationship is set up correctly, ask yourself: "If I only moved the parent bone, and nothing else, would this child bone's movement make anatomical sense?" A hand should sensibly follow an arm's movement. A hand should not sensibly follow a head's movement. Running through this simple mental check for each connection in your rig is a reliable way to catch hierarchy mistakes, even without deep technical rigging experience.

### The Concept That Unlocks Everything Else

Once parent-child bone chains genuinely make sense to you, on an intuitive, common-sense level rather than just a technical definition, the rest of rigging becomes far more approachable. You start looking at any character and naturally seeing the underlying chain of connected parts, root to spine to limbs, that any good rig needs to recreate, and that intuitive understanding is really the foundation every other rigging and animation skill builds on top of.`;