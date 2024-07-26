const toRepo = (repoName) => {
  window.open(`https://github.com/Ahosall/${repoName}`);
};

const createCard = (repo) => {
  const { name, description, stargazers_count } = repo;
  const cardHtml = `<div class="card" onclick="toRepo('${name}')"><div class="card-title">${name}</div><div class="card-body"><p class="description">${
    description.length > 55 ? `${description.slice(0, 55)}...` : description
  }</p></div><div class="card-footer"><div class="stars"><i class="fa fa-star-o" aria-hidden="true"></i>${stargazers_count}</div></div></div>`;
  return cardHtml;
};

(async () => {
  const elAvatar = document.getElementById("avatar");
  const elUsername = document.getElementById("username");
  const elProjects = document.getElementById("projects-card");

  const username = "Ahosall";
  const userUrl = `https://api.github.com/users/${username}`;
  const repoUrl = `https://api.github.com/users/${username}/repos`;

  await fetch(userUrl).then(async (res) => {
    const { avatar_url, login, bio } = await res.json();

    elAvatar.style.backgroundImage = `url('${avatar_url}')`;

    elUsername.innerHTML = `Me chamo <u>${login}</u>`;
  });

  await fetch(repoUrl).then(async (res) => {
    const repos = await res.json();

    const cards = repos
      .filter((repo) => repo.topics.find((r) => r === "portfolio"))
      .map(createCard);
    elProjects.innerHTML = cards.join("\n");
  });
})();
