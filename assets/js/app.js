AOS.init();
console.log("pasd");
const id = "cf6369e203f546f896c70145251308";


let searchCity=document.getElementById("txtSearch");

searchCity.addEventListener("keypress",e=>{
    if(e.key=='Enter'){
        console.log(searchCity.value);
       let city =  searchCity.value;
       callApi(city);
    }
}) 



async function callApi(city) {
    fetch("http://api.weatherapi.com/v1/current.json?key="+id+"&q="+city+"&aqi=no")
        .then(responce => responce.json())
        .then(data => {
            setData(data);
        })  
}


function setData(data){
    document.getElementById("city-Name").innerText = data.location.name;
    document.getElementById("status-img").src = data.current.condition.icon;
    document.getElementById("contry").innerText = data.location.region+", "+data.location.country
    document.getElementById("country-img").src = searchContry(data.location.country);
    document.getElementById("celcious").innerText = data.current.temp_c + "°C";
    document.getElementById("date").innerText = data.current.last_updated;
    document.getElementById("weatherDay").innerText = data.current.condition.text;
    document.getElementById("windSpeed").innerText = data.current.wind_mph+" mph";
    document.getElementById("humidity").innerText = data.current.humidity+"%";
    document.getElementById("cloud").innerText = data.current.cloud+"%";
    document.getElementById("uv").innerText = data.current.uv;
    document.getElementById("pressure").innerText = data.current.pressure_mb+"mb";
    document.getElementById("vis").innerText = data.current.vis_km+"Km";





}

function searchContry(countryName){
    for (let i = 0; i < countryImg.length; i++) {
       if(countryImg[i].country == countryName){
        return countryImg[i].flag;
       }
    }
}


let countryImg = [
  {
    "code": "AF",
    "country": "Afghanistan",
    "flag": "https://flagcdn.com/af.svg"
  },
  {
    "code": "AL",
    "country": "Albania",
    "flag": "https://flagcdn.com/al.svg"
  },
  {
    "code": "DZ",
    "country": "Algeria",
    "flag": "https://flagcdn.com/dz.svg"
  },
  {
    "code": "AD",
    "country": "Andorra",
    "flag": "https://flagcdn.com/ad.svg"
  },
  {
    "code": "AO",
    "country": "Angola",
    "flag": "https://flagcdn.com/ao.svg"
  },
  {
    "code": "AG",
    "country": "Antigua and Barbuda",
    "flag": "https://flagcdn.com/ag.svg"
  },
  {
    "code": "AR",
    "country": "Argentina",
    "flag": "https://flagcdn.com/ar.svg"
  },
  {
    "code": "AM",
    "country": "Armenia",
    "flag": "https://flagcdn.com/am.svg"
  },
  {
    "code": "AU",
    "country": "Australia",
    "flag": "https://flagcdn.com/au.svg"
  },
  {
    "code": "AT",
    "country": "Austria",
    "flag": "https://flagcdn.com/at.svg"
  },
  {
    "code": "AZ",
    "country": "Azerbaijan",
    "flag": "https://flagcdn.com/az.svg"
  },
  {
    "code": "BS",
    "country": "Bahamas",
    "flag": "https://flagcdn.com/bs.svg"
  },
  {
    "code": "BH",
    "country": "Bahrain",
    "flag": "https://flagcdn.com/bh.svg"
  },
  {
    "code": "BD",
    "country": "Bangladesh",
    "flag": "https://flagcdn.com/bd.svg"
  },
  {
    "code": "BB",
    "country": "Barbados",
    "flag": "https://flagcdn.com/bb.svg"
  },
  {
    "code": "BY",
    "country": "Belarus",
    "flag": "https://flagcdn.com/by.svg"
  },
  {
    "code": "BE",
    "country": "Belgium",
    "flag": "https://flagcdn.com/be.svg"
  },
  {
    "code": "BZ",
    "country": "Belize",
    "flag": "https://flagcdn.com/bz.svg"
  },
  {
    "code": "BJ",
    "country": "Benin",
    "flag": "https://flagcdn.com/bj.svg"
  },
  {
    "code": "BT",
    "country": "Bhutan",
    "flag": "https://flagcdn.com/bt.svg"
  },
  {
    "code": "BO",
    "country": "Bolivia",
    "flag": "https://flagcdn.com/bo.svg"
  },
  {
    "code": "BA",
    "country": "Bosnia and Herzegovina",
    "flag": "https://flagcdn.com/ba.svg"
  },
  {
    "code": "BW",
    "country": "Botswana",
    "flag": "https://flagcdn.com/bw.svg"
  },
  {
    "code": "BR",
    "country": "Brazil",
    "flag": "https://flagcdn.com/br.svg"
  },
  {
    "code": "BN",
    "country": "Brunei",
    "flag": "https://flagcdn.com/bn.svg"
  },
  {
    "code": "BG",
    "country": "Bulgaria",
    "flag": "https://flagcdn.com/bg.svg"
  },
  {
    "code": "BF",
    "country": "Burkina Faso",
    "flag": "https://flagcdn.com/bf.svg"
  },
  {
    "code": "BI",
    "country": "Burundi",
    "flag": "https://flagcdn.com/bi.svg"
  },
  {
    "code": "CV",
    "country": "Cabo Verde",
    "flag": "https://flagcdn.com/cv.svg"
  },
  {
    "code": "KH",
    "country": "Cambodia",
    "flag": "https://flagcdn.com/kh.svg"
  },
  {
    "code": "CM",
    "country": "Cameroon",
    "flag": "https://flagcdn.com/cm.svg"
  },
  {
    "code": "CA",
    "country": "Canada",
    "flag": "https://flagcdn.com/ca.svg"
  },
  {
    "code": "CF",
    "country": "Central African Republic",
    "flag": "https://flagcdn.com/cf.svg"
  },
  {
    "code": "TD",
    "country": "Chad",
    "flag": "https://flagcdn.com/td.svg"
  },
  {
    "code": "CL",
    "country": "Chile",
    "flag": "https://flagcdn.com/cl.svg"
  },
  {
    "code": "CN",
    "country": "China",
    "flag": "https://flagcdn.com/cn.svg"
  },
  {
    "code": "CO",
    "country": "Colombia",
    "flag": "https://flagcdn.com/co.svg"
  },
  {
    "code": "KM",
    "country": "Comoros",
    "flag": "https://flagcdn.com/km.svg"
  },
  {
    "code": "CG",
    "country": "Congo",
    "flag": "https://flagcdn.com/cg.svg"
  },
  {
    "code": "CD",
    "country": "Democratic Republic of the Congo",
    "flag": "https://flagcdn.com/cd.svg"
  },
  {
    "code": "CR",
    "country": "Costa Rica",
    "flag": "https://flagcdn.com/cr.svg"
  },
  {
    "code": "CI",
    "country": "Côte d'Ivoire",
    "flag": "https://flagcdn.com/ci.svg"
  },
  {
    "code": "HR",
    "country": "Croatia",
    "flag": "https://flagcdn.com/hr.svg"
  },
  {
    "code": "CU",
    "country": "Cuba",
    "flag": "https://flagcdn.com/cu.svg"
  },
  {
    "code": "CY",
    "country": "Cyprus",
    "flag": "https://flagcdn.com/cy.svg"
  },
  {
    "code": "CZ",
    "country": "Czechia",
    "flag": "https://flagcdn.com/cz.svg"
  },
  {
    "code": "DK",
    "country": "Denmark",
    "flag": "https://flagcdn.com/dk.svg"
  },
  {
    "code": "DJ",
    "country": "Djibouti",
    "flag": "https://flagcdn.com/dj.svg"
  },
  {
    "code": "DM",
    "country": "Dominica",
    "flag": "https://flagcdn.com/dm.svg"
  },
  {
    "code": "DO",
    "country": "Dominican Republic",
    "flag": "https://flagcdn.com/do.svg"
  },
  {
    "code": "EC",
    "country": "Ecuador",
    "flag": "https://flagcdn.com/ec.svg"
  },
  {
    "code": "EG",
    "country": "Egypt",
    "flag": "https://flagcdn.com/eg.svg"
  },
  {
    "code": "SV",
    "country": "El Salvador",
    "flag": "https://flagcdn.com/sv.svg"
  },
  {
    "code": "GQ",
    "country": "Equatorial Guinea",
    "flag": "https://flagcdn.com/gq.svg"
  },
  {
    "code": "ER",
    "country": "Eritrea",
    "flag": "https://flagcdn.com/er.svg"
  },
  {
    "code": "EE",
    "country": "Estonia",
    "flag": "https://flagcdn.com/ee.svg"
  },
  {
    "code": "SZ",
    "country": "Eswatini",
    "flag": "https://flagcdn.com/sz.svg"
  },
  {
    "code": "ET",
    "country": "Ethiopia",
    "flag": "https://flagcdn.com/et.svg"
  },
  {
    "code": "FJ",
    "country": "Fiji",
    "flag": "https://flagcdn.com/fj.svg"
  },
  {
    "code": "FI",
    "country": "Finland",
    "flag": "https://flagcdn.com/fi.svg"
  },
  {
    "code": "FR",
    "country": "France",
    "flag": "https://flagcdn.com/fr.svg"
  },
  {
    "code": "GA",
    "country": "Gabon",
    "flag": "https://flagcdn.com/ga.svg"
  },
  {
    "code": "GM",
    "country": "Gambia",
    "flag": "https://flagcdn.com/gm.svg"
  },
  {
    "code": "GE",
    "country": "Georgia",
    "flag": "https://flagcdn.com/ge.svg"
  },
  {
    "code": "DE",
    "country": "Germany",
    "flag": "https://flagcdn.com/de.svg"
  },
  {
    "code": "GH",
    "country": "Ghana",
    "flag": "https://flagcdn.com/gh.svg"
  },
  {
    "code": "GR",
    "country": "Greece",
    "flag": "https://flagcdn.com/gr.svg"
  },
  {
    "code": "GD",
    "country": "Grenada",
    "flag": "https://flagcdn.com/gd.svg"
  },
  {
    "code": "GT",
    "country": "Guatemala",
    "flag": "https://flagcdn.com/gt.svg"
  },
  {
    "code": "GN",
    "country": "Guinea",
    "flag": "https://flagcdn.com/gn.svg"
  },
  {
    "code": "GW",
    "country": "Guinea-Bissau",
    "flag": "https://flagcdn.com/gw.svg"
  },
  {
    "code": "GY",
    "country": "Guyana",
    "flag": "https://flagcdn.com/gy.svg"
  },
  {
    "code": "HT",
    "country": "Haiti",
    "flag": "https://flagcdn.com/ht.svg"
  },
  {
    "code": "HN",
    "country": "Honduras",
    "flag": "https://flagcdn.com/hn.svg"
  },
  {
    "code": "HU",
    "country": "Hungary",
    "flag": "https://flagcdn.com/hu.svg"
  },
  {
    "code": "IS",
    "country": "Iceland",
    "flag": "https://flagcdn.com/is.svg"
  },
  {
    "code": "IN",
    "country": "India",
    "flag": "https://flagcdn.com/in.svg"
  },
  {
    "code": "ID",
    "country": "Indonesia",
    "flag": "https://flagcdn.com/id.svg"
  },
  {
    "code": "IR",
    "country": "Iran",
    "flag": "https://flagcdn.com/ir.svg"
  },
  {
    "code": "IQ",
    "country": "Iraq",
    "flag": "https://flagcdn.com/iq.svg"
  },
  {
    "code": "IE",
    "country": "Ireland",
    "flag": "https://flagcdn.com/ie.svg"
  },
  {
    "code": "IL",
    "country": "Israel",
    "flag": "https://flagcdn.com/il.svg"
  },
  {
    "code": "IT",
    "country": "Italy",
    "flag": "https://flagcdn.com/it.svg"
  },
  {
    "code": "JM",
    "country": "Jamaica",
    "flag": "https://flagcdn.com/jm.svg"
  },
  {
    "code": "JP",
    "country": "Japan",
    "flag": "https://flagcdn.com/jp.svg"
  },
  {
    "code": "JO",
    "country": "Jordan",
    "flag": "https://flagcdn.com/jo.svg"
  },
  {
    "code": "KZ",
    "country": "Kazakhstan",
    "flag": "https://flagcdn.com/kz.svg"
  },
  {
    "code": "KE",
    "country": "Kenya",
    "flag": "https://flagcdn.com/ke.svg"
  },
  {
    "code": "KI",
    "country": "Kiribati",
    "flag": "https://flagcdn.com/ki.svg"
  },
  {
    "code": "KW",
    "country": "Kuwait",
    "flag": "https://flagcdn.com/kw.svg"
  },
  {
    "code": "KG",
    "country": "Kyrgyzstan",
    "flag": "https://flagcdn.com/kg.svg"
  },
  {
    "code": "LA",
    "country": "Laos",
    "flag": "https://flagcdn.com/la.svg"
  },
  {
    "code": "LV",
    "country": "Latvia",
    "flag": "https://flagcdn.com/lv.svg"
  },
  {
    "code": "LB",
    "country": "Lebanon",
    "flag": "https://flagcdn.com/lb.svg"
  },
  {
    "code": "LS",
    "country": "Lesotho",
    "flag": "https://flagcdn.com/ls.svg"
  },
  {
    "code": "LR",
    "country": "Liberia",
    "flag": "https://flagcdn.com/lr.svg"
  },
  {
    "code": "LY",
    "country": "Libya",
    "flag": "https://flagcdn.com/ly.svg"
  },
  {
    "code": "LI",
    "country": "Liechtenstein",
    "flag": "https://flagcdn.com/li.svg"
  },
  {
    "code": "LT",
    "country": "Lithuania",
    "flag": "https://flagcdn.com/lt.svg"
  },
  {
    "code": "LU",
    "country": "Luxembourg",
    "flag": "https://flagcdn.com/lu.svg"
  },
  {
    "code": "MG",
    "country": "Madagascar",
    "flag": "https://flagcdn.com/mg.svg"
  },
  {
    "code": "MW",
    "country": "Malawi",
    "flag": "https://flagcdn.com/mw.svg"
  },
  {
    "code": "MY",
    "country": "Malaysia",
    "flag": "https://flagcdn.com/my.svg"
  },
  {
    "code": "MV",
    "country": "Maldives",
    "flag": "https://flagcdn.com/mv.svg"
  },
  {
    "code": "ML",
    "country": "Mali",
    "flag": "https://flagcdn.com/ml.svg"
  },
  {
    "code": "MT",
    "country": "Malta",
    "flag": "https://flagcdn.com/mt.svg"
  },
  {
    "code": "MH",
    "country": "Marshall Islands",
    "flag": "https://flagcdn.com/mh.svg"
  },
  {
    "code": "MR",
    "country": "Mauritania",
    "flag": "https://flagcdn.com/mr.svg"
  },
  {
    "code": "MU",
    "country": "Mauritius",
    "flag": "https://flagcdn.com/mu.svg"
  },
  {
    "code": "MX",
    "country": "Mexico",
    "flag": "https://flagcdn.com/mx.svg"
  },
  {
    "code": "FM",
    "country": "Micronesia",
    "flag": "https://flagcdn.com/fm.svg"
  },
  {
    "code": "MD",
    "country": "Moldova",
    "flag": "https://flagcdn.com/md.svg"
  },
  {
    "code": "MC",
    "country": "Monaco",
    "flag": "https://flagcdn.com/mc.svg"
  },
  {
    "code": "MN",
    "country": "Mongolia",
    "flag": "https://flagcdn.com/mn.svg"
  },
  {
    "code": "ME",
    "country": "Montenegro",
    "flag": "https://flagcdn.com/me.svg"
  },
  {
    "code": "MA",
    "country": "Morocco",
    "flag": "https://flagcdn.com/ma.svg"
  },
  {
    "code": "MZ",
    "country": "Mozambique",
    "flag": "https://flagcdn.com/mz.svg"
  },
  {
    "code": "MM",
    "country": "Myanmar",
    "flag": "https://flagcdn.com/mm.svg"
  },
  {
    "code": "NA",
    "country": "Namibia",
    "flag": "https://flagcdn.com/na.svg"
  },
  {
    "code": "NR",
    "country": "Nauru",
    "flag": "https://flagcdn.com/nr.svg"
  },
  {
    "code": "NP",
    "country": "Nepal",
    "flag": "https://flagcdn.com/np.svg"
  },
  {
    "code": "NL",
    "country": "Netherlands",
    "flag": "https://flagcdn.com/nl.svg"
  },
  {
    "code": "NZ",
    "country": "New Zealand",
    "flag": "https://flagcdn.com/nz.svg"
  },
  {
    "code": "NI",
    "country": "Nicaragua",
    "flag": "https://flagcdn.com/ni.svg"
  },
  {
    "code": "NE",
    "country": "Niger",
    "flag": "https://flagcdn.com/ne.svg"
  },
  {
    "code": "NG",
    "country": "Nigeria",
    "flag": "https://flagcdn.com/ng.svg"
  },
  {
    "code": "KP",
    "country": "North Korea",
    "flag": "https://flagcdn.com/kp.svg"
  },
  {
    "code": "MK",
    "country": "North Macedonia",
    "flag": "https://flagcdn.com/mk.svg"
  },
  {
    "code": "NO",
    "country": "Norway",
    "flag": "https://flagcdn.com/no.svg"
  },
  {
    "code": "OM",
    "country": "Oman",
    "flag": "https://flagcdn.com/om.svg"
  },
  {
    "code": "PK",
    "country": "Pakistan",
    "flag": "https://flagcdn.com/pk.svg"
  },
  {
    "code": "PW",
    "country": "Palau",
    "flag": "https://flagcdn.com/pw.svg"
  },
  {
    "code": "PS",
    "country": "Palestine",
    "flag": "https://flagcdn.com/ps.svg"
  },
  {
    "code": "PA",
    "country": "Panama",
    "flag": "https://flagcdn.com/pa.svg"
  },
  {
    "code": "PG",
    "country": "Papua New Guinea",
    "flag": "https://flagcdn.com/pg.svg"
  },
  {
    "code": "PY",
    "country": "Paraguay",
    "flag": "https://flagcdn.com/py.svg"
  },
  {
    "code": "PE",
    "country": "Peru",
    "flag": "https://flagcdn.com/pe.svg"
  },
  {
    "code": "PH",
    "country": "Philippines",
    "flag": "https://flagcdn.com/ph.svg"
  },
  {
    "code": "PL",
    "country": "Poland",
    "flag": "https://flagcdn.com/pl.svg"
  },
  {
    "code": "PT",
    "country": "Portugal",
    "flag": "https://flagcdn.com/pt.svg"
  },
  {
    "code": "QA",
    "country": "Qatar",
    "flag": "https://flagcdn.com/qa.svg"
  },
  {
    "code": "RO",
    "country": "Romania",
    "flag": "https://flagcdn.com/ro.svg"
  },
  {
    "code": "RU",
    "country": "Russia",
    "flag": "https://flagcdn.com/ru.svg"
  },
  {
    "code": "RW",
    "country": "Rwanda",
    "flag": "https://flagcdn.com/rw.svg"
  },
  {
    "code": "KN",
    "country": "Saint Kitts and Nevis",
    "flag": "https://flagcdn.com/kn.svg"
  },
  {
    "code": "LC",
    "country": "Saint Lucia",
    "flag": "https://flagcdn.com/lc.svg"
  },
  {
    "code": "VC",
    "country": "Saint Vincent and the Grenadines",
    "flag": "https://flagcdn.com/vc.svg"
  },
  {
    "code": "WS",
    "country": "Samoa",
    "flag": "https://flagcdn.com/ws.svg"
  },
  {
    "code": "SM",
    "country": "San Marino",
    "flag": "https://flagcdn.com/sm.svg"
  },
  {
    "code": "ST",
    "country": "Sao Tome and Principe",
    "flag": "https://flagcdn.com/st.svg"
  },
  {
    "code": "SA",
    "country": "Saudi Arabia",
    "flag": "https://flagcdn.com/sa.svg"
  },
  {
    "code": "SN",
    "country": "Senegal",
    "flag": "https://flagcdn.com/sn.svg"
  },
  {
    "code": "RS",
    "country": "Serbia",
    "flag": "https://flagcdn.com/rs.svg"
  },
  {
    "code": "SC",
    "country": "Seychelles",
    "flag": "https://flagcdn.com/sc.svg"
  },
  {
    "code": "SL",
    "country": "Sierra Leone",
    "flag": "https://flagcdn.com/sl.svg"
  },
  {
    "code": "SG",
    "country": "Singapore",
    "flag": "https://flagcdn.com/sg.svg"
  },
  {
    "code": "SK",
    "country": "Slovakia",
    "flag": "https://flagcdn.com/sk.svg"
  },
  {
    "code": "SI",
    "country": "Slovenia",
    "flag": "https://flagcdn.com/si.svg"
  },
  {
    "code": "SB",
    "country": "Solomon Islands",
    "flag": "https://flagcdn.com/sb.svg"
  },
  {
    "code": "SO",
    "country": "Somalia",
    "flag": "https://flagcdn.com/so.svg"
  },
  {
    "code": "ZA",
    "country": "South Africa",
    "flag": "https://flagcdn.com/za.svg"
  },
  {
    "code": "KR",
    "country": "South Korea",
    "flag": "https://flagcdn.com/kr.svg"
  },
  {
    "code": "SS",
    "country": "South Sudan",
    "flag": "https://flagcdn.com/ss.svg"
  },
  {
    "code": "ES",
    "country": "Spain",
    "flag": "https://flagcdn.com/es.svg"
  },
  {
    "code": "LK",
    "country": "Sri Lanka",
    "flag": "https://flagcdn.com/lk.svg"
  },
  {
    "code": "SD",
    "country": "Sudan",
    "flag": "https://flagcdn.com/sd.svg"
  },
  {
    "code": "SR",
    "country": "Suriname",
    "flag": "https://flagcdn.com/sr.svg"
  },
  {
    "code": "SE",
    "country": "Sweden",
    "flag": "https://flagcdn.com/se.svg"
  },
  {
    "code": "CH",
    "country": "Switzerland",
    "flag": "https://flagcdn.com/ch.svg"
  },
  {
    "code": "SY",
    "country": "Syria",
    "flag": "https://flagcdn.com/sy.svg"
  },
  {
    "code": "TW",
    "country": "Taiwan",
    "flag": "https://flagcdn.com/tw.svg"
  },
  {
    "code": "TJ",
    "country": "Tajikistan",
    "flag": "https://flagcdn.com/tj.svg"
  },
  {
    "code": "TZ",
    "country": "Tanzania",
    "flag": "https://flagcdn.com/tz.svg"
  },
  {
    "code": "TH",
    "country": "Thailand",
    "flag": "https://flagcdn.com/th.svg"
  },
  {
    "code": "TL",
    "country": "Timor-Leste",
    "flag": "https://flagcdn.com/tl.svg"
  },
  {
    "code": "TG",
    "country": "Togo",
    "flag": "https://flagcdn.com/tg.svg"
  },
  {
    "code": "TO",
    "country": "Tonga",
    "flag": "https://flagcdn.com/to.svg"
  },
  {
    "code": "TT",
    "country": "Trinidad and Tobago",
    "flag": "https://flagcdn.com/tt.svg"
  },
  {
    "code": "TN",
    "country": "Tunisia",
    "flag": "https://flagcdn.com/tn.svg"
  },
  {
    "code": "TR",
    "country": "Turkey",
    "flag": "https://flagcdn.com/tr.svg"
  },
  {
    "code": "TM",
    "country": "Turkmenistan",
    "flag": "https://flagcdn.com/tm.svg"
  },
  {
    "code": "TV",
    "country": "Tuvalu",
    "flag": "https://flagcdn.com/tv.svg"
  },
  {
    "code": "UG",
    "country": "Uganda",
    "flag": "https://flagcdn.com/ug.svg"
  },
  {
    "code": "UA",
    "country": "Ukraine",
    "flag": "https://flagcdn.com/ua.svg"
  },
  {
    "code": "AE",
    "country": "United Arab Emirates",
    "flag": "https://flagcdn.com/ae.svg"
  },
  {
    "code": "GB",
    "country": "United Kingdom",
    "flag": "https://flagcdn.com/gb.svg"
  },
  {
    "code": "US",
    "country": "United States",
    "flag": "https://flagcdn.com/us.svg"
  },
  {
    "code": "US",
    "country": "United States of America",
    "flag": "https://flagcdn.com/us.svg"
  },
  {
    "code": "UY",
    "country": "Uruguay",
    "flag": "https://flagcdn.com/uy.svg"
  },
  {
    "code": "UZ",
    "country": "Uzbekistan",
    "flag": "https://flagcdn.com/uz.svg"
  },
  {
    "code": "VU",
    "country": "Vanuatu",
    "flag": "https://flagcdn.com/vu.svg"
  },
  {
    "code": "VA",
    "country": "Vatican City",
    "flag": "https://flagcdn.com/va.svg"
  },
  {
    "code": "VE",
    "country": "Venezuela",
    "flag": "https://flagcdn.com/ve.svg"
  },
  {
    "code": "VN",
    "country": "Vietnam",
    "flag": "https://flagcdn.com/vn.svg"
  },
  {
    "code": "YE",
    "country": "Yemen",
    "flag": "https://flagcdn.com/ye.svg"
  },
  {
    "code": "ZM",
    "country": "Zambia",
    "flag": "https://flagcdn.com/zm.svg"
  },
  {
    "code": "ZW",
    "country": "Zimbabwe",
    "flag": "https://flagcdn.com/zw.svg"
  }
]








