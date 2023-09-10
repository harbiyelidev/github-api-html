const form = document.getElementById('form');
const githubName = document.getElementById('username');
const button = document.getElementById('search');
const footer = document.getElementById('footer');
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", getData)
};

function getData(e) {

    let username = githubName.value.trim();

    if (username === "") {
        form.classList.toggle("not-username");
        footer.classList.toggle("not-username");
    } else {
        github.getGithubData(username)
        .then(response => {
            if (response.user.message === "Not Found") {
                ui.showError(`Kullanıcı Bulunamadı!`);
                form.classList.remove("not-username");
                footer.classList.remove("not-username");
            } else {
                ui.showUserInfo(response.user, response.repo);
                form.classList.remove("not-username");
                footer.classList.remove("not-username");
            };
        })
        .catch(err => console.error(err));
    };

    ui.clearInput();

    e.preventDefault();
};