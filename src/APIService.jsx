import highlights from './json-prova/highlights.json';
import latests from './json-prova/latests.json';
import projects from './json-prova/projects.json';
import project from './json-prova/project.json';
import articles from './json-prova/articles.json';
import article from './json-prova/article.json';

// const baseUrl = '127.0.0.1:8081';

export default function lol() {
  return 0;
}

/* export async function getHighlights() {
  const e = await fetch(`${baseUrl}/posts?type=highlights`);
  const data = await e.json();
  return data.posts;
} */

/* export async function getLatests(page, step) {
  const e = await fetch(`${baseUrl}/posts?type=latests&page=${page}&step=${step}`);
  const data = await e.json();
  return data.posts;
} */

/* export async function getArticleFromId(id) {
  const e = await fetch(`${baseUrl}/articles?id=${id}`);
  const data = await e.json();
  return data;
} */

export function getHighlights() {
  return highlights;
}

export function getLatests() {
  return latests;
}

export function getProjects() {
  return projects;
}

export function getProjectFromName() {
  return project;
}

export function getArticlesOfProject() {
  return articles;
}

export function getArticleList() {
  return articles;
}

export function getArticleFromId() {
  return article;
}
