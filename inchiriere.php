<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <?php include("basicLinks.php") ?>
    <link rel="stylesheet" href="footerheader/footer.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="footerheader/header.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="inchiriere.css?v=<?php echo time(); ?>">
</head>

<body>
    <?php include("footerheader/header.php") ?>
    <div class="center">
        <div class="relative TipaBtn">
            <h1>Inchiriere<span></span></h1>
            <button id="filterBtn">
                <img src="images/arrowPlaceholder.png" id="filterPlaceHolder"></img>
            </button>
        </div>

    </div>
    <section id="CautareMob">

    </section>
    <section class="center2">
        <div id="CautareComp" class="Cautare">
            <h3>Filtreazami <span>Tractorul</span></h3>


            <form action="">
                <div class="arrowIndent">
                    <img src="images/down-arrow.png" alt="" class="downArrow">
                    <h3><span>Tip de Tractorul</span></h3>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" name="checkb1" id="checkb11">
                        <label for="checkb11">Masina</label>
                    </li>
                    <li>
                        <input type="checkbox" name="checkb1" id="checkb12">

                        <label for="checkb12">Tractor</label>
                    </li>
                </ul>
                <div class="arrowIndent">
                    <img src="images/down-arrow.png" alt="" class="downArrow">
                    <h3><span>Tip de Tractorul</span></h3>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" name="checkb2" id="checkb21">

                        <label for="checkb21">La mana doua</label>

                    </li>
                    <li>
                        <input type="checkbox" name="checkb2" id="checkb22">

                        <label for="checkb22">La mana 6</label>

                    </li>
                    <li>
                        <input type="checkbox" name="checkb2" id="checkb23">

                        <label for="checkb23">La mana 7</label>

                    </li>
                    <li>
                        <input type="checkbox" name="checkb2" id="checkb24">

                        <label for="checkb24">Nou</label>
                    </li>
                </ul>

                <div class="arrowIndent">
                    <img src="images/down-arrow.png" alt="" class="downArrow">
                    <h3><span>Tip de Tractorul</span></h3>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" name="checkb3" id="checkb31">

                        <label for="checkb31">La mana doua</label>

                    </li>
                    <li>
                        <input type="checkbox" name="checkb3" id="checkb32">

                        <label for="checkb32">Nou</label>
                    </li>
                </ul>

                <div id="centerSubmit">

                    <input type="submit" value="Cautare">
                </div>
            </form>

        </div>
        <div class="CardBox">
            <div class="Card">
                <div class="CardImg">

                </div>
                <div class="CardContent">
                    <div class="CardHeader">
                        <h3><span>Tractor</span><br>
                            TREX Huirex
                        </h3>
                    </div>
                    <div class="CardDesc">
                        <p>iaca asa tracotru merge</p>
                        <p>iaca asa tractoru nu merge</p>
                    </div>
                    <button class="CardBuy">
                        <h3>Buy Huiai</h3>
                    </button>
                </div>
            </div>

            <div class="Card">
                <div class="CardImg">

                </div>
                <div class="CardContent">
                    <div class="CardHeader">
                        <h3><span>Tractor</span><br>
                            TREX Huirex
                        </h3>
                    </div>
                    <div class="CardDesc">
                        <p>iaca asa tracotru merge</p>
                        <p>iaca asa tractoru nu merge</p>
                    </div>
                    <button class="CardBuy">
                        <h3>Buy Huiai</h3>
                    </button>
                </div>
            </div>

            <div class="Card">
                <div class="CardImg">

                </div>
                <div class="CardContent">
                    <div class="CardHeader">
                        <h3><span>Tractor</span><br>
                            TREX Huirex
                        </h3>
                    </div>
                    <div class="CardDesc">
                        <p>iaca asa tracotru merge</p>
                        <p>iaca asa tractoru nu merge</p>
                    </div>
                    <button class="CardBuy">
                        <h3>Buy Huiai</h3>
                    </button>
                </div>
            </div>

            <div class="Card">
                <div class="CardImg">

                </div>
                <div class="CardContent">
                    <div class="CardHeader">
                        <h3><span>Tractor</span><br>
                            TREX Huirex </h3>
                    </div>
                    <div class="CardDesc">
                        <p>iaca asa tracotru merge</p>
                        <p>iaca asa tractoru nu merge</p>
                    </div>
                    <button class="CardBuy">
                        <h3>Buy Huiai</h3>
                    </button>
                </div>
            </div>

            <div class="Card">
                <div class="CardImg">

                </div>
                <div class="CardContent">
                    <div class="CardHeader">
                        <h3><span>Tractor</span><br>
                            TREX Huirex
                        </h3>
                    </div>
                    <div class="CardDesc">
                        <p>iaca asa tracotru merge</p>
                        <p>iaca asa tractoru nu merge</p>
                    </div>
                    <button class="CardBuy">
                        <h3>Buy Huiai</h3>
                    </button>
                </div>
            </div>

        </div>
    </section>



    <?php include("footerheader/footer.php") ?>
    <script src="homepage.js?v=<?php echo time(); ?>"></script>
    <script src="footerheader/footer.js?v=<?php echo time(); ?>"></script>
    <script src="footerheader/header.js?v=<?php echo time(); ?>"></script>

    <script src="inchiriere.js?v=<?php echo time(); ?>"></script>
</body>

</html>