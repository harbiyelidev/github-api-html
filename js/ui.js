class UI {

    constructor() {
        this.profileDiv = document.getElementById('information-profile');
        this.userDiv = document.getElementById('information-user');
        this.repoHeader = document.getElementById('information-project-header');
        this.repoDiv = document.getElementById('information-project-repos');
        this.inputField = document.getElementById('username');
    }

    clearInput() {
        this.inputField.value = "";
    }

    showUserInfo(user, repo) {

        const repos = repo.slice(0, 3)
        this.profileDiv.innerHTML = `
        <div class="information-profile" id="information-profile">
        <a href="${user.html_url}" target="_blank"><img src="${user.avatar_url}" alt="profile photo" ondragstart="return false" class="profilePhoto"></a>
        <div class="information-profile-links">
            ${user.email !== null ? `<div class="profile-links-email"><i class="ri-mail-line profile-links-icon"></i> <p class="profile-links-text">${user.email}</p></div>` : ``}
            ${user.twitter_username !== null ? `<div class="profile-links-twitter"><i class="ri-twitter-x-line profile-links-icon"></i> <p class="profile-links-text">${user.twitter_username}</p></div>` : ``}
            ${user.blog !== "" ? `<div class="profile-links-blog"><i class="ri-earth-line profile-links-icon"></i> <p class="profile-links-text">${user.blog}</p></div>` : ``}
        </div>
    </div>`;

    this.userDiv.innerHTML = `
    <div class="information-user" id="information-user">
        <div class="information-user-header"><i class="ri-user-line"></i> <p>USER INFORMATION</p></div>
        <hr />
        <div class="information-info-area">
            <div class="information-user-area">
                <div class="information-text-area">
                    <div class="information-text-header">USERNAME</div>
                    <div class="information-text-description">${user.name !== null ? user.name : user.login}</div>
                </div>
                <div class="information-text-area">
                    <div class="information-text-header">BIOGRAPHY</div>
                    <div class="information-text-description">${user.bio !== null ? `${user.bio}` : `Not Found`}</div>
                </div>
                <div class="information-text-area">
                    <div class="information-text-header">LOCATION</div>
                    <div class="information-text-description">${user.location !== null ? `${user.location}` : `Not Found`}</div>
                </div>
            </div>
            <div class="information-user-area">
                <div class="information-text-area">
                    <div class="information-text-header">FOLLOWERS</div>
                    <div class="information-text-description">${user.followers+ " User"}</div>
                </div>
                <div class="information-text-area">
                    <div class="information-text-header">FOLLOWING</div>
                    <div class="information-text-description">${user.following+ " User"}</div>
                </div>
            </div>
            <div class="information-user-area">
                <div class="information-text-area">
                    <div class="information-text-header">PUBLIC REPOS</div>
                    <div class="information-text-description">${user.public_repos+ " Pieces"}</div>
                </div>
                <div class="information-text-area">
                    <div class="information-text-header">PUBLIC GISTS</div>
                    <div class="information-text-description">${user.public_gists+ " Pieces"}</div>
                </div>
            </div>
        </div>
    </div>`;


    this.repoHeader.innerHTML = `<div class="information-project-header" id="information-project-header"><i class="ri-book-mark-line"></i> <p>GITHUB REPOSITORIES</p></div>
    <hr />`

    this.repoDiv.innerHTML = ``

    

    repos.map(repo => {
        this.repoDiv.innerHTML += `
            <div class="information-project-repo">
            <div class="project-repo-header">
                <div class="repo-header-text"><i class="ri-book-mark-line"></i> <p><a href="${repo.html_url}" target="_blank">${repo.name}</a></p></div>
                <div class="repo-header-public"><p>PUBLIC</p></div>
            </div>
            <div class="project-repo-description ${repo.description == null ? `not-description` : ``}">${repo.description ?? ``}</div>
            <div class="hr"></div>
            <div class="project-repo-footer">
                <div class="repo-footer-language"><i class="ri-circle-fill ${repo.language}"></i> <p>${repo.language ?? "Readme"}</p></div>
                <div class="repo-footer-right">
                    <div class="repo-footer-star"><i class="ri-star-line"></i> <p>${repo.stargazers_count}</p></div>
                    <div class="repo-footer-lisance"><i class="ri-git-branch-line"></i> <p>${repo.license ? repo.license.spdx_id : "Bulunmuyor!"}</p></div>
                </div>
            </div>
        </div>`
    })

    

    }

    showError(message) {
        const notifications = document.getElementById('notifications');
        const closeIcon = document.getElementById('notifications-close');
        const errorMessage = document.getElementById('notification-description')

        notifications.classList.toggle('flex');
        errorMessage.innerHTML = `<p id="notification-message">${message}</p>`;

        setTimeout(() => {
            notifications.classList.remove('flex');
        }, 4000);

        closeIcon.addEventListener('click', () => {
            notifications.classList.remove('flex');
        });
    }
}