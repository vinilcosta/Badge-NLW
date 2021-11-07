const linksSocialMedia ={                      

  github :"vinilcosta",
  youtube : "jakelinygracielly",
  facebook : "maikbrito",
  instagram :'vinilcosta',
  twitter :'vinilcosta22'

} 

function changeSocialMediaLinks() {
     for (let li of socialLinks.children){         
     const social = li.getAttribute('class') 
    
     li.children[0].href =`https://${social}.com/${linksSocialMedia[social]}`            
                            
     
     }
}

changeSocialMediaLinks()

function getGitHubProfileInfos (){
 const url = `https://api.github.com/users/${linksSocialMedia.github}`


  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name      // textContent função usada para acessar a DOM no caso alteramos o nome do meu cartão ,usando o id do h1 no html.  
    userBio.textContent = data.bio        //Utilizamos a mesma função que acessa a DOM o que muda e que pegamos o id da bio do cartão e trocamos para a bio que esta na api. 
    userlink.href = data.html_url         //Nesse caso nao utilizamos o textContent pois ele alteraria tudo dentro do a ate a imagem 
    userImage.src = data.avatar_url
    userLogin.textContent= data.login
  })

}

getGitHubProfileInfos()