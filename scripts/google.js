var map;
function initMap() {
	var ZoomMoy = 10;
  var url = window.location.search;
  var departement = url.substring(url.lastIndexOf("=")+1);
  switch (departement) {
    case '01': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.2475706, lng : 5.130768100000068}, zoom: ZoomMoy}); break;
    case '02': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.47691989999999, lng : 3.441736799999944}, zoom: ZoomMoy}); break;
    case '03': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.31155519999999, lng : 3.416765499999997}, zoom: ZoomMoy}); break;
    case '04': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.07787159999999, lng : 6.237594700000045}, zoom: ZoomMoy}); break;
    case '05': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.60087229999999, lng : 6.322607199999993}, zoom: ZoomMoy}); break;
    case '06': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.9466791, lng : 7.179026000000022}, zoom: ZoomMoy}); break;
    case '07': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.759629, lng : 4.56244259999994}, zoom: ZoomMoy}); break;
    case '08': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.7624642, lng : 4.628505300000029}, zoom: ZoomMoy}); break;
    case '09': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 42.9326292, lng : 1.44346900000005}, zoom: ZoomMoy}); break;
    case '10': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.1563418, lng : 4.37324620000004}, zoom: ZoomMoy}); break;
    case '11': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.0724667, lng : 2.381362099999933}, zoom: ZoomMoy}); break;
    case '12': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.2179747, lng : 2.6189272999999957}, zoom: ZoomMoy}); break;
    case '13': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.59116789999999, lng : 5.310250499999938}, zoom: ZoomMoy}); break;
    case '14': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.1213315, lng : -0.4330578000000287}, zoom: ZoomMoy}); break;
    case '15': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.1191997, lng : 2.6326062000000547}, zoom: ZoomMoy}); break;
    case '16': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.7519958, lng : 0.15347610000003442}, zoom: ZoomMoy}); break;
    case '17': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.74948999999999, lng : -0.77331879999997}, zoom: ZoomMoy}); break;
    case '18': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.954005, lng : 2.4671908000000258}, zoom: ZoomMoy}); break;
    case '19': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.4320081, lng : 2.0195909000000256}, zoom: ZoomMoy}); break;
    case '21': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.5126795, lng : 4.635411999999974}, zoom: ZoomMoy}); break;
    case '22': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.5108101, lng : -3.326367600000026}, zoom: ZoomMoy}); break;
    case '23': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.03776329999999, lng : 2.0627832000000126}, zoom: ZoomMoy}); break;
    case '24': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.14694859999999, lng : 0.7572205000000167}, zoom: ZoomMoy}); break;
    case '25': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.1969824, lng : 6.312600400000065}, zoom: ZoomMoy}); break;
    case '26': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.73118960000001, lng : 5.226667499999962}, zoom: ZoomMoy}); break;
		case '27': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.11817629999999, lng : 0.958211399999982}, zoom: ZoomMoy}); break;
    case '28': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.55252420000001, lng : 1.1989813999999797}, zoom: ZoomMoy}); break;
    case '29': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.2520249, lng : -3.930052499999988}, zoom: ZoomMoy}); break;
    case '30': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.9446996, lng : 4.151376400000004}, zoom: ZoomMoy}); break;
    case '31': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.4010462, lng : 1.1353020000000242}, zoom: ZoomMoy}); break;
    case '32': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.6366479, lng : 0.45023679999997057}, zoom: ZoomMoy}); break;
    case '33': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.84966499999999, lng : -0.45023679999997057}, zoom: ZoomMoy}); break;
    case '34': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.5912356, lng : 3.258362600000055}, zoom: ZoomMoy}); break;
    case '35': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.2292016, lng : -1.5300694999999678}, zoom: ZoomMoy}); break;
    case '36': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.6613966, lng : 1.4482662000000346}, zoom: ZoomMoy}); break;
    case '37': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.28949249999999, lng : 0.8160970000000134}, zoom: ZoomMoy}); break;
    case '38': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.99577449999999, lng : 5.929347600000028}, zoom: ZoomMoy}); break;
    case '39': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.76247499999999, lng : 5.672915900000021}, zoom: ZoomMoy}); break;
    case '40': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.9412045, lng : -0.7532808999999361}, zoom: ZoomMoy}); break;
    case '41': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.6761905, lng : 1.4159071999999924}, zoom: ZoomMoy}); break;
    case '42': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.9846475, lng : 4.052545000000009}, zoom: ZoomMoy}); break;
    case '43': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.08212260000001, lng : 3.926636599999938}, zoom: ZoomMoy}); break;
    case '44': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.2780468, lng : -1.8157647000000452}, zoom: ZoomMoy}); break;
    case '45': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.900771, lng : 2.2018172000000504}, zoom: ZoomMoy}); break;
    case '46': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.53793579999999, lng : 1.6760690999999497}, zoom: ZoomMoy}); break;
    case '47': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.2470173, lng : 0.45023679999997057}, zoom: ZoomMoy}); break;
    case '48': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.494203, lng : 3.5812691999999515}, zoom: ZoomMoy}); break;
    case '49': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.2913545, lng : -0.48778519999996206}, zoom: ZoomMoy}); break;
    case '50': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.114712, lng : -1.3115949000000455}, zoom: ZoomMoy}); break;
    case '51': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.128754, lng : 4.147544499999981}, zoom: ZoomMoy}); break;
    case '52': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.1260968, lng : 5.107132200000024}, zoom: ZoomMoy}); break;
    case '53': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.3061239, lng : -0.6209350000000313}, zoom: ZoomMoy}); break;
    case '54': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.7997007, lng : 6.094701399999963}, zoom: ZoomMoy}); break;
    case '55': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.0824319, lng : 5.282399700000042}, zoom: ZoomMoy}); break;
    case '56': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.8852929, lng : -2.900186500000018}, zoom: ZoomMoy}); break;
    case '57': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.0983839, lng : 6.55276409999999}, zoom: ZoomMoy}); break;
    case '58': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.2381708, lng : 3.529452200000037}, zoom: ZoomMoy}); break;
    case '59': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 50.3851246, lng : 3.264243599999986}, zoom: ZoomMoy}); break;
    case '60': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.42145679999999, lng : 2.414639599999987}, zoom: ZoomMoy}); break;
    case '61': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.6388567, lng : 0.08482010000000173}, zoom: ZoomMoy}); break;
    case '62': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 50.5732769, lng : 2.324467899999945}, zoom: ZoomMoy}); break;
    case '63': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.71241419999999, lng : 3.0155824999999368}, zoom: ZoomMoy}); break;
    case '64': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.32699420000001, lng : -0.7532808999999361}, zoom: ZoomMoy}); break;
    case '65': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.01939239999999, lng : 0.14949879999994664}, zoom: ZoomMoy}); break;
    case '66': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 42.6012912, lng : 2.5396029999999428}, zoom: ZoomMoy}); break;
    case '67': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.63431720000001, lng : 7.525293799999986}, zoom: ZoomMoy}); break;
    case '68': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.9315041, lng : 7.244109900000012}, zoom: ZoomMoy}); break;
    case '69': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.7351456, lng : 4.610804300000041}, zoom: ZoomMoy}); break;
    case '70': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.7569806, lng : 6.155628200000024}, zoom: ZoomMoy}); break;
    case '71': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.58275119999999, lng : 4.486671000000001}, zoom: ZoomMoy}); break;
    case '72': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.58275119999999, lng : 4.486671000000001}, zoom: ZoomMoy}); break;
    case '73': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.4932045, lng : 6.472399999999993}, zoom: ZoomMoy}); break;
    case '74': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.1756788, lng : 6.538962099999935}, zoom: ZoomMoy}); break;
    case '75': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.85661400000001, lng : 2.3522219000000177}, zoom: ZoomMoy}); break;
    case '76': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.60541869999999, lng : 0.9748438999999962}, zoom: ZoomMoy}); break;
    case '77': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.841082, lng : 2.999366000000009}, zoom: ZoomMoy}); break;
    case '78': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.7850939, lng : 1.8256572000000233}, zoom: ZoomMoy}); break;
    case '79': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.5926541, lng : -0.3962844000000132}, zoom: ZoomMoy}); break;
    case '80': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.914518, lng : 2.2707095000000663}, zoom: ZoomMoy}); break;
    case '81': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.92644010000001, lng : 1.9881527000000006}, zoom: ZoomMoy}); break;
    case '82': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.01266789999999, lng : 1.2891035999999758}, zoom: ZoomMoy}); break;
    case '83': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 43.46764599999999, lng : 6.237594700000045}, zoom: ZoomMoy}); break;
    case '84': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 44.0565054, lng : 5.14320680000003}, zoom: ZoomMoy}); break;
    case '85': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 46.6613966, lng : -1.4482662000000346}, zoom: ZoomMoy}); break;
    case '86': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.525587, lng : 4.874338999999964}, zoom: ZoomMoy}); break;
    case '87': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 45.7435173, lng : 1.4025484000000006}, zoom: ZoomMoy}); break;
    case '88': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.1446427, lng : 6.335593499999959}, zoom: ZoomMoy}); break;
    case '89': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.8652728, lng : 3.6079823000000033}, zoom: ZoomMoy}); break;
    case '90': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 47.59465729999999, lng : 6.920771599999966}, zoom: ZoomMoy}); break;
    case '91': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.4585698, lng : 2.156941599999982}, zoom: ZoomMoy}); break;
    case '92': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.828508, lng : 2.2188068000000385}, zoom: ZoomMoy}); break;
    case '93': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.9137455, lng : 2.484572899999989}, zoom: ZoomMoy}); break;
    case '94': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 48.7931426, lng : 2.4740337000000636}, zoom: ZoomMoy}); break;
    case '95': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 49.0615901, lng : 2.1581350999999813}, zoom: ZoomMoy}); break;
    case '2A': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 41.8102633, lng : 8.924534300000005}, zoom: ZoomMoy}); break;
    case '2B': map = new google.maps.Map(document.getElementById('map'), {center: {lat: 42.4097877, lng : 9.278558299999986}, zoom: ZoomMoy}); break;
  }

	$(document).ready(function(){
	$.ajax({
		url : 'http://infoweb/~hadjrabia-n/test/servicePublic.php',
		data :'choix='+departement,
		type:"GET",
		dataType:"json",
		success:function(jsonFile) {
			$(jsonFile).each(function(ind,val) {
				if (val.CP.substring(0,2) == departement) {
					var adresse = (val.Adresse + " " + val.CP + " " + val.Ville).toUpperCase();
					var contentString =
            '<div style="width=500px; height=500px;">'+
            '<h2 style="width=100%; text-align:center; color:#EF6C00">' + val.Nom.toUpperCase() + '</h2>'+
						'<p>' + val.Adresse + '<br />' +
						val.CP + " " + val.Ville.toUpperCase() + '</p>' +
						'<p><em>Tel : ' + val.Tel1 + '</em></p></div>';
					searchAddress(map, adresse, contentString);
				}
			});
		},
		error:function(a,b) {
		  alert("Erreur lors de l'accès");
			//alert("Erreur lors de l'accès");
		}
		});
	});
}

function searchAddress(map, adresse, contentString) {
  var geocoder = new google.maps.Geocoder();
  var geoOptions = {
      'address': adresse
  };
  geocoder.geocode(geoOptions, function(results, status) {
  	if (status == google.maps.GeocoderStatus.OK) {
    	var coords = results[0].geometry.location;
      	addMarker(map, geoOptions.address, coords, contentString);
		}
  });
}

var infowindow = null;
function addMarker(map, body, location, contentString) {
	var image = '../assets/api-pointer.png';
  var marker = new google.maps.Marker({
		map : map,
    position : location,
		icon : image
	});
	google.maps.event.addListener(marker,'click', function() {
  	if (!infowindow) {
    	infowindow = new google.maps.InfoWindow();
      infowindow.setContent(contentString);
      infowindow.open(map,marker);
    } else {
    	infowindow.setContent(contentString);
			infowindow.close();
			infowindow.open(map,marker);
		}
  });
}

var adrEssaim = null;
function initEssaim() {
	adrEssaim = document.getElementById("adr").value;
	if (adrEssaim != "") {
		searchAddressEssaim(map, adrEssaim);
		document.getElementById("adr").blur();
	}
}

function searchAddressEssaim(map, adresse) {
  var geocoder = new google.maps.Geocoder();
  var geoOptions = {
      'address': adresse
  };
  geocoder.geocode(geoOptions, function(results, status) {
  	if (status == google.maps.GeocoderStatus.OK) {
    	var coords = results[0].geometry.location;
      	addMarkerEssaim(map, geoOptions.address, coords);
		}
  });
}

var markerEssaim = null;
function addMarkerEssaim(map, body, location) {
  var imageE = "../assets/essaim-pointer.png";
	if (!markerEssaim) {
    	markerEssaim = new google.maps.Marker({
        map : map,
        position : location,
        animation : google.maps.Animation.DROP,
        draggable : true,
			icon : imageE
    	});
    } else {
			markerEssaim.setMap(null);
			markerEssaim = new google.maps.Marker({
        map : map,
        position : location,
        animation : google.maps.Animation.DROP,
        draggable : true,
			icon : imageE
    	});
	}
}