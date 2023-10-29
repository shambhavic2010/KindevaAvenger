document.write('<p>Enjoy!!!</p>');

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let squares = [];


a_x= 205
b_y = 150
c_radius = 10
e= 5

for (var i = 0; i < 200; i += 50) 
{
    GetCoordinatesXY(a_x,b_y);
    DrawWeapon(a_x, b_y, c_radius, 0, 2 * Math.PI);
    
    //tick();

}