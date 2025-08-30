"use client";

import { useState } from "react";
import { questions } from "@/lib/questions";

export default function SurveyForm() {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState("");

  const handleChange = (qId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    const payload = {
      answers: Object.entries(answers).map(([question, answer]) => ({
        question,
        answer,
      })),
    };

    const res = await fetch("/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("Respostas enviadas com sucesso!");
      setAnswers({});
    } else {
      const data = await res.json();
      setStatus(`Erro: ${data.error}`);
    }
  };

  return (
    <main className="">
      <form onSubmit={handleSubmit} className="">
        <div className="">
          <h1 className="">Questionário</h1>
          {questions.map((q) => (
            <div key={q.id} className="">
              <p className="">{q.id}) {q.text}</p>
              <div className="">
                {q.options.map((opt) => (
                  <label key={opt} className="">
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={(e) => handleChange(q.id, e.target.value)}
                      required
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className=""
          >
            Enviar
          </button>
        </div>
      </form>
      {status && <p className="">{status}</p>}
    </main>
  );
}
