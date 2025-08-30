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

    // const res = await fetch("/api/survey", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });

    // if (res.ok) {
    //   setStatus("Respostas enviadas com sucesso!");
    //   setAnswers({});
    // } else {
    //   const data = await res.json();
    //   setStatus(`Erro: ${data.error}`);
    // }

    setStatus("Respostas enviadas com sucesso!");
    setAnswers({});
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
                <div key={i} className={styles.checkboxSketch}>
                  <input 
                    type="checkbox" 
                    id={`morning-${q.id}-${i}`}
                    className={styles.check}
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
                    <svg width="45" height="45" viewBox="0 0 95 95">
                      <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
                      <g transform="translate(0,-952.36222)">
                        <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 " stroke="black" strokeWidth="3" fill="none" className={styles.path1} />
                      </g>
                    </svg>
                    <span>{opt}</span>
                  </label>
                </div>

                // <div key={i} className={styles.checkbox}>
                //   <input
                //     type="checkbox"
                //     id={`morning-${q.id}-${i}`}
                //     name={q.id}
                //     value={opt}
                //     checked={answers[q.id] === opt}
                //     onChange={(e) => handleChange(q.id, e.target.value)}
                //     required
                //   />
                //   <label 
                //     key={opt}
                //     htmlFor={`morning-${q.id}-${i}`}
                //   >
                //     <span><svg width="12px" height="10px">
                //       <use xlinkHref="#check-4"></use>  
                //     </svg></span>
                //     <span>{opt}</span>
                //   </label>
                //   <svg className={styles.inlineSvg}>
                //     <symbol id="check-4" viewBox="0 0 12 10">
                //       <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                //     </symbol>
                //   </svg>
                // </div>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className={styles.btnSubmit}
        >
          Enviar
        </button>
      </form>
      {status && <p className="">{status}</p>}
    </main>
  );
}
