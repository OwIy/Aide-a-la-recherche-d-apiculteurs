<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Api-culteurs</title>
    <link rel="icon" href="assets/logo.png" /> <!-- Icone onglet -->
    <link href="https://fonts.googleapis.com/css?family=Raleway|Slabo+27px" rel="stylesheet">
    <link rel="stylesheet" href="css/style_responsive.css" type="text/css" />
    <link rel="stylesheet" href="css/style.css" type="text/css" />
    <link rel="stylesheet" href="css/maps.css" type="text/css" />
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script type="text/javascript" src="scripts/liste.js"></script>
  <script type="text/javascript" src="scripts/phparray.js" charset="iso_8859-1"></script>
  <script type="text/javascript" src="scripts/departements.js"></script>
  
</head>
<body>
     
<!-- Menu -->
  <?php include 'includes/menu.php' ?>
  <?php include 'includes/regionsForm.php'?>
  
<!--Selection de la région-->
<div id="container">
  
  <?php include 'includes/select_region.php'?>

  
  <div id="carte">
      <?php 
      $_GET["region"] = isset($_GET["region"]) ? $_GET["region"] : 0;
      switch ($_GET["region"]) {
        default :include 'maps/france.php';break;
        case 0:include 'maps/france.php';break;
        case 1:include 'maps/auvergne-rhone-alpes.php';break;
        case 2:include 'maps/bourgogne-franche-comte.php';break;
        case 3:include 'maps/bretagne.php';break;
        case 4:include 'maps/centre.php';break;
        case 5:include 'maps/corse.php';break;
        case 6:include 'maps/grandest.php';break;
        case 7:include 'maps/hautsdefrance.php';break;
        case 8:include 'maps/iledefrance.php';break;
        case 9:include 'maps/normandie.php';break;
        case 10:include 'maps/nouvelle-aquitaine.php';break;
        case 11:include 'maps/occitanie.php';break;
        case 12:include 'maps/paysloire.php';break;
        case 13:include 'maps/paca.php';break;
      }
    ?>   
  </div>
  </div>
  
<!-- Footer-->
  <div class="footer">

  </div>    
</body>
</html>