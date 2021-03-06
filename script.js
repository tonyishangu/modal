'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-modal')
const btnsOpen = document.querySelectorAll('.show-modal')

const openModal = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
const escapeClose = (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal()
    }
}
for(let i = 0 ; i < btnsOpen.length ; i++)
    btnsOpen[i].addEventListener('click', openModal);

btnClose.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', escapeClose)