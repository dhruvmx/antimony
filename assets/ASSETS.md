# Antimony visual assets

## Muscular anatomy model

File: `muscle-body.glb`.

Source: https://github.com/slfresh/fitmitwith-anatomy-atlas/blob/master/models/full-body-male-mobile.glb

License: CC BY-SA 4.0. Upstream model lineage: Z-Anatomy and BodyParts3D. Full credits and license accompany the model in this folder and are linked beneath the illustration in the interface.

The GLB is unchanged. Antimony assigns terracotta, ivory, and connective-tissue colors and studio lighting at runtime through `anatomy.js`. The rendered artwork adaptation is CC BY-SA 4.0. It is an educational illustration, not patient-specific anatomy or a validated diagnostic view.

Renderer: vendored Three.js 0.180.0 from the npm registry, MIT license. GLTFLoader's relative BufferGeometryUtils import was adjusted to the local vendor folder. All model and renderer files are served locally. No CDN connection is required at runtime.

## DNA illustration

File: `dna-helix.png`.

Created with the built-in image-generation tool, with a transparent background. Final prompt:

> Use case: stylized-concept. Asset type: transparent cutout for a premium pale blue medical dashboard. One sculptural DNA double helix, tall upright gently curved vertical composition with three complete twists, polished silver graphite rails and evenly spaced cylindrical metallic connecting rungs. Realistic sophisticated 3D studio render, soft highlights, shadows on the object only. All of helix inside frame with clear margins. No text, no labels, no base, no UI, no surrounding objects. Genuinely transparent background. Match the metallic DNA sculpture aesthetic seen in high-end medical dashboard reference designs. Decorative illustration, not a genetic test visualization.

The image tool did not produce a usable muscular-body image. No rejected generations are included. The anatomy illustration uses the licensed 3D model above instead.
