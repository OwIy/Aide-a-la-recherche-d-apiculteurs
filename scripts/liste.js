/* On crée la fonction qui va construire la seconde liste déroulante */
function changeDept(tab,idr)
{
    var form_d;
    if(idr != "vide")
    {
    /* On compte les départements de cette région */
    var nbd = tab[idr][1].length;
    form_d  = '<select name="departement" id="departement">';
    for(var j = 0;  j < nbd; j++)
    {
        form_d += '  <option value="'+ tab[idr][1][j] +'">'+ tab[idr][2][j] +" ("+ tab[idr][1][j] +')<\/option>';
    }
    form_d += '<\/select>';
    }
    else
    {
        form_d = "";
    }
    document.getElementById("blocDepartements").innerHTML = form_d;
}
