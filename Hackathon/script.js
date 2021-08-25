//Fetching json data from open brewery api

async function openBrewery(){
    try{
    const data = await fetch('https://api.openbrewerydb.org/breweries');
    const breweries = await data.json();
    breweries.forEach(brewery => createBrewery(brewery));
    }catch(errMsg)
    {
        console.log(errMsg);
    }
}

const navBar = document.createElement('header');

navBar.innerHTML=`<ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">CONTACT US</a></li>
                 </ul>`;
document.body.append(navBar);



const search = document.createElement('div');
search.innerHTML = `<textarea placeholder="Search Your Nearest Brewery By Name" class="searchBar"></textarea> `
document.body.append(search);


const slideShow = document.createElement('div');
slideShow.setAttribute('class','slideshow-container');


    slideShow.innerHTML=`<div class=mySlides>
                        <img src='https://breweryprintshoppe.com/wp-content/uploads/2017/12/brewery-print-shoppe-background-keg-beer.jpg' style=width:100% height=400px>
                    </div>
                    <div class=mySlides>
                        <img src='https://wallpaperaccess.com/full/1105652.jpg' style=width:100% height=400px>
                    </div>
                    <div class=mySlides>
                        <img src='https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJld2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' style=width:100% height=400px>
                    </div>
                    <div class=mySlides>
                        <img src='https://cdn.crello.com/api/media/small/213725124/stock-photo-glass-tasty-beer-foam-wooden' style=width:100% height=400px>
                    </div>
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>`

document.body.append(slideShow);

let address;
function createBrewery({name,brewery_type,street,address_2,address_3,city,state,postal_code,country,website_url,phone}){

    address = street + ',' + address_2 + ',' + address_3 + ',' + city + ',' + state + ',' + country + ',' + postal_code;

     
    const info = document.createElement('div');
    info.setAttribute('class','info');

    info.innerHTML = `<div class="container">
                        <h3 class="name">${name}</h3>
                        <h5><span>Brewery Type: </span>${brewery_type}</h5>
                        <p><span>Address: </span>${address}</p>
                        <p><span>Website URL: </span>${website_url}</p>
                        <p><span>Phone: </span>${phone}</p>
                        </div>`

document.body.append(info);
}

openBrewery();
