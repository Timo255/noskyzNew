const menuBar = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const navbar = document.getElementById('navBox');
const navItem = document.querySelectorAll('.navItem');
// const header = document.querySelector("header");     
      
    

      //sticky header
  window.addEventListener("scroll", function(){
        let header = document.querySelector("header");
        
    
        header.classList.toggle("scrolling-active", window.scrollY > 0);
  })

      /* show menu */
      menuBar.addEventListener('click', () =>{
        navbar.classList.toggle('show');
    })

        
      /* show menu */
      closeBtn.addEventListener('click', () =>{
        navbar.classList.remove('show');
    })

      
      /* Active and Remove */
      navItem.forEach(n =>{
        if(n.href === window.location.href){
            // n.setAttribute('aria-current', 'page');
            n.classList.add('active');
            // navContainer.classList.remove('show');
        }
    })











