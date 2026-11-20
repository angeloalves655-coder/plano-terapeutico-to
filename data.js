// Estrutura completa extraída fielmente do Plano Terapêutico Terapia Ocupacional (7 Eixos)
// Com banco de sugestões práticas de atividades terapêuticas vinculadas a cada objetivo.

const EIXOS_TERAPEUTICOS = [
  {
    id: "eixo_avd",
    titulo: "2 – Intervenções em AVD (Atividades de Vida Diária)",
    notaLabel: "Observações / Materiais utilizados:",
    subgrupos: [
      {
        nome: null,
        itens: [
          {
            id: "avd_alimentacao",
            label: "Treino de alimentação funcional",
            sugestoes: [
              "Treino de preensão em talheres adaptados ou engrossados usando massinha/alimentos reais.",
              "Circuito de transferência de grãos ou líquidos com colher entre potes de diferentes alturas.",
              "Simulação de lanche terapêutico trabalhando estabilidade postural sentado e coordenação mão-boca."
            ]
          },
          {
            id: "avd_higiene",
            label: "Treino de higiene pessoal",
            sugestoes: [
              "Sequenciamento visual (cartões PECS) de escovação dental e lavagem das mãos em boneco/espelho.",
              "Treino de abrir/fechar tubos de creme dental e saboneteira para coordenação bilateral.",
              "Exploração tátil com esponjas macias e toalhas de diferentes texturas no rosto e mãos."
            ]
          },
          {
            id: "avd_vestuario",
            label: "Treino de vestuário",
            sugestoes: [
              "Jogo de vestir fantasias ou peças largas (camisetas, bermudas) com cronômetro lúdico.",
              "Encadeamento de trás para frente (chaining) para colocar meias e calças sentado.",
              "Atividade de consciência corporal identificando frente/verso e etiquetas das roupas."
            ]
          },
          {
            id: "avd_amarrar",
            label: "Treino de amarrar sapatos",
            sugestoes: [
              "Treino em prancha de alinhavo ou tênis de madeira com cadarços bicolores.",
              "Passo a passo da técnica das 'duas orelhinhas' com reforço visual e proprioceptivo.",
              "Jogos de pinça fina e tração bilateral com cordões antes de passar para o calçado no pé."
            ]
          },
          {
            id: "avd_botoes_ziper",
            label: "Treino de abotoar / fechar zíperes",
            sugestoes: [
              "Painel sensorial de fechos (botões grandes, zíperes, velcros e fivelas) com recompensas escondidas.",
              "Cofrinho de moedas/fichas simulando a passagem do botão pela casa.",
              "Vestir colete com zíper frontal trabalhando estabilização com uma mão e tração com a outra."
            ]
          },
          {
            id: "avd_banheiro",
            label: "Treino de uso do banheiro",
            sugestoes: [
              "História social ilustrada com toda a sequência do uso do sanitário e descarga.",
              "Treino de alcance e higiene com papel higiênico usando bonecos ou suporte visual.",
              "Adaptação sensorial do ambiente (redutor de assento, apoio para os pés para segurança postural)."
            ]
          },
          {
            id: "avd_organizacao",
            label: "Organização de pertences / rotina",
            sugestoes: [
              "Guardar materiais da sessão em mochila/estojos seguindo checklist visual de 3 passos.",
              "Classificação de objetos por categoria (escola, brinquedos, higiene) em caixas organizadoras.",
              "Montagem de quadro de rotina semanal com velcro para antecipação de tarefas."
            ]
          },
          {
            id: "avd_sequencia",
            label: "Treino de sequência de tarefas",
            sugestoes: [
              "Receita culinária simples (ex: sanduíche ou salada de frutas) seguindo 4 etapas ilustradas.",
              "Jogo de montar brinquedo em etapas ordenadas (primeiro, depois, por último).",
              "Treino de planejamento motor para preparar a própria mesa de atividades."
            ]
          },
          {
            id: "avd_autonomia",
            label: "Treino de autonomia nas AVDs",
            sugestoes: [
              "Desafio 'Eu consigo sozinho': execução de 2 AVDs escolhidas pela criança com dicas mínimas.",
              "Treino de resolução de pequenos problemas cotidianos (abrir garrafinha, limpar mesa).",
              "Estação de autocuidado com espelho para autoavaliação após lanche ou brincadeira."
            ]
          },
          {
            id: "avd_simulacao",
            label: "Simulação de rotina diária (banho, vestir, lanche etc.)",
            sugestoes: [
              "Brincadeira simbólica de 'dia completo' com boneco (acordar, banho seco, vestir, lanchar).",
              "Circuito funcional integrando troca de calçado, lavagem de mãos e preparo de lanche.",
              "Role-play de rotina escolar (arrumar mochila, abrir lancheira, organizar mesa)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "eixo_sensorial",
    titulo: "3 – Intervenções em Sistemas Sensoriais",
    notaLabel: "Observações / Estratégias de modulação:",
    subgrupos: [
      {
        nome: "Sistema Vestibular",
        itens: [
          {
            id: "vest_linear",
            label: "Estímulo vestibular linear (ex: balanço, rede, tábua de equilíbrio)",
            sugestoes: [
              "Balanço de plataforma ou lycra em movimento pendular rítmico e lento para organização sensorial.",
              "Deitado em prono na rede lançando saquinhos de areia em alvos no chão.",
              "Equilíbrio em tábua oscilante passando bola para o terapeuta."
            ]
          },
          {
            id: "vest_axial",
            label: "Estímulo vestibular axial (giro, rotação, scooter, prancha)",
            sugestoes: [
              "Giro controlado em balanço suspenso ou pião gigante com paradas para foco visual.",
              "Deslocamento em scooter em prono contornando cones em zigue-zague.",
              "Rolamento lateral em colchonete até alcançar peças de um quebra-cabeça."
            ]
          },
          {
            id: "vest_disritmado",
            label: "Estímulo vestibular disritmado / variado",
            sugestoes: [
              "Balanço com variações de velocidade e paradas súbitas associadas a comando verbal ('estátua').",
              "Percurso em cama elástica alternando saltos altos, baixos e pausas de equilíbrio.",
              "Transições de direção em prancha de equilíbrio com estímulo auditivo."
            ]
          },
          {
            id: "vest_bilateral",
            label: "Treino de coordenação bilateral através de estímulos vestibulares",
            sugestoes: [
              "No balanço em prono, puxar uma corda com ambas as mãos alternadamente para deslocar-se.",
              "Sentado na bola suíça, bater palmas ou encaixar argolas com as duas mãos.",
              "Scooter em prono realizando propulsão simultânea dos membros superiores."
            ]
          },
          {
            id: "vest_equilibrio",
            label: "Atividades de equilíbrio dinâmico",
            sugestoes: [
              "Caminhada sobre trave de equilíbrio ou linha no chão carregando objeto leve.",
              "Pedras de rio sensoriais (stepping stones) com diferentes alturas e inclinações.",
              "Circuito sobre almofadas instáveis e colchonetes para reações de retificação."
            ]
          },
          {
            id: "vest_transicoes",
            label: "Transições posturais (decúbito, quatro apoios, bípede, ajoelhado)",
            sugestoes: [
              "Jogo de pegar peças no chão em quatro apoios e levantar até a posição ajoelhada para encaixar.",
              "Túnel sensorial exigindo engatinhar e levantar-se em seguida para arremessar bola.",
              "Atividade de pintar em plano vertical partindo de sentado para semi-ajoelhado e bípede."
            ]
          },
          {
            id: "vest_movimento",
            label: "Brincadeiras de movimento (ex: circuito motor, escorrega, pular)",
            sugestoes: [
              "Circuito motor completo: escalar rampa, escorregar, pular arcos e finalizar em piscina de espuma.",
              "Amarelinha sensorial com saltos unipodais e bipodais.",
              "Corrida de obstáculos com passagens por baixo de barreiras e saltos."
            ]
          }
        ]
      },
      {
        nome: "Sistema Proprioceptivo",
        itens: [
          {
            id: "prop_empurrar",
            label: "Atividades de empurrar / puxar / carregar peso",
            sugestoes: [
              "Empurrar caixa pesada com almofadas/livros ('caminhão de mudanças') até a estação de trabalho.",
              "Puxar o terapeuta ou colega sentado em um lençol ou scooter usando corda.",
              "Transportar bolas medicinais leves ou sacos de areia para construir uma torre."
            ]
          },
          {
            id: "prop_resistencia",
            label: "Atividades de resistência corporal",
            sugestoes: [
              "Caminhada do caranguejo, urso ou carrinho de mão entre pontos da sala.",
              "Escalada em parede de escalada infantil ou rampa inclinada.",
              "Sustentação em prancha ventral enquanto realiza encaixes com uma das mãos."
            ]
          },
          {
            id: "prop_caminhar_carga",
            label: "Caminhar com carga / transporte de objetos",
            sugestoes: [
              "Uso de colete ou mochila com peso calibrado durante circuito de organização da sala.",
              "Carregar bandeja com copos plásticos ou blocos sem deixar cair.",
              "Transporte de almofadas grandes para montar uma cabana sensorial."
            ]
          },
          {
            id: "prop_compressao",
            label: "Compressão articular (atividades pesadas seguras)",
            sugestoes: [
              "Sanduíche terapêutico entre colchonetes com pressão profunda calibrada.",
              "Saltos na cama elástica seguidos de aterrissagem firme no colchonete.",
              "Rolar bola suíça sobre o tronco e membros da criança em decúbito ventral ('fazer pizza')."
            ]
          },
          {
            id: "prop_forca",
            label: "Jogos de força (ex: cabo de guerra, rolar bola pesada)",
            sugestoes: [
              "Cabo de guerra sentado no colchonete ou em pé para tração muscular intensa.",
              "Rolar bola suíça pesada contra a parede mantendo pressão constante.",
              "Amassar massa terapêutica de resistência média/alta para esconder e resgatar objetos."
            ]
          },
          {
            id: "prop_elasticos",
            label: "Uso de elásticos / theraband",
            sugestoes: [
              "Faixa elástica amarrada nos pés da cadeira para feedback proprioceptivo durante tarefa de mesa.",
              "Puxar theraband preso na parede como 'arco e flecha' ou 'remo'.",
              "Caminhar dentro de faixa elástica circular (body sock) explorando resistência corporal."
            ]
          }
        ]
      },
      {
        nome: "Sistema Tátil",
        itens: [
          {
            id: "tatil_caixa",
            label: "Caixa sensorial (areia, arroz, gel, espuma etc.)",
            sugestoes: [
              "Caça ao tesouro em caixa de arroz colorido ou feijão buscando miniaturas.",
              "Desenho e escrita sensorial em bandeja com espuma de barbear ou areia cinética.",
              "Exploração gradual com pincel ou colher antes do contato direto das mãos, se houver defensividade."
            ]
          },
          {
            id: "tatil_exploracao",
            label: "Atividades de exploração tátil com diferentes texturas",
            sugestoes: [
              "Trilha sensorial para os pés e mãos (tapetes ásperos, macios, gelados, rugosos).",
              "Colagem tátil criando um painel com algodão, lixa, papelão ondulado e tecido.",
              "Pintura a dedo ou com esponjas texturizadas em papel kraft."
            ]
          },
          {
            id: "tatil_discriminacao",
            label: "Atividades de discriminação tátil (adivinhar objetos, encontrar pares)",
            sugestoes: [
              "Saco surpresa (estereognosia): identificar objetos familiares apenas pelo tato sem olhar.",
              "Jogo da memória tátil pareando discos de texturas idênticas de olhos vendados.",
              "Encontrar letras ou números em relevo misturados em grãos."
            ]
          },
          {
            id: "tatil_desenho",
            label: "Tarefas de desenho tátil (na areia, espuma, etc.)",
            sugestoes: [
              "Traçado de formas geométricas e pré-escrita em bandeja de areia fina.",
              "Desenho nas costas ou palma da mão para a criança adivinhar a forma traçada.",
              "Modelagem de figuras em relevo sobre placa de massinha."
            ]
          },
          {
            id: "tatil_massagem",
            label: "Massagem profunda / escovação terapêutica (quando indicado)",
            sugestoes: [
              "Protocolo de pressão profunda firme em braços, costas e pernas antes de atividades de mesa.",
              "Uso de escova sensorial macia com compressão articular subsequente conforme tolerância.",
              "Automassagem com bolinhas cravo texturizadas."
            ]
          }
        ]
      },
      {
        nome: "Sistema Visual e Auditivo",
        itens: [
          {
            id: "vis_rastreamento",
            label: "Atividades de rastreamento visual (bolinhas, lanternas, jogos)",
            sugestoes: [
              "Caça com lanterna em sala penumbra seguindo o feixe de luz na parede.",
              "Acompanhar bolinhas de sabão e estourá-las com o dedo indicador.",
              "Pista de bolinhas (marble run) acompanhando o trajeto visualmente."
            ]
          },
          {
            id: "vis_visomotora",
            label: "Coordenação visomotora (alvo, encaixe, lançamento)",
            sugestoes: [
              "Arremesso de argolas ou saquinhos em alvos coloridos a diferentes distâncias.",
              "Jogo de pinos e encaixes seguindo modelo visual.",
              "Rebater balão no ar usando raquete leve ou as mãos."
            ]
          },
          {
            id: "vis_atencao",
            label: "Jogos de atenção visual (encontrar diferenças, sequência de cores)",
            sugestoes: [
              "Reproduzir sequência de blocos coloridos a partir de cartão-modelo.",
              "Jogo 'Lince' ou busca de figuras escondidas em prancha ilustrada.",
              "Pareamento de sombras e formas geométricas."
            ]
          },
          {
            id: "aud_ritmo",
            label: "Atividades rítmicas com estímulo auditivo (bater palmas, instrumentos)",
            sugestoes: [
              "Imitação de sequências rítmicas com tambor, clavas ou palmas.",
              "Dança das cadeiras ou estátua musical com variação de andamento (rápido/lento).",
              "Caminhar no ritmo do metrônomo ou batida de tambor."
            ]
          },
          {
            id: "sens_ambiente",
            label: "Controle de ambiente sensorial (redução de ruído ou estímulo visual excessivo)",
            sugestoes: [
              "Organização de mesa limpa (apenas o material da atividade atual visível) e iluminação suave.",
              "Uso de abafador de ruídos ou música branca suave durante tarefas de foco.",
              "Canto de descompressão sensorial com almofadas e tenda escura para autorregulação."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "eixo_praxias",
    titulo: "4 – Intervenções em Praxias e Coordenação",
    notaLabel: "Observações / Materiais utilizados:",
    subgrupos: [
      {
        nome: null,
        itens: [
          {
            id: "prax_ideacional",
            label: "Atividades para treino de praxis ideacional (planejar e sequenciar ações)",
            sugestoes: [
              "Construir uma 'ponte' ou 'casa' usando materiais não estruturados (caixas, tecidos, bambolês).",
              "Desafio de criar 3 formas diferentes de atravessar a sala sem tocar no chão.",
              "Brincadeira de montar cenário (fazenda, pista de carros) decidindo onde cada peça vai."
            ]
          },
          {
            id: "prax_imitacao",
            label: "Atividades de imitação de gestos / movimentos",
            sugestoes: [
              "Jogo do espelho: imitar posturas corporais e expressões faciais do terapeuta.",
              "Sequência de gestos com mãos e braços (tocar cabeça, ombro, bater palma).",
              "Imitação de movimentos de animais durante percurso motor."
            ]
          },
          {
            id: "prax_construtiva",
            label: "Treino de praxis construtiva (montar, empilhar, construir, sequenciar)",
            sugestoes: [
              "Construção de torres e estruturas com blocos de madeira ou Lego seguindo modelo 3D.",
              "Quebra-cabeça de peças geométricas (Tangram infantil).",
              "Montagem de pista de trem ou blocos magnéticos."
            ]
          },
          {
            id: "prax_sequencia",
            label: "Jogos de sequência motora (ex: siga o mestre, imite o gesto)",
            sugestoes: [
              "Siga o Mestre com 3 comandos motores encadeados (pular, girar, agachar).",
              "Circuito com pegadas e mãos coladas no chão indicando o lado direito/esquerdo.",
              "Jogo 'Genius' motor tocando cones coloridos na ordem solicitada."
            ]
          },
          {
            id: "prax_bilateral",
            label: "Treino de coordenação bilateral (movimentos alternados e simultâneos)",
            sugestoes: [
              "Polichinelos adaptados e marcha cruzada tocando mão direita no joelho esquerdo.",
              "Rasgar papel em tiras usando ambas as mãos em direções opostas.",
              "Abrir e fechar potes de rosca de tamanhos variados."
            ]
          },
          {
            id: "prax_postural",
            label: "Treino de ajuste postural durante movimento",
            sugestoes: [
              "Sentado em banco sem encosto ou bola suíça, alcançar objetos fora da base de apoio.",
              "Manter equilíbrio em um pé só enquanto chuta bola leve.",
              "Atividades em plano inclinado ou vertical exigindo estabilização escapular."
            ]
          },
          {
            id: "prax_ritmo",
            label: "Atividades de ritmo e tempo (batida, coordenação alternada)",
            sugestoes: [
              "Quicar bola no chão em ritmo constante alternando mão direita e esquerda.",
              "Pular corda balançando no chão ('cobrinha') calculando o tempo do salto.",
              "Jogo de copos rítmicos na mesa seguindo batida simples."
            ]
          },
          {
            id: "prax_obstaculos",
            label: "Jogos motores com obstáculos (planejamento motor global)",
            sugestoes: [
              "Pista de obstáculos variada exigindo passar por cima, por baixo, contornar e escalar.",
              "Teia de aranha com barbante no corredor para atravessar sem encostar nos fios.",
              "Transporte de peças de quebra-cabeça através de circuito motor."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "eixo_escolar",
    titulo: "5 – Intervenções em Funções Escolares / Coordenação Motora Fina",
    notaLabel: "Observações / Progressos observados:",
    subgrupos: [
      {
        nome: null,
        itens: [
          {
            id: "esc_preensao",
            label: "Treino de preensão funcional (lápis, pinça, tesoura)",
            sugestoes: [
              "Uso de giz de cera curto ou quebrado para estimular naturalmente a pinça trípode.",
              "Transferência de pompons com pegador/pinça culinária segurando bolinha na palma com dedos anelar e mínimo.",
              "Uso de adaptador ergonômico de lápis em atividades curtas de traçado."
            ]
          },
          {
            id: "esc_olho_mao",
            label: "Atividades de coordenação olho-mão (encaixe, recorte, colagem)",
            sugestoes: [
              "Alinhavo em cartões perfurados com cadarço.",
              "Colagem de pequenos pedaços de papel crepom (bolinhas) sobre contorno de desenho.",
              "Encaixe de palitos em fendas estreitas de pote plástico."
            ]
          },
          {
            id: "esc_tesoura",
            label: "Cortar com tesoura (linhas, formas, figuras)",
            sugestoes: [
              "Picotar tiras de papel firme (cartolina) para facilitar estabilidade inicial da tesoura.",
              "Recorte sobre linhas retas largas evoluindo para curvas e zigue-zague.",
              "Recortar rolinhos de massinha com tesoura infantil."
            ]
          },
          {
            id: "esc_colorir",
            label: "Colorir dentro dos limites / controle de traçado",
            sugestoes: [
              "Colorir figuras com contorno em relevo (cola quente seca ou barbante) para feedback tátil.",
              "Pintura em áreas pequenas usando cotonete ou pincel fino.",
              "Labirintos no papel sem encostar nas bordas."
            ]
          },
          {
            id: "esc_escrita",
            label: "Escrita / treino gráfico (letras, traços, formas)",
            sugestoes: [
              "Treino de movimentos pré-gráficos (ondas, laçadas, zigue-zague) em lousa vertical.",
              "Traçado de letras em papel pautado com destaque visual na linha de base.",
              "Cópia de formas geométricas básicas (círculo, cruz, quadrado, triângulo)."
            ]
          },
          {
            id: "esc_modelagem",
            label: "Modelagem (massinha, argila, bolinhas)",
            sugestoes: [
              "Fazer bolinhas apenas com a ponta dos dedos (polegar, indicador e médio).",
              "Modelar letras ou animais usando 'cobrinhas' de massinha.",
              "Esconder e apertar botões dentro da massinha para fortalecimento intrínseco da mão."
            ]
          },
          {
            id: "esc_blocos",
            label: "Montagem de blocos, jogos de enroscar, pinçar objetos",
            sugestoes: [
              "Parafusos e porcas plásticos para treino de rotação de punho e pinça.",
              "Empilhamento de blocos pequenos exigindo controle fino de força.",
              "Jogo 'Pega-varetas' ou 'Pescaria magnética' com controle de pulso."
            ]
          },
          {
            id: "esc_organizacao",
            label: "Atividades de atenção e organização de material escolar",
            sugestoes: [
              "Treino de apontar lápis, usar borracha estabilizando a folha com a mão não dominante.",
              "Organizar estojo e caderno antes e depois da tarefa de mesa.",
              "Atividades de mesa com temporizador visual (ampulheta ou timer) para sustentação atencional."
            ]
          },
          {
            id: "esc_jogos_mesa",
            label: "Jogos de mesa (encaixe, puzzle, sequência)",
            sugestoes: [
              "Quebra-cabeça de 12 a 24 peças trabalhando análise visual e rotação de peças.",
              "Dominó de figuras/cores ou jogo da memória.",
              "Sequência lógica com cartões ilustrados."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "eixo_alimentar",
    titulo: "6 – Intervenções para Seletividade Alimentar",
    notaLabel: "Observações / Alimentos utilizados:",
    subgrupos: [
      {
        nome: null,
        itens: [
          {
            id: "alim_exposicao",
            label: "Exposição gradual a novos alimentos",
            sugestoes: [
              "Escada do comer (SOS Approach): tolerar o alimento no prato auxiliar sem pressão para ingerir.",
              "Apresentar 1 alimento novo ao lado de 2 alimentos seguros já aceitos pela criança.",
              "Brincar de 'cientista dos alimentos' observando cor, formato e tamanho."
            ]
          },
          {
            id: "alim_exploracao",
            label: "Exploração sensorial com alimentos (tocar, cheirar, lamber, provar)",
            sugestoes: [
              "Carimbos com frutas/legumes (maçã, batata) usando iogurte ou purê como tinta.",
              "Cheirar especiarias e frutas de olhos fechados para adivinhar o aroma.",
              "Beijar ou encostar o alimento nos lábios/língua como desafio lúdico sem obrigação de engolir."
            ]
          },
          {
            id: "alim_textura",
            label: "Atividades de textura (pastoso, crocante, líquido, sólido)",
            sugestoes: [
              "Comparação lúdica de sons: 'qual alimento faz mais barulho ao quebrar?' (biscoito, maçã, cenoura).",
              "Manipulação de alimentos úmidos/pastosos com utensílios (palito, garfo) evoluindo para dedos.",
              "Montar espetinho colorido intercalando texturas macias e crocantes."
            ]
          },
          {
            id: "alim_coloridos",
            label: "Jogo sensorial com alimentos coloridos",
            sugestoes: [
              "Criar um 'arco-íris no prato' ou rosto divertido usando frutas e vegetais picados.",
              "Separação de alimentos por cor em forminhas de silicone.",
              "Preparo de vitamina ou suco colorido participando da escolha dos ingredientes."
            ]
          },
          {
            id: "alim_ambiente",
            label: "Organização do ambiente de alimentação (postura, utensílios, ritmo)",
            sugestoes: [
              "Ajuste ergonômico da cadeira garantindo apoio firme dos pés a 90 graus.",
              "Uso de prato com divisórias para evitar que alimentos de texturas diferentes se misturem.",
              "Estabelecer ritual de início e fim da refeição (lavar mãos, sentar, guardar prato)."
            ]
          },
          {
            id: "alim_oral",
            label: "Treino de coordenação oral (soprar, mastigar, lamber, engolir)",
            sugestoes: [
              "Corrida de bolinhas de algodão ou bolhas de sabão com canudo para controle de sopro.",
              "Lamber iogurte ou mel no canto dos lábios para mobilidade lingual.",
              "Treino de mastigação lateral com alimentos firmes em tiras."
            ]
          },
          {
            id: "alim_dessensibilizacao",
            label: "Estratégias de dessensibilização tátil-oral",
            sugestoes: [
              "Brincadeiras tácteis próximas à face (pintura facial suave, sopro, vibrador facial lúdico).",
              "Uso de mordedores sensoriais texturizados antes da apresentação alimentar.",
              "Escovação suave das mãos e antebraços antes do contato com alimentos."
            ]
          },
          {
            id: "alim_registro",
            label: "Registro de aceitação / recusa alimentar",
            sugestoes: [
              "Quadro de estrelas/carinhas onde a própria criança marca até qual etapa explorou (olhou, tocou, cheirou, provou).",
              "Mapear gatilhos sensoriais (cheiro forte, temperatura, mistura de texturas) observados na sessão."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "eixo_socializacao",
    titulo: "7 – Intervenções em Socialização e Regulação",
    notaLabel: "Observações / Comportamento durante sessão:",
    subgrupos: [
      {
        nome: null,
        itens: [
          {
            id: "soc_grupo",
            label: "Atividades de grupo / pares (jogos cooperativos, turnos)",
            sugestoes: [
              "Construção conjunta de torre ou circuito onde cada um coloca uma peça por vez.",
              "Jogo de tabuleiro simples com espera de turno ('minha vez / sua vez').",
              "Segurar lençol em dupla para balançar uma bola sem deixar cair."
            ]
          },
          {
            id: "soc_atencao",
            label: "Treino de atenção compartilhada",
            sugestoes: [
              "Brincadeira de bolhas de sabão fazendo pausa antes de soprar para aguardar contato visual/gesto.",
              "Apontar figuras em livro interativo compartilhando descobertas.",
              "Brinquedo de causa e efeito (pista de carrinhos) alternando o lançamento."
            ]
          },
          {
            id: "soc_imitacao",
            label: "Atividades de imitação social (saudações, gestos, turnos)",
            sugestoes: [
              "Rotina lúdica de chegada e despedida (toca aqui, tchau, aceno).",
              "Músicas gestuais interativas ('Cabeça, ombro, joelho e pé', 'Se você está contente').",
              "Imitação de ações cotidianas em brincadeira de casinha."
            ]
          },
          {
            id: "soc_simbolico",
            label: "Jogos simbólicos / faz de conta",
            sugestoes: [
              "Brincadeira de médico/veterinário cuidando de bichos de pelúcia.",
              "Mercadinho ou cozinha fazendo compras e servindo lanches.",
              "Teatro de fantoches explorando situações sociais simples."
            ]
          },
          {
            id: "soc_autorregulacao",
            label: "Estratégias de autorregulação emocional",
            sugestoes: [
              "Termômetro das emoções visual para identificar quando está calmo, agitado ou frustrado.",
              "Treino de respiração profunda ('cheirar a flor e soprar a vela') com apoio visual.",
              "Caixa da calma com recursos sensoriais escolhidos pela criança (fidgets, livro, fone)."
            ]
          },
          {
            id: "soc_historias",
            label: "Uso de histórias sociais ou cartões visuais",
            sugestoes: [
              "Leitura de história social personalizada sobre compartilhar brinquedos ou lidar com mudanças.",
              "Uso de cartões de comunicação alternativa/apoio visual para pedir pausa ('preciso de um tempo').",
              "Quadro 'Primeiro -> Depois' para motivar tarefas mais exigentes."
            ]
          },
          {
            id: "soc_rotina",
            label: "Estratégias de rotina previsível e transição suave",
            sugestoes: [
              "Uso de timer visual (ampulheta ou relógio regressivo) avisando 2 minutos antes de trocar de atividade.",
              "Música ou ritual de guardar brinquedos marcando o encerramento de cada etapa.",
              "Agenda visual na parede da sala para a criança tirar o cartão a cada atividade concluída."
            ]
          },
          {
            id: "soc_frustracao",
            label: "Treino de tolerância a frustrações / limites",
            sugestoes: [
              "Jogos de regras simples onde ganhar e perder acontecem rapidamente (ex: Jogo da Velha, Uno adaptado).",
              "Modelagem de resposta alternativa quando algo dá errado ('tentar de novo' ou 'pedir ajuda').",
              "Negociação guiada de escolhas limitadas (opção A ou opção B)."
            ]
          }
        ]
      }
    ]
  }
];

// Lista inicial de 46 pacientes já embutida no aplicativo
const PACIENTES_INICIAIS = [
  {
    "id": "pac_import_001",
    "nome": "Bernardo Gabriel da Silva",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_002",
    "nome": "Bernardo Marinho Mota",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_003",
    "nome": "Bernardo Martins de Castro",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_004",
    "nome": "Bernardo Santos de Queiroz",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_005",
    "nome": "Brayan de Barros Simioni",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: PARTICULAR",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_006",
    "nome": "Davi Lucas Mendes Romano",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SANTA TEREZA",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_007",
    "nome": "Davi Milan Mattos",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_008",
    "nome": "Fabricio Prado Brocanelli",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 2,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_009",
    "nome": "Felipe Althman Tonussi",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 2,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_010",
    "nome": "Felipe Gomes Gianelli",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_011",
    "nome": "Felipe Goncalves Italo",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_012",
    "nome": "Felipe Modesto",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_013",
    "nome": "Felipe Riper Nunes",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_014",
    "nome": "Gabriel Torraca Baião",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_015",
    "nome": "Gael Levi Paes Araújo",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_016",
    "nome": "Gael Maia Reis da Silva",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: AMIL",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_017",
    "nome": "Heitor Vieira de Oliveira",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_018",
    "nome": "Helena Fuzati Barbosa",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_019",
    "nome": "Isaque Valadão de Souza",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 2,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SANTA TEREZA",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_020",
    "nome": "Joshua Canellato",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_021",
    "nome": "João Gabriel Barboza de Souza",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_022",
    "nome": "João Miguel de Lima Olimpio",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 2,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_023",
    "nome": "João Pedro Scarparo Cintra",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_024",
    "nome": "João Vitor Rodrigues Cardoso",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_025",
    "nome": "Julia Pereira de Morais",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 2,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_026",
    "nome": "Lucas Pardinho Paulino",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Sala: 13",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_027",
    "nome": "Luisa Ginetti Damasceno",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_028",
    "nome": "Luiza Soares Daros",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_029",
    "nome": "Manuela Taver Monari",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_030",
    "nome": "Maria Vitoria Pereira dos Santos",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_031",
    "nome": "Marlos Ryan Fernandes",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_032",
    "nome": "Matheus Mestre de Moura",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_033",
    "nome": "Matheus Teixeira Martins",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_034",
    "nome": "Miguel Cordeiro Belisario",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: PARTICULAR",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_035",
    "nome": "Miguel Marino José",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SÃO LUCAS",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_036",
    "nome": "Miguel Milan Mattos",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_037",
    "nome": "Nicolas Lahr Rocha",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_038",
    "nome": "Noah de Freitas Silva",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 2,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_039",
    "nome": "Pedro Braga Bersani",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 2,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SUL AMÉRICA | Sala: 12",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_040",
    "nome": "Rafaela Salvato Cestari",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Sala: 14",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_041",
    "nome": "Sarah de Sousa Castro",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SUL AMÉRICA",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_042",
    "nome": "Sophia Bassani",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Sala: 12",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_043",
    "nome": "Teodoro Ragazzi Calazans",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Sala: 12",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_044",
    "nome": "Théo José da Silva Barreto",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Sala: 12 | Foco observado: Práxis e planejamento motor",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_045",
    "nome": "Wellington Júnior Alves Carrasco",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 1,
    "duracao": "40 Min.",
    "observacoes": "Convênio: UNIMED",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  },
  {
    "id": "pac_import_046",
    "nome": "Yuri Azuma",
    "idade": "",
    "terapeuta": "Flavia Cherotti",
    "frequencia": 2,
    "duracao": "40 Min.",
    "observacoes": "Convênio: SAVI",
    "plano": {
      "itensAtivos": [],
      "notasPorEixo": {}
    },
    "registros": []
  }
];
