<script>
function setResponsive() {
    var x = document.getElementById("nav");
    if (x.className == "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}
</script>

<div class="menu">
    <img src="assets/logo.png"></img>
    <h1 id="titre_menu">Api-culteurs</h1>
    <a href="javascript:void(0);" class="icon" onclick="setResponsive()">&#9776;</a>
      <div class="navigation" id="nav">
        <a href="index.php">Accueil</a>
        <a href="#">Les apiculteurs</a>
        <a href="#">Le projet</a>
       </div>
</div>
