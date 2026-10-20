
document.addEventListener('DOMContentLoaded',()=>{
 const button=document.querySelector('.menu'),links=document.querySelector('.navlinks');
 if(button&&links)button.addEventListener('click',()=>{const open=links.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('.navlinks a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(links)links.classList.remove('open');if(button)button.setAttribute('aria-expanded','false');}));
 const y=document.querySelector('[data-year]');if(y)y.textContent=new Date().getFullYear();
 const form=document.querySelector('[data-contact-form]');
 if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Portfolio message from '+d.get('name'));const body=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'));location.href='mailto:nasooha5907@gmail.com?subject='+subject+'&body='+body;});
});
