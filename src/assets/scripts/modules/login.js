export function initLogin() {
    if(!document.querySelector('.login')) {
        return
    }
    
    const openBtn = document.getElementById('forgot-pass-btn')
    const cancelBtn = document.getElementById('forgot-pass-cancel')
    const forgotModal = document.querySelector('.forgot')

    if(openBtn){            
        openBtn.addEventListener('click', () => {
            forgotModal.classList.add('forgot--open')
        })
    }

    if(cancelBtn){
        cancelBtn.addEventListener('click', () => {
            forgotModal.classList.remove('forgot--open')
        })
    }
}