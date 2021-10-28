const linksSocialMedia = {
  github: "klug1",
  twitter: "AlmeidaP99",
  facebook: 'facebook',
  instagram: 'instagram',
  youtube: 'youtube'
  }

  function changeSocialMediaLinks(){
      // document.getElementById('userName').textContent = 'Patrick Almeida' ou esse código abaixo
      // userName.textContent = 'Patrick Almeida'

      //quando o for começa, quando ele para e incrementar o i com 1 até chegar a 10.
      for(let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

        // alert(li.children[0].href)
         
      }
  }

  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url).then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
  }
  getGitHubProfileInfos()