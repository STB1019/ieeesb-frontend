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

// export async function getArticleFromId(id) {
export async function getArticleFromId() {
  /* const e = await fetch(`http://${baseUrl}/articles/${id}`);
  const data = await e.json(); */
  const data = article;
  return data;
}

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
/* // Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
} */
