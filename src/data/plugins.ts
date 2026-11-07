// Copyright (C) 2026 Spectra
// Licensed under the GNU Affero General Public License v3.0 (AGPLv3).
// See the LICENSE file in the project root for details.

// ---------------------------------------------------------------------------
// Your plugins live here. Add, remove or edit entries and the home page,
// the /plugins listing and each /plugins/<slug> detail page update automatically.
//
// Screenshots: drop an image in /public/plugins/<slug>.webp (or .png) and set
// `image: 'plugins/<slug>.webp'`. Without an image, a generated faceplate in
// the plugin's `hue` is shown instead.
// ---------------------------------------------------------------------------

export type PluginStatus = 'available' | 'coming-soon';

export interface Plugin {
  slug: string;
  name: string;
  /** Short category label, e.g. "Saturation". */
  category: string;
  /** One-liner shown on cards. */
  summary: string;
  /** Big headline on the detail page. */
  headline: string;
  /** Paragraph on the detail page. */
  description: string;
  status: PluginStatus;
  isNew?: boolean;
  /** Where the "Download" button goes. */
  downloadUrl?: string;
  /** Optional path inside /public. */
  image?: string;
  /** Hue (0-360) for the generated faceplate. */
  hue: number;
  /** Knob labels for the generated faceplate. */
  controls: string[];
  /** Large alternating feature sections on the detail page. */
  features: { title: string; body: string }[];
  /** Compact grid of highlights on the detail page. */
  highlights: { title: string; body: string }[];
}

export const plugins: Plugin[] = [
  {
    slug: 'spectrashell',
    name: 'SpectraShell',
    category: 'Harmonic Resonator',
    summary: 'Tune a bank of resonators to the notes you pick and make drums, noise or vocals ring in key.',
    headline: 'Make anything ring in key.',
    description:
      'SpectraShell tunes a bank of resonators to the notes you choose. Run drums, noise, vocals or pads through it and they start to ring in key. Pick the notes by hand on the keyboard, set a chord or scale in one step, or play them live over MIDI.',
    status: 'available',
    isNew: true,
    downloadUrl: 'https://github.com/n3tv01d-jp/SpectraShell/releases/latest',
    hue: 262,
    controls: ['Decay', 'Bright', 'Width', 'Low Cut', 'Mix'],
    features: [
      {
        title: 'Up to 48 voices, in tune.',
        body: 'Up to 12 notes across 4 stacked octaves, each driving its own comb resonator. Tuning compensates for the damping filter, so notes stay within about 0.5 cent at any brightness.',
      },
      {
        title: 'Play it over MIDI.',
        body: 'Choose Manual, MIDI, or both. MIDI notes fold to pitch classes, so the Octave and Stack knobs keep control of the register.',
      },
      {
        title: 'Full or Hollow.',
        body: 'Full rings with every harmonic for a bright, string-like tone. Hollow keeps odd harmonics only for a woody, clarinet-like color.',
      },
    ],
    highlights: [
      { title: 'Zero latency', body: 'No added delay, so it works for tracking and live use.' },
      { title: 'Light on CPU', body: 'About 0.3 % of one core for a typical triad, and idle voices use nothing.' },
      { title: 'Chords and scales', body: 'Set the keyboard to triads, 7ths, modes or pentatonics with a root and one click.' },
      { title: 'Stereo width', body: 'Detune left against right to spread the resonance across the stereo field.' },
      { title: 'Works under Wine', body: 'Includes fixes so the Windows build displays and runs correctly on Linux via Wine.' },
      { title: 'Open source', body: 'Free and licensed under AGPLv3. The source is on GitHub.' },
    ],
  },
  {
    slug: 'spectradrive',
    name: 'SpectraDrive',
    category: 'Harmonic Distortion',
    summary: 'Five saturation curves, from warm tube to wavefolder, with live harmonic displays.',
    headline: 'See the harmonics you add.',
    description:
      'SpectraDrive pushes audio through one of five saturation curves: Tube, Tape, Diode, Hard and Fold. Displays show the curve, where your signal sits on it, and which harmonics it adds, so you can dial in grit by eye as well as by ear.',
    status: 'available',
    isNew: true,
    downloadUrl: 'https://github.com/n3tv01d-jp/SpectraDrive/releases/latest',
    hue: 28,
    controls: ['Drive', 'Even', 'Tone', 'Clean Lows', 'Mix'],
    features: [
      {
        title: 'Even and odd, on one knob.',
        body: 'The Even knob biases the curve to blend in 2nd, 4th and higher even harmonics. The offset is removed afterwards, and a DC blocker follows the shaper.',
      },
      {
        title: 'Clean Lows.',
        body: 'A Linkwitz-Riley crossover sends the lows around the distortion, so the kick and sub stay tight while the highs get the grit.',
      },
      {
        title: 'Up to 4x oversampling.',
        body: 'Linear-phase oversampling cuts aliasing from a hard-driven 7 kHz tone from -18 dB to -86 dB. Latency is reported to the host, so your DAW lines it up.',
      },
    ],
    highlights: [
      { title: 'Five modes', body: 'Tube, Tape, Diode, Hard clip and a sine wavefolder.' },
      { title: 'Auto gain', body: 'Output matches the input loudness, so you compare tone, not volume.' },
      { title: 'Parallel mix', body: 'The dry path is delay-aligned, so blending in the wet signal causes no comb filtering.' },
      { title: 'Light on CPU', body: 'About 0.25 % of one core at 1x and 0.65 % at 4x.' },
      { title: 'Works under Wine', body: 'Includes fixes so the Windows build displays and runs correctly on Linux via Wine.' },
      { title: 'Open source', body: 'Free and licensed under AGPLv3. The source is on GitHub.' },
    ],
  },
  {
    slug: 'next',
    name: 'Coming soon',
    category: 'In the lab',
    summary: 'We are always working on something new. Join the Discord to hear first.',
    headline: 'Something new is coming.',
    description: 'Stay tuned.',
    status: 'coming-soon',
    hue: 0,
    controls: ['?', '?', '?'],
    features: [],
    highlights: [],
  },
];

export const releasedPlugins = plugins.filter((p) => p.status === 'available');

/** Every plugin ships in this format. */
export const PLUGIN_FORMAT = 'VST3';

export function formatPrice(p: Plugin) {
  return p.status === 'coming-soon' ? 'Soon' : 'Free';
}
