<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Construcția Drumurilor</title>
    <link rel="stylesheet" href="drumuri.css?v=<?php echo time(); ?>">
    <?php include("basicLinks.php") ?>
    <link rel="stylesheet" href="footerheader/footer.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="footerheader/header.css?v=<?php echo time(); ?>">
</head>

<body>
    <?php include("footerheader/header.php") ?>

    <div class="section1">
        <div class="title2"><h1><span>CONSTRUCȚIA</span> ȘI REABILITAREA <span>DRUMURILOR</span></h1></div>
        <div class="section1inner">
            <p>Oferim servicii complete de construcție și reabilitare a drumurilor, realizate cu tehnologii moderne și echipamente performante. Echipa noastră asigură execuție precisă, durabilitate și respectarea tuturor standardelor tehnice. De la pregătirea terenului până la asfaltare și finisaje, fiecare etapă este gestionată cu profesionalism, astfel încât proiectele să fie finalizate rapid, sigur și la cel mai înalt nivel de calitate.</p>
            <img src="images/placeholder.avif">
        </div>
    </div>
    <div class="section2">
        <div class="title">
            <h1>domenii <span>de activitate</span></h1>
        </div>
    </div>
    <div class="section3">
        <div class="sec3right">
            <div class="sec3rbtn active" id="1">
                <img src="images/road-grader.png" data-active="images/road-grader.png"
                    data-inactive="images/road-grader-yellow.png">
                <p>Terasamente</p>
            </div>

            <div class="sec3rbtn" id="2">
                <img src="images/paver-yellow.png" data-active="images/paver.png"
                    data-inactive="images/paver-yellow.png">
                <p>Macadamuri</p>
            </div>

            <div class="sec3rbtn" id="3">
                <img src="images/roadrolleryellow.png" data-active="images/roadroller.png"
                    data-inactive="images/roadrolleryellow.png">
                <p>Asfalturi</p>
            </div>

            <div class="sec3rbtn" id="4">
                <img src="images/excavator-yellow.png" data-active="images/excavator.png"
                    data-inactive="images/excavator-yellow.png">
                <p>Lucrări de amenajare</p>
            </div>

        </div>
        <div class="sec3left">
            <div class="sec3leftcontent">
                <div class="sec3leftupper">
                    <h6>Vindem Asfalt</h6>
                    <p>Noi caroce punem asfalt ne futem cu mintea belim pula la arici
                        Și bem cofe în loc să lucrăm pizdim solearcă iaebu caroce</p>
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
    <?php include("footerheader/footer.php") ?>
    <script src="drumuri.js?v=<?php echo time(); ?>"></script>
    <?php include("basicScripts.php") ?>
</body>

</html>