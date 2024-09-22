"use client"

import AnimatedSection from './AnimatedSection'; // Adjust the path as necessary
import StaggeredText from './StaggeredText';

export default function Home() {
  return (
    <main className="text-white">
      <StaggeredText />
      <AnimatedSection>
        <h2 className="text-2xl">Keep Scrolling!</h2>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="text-2xl">You're doing great!</h2>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="text-2xl">Almost there!</h2>
      </AnimatedSection>
      <AnimatedSection>
        <h2 className="text-2xl">You made it!</h2>
      </AnimatedSection>
    </main>
  );
}
