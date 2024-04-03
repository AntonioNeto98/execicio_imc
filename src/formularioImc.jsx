import  { useState } from 'react';

const FormularioIMC = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    const alturaEmMetros = altura / 100;
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado);
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <p>Seu IMC: {imc.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default FormularioIMC;