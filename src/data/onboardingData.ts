import { Section } from "@/models/sectionModal";

export const sections: Section[] = [
  {
    id: 1,
    title: "Etapas do Processo de Venda",
    subtitle: "Entenda como funciona cada etapa do processo comercial",
    items: [
      {
        title: "Cotação e Proposta Comercial",
        points: [
          "O vendedor realiza a cotação e envia o orçamento ao cliente",
          "Após a aprovação do cliente, o pedido é encaminhado para a expedição",
        ],
      },
      {
        title: "Separação e Conferência de Itens",
        points: [
          "A expedição separa os produtos conforme o pedido",
          "Informa ao vendedor se o pedido está completo",
          "Comunica eventuais faltas ou substituições necessárias",
        ],
      },
      {
        title: "Ajuste e Comunicação com o Cliente",
        points: [
          "O vendedor informa ao cliente sobre quaisquer alterações",
          "Confirmação antes de prosseguir com o faturamento",
        ],
      },
    ],
    quiz: {
      question:
        "Após a aprovação do cliente, para onde o pedido é encaminhado?",
      options: [
        "Diretamente para o faturamento",
        "Para a expedição separar os produtos",
        "Para a análise de crédito",
        "Para o financeiro",
      ],
      correctAnswer: 1,
      explanation:
        "Após aprovação do cliente, o pedido vai para expedição fazer a separação dos produtos.",
    },
  },
  {
    id: 2,
    title: "Processo de Faturamento",
    subtitle: "Política de crédito e condições de pagamento",
    items: [
      {
        title: "Novos Clientes",
        points: [
          "1ª Compra: pagamento à vista obrigatório",
          "2ª Compra: análise de crédito via Boa Vista",
          "Atualização cadastral completa",
          "Definição de limite de crédito personalizado",
        ],
      },
      {
        title: "Clientes Ativos",
        points: [
          "Verificação de pendências financeiras antes de liberar pedido",
          "Manutenção do relacionamento comercial",
          "Acompanhamento do histórico de compras",
        ],
      },
      {
        title: "Clientes Inativos",
        points: [
          "Nova análise de crédito necessária",
          "Atualização completa do cadastro",
          "Reatribuição de limite de crédito",
        ],
      },
    ],
    quiz: {
      question: "Como funciona o processo de compra para novos clientes?",
      options: [
        "Podem comprar a prazo desde a primeira compra",
        "1ª compra à vista, 2ª compra após análise de crédito",
        "Precisam ter CNPJ há mais de 2 anos",
        "Devem pagar antecipado nas primeiras 3 compras",
      ],
      correctAnswer: 1,
      explanation:
        "Novos clientes fazem a primeira compra à vista. Na segunda, passam por análise de crédito.",
    },
  },
  {
    id: 3,
    title: "Logística e Prazo de Entrega",
    subtitle: "Organização de rotas e cronograma de entregas",
    items: [
      {
        title: "Organização das Entregas",
        points: [
          "Cronograma semanal de entregas organizado por região",
          "Estimativa de entrega informada ao cliente no momento da venda",
          "Prazo sujeito à formação completa da carga",
        ],
      },
      {
        title: "Processo de Liberação",
        points: [
          "Pedido só é liberado para transporte após o faturamento",
          "Confirmação de disponibilidade de todos os itens",
          "Agendamento conforme rota estabelecida",
        ],
      },
    ],
    quiz: {
      question: "Quando o pedido é liberado para transporte?",
      options: [
        "Imediatamente após a aprovação do cliente",
        "Após a separação dos produtos",
        "Somente após o faturamento",
        "Quando a rota estiver completa",
      ],
      correctAnswer: 2,
      explanation:
        "O pedido só é liberado para transporte após o processo de faturamento ser concluído.",
    },
  },
  {
    id: 4,
    title: "Confirmação e Acompanhamento",
    subtitle: "Garantindo a satisfação do cliente até a entrega final",
    items: [
      {
        title: "Processo de Confirmação",
        points: [
          "Um dia antes da entrega, os pedidos são faturados",
          "Confirmação com o cliente do recebimento e agendamento",
          "Verificação de disponibilidade para recebimento",
        ],
      },
      {
        title: "Acompanhamento da Entrega",
        points: [
          "Monitoramento da rota de entrega",
          "Comunicação em caso de imprevistos",
          "Confirmação final após entrega realizada",
          "Registro de feedback do cliente",
        ],
      },
    ],
    quiz: {
      question: "Quando os pedidos são faturados?",
      options: [
        "Imediatamente após a venda",
        "Quando os produtos são separados",
        "Um dia antes da entrega",
        "No momento da entrega ao cliente",
      ],
      correctAnswer: 2,
      explanation:
        "Os pedidos são faturados um dia antes da entrega programada ao cliente.",
    },
  },
];
