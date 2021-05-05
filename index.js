// var flag = 0;
// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   if (flag===0) {
//     if (
//       document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
//     ) {
//       document.querySelector(".main").innerHTML +=
//         "<div class='questions container-fluid'> <div class='row pt-5'> <div class=' col-lg-2'> </div> <div class=' col-lg-1 pl-5'> <h1>Q2.</h1> </div> <div class=' col-lg-6'> <h1>What is your mode of transport?</h1> <select class='mt-5 pt-2 pb-2' name='mode'> <option value=' '> </option> <option value='Road Trip'>Road Trip</option> <option value='Cruise'>Cruise</option> <option value='Other'>Other</option> </select> </div> <div class=' col-lg-3'> </div> </div></div>";
//       flag = 1;
//     }
//   }
// }

document.querySelector(".next").addEventListener("click", function (event) {
  if (document.myform.weathertype.value === "Yes") {
    document.querySelector("#or").innerHTML =
      "<div class='questions container-fluid'> <div class='row pt-5'> <div class=' col-lg-2'> </div> <div class=' col-lg-1 pl-5'> <h1>Q4.</h1> </div> <div class=' col-lg-6'> <h1>What is the weather like at the place you want to go?</h1> <form name='myform1' action='/' method='post'> <select class='mt-5 pt-2 pb-2' name='weather'> <option value=' '> </option> <option value='Sunny'>Sunny</option> <option value='Chilly'>Chilly</option> <option value='Rainy'>Rainy</option> <option value='Snowy'>Snowy</option> <option value='Dry'>Dry</option> </select> <br> <a class='weatherbtn btn getstarted mt-lg-5' role='button'>Next</a> <div id='or2'> </div> </form> </div> <div class=' col-lg-3'> </div> <img src='./Group 273.png'> </div> </div> ";
        
        
        document.querySelector(".weatherbtn").addEventListener("click", function (event) {
            let weather = document.myform1.weather.value;
            console.log(weather);
            if(weather=='Dry'){
                console.log("Test")
                document.querySelector("#or2").innerHTML = 
                  "<a class='weatherbtn btn getstarted mt-lg-5' href = './My Site/dry.html' role='button'>Submit</a>";
            }
            else if(weather=='Rainy'){
                console.log("Test")
                document.querySelector("#or2").innerHTML = 
                  "<a class='weatherbtn btn getstarted mt-lg-5' href = './My Site/rainy.html' role='button'>Submit</a>";
            }
            else if(weather=='Chilly'){
                console.log("Test")
                document.querySelector("#or2").innerHTML = 
                  "<a class='weatherbtn btn getstarted mt-lg-5' href = './My Site/chilly.html' role='button'>Submit</a>";
            }
            else if(weather=='Sunny'){
                console.log("Test")
                document.querySelector("#or2").innerHTML = 
                  "<a class='weatherbtn btn getstarted mt-lg-5' href = './My Site/sunny.html' role='button'>Submit</a>";
            }
        });
        
    }
    else if (document.myform.weathertype.value === "No") {
    document.querySelector("#or").innerHTML =
      "<div class='questions container-fluid'> <div class='row pt-5'> <div class=' col-lg-2'> </div> <div class=' col-lg-1 pl-5'> <h1>Q4.</h1> </div> <div class=' col-lg-6'> <h1>The location you will be leaving from: </h1> <form name='myform1' action='/' method='post'> <input class='location mt-5 pt-2 pb-2' name='from' type='text'><br> <a class='next btn getstarted mt-lg-5' href='#to' role='button'>Next</a>  </form> </div> <img class='aeroplane' src='./Group 276.png' alt=''> <div class=' col-lg-3'> </div> <img src='./Group 273.png'> </div> </div> <div id = 'to' class='questions container-fluid'> <div class='row pt-5'> <div class=' col-lg-2'> </div> <div class=' col-lg-1 pl-5'> <h1>Q5.</h1> </div> <div class=' col-lg-6'> <h1>The location you will be going to: </h1> <form name='myform2' action='/' method='post'> <input class='location mt-5 pt-2 pb-2' name='to' type='text'> <br> <a class='sub1 btn getstarted mt-lg-5' href='#to' role='button'>Submit</a> </form> </div>  </form> </div> <div class=' col-lg-3'>  </div> </div> </div>";
        document.querySelector(".sub1").addEventListener("click", function (event) {
              let type = document.myform.type.value;
              let mode = document.myform.mode.value;
              let  from = document.myform1.from.value;
              let to = document.myform2.to.value;
              fetch("https://api.openweathermap.org/data/2.5/weather?q=" + from + "&appid=6ee2da3b156e2015d8b04065042f44d5&units=metric").then((response) => response.json()).then((data) => console.log(data.coord.lat, data.coord.lon));
              fetch("https://api.openweathermap.org/data/2.5/weather?q=" + to + "&appid=6ee2da3b156e2015d8b04065042f44d5&units=metric").then((response) => response.json()).then((data) => console.log(data.coord.lat, data.coord.lon, data.main.temp_max));
              console.log(type,mode,from,to);
              fetch(
                "https://api.distancematrix.ai/maps/api/distancematrix/json?origins=28.6667,77.2167&destinations=17.3753,78.4744&key=ahjN5zWYFouBtt9fUAjlisQ96kDik"
              ).then((response) => response.json()).then((data) => console.log(data));
              
              

              });
  
  
    }
});

