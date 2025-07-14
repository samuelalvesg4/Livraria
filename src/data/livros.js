// data/livros.js

const Livros = [
    {
        id:'livro-1',
        titulo:'O Guia do Mochileiro das Galáxias',
        descricao: "Esta obra combina a profundidade atemporal das Escrituras com um design moderno, tornando a leitura acessível, bela e impactante, com mensagens de esperança e fé que atravessam gerações e transformam corações.",
        preco: 35.90,
        categoria:'ficcao',
        imagem:"img/biblia preta ntlh.webp", // CORRIGIDO: Apenas uma string
        maisVendido: true,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-2',
        titulo:'1984',
        descricao: "É uma obra aprofundada que analisa as interações entre a retórica e a teologia nas epístolas de Paulo, oferecendo reflexões valiosas sobre seu pensamento e sua mensagem para a igreja primitiva e atual.",
        preco: 42.50,
        categoria:'distopia',
        imagem:"img/cartas de paulo.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: true,
        novo: false,
    },
    {
        id:'livro-3',
        titulo:'Cem Anos de Solidão',
        descricao: "Em Forte, Lisa Bevere apresenta devocionais que inspiram uma vida firme na fé, ajudando o leitor a descobrir o verdadeiro significado da força espiritual e a enfrentar os desafios com coragem e sabedoria.",
        preco: 55.00,
        categoria:'realismo magico',
        imagem:"img/forte devocional.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: true,
        novo: true,
    },
    {
        id:'livro-4',
        titulo:'Dom Quixote',
        descricao: "Lucien Cerfaux analisa o pensamento paulino sobre o “mistério” de Cristo, revelando o que significa ser cristão segundo as epístolas, numa abordagem teológica profunda e acessível ao público estudioso e leigo.",
        preco: 60.00,
        categoria:'classicos',
        imagem:"img/ocristao na teologia de paulo.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-5',
        titulo:'O Pequeno Príncipe',
        descricao: "Rodrigo Bibo nos desafia a repensar nossos planos e sonhos diante da vontade soberana de Deus, mostrando que seguir a Cristo é abandonar expectativas humanas e confiar plenamente no propósito divino.",
        preco: 25.00,
        categoria:'infantil',
        imagem:"img/oDeusqdestroi.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-6',
        titulo:'Crime e Castigo',
        descricao: "John Bunyan narra a jornada espiritual de Cristão rumo à Cidade Celestial. Uma alegoria da fé, repleta de desafios, encontros e lições que inspiram os leitores a refletirem sobre sua caminhada com Deus.",
        preco: 55.00,
        categoria:'classicos',
        imagem:"img/operegrino.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: true,
        novo: false,
    },
    {
        id:'livro-7',
        titulo:'Orgulho e Preconceito',
        descricao: "Luciano Subirá mostra como o relacionamento com Deus deve ser transformado, baseado na Palavra, revelando que, embora indignos, somos amados por Ele. Um convite à entrega total ao Senhor em verdade e espírito.",
        preco: 68.00,
        categoria:'romance',
        imagem:"img/ateqnadamais importe.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-8',
        titulo:'A Revolução dos Bichos',
        descricao: "Com linguagem intensa e profunda, Jonathan Edwards apresenta sermões impactantes que revelam a seriedade do juízo divino, levando os ouvintes a uma reflexão sincera sobre a salvação e a graça de Deus.",
        preco: 29.90,
        categoria:'distopia',
        imagem:"img/pecadores nas maos de um.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-9',
        titulo:'O Senhor dos Anéis',
        descricao: "é um convite para transformar sua forma de lidar com as preocupações e encontrar refúgio no Senhor. Com uma abordagem profunda e ao mesmo tempo acessível, este livro irá guiá-lo a uma jornada de paz interior e confiança plena no cuidado divino.",
        preco: 75.00,
        categoria:'fantasia',
        imagem:"img/eu_minha_ansiedade1.webp", // CORRIGIDO (assumindo que "eu_minha_ansiedade1" era um nome de arquivo e não tinha a extensão. Adicionei .webp)
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-10',
        titulo:'Harry Potter e a Pedra Filosofal',
        descricao: "A Bíblia de Estudo Temática | Mulheres da Bíblia oferece uma experiência única de imersão na rica herança espiritual das mulheres da Bíblia. Com uma compilação de textos de Abraham Kuyper, renomado teólogo e pensador cristão, esta obra excepcional proporciona uma visão fascinante sobre a vida, o caráter e o impacto das mulheres notáveis da história bíblica.",
        preco: 45.00,
        categoria:'fantasia',
        imagem:"img/biblia_de_estudo_mulher1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-11',
        titulo:'O Código Da Vinci',
        descricao: "A Bíblia para Minecrafters: Explorando a Palavra de Deus Bloco a Bloco é uma experiência única e envolvente para jovens e fãs de Minecraft. Esta Bíblia combina as histórias clássicas das Escrituras com a estética criativa e cativante do mundo de blocos, tornando a leitura da Palavra de Deus uma verdadeira jornada de exploração e diversão.",
        preco: 32.00,
        categoria:'thriller',
        imagem:"img/biblia_para_minecrafters1-1.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-12',
        titulo:'Sapiens: Uma Breve História da Humanidade',
        descricao: "A Bíblia para Minecrafters: Explorando a Palavra de Deus Bloco a Bloco é uma experiência única e envolvente para jovens e fãs de Minecraft. Esta Bíblia combina as histórias clássicas das Escrituras com a estética criativa e cativante do mundo de blocos, tornando a leitura da Palavra de Deus uma verdadeira jornada de exploração e diversão.",
        preco: 65.00,
        categoria:'nao-ficcao',
        imagem:"img/biblia_para_minecrafters2-1.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-13',
        titulo:'O Alquimista',
        descricao: "Charles Spurgeon, conhecido como “O Príncipe dos Pregadores”, tocou inúmeras vidas através de seus sermões, e sua sabedoria e eloquência continuam a inspirar gerações de cristãos. Nesta coletânea, somos apresentados a uma série de sermões que enfocam o tema da identidade em Cristo, instigando-nos a refletir sobre a forma como nos relacionamos com Deus e como isso molda nossa vida espiritual.",
        preco: 28.00,
        categoria:'ficcao',
        imagem:"img/descobrindo_sua_identidade_em_cristo1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: true,
        novo: true,
    },
    {
        id:'livro-14',
        titulo:'Extraordinário',
        descricao: "O Devocional Quarto de Guerra é mais do que um simples livro — é uma ferramenta poderosa para transformar sua vida de oração e equipá-la para vencer as batalhas espirituais que você enfrenta diariamente. Inspirado no sucesso do filme Quarto de Guerra, este devocional foi projetado para te fortalecer na fé, aprofundar sua intimidade com Deus e guiá-la a viver com propósito e poder espiritual.",
        preco: 30.00,
        categoria:'literatura infanto-juvenil',
        imagem:"img/devocional_quarto_de_guerra1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-15',
        titulo:'A Arte da Guerra',
        descricao: "Se você deseja aprofundar sua fé e vivenciar uma transformação espiritual profunda, é o guia perfeito para sua jornada. Com devocionais diárias cuidadosamente elaboradas, este livro oferece uma exploração intensa e transformadora do Espírito Santo, convidando você a experimentar uma nova dimensão de intimidade com Deus.",
        preco: 22.00,
        categoria:'filosofia',
        imagem:"img/40_dias_cheios1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-16',
        titulo:'Frankenstein',
        descricao: "Para desenvolver um relacionamento íntimo com Deus, nada melhor do que se aprofundar no estudo de sua Palavra. No entanto, essa tarefa fica difícil quando temos em mãos uma Bíblia com texto de leitura cansativa. Para solucionar esse problema, apresentamos a Bíblia Sagrada na versão NVI (Nova Versão Internacional), pensadas especialmente para você que deseja ler as Escrituras com conforto sem pagar mais caro por isso.",
        preco: 39.00,
        categoria:'terror',
        imagem:"img/biblia_sagrada_super_premium.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-17',
        titulo:'Moby Dick',
        descricao: "Transforme Sua Caminhada com Inspiração e Sabedoria Diárias! Você já enfrentou momentos de incerteza e desejou um direcionamento claro para sua vida? Pois este livro é uma poderosa ferramenta espiritual que oferece suporte diário, ajudando você a encontrar paz, propósito e confiança na Palavra de Deus.",
        preco: 50.00,
        categoria:'classicos',
        imagem:"img/salmos_e_proverbios_para_a_vida_diaria1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-18',
        titulo:'O Sol é Para Todos',
        descricao: "Você sente que a ansiedade tem dominado seu coração e afetado sua fé? As pressões do dia a dia, as incertezas do futuro e o peso de cuidar da família podem se transformar em uma tempestade silenciosa no peito. Mesmo orando, muitas vezes você ainda se sente sem paz como se estivesse tentando lutar sozinha contra o medo, a angústia e a exaustão.",
        preco: 41.00,
        categoria:'drama',
        imagem:"img/vencendo_a_ansiedade1.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-19',
        titulo:'O Grande Gatsby',
        descricao: "Em meio aos desafios diários e a um mundo que parece se afastar cada vez mais dos valores cristãos, tanto jovens quanto adultos podem sentir que falta um direcionamento sólido para viver a fé de maneira autêntica. Para muitos, a correria do cotidiano e as inúmeras distrações dificultam o desenvolvimento de uma conexão profunda com Deus e a prática constante dos ensinamentos bíblicos.",
        preco: 33.00,
        categoria:'classicos',
        imagem:"img/devocional_jovem_segundo_o_coracao1.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-20',
        titulo:'A Menina Que Roubava Livros',
        descricao: "Muitos pastores, líderes e obreiros enfrentam um grande desafio: transmitir a mensagem de Deus de forma impactante, sem perder a profundidade e a unção. A responsabilidade de pregar não é leve, e a falta de um direcionamento sólido pode gerar insegurança, dificultando a preparação e a entrega de sermões transformadores.",
        preco: 47.00,
        categoria:'drama',
        imagem:"img/principios_de_pregacao_para_pastores_e_obreiros1.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-21',
        titulo:'Duna',
        descricao: "Escrito por Isabelle S. Alves. Este devocional diário é um verdadeiro convite a mergulhar no processo de refinamento espiritual, onde cada dia traz uma nova lição de fé, esperança e perseverança. Assim como o fogo purifica o ouro, Deus usa as circunstâncias de nossa vida para nos forjar à Sua imagem, nos tornando mais fortes e capacitados para viver o propósito que Ele tem para nós.",
        preco: 68.00,
        categoria:'ficcao cientifica',
        imagem:"img/devocional_a_forja1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-22',
        titulo:'Mitologia Nórdica',
        descricao: "Cada um de nós enfrenta lutas internas que, muitas vezes, desafiam nossa paz e fé. É um guia essencial para quem busca entender e vencer os conflitos internos com a ajuda de Deus. Este livro conduz o leitor a um processo de autoavaliação e crescimento espiritual, ensinando a lidar com questões emocionais e espirituais de maneira sábia e ancorada na Palavra de Deus.",
        preco: 52.00,
        categoria:'fantasia',
        imagem:"img/eu_minhas_lutas_internas1.webp", // CORRIGIDO (o original estava sem 'img/')
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-23',
        titulo:'Vinte Mil Léguas Submarinas',
        descricao: "Você sente que está vivendo a maternidade como Deus sonhou para você? Em meio à correria, preocupações com os filhos, rotina pesada e aquela sensação constante de culpa por não estar fazendo o suficiente, muitas mães cristãs se sentem esgotadas. Tentam ser fortes por todos, mas por dentro, estão pedindo socorro em silêncio.",
        preco: 36.00,
        categoria:'aventura',
        imagem:"img/devocional_maes_de_fe1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-24',
        titulo:'As Crônicas de Nárnia',
        descricao: "Deseja libertar sua família das influências espirituais negativas e viver em um lar de paz e harmonia? Este livro é um guia poderoso para identificar, confrontar e vencer as forças espirituais que podem afetar a família. Este livro ensina como, por meio da oração, da fé e do entendimento da Palavra de Deus, cada pessoa pode transformar seu lar em um lugar de proteção e vitória espiritual.",
        preco: 59.00,
        categoria:'fantasia',
        imagem:"img/demonios_da_familia1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-25',
        titulo:'O Diário de Anne Frank',
        descricao: "Você sente que a correria do dia a dia está afastando você de Deus? No relato bíblico de Marta e Maria, encontramos duas mulheres enfrentando escolhas diárias que refletem os desafios da vida moderna: o desejo de servir e a necessidade de estar na presença de Jesus. Este livro é um convite para você refletir sobre suas prioridades e descobrir como encontrar o equilíbrio entre o serviço e a intimidade espiritual.",
        preco: 30.00,
        categoria:'biografia',
        imagem:"img/marta_maria1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: true,
        novo: true,
    },
    {
        id:'livro-26',
        titulo:'O Nome da Rosa',
        descricao: "A ansiedade rouba sua paz? A tristeza parece nunca passar? A raiva toma conta antes que você perceba? Muitas vezes, as emoções dominam nossas reações, afetando nossos relacionamentos, nossa vida espiritual e até nossa comunhão com Deus. Você já se sentiu culpada por sentir medo, vergonha ou inveja, mesmo sabendo que deveria confiar mais no Senhor?",
        preco: 49.00,
        categoria:'misterio',
        imagem:"img/devocional_40_dias_com1.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-27',
        titulo:'Cosmos',
        descricao: "Este livro é um chamado direto para todos aqueles que sabem que foram criados para algo maior, mas têm vivido aquém do seu propósito. Escrito pela Equipe Teológica Penkal, este livro é um guia prático e espiritual para quem deseja abandonar a mediocridade e viver uma fé vibrante, ousada e cheia do poder de Deus.",
        preco: 70.00,
        categoria:'ciencia',
        imagem:"img/rompendo_a_zona1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-28',
        titulo:'A Metamorfose',
        descricao: "O amor é o maior mandamento de Deus, mas muitos enfrentam dificuldades em expressá-lo e compreendê-lo, o que gera frustrações e conflitos. Este livro é um guia prático que une os ensinamentos bíblicos aos conceitos das cinco linguagens do amor, ajudando você a construir relacionamentos cheios de propósito e harmonia.",
        preco: 27.00,
        categoria:'classicos',
        imagem:"img/as_5_linguagens_do_amor1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-29',
        titulo:'O Retrato de Dorian Gray',
        descricao: "O amor é o maior mandamento de Deus, mas muitos enfrentam dificuldades em expressá-lo e compreendê-lo, o que gera frustrações e conflitos. Este livro é um guia prático que une os ensinamentos bíblicos aos conceitos das cinco linguagens do amor, ajudando você a construir relacionamentos cheios de propósito e harmonia.",
        preco: 39.00,
        categoria:'classicos',
        imagem:"img/devocional_saradas1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-30',
        titulo:'O Silmarillion',
        descricao: "Vivemos tempos difíceis, onde os valores cristãos são constantemente desafiados, e muitos jovens se perdem no caminho. Como garantir que nossos filhos e netos permaneçam firmes na fé? Como prepará-los para serem luz em meio às trevas? A incerteza sobre o futuro espiritual da nova geração tem tirado o sono de muitos pais, líderes e responsáveis.",
        preco: 62.00,
        categoria:'fantasia',
        imagem:"img/juventude_transformada1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-31',
        titulo:'Ensaio Sobre a Cegueira',
        descricao: "A necessidade de agradar a todos pode ser um peso silencioso, mas devastador. Você já se sentiu pressionado a corresponder às expectativas dos outros? A dizer ?sim? quando queria dizer ?não?? A moldar sua vida para ser aceito, mesmo que isso custe sua paz? Essa busca incessante por aprovação pode impactar sua identidade, minar sua fé e distanciar você do propósito de Deus.",
        preco: 15.99,
        categoria:'drama',
        imagem:"img/o_vicio_de_agradar1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-32',
        titulo:'Admirável Mundo Novo',
        descricao: "Você já sentiu que está presa em padrões que se repetem, mesmo quando deseja profundamente mudar? Como se algo dentro de você sempre sabotasse sua caminhada com Deus, sua autoestima e suas decisões? Muitas mulheres vivem essa realidade silenciosa. A dor não tem nome exato, mas se manifesta em relacionamentos desequilibrados, medo de rejeição, crises de identidade e uma fé que parece travada no tempo.",
        preco: 30.99,
        categoria:'distopia',
        imagem:"img/descontruindo_o_meu1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-33',
        titulo:'Tempo De Crescimento | Roberta Sara',
        descricao: "Em meio à rotina corrida, cobranças familiares, afazeres da casa e preocupações com os filhos e netos, muitas mulheres de fé têm sentido que seu crescimento espiritual está travado. Elas oram, leem a Bíblia, se esforçam? mas parece que nada muda. E aí vem o sentimento de culpa, frustração e até de comparação com outras pessoas que parecem estar ?mais avançadas?.",
        preco: 35.99,
        categoria:'Livros', // Mudei de categoria para Livros (consistência)
        imagem:"img/tempo_de_crescimento1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-34',
        titulo:'Mais Forte Que A Sua Dor | Roberta Sara',
        descricao: "Você já sentiu que, mesmo fazendo de tudo pelos outros, algo dentro de você continua quebrado? Palavras duras que você ouviu na infância, o abandono de alguém que você amava, a sensação de nunca ser suficiente... Tudo isso deixa marcas profundas que continuam moldando suas escolhas, suas relações e até sua maneira de se ver diante de Deus.",
        preco: 38.99,
        categoria:'Livros', // Mudei de categoria para Livros (consistência)
        imagem:"img/mais_forte_que_a_sua_dor1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-35',
        titulo:'Ciclos Emocionais Viciantes | Roberta Sara',
        descricao: "Você se esforça todos os dias, mas no fundo carrega a sensação de estar travada em padrões que machucam. Às vezes gasta mais do que pode, tenta agradar quem nunca te valoriza ou se compara com outras mulheres que parecem ter ?uma vida perfeita?. Você até reconhece que isso faz mal, mas continua repetindo ? e se culpa por isso.",
        preco: 40.99,
        categoria:'Livros', // Mudei de categoria para Livros (consistência)
        imagem:"img/ciclos_emocionais1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
    {
        id:'livro-36',
        titulo:'Bíblia Sagrada | King James | Letra Normal | Capa Dura | Fé | Slim',
        descricao: "A Bíblia King James, possui essas além de muitas outras qualidades. Essa tradução da palavra de Deus tem a sua raiz na Inglaterra clássica, de William Shakespeare, mas também nos conflitos entre reis e igreja protestante e na intenção de dar ao povo a Bíblia em sua própria língua.",
        preco: 43.99,
        categoria:'Bíblia',
        imagem:"img/biblia_sagrada_kj1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-37',
        titulo:'Mulheres Enraizadas - Penkal',
        descricao: "Este livro é a leitura essencial para toda mulher que busca aprofundar sua fé, fortalecer seu espírito e transformar sua vida. Este livro é uma fonte rica de inspiração, sabedoria e encorajamento para aquelas que desejam viver uma vida de propósito e profundidade espiritual.",
        preco: 39.99,
        categoria:'Livros',
        imagem:"img/mulheres_enraizadas1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-38',
        titulo:'Educando Filhos para Glória de Deus - J.C. Ryle',
        descricao: "Descubra o caminho para criar filhos que não apenas honrem a Deus, mas também impactem o mundo ao seu redor com o poder transformador da fé. Educando Filhos para a Glória de Deus é um guia essencial para pais comprometidos em transmitir valores cristãos sólidos e eternos para seus filhos.",
        preco: 29.99,
        categoria:'Livros',
        imagem:"img/educando_filhos1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-39',
        titulo:'O Propósito da familia - J. Wesley & R. Baxter',
        descricao: "O Propósito da Família é um guia inspirador e essencial para qualquer família que deseja descobrir e viver o verdadeiro propósito de seu lar. Este livro oferece uma visão profunda e prática sobre como construir uma família forte, amorosa e direcionada por um propósito comum.",
        preco: 39.99,
        categoria:'Livros',
        imagem:"img/o_proposito_da_familia1.webp", // CORRIGIDO
        maisVendido: true,
        emOferta: false,
        novo: true,
    },
    {
        id:'livro-40',
        titulo:'Homens de Honra |Charles Spurgeon | J. C. Ryle',
        descricao: "Este livro retrata a redescoberta da integridade humana, a qual é obtida através da equivalência do caráter humano ao de Cristo. Para sermos pessoas honradas neste mundo de desafios constantes e competitividade acirrada, necessitamos de uma ilustração vivaz acerca da honestidade, que é fundamental à vivência cotidiana e, também, basilar para a expressão de uma nova vida em Jesus Cristo.",
        preco: 39.99,
        categoria:'Livros',
        imagem:"img/homens_de_honra1.webp", // CORRIGIDO
        maisVendido: false,
        emOferta: false,
        novo: false,
    },
];

export default Livros;
