export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function incrementoMarca(marca, valor) {
  let valorConIncremento=0;

  if(marca === "americano"){
    valorConIncremento = valor * 0.15;
    valorConIncremento += valor; 
  }else if(marca === "europeo"){
    valorConIncremento = valor * 0.30;
    valorConIncremento += valor; 
  }else {
    valorConIncremento = valor * 0.05;
    valorConIncremento += valor; 
  }

  return valorConIncremento;
}

export function incrementoPlan(plan, valor){
  let valorPlan = 0;

  if(plan === "basico") {
    valorPlan = valor * 0.20;
    valorPlan += valor;
  } else {
    valorPlan = valor * 0.50;
    valorPlan += valor;
  }

  return valorPlan;
}

export function primeraLetraMayuscula(palabra){
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}