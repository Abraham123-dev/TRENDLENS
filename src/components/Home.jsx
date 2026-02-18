import React from 'react';
import { Hero } from './Hero';
import { Problem } from './Problem';
import { HowItWorks } from './HowItWorks';
import { Benefits } from './Benefits';
import { CTA } from './CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Benefits />
      <CTA />
    </>
  );
};
