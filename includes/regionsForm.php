<div id="formulaire">
        <form action="depMap.php" method="get">
          <select id="region" onchange="changeDept(tab,this.value);">
            <option value="vide" selected="selected">Choisissez votre région...</option>
            <option value="9">Auvergne Rhône-Alpes</option>
            <option value="8">Bourgogne-Franche-Comté</option>
            <option value="3">Bretagne</option>
            <option value="5">Centre Val-de-Loire</option>
            <option value="13">Corse</option>
            <option value="7">Grand-Est</option>
            <option value="6">Hauts-de-France</option>
            <option value="1">Île-de-France</option>
            <option value="2">Normandie</option>
            <option value="10">Nouvelle-Aquitaine</option>
            <option value="11">Occitanie</option>
            <option value="4">Pays de la Loire</option>
            <option value="12">Provence-Alpes-Côte-d'Azur</option>
          </select>
          <span id="blocDepartements"></span><br>
          <input id="truc" type="submit">
        </form>
      </div>