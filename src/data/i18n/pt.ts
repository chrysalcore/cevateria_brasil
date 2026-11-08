export const pt = {
    skipLink: 'Pular para o conteúdo',
    announcement: 'Pequenas pausas. Muito sabor. Um toque de amor.',
    illustrative: 'Imagem ilustrativa',
    header: {
        logoAlt: 'Cevateria Brasil, início',
        navLabel: 'Menu principal',
        nav: {
            products: 'Nossas cápsulas',
            essence: 'Nossa essência',
            howItWorks: 'Como funciona',
            faq: 'Dúvidas frequentes',
        },
        myOrder: 'Meu pedido',
        openCart: (count: number) => `Abrir meu pedido, ${count} ${count === 1 ? 'item' : 'itens'}`,
        openMenu: 'Abrir menu',
        closeMenu: 'Fechar menu',
    },
    hero: {
        eyebrow: 'Um novo ritual de sabor',
        titleLines: ['Uma pausa.', 'Um abraço.'],
        titleEmphasis: ['Cevada com', 'chocolate.'],
        intro: 'O encontro do sabor da cevada com o carinho do chocolate. Em cápsulas, para fazer dos pequenos momentos a melhor parte do dia.',
        cta: 'Encontre sua próxima pausa',
        whatsapp: 'Falar no WhatsApp',
        priceFrom: 'A partir de',
        pricePer: (productName: string) => `por cápsula no ${productName.toLowerCase()}`,
        imageAlt: 'Xícara de bebida quente sobre a mesa de madeira, ao lado de uma tigela com cápsulas douradas',
        badge: 'CEVADA + CHOCOLATE',
        badgeQuote: 'Um encontro cheio de sabor.',
    },
    values: {
        wheat: 'Cevada e chocolate',
        capsule: 'Seu ritual em cápsulas',
        heart: 'Mais sabor para sua pausa',
        chat: 'Pedidos pelo WhatsApp',
    },
    product: {
        name: (capsules: number) => (capsules === 1 ? 'Cápsula individual' : `Kit com ${capsules} cápsulas`),
        alt: (capsules: number) =>
            capsules === 1
                ? 'Uma cápsula de cevada com chocolate'
                : `Kit com ${capsules} cápsulas de cevada com chocolate`,
        unit: (capsules: number) => (capsules === 1 ? '1 cápsula' : `${capsules} cápsulas por kit`),
    },
    products: {
        eyebrow: 'Pequena cápsula, grande momento',
        title: 'Seu próximo sabor favorito.',
        asideLines: ['Uma para experimentar.', 'Um kit para se apaixonar.'],
        chooseEyebrow: 'Escolha sua pausa',
        chooseTitle: 'Um carinho.',
        chooseEmphasis: 'Vários momentos.',
        chooseIntro: 'Da primeira cápsula ao seu kit favorito: escolha a quantidade que combina com você.',
        optionsLabel: 'Selecione uma opção',
        quantityLabel: 'quantidade',
        add: 'Adicionar ao meu pedido',
        added: (productName: string) => `${productName} no pedido. Confira em “Meu pedido”.`,
        note: 'Frete e disponibilidade a combinar. Confirme a compatibilidade antes da compra.',
    },
    essence: {
        imageAlt: 'Pessoa lendo um livro junto à janela, com uma xícara quente e duas cápsulas ao lado',
        quoteLines: ['um pouco de calma,', 'uma dose de carinho.'],
        eyebrow: 'Nossa essência',
        titleStart: 'A vida acontece',
        titleEnd: 'entre',
        titleEmphasis: 'uma pausa e outra.',
        paragraphs: [
            'A primeira conversa da manhã. A companhia de um bom livro. Aquele respiro no meio da tarde. Acreditamos que os momentos simples merecem um sabor especial.',
            'É por isso que cevada e chocolate se encontram por aqui: para convidar você a desacelerar e saborear o agora.',
        ],
        link: 'Conheça essa combinação',
    },
    howItWorks: {
        eyebrow: 'Do seu jeito, sem complicação',
        titleStart: 'Seu pedido começa',
        titleEnd: 'com um',
        titleEmphasis: 'olá.',
        imageAlt: 'Mãos segurando um celular ao lado de uma caixa de presente e cápsulas douradas',
        steps: [
            {
                title: 'Escolha suas cápsulas',
                description: 'Adicione a cápsula individual ou seus kits favoritos ao pedido.',
            },
            {
                title: 'Converse com a gente',
                description: 'Envie o resumo pelo WhatsApp e confirme disponibilidade e pagamento.',
            },
            {
                title: 'Combine a entrega',
                description: 'Informe seu CEP para consultar cobertura, prazo e valor do frete.',
            },
        ],
    },
    faq: {
        eyebrow: 'Podemos ajudar?',
        titleStart: 'Antes da',
        titleEnd: 'primeira',
        titleEmphasis: 'pausa.',
        contact: 'Converse com a gente',
        items: [
            {
                question: 'Como faço meu pedido?',
                answer: 'Escolha uma opção, ajuste a quantidade e adicione ao pedido. Abra “Meu pedido” e envie o resumo pelo WhatsApp. A compra é confirmada no atendimento, após combinar os detalhes.',
            },
            {
                question: 'As cápsulas funcionam na minha máquina?',
                answer: 'Confirme a compatibilidade antes de comprar. Envie a marca e o modelo da sua máquina pelo WhatsApp para receber a orientação correta.',
            },
            {
                question: 'Quais opções estão disponíveis?',
                answer: 'Temos cápsula individual e kits com 4, 6, 8 ou 10 cápsulas de cevada com chocolate. Os valores de cada opção aparecem na seleção do produto. Consulte a disponibilidade no atendimento.',
            },
            {
                question: 'Como consulto a entrega e o pagamento?',
                answer: 'Envie seu CEP no WhatsApp para confirmar cobertura, prazo e frete. As formas de pagamento são combinadas no atendimento. O site não cobra nem confirma pagamentos.',
            },
            {
                question: 'Onde consulto ingredientes e alergênicos?',
                answer: 'Peça a foto do rótulo e a lista completa de ingredientes antes da compra. A cevada contém glúten; confira os demais alergênicos na embalagem.',
            },
        ],
    },
    finalCta: {
        titleStart: 'Sua próxima pausa',
        titleEnd: 'pode ter',
        titleEmphasis: 'esse sabor.',
        cta: 'Escolher minhas cápsulas',
        note: 'Cevada, chocolate e uma boa conversa.',
    },
    footer: {
        taglineLines: ['Cápsulas de cevada com chocolate.', 'Pequenas pausas, bons momentos.'],
        faq: 'Dúvidas frequentes',
        rights: 'Todos os direitos reservados.',
        developedBy: 'Desenvolvido por',
    },
    quantity: {
        decrease: (label: string) => `Diminuir ${label}`,
        increase: (label: string) => `Aumentar ${label}`,
    },
    cart: {
        eyebrow: 'Sua próxima pausa',
        title: 'Meu pedido',
        close: 'Fechar meu pedido',
        each: 'cada',
        remove: 'Remover',
        removeLabel: (productName: string) => `Remover ${productName}`,
        emptyTitle: 'Sua pausa começa aqui.',
        emptyText: 'Escolha suas cápsulas e adicione ao pedido.',
        emptyCta: 'Explorar as cápsulas',
    },
    checkout: {
        subtotal: 'Subtotal',
        shipping: 'Frete a combinar pelo WhatsApp.',
        optional: '(opcional)',
        name: 'Seu nome',
        namePlaceholder: 'Como podemos chamar você?',
        cep: 'CEP para consultar entrega',
        cepError: 'Informe um CEP com 8 dígitos ou deixe o campo vazio.',
        send: 'Enviar pedido pelo WhatsApp',
        note: 'O envio abre uma conversa. Disponibilidade, frete e pagamento são confirmados no atendimento.',
    },
};

export type Messages = typeof pt;
