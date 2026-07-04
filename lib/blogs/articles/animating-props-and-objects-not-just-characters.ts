export default `Character animation tends to get most of the attention in tutorials and discussions, but animating props and objects, weapons, tools, vehicles, environmental elements, is a genuinely important and distinct skill of its own. This guide covers the specific considerations involved in animating objects rather than characters.

### How Prop Animation Differs From Character Animation

Character animation is fundamentally about conveying life, personality, and believable organic movement. Prop animation is often more about conveying physical properties: weight, rigidity, material behavior, and how an object interacts with forces like gravity, momentum, and impact. A wooden crate falling and bouncing should move very differently from a heavy metal chest doing the same thing, even though neither object has anything resembling a personality to express.

### Rigid Objects Versus Objects With Moving Parts

Many props are entirely rigid, meaning the whole object moves as a single, unified piece with no internal bending or flexing at all, like a sword swinging through the air or a rock tumbling down a hill. These simpler props often do not need a bone rig at all; animating the object's overall position and rotation directly, without any internal skeleton, is sufficient.

Other props have moving parts, like a treasure chest with a hinged lid, a door with a handle, or a simple machine with rotating gears. These objects benefit from a simplified bone structure, similar to character rigging but typically much simpler, with bones placed specifically at the points where the object actually needs to bend or rotate, such as a hinge bone for a chest lid.

### Conveying Weight Through Timing Alone

Since props generally lack personality or expression to help sell their movement, weight and physical believability come almost entirely from timing and spacing choices. A heavy object should generally move with slower, more deliberate timing, take a beat before starting to move at all when initially pushed or dropped, and settle to a stop more gradually, sometimes with subtle secondary wobbling once it comes to rest. A light object, by contrast, can start and stop movement much more quickly and abruptly, without needing this same gradual buildup and settle.

### Impact and Collision Moments

Many prop animations involve some kind of impact, an object being dropped, thrown, or striking another surface. These impact moments benefit significantly from a brief pause or hold at the exact moment of contact, similar to the "hit hold" technique used in character attack animations, reinforcing the sense of a solid, physical collision rather than the object simply passing through the point of contact without any acknowledgment of the impact.

### Secondary Motion for Believability

Just as character animation benefits from secondary movement, like hair or clothing responding to a character's primary motion, prop animation benefits from similar secondary details. A rope or chain attached to a swinging object might lag slightly behind the object's main movement before catching up. A stack of loose objects disturbed by an impact might separately settle and shift for a moment after the main collision. These secondary details, even when subtle, add considerable believability to prop animation that would otherwise feel stiff or mechanical.

### Environmental and Background Props

Many props exist primarily as background or environmental elements, a flag waving gently, a hanging sign swaying slightly, water rippling in a pond. These typically call for looping, procedural-style animation rather than detailed, hand-keyframed motion, since the movement itself is usually repetitive and does not need to convey any specific narrative moment or emotional beat, only a sense of ambient, ongoing life within an environment.

### Interactive Props in Games

In game development specifically, many props need to respond dynamically to player interaction, such as a lever that animates when pulled, or a door that opens when approached. These props typically need multiple short animation clips, an idle or closed state, an activation animation, and sometimes a return-to-idle animation, triggered by gameplay logic rather than playing continuously. Planning for this modular, triggerable structure from the start, rather than a single, long, continuous animation, makes these interactive props much easier to integrate successfully into actual gameplay systems.

### Props Deserve the Same Careful Attention as Characters

While prop animation may seem like a lesser, less creatively demanding task compared to character animation, getting it right still requires real skill and careful attention to timing, weight, and physical believability. A game or scene filled with beautifully animated characters can still feel unpolished if the surrounding props move stiffly or unconvincingly. Treating prop animation with the same care and attention to timing and physical believability that you would bring to character work rounds out your overall skill as a 3D animator and noticeably raises the overall polish of any finished project.`;
