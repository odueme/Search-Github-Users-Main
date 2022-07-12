const searchBtn = document.querySelector(".src-btn")
const url = "https://api.github.com/users/"
const input = document.querySelector("#input")
const userLogin = document.querySelector("#user-login")
const locate = document.querySelector("#location")
const userName = document.querySelector("#username")
const bio = document.querySelector("#bio")
const repos = document.querySelector("#repos")
const followers= document.querySelector("#followers")
const following = document.querySelector("#following")
const profilePic = document.querySelector("#profile")
const page = document.querySelector("#page")
const twitter = document.querySelector("#twitter")
const company = document.querySelector("#company")
const theme = document.querySelector(".theme")
const userDisplay = document.querySelector(".user-display")
const devfinder = document.querySelector(".devfinder")
const followSectionWrapper = document.querySelector(".following-section-wrapper")
const stats = document.querySelectorAll(".stats")
const themeBtn = document.querySelector(".dark")
const themePic = document.querySelector("#theme-pic")
const reposText = document.querySelector("#repos-text")
const followersText = document.querySelector("#followers-text")
const followingText = document.querySelector("#following-text")
const locationPic = document.querySelector("#location-pic")
const webPic = document.querySelector("#web-pic")
const tweetPic = document.querySelector("#twitter-pic")
const companyPic = document.querySelector("#company-pic")

let darkMode = false




searchBtn.addEventListener("click", ()=>{
   if(input.value != ""){
    getUser( url +  `${input.value}`) 
   }
   
})

theme.addEventListener("click", ()=>{
    if(darkMode == false){
        changeToDark()
    } else {
        changeToLight()
    }
})

function getUser(url){
    fetch(url).then(response => {
        console.log(response)
       return response.json()
    }).then(data =>{

        function checkIfNull(param){
                    if(param == "" || param == null){
                        return "No data"
                    } else{
                        return `${param}`
                    }
                }
        userLogin.innerHTML = `@${data.login} `
        userName.innerHTML = data.name
        locate.innerHTML = checkIfNull(data.location)
        bio.innerHTML = data.bio
        repos.innerHTML = data.public_repos
        followers.innerHTML = data.followers
        following.innerHTML = data.following
        profilePic.src = `${data.avatar_url}`
        page.innerText = checkIfNull(data.blog)
        twitter.innerHTML = checkIfNull(data.twitter_username)
        company.innerHTML = checkIfNull(data.company)
        getUser(data)
        console.log(data)

    })
}



// function getUser(data){
//     function checkIfNull(param){
//         if(param == "" || param == null){
//             return "No data"
//         } else{
//             return `${param}`
//         }
//     }
    
// }



function changeToDark(){
    for (let i = 0; i < stats.length; i++) {
            document.body.style.backgroundColor = "#141D2F"
            userDisplay.style.backgroundColor = "#1E2A47"
            devfinder.style.color = "white"
            followSectionWrapper.style.backgroundColor = "#141D2F"
            stats[i].style.color = "white"
            themeBtn.style.color = "white"
            input.style.backgroundColor = "#1E2A47"
            themeBtn.innerText = "Light"
            themePic.src = "./assets/icon-sun.svg"
            reposText.style.color = "white"
            followersText.style.color ="white"
            followingText.style.color = "white"
            locate.style.color = "white"
            page.style.color = "white"
            company.style.color = "white"
            twitter.style.color = "white"
            locationPic.style.filter = "brightness(100)"
            webPic.style.filter = "brightness(100)"
            tweetPic.style.filter = "brightness(100)"
            companyPic.style.filter = "brightness(100)"
            darkMode = true
        
    }
}


function changeToLight(){
    for (let i = 0; i < stats.length; i++) {
        document.body.style.backgroundColor = "#f6f8ff"
        userDisplay.style.backgroundColor = "white"
        devfinder.style.color = "#4b6a9b"
        followSectionWrapper.style.backgroundColor = "#f6f8ff"
        stats[i].style.color = "black"
        themeBtn.style.color = "#4b6a9b"
        input.style.backgroundColor = "white"
        themeBtn.innerText = "Dark"
        themePic.src = "./assets/icon-moon.svg"
        reposText.style.color = "#4b6a9b"
        followersText.style.color ="#4b6a9b"
        followingText.style.color = "#4b6a9b"
        locate.style.color = "#4b6a9b"
        page.style.color = "#4b6a9b"
        company.style.color = "#4b6a9b"
        twitter.style.color = "#4b6a9b"
        locationPic.style.filter = "brightness(1)"
        webPic.style.filter = "brightness(1)"
        tweetPic.style.filter = "brightness(1)"
        companyPic.style.filter = "brightness(1)"
        darkMode = false
    
}
}