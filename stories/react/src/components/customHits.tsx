import React from 'react';
import { Hits } from 'react-instantsearch';

interface HitProps {
  customHits?: () => void;
  bannerComponent?: () => void | boolean;
}

export default function CustomHits({
  customHits,
  bannerComponent,
}: Readonly<HitProps>) {
  return <Hits hitComponent={customHits} bannerComponent={bannerComponent} />;
}
