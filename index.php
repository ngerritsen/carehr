<!DOCTYPE html>
<meta charset="utf-8">

<title>CareHR</title>

<meta name=description content="">
<meta name=viewport content="width=device-width">

<style>
    <?= file_get_contents(__DIR__ . '/style.css') ?>
</style>

<script src="main.js" async></script>

<link rel="preload" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" as="style" onload="this.rel='stylesheet'">

<noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700">
</noscript>

<!--[if lt IE 10]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

<div class="top-bar">
    <div class="container">
        <div class="top-bar__contents">
            <figure class="logo-container">
                <img src="images/carehr-logo.png" alt="Logo" class="logo">
            </figure>
            <nav>
                <ul class="main-menu">
                    <li class="main-menu__item"><a class="button button--default" href="#services">Diensten</a></li>
                    <li class="main-menu__item"><a class="button button--default" href="#about">Over</a></li>
                    <li class="main-menu__item"><a class="button button--default" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</div>

<div>
    <div class="container display">
    </div>
</div>

<div class="section section--dark" id="intro">
    <div class="container">
        <div class="col-sm-6 clearfix">
            <h2>HR Advies in de Zorg</h2>
            <p>
                “Mijn visie is dat de beste bedrijfsresultaten worden gerealiseerd in een omgeving waar medewerkers de ruimte krijgen te excelleren.”<br>
“Ik ben een steunpilaar voor management en zoek vertrouwen bij medewerkers door een transparante wijze van communiceren en het zoeken naar creatieve oplossingen.”
            </p>
        </div>
        <div class="col-sm-6">
            <img class="fill" src="images/care-icons.png">
        </div>
    </div>
</div>

<div class="section" id="services">
    <div class="container">
        <h2>Diensten</h2>

        <div class="service clearfix">
            <img src="images/health-balls.png" alt="">
            <h3>HR Advies en Ondersteuning in de Zorg</h3>
            <p class="service-intro">Door mijn vele jaren ervaring in de zorg ben ik snel inzetbaar. Dat kan zijn voor vragenstukken als functiewaardering, functiebeschrijving, werving en selectie recruiting maar ook voor projecten.</p>
            <p>Ik heb expertise op het gebied van loopbaanontwikkeling,  competentie- management, invoering van E-HRM, bijvoorbeeld bij het jaargesprek of E-learning. Ik kan u adviseren op het gebeid van formatiebeheer, een formatieplaatsenplan opstellen en u helpen bij de inrichting van een personeelsinformatiesysteem.</p>
        </div>
        <div class="service clearfix">
            <img src="images/care-guys.png" alt="">
            <h3>Ondersteuning en juridisch advies voor zorgmedewerkers</h3>
            <p class="service-intro">De Zorg heeft te maken met ingrijpende veranderingen. Functies vervallen of veranderen. Sociale plannen worden opgesteld.</p>
            <p>Als lid van de Commissie Sociale Begeleiding Vlietland Ziekenhuis, voorzitter Commissie Sociale Begeleiding Rijndam revalidatiecentrum te Rotterdam en voorzitter IBC van diverse ziekenhuizen in Den Haag heb ik veel expertise opgebouwd om veranderingsprocessen te beoordelen en te adviseren over processen. Voorkomen is beter dan genezen.  Ik ondersteun u graag in de wetenschap dat ik een toegevoegde waarde kan hebben voor mens en organisatie </p>
        </div>
        <div class="service clearfix">
            <img src="images/suitcase.png" alt="">
            <h3>Interim HR opdrachten</h3>
            <p class="service-intro">Is uw manager P&O of uw HR-adviseur voor een langere periode uitgeschakeld? Door mijn brede ervaring ben ik in staat werkzaamheden snel over te nemen. Ik ben beschikbaar voor 3 à 4 dagen in de week.<br>
            Heeft u behoefte uw afdeling P&O, na vertrek van de manager, opnieuw in te richten?</p>
            <p>Ik kan de bestaande werkzaamheden voor u blijven uitvoeren en een scan maken van sterke en zwakke punten. Op basis hiervan kan ik een verbeterplan implementeren en ondertussen met u zoeken naar een nieuwe manager of voorbereidingen treffen indien u P&O wil samenvoegen met een ander organisatieonderdeel.</p>
        </div>
    </div>
</div>

<div class="section section--grey" id="about">
    <div class="container">
        <h2>Over</h2>
        <p>Voor meer informatie over mij, zie:</p>
        <a href="https://www.carloreeser.nl" class="button button--primary">carloreeser.nl</a>
    </div>
</div>

<?php include 'contact-form.php'; ?>

<script>
(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='//www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X');ga('send','pageview');
</script>

<script>
 /*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
(function(w){"use strict";var loadCSS=function(href,before,media){var doc=w.document;var ss=doc.createElement("link");var ref;if(before){ref=before}else{var refs=(doc.body||doc.getElementsByTagName("head")[0]).childNodes;ref=refs[refs.length-1]}var sheets=doc.styleSheets;ss.rel="stylesheet";ss.href=href;ss.media="only x";function ready(cb){if(doc.body){return cb()}setTimeout(function(){ready(cb)})}ready(function(){ref.parentNode.insertBefore(ss,before?ref:ref.nextSibling)});var onloadcssdefined=function(cb){var resolvedHref=ss.href;var i=sheets.length;while(i--){if(sheets[i].href===resolvedHref){return cb()}}setTimeout(function(){onloadcssdefined(cb)})};function loadCB(){if(ss.addEventListener){ss.removeEventListener("load",loadCB)}ss.media=media||"all"}if(ss.addEventListener){ss.addEventListener("load",loadCB)}ss.onloadcssdefined=onloadcssdefined;onloadcssdefined(loadCB);return ss};if(typeof exports!=="undefined"){exports.loadCSS=loadCSS}else{w.loadCSS=loadCSS}})(typeof global!=="undefined"?global:this);(function(w){if(!w.loadCSS){return}var rp=loadCSS.relpreload={};rp.support=function(){try{return w.document.createElement("link").relList.supports("preload")}catch(e){}};rp.poly=function(){var links=w.document.getElementsByTagName("link");for(var i=0;i<links.length;i++){var link=links[i];if(link.rel==="preload"&&link.getAttribute("as")==="style"){w.loadCSS(link.href,link);link.rel=null}}};if(!rp.support()){rp.poly();var run=w.setInterval(rp.poly,300);if(w.addEventListener){w.addEventListener("load",function(){w.clearInterval(run)})}}})(this);
</script>

</body>
</html>
