const $=s=>document.querySelector(s);
const modal=$('#loginModal');
$('#loginBtn')?.addEventListener('click',()=>modal?.classList.remove('hidden'));
$('#closeModal')?.addEventListener('click',()=>modal?.classList.add('hidden'));
modal?.addEventListener('click',e=>{if(e.target===modal)modal.classList.add('hidden')});
$('#demoLogin')?.addEventListener('click',()=>{modal?.classList.add('hidden');alert('Demo sign-in successful! Your account area can be connected to a real authentication service next.')});
$('#quickPlan')?.addEventListener('submit',e=>{e.preventDefault();const from=encodeURIComponent($('#homeFrom').value.trim());const to=encodeURIComponent($('#homeTo').value.trim());const travelers=$('#homeTravelers').value||2;const date=$('#homeDate').value;const params=new URLSearchParams({from,to,travelers});if(date)params.set('date',date);window.location.href=`planner.html?${params.toString()}`});
const menu=$('.menu-toggle'),nav=$('.nav-links');menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';if(nav.style.display==='flex'){nav.style.position='absolute';nav.style.top='76px';nav.style.left='0';nav.style.right='0';nav.style.background='#fff';nav.style.padding='15px 24px';nav.style.flexDirection='column';nav.style.alignItems='flex-start';nav.style.borderBottom='1px solid #e5eaf0'}});
