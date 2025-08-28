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
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Questionário</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="space-y-2">
            <p className="font-medium">{q.id}) {q.text}</p>
            <div className="flex flex-col gap-2">
              {q.options.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
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
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
        >
          Enviar
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </main>
  );
}
