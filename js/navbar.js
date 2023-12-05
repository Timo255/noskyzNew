const navContainer = document.getElementById('navBox'),
      menuToggle = document.getElementById('menu'),
      closeBtn = document.getElementById('closeMenu')
const navItem = document.querySelectorAll('.nav_link')     
      
      /* show menu */
      menuToggle.addEventListener('click', ()=> {
        navContainer.classList.toggle('show');
      })

        
      /* show menu */
      closeBtn.addEventListener('click', ()=> {
        navContainer.classList.remove('show');
      })

      
      /* Active and Remove */
      navItem.forEach(n =>{
        if(n.href === window.location.href){
            // n.setAttribute('aria-current', 'page');
            n.classList.add('active');
            // navContainer.classList.remove('show');
        }
    })









