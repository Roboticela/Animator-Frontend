export default `The term "skeletal rig" comes up constantly in any discussion of 3D character animation, but for genuine beginners, it is worth stepping back and explaining exactly what this term means, and why virtually every animated 3D character depends on having one. This guide offers a clear, foundational explanation.

### Defining a Skeletal Rig

A skeletal rig is the complete internal bone structure built inside a 3D character model, along with the connections tying that bone structure to the character's visible mesh surface. It is called "skeletal" because it functions very much like a real biological skeleton: an internal, largely invisible structure that determines how the visible body can move and bend.

Without a skeletal rig, a 3D model is essentially just a static shape, similar to a stone statue. It might look great sitting still, but there is no built-in mechanism for making any part of it move independently. A skeletal rig is precisely what introduces that capability, dividing the model conceptually into movable sections connected by joints, exactly the way bones and joints allow a real body to move.

### Why Bones Alone Are Not Enough

A skeletal rig involves more than simply placing bones inside a model. The bones also need to be properly connected to the visible mesh, through a process usually called skinning or binding, which tells the software specifically which parts of the surface should move, and by how much, when a particular bone moves or rotates. Without this skinning step, you could have a perfectly built bone hierarchy that, when moved, does absolutely nothing to the visible mesh at all, since nothing is actually connecting the two.

### The Relationship Between Rigs and Animation

A skeletal rig is the foundation that animation is built upon, but it is not animation itself. Animation is the process of actually using a finished rig, posing it at different points in time through keyframes, to create movement. You can think of a skeletal rig as similar to a functional, well-built puppet with all its joints and strings properly connected, while animation is the actual skilled performance of moving that puppet to tell a story or convey an action.

### Why Nearly Every Animated Character Needs One

Some very simple animations, like an inanimate object sliding across the ground or a door swinging open, do not necessarily need a full skeletal rig, since these involve moving an entire, rigid object rather than bending or deforming different parts of it independently. But any character or creature that needs to bend, walk, gesture, or express itself through movement of its individual parts, arms, legs, a head, a tail, needs a skeletal rig to make that kind of nuanced, part-by-part movement possible.

### How Skeletal Rigs Scale in Complexity

A skeletal rig can range from extremely simple, perhaps just a handful of bones for a basic creature that only needs broad, general movement, to remarkably detailed, with dozens or even hundreds of bones for a hero character requiring subtle facial expressions, individual finger movement, and other fine-grained control. The right level of complexity depends entirely on what your specific project actually needs; a background character seen briefly from a distance rarely benefits from the same detailed rig complexity that a close-up, emotionally expressive main character genuinely requires.

### Common Additions to a Basic Skeletal Rig

Beyond the basic humanoid skeleton structure covering the spine, arms, and legs, more advanced skeletal rigs frequently add specialized bone structures for particular purposes: individual finger bones for detailed hand gestures, additional facial bones for expressive animation, or extra bones along a tail or set of wings for creatures that have these features. Each of these additions follows the same fundamental parent-child hierarchy logic as the core rig, simply extending it to cover additional, more specific areas of movement and expression.

### A Skeletal Rig Is an Investment in Everything That Follows

Because every single animation created for a character depends entirely on the underlying skeletal rig functioning correctly, time invested in building a clean, well-planned, properly tested rig pays dividends across every animation built on top of it afterward. A flawed rig will create recurring problems throughout an entire animation project, while a well-built one becomes an almost invisible, reliable foundation, letting you focus your creative energy on the actual performance and timing of your animations, rather than repeatedly fighting against structural problems in the underlying rig itself.`;