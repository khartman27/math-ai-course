import {AbsoluteFill, Audio, Sequence, staticFile} from "remotion";

const slides = [
  {
    title: "Trigonometric Identities",
    body: "Today we begin with trigonometric identities for precalculus students. We will explore how right triangles, the unit circle, and inverse trig functions connect, and we will learn how identities help solve equations and model repeating phenomena.",
  },
  {
    title: "Trigonometric Relationships in Right Triangles",
    body: "Trigonometry starts with a right triangle. For an acute angle theta, sine is opposite over hypotenuse, cosine is adjacent over hypotenuse, and tangent is opposite over adjacent. These ratios are the core definitions that relate angles to side lengths.",
  },
  {
    title: "Right-Triangle Definitions Explained",
    body: "Using a triangle with sides x, y, and r, we see that sin theta equals y over r, cos theta equals x over r, and tan theta equals y over x. The actual triangle can be scaled, but the ratios remain the same, so the functions are well-defined.",
  },
  {
    title: "The Unit Circle and Trigonometric Functions",
    body: "The unit circle is a circle of radius one around the origin. Each angle theta corresponds to a point on the circle whose coordinates are cos theta and sin theta. This geometric viewpoint extends trig functions beyond right triangles to any angle.",
  },
  {
    title: "Connecting Unit Circle and Right Triangles",
    body: "When we drop a perpendicular from a point on the unit circle to the x-axis, we form a right triangle with hypotenuse one. The horizontal leg equals cos theta and the vertical leg equals sin theta, which matches the standard triangle definitions for acute angles.",
  },
  {
    title: "Pythagorean Identities",
    body: "Because every point on the unit circle satisfies x squared plus y squared equals one, we get the core identity cos squared theta plus sin squared theta equals one. Dividing this identity by cos squared or sin squared gives the secant and cosecant forms that are useful in many calculations.",
  },
  {
    title: "Cofunction and Reciprocal Identities",
    body: "Cofunction identities relate sine and cosine by a ninety-degree shift: sine of pi over two minus theta equals cosine of theta. Reciprocal identities define secant as one over cosine, cosecant as one over sine, and cotangent as one over tangent.",
  },
  {
    title: "Inverse Trigonometric Functions",
    body: "Inverse trig functions let us recover an angle from a ratio. Arcsine and arccosine take values between minus one and one, while arctangent accepts any real number. The range for arcsine is negative pi over two to pi over two, and for arccosine it is zero to pi.",
  },
  {
    title: "Properties of Inverse Trig Functions",
    body: "The basic properties are that sine of arcsine x equals x, cosine of arccosine x equals x, and tangent of arctangent x equals x. However, arcsine of sine theta is not always theta, because the inverse returns a principal angle in the allowed range.",
  },
  {
    title: "Solving Trigonometric Equations",
    body: "We solve trig equations by using identities to rewrite expressions. For example, sin squared theta plus sin theta minus two equals zero factors into sin theta minus one times sin theta plus two. Only sin theta equals one is valid, giving theta equals pi over two plus multiples of two pi.",
  },
  {
    title: "Periodic Modeling with Trig Identities",
    body: "Sine and cosine are perfect models for periodic phenomena such as waves, motion, and cycles. The general form y equals A sine of B x minus C plus D captures amplitude, frequency, phase shift, and vertical shift. Identities help rewrite these models and simplify their analysis.",
  },
  {
    title: "Summary and Takeaways",
    body: "We reviewed right-triangle trig definitions, the unit circle, inverse trig properties, and how identities support equation solving and periodic modeling. Practice verifying basic identities and solving trig equations to deepen your understanding.",
  },
];

const SLIDE_FRAMES = 900; // 30 seconds at 30 fps

export const MyComposition: React.FC = () => {
  return (
    <AbsoluteFill className="bg-white text-slate-900">
      <Audio src={staticFile("narration.mp3")} />

      {slides.map((s, i) => {
        const from = i * SLIDE_FRAMES;
        return (
          <Sequence key={i} from={from} durationInFrames={SLIDE_FRAMES}>
            <AbsoluteFill className="flex items-center justify-center px-12">
              <div className="max-w-4xl w-full text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-4">Lecture</p>
                <h2 className="text-5xl font-semibold mb-6">{s.title}</h2>
                <p className="text-xl text-slate-700 leading-relaxed">{s.body}</p>
              </div>
            </AbsoluteFill>
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
