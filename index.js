import Dog from './Dog'
import dogs from './data.js'

const likeBtn = document.getElementById('like-btn')
const nopeBtn = document.getElementById('nope-btn')
const app = document.getElementById('app')
const main = document.getElementById('main')

function render(){
    app.innerHTML = dog.getDogHtml()
}

function getNewDog(){
    const nextDog = dogs.shift() 
    return nextDog ? new Dog(nextDog) : {}
}

let dog = getNewDog()
render() // render app

likeBtn.addEventListener('click', like)
nopeBtn.addEventListener('click', nope)

function like(){
        dog.hasBeenLiked = true
        dog.hasBeenSwiped = true
        app.innerHTML += dog.getbadgeHTML()
        swipe()
}

function nope(){
        dog.hasBeenLiked = false
        dog.hasBeenSwiped = true
        app.innerHTML += dog.getbadgeHTML()
        swipe()
}

function swipe(){    
    if(dogs.length == 0){
        setTimeout(() => end(), 1500)
    }else {
        dog = getNewDog()
        setTimeout(() => render(), 1500)
    }
}

function end(){
    main.innerHTML = `<div class="end">No more dogs...</div>` 
}

document.getElementById('chat').addEventListener('click', function(){
    main.innerHTML = `
    <div class="end"><h2>Messages</h2></div>`
}) // opening messages when clicking chat icon

document.getElementById('profile').addEventListener('click', function(){
    main.innerHTML = `<div class="end"><h2>Profile</h2></div>`
}) // opening profile when clicking profile icon
