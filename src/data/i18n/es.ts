import type { Messages } from './pt';

export const es: Messages = {
    skipLink: 'Saltar al contenido',
    announcement: 'Pequeñas pausas. Mucho sabor. Un toque de amor.',
    illustrative: 'Imagen ilustrativa',
    header: {
        logoAlt: 'Cevateria Brasil, inicio',
        navLabel: 'Menú principal',
        nav: {
            products: 'Nuestras cápsulas',
            essence: 'Nuestra esencia',
            howItWorks: 'Cómo funciona',
            faq: 'Preguntas frecuentes',
        },
        myOrder: 'Mi pedido',
        openCart: (count: number) => `Abrir mi pedido, ${count} ${count === 1 ? 'artículo' : 'artículos'}`,
        openMenu: 'Abrir menú',
        closeMenu: 'Cerrar menú',
    },
    hero: {
        eyebrow: 'Un nuevo ritual de sabor',
        titleLines: ['Una pausa.', 'Un abrazo.'],
        titleEmphasis: ['Cebada con', 'chocolate.'],
        intro: 'El encuentro del sabor de la cebada con el cariño del chocolate. En cápsulas, para hacer de los pequeños momentos la mejor parte del día.',
        cta: 'Encuentra tu próxima pausa',
        whatsapp: 'Hablar por WhatsApp',
        priceFrom: 'Desde',
        pricePer: (productName: string) => `por cápsula en el ${productName.toLowerCase()}`,
        imageAlt: 'Taza de bebida caliente sobre una mesa de madera, junto a un bol con cápsulas doradas',
        badge: 'CEBADA + CHOCOLATE',
        badgeQuote: 'Un encuentro lleno de sabor.',
    },
    values: {
        wheat: 'Cebada y chocolate',
        capsule: 'Tu ritual en cápsulas',
        heart: 'Más sabor para tu pausa',
        chat: 'Pedidos por WhatsApp',
    },
    product: {
        name: (capsules: number) => (capsules === 1 ? 'Cápsula individual' : `Kit de ${capsules} cápsulas`),
        alt: (capsules: number) =>
            capsules === 1
                ? 'Una cápsula de cebada con chocolate'
                : `Kit de ${capsules} cápsulas de cebada con chocolate`,
        unit: (capsules: number) => (capsules === 1 ? '1 cápsula' : `${capsules} cápsulas por kit`),
    },
    products: {
        eyebrow: 'Pequeña cápsula, gran momento',
        title: 'Tu próximo sabor favorito.',
        asideLines: ['Una para probar.', 'Un kit para enamorarte.'],
        chooseEyebrow: 'Elige tu pausa',
        chooseTitle: 'Un cariño.',
        chooseEmphasis: 'Muchos momentos.',
        chooseIntro: 'De la primera cápsula a tu kit favorito: elige la cantidad que va contigo.',
        optionsLabel: 'Selecciona una opción',
        quantityLabel: 'cantidad',
        add: 'Agregar a mi pedido',
        added: (productName: string) => `${productName} en el pedido. Revísalo en “Mi pedido”.`,
        note: 'Envío y disponibilidad a coordinar. Confirma la compatibilidad antes de comprar.',
    },
    essence: {
        imageAlt: 'Persona leyendo un libro junto a la ventana, con una taza caliente y dos cápsulas al lado',
        quoteLines: ['un poco de calma,', 'una dosis de cariño.'],
        eyebrow: 'Nuestra esencia',
        titleStart: 'La vida sucede',
        titleEnd: 'entre',
        titleEmphasis: 'una pausa y otra.',
        paragraphs: [
            'La primera conversación de la mañana. La compañía de un buen libro. Ese respiro a media tarde. Creemos que los momentos simples merecen un sabor especial.',
            'Por eso la cebada y el chocolate se encuentran aquí: para invitarte a bajar el ritmo y saborear el ahora.',
        ],
        link: 'Conoce esta combinación',
    },
    howItWorks: {
        eyebrow: 'A tu manera, sin complicaciones',
        titleStart: 'Tu pedido empieza',
        titleEnd: 'con un',
        titleEmphasis: 'hola.',
        imageAlt: 'Manos sosteniendo un celular junto a una caja de regalo y cápsulas doradas',
        steps: [
            {
                title: 'Elige tus cápsulas',
                description: 'Agrega la cápsula individual o tus kits favoritos al pedido.',
            },
            {
                title: 'Conversa con nosotros',
                description: 'Envía el resumen por WhatsApp y confirma disponibilidad y pago.',
            },
            {
                title: 'Coordina la entrega',
                description: 'Indica tu CEP para consultar cobertura, plazo y costo del envío.',
            },
        ],
    },
    faq: {
        eyebrow: '¿Te ayudamos?',
        titleStart: 'Antes de tu',
        titleEnd: 'primera',
        titleEmphasis: 'pausa.',
        contact: 'Habla con nosotros',
        items: [
            {
                question: '¿Cómo hago mi pedido?',
                answer: 'Elige una opción, ajusta la cantidad y agrégala al pedido. Abre “Mi pedido” y envía el resumen por WhatsApp. La compra se confirma en la atención, después de coordinar los detalles.',
            },
            {
                question: '¿Las cápsulas funcionan en mi máquina?',
                answer: 'Confirma la compatibilidad antes de comprar. Envía la marca y el modelo de tu máquina por WhatsApp para recibir la orientación correcta.',
            },
            {
                question: '¿Qué opciones hay disponibles?',
                answer: 'Tenemos cápsula individual y kits de 4, 6, 8 o 10 cápsulas de cebada con chocolate. Los precios de cada opción aparecen al seleccionar el producto. Consulta la disponibilidad en la atención.',
            },
            {
                question: '¿Cómo consulto la entrega y el pago?',
                answer: 'Envía tu CEP por WhatsApp para confirmar cobertura, plazo y costo del envío. Las formas de pago se coordinan en la atención. El sitio no cobra ni confirma pagos.',
            },
            {
                question: '¿Dónde consulto ingredientes y alérgenos?',
                answer: 'Pide la foto de la etiqueta y la lista completa de ingredientes antes de comprar. La cebada contiene gluten; revisa los demás alérgenos en el empaque.',
            },
        ],
    },
    finalCta: {
        titleStart: 'Tu próxima pausa',
        titleEnd: 'puede tener',
        titleEmphasis: 'este sabor.',
        cta: 'Elegir mis cápsulas',
        note: 'Cebada, chocolate y una buena conversación.',
    },
    footer: {
        taglineLines: ['Cápsulas de cebada con chocolate.', 'Pequeñas pausas, buenos momentos.'],
        faq: 'Preguntas frecuentes',
        rights: 'Todos los derechos reservados.',
        developedBy: 'Desarrollado por',
    },
    quantity: {
        decrease: (label: string) => `Disminuir ${label}`,
        increase: (label: string) => `Aumentar ${label}`,
    },
    cart: {
        eyebrow: 'Tu próxima pausa',
        title: 'Mi pedido',
        close: 'Cerrar mi pedido',
        each: 'cada uno',
        remove: 'Quitar',
        removeLabel: (productName: string) => `Quitar ${productName}`,
        emptyTitle: 'Tu pausa empieza aquí.',
        emptyText: 'Elige tus cápsulas y agrégalas al pedido.',
        emptyCta: 'Explorar las cápsulas',
    },
    checkout: {
        subtotal: 'Subtotal',
        shipping: 'Envío a coordinar por WhatsApp.',
        optional: '(opcional)',
        name: 'Tu nombre',
        namePlaceholder: '¿Cómo te llamamos?',
        cep: 'CEP para consultar la entrega',
        cepError: 'Ingresa un CEP de 8 dígitos o deja el campo vacío.',
        send: 'Enviar pedido por WhatsApp',
        note: 'Al enviarlo se abre una conversación con el mensaje en portugués, el idioma de la atención. Disponibilidad, costo de envío y pago se confirman ahí.',
    },
};
