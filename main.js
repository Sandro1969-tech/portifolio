function getProjects() {
  const urlGitHub = "https://api.github.com/users/Sandro1969-tech/repos";
  const loadingElement = document.getElementById('loading');

  fetch(urlGitHub)
    .then(response => response.json())
    .then(data => {
      loadingElement.style.display = 'none'; // Esconde o "Carregando..."
      showProject(data);
    })
    .catch(e => {
      console.error("Erro ao buscar projetos:", e);
      loadingElement.textContent = "Erro ao carregar projetos.";
    });
}

function showProject(data) {
  const container = document.getElementById('meus-projetos-list');
  container.innerHTML = "";

  data.forEach(repo => {
    const a = document.createElement("a");
    a.href = repo.html_url;
    a.target = "_blank";
    a.textContent = repo.name;
    container.appendChild(a);
  });
}

getProjects();