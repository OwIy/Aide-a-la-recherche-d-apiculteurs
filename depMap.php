<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Api-culteurs</title>
    <link rel="icon" href="assets/logo.png" /> <!-- Icone onglet -->
    <link href="https://fonts.googleapis.com/css?family=Raleway|Slabo+27px" rel="stylesheet">
    <link rel="stylesheet" href="css/style_responsive.css" type="text/css" />
    <link rel="stylesheet" href="css/maps.css" type="text/css" />
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/liste.js"></script>
    <script type="text/javascript" src="scripts/phparray.js" charset="iso_8859-1"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtrD9nOO6r3R71oG8UZqimBfsyP9VQci0&langage=fr&callback=initMap" async defer></script>
  <style>
    #map {
      height: 500px;
      width : 100%;
      margin :0 auto;
      padding-top: 50px;
   }
    #departement {
      text-align:center;
    }
  </style>

</head>
<body>
  <script src="scripts/getRegion.js"></script>
<!-- Menu -->
  <?php include 'includes/menu.php' ?>
  <div id="map"></div>
  <div id='departement'>
    <?php echo '<script src="scripts/google.js"></script>' ?>
  </div>
  <div id="recherche_adresse">
    <div>
      <h3>Entrez l'adresse de l'essaim :</h3>
    </div>
    <div>
      <input type="text" name="adr" id="adr" onKeyPress="if (event.keyCode == 13) initEssaim();" onclick="document.getElementById('adr').value = '';"/>
      <input type="button" name="adr" value="Rechercher" onclick="initEssaim()" />
    </div>
  </div>
  
  
<!-- Footer-->
  <div class="footer">

  </div>    
</body>
</html>