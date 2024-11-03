// src/App.tsx
import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //tratamento de erros de entrada
    if (num1 === "" || num2 === "") {
      setError("Entrada inválida. Por favor, insira ambos os números.");
      setResult(null);
      return;
    }
    if (num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num2 % 1 !== 0) {
      setError("Entrada inválida. Os números devem ser inteiros positivos");
      setResult(null);

      return;
    }
    if (num1 >= num2) {
      setError(
        "Por favor, insira um intervalo correto (os números devem ser diferentes e estarem em ordem crescente)"
      );
      setResult(null);

      return;
    }
    setError(null);
    //requisição para a Api
    try {
      const response = await fetch("http://127.0.0.1:8000/api/lcm/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1, num2 }),
      });

      if (!response.ok) {
        setResult(null);
        throw new Error(
          "Erro ao calcular o MMC. Tente inserir um intervalo menor ;)"
        );
      }

      const data = await response.json();

      setResult(data.lcm);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="app-container">
      <h1>Calculadora de MMC</h1>
      <p>
        Insira 2 números para calcular o <span>mínimo múltiplo comum </span>
        de todos números no intervalo entre eles
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número 1: </label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Número 2: </label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </div>
        <button type="submit">Calcular MMC</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result !== null && <p>O MMC é: {result}</p>}
    </div>
  );
};

export default App;
