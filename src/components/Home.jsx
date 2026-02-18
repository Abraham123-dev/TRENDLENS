import React from 'react';
import { Hero } from './Hero';
import { Problem } from './Problem';
import { HowItWorks } from './HowItWorks';
import { Benefits } from './Benefits';

export const Home = () => {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Benefits />
    </>
  );
};
