export default `Attack animations are some of the most important, and most scrutinized, animations in any action-oriented game. Players judge how a game feels largely through how satisfying and readable its combat animations are. This guide walks through building an attack animation that feels impactful and clear.

### The Three Phases of a Good Attack

Nearly every satisfying attack animation, whether a punch, a sword swing, or a magical spell cast, follows the same three-phase structure: anticipation, action, and recovery.

Anticipation is the brief wind-up before the actual attack, like pulling a fist back before throwing a punch, or raising a sword before swinging it down. This phase telegraphs the coming attack to the viewer, or in a game, to the player watching an enemy's attack, giving a clear visual cue that something is about to happen.

Action is the fast, sharp moment of the actual attack itself, the punch connecting, the sword slicing through its arc. This phase should generally be considerably quicker than the anticipation phase, since real, powerful movements tend to build up slowly and release quickly.

Recovery is the brief return to a neutral or ready stance after the attack completes, allowing the character, and the animation, to settle back into a state ready for the next action.

### Why Anticipation Matters So Much

New animators sometimes skip or shorten the anticipation phase, assuming it slows the attack down and makes it feel less immediate. In practice, a complete lack of anticipation usually makes an attack feel weak and confusing, rather than fast and powerful, since the viewer has no visual buildup preparing them for the impact. A clear, well-timed anticipation phase, even if brief, is often what separates an attack that feels genuinely powerful from one that feels flat, regardless of how fast the actual striking motion is.

### Making the Action Phase Feel Fast and Powerful

The core striking motion should generally use far fewer frames than the anticipation and recovery phases combined, creating a sharp contrast in speed. This fast motion, paired with the slower buildup beforehand, is a major part of what reads to a viewer as power and impact. Additionally, adding a very brief pause, sometimes just a single frame or two, at the exact moment of impact, sometimes called a "hit hold" or "impact frame," reinforces the sense of a solid, weighty connection.

### Using the Whole Body, Not Just the Striking Limb

A common beginner mistake is animating only the arm or weapon during an attack, leaving the rest of the body static. Real attacks involve the whole body: a punch typically rotates through the hips and torso before the arm even extends, and a sword swing usually involves a corresponding twist through the torso and even a subtle weight shift in the legs. Involving the whole body in an attack's motion, not just the limb doing the actual striking, makes the animation feel dramatically more grounded and powerful.

### Timing for Gameplay Readability

In an actual game, attack animations need to balance visual impact with gameplay readability, meaning players need to be able to clearly recognize when an attack is starting, in time to react appropriately, whether that means dodging, blocking, or simply understanding what just happened. This often means keeping the anticipation phase clear and visually distinct, even if you would prefer a snappier, more subtle wind-up purely for visual polish, since gameplay clarity frequently needs to take priority over pure animation aesthetics in an interactive game.

### Adding Recovery That Sets Up the Next Action

The recovery phase should smoothly transition the character back toward a neutral stance, or directly into a ready position for a follow-up attack if your game supports combo sequences. Pay attention to how this recovery phase blends with whatever animation is likely to follow it, whether that is returning to an idle stance, or flowing into the next attack in a combo chain, since an abrupt, disconnected transition between animations is often more noticeable, and more jarring, to players than almost any other animation issue.

### Testing Attacks in Actual Gameplay Context

An attack animation that looks great in isolation, played on a loop in your animator's viewport, can feel completely different once it is actually integrated into a game and experienced at real gameplay speed, often triggered rapidly and repeatedly during actual combat. Whenever possible, test your attack animations directly within your actual game engine and gameplay context, rather than judging them purely in isolation, since real gameplay pacing frequently reveals timing issues that are not obvious when simply watching the animation play on its own.

### Bringing It All Together

A satisfying attack animation is built from a clear three-phase structure, anticipation, action, and recovery, with careful attention to full-body involvement and precise timing that balances visual power with gameplay clarity. Mastering this three-phase structure for a single basic attack gives you a template you can adapt and reuse across an entire combat system, from light jabs to heavy finishing blows, simply by adjusting the timing and intensity of each phase.`;