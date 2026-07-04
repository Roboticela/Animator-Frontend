export default `Most beginner rigging tutorials focus on humanoid characters, since human movement is intuitively familiar to almost everyone. But games, films, and creative projects are full of non-humanoid characters: four-legged animals, multi-limbed monsters, rigid robots, and entirely invented creatures. This guide covers how to approach rigging and animating these very different body types.

### Why Non-Humanoid Rigging Feels Different

The biggest challenge with non-humanoid characters is that you cannot rely purely on your own body's intuitive sense of movement the way you can with a humanoid character. You have never personally experienced walking on four legs, or moving with six limbs, or existing as a rigid mechanical structure. This makes careful observation of reference material even more essential than it already is for humanoid animation.

### Four-Legged Animals: Understanding the Different Gaits

Four-legged animals move in patterns quite different from a human's two-legged walk. Most notably, the order in which the legs move, called the gait, varies significantly depending on speed and animal type. A slow, walking gait typically has each leg moving individually in a specific, overlapping sequence, while a running or galloping gait involves the legs moving in more grouped, synchronized patterns, sometimes with all four feet briefly leaving the ground at once.

When rigging a four-legged animal, plan for a spine that can flex more dramatically than a human's, since many animals arch and extend their backs significantly during movement, particularly at faster gaits. Study reference video of your specific animal type closely, since gait patterns vary meaningfully between, say, a dog's trot and a horse's canter, and applying human-style walk timing to a four-legged creature will look distinctly wrong to viewers, even if they cannot articulate exactly why.

### Multi-Limbed Monsters: Establishing Clear Movement Logic

Creatures with more than four limbs, whether insect-like, tentacled, or entirely fantastical, do not have real-world reference to study directly, since they do not exist in reality. In these cases, the goal shifts from replicating real movement exactly to establishing a consistent, believable internal logic for how the creature moves, and then applying that logic consistently throughout every animation.

A practical approach is grouping the limbs into functional sets, treating pairs or groups of legs similarly to how a real multi-legged creature, like an insect, distributes its many legs into supporting groups during movement. Even without exact real-world reference for a six-legged monster, studying real insect locomotion can provide a useful, believable starting template you can then exaggerate or adjust for your specific creature's personality and scale.

### Robots: Embracing Rigid, Mechanical Movement

Rigging a robot character actually shares some structural similarities with rigging a humanoid, since many robot designs echo human body layouts, with a head, torso, arms, and legs. The key difference lies in the animation itself, not necessarily the rig structure. Organic characters benefit from soft, natural easing and follow-through in their movement. Robots, particularly rigid, mechanical ones, often look more convincing with sharper, more constant-speed movement between poses, since real mechanical joints, unlike biological ones, do not naturally ease in and out the way muscles and tendons do.

Deliberately reducing or removing the natural, soft easing you would normally add to organic character movement, and instead using more constant, linear timing between keyframes, is often what makes a robotic character's movement read correctly as mechanical rather than simply looking like a stiff, poorly animated organic character.

### Building Rigs for Unusual Body Proportions

Whatever the creature type, the fundamental rigging principles remain the same: build a clear hierarchy from a root outward, place bones precisely at points that need to bend, and test thoroughly before animating. What changes for non-humanoid characters is simply where those bend points are, and how many limbs or segments your specific creature actually has. A careful, methodical planning phase, mapping out exactly where your particular creature needs bones before placing a single one, matters even more for unusual body types, since there is no standard, well-known template to fall back on the way there is for humanoid rigs.

### Finding and Using Reference for Unusual Creatures

For real animals, video reference is often abundant and easy to find, whether wildlife footage, pet videos, or nature documentaries. For entirely invented monsters or creatures, look for reference material of the closest real-world analog, an insect for a many-legged creature, a big cat for a four-legged predator, a snake for anything with a long, flexible body, and use that real-world movement as your foundation, then adjust and exaggerate as needed to fit your creature's unique design and personality.

### The Payoff of Getting Non-Humanoid Movement Right

Non-humanoid characters, when animated well, often stand out more memorably than humanoid ones, precisely because convincing non-human movement is rarer and more difficult to achieve, which means it draws more attention and appreciation when done successfully. Taking the extra time to study appropriate reference material, plan a rig specifically suited to your creature's unique body structure, and apply movement logic appropriate to that creature type, whether organic and flowing or rigid and mechanical, is what separates a genuinely convincing non-humanoid character from one that simply looks like a human rig awkwardly stretched onto an unfamiliar shape.`;