/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "the keys", "the car"];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function RandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];

    return randomElement;
  }

  let quien = RandomItem(who);
  let accion = RandomItem(action);
  let que = RandomItem(what);
  let cuando = RandomItem(when);

  let frase = quien + " " + accion + " " + que + " " + cuando;

  document.getElementById("excuse").innerHTML = frase;
};
document.getElementById("btn-volumen").addEventListener("click", window.onload);
