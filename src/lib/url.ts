// Copyright (C) 2026 Spectra
// Licensed under the GNU Affero General Public License v3.0 (AGPLv3).
// See the LICENSE file in the project root for details.

/** Prefix an internal path with the configured base (needed for GitHub Pages project sites). */
export function url(path = '') {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}
