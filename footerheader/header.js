const resolution = window.screen.width;
const header = document.querySelector('header');
let HeaderState = false;
console.log(resolution);
if(resolution > 768){
    header.innerHTML = `
    <div class="header-upper">
         <div class="header-upper-left">
            <img class="header-phone-icon" src="images/phoneicon.svg">
            <p class="header-phone-number">+(373) 679 410 243 </p>
         </div>
         <div class="header-upper-right">
            <p class="header-email">office@group-one.md</p>
         </div>
      </div>
      <div class="header-middle">
         <div class="header-middle-left">
            <a href="index.php"><p class="logo-text">Group ONE</p></a>
            <a href="index.php"><img class="header-logo" src="images/logo.png"></a>
         </div>
         <div class="header-middle-right">
            <a href=""><button>DESPRE NOI</button></a>
            <button onclick="window.location.href='index.php#desprenoi'">DOMENII DE ACTIVITATE</button>
            <button onclick="location.href='#footer'">CONTACTE</button>
            <button onclick="window.location.href='index.php#proiecte'">PROIECTE</button>
         </div>
      </div>
      <div class="header-lower">
         <img class="header-location-icon" src="images/locationicon.svg">
         <p class="header-adress">Str. Chișinău 76 p. Moldova, orașul. Anenii Noi </p>
      </div>
      <div class="orange-box">
      </div>
    `;
}
else{
    header.innerHTML = `
    <div class="headerleft">
    <p>Group ONE</p>
    <img src="images/logo.png">
  </div>

  <div class="headerright">
    <img class="burger" src="images/burgermenu.svg">

    <div class="headerhidden">
      <div class="hidden">
        <div class="hiddenmenu">
          <a href=""><button>DESPRE NOI</button></a>
            <button onclick="window.location.href='index.php#desprenoi'">DOMENII DE ACTIVITATE</button>
            <button onclick="location.href='#footer'">CONTACTE</button>
            <button onclick="window.location.href='index.php#proiecte'">PROIECTE</button>
        </div>

        <div class="hiddencontacts">
          <p class="header-phone-number">+(373) 679 410 243</p>
          <p class="header-email">office@group-one.md</p>
        </div>
      </div>
    </div>

  </div>
    `
}

document.querySelector('.burger').addEventListener('click', ()=>{
   if(HeaderState){
      //document.querySelector('.headerhidden').style.display = 'none';
      document.querySelector('.headerhidden').style.height = '0px';
      HeaderState = false;
   }else{
      //document.querySelector('.headerhidden').style.display = 'flex';
      document.querySelector('.headerhidden').style.height = '237px';
      HeaderState = true;
   }
});