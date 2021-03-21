var wrap = document.body.querySelector(".wrap");

var FireAttack = 3;
var IceAttack = 1;
var PoisonAttack = 4;

var num = FireAttack + IceAttack + PoisonAttack;
var Dragon = ["dragon's damage: " + num];

function dragondamage(damage, attack) { 
  var DD = document.createElement("div");
  DD.innerHTML = damage;
wrap.appendChild(DD);
}

document.body.querySelector(".Fire").addEventListener ("click", function(){dragondamage(FireAttack);})
  
document.body.querySelector(".Ice").addEventListener ("click", function(){dragondamage(IceAttack);})

document.body.querySelector(".Poison").addEventListener ("click", function(){dragondamage(PoisonAttack);})

dragondamage(Dragon);

if(num > 10) 
{wrap.innerHTML="You Win!";}