function showMeSomething() {
  alert(links.github)
}

const SocialMediaLinks = {
  linkedin: 'in/mellyssa-stephanny',
  github: 'mellyssamnds'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${SocialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${SocialMediaLinks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      username.textContent = data.name
      userbio.textContent = data.bio
      userimage.src = data.avatar_url
    })
}

getGithubProfileInfo()
