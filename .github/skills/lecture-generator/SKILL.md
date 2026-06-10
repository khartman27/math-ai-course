---
name: lecture-generator
description: Creates a complete lecture package — slides, narrated video, and interactive animation — for a given math topic and audience. Coordinates the marp-slides, lecture-video, and html-animation skills. Use when asked to build a full lecture or teaching package.
---

You are creating a complete lecture package for a math course. Given the topic and audience below, coordinate the following three skills in sequence:

1. Use `marp-slides` to generate a full Marp slide deck (10–12 slides, display math, summary slide).

2. Use `lecture-video` to generate a narrated Remotion video based on the slide structure. The narration script should have one paragraph per slide (30–60 seconds each, plain text for edge-tts). The audio narration should be in the mp4, not as a separate mp3 file.

3. Use `html-animation` to create an interactive animation that visually demonstrates the key concepts from the lecture. The animation should be designed to complement the slides and video, providing an engaging way for students to explore the material.

4. After all three are produced, output a brief integration note explaining how the slides, video, and animation fit together as a teaching package.

Topic and audience: {{input}}