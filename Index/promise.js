


function creatingElement(ele,cls="",style="")
{
    var element=document.createElement(ele)
    element.setAttribute("class",cls)
    element.style=style;
    return element;

}

function creatCard(i)
{
var div1=creatingElement("div","card");
div1.classList.add("col-25");
var div2 = creatingElement("div", "card-body");
var title=creatingElement("h5","card-title");
title.innerHTML=`${i["name"]}`
var img=creatingElement("img","card-img-top");
img.src=`${i["flag"]}`;
img.style.width="50%";
var code=creatingElement("h5");
code.innerHTML = `Capital:- ${i["capital"]}`;
var lan=creatingElement("h4")
lan.innerHTML = ` latlng:-${i["latlng"]}`;
var region = creatingElement("h4");
lan.innerHTML = ` Region:-${i["region"]}`;
var country=creatingElement("h4");
country.innerHTML=`Country Code:-${i["alpha2Code"]},${i["alpha3Code"]}`
var currencies = creatingElement("h4");
currencies.innerHTML = `Currencies:- ${i["currencies"][0]["code"]} , ${i["currencies"][0]["name"]} , ${i["currencies"][0]["symbol"]}`;
div1.append(title,img,div2,code,lan,country,region,currencies);

return div1;
}

function makeRequest(method, url) {
    return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
        if (xhr.status == 200)
        {
        resolve(xhr.response);
        } else {
        reject({ message: xhr.statusText });
      }
      xhr.onerror = function () {
        reject({ message: xhr.statusText });
      };
    };
    xhr.send();
  });
}

makeRequest("GET", "https://restcountries.eu/rest/v2/all")
    .then((result) => {
    return(JSON.parse(result));
    })
    .then((result)=>{
        for (const i of result) {
            var d1 = creatCard(i);
            document.body.append(d1)
        }
    })
    .catch((error) => {
    console.log(error);
  }); 