const baseUrl = 'prova';

export default function lol() {
  return 0;
}

export async function getHighlights() {
  const e = await fetch(`${baseUrl}/posts?type=highlights`);
  const data = await e.json();
  return data.posts;
}

export async function getLatests(page, step) {
  const e = await fetch(`${baseUrl}/posts?type=latests&page=${page}&step=${step}`);
  const data = await e.json();
  return data.posts;
}
