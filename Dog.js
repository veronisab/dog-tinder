import dogs from './data.js'

export default class Dog{
    constructor(data){
        Object.assign(this, data) 
    }
    getDogHtml() {
        const {avatar, name, age, bio} = this
        return `
        <img class="dog-img" src=${avatar}>
        <div class="about">
        <h2>${name}, ${age} </h2>
            <p>${bio}</p></div>`
    }
    getbadgeHTML() {
        return `<div id="badge" class="badge-box"><img src="images/${this.hasBeenLiked ? "badge-like.png" : "badge-nope.png"}"></div>`
    }
}