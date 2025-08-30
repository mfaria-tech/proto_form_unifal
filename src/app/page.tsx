"use client";

import styles from "@/styles/homepage.module.css";
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
    <main>
      <form onSubmit={handleSubmit} id={styles.formHomepage}>
        <h1>Questionário</h1>
        {questions.map((q) => (
          <div key={q.id} className={styles.question}>
            <p>{q.id}) {q.text}</p>
            <div className={styles.options}>
              {q.options.map((opt, i) => (
                <div key={i} className={styles.checkbox}>
                  <input
                    type="checkbox"
                    id={`morning-${q.id}-${i}`}
                    name={q.id}
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    required
                  />
                  <label 
                    key={opt}
                    htmlFor={`morning-${q.id}-${i}`}
                  >
                    <span><svg width="12px" height="10px">
                      <use xlinkHref="#check-4"></use>  
                    </svg></span>
                    <span>{opt}</span>
                  </label>
                  <svg className={styles.inlineSvg}>
                    <symbol id="check-4" viewBox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </symbol>
                  </svg>
                </div>
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
      </form>
      {status && <p className="">{status}</p>}
    </main>
  );
}
