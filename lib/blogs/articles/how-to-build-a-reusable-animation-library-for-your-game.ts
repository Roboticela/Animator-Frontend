export default `For any game with more than a handful of characters or a modest amount of content, building animations one at a time, from scratch, for every single character quickly becomes unsustainable. A reusable animation library, a curated collection of animations designed to be shared and adapted across multiple characters, is a practical, efficient solution. This guide covers how to plan and build one effectively.

### Why a Reusable Library Matters

Many games feature multiple characters that share broadly similar body types, several humanoid enemies, for example, or multiple four-legged creatures of a similar general size and shape. Rather than hand-animating a unique walk cycle, idle pose, and set of actions for every single one of these similar characters individually, a shared animation library lets you build a core set of animations once, then apply and lightly adapt them across every compatible character, multiplying the value of your animation work significantly.

### Standardizing Rig Structure Across Characters

The foundation of a genuinely reusable animation library is a consistent, standardized rig structure across all characters intended to share animations. If every humanoid character in your game uses the same basic bone hierarchy, the same naming conventions, and similar overall proportions, animations built for one character will transfer far more cleanly to another, compared to characters built with inconsistent, ad hoc rig structures that happen to look similar on the surface but differ significantly underneath.

Establishing this standardized rig template early in a project, before building out many individual characters, saves enormous time later compared to retrofitting inconsistent rigs to work with a shared animation library after the fact.

### Identifying Core Animations Every Character Needs

Most characters in a typical game need a similar core set of fundamental animations: an idle pose, a walk cycle, sometimes a run cycle, and depending on the game type, some kind of basic action animation like an attack or interaction. Building this core set thoughtfully and thoroughly for your standardized rig template, with careful attention to quality since these animations will be reused extensively, is worth prioritizing early, since virtually every character in your game will likely need some version of this same basic animation set.

### Organizing Your Library for Easy Access

As your animation library grows, clear organization becomes essential for actually using it efficiently. Group animations logically, perhaps by character type, humanoid, four-legged creature, and so on, and by animation category within each type, locomotion animations like walk and run together, action animations like attacks together, and idle or ambient animations together. Clear, consistent naming for each animation clip, following the same principles covered in bone naming best practices, makes browsing and selecting the right animation for a given character or situation much faster.

### Adapting Shared Animations for Individual Character Personality

While the goal of a reusable library is efficiency through sharing, you do not necessarily want every character using a shared animation to feel completely identical to every other character using that same animation. Small adaptations, adjusting the overall timing slightly for a particular character's personality, or layering a small, character-specific flourish on top of an otherwise shared base animation, let you benefit from the efficiency of reuse while still giving individual characters some distinct personality and identity.

### Building the Library Incrementally Alongside Your Project

Rather than attempting to build an enormous, comprehensive animation library entirely upfront before any characters exist in your actual game, it is often more practical to build the library incrementally, adding new animations to the shared collection as your project's actual needs reveal themselves. This avoids wasted effort building animations that turn out not to be needed, while still benefiting from the reuse and efficiency that a shared library provides for the animations you genuinely do need across multiple characters.

### Version Control and Keeping Track of Updates

As a project grows, you will likely revise and improve animations in your shared library over time, perhaps refining a walk cycle's timing after noticing it does not look quite right applied to a specific character. Keeping track of which characters use which specific animations, and being deliberate about updating all relevant characters when you improve a shared animation, helps avoid a confusing situation where different characters end up using inconsistent, outdated versions of what is supposed to be the same shared animation.

### The Long-Term Efficiency Payoff

Building a genuinely reusable animation library requires more upfront planning and discipline than simply animating each character's needs individually as they come up. But for any project with multiple similar characters, and especially for solo developers or small teams without the time to hand-animate every character from scratch, this upfront investment in a standardized rig structure and a thoughtfully organized, reusable animation library pays for itself many times over as a project grows, letting your limited animation time and effort stretch dramatically further across your entire game.`;
