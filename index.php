<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Group One</title>
    <link rel="stylesheet" href="homepage.css?v=<?php echo time(); ?>">
    <?php include("basicLinks.php") ?>
    <link rel="stylesheet" href="footerheader/footer.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="footerheader/header.css?v=<?php echo time(); ?>">
</head>

<body>
    <?php include("footerheader/header.php") ?>

    <div class="section1">
        <img src="images/placeholdertitle.png" alt="" class="coverImg">
        <div class="sec1txt1">
            <p>STRICAM DRUMURI </p>
        </div>
        <div class="sec1txt2">
            <div class="s1box">
                <h1>20+ Ani</h1>
                <p>De experiență în cristi</p>
            </div>
            <hr>
            <div class="s1box">
                <h1>20+ Ani</h1>
                <p>De experiență în domeniu</p>
            </div>
            <hr>
            <div class="s1box">
                <h1>20+ Ani</h1>
                <p>De experiență în domeniu</p>
            </div>
            <hr>
            <div class="s1box">
                <h1>20+ Ani</h1>
                <p>De experiență în domeniu</p>
            </div>
        </div>
    </div>
    <div class="section2" id="desprenoi">
        <div class="title">
            <h1>domenii <span>de activitate</span></h1>
        </div>
        <p class="subtitle">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
    </div>
    <div class="section3">
        <div class="sec3right">
            <div class="sec3rbtn active" id="1">
                <img src="images/roadroller.png" data-active="images/roadroller.png" data-inactive="images/roadrolleryellow.png">

                <p>Construcția și Reabilitarea Drumurilor</p>
            </div>

            <div class="sec3rbtn" id="2">
                <img src="images/dump-truck-yellow.png" data-active="images/dump-truck.png"
                    data-inactive="images/dump-truck-yellow.png">
                <p>Servicii de Transport, Închiriere Utilaje</p>
            </div>

            <div class="sec3rbtn" id="3">
                <img src="images/factory-yellow.png" data-active="images/factory.png"
                    data-inactive="images/factory-yellow.png">
                <p>Producere</p>
            </div>

            <div class="sec3rbtn" id="4">
                <img src="images/excavator-yellow.png" data-active="images/excavator.png"
                    data-inactive="images/excavator-yellow.png">
                <p>Utilaje spre Vânzare</p>
            </div>

        </div>
        <div class="sec3left">
            <div class="sec3leftcontent">
                <div class="sec3leftupper">
                    <h6>Vindem Asfalt</h6>
                    <p>Asigurăm servicii complete pentru construcția și modernizarea drumurilor, de la pregătirea infrastructurii până la aplicarea straturilor finale de asfalt. Utilizăm tehnologii avansate, materiale certificate și echipe cu experiență, garantând lucrări durabile, sigure și conforme cu toate standardele tehnice.</p>
                    <a href="drumuri.php"><button>Detalii</button></a>
                </div>
                <div class="sec3leftlower">
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                    <div class="box">
                        <img src="images/square.png">

                        <div class="boxinner">
                            <p>HELLO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sec3leftimg">
                <img src="images/square.png">
            </div>
        </div>
    </div>
    <div class="section4">
        <div class="sec4left">
            <div class="sec4title">
                <h1>Partenerii <span>Noștri</span></h1>
            </div>
            <p class="sec4subtitle">Afla partenerii nostri ce ofera suportul pentru a presta cele mai bune servicii in
                domeniul constructiei drumurilor</p>
            <div class="sec4leftcontent">
                <div class="box">
                    <img src="images/condaline.png">
                    <div class="boxinner">
                        <h1>CONDALINE SRL</h1>
                        <p></p>
                    </div>
                </div>
                <div class="box">
                    <img src="images/MICAS-logo.png">
                    <div class="boxinner">
                        <h1>MICAS LOGISTICS SRL </h1>
                        <p></p>
                    </div>
                </div>
                <div class="box">
                    <img src="images/CarieraCobusca.jpg">
                    <div class="boxinner">
                        <h1>CARIERA COBUSCA SA</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="sec4right">
            <div class="sec4title">
                <h1>Certificările <span>noastre</span></h1>
            </div>
            <p class="sec4subtitle">Afla partenerii nostri ce ofera suportul pentru a presta cele mai bune servicii in
                domeniul constructiei drumurilor</p>
            <div class="sec4rightcontent">
                <div class="box">
                    <a href="documents\ISO 9001 41-QMS-A-25.pdf" target="_blank"><img src="images/download-pdf.png"></a>
                    <div class="boxinner">
                        <h1>ISO 9001</h1>
                        <p>Certifică faptul că firma funcționează după standarde internaționale de calitate.</p>
                    </div>
                </div>
                <div class="box" id="proiecte">
                    <a href="documents\ISO 45001 41-OHSMS-25.pdf" target="_blank"><img src="images/download-pdf.png"></a>
                    <div class="boxinner">
                        <h1>ISO 45001</h1>
                        <p>Atestă că firma asigură condiții sigure de muncă și gestionează riscurile pentru angajați.</p>
                    </div>
                </div>
                <div class="box" id="desprenoi2">
                    <a href="documents\ISO 14001 41-EMS-25.pdf" target="_blank"><img src="images/download-pdf.png"></a>
                    <div class="boxinner">
                        <h1>ISO 14001</h1>
                        <p>Demonstrează că firma gestionează responsabil impactul asupra mediului, conform standardelor internaționale.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section6">
        <div class="title"><h1>DESPRE NOI</h1></div>
        <div class="sec6inner">
            <div class="sec6left">
                <img src="images/placeholder.avif">
            </div>
            <div class="sec6right">
                <h1 class="contentTitle">Compania <span>Group One</span></h1>
                <p class="content">
                    Fondată în 1983, Group One activează de peste trei decenii în domeniul infrastructurii rutiere. După schimbarea profilului în 2010 și reorganizarea din 2016, compania și-a consolidat poziția ca specialist în construcția, reparația și întreținerea drumurilor. Pe lângă activitatea de bază, Group One oferă servicii conexe precum închirierea utilajelor de construcție, transportul agregatelor din carieră și balastieră, vânzarea utilajelor și producerea și comercializarea betoanelor.
                </p>
            </div>
        </div>

    </div>
    <div class="section5">
        <div class="title">
            <h1>Proiectele <span>noastre</span></h1>
        </div>
        <div class="sec5content">
            <img src="images/arrowPlaceholder.png" id="sliderLeftArrow">
            <div class="sec5sliderbox">
                <div class="sec5slider">
                    <div class="box">
                        <img src="images/square.png">
                        <div class="titleboxslider">
                            <h1>Lorem Ipsum1</h1>
                        </div>
                        <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                    </div>
                    <div class="box">
                        <img src="images/square.png">
                        <div class="titleboxslider">
                            <h1>Lorem Ipsum2</h1>
                        </div>
                        <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                    </div>
                    <div class="box">
                        <img src="images/square.png">
                        <div class="titleboxslider">
                            <h1>Lorem Ipsum3</h1>
                        </div>
                        <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                    </div>
                    <div class="box">
                        <img src="images/square.png">
                        <div class="titleboxslider">
                            <h1>Lorem Ipsum4</h1>
                        </div>
                        <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                    </div>
                    <div class="box">
                        <img src="images/square.png">
                        <div class="titleboxslider">
                            <h1>Lorem Ipsum5</h1>
                        </div>
                        <p> Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
                    </div>
                </div>
            </div>
            <img src="images/arrowPlaceholder.png" id="sliderRightArrow">
        </div>
    </div>
    <?php include("footerheader/footer.php") ?>
    <script src="homepage.js?v=<?php echo time(); ?>"></script>
    <?php include("basicScripts.php") ?>
</body>

</html>