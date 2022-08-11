
let result = document.getElementById('resultado')
result.innerHTML = 'Aguardando dados...'

function calcImc(){ 
  result.innerHTML= '';
  let peso = document.getElementById('peso'); 
  let altura = document.getElementById('altura');
  
  if (peso.value.length == 0 || altura.value.length ==0){
    window.alert('Insira os dados!');
  } else {
    let pesoN = parseFloat(peso.value);
    let alturaN = parseFloat(altura.value);
    let imc = (pesoN / (alturaN*alturaN));
    
    if (imc <= 16.9){
      result.innerHTML = `<strong>Seu IMC é: ${imc.toFixed(2)}kg/m² <br>Muito abaixo do peso</strong>`;
      result.style.backgroundColor = '#ffff0091'
    } else if (imc <= 18.4){
      result.innerHTML = `<strong>Seu IMC é: ${imc.toFixed(2)}kg/m² <br>Abaixo do peso</strong>`;
      result.style.backgroundColor = '#ffff0091'
    } else if (imc <= 24.9) {
      result.innerHTML = `<strong>Seu IMC é: ${imc.toFixed(2)}kg/m² <br>Peso normal</strong>`;
      result.style.backgroundColor = '#11fa1181'
    } else if (imc <= 29.9){
      result.innerHTML = `<strong>Seu IMC é: ${imc.toFixed(2)}kg/m² <br>Acima do peso</strong>`;
      result.style.backgroundColor = '#ffa6009f';
    } else if (imc <= 34.9){
      result.innerHTML = `<strong>Seu IMC é: ${imc.toFixed(2)}kg/m² <br>Obesidade grau I</strong>`;
      result.style.backgroundColor = '#ff00008f'
    } else if (imc <= 40){
      result.innerHTML = `<strong>Seu IMC é: ${imc.toFixed(2)}kg/m² <br>Obesidade grau II</strong>`;
      result.style.backgroundColor = '#ff00008f'
    } else {
      result.innerHTML = `<strong>Seu IMC é: ${imc.toFixed(2)}kg/m² <br>Obesidade grau III</strong>`;
      result.style.backgroundColor = '#ff00008f'
    }
  }
  
} 
