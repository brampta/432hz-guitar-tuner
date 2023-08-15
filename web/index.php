<?php include(dirname(dirname(__FILE__)).'/inc/init.php'); ?>
<?php include(BP.'/inc/templates/head.php'); ?>
<?php include(BP.'/inc/templates/header.php'); ?>

<h1 class="main-title">432Hz guitar tuner</h1>

<div>
    tuning: <input type="number" id="tuning_freq" value="432.0" step="0.1">Hz<br>
    volume: <input type="number" id="vol" class="vol" value="0.24" step=".01"><br>
</div>

<div class="guitarcontainer">
    <div class="guitarhead">
        <img src="assets/images/guitar1b.png" >
    </div><div class="strings">
        <div class="string guitarstring1"><hr><i class="fa-solid fa-play playicon"></i><span class="hertz"></span></div>
        <div class="string guitarstring2"><hr><i class="fa-solid fa-play playicon"></i><span class="hertz"></span></div>
        <div class="string guitarstring3"><hr><i class="fa-solid fa-play playicon"></i><span class="hertz"></span></div>
        <div class="string guitarstring4"><hr><i class="fa-solid fa-play playicon"></i><span class="hertz"></span></div>
        <div class="string guitarstring5"><hr><i class="fa-solid fa-play playicon"></i><span class="hertz"></span></div>
        <div class="string guitarstring6"><hr><i class="fa-solid fa-play playicon"></i><span class="hertz"></span></div>
        <div class="stop">stop <i class="fa-solid fa-stop stopicon"></i></div>
    </div>
</div>

<?php include(BP.'/inc/templates/footer.php'); ?>