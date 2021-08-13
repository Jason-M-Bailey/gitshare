/* This modal works */
const editButtonHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');
  console.log(id);

  /* console.log(req.session.user_id); */

  let element = document.getElementById("update-form-modal");
  element.classList.add("is-active");
}

// Modal Close
function closeFunction() {
  let element = document.getElementById("update-form-modal");
  element.classList.remove("is-active");
}

/* Edit Form */
const editFormHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');
  console.log(id);
  const name = document.querySelector('#update-project-name').value.trim();
  const github_repo = document.querySelector('#update-github-repo').value.trim();
  const description = document.querySelector('#update-project-description').value.trim();
  const role_needed = document.querySelector('#update-role-needed').value.trim();

  if (name && github_repo && description && role_needed) {
    const response = await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, github_repo, description, role_needed }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to edit project');
    }
  }
};

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  
  if(window.location.href.indexOf('project') > -1) {
    document.querySelector('#edit-btn').addEventListener('click', editButtonHandler);
  
    document
    .querySelector('.save-btn')
    .addEventListener('click', editFormHandler);
  }