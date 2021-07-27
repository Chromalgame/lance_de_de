function dessiner_carre(){
    var canevas = document.querySelectorAll('.face');
    canevas.forEach(caneva => {
        if (caneva.getContext) {
            var ctx = caneva.getContext('2d');
        
            var gradient = ctx.createLinearGradient(250, 0, 0, 100);
            gradient.addColorStop(0, '#4158d0');
            gradient.addColorStop(0.46, '#c850c0');
            gradient.addColorStop(1, '#ffcc70');
            ctx.fillStyle = gradient;
      
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.rect(0,0,300,300);
            ctx.fill();
          }
    })
}

/*
 * 
 *  Top
 * 
 */

function circle_top_left(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function circle_top_middle(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(150, 50, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function circle_top_right(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(250, 50, 30, 0, 2 * Math.PI);
    ctx.fill();
}

/*
 * 
 *  Middle
 * 
 */

function circle_middle_left(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(50, 150, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function circle_middle_middle(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(150, 150, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function circle_middle_right(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(250, 150, 30, 0, 2 * Math.PI);
    ctx.fill();
}

/*
 * 
 *  Bottom
 * 
 */

function circle_bottom_left(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(50, 250, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function circle_bottom_middle(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(150, 250, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function circle_bottom_right(num){
    caneva = document.querySelector(`.${num}`);
    var ctx = caneva.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle="#333";
    ctx.arc(250, 250, 30, 0, 2 * Math.PI);
    ctx.fill();
}

function getRandomDeg() {
    const valeurs = ["0", "90", "270"];
    const random = Math.floor(Math.random() * valeurs.length);
    return valeurs[random];
  }

dessiner_carre();

circle_middle_middle("num_1");

circle_top_right("num_2");
circle_bottom_left("num_2");

circle_top_right("num_3");
circle_middle_middle("num_3");
circle_bottom_left("num_3");

circle_top_left("num_4");
circle_top_right("num_4");
circle_bottom_left("num_4");
circle_bottom_right("num_4");

circle_top_left("num_5");
circle_top_right("num_5");
circle_middle_middle("num_5");
circle_bottom_left("num_5");
circle_bottom_right("num_5");

circle_top_left("num_6");
circle_middle_left("num_6");
circle_top_right("num_6");
circle_bottom_left("num_6");
circle_middle_right("num_6");
circle_bottom_right("num_6");


const content = document.querySelector(".cube");
setInterval(() => {
    content.style.transform = "rotateX(" + getRandomDeg() + "deg)" + "rotateY(" + getRandomDeg() + "deg)";
}, 2000);