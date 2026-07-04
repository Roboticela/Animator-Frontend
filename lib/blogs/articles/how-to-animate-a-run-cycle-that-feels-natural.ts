export default `A run cycle shares many similarities with a walk cycle, but it has its own distinct timing, poses, and challenges. Getting a run to feel fast, energetic, and physically believable, rather than simply a sped-up walk, requires understanding what genuinely changes between the two. This guide breaks down how to build a convincing run cycle.

### Why a Run Is Not Just a Faster Walk

A common beginner mistake is taking a working walk cycle animation and simply speeding up its timing, assuming this alone produces a convincing run. In reality, running involves fundamentally different body mechanics than walking, most notably an airborne phase where both feet leave the ground simultaneously, something that never happens during a normal walk. Ignoring this key difference and merely speeding up walk-cycle timing typically produces a result that reads as an odd, unnaturally fast walk rather than a genuine run.

### The Key Poses of a Run Cycle

A run cycle is generally built around a similar set of poses to a walk cycle, but with important differences in body position and added airborne moments.

Contact still marks the moment a foot touches the ground, but in a run, the body typically leans further forward compared to a walk, and the legs are positioned further apart in a more extended stride.

Down remains the lowest point of the body's vertical movement, but tends to show more pronounced compression through the supporting leg compared to a walk, reflecting the greater forces involved in running.

Passing in a run typically shows the non-supporting leg lifted much higher, often with the knee driving upward significantly more than in a walk, where the passing leg tends to stay lower and closer to the ground.

Airborne is the pose unique to running, where both feet are off the ground entirely, the body at a peak height between one foot's push-off and the other foot's next contact. This airborne moment is what fundamentally separates a run's physics from a walk's, and it needs to be represented clearly in your keyframes for the run to feel physically honest.

### Timing Differences Between Walking and Running

A run cycle typically plays back considerably faster overall than a walk cycle, meaning less time passes between each key pose. Additionally, the relative timing between poses shifts, with the airborne phase often compressing certain transitions further compared to the more evenly paced timing typical of a walk. Studying reference footage of actual running, ideally in slow motion, reveals these more compressed, energetic transitions clearly, and this kind of detailed timing observation is difficult to fully capture through guesswork alone.

### Increased Body Lean and Arm Swing

Running generally involves a noticeably more forward-leaning torso compared to walking, reflecting the body's forward momentum and the mechanics needed to sustain a faster pace. Arm swing also typically becomes more pronounced and vigorous during a run, with arms often bending more sharply at the elbow and swinging through a wider range of motion compared to the more relaxed, straighter arm swing typical of a walking pace.

### Adding Vertical Bounce Appropriately

While a walk cycle includes a subtle vertical bounce as the body's weight shifts between the down and up poses, a run cycle typically features a more pronounced vertical movement, particularly given the airborne phase where the body reaches its peak height entirely off the ground. This increased vertical movement, combined with the greater compression visible in the down pose, helps convey the increased physical effort and impact forces involved in running compared to walking.

### Checking the Loop Carefully

As with a walk cycle, a run cycle needs to loop seamlessly, with the pose at the very end of the cycle connecting smoothly back to the pose at the very beginning. Because a run cycle involves more dramatic, higher-energy poses than a walk, loop seam problems can actually be more visually jarring if they exist, since larger movements make any discontinuity or unnatural pop at the loop point more noticeable to a viewer.

### Adjusting Run Style for Character Personality

Just as with walking, a run cycle's specific timing and pose intensity can be adjusted considerably to convey different characters and moods. A confident, athletic character might have a smooth, efficient run with minimal wasted movement. A frantic, panicked character might have a run with more exaggerated, less efficient arm and leg movement, conveying urgency and desperation rather than smooth athleticism. Understanding the core mechanical structure of a run cycle first gives you a solid foundation to then adjust and exaggerate deliberately for different characters and emotional tones.

### Practice Builds the Feel

Like a walk cycle, a genuinely convincing run cycle typically takes several attempts and revisions to get right. The airborne phase in particular tends to need careful attention, since getting the timing and height of this unique pose wrong is one of the most common reasons a run cycle ends up feeling unnatural or floaty rather than fast and grounded. With practice, and consistent use of real reference footage, building a solid, energetic run cycle becomes a reliable, repeatable skill you can apply confidently to any character.`;