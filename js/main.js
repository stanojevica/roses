$(document).ready(function(){
    //Dodavanje klasa
    $("header").addClass("sirina");
    $("#meni > ul").addClass("flex");
    $("#responsivNavigacija").addClass('sakrij');
    $("#arrow").addClass('sakrij');
    $('main').addClass('sirina');
    $("#oNama, #ponuda, #narudzba, #oAutoru").addClass('visinaSirina');
    $('#cvenaBoja,#plavaBoja,#zlatnaBoja').addClass('ponudaSadrzaj');
    $(".ponudaSadrzaj div").addClass("flex");
    $(".ponudaSadrzaj figure figcaption p:nth-child(3)").addClass('sakrij');
    $('#forma,#textAutor').addClass('text');
    $('input,textarea,select,img').addClass('borderRadius');
    //Funkcija scroll da se pojavi strelica koja vodi do vrha kada neko skroluje
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('#arrow').removeClass('sakrij');}
        else{
            $('#arrow').addClass('sakrij');
        }
    });
    //Hover efekat za meni da se postavi pozadinska boja
    $('#meni ul li').hover(
        function(){
            $(this).find('a').addClass('meniHover')},
        function()
            {$(this).find('a').removeClass('meniHover')});
    //Za responsiv kada se pojavi link za drop down meni, kada se klikne na nju pojavice se ul tagovi
    $("#atag").click(function(e){
        $("#responsivMeni").slideToggle();
        e.preventDefault();
      });
    //Funckija klik koja kada odabere neki link iz padajuceg menija zatvara taj meni 
    $('#responsivMeni > ul >li >a').click(function(e){
        $("#responsivMeni").slideToggle();
      });
    //Plugin za slider
    $('#slider').cycle({
        fx: 'shuffle'
    });
    //Funckija klik koja prikazuje skriveni p tag za cenu u divu Ponuda
    $(".dugmeT").click(function(){
        $(this).prev().slideToggle();
      });
    //Animacija koja povecava img tagove kada se predje preko njih u divu Ponuda
    $('.ponudaSadrzaj figure img').hover(function(){
        $(this).stop( true, true ).animate({
            width: '110%'
          },1000);
    },
    function(){
        $(this).stop( true, true ).animate({
            width: '100%'
          },500);
    });
})
window.onload=function(){
    //Poziva se funkcija change za element koji ima id izabrati, ali tek kada se nesto izabere
    document.getElementById("izabrati").addEventListener("change",funkcija);
    //Poziva se funkcija click za inpu type button koji ima id dugme, ali tek kada se klikne na to dugme
    document.getElementById("dugme").addEventListener("click",provera);
}
//dinamicko ispisivanje menija
var nizSadrzaj = ['Pocetna','O nama','Ponuda','Narudžbina','O autoru'];
var nizHrefTagova= ['#pocetna','#oNama','#ponuda','#narudzba','#oAutoru'];
var elementUl = document.createElement('ul'), elementiLi, elementiA;

document.getElementById("meni").appendChild(elementUl);
for(let i=0;i<nizSadrzaj.length;i++){
    elementiLi = document.createElement('li');
    elementiA = document.createElement('a');

    elementiA.href= nizHrefTagova[i];
    elementiA.innerHTML=nizSadrzaj[i];

    elementiLi.appendChild(elementiA);
    elementUl.appendChild(elementiLi);
}

var elementUl1 = document.createElement('ul'), elementiLi1, elementiA1;
document.getElementById("responsivMeni").appendChild(elementUl1);

for(let i=0;i<nizSadrzaj.length;i++){
    elementiLi1 = document.createElement('li');
    elementiA1 = document.createElement('a');

    elementiA1.href= nizHrefTagova[i];
    elementiA1.innerHTML=nizSadrzaj[i];

    elementiLi1.appendChild(elementiA1);
    elementUl1.appendChild(elementiLi1);
}


//Funkcija za ponudu koja se poziva na change
function funkcija(){
    var izabranoPolje = this.value;
    var crvenoP = document.getElementById("cvenaBoja");
    var plavoP = document.getElementById("plavaBoja");
    var zlatnoP = document.getElementById("zlatnaBoja");
    if(izabranoPolje == "crvena"){
        plavoP.classList.add("sakrij");
        zlatnoP.classList.add("sakrij");
        crvenoP.classList.remove("sakrij");
    }
    else if(izabranoPolje == "plava"){
        plavoP.classList.remove("sakrij");
        zlatnoP.classList.add("sakrij");
        crvenoP.classList.add("sakrij");
    }
    else if (izabranoPolje == "zlatna"){
        plavoP.classList.add("sakrij");
        zlatnoP.classList.remove("sakrij");
        crvenoP.classList.add("sakrij");
    }
    else{
        plavoP.classList.remove("sakrij");
        zlatnoP.classList.remove("sakrij");
        crvenoP.classList.remove("sakrij")
    }
    console.log(izabranoPolje);
}
//Dinamicko ispisivanje elemenata u Ponudi 1   
var nizP = ['Boja: ','Boja: ','Boja: '];
var nizPdrugi = ['Količina: 1','Količina: 12','Količina: 101'];
var nizPtreci = ['Cena: 8000 rsd','Cena: 4000 rsd','Cena: 12000 rsd'];
var nizSlike = ['img/crvenaRuza1.jpg','img/crvenaRuza2.jpg','img/crvenaRuza3.jpg'];
var nizAltTagova = ['ruža-ponuda','ruža-ponuda','ruža-ponuda'];

var div1=document.createElement('div'),fig,figCapt,slike,p1,p2,p3;
document.getElementById("cvenaBoja").appendChild(div1);

for(let i=0;i<nizP.length;i++){
    fig=document.createElement('figure');
    figCapt=document.createElement('figcaption');
    p1=document.createElement('p');
    p2=document.createElement('p');
    p3=document.createElement('p');
    p1.innerHTML=nizP[i]+'Crvena';
    p2.innerHTML=nizPdrugi[i];
    p3.innerHTML=nizPtreci[i];
    slike=document.createElement('img');
    slike.src=nizSlike[i];
    slike.alt=nizAltTagova[i];

    figCapt.appendChild(p1);
    figCapt.appendChild(p2);
    figCapt.appendChild(p3);
    fig.appendChild(slike);
    fig.appendChild(figCapt);
    
    div1.appendChild(fig);
}
//Dinamicko ispisivanje elemenata u Ponudi 2
var nizSlike1 =['img/plavaRuza1.jpg','img/plavaRuza2.jpg','img/plavaRuza3.jpg'];

var div2=document.createElement('div'),fig1,figCapt1,slike1,tagp1,tagp2,tagp3;
document.getElementById("plavaBoja").appendChild(div2);

for(let i=0;i<nizP.length;i++){
    fig1=document.createElement('figure');
    figCapt1=document.createElement('figcaption');
    tagp1=document.createElement('p');
    tagp2=document.createElement('p');
    tagp3=document.createElement('p');
    tagp1.innerHTML=nizP[i]+'Plava';
    tagp2.innerHTML=nizPdrugi[i];
    tagp3.innerHTML=nizPtreci[i];
    slike1=document.createElement('img');
    slike1.src=nizSlike1[i];
    slike1.alt=nizAltTagova[i];

    figCapt1.appendChild(tagp1);
    figCapt1.appendChild(tagp2);
    figCapt1.appendChild(tagp3);
    fig1.appendChild(slike1);
    fig1.appendChild(figCapt1);
    
    div2.appendChild(fig1);
}

//Dinamicko ispisivanje elemenata u Ponudi 3
var nizSlike2 =['img/zlatnaRuza1.jpg','img/zlatnaRuza2.jpg','img/zlatnaRuza3.jpg'];

var div3=document.createElement('div'),fig2,figCapt2,slike2,ptag1,ptag2,ptag3;
document.getElementById("zlatnaBoja").appendChild(div3);

for(let i=0;i<nizP.length;i++){
    fig2=document.createElement('figure');
    figCapt2=document.createElement('figcaption');
    ptag1=document.createElement('p');
    ptag2=document.createElement('p');
    ptag3=document.createElement('p');
    ptag1.innerHTML=nizP[i]+'Zlatna';
    ptag2.innerHTML=nizPdrugi[i];
    ptag3.innerHTML=nizPtreci[i];
    slike2=document.createElement('img');
    slike2.src=nizSlike2[i];
    slike2.alt=nizAltTagova[i];

    figCapt2.appendChild(ptag1);
    figCapt2.appendChild(ptag2);
    figCapt2.appendChild(ptag3);
    fig2.appendChild(slike2);
    fig2.appendChild(figCapt2);
    
    div3.appendChild(fig2);
}
//Dodavanje input type button svim figcapion elementima u divu ponuda kako bi se kasnije odradila funkcija click koja je definisana u $(document).ready(function()
var sviFigCapt = document.getElementsByTagName('figcaption');
for(let i = 0 ; i < sviFigCapt.length ; i++){
    var dugmeToggle = document.createElement('input');
    dugmeToggle.setAttribute('type','button');
    dugmeToggle.setAttribute('value','Cena'); 
    dugmeToggle.classList.add('dugmeT');
    sviFigCapt[i].appendChild(dugmeToggle);
}

//Funckija za proveru forme koja se poziva na click 
function provera(){
    var validno = true;
    var nizVrednosti=[];
    
    var ime=document.getElementById("name").value;
    var prIme = /^[A-Z][a-z]{1,15}$/;
    if(!prIme.test(ime)){
        document.getElementsByClassName('obavezno')[0].classList.remove('sakrij');
        validno = false;
    }
    else{
        document.getElementsByClassName('obavezno')[0].classList.add('sakrij');
        nizVrednosti.push(ime);
    }

    var prezime = document.getElementById("lastName").value;
    var prPrezime = /^([A-Z][a-z]{1,15}\s?)+$/;
    if(!prPrezime.test(prezime)){
        document.getElementsByClassName('obavezno')[1].classList.remove('sakrij');
        validno = false
    }
    else{
        nizVrednosti.push(prezime);
        document.getElementsByClassName('obavezno')[1].classList.add('sakrij');
    }

    var email = document.getElementById("email").value;
    var prEmail = /^[a-z][a-z\d\_\.\-]+\@[a-z\d]+(\.[a-z]{2,4})$/;
    if(!prEmail.test(email)){
        document.getElementsByClassName('obavezno')[2].classList.remove('sakrij');
        validno = false
    }
    else{
        nizVrednosti.push(email);
        document.getElementsByClassName('obavezno')[2].classList.add('sakrij');
    }
    var tagSlika;
    var selektovano = document.getElementById("izabratiCvet").value;
    var tagSlika = document.createElement('img');
    tagSlika.setAttribute('alt','izabran ruza')
    if(selektovano == "sve"){
        document.getElementsByClassName('obavezno')[3].classList.remove('sakrij');
        validno = false
    }
    else if(selektovano == 'crvena1'){
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[0]);
        tagSlika="img/crvenaRuza1.jpg";
    }
    else if(selektovano == 'crvena12'){
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[1]);
        tagSlika="img/crvenaRuza2.jpg";    
    }
    else if(selektovano == 'crvena101'){
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[2]);
        tagSlika="img/crvenaRuza3.jpg";    
    }
    else if(selektovano == 'plava1'){
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[0]);
        tagSlika="img/plavaRuza1.jpg";    
    }
    else if(selektovano == 'plava12'){
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[1]);
        tagSlika="img/plavaRuza2.jpg";    
    }
    else if(selektovano == 'plava101'){
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[2]);
        tagSlika="img/plavaRuza3.jpg"; 
    }
    else if(selektovano == 'zlatna1'){
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[0]);
        tagSlika="img/zlatnaRuza1.jpg";    }
    else if(selektovano == 'zlatna12'){
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[1]);
        tagSlika="img/zlatnaRuza2.jpg";    }
    else{
        document.getElementsByClassName('obavezno')[3].classList.add('sakrij');
        nizVrednosti.push(nizPtreci[2]);
        tagSlika="img/zlatnaRuza3.jpg";    }
    
    var poruka = document.getElementById('message').value;
    if(poruka == ''){
        document.getElementsByClassName('obavezno')[4].classList.remove('sakrij');
        validno = false
    }
    else{
        nizVrednosti.push('Poruka: '+poruka);
        document.getElementsByClassName('obavezno')[4].classList.add('sakrij');;
    }

    if(validno){
        var ispisSlika = '<img src='+tagSlika+' alt=\'narudzbina\' class=\'borderRadius\'\/>'
        var ispisPTag = '<div><p>Ruža koju ste naručili nalazi se na slici iznad, a vaši podaci su sledeći:</p>'
        for(let i=0;i<nizVrednosti.length;i++){
            ispisPTag+='<p>'+nizVrednosti[i]+'</p>'
        }
        ispisPTag+='</div>'
        document.getElementById("slikaForma").innerHTML=ispisSlika;
        document.getElementById("textForma").innerHTML=ispisPTag;
    }
    else{
        document.getElementById("textForma").innerHTML='';
        document.getElementById("slikaForma").innerHTML='';
        console.log('forma nije dobro uneta');
    }

}
//Ubacivanje sadrzaja u div oAutoru

var mojaSlika = document.createElement("img")
mojaSlika.setAttribute('src','img/me1.JPG');
mojaSlika.setAttribute('alt','autorSlika');
document.getElementById("slikaAutor").appendChild(mojaSlika);

var linkPortfolio = document.createElement('a');
linkPortfolio.href='https://portfolioaleksandrastanojevic.000webhostapp.com/';
linkPortfolio.innerHTML='LINK DO PORTFOLIA'
var nizOpis = ['Zdravo, ja sam Aleksandra Stanojevic','Student sam Visoke strukovne škole za informacione i komunikacione tehnologije.','Ovaj sajt radim kao predispitnu obavezu iz predmeta Web programiranje 1, a želja mi je da se bavim ovim i u budućnosti.','Ukoliko želite da saznate nešto više od meni ili da vidite neki od mojih prethodih radova link do mog portfolia je ispod teksta.'];

for(let i=0;i<nizOpis.length;i++){
    var pOpis=document.createElement('p');
    pOpis.innerHTML=nizOpis[i];
    document.getElementById('textAutor').appendChild(pOpis);
}
document.getElementById('textAutor').appendChild(linkPortfolio);

