export const perguntas = [
    {
        enunciado: "Ao pesquisar alguma musica para ouvir você encontra uma musica chamada pink pony club ela te chama atenção?",
        alternativas: [
            {
                texto: "Chama, adorei!",
                afirmacao: ["Logo de início ja gostou do nome.", 
                    "A primeira impressão ja foi boa"
                ],
                proxima: 1,
            },
            {
                texto: "Não, achei o nome estranho",
                afirmacao: [ "A primeira impressão nao foi das melhores." 
                ], 
                proxima: 2,
            
            }
        ]
    },
    {
        enunciado: "Por curiosidade você decide ouvir a musica, oque achou dela? ",
        alternativas: [
            {
                texto: "amei muito boa",
                afirmacao: [ "ao ouvir a musica achou espetacular, ja quis adicionar na playlist.",
                    "ouvindo a musica logo percebeu que era do seu estilo" 
                ],
                proxima: 3,
            },
            {
                texto: "odiei muito paia",
                afirmacao: ["ao ouvir descobriu que seu gosto musical nao é refinado o suficiente para aprecia-la."
                ],
                proxima: 4,
            }
        ]
    },
    {
        enunciado: "Pesquisando mais sobre a cantora, você descobre que ela se chama chappel roan e tem uma estetica muito singular, oque pensa sobre isso?",
        alternativas: [
            {
                texto: "muito é massa, achei muito diva.",
                afirmacao: [ "e quando pesquisa mais sobre a cantora percebe que ela é muito altentica,e realmente aprecia o seu estilo."
                ],
                proxima: 3,
            },
            {
                texto: "esquisito...",
                afirmacao: [ "e quando pesquisa mais sobre a cantora, acaba achando seu forma de se portar estranha, não consegue se identificar com o que ela canta"
                ],
                proxima: 4,

                }
        ]
    },
    {
        enunciado: "seu amigo vem até você e diz que esta juntando dinheiro para ir ao show dela (que custa bem caro) como tu reage",
        alternativas: [
            {
                texto: "digo a meu amigo para achar algo melhor para gastar seu dinheirinho.",
                afirmacao: [ "chega a conclusão de que ela não vale um grande gasto de dinheiro."
                ],
                proxima: 5,
            },
            {
                texto: "faço de tudo para conseguir dinheiro para ir no show dela também.",
                afirmacao: [ "Tornou ir a seus show um de seus objetivos principais e assim foi muito mais feliz em sua vida."                   
                ],
                proxima: 6,
            }
        ]
    },
    {
        enunciado: "chappel? ",
        alternativas: [
            {
                texto: "roan.",
                afirmacao:[ "você agora é um fã de chappel roan." ]
            },
            {
                texto: "chega dessa mulher.",
                afirmacao: ["o nome desta famosa apareceu tanto em ua vida que você pegou raiva. "]
            }
        ]
    },
];