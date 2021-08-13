const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#project-name").value.trim();
  const github_repo = document.querySelector("#github-repo").value.trim();
  const description = document.querySelector("#project-desc").value.trim();
  const role_needed = document.querySelector("#project-role").value.trim();

  if (name && github_repo && description && role_needed) {
    const response = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({ name, github_repo, description, role_needed }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

/* document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler); */

if (document.querySelector('.project-list')) {
  document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);
} else {
  console.log('No projects listed.');
}
