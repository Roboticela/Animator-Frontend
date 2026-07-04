export default `A walk cycle is often the very first "real" animation a beginner attempts, and for good reason. It teaches timing, weight, and balance all at once, and once you can animate a solid walk, almost every other type of movement becomes easier to understand. This guide breaks the walk cycle down into simple, repeatable steps.

### Why the Walk Cycle Is the Classic Starting Point

A walk cycle is a short, repeating loop of movement: usually somewhere between eight and sixteen keyframes that play over and over to create the illusion of continuous walking. Because it loops, it forces you to think carefully about how a pose at the end of the cycle connects smoothly back to the pose at the beginning. That single constraint teaches more about animation timing than almost any other exercise.

### The Four Key Poses

Every walk cycle, no matter how it is stylized, is built around four essential poses.

**1. Contact.** This is the moment one foot touches the ground while the other foot is lifted and moving forward. Both legs are relatively straight and spread apart, like a stretched-out step.

**2. Down.** Right after contact, the body's weight sinks slightly as it settles onto the forward leg. This is the lowest point of the character's vertical movement during the cycle.

**3. Passing.** This is the moment the moving leg passes directly under the body, and the supporting leg is fully straight. This is usually the highest point of the character's vertical movement.

**4. Up.** The body rises just before the next contact pose, as the character pushes off the back foot to take the next step.

A full walk cycle repeats these four poses twice, once for each leg, so a basic cycle usually has eight keyframes total.

### Step 1: Set Your Timeline Length

Decide how long your walk cycle should last. A natural, relaxed walk is often around one second per full cycle (both legs completing a step), though this varies with character size and personality. Set your timeline to match, and space your eight keyframes evenly across it.

### Step 2: Block In the Contact Poses First

Start with the contact poses, since they define the stride length and overall rhythm of the walk. Pose your character with one leg forward and one leg back, both nearly straight, feet touching the ground. Set a keyframe. Then jump halfway through your timeline and set the mirrored pose, with the opposite leg forward. These two poses form the skeleton of your entire walk cycle.

### Step 3: Add the Passing Poses

Between each pair of contact poses, add a passing pose, where the moving leg is directly beneath the body and the character is at their tallest point in the cycle. This is also where the arms typically swing opposite to the legs — right leg forward pairs with left arm forward, which mimics how humans naturally balance while walking.

### Step 4: Add the Down and Up Poses

Fill in the down pose just after each contact, lowering the character's hips slightly, and the up pose just before each contact, raising the hips slightly as the character pushes forward. This vertical bounce, even if subtle, is what separates a stiff, sliding walk from one that feels grounded and natural.

### Step 5: Check the Loop

Play the animation on a loop and watch closely for a jump or pop where the cycle repeats. This usually means the first and last keyframes are not perfectly matched, or the arm swing does not connect smoothly. Adjust until the loop feels seamless, with no visible seam where it repeats.

### Step 6: Add Secondary Movement

Once the core walk feels solid, layer in smaller details: a slight rotation of the hips with each step, a little bounce in the head, or subtle sway in the shoulders. These secondary movements are what make a walk feel alive rather than mechanical, and they are much easier to add once the primary poses are locked in.

### Common Problems and Fixes

If your character looks like it is sliding rather than walking, check that the contact foot stays planted on the ground between its contact and passing poses, rather than drifting backward. If the walk feels stiff, make sure the down and up poses have enough vertical difference to create a visible bounce. If the arms feel disconnected from the legs, double check that opposite arm and leg pairs move together.

### Practice Makes the Difference

A convincing walk cycle rarely comes together on the first try. Professional animators often revise a walk dozens of times before it feels right. The good news is that once you understand the four key poses and how they loop together, you have a repeatable formula you can apply to any character, from a heavy giant to a light, bouncy creature, just by adjusting the timing and the amount of movement in each pose.`;
