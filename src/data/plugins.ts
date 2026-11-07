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

const commonHighlights = [
  { title: 'Low latency', body: 'Built for tracking and live use with near-zero added latency.' },
  { title: 'Fast workflow', body: 'Every control is on one screen. No hidden pages, no menu-diving.' },
  { title: 'Clean DSP', body: 'Oversampled where it matters, so the top end stays smooth.' },
  { title: 'Light on CPU', body: 'Stack dozens of instances without freezing tracks.' },
  { title: 'Preset browser', body: 'Factory presets to start from, and your own saved in one click.' },
  { title: 'Free updates', body: 'Every plugin and every update is free. No account needed.' },
];

export const plugins: Plugin[] = [
  {
    slug: 'prism',
    name: 'Prism',
    category: 'Spectral Saturator',
    summary: 'Split your signal into bands and saturate each one with its own character.',
    headline: 'Bend light. Bend sound.',
    description:
      'Prism splits audio into three bands and gives each its own saturation stage, from soft tape warmth to hard digital fold. Blend it back in with the mix knob and your sound gets more weight without getting muddy.',
    status: 'available',
    isNew: true,
    downloadUrl: '#',
    hue: 262,
    controls: ['Low', 'Mid', 'High', 'Drive', 'Mix'],
    features: [
      { title: 'Three bands, three characters.', body: 'Pick tape, tube, or fold for each band and dial in exactly where the grit goes.' },
      { title: 'Dynamic crossover.', body: 'Drag the band splits on the live spectrum. Changes are phase-coherent, so the low end stays tight.' },
      { title: 'Auto gain that works.', body: 'Loudness-matched output means you hear tone, not volume.' },
    ],
    highlights: commonHighlights,
  },
  {
    slug: 'halo',
    name: 'Halo',
    category: 'Shimmer Reverb',
    summary: 'Lush, pitch-shifted reverb tails that bloom behind pads, vocals and keys.',
    headline: 'Space with a glow.',
    description:
      'Halo is a shimmer reverb tuned for modern production. Octave and fifth shifters feed back into a dense diffusion network for tails that rise instead of fade.',
    status: 'available',
    downloadUrl: '#',
    hue: 200,
    controls: ['Size', 'Shimmer', 'Tone', 'Decay', 'Mix'],
    features: [
      { title: 'Shimmer you can tune.', body: 'Choose octave, fifth or both, and set exactly how much feeds back into the tail.' },
      { title: 'Ducking built in.', body: 'The tail pulls back while the source plays and blooms in the gaps.' },
      { title: 'Freeze.', body: 'Hold the current tail forever and play over it as a drone.' },
    ],
    highlights: commonHighlights,
  },
  {
    slug: 'pulse',
    name: 'Pulse',
    category: 'Rhythmic Gate',
    summary: 'A step-sequenced gate and stutter for movement in any sustained sound.',
    headline: 'Give it a heartbeat.',
    description:
      'Pulse turns static pads and chords into rhythmic parts. Draw a pattern, add swing, and let Pulse chop your audio in time with the host.',
    status: 'available',
    downloadUrl: '#',
    hue: 80,
    controls: ['Rate', 'Swing', 'Attack', 'Release', 'Depth'],
    features: [
      { title: 'Draw your groove.', body: 'Up to 32 steps per pattern, each with its own level and length.' },
      { title: 'Host synced.', body: 'Locks to your DAW tempo, from 1/1 to 1/64 triplets.' },
      { title: 'Free, for real.', body: 'No sign-up wall, no time limit. Just download and use it.' },
    ],
    highlights: commonHighlights,
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
