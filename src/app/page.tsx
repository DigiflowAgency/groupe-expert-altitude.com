import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Travaux en hauteur Paris & Côte d'Azur | Groupe Expert Altitude",
  description: 'Spécialistes des travaux en hauteur pour professionnels et particuliers. Cordistes, toiture, étanchéité, photovoltaïque. Paris et Juan-les-Pins.',
  keywords: 'travaux hauteur, cordistes, toiture, étanchéité, photovoltaïque, Paris, Juan-les-Pins, professionnels, particuliers',
  openGraph: {
    title: 'Groupe Expert Altitude - Travaux en hauteur',
    description: 'Spécialistes des travaux en hauteur pour professionnels et particuliers',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Groupe Expert Altitude - Travaux en hauteur pour professionnels et particuliers</h1>
      <HomeClient />
    </>
  );
}