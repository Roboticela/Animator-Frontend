export default `Rigging is the invisible skeleton work behind every great animation. Before a character can walk, wave, jump, or fight, someone has to build the internal structure that makes those movements possible. That structure is called a rig, and building it is called rigging. This guide walks through what rigging actually is, why it matters, and how to do it well, even if you have never rigged anything before.

### What Rigging Really Means

Imagine a puppet made of cloth and stuffing, with no wooden sticks inside it. You could push and pull the cloth, but you could never make it hold a clean walking pose or a raised arm in a controlled way. Now imagine that same puppet with a wooden skeleton sewn inside it, with joints at the shoulders, elbows, hips, and knees. Suddenly you can pose it precisely, and it will hold that pose.

That wooden skeleton is exactly what a bone rig does for a 3D model. The model's outer shape, called the mesh, is like the cloth. The bones are the wooden skeleton hidden underneath. Once bones are placed and connected to the mesh, moving a bone moves the part of the mesh assigned to it.

### The Building Blocks: Bones and Hierarchies

A single bone by itself does very little. The real power comes from connecting bones into a hierarchy, also called a bone chain. In a hierarchy, one bone is the "parent" and another is the "child." When you move or rotate a parent bone, every child bone underneath it moves along with it automatically.

Think about your own arm. Your shoulder is the parent of your elbow. Your elbow is the parent of your wrist. If you rotate your shoulder, your entire arm swings, including your elbow and wrist, without you having to think about moving them separately. A bone rig copies this exact logic. You build a root bone (often at the hips or the spine), then branch out to the chest, arms, legs, and head, always connecting child bones to the correct parent.

### Step 1: Planning the Skeleton

Before placing a single bone, look at your model and figure out where it needs to bend. A humanoid character typically needs bones at the following points, at minimum:

- Hips or root bone
- Spine (often broken into two or three segments for a natural curve)
- Chest and shoulders
- Upper arm, forearm, and hand
- Neck and head
- Upper leg, lower leg, and foot

More detailed rigs add finger bones, individual toes, or facial bones, but a beginner should start simple. A basic rig with correct proportions will always look better than a complex rig with poor placement.

### Step 2: Placing Bones in the 3D Viewport

Once you have a plan, place bones by working from the root outward. Start at the hips, then extend a bone up toward the chest, then out to the shoulders and down each arm, then down to the legs and feet. Most animator tools let you click to place a bone's start point and drag to set its length and direction, and the parent-child link is created automatically when you build bones in this outward-branching order.

Take extra care at joints. A bone should end exactly where the body part bends, such as right at the elbow or the knee, not slightly above or below it. If a bone ends in the wrong place, the joint will look broken when you animate it, because the mesh will bend in the wrong spot.

### Step 3: Checking the Hierarchy Panel

After placing bones, open the hierarchy or model tree panel and look at how everything nests together. This panel shows every bone and mesh in a collapsible tree, and it is the fastest way to spot a mistake, such as a hand bone accidentally parented to the head instead of the arm. Fixing hierarchy mistakes early saves huge headaches later, since every animation you create depends on this structure being correct.

### Step 4: Testing Before You Animate

Before jumping into keyframes, test your rig. Select a shoulder bone and rotate it. Does the whole arm follow smoothly, without the mesh tearing or stretching strangely? Select a knee bone and bend it. Does the leg fold the way a real leg would? This kind of testing, sometimes called a "rig test" or "deformation test," catches problems while they are still easy to fix.

### Common Rigging Mistakes to Avoid

New riggers often run into a handful of predictable issues:

- Placing too many bones for a simple model, which makes the rig hard to manage
- Forgetting to parent a bone correctly, so it does not move with the rest of the body
- Ending bones in the wrong spot at a joint, causing strange bending
- Building the rig asymmetrically, so the left and right sides do not match

Each of these is easy to avoid once you know to look for it, which is exactly why testing your rig early and often matters so much.

### Why Good Rigging Is Worth the Extra Time

It can be tempting to rush through rigging just to get to the "fun part" of animating. But a sloppy rig will fight you at every step. Joints will pinch, limbs will stretch unnaturally, and you will spend more time fixing the rig mid-animation than you would have spent building it correctly from the start.

A clean, well-planned bone rig is the foundation everything else stands on. Get it right once, and every walk cycle, wave, jump, and attack animation you build afterward will be smoother, faster to create, and far more believable.`;
