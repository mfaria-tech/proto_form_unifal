export const questions = [
    // -----------------------------
    // 1) Condições sociais
    // -----------------------------
    {
        id: "P1",
        text: "Qual é seu sexo?",
        type: "radio",
        options: ["MASCULINO", "FEMININO"]
    },
    {
        id: "P2",
        text: "Qual é a sua idade?",
        type: "radio",
        options: [
            "16 a 24 anos",
            "25 a 34 anos",
            "35 a 44 anos",
            "45 a 59 anos",
            "60 anos ou mais"
        ]
    },
    {
        id: "P3",
        text: "Qual o maior grau de escolaridade que você já alcançou?",
        type: "radio",
        options: [
            "Sem instrução e Ensino fundamental incompleto",
            "Ensino fundamental completo e Ensino médio ou técnico incompleto",
            "Ensino médio ou técnico completo e Ensino superior incompleto",
            "Ensino superior completo"
        ]
    },
    {
        id: "P4",
        text: "Qual é a renda total domiciliar?",
        type: "radio",
        options: [
            "Até ½ salário mínimo (até R$762,50)",
            "Entre ½ e 1 salário mínimo (até R$1525,00)",
            "Entre 1 e 1,5 salários mínimos (até R$2.287,50)",
            "Entre 1,5 e 2 salários mínimos (até R$3.036,00)",
            "Entre 2 e 3 salários mínimos (até R$4.575,00)",
            "Entre 3 e 4 salários mínimos (até R$6.100,00)",
            "Entre 4 e 5 salários mínimos (até R$7.590,00)",
            "Entre 5 e 6 salários mínimos (até R$9.150,00)",
            "Entre 6 e 7 salários mínimos (até R$10.675,00)",
            "Entre 7 e 8 salários mínimos (até R$12.200,00)",
            "Entre 8 e 10 salários mínimos (até R$15.250,00)",
            "Mais de 10 salários mínimos (mais de R$15.250,00)"
        ]
    },
    {
        id: "P5",
        text: "Quantas pessoas residem no seu domicílio, incluindo você?",
        type: "radio",
        options: ["1","2","3","4","5","6","7","8","9","10","11 ou mais"]
    },
    {
        id: "P6",
        text: "Qual a sua cor ou raça?",
        type: "radio",
        options: ["PARDA", "BRANCA", "PRETA", "AMARELA", "INDÍGENA", "NSNR"]
    },

    // -----------------------------
    // 2) Atitudes ambientais
    // -----------------------------
    {
        id: "P7",
        text: "O quanto você considera que está preocupado(a) com o meio ambiente atualmente?",
        type: "radio",
        options: ["MUITO PREOCUPADO(A)", "PREOCUPADO(A)", "UM POUCO PREOCUPADO(A)", "NADA PREOCUPADO(A)", "NSNR"]
    },
    {
        id: "P8",
        text: "O quanto você acha que o aquecimento global pode prejudicar você e sua família?",
        type: "radio",
        options: ["MUITO", "MAIS OU MENOS", "UM POUCO", "NADA", "NSNR"]
    },
    {
        id: "P9",
        text: "Em que extensão seu bairro foi afetado nos últimos 12 meses por eventos climáticos extremos?",
        type: "radio",
        options: ["Muito afetado", "Afetado", "Pouco afetado", "Não foi afetado", "NSNR"]
    },
    {
        id: "P10",
        text: "O quanto você está preocupado(a) com a preservação da Floresta Amazônica?",
        type: "radio",
        options: ["MUITO PREOCUPADO(A)", "PREOCUPADO(A)", "UM POUCO PREOCUPADO(A)", "NADA PREOCUPADO(A)", "NSNR"]
    },
    {
        id: "P11",
        text: "Você acha que está aumentando o preço dos alimentos por causa do aquecimento global?",
        type: "radio",
        options: ["SIM", "NÃO", "NSNR"]
    },
    {
        id: "P12",
        text: "Quanto você confia no movimento de proteção ambiental?",
        type: "radio",
        options: ["Totalmente", "Muito", "Não muito", "Nada", "NSNR"]
    },
    {
        id: "P13",
        text: "Quanto você acredita que a humanidade é capaz de combater as mudanças climáticas?",
        type: "radio",
        options: ["ACREDITO MUITO", "ACREDITO UM POUCO", "NÃO ACREDITO NADA", "NSNR"]
    },
    {
        id: "P14",
        text: "Através de quais meios você mais se informa sobre temas ambientais?",
        type: "checkbox",
        options: [
            "Conversas com parentes/amigos/colegas",
            "Sites na internet",
            "WhatsApp",
            "Redes sociais",
            "TV aberta",
            "Rádio",
            "TV paga",
            "Jornal ou revista impressos"
        ]
    },
    {
        id: "P15",
        text: "Em quais espaços você mais conversa sobre temas ambientais?",
        type: "checkbox",
        options: [
            "Família",
            "Trabalho",
            "Igreja",
            "Grupo político ou cultural",
            "Locais de lazer",
            "Escola/Faculdade",
            "Outros",
            "Não conversa sobre temas ambientais",
            "NSNR"
        ]
    },
    // -----------------------------
  // 3) Ações pró-ambientais públicas
  // -----------------------------
  ...["P16","P17","P18","P19","P20","P21","P22","P23"].map((id, i) => ({
    id,
    text: [
      "Você é membro de algum grupo ambiental?",
      "Você já participou de manifestação ambiental?",
      "Você já participou de abaixo-assinado ambiental?",
      "Você já participou de audiência pública ambiental?",
      "Você já votou em político por propostas ambientais?",
      "Você já fez doação para instituições ambientais?",
      "Você já compartilhou notícias ambientais?",
      "Você acompanha ou participa de políticas ambientais?"
    ][i],
    type: "radio",
    options: ["SIM", "NÃO", "NSNR"]
  })),

  // -----------------------------
  // 4) Ações pró-ambientais privadas
  // -----------------------------
  ...["P24","P25","P26","P27","P28","P29","P30","P31"].map((id, i) => ({
    id,
    text: [
      "Você costuma separar lixo para reciclagem?",
      "Você utiliza energia limpa na residência?",
      "Você evita produtos que prejudicam o meio ambiente?",
      "Você reduz ou evita carne de origem animal?",
      "Você usa transporte público em vez do automóvel?",
      "Você abastece carro com etanol ou energia elétrica?",
      "Você costuma economizar água?",
      "Você deixaria de comprar produtos ligados ao desmatamento da Amazônia?"
    ][i],
    type: "radio",
    options: ["SIM", "NÃO", "NSNR"]
  })),

  // -----------------------------
  // 5) Questões de interesse local
  // -----------------------------
  {
    id: "P32",
    text: "Com qual frequência você visita praças no município?",
    type: "radio",
    options: ["Todos os dias","Todas as semanas","Uma vez por mês","Uma vez por semestre","Uma vez por ano","Nunca","NSNR"]
  },
  {
    id: "P33",
    text: "Quais são os principais motivos que te levam a visitar praças no município?",
    type: "checkbox",
    options: [
      "Lazer","Contato com natureza","Atividade física","Passear com crianças","Passear com pets",
      "Encontrar amigos","Eventos culturais","Eventos religiosos","NSNR"
    ]
  },
  {
    id: "P34",
    text: "O que você acha da qualidade das praças do município?",
    type: "radio",
    options: ["Ótima","Boa","Regular","Ruim","NSNR"]
  },
  {
    id: "P35",
    text: "O que poderia melhorar nas praças do município?",
    type: "checkbox",
    options: [
      "Limpeza","Segurança","Iluminação","Equipamentos de lazer","Playground infantil",
      "Acessibilidade","Sinalização","Paisagismo","Áreas com sombra",
      "Conservação ambiental","Atividades culturais","Atividades esportivas"
    ]
  },
  {
    id: "P36",
    text: "Qual a importância da presença de natureza nas praças públicas?",
    type: "radio",
    options: ["Muito importante","Importante","Pouco importante","Não é importante","NSNR"]
  },
  {
    id: "P37",
    text: "Você sabe o que são e o que fazem os Conselhos Municipais de Meio Ambiente?",
    type: "radio",
    options: ["SIM","NÃO","NSNR"]
  },
  {
    id: "P38",
    text: "Você sabe o que é a mineração de terras raras em Poços de Caldas-MG e Caldas-MG?",
    type: "radio",
    options: ["SIM","NÃO","NSNR"]
  },
  {
    id: "P39",
    text: "Você sabe o que são e o que fazem os grêmios estudantis?",
    type: "radio",
    options: ["SIM","NÃO","NSNR"]
  },
  {
    id: "P40",
    text: "Você ou alguém de sua família cultiva algum tipo de planta em casa?",
    type: "checkbox",
    options: [
      "Não cultivamos plantas",
      "Plantas medicinais",
      "Plantas aromáticas",
      "Hortaliças",
      "Frutíferas",
      "PANC",
      "Flores ornamentais"
    ]
  },
  {
    id: "P41",
    text: "Sobre o Patrono Nacional do Meio Ambiente, Chico Mendes, a sua opinião é...",
    type: "radio",
    options: ["Positiva","Neutra","Negativa","NSNR"]
  },
  {
    id: "P42",
    text: "A crise climática poderá afetar atrativos turísticos da Serra da Mantiqueira?",
    type: "radio",
    options: ["Muito","Mais ou menos","Um pouco","Nada","NSNR"]
  },

  // -----------------------------
  // 6) Posição política
  // -----------------------------
  {
    id: "P43",
    text: "Na política, você se define como:",
    type: "radio",
    options: ["Mais à esquerda","Centro","Mais à direita","NSNR"]
  },
  {
    id: "P44",
    text: "Nas últimas eleições para presidente do Brasil, você votou em qual candidato no 2º turno?",
    type: "radio",
    options: ["Lula","Bolsonaro","Não votou","NSNR"]
  },
  {
    id: "P45",
    text: "Como você avalia a qualidade dos espaços turísticos de Poços de Caldas após a concessão à iniciativa privada?",
    type: "radio",
    options: [
      "Melhorou significativamente",
      "Melhorou um pouco",
      "Permaneceu a mesma",
      "Piorou",
      "Piorou significativamente",
      "Não utilizo esses espaços",
      "NSNR"
    ]
  }
];