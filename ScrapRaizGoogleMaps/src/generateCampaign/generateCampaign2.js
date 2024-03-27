import { formataNumero } from "./ValidateTelefone.mjs";

// let result = [
//     {
//         placeId: 'ChIJOQKH5_ZFAQcRq462F4MQmbA',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Avenida Fernandes Lima, 1709 Farol',
//         storeName: 'IMPÉRIO DA CONSTRUÇÃO',
//         phone: '(82) 3241-5463',
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 122 comentários',
//         stars: 4.5,
//         numberOfReviews: 122,
//         googleUrl: 'https://www.google.com/maps/place/Imp%C3%A9rio+da+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145f6e7870239:0xb099108317b68eab!8m2!3d-9.6354922!4d-35.7366309!16s%2Fg%2F1tr7c_cs!19sChIJOQKH5_ZFAQcRq462F4MQmbA?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJM4f7M19IAQcRynChbS8DinE',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Durval de Góes Monteiro, 7049',
//         storeName: 'HOME CENTER TUPAN',
//         phone: '(82) 3194-2599',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 4.882 comentários',
//         stars: 4.2,
//         numberOfReviews: 4.882,
//         googleUrl: 'https://www.google.com/maps/place/Home+Center+Tupan/data=!4m7!3m6!1s0x701485f33fb8733:0x718a032f6da170ca!8m2!3d-9.5944406!4d-35.7518628!16s%2Fg%2F1pt_hvj8v!19sChIJM4f7M19IAQcRynChbS8DinE?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJW5naEp5FAQcRf6hGqYQIFBE',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Comendador Leão, 1119',
//         storeName: 'IPANEMA CONSTRUÇÕES | POÇO',
//         phone: '(82) 3327-8946',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 348 comentários',
//         stars: 4.2,
//         numberOfReviews: 348,
//         googleUrl: 'https://www.google.com/maps/place/Ipanema+Constru%C3%A7%C3%B5es+%7C+Po%C3%A7o/data=!4m7!3m6!1s0x701459e12da995b:0x11140884a946a87f!8m2!3d-9.6606649!4d-35.7237289!16s%2Fg%2F1ptyfjb2w!19sChIJW5naEp5FAQcRf6hGqYQIFBE?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJWVohQLFJAQcRf_1jgZSQH3w',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Dep. Serzedelo de Barros Corrêa, 200B',
//         storeName: 'PARAGOMINAS HOME CENTER | MATERIAIS PARA CONSTRUÇÃO | REFORMA | ILUMINAÇÃO',
//         phone: '(82) 3311-1838',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 3.037 comentários',
//         stars: 4.4,
//         numberOfReviews: 3.037,
//         googleUrl: 'https://www.google.com/maps/place/Paragominas+Home+Center+%7C+Materiais+para+Constru%C3%A7%C3%A3o+%7C+Reforma+%7C+Ilumina%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70149b140215a59:0x7c1f90948163fd7f!8m2!3d-9.5654963!4d-35.7798338!16s%2Fg%2F1tc_lb9q!19sChIJWVohQLFJAQcRf_1jgZSQH3w?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJu69TrCpEAQcRy_Ib3um-nJ8',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Comendador Gustavo Paiva, 5886',
//         storeName: 'LEROY MERLIN MACEIÓ',
//         phone: '(55) 4020-5376',
//         bizWebsite: null,
//         ratingText: '4,8 estrelas 7.711 comentários',
//         stars: 4.8,
//         numberOfReviews: 7.711,
//         googleUrl: 'https://www.google.com/maps/place/Leroy+Merlin+Macei%C3%B3/data=!4m7!3m6!1s0x701442aac53afbb:0x9f9cbee9de1bf2cb!8m2!3d-9.6279433!4d-35.6967233!16s%2Fg%2F11cn9ckzhr!19sChIJu69TrCpEAQcRy_Ib3um-nJ8?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJaahb151FAQcRG_NR5zSnRho',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Praça Raul Ramos, 16',
//         storeName: 'J.A CONSTRUÇÃO',
//         phone: '(82) 3337-1706',
//         bizWebsite: null,
//         ratingText: '4,0 estrelas 102 comentários',
//         stars: 4,
//         numberOfReviews: 102,
//         googleUrl: 'https://www.google.com/maps/place/J.A+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x701459dd75ba869:0x1a46a734e751f31b!8m2!3d-9.6598425!4d-35.724586!16s%2Fg%2F1pzqkpv8r!19sChIJaahb151FAQcRG_NR5zSnRho?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJARht_3FGAQcRVUDDjZ6dsLc',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Juca Sampaio, 718',
//         storeName: 'HIPER CONSTRUÇÃO',
//         phone: '(82) 2122-4444',
//         bizWebsite: null,
//         ratingText: '4,1 estrelas 748 comentários',
//         stars: 4.1,
//         numberOfReviews: 748,
//         googleUrl: 'https://www.google.com/maps/place/Hiper+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014671ff6d1801:0xb7b09d9e8dc34055!8m2!3d-9.6164745!4d-35.7134967!16s%2Fg%2F1tm0tbs5!19sChIJARht_3FGAQcRVUDDjZ6dsLc?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ67XotmxGAQcR3C_UP3da5II',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Em frente ao Banco do Brasil, Av. Menino Marcelo, S/N',
//         storeName: 'CASA FORTE MATERIAL DE CONSTRUÇÃO',
//         phone: '(82) 99972-4256',
//         bizWebsite: null,
//         ratingText: '4,0 estrelas 27 comentários',
//         stars: 4,
//         numberOfReviews: 27,
//         googleUrl: 'https://www.google.com/maps/place/Casa+Forte+Material+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x701466cb6e8b5eb:0x82e45a773fd42fdc!8m2!3d-9.6117181!4d-35.7183467!16s%2Fg%2F1z449_xdn!19sChIJ67XotmxGAQcR3C_UP3da5II?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJFWSdOllIAQcRlOgmvJgGcAg',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Ver. Dário Marsíglia, 28',
//         storeName: 'ENCONTRO DO SOL HOME CENTER',
//         phone: '(82) 3314-6900',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 1.999 comentários',
//         stars: 4.3,
//         numberOfReviews: 1.999,
//         googleUrl: 'https://www.google.com/maps/place/Encontro+do+Sol+Home+Center/data=!4m7!3m6!1s0x70148593a9d6415:0x8700698bc26e894!8m2!3d-9.5702181!4d-35.7573776!16s%2Fg%2F1thq5h61!19sChIJFWSdOllIAQcRlOgmvJgGcAg?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ4RSi2bpFAQcRQezLzUPtYQc',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Dr. Júlio Marques Luz, 1254',
//         storeName: 'G.SILVA MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 3231-0905',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 154 comentários',
//         stars: 4.2,
//         numberOfReviews: 154,
//         googleUrl: 'https://www.google.com/maps/place/G.Silva+Materiais+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145bad9a214e1:0x761ed43cdcbec41!8m2!3d-9.6532023!4d-35.7103918!16s%2Fg%2F1ths9k5m!19sChIJ4RSi2bpFAQcRQezLzUPtYQc?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJf6eCrYZFAQcRN2LCIjUDupI',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Juca Sampaio, 41',
//         storeName: 'CASA DA CONSTRUÇÃO MACEIÓ',
//         phone: '(82) 98118-3471',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 2 comentários',
//         stars: 5,
//         numberOfReviews: 2,
//         googleUrl: 'https://www.google.com/maps/place/Casa+da+Constru%C3%A7%C3%A3o+Macei%C3%B3/data=!4m7!3m6!1s0x7014586ad82a77f:0x92ba033522c26237!8m2!3d-9.6354726!4d-35.7111093!16s%2Fg%2F11kc8nh4jb!19sChIJf6eCrYZFAQcRN2LCIjUDupI?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJg9so5QxGAQcRbJGCmIFNVbs',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL - Av. Muniz Falcão, 310',
//         storeName: 'BARATEIRO CONSTRUÇÃO',
//         phone: '(82) 98727-6104',
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 79 comentários',
//         stars: 4.5,
//         numberOfReviews: 79,
//         googleUrl: 'https://www.google.com/maps/place/Barateiro+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x701460ce528db83:0xbb554d819882916c!8m2!3d-9.6171062!4d-35.7199752!16s%2Fg%2F1ptynvq5y!19sChIJg9so5QxGAQcRbJGCmIFNVbs?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJVVVVVY5PAQcRLd5Tb8ow-dQ',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Siqueira Campos, 542',
//         storeName: 'JH COMERCIAL',
//         phone: '(82) 3326-4520',
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 4 comentários',
//         stars: 4.5,
//         numberOfReviews: 4,
//         googleUrl: 'https://www.google.com/maps/place/JH+COMERCIAL/data=!4m7!3m6!1s0x7014f8e55555555:0xd4f930ca6f53de2d!8m2!3d-9.6679482!4d-35.745568!16s%2Fg%2F1vxz9tqb!19sChIJVVVVVY5PAQcRLd5Tb8ow-dQ?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ4TIHkwtGAQcRbIhlt_AfVuU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__Av. Muniz Falcão, 105',
//         storeName: 'NOVO BARRO DURO CONSTRUÇÕES',
//         phone: '(82) 3028-3636',
//         bizWebsite: null,
//         ratingText: '3,2 estrelas 44 comentários',
//         stars: 3.2,
//         numberOfReviews: 44,
//         googleUrl: 'https://www.google.com/maps/place/Novo+Barro+Duro+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x701460b930732e1:0xe5561ff0b765886c!8m2!3d-9.6201473!4d-35.7227928!16s%2Fg%2F1pxwtn51x!19sChIJ4TIHkwtGAQcRbIhlt_AfVuU?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJs-N7IBxHAQcRuzaSR8o3xCU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Juca Sampaio, 30',
//         storeName: 'CENTROCON CENTRO DE CONSTRUÇÕES LTDA',
//         phone: '(82) 3328-5044',
//         bizWebsite: null,
//         ratingText: '4,1 estrelas 122 comentários',
//         stars: 4.1,
//         numberOfReviews: 122,
//         googleUrl: 'https://www.google.com/maps/place/CENTROCON+CENTRO+DE+CONSTRU%C3%87%C3%95ES+LTDA/data=!4m7!3m6!1s0x701471c207be3b3:0x25c437ca479236bb!8m2!3d-9.6159511!4d-35.7159888!16s%2Fg%2F11fq_ykmpg!19sChIJs-N7IBxHAQcRuzaSR8o3xCU?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJl2CdQ21PAQcRbabCzt7-YDg',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Augusta, 560 A',
//         storeName: 'MACEIÓ CONSTRUÇÕES',
//         phone: '(82) 98106-6268',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/Macei%C3%B3+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x7014f6d439d6097:0x3860fedecec2a66d!8m2!3d-9.662848!4d-35.7425783!16s%2Fg%2F11lcjh3v9h!19sChIJl2CdQ21PAQcRbabCzt7-YDg?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJf5szG7BFAQcR4hk8EBP6zxw',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Rua Hamilton de Barros Soutinho, 1247',
//         storeName: 'COMERCIAL MANGABEIRAS',
//         phone: '(82) 3231-9331',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 65 comentários',
//         stars: 4.3,
//         numberOfReviews: 65,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Mangabeiras/data=!4m7!3m6!1s0x70145b01b339b7f:0x1ccffa13103c19e2!8m2!3d-9.654169!4d-35.7102718!16s%2Fg%2F1v2f0q6z!19sChIJf5szG7BFAQcR4hk8EBP6zxw?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ3bP1kplPAQcRM1h2ETn8d_k',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Boa Vista, 150',
//         storeName: 'DAKAZA - LOJA DE MATERIAL DE CONSTRUÇÃO',
//         phone: '(82) 3313-8949',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 27 comentários',
//         stars: 4.4,
//         numberOfReviews: 27,
//         googleUrl: 'https://www.google.com/maps/place/Dakaza+-+Loja+de+Material+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014f9992f5b3dd:0xf977fc3911765833!8m2!3d-9.6658252!4d-35.7578659!16s%2Fg%2F11cn9k8cg8!19sChIJ3bP1kplPAQcRM1h2ETn8d_k?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJiyu1QlFIAQcRVuXWENJ4mMw',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Dr. João Crisóstomo de Farias, 178',
//         storeName: 'GG CASA E CONSTRUÇÃO',
//         phone: '(82) 3374-1219',
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 253 comentários',
//         stars: 4.5,
//         numberOfReviews: 253,
//         googleUrl: 'https://www.google.com/maps/place/GG+Casa+e+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x701485142b52b8b:0xcc9878d210d6e556!8m2!3d-9.5718265!4d-35.7779347!16s%2Fg%2F1w4f896j!19sChIJiyu1QlFIAQcRVuXWENJ4mMw?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJGZ16xeNFAQcRbm-tCXCHW_Q',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Comendador José Geraldo da Silva, 231',
//         storeName: 'SS COMERCIAL - MATERIAL DE CONSTRUÇÃO',
//         phone: '(82) 98855-1616',
//         bizWebsite: null,
//         ratingText: '4,9 estrelas 7 comentários',
//         stars: 4.9,
//         numberOfReviews: 7,
//         googleUrl: 'https://www.google.com/maps/place/SS+COMERCIAL+-+Material+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145e3c57a9d19:0xf45b877009ad6f6e!8m2!3d-9.6456255!4d-35.7196689!16s%2Fg%2F11rwwg294n!19sChIJGZ16xeNFAQcRbm-tCXCHW_Q?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJx8zuMlpIAQcRuH_-rlUwddc',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Durval de Góes Monteiro, 1896',
//         storeName: 'CARAJÁS HOME CENTER',
//         phone: '(82) 4003-2020',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 10.696 comentários',
//         stars: 4.3,
//         numberOfReviews: 10.696,
//         googleUrl: 'https://www.google.com/maps/place/Caraj%C3%A1s+Home+Center/data=!4m7!3m6!1s0x701485a32eeccc7:0xd7753055aefe7fb8!8m2!3d-9.5903535!4d-35.7611852!16s%2Fg%2F1tfjqx86!19sChIJx8zuMlpIAQcRuH_-rlUwddc?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJMYaBnOhFAQcRcYKoHSFSpZg',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__R. Itapuã, 21',
//         storeName: 'E G S MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 99959-6299',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 23 comentários',
//         stars: 4.2,
//         numberOfReviews: 23,
//         googleUrl: 'https://www.google.com/maps/place/E+G+S+Materiais+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145e89c818631:0x98a552211da88271!8m2!3d-9.6346454!4d-35.7179803!16s%2Fg%2F1trqhdnq!19sChIJMYaBnOhFAQcRcYKoHSFSpZg?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ62XW9GNIAQcRVWq0pySY2fI',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__Av. Belmiro Amorim',
//         storeName: 'VITOR CONSTRUÇÃO',
//         phone: '(82) 3343-5286',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 7 comentários',
//         stars: 4.3,
//         numberOfReviews: 7,
//         googleUrl: 'https://www.google.com/maps/place/Vitor+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014863f4d665eb:0xf2d99824a7b46a55!8m2!3d-9.5792425!4d-35.75725!16s%2Fg%2F11f5cc0zjq!19sChIJ62XW9GNIAQcRVWq0pySY2fI?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJZ2ikNYdPAQcRbfbfbrdsLxg',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Fernandes de Barros, 3',
//         storeName: 'IPANEMA CONSTRUÇÕES | CENTRO',
//         phone: '(82) 3221-7921',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 239 comentários',
//         stars: 4.3,
//         numberOfReviews: 239,
//         googleUrl: 'https://www.google.com/maps/place/Ipanema+Constru%C3%A7%C3%B5es+%7C+Centro/data=!4m7!3m6!1s0x7014f8735a46867:0x182f6cb76edff66d!8m2!3d-9.6643784!4d-35.7422895!16s%2Fg%2F1td_bwk0!19sChIJZ2ikNYdPAQcRbfbfbrdsLxg?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJGYrXIf1FAQcRg1FZUqLMNDw',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Rotary, 518',
//         storeName: 'ROTA CONSTRUÇÃO | MATERIAIS DE CONSTRUÇÃO E PRODUTOS PARA PISCINA - GRUTA DE LOURDES',
//         phone: '(82) 98845-6773',
//         bizWebsite: null,
//         ratingText: '4,6 estrelas 12 comentários',
//         stars: 4.6,
//         numberOfReviews: 12,
//         googleUrl: 'https://www.google.com/maps/place/Rota+Constru%C3%A7%C3%A3o+%7C+Materiais+de+Constru%C3%A7%C3%A3o+e+Produtos+para+piscina+-+Gruta+de+Lourdes/data=!4m7!3m6!1s0x70145fd21d78a19:0x3c34cca252595183!8m2!3d-9.6255089!4d-35.7311007!16s%2Fg%2F11kn6v1cc8!19sChIJGYrXIf1FAQcRg1FZUqLMNDw?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJBY9KT7tFAQcROhcyh7_YB9A',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Dr. Júlio Marques Luz, 1478',
//         storeName: 'IMPERDEKA',
//         phone: '(82) 3235-4019',
//         bizWebsite: null,
//         ratingText: '4,6 estrelas 22 comentários',
//         stars: 4.6,
//         numberOfReviews: 22,
//         googleUrl: 'https://www.google.com/maps/place/Imperdeka/data=!4m7!3m6!1s0x70145bb4f4a8f05:0xd007d8bf8732173a!8m2!3d-9.6532171!4d-35.7123626!16s%2Fg%2F11j2yszzwy!19sChIJBY9KT7tFAQcROhcyh7_YB9A?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJaZJ-19xFAQcRG7Fpkx_CF6M',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Juca Sampaio, 1080',
//         storeName: 'IPANEMA CONSTRUÇÕES | JACINTINHO',
//         phone: '(82) 99677-1900',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 179 comentários',
//         stars: 4.3,
//         numberOfReviews: 179,
//         googleUrl: 'https://www.google.com/maps/place/Ipanema+Constru%C3%A7%C3%B5es+%7C+Jacintinho/data=!4m7!3m6!1s0x70145dcd77e9269:0xa317c21f9369b11b!8m2!3d-9.6339366!4d-35.7159663!16s%2Fg%2F1pw3xj9m5!19sChIJaZJ-19xFAQcRG7Fpkx_CF6M?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJh_uBB1FFAQcRoZq1d_7dglk',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Dr. Júlio Marques Luz, 1113',
//         storeName: 'O PORTUGUÊS MATERIAL DE CONSTRUÇÃO',
//         phone: '(82) 98205-7516',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 8 comentários',
//         stars: 5,
//         numberOfReviews: 8,
//         googleUrl: 'https://www.google.com/maps/place/O+Portugu%C3%AAs+Material+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145510781fb87:0x5982ddfe77b59aa1!8m2!3d-9.6534666!4d-35.709177!16s%2Fg%2F11ss00bfdf!19sChIJh_uBB1FFAQcRoZq1d_7dglk?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJb6msePRJAQcRgyOSI0PjE2M',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. São João, 14',
//         storeName: 'PAJUÇARA CONSTRUÇÃO',
//         phone: null,
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/Paju%C3%A7ara+constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70149f478aca96f:0x6313e34323922383!8m2!3d-9.579781!4d-35.7710809!16s%2Fg%2F11hml3mb6b!19sChIJb6msePRJAQcRgyOSI0PjE2M?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJBZV4oPZIAQcRAgdsHVHrfDI',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__Av. Maceió, 340',
//         storeName: 'A SOLUÇÃO',
//         phone: '(82) 2140-9470',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 75 comentários',
//         stars: 4.4,
//         numberOfReviews: 75,
//         googleUrl: 'https://www.google.com/maps/place/A+Solu%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70148f6a0789505:0x327ceb511d6c0702!8m2!3d-9.5805853!4d-35.7702224!16s%2Fg%2F1td_5chw!19sChIJBZV4oPZIAQcRAgdsHVHrfDI?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJcyMro3BFAQcRg7ZCjtXgPJs',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Walter Ananias, 1530',
//         storeName: 'MACRON MATERIAL DE CONSTRUÇÃO',
//         phone: '(82) 98219-7081',
//         bizWebsite: null,
//         ratingText: '4,6 estrelas 9 comentários',
//         stars: 4.6,
//         numberOfReviews: 9,
//         googleUrl: 'https://www.google.com/maps/place/Macron+Material+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014570a32b2373:0x9b3ce0d58e42b683!8m2!3d-9.6668336!4d-35.7290528!16s%2Fg%2F1pzx8tbnz!19sChIJcyMro3BFAQcRg7ZCjtXgPJs?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ_QYpBxBGAQcRTBGIH0lymQI',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Pres. Getúlio Vargas, 112',
//         storeName: 'COMAC',
//         phone: '(82) 3432-4164',
//         bizWebsite: null,
//         ratingText: '3,4 estrelas 35 comentários',
//         stars: 3.4,
//         numberOfReviews: 35,
//         googleUrl: 'https://www.google.com/maps/place/COMAC/data=!4m7!3m6!1s0x7014610072906fd:0x29972491f88114c!8m2!3d-9.6137916!4d-35.7297033!16s%2Fg%2F11bzq33prm!19sChIJ_QYpBxBGAQcRTBGIH0lymQI?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ-_914M1FAQcRC91-Aj0VWaU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__Av. Pilar, 173',
//         storeName: 'OLIVEIRA CONSTRUÇÃO',
//         phone: '(82) 3355-6189',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 24 comentários',
//         stars: 4.3,
//         numberOfReviews: 24,
//         googleUrl: 'https://www.google.com/maps/place/Oliveira+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145cde075fffb:0xa559153d027edd0b!8m2!3d-9.637229!4d-35.702349!16s%2Fg%2F1tgkhgwf!19sChIJ-_914M1FAQcRC91-Aj0VWaU?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJPy6LoRFJAQcRHh3gpNRQdi4',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Dona Marieta Quintela Campos Teixeira, 402',
//         storeName: 'CASA DA CONSTRUÇÃO',
//         phone: '(82) 3324-2512',
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 11 comentários',
//         stars: 4.5,
//         numberOfReviews: 11,
//         googleUrl: 'https://www.google.com/maps/place/Casa+Da+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014911a18b2e3f:0x2e7650d4a4e01d1e!8m2!3d-9.5763188!4d-35.7820513!16s%2Fg%2F11f61w6489!19sChIJPy6LoRFJAQcRHh3gpNRQdi4?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJU52OrMlFAQcRoDX9wmutBAw',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Dilermando Réis, 631',
//         storeName: 'COMERCIAL MANGABEIRAS',
//         phone: '(82) 3325-7635',
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 100 comentários',
//         stars: 4.5,
//         numberOfReviews: 100,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Mangabeiras/data=!4m7!3m6!1s0x70145c9ac8e9d53:0xc04ad6bc2fd35a0!8m2!3d-9.6432196!4d-35.7050299!16s%2Fg%2F1ptvqhlsz!19sChIJU52OrMlFAQcRoDX9wmutBAw?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ6wUH1LlHAQcRmUmqzgVT_Zk',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Roberto Símonsen, 881',
//         storeName: 'GRUTA CONSTRUÇÃO',
//         phone: '(82) 3436-4158',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/gruta+constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70147b9d40705eb:0x99fd5305ceaa4999!8m2!3d-9.6217326!4d-35.7307684!16s%2Fg%2F11vl5tdsrl!19sChIJ6wUH1LlHAQcRmUmqzgVT_Zk?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJYxb4GP9HAQcR9oivG2GiSIU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__Av. Juca Sampaio, 1020 - Loja 01',
//         storeName: 'PONTO DA CONSTRUÇÃO',
//         phone: null,
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 2 comentários',
//         stars: 4.5,
//         numberOfReviews: 2,
//         googleUrl: 'https://www.google.com/maps/place/Ponto+da+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70147ff18f81663:0x8548a2611baf88f6!8m2!3d-9.6164535!4d-35.7132885!16s%2Fg%2F11j4mrz0kr!19sChIJYxb4GP9HAQcR9oivG2GiSIU?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJubzOgQpFAQcR3yiUFPZGMQw',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Diégues Júnior, 647',
//         storeName: 'JR CONSTRUÇÃO',
//         phone: '(82) 98707-7668',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/JR+CONSTRU%C3%87%C3%83O/data=!4m7!3m6!1s0x701450a81cebcb9:0xc3146f6149428df!8m2!3d-9.6546289!4d-35.7289173!16s%2Fg%2F11vq5z3m1h!19sChIJubzOgQpFAQcR3yiUFPZGMQw?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJyS1SRgBFAQcRfKq0F0n15_E',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Ernesto Gomes Maranhão, 1286',
//         storeName: 'CONSTRUFEIRA',
//         phone: '(82) 99102-0691',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/Construfeira/data=!4m7!3m6!1s0x701450046522dc9:0xf1e7f54917b4aa7c!8m2!3d-9.6529184!4d-35.710768!16s%2Fg%2F11vqd5f96r!19sChIJyS1SRgBFAQcRfKq0F0n15_E?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ2aQwFVpIAQcRXr3ugtZ56MQ',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Durval de Góes Monteiro, 169',
//         storeName: 'MEGA NORDESTE',
//         phone: '(82) 2122-4814',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 179 comentários',
//         stars: 4.2,
//         numberOfReviews: 179,
//         googleUrl: 'https://www.google.com/maps/place/Mega+Nordeste/data=!4m7!3m6!1s0x701485a1530a4d9:0xc4e879d682eebd5e!8m2!3d-9.5749025!4d-35.7719541!16s%2Fg%2F1pzw3b2sr!19sChIJ2aQwFVpIAQcRXr3ugtZ56MQ?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJa55ZCnRFAQcRjCOOqZSrMJc',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Praça da Maravilha, 99',
//         storeName: 'MARAVILHA CONSTRUÇÃO',
//         phone: '(82) 3231-2716',
//         bizWebsite: null,
//         ratingText: '4,0 estrelas 2 comentários',
//         stars: 4,
//         numberOfReviews: 2,
//         googleUrl: 'https://www.google.com/maps/place/Maravilha+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145740a599e6b:0x9730ab94a98e238c!8m2!3d-9.6664504!4d-35.7231288!16s%2Fg%2F1pw3xx4mb!19sChIJa55ZCnRFAQcRjCOOqZSrMJc?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJZZ3HiwlFAQcRm26T7Hlur3Q',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Sen. Firmino de Vasconcelos, 526',
//         storeName: 'LOJA BELO MONTE',
//         phone: '(82) 3327-6298',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 28 comentários',
//         stars: 4.4,
//         numberOfReviews: 28,
//         googleUrl: 'https://www.google.com/maps/place/Loja+Belo+Monte/data=!4m7!3m6!1s0x70145098bc79d65:0x74af6e79ec936e9b!8m2!3d-9.6635032!4d-35.7119464!16s%2Fg%2F1tp0dw2s!19sChIJZZ3HiwlFAQcRm26T7Hlur3Q?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ4QSi_NRFAQcRYbdHEcaEhZU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Rod. Al-101 Norte',
//         storeName: 'COMERCIAL GUAXUMA MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 3355-5071',
//         bizWebsite: null,
//         ratingText: '4,0 estrelas 1 comentários',
//         stars: 4,
//         numberOfReviews: 1,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Guaxuma+Materiais+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145d4fca204e1:0x958584c61147b761!8m2!3d-9.62977!4d-35.69913!16s%2Fg%2F11b6j7xkpl!19sChIJ4QSi_NRFAQcRYbdHEcaEhZU?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJA2u3iFlIAQcR_F6b56LrkVo',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Rua Dr. Eurico Ayres, 51',
//         storeName: 'COMAC',
//         phone: '(82) 3352-0228',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 17 comentários',
//         stars: 4.2,
//         numberOfReviews: 17,
//         googleUrl: 'https://www.google.com/maps/place/Comac/data=!4m7!3m6!1s0x701485988b76b03:0x5a91eba2e79b5efc!8m2!3d-9.5767202!4d-35.7713953!16s%2Fg%2F1pyqjwsbf!19sChIJA2u3iFlIAQcR_F6b56LrkVo?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJR-WqywxFAQcR0jNdB2Q942A',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Dr. Luís de Mascarenhas, 287',
//         storeName: 'CASA FERREIRA MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 99640-3278',
//         bizWebsite: null,
//         ratingText: '4,1 estrelas 8 comentários',
//         stars: 4.1,
//         numberOfReviews: 8,
//         googleUrl: 'https://www.google.com/maps/place/CASA+FERREIRA+MATERIAIS+DE+CONSTRU%C3%87%C3%83O/data=!4m7!3m6!1s0x701450ccbaae547:0x60e33d64075d33d2!8m2!3d-9.6506272!4d-35.7381092!16s%2Fg%2F11ns973_w0!19sChIJR-WqywxFAQcR0jNdB2Q942A?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJG8ysjPtIAQcR_qFLsh7Yjow',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Jorge Montenegro de Barros 1053, 4325-4361',
//         storeName: 'COMERCIAL BOA VIDA - CASA & CONSTRUÇÃO',
//         phone: '(82) 3324-5753',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 72 comentários',
//         stars: 4.4,
//         numberOfReviews: 72,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Boa+Vida+-+Casa+%26+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70148fb8caccc1b:0x8c8ed81eb24ba1fe!8m2!3d-9.5860851!4d-35.7785279!16s%2Fg%2F11c4bc8w4x!19sChIJG8ysjPtIAQcR_qFLsh7Yjow?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ39R4R9BFAQcRYs93knDY2IY',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Juca Sampaio, 355',
//         storeName: 'COMEL MATERIAL DE CONSTRUCAO',
//         phone: null,
//         bizWebsite: null,
//         ratingText: '3,4 estrelas 5 comentários',
//         stars: 3.4,
//         numberOfReviews: 5,
//         googleUrl: 'https://www.google.com/maps/place/Comel+Material+de+Construcao/data=!4m7!3m6!1s0x70145d04778d4df:0x86d8d8709277cf62!8m2!3d-9.6347898!4d-35.7056169!16s%2Fg%2F1yfjll65c!19sChIJ39R4R9BFAQcRYs93knDY2IY?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJJ912qAtFAQcRm2wj9yBCjg0',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__Rua Domingos Lordsleen, 391',
//         storeName: 'LUCAS CONSTRUÇÕES',
//         phone: '(82) 3231-4420',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 24 comentários',
//         stars: 4.2,
//         numberOfReviews: 24,
//         googleUrl: 'https://www.google.com/maps/place/Lucas+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x701450ba876dd27:0xd8e4220f7236c9b!8m2!3d-9.6656597!4d-35.716009!16s%2Fg%2F1pxw9c6ry!19sChIJJ912qAtFAQcRm2wj9yBCjg0?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJiazm4EtPAQcR6bN9grqA4do',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Tv. Panair, N°22 - B',
//         storeName: 'PANAIR CONSTRUÇÃO',
//         phone: '(82) 98839-2076',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 10 comentários',
//         stars: 4.4,
//         numberOfReviews: 10,
//         googleUrl: 'https://www.google.com/maps/place/Panair+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014f4be0e6ac89:0xdae180ba827db3e9!8m2!3d-9.6534348!4d-35.7576077!16s%2Fg%2F11jpm2ygps!19sChIJiazm4EtPAQcR6bN9grqA4do?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJdynxkhtFAQcRG7QamLXyQ8o',
//         status: 'Aberto',
//         category: 'Loja',
//         address: 'R. Dep. José Lages, 1054',
//         storeName: 'ALGO MAIS MATERIAL DE CONSTRUÇÃO',
//         phone: '(82) 3327-5929',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 16 comentários',
//         stars: 4.4,
//         numberOfReviews: 16,
//         googleUrl: 'https://www.google.com/maps/place/Algo+Mais+Material+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x701451b92f12977:0xca43f2b5981ab41b!8m2!3d-9.6565803!4d-35.708437!16s%2Fg%2F11j7gxsvw9!19sChIJdynxkhtFAQcRG7QamLXyQ8o?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ1dSh5PpHAQcRdIr7S1PE6iE',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Benedito Bentes, 526',
//         storeName: 'BELLA MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 3435-8552',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 73 comentários',
//         stars: 4.3,
//         numberOfReviews: 73,
//         googleUrl: 'https://www.google.com/maps/place/Bella+Materiais+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70147fae4a1d4d5:0x21eac4534bfb8a74!8m2!3d-9.5564582!4d-35.7277967!16s%2Fg%2F11glvlxzfg!19sChIJ1dSh5PpHAQcRdIr7S1PE6iE?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ1UHxYvNFAQcRreXZfVZR7mk',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Fernandes Lima',
//         storeName: 'ALDEBARAN CONSTRUÇÕES',
//         phone: '(82) 3432-1994',
//         bizWebsite: null,
//         ratingText: '3,9 estrelas 7 comentários',
//         stars: 3.9,
//         numberOfReviews: 7,
//         googleUrl: 'https://www.google.com/maps/place/Aldebaran+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x70145f362f141d5:0x69ee51567dd9e5ad!8m2!3d-9.6398296!4d-35.7352727!16s%2Fg%2F11ggw0z_kw!19sChIJ1UHxYvNFAQcRreXZfVZR7mk?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJqwJs5opFAQcRba2W-6jGgSE',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Joao Paulo II, 22',
//         storeName: 'CONSERT - MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 3356-1049',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 1 comentários',
//         stars: 5,
//         numberOfReviews: 1,
//         googleUrl: 'https://www.google.com/maps/place/Consert+-+Materiais+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x701458ae66c02ab:0x2181c6a8fb96ad6d!8m2!3d-9.6455577!4d-35.7268667!16s%2Fg%2F11j1m0bqj2!19sChIJqwJs5opFAQcRba2W-6jGgSE?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJqWsiSmBIAQcRs9ndDdP60_k',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__Av. Belmiro Amorim, 636 A',
//         storeName: 'METTA MATERIAIS DE CONSTRUÇÃO - MATRIZ',
//         phone: '(82) 3324-2238',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 105 comentários',
//         stars: 4.2,
//         numberOfReviews: 105,
//         googleUrl: 'https://www.google.com/maps/place/Metta+Materiais+de+Constru%C3%A7%C3%A3o+-+Matriz/data=!4m7!3m6!1s0x70148604a226ba9:0xf9d3fad30dddd9b3!8m2!3d-9.5812214!4d-35.760053!16s%2Fg%2F1q5brfnd1!19sChIJqWsiSmBIAQcRs9ndDdP60_k?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJzxXLc25IAQcRx4kke8OmBQ4',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Jaíro Marquês Luz, 258',
//         storeName: 'HORIZONTE CONSTRUÇÕES',
//         phone: '(82) 3334-2294',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 34 comentários',
//         stars: 4.2,
//         numberOfReviews: 34,
//         googleUrl: 'https://www.google.com/maps/place/HORIZONTE+CONSTRU%C3%87%C3%95ES/data=!4m7!3m6!1s0x701486e73cb15cf:0xe05a6c37b2489c7!8m2!3d-9.5666128!4d-35.7550096!16s%2Fg%2F1ts_6t5g!19sChIJzxXLc25IAQcRx4kke8OmBQ4?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJRapmt7FFAQcR3g-e6fPnzBc',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Dr. Júlio Marques Luz, 1781',
//         storeName: 'JATIÚCA CONSTRUÇÕES',
//         phone: '(82) 3327-1427',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 21 comentários',
//         stars: 4.2,
//         numberOfReviews: 21,
//         googleUrl: 'https://www.google.com/maps/place/Jati%C3%BAca+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x70145b1b766aa45:0x17cce7f3e99e0fde!8m2!3d-9.6534408!4d-35.7152421!16s%2Fg%2F1tj91r7t!19sChIJRapmt7FFAQcR3g-e6fPnzBc?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJVbm8I-5HAQcREHMAtGuOCYk',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Benedito Bentes, 255',
//         storeName: 'CARDOSO CONSTRUÇÕES',
//         phone: '(82) 3353-2565',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 67 comentários',
//         stars: 4.3,
//         numberOfReviews: 67,
//         googleUrl: 'https://www.google.com/maps/place/Cardoso+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x70147ee23bcb955:0x89098e6bb4007310!8m2!3d-9.5576813!4d-35.7265604!16s%2Fg%2F1tvw53dj!19sChIJVbm8I-5HAQcREHMAtGuOCYk?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJU59P_hBPAQcRuNrs9Amxx48',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__R. Augusta, 524',
//         storeName: 'MARCELA CONSTRUÇÕES',
//         phone: '(82) 3221-6274',
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 6 comentários',
//         stars: 4.5,
//         numberOfReviews: 6,
//         googleUrl: 'https://www.google.com/maps/place/Marcela+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x7014f10fe4f9f53:0x8fc7b109f4ecdab8!8m2!3d-9.6627867!4d-35.7425775!16s%2Fg%2F11h7r455zw!19sChIJU59P_hBPAQcRuNrs9Amxx48?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJgzbaHblJAQcRVltC3XvF_yU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Tv. Jardim Paulo VI',
//         storeName: 'LD MATERIAIS DE CONSTRUÇÕES LTDA',
//         phone: '(82) 3374-1447',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 2 comentários',
//         stars: 5,
//         numberOfReviews: 2,
//         googleUrl: 'https://www.google.com/maps/place/LD+MATERIAIS+DE+CONSTRU%C3%87%C3%95ES+LTDA/data=!4m7!3m6!1s0x70149b91dda3683:0x25ffc57bdd425b56!8m2!3d-9.5547175!4d-35.7569834!16s%2Fg%2F11jw6ftys2!19sChIJgzbaHblJAQcRVltC3XvF_yU?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJY07PnVZIAQcRvOf5YZfe7vQ',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__R. José Gonzaga de Almeida, 695',
//         storeName: 'LUNA CONSTRUÇÕES',
//         phone: '(82) 3324-4229',
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 55 comentários',
//         stars: 4.3,
//         numberOfReviews: 55,
//         googleUrl: 'https://www.google.com/maps/place/Luna+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x70148569dcf4e63:0xf4eede9761f9e7bc!8m2!3d-9.5770314!4d-35.7788225!16s%2Fg%2F1q5ccg7ld!19sChIJY07PnVZIAQcRvOf5YZfe7vQ?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJD6ZFTmVHAQcRa0zBHBsRIW8',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Estr. Jacarecica Pará, 2110-2148',
//         storeName: 'MACEIÓ CONSTRUÇÕES',
//         phone: '(82) 3355-5028',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 1 comentários',
//         stars: 5,
//         numberOfReviews: 1,
//         googleUrl: 'https://www.google.com/maps/place/Macei%C3%B3+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x70147654e45a60f:0x6f21111b1cc14c6b!8m2!3d-9.6127575!4d-35.6891518!16s%2Fg%2F11fswmhr6v!19sChIJD6ZFTmVHAQcRa0zBHBsRIW8?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJOzY9aHpHAQcRzror34BZjAs',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Genilda da Silva Porto, 430',
//         storeName: 'DEGRAUS CONSTRUÇÕES',
//         phone: '(82) 98188-3016',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 18 comentários',
//         stars: 4.4,
//         numberOfReviews: 18,
//         googleUrl: 'https://www.google.com/maps/place/Degraus+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x701477a683d363b:0xb8c5980df2bbace!8m2!3d-9.5794074!4d-35.7052117!16s%2Fg%2F11j52fbqfx!19sChIJOzY9aHpHAQcRzror34BZjAs?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJvV_p9WdIAQcRD5o1KIttIPY',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Ver. Dário Marsíglia',
//         storeName: 'BARROS CONSTRUÇÕES',
//         phone: null,
//         bizWebsite: null,
//         ratingText: '4,3 estrelas 12 comentários',
//         stars: 4.3,
//         numberOfReviews: 12,
//         googleUrl: 'https://www.google.com/maps/place/Barros+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x7014867f5e95fbd:0xf6206d8b28359a0f!8m2!3d-9.5736828!4d-35.7624553!16s%2Fg%2F11kn6qqmz6!19sChIJvV_p9WdIAQcRD5o1KIttIPY?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJl5Syz3BFAQcRHKoI2xK0Gbs',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Treze de Maio, 31',
//         storeName: 'CONSERVE CASA E CONSTRUÇÃO',
//         phone: '(82) 3316-0795',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/Conserve+Casa+e+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014570cfb29497:0xbb19b412db08aa1c!8m2!3d-9.6665873!4d-35.727814!16s%2Fg%2F1pv60fmyp!19sChIJl5Syz3BFAQcRHKoI2xK0Gbs?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJRY_rrPhIAQcRjsoUWKUcHEs',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Rua Arthur Meyer Leite',
//         storeName: 'EMPÓRIO DA CONSTRUÇÃO',
//         phone: null,
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 6 comentários',
//         stars: 5,
//         numberOfReviews: 6,
//         googleUrl: 'https://www.google.com/maps/place/Emp%C3%B3rio+da+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70148f8aceb8f45:0x4b1c1ca55814ca8e!8m2!3d-9.580709!4d-35.7787017!16s%2Fg%2F11tk1_j4zd!19sChIJRY_rrPhIAQcRjsoUWKUcHEs?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJqebrs8FFAQcRF5MMKhQ0o3g',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Dr. José Joaquim de Araújo, 231',
//         storeName: 'J R MAT DE CONSTRUÇÃO',
//         phone: '(82) 3320-1589',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 1 comentários',
//         stars: 5,
//         numberOfReviews: 1,
//         googleUrl: 'https://www.google.com/maps/place/J+R+Mat+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145c1b3ebe6a9:0x78a334142a0c9317!8m2!3d-9.6551554!4d-35.7248894!16s%2Fg%2F1tf7b8xd!19sChIJqebrs8FFAQcRF5MMKhQ0o3g?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJg___txRGAQcRXJyqT6bi908',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Menino Marcelo, 4501',
//         storeName: 'DACASA DISTRIBUIDORA',
//         phone: '(82) 3328-8806',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/Dacasa+Distribuidora/data=!4m7!3m6!1s0x7014614b7ffff83:0x4ff7e2a64faa9c5c!8m2!3d-9.5893329!4d-35.7309945!16s%2Fg%2F1tcy929_!19sChIJg___txRGAQcRXJyqT6bi908?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ21XyqpJFAQcRm6XSUE6M640',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Fernandes de Barros',
//         storeName: 'CONSTRUACENTRO',
//         phone: '(82) 99949-1938',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/ConstruaCentro/data=!4m7!3m6!1s0x7014592aaf255db:0x8deb8c4e50d2a59b!8m2!3d-9.6641316!4d-35.7398957!16s%2Fg%2F11vqn88bnn!19sChIJ21XyqpJFAQcRm6XSUE6M640?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ3YAp6gVPAQcRvRgZ8Qf1jsM',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Augusta',
//         storeName: 'RAMOS CONSTRUÇÕES',
//         phone: '(82) 99970-1454',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 5 comentários',
//         stars: 5,
//         numberOfReviews: 5,
//         googleUrl: 'https://www.google.com/maps/place/Ramos+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x7014f05ea2980dd:0xc38ef507f11918bd!8m2!3d-9.6629341!4d-35.7428924!16s%2Fg%2F11qgg1w10c!19sChIJ3YAp6gVPAQcRvRgZ8Qf1jsM?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJaz2Wy1FJAQcRW6XJn0zgfaU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Salvador Lyra - R. da Codeal, 94 - lote 119',
//         storeName: 'HOME CENTER MACEIÓ PRÉ-MOLDADOS',
//         phone: '(82) 98746-0265',
//         bizWebsite: null,
//         ratingText: '4,8 estrelas 35 comentários',
//         stars: 4.8,
//         numberOfReviews: 35,
//         googleUrl: 'https://www.google.com/maps/place/Home+Center+Macei%C3%B3+Pr%C3%A9-Moldados/data=!4m7!3m6!1s0x7014951cb963d6b:0xa57de04c9fc9a55b!8m2!3d-9.564293!4d-35.7554113!16s%2Fg%2F11h1jp4nwz!19sChIJaz2Wy1FJAQcRW6XJn0zgfaU?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJrTe6kSbydywRU2aK3H3DmIk',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Cel. Paranhos, 941',
//         storeName: 'SS MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 99683-5351',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/SS+Materiais+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x2c77f22691ba37ad:0x8998c37ddc8a6653!8m2!3d-9.6498712!4d-35.7205177!16s%2Fg%2F11spn4v062!19sChIJrTe6kSbydywRU2aK3H3DmIk?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJu84hhzxFAQcRujKVz3d_fck',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Juca Sampaio, 35',
//         storeName: 'CRIS CONSTRUÇÕES',
//         phone: '(82) 3221-7010',
//         bizWebsite: null,
//         ratingText: '4,8 estrelas 4 comentários',
//         stars: 4.8,
//         numberOfReviews: 4,
//         googleUrl: 'https://www.google.com/maps/place/Cris+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x701453c8721cebb:0xc97d7f77cf9532ba!8m2!3d-9.6353624!4d-35.7099467!16s%2Fg%2F11flc06r6m!19sChIJu84hhzxFAQcRujKVz3d_fck?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJPUiNR8VFAQcRNBbwN56tFng',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. São José, 105',
//         storeName: 'SAMEPE - LOJA DE MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 98873-7927',
//         bizWebsite: null,
//         ratingText: '3,7 estrelas 3 comentários',
//         stars: 3.7,
//         numberOfReviews: 3,
//         googleUrl: 'https://www.google.com/maps/place/SAMEPE+-+Loja+de+materiais+de+constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145c5478d483d:0x7816ad9e37f01634!8m2!3d-9.6407517!4d-35.7170223!16s%2Fg%2F11h3__vyqj!19sChIJPUiNR8VFAQcRNBbwN56tFng?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ-2qVyixGAQcRkqwMSmxGm1Y',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Menino Marcelo, 60',
//         storeName: 'ALDEBARAN CONSTRUÇÕES',
//         phone: '(82) 3358-5093',
//         bizWebsite: null,
//         ratingText: '4,0 estrelas 115 comentários',
//         stars: 4,
//         numberOfReviews: 115,
//         googleUrl: 'https://www.google.com/maps/place/Aldebaran+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x701462cca956afb:0x569b466c4a0cac92!8m2!3d-9.5855907!4d-35.7337838!16s%2Fg%2F11c4759wrj!19sChIJ-2qVyixGAQcRkqwMSmxGm1Y?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJyTuIEaJPAQcRzPRNASLmErQ',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Corinto Campêlo da Paz, Pref.',
//         storeName: 'R&R MATERIAIS DE CONSTRUÇÃO EM GERAL',
//         phone: '(82) 99821-5533',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 3 comentários',
//         stars: 5,
//         numberOfReviews: 3,
//         googleUrl: 'https://www.google.com/maps/place/R%26R+Materiais+de+constru%C3%A7%C3%A3o+em+geral/data=!4m7!3m6!1s0x7014fa211883bc9:0xb412e622014df4cc!8m2!3d-9.6626674!4d-35.7633252!16s%2Fg%2F11gg_19byz!19sChIJyTuIEaJPAQcRzPRNASLmErQ?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJq6qqqvpeFHARBjBbq804s1I',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Gov. Lamenha Filho, 1254',
//         storeName: 'CASA LAR',
//         phone: '(82) 3326-2848',
//         bizWebsite: null,
//         ratingText: '4,0 estrelas 25 comentários',
//         stars: 4,
//         numberOfReviews: 25,
//         googleUrl: 'https://www.google.com/maps/place/Casa+Lar/data=!4m7!3m6!1s0x70145efaaaaaaaab:0x52b338cdab5b3006!8m2!3d-9.6342898!4d-35.7255803!16s%2Fg%2F11fhr0d0jw!19sChIJq6qqqvpeFHARBjBbq804s1I?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJGxQGYJFFAQcRcy1LNiTLgYY',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Dr. Júlio Marques Luz, 1768',
//         storeName: 'PRA CASA',
//         phone: '(82) 99692-8068',
//         bizWebsite: null,
//         ratingText: '4,5 estrelas 2 comentários',
//         stars: 4.5,
//         numberOfReviews: 2,
//         googleUrl: 'https://www.google.com/maps/place/Pra+Casa/data=!4m7!3m6!1s0x70145916006141b:0x8681cb24364b2d73!8m2!3d-9.653194!4d-35.7150703!16s%2Fg%2F11fwh0fng7!19sChIJGxQGYJFFAQcRcy1LNiTLgYY?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJF4qvgW1GAQcRzcmA3bt9nvE',
//         status: 'Aberto',
//         category: 'Loja de Material Hidráulico',
//         address: 'Whatsapp & CEL: (82 - 988388655__Av. Pres. Roosevelt, 17',
//         storeName: 'VCL COMERCIAL',
//         phone: '(82) 3028-9122',
//         bizWebsite: null,
//         ratingText: '4,8 estrelas 29 comentários',
//         stars: 4.8,
//         numberOfReviews: 29,
//         googleUrl: 'https://www.google.com/maps/place/VCL+COMERCIAL/data=!4m7!3m6!1s0x701466d81af8a17:0xf19e7dbbdd80c9cd!8m2!3d-9.6156176!4d-35.7160534!16s%2Fg%2F11gdzwdwq5!19sChIJF4qvgW1GAQcRzcmA3bt9nvE?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJC1RnTjtFAQcRpCuZur1E4mY',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Estr. Jacarecica Pará',
//         storeName: 'MACEIÓ CONSTRUÇÕES',
//         phone: '(82) 3325-4688',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 1 comentários',
//         stars: 5,
//         numberOfReviews: 1,
//         googleUrl: 'https://www.google.com/maps/place/Macei%C3%B3+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x701453b4e67540b:0x66e244bdba992ba4!8m2!3d-9.6266215!4d-35.7199955!16s%2Fg%2F11fswbz_92!19sChIJC1RnTjtFAQcRpCuZur1E4mY?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJZZVJQ-pHAQcRAsadgPh0sRg',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Avenida Doutor Luiz Rocha Toledo ( Cj. Moacir Andrade Qd1, N°01 - Benedito Bentes2',
//         storeName: 'KLEBERTONY CONSTRUÇÃO',
//         phone: '(82) 3343-3051',
//         bizWebsite: null,
//         ratingText: '4,6 estrelas 115 comentários',
//         stars: 4.6,
//         numberOfReviews: 115,
//         googleUrl: 'https://www.google.com/maps/place/Klebertony+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70147ea43499565:0x18b174f8809dc602!8m2!3d-9.5667328!4d-35.7222384!16s%2Fg%2F11b75kk7pq!19sChIJZZVJQ-pHAQcRAsadgPh0sRg?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJaT5Ft3ZPAQcRTKkN61grWG0',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__R. Getúlio Corrêa Lima, 59',
//         storeName: 'NENA CONSTRUÇÃO',
//         phone: '(82) 98899-0792',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 10 comentários',
//         stars: 4.4,
//         numberOfReviews: 10,
//         googleUrl: 'https://www.google.com/maps/place/Nena+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014f76b7453e69:0x6d582b58eb0da94c!8m2!3d-9.6539049!4d-35.7559889!16s%2Fg%2F11hj9mtr5k!19sChIJaT5Ft3ZPAQcRTKkN61grWG0?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJfwNv3NxFAQcRSL_Lj3QbFbo',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Juca Sampaio, 1781',
//         storeName: 'NETTER CASA E CONSTRUÇÃO',
//         phone: '(82) 3311-7889',
//         bizWebsite: null,
//         ratingText: '3,5 estrelas 2 comentários',
//         stars: 3.5,
//         numberOfReviews: 2,
//         googleUrl: 'https://www.google.com/maps/place/Netter+Casa+e+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145dcdc6f037f:0xba151b748fcbbf48!8m2!3d-9.6336239!4d-35.7158412!16s%2Fg%2F11b6hk315s!19sChIJfwNv3NxFAQcRSL_Lj3QbFbo?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJoQCR2JtPAQcRBFLcFrcpYVw',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Dr. Virgílio Guedes, 1558',
//         storeName: 'DEPÓSITO PREÇO BOM',
//         phone: '(82) 3223-2017',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 44 comentários',
//         stars: 4.4,
//         numberOfReviews: 44,
//         googleUrl: 'https://www.google.com/maps/place/Dep%C3%B3sito+Pre%C3%A7o+Bom/data=!4m7!3m6!1s0x7014f9bd89100a1:0x5c6129b716dc5204!8m2!3d-9.6640198!4d-35.7569864!16s%2Fg%2F11bzwmyc2b!19sChIJoQCR2JtPAQcRBFLcFrcpYVw?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJr9_A81lHAQcR7TgFPyP3_zE',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. da Rádio Palmares',
//         storeName: 'O FEIRAO DA CONSTRUCAO',
//         phone: '(82) 3435-0142',
//         bizWebsite: null,
//         ratingText: '4,0 estrelas 33 comentários',
//         stars: 4,
//         numberOfReviews: 33,
//         googleUrl: 'https://www.google.com/maps/place/O+Feirao+da+Construcao/data=!4m7!3m6!1s0x7014759f3c0dfaf:0x31fff7233f0538ed!8m2!3d-9.5752134!4d-35.7385159!16s%2Fg%2F11k_43d3kf!19sChIJr9_A81lHAQcR7TgFPyP3_zE?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJVayym8NFAQcRNLDSOAQRFx4',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__R. Lions Club, 2',
//         storeName: 'COMERCIAL SANTOS',
//         phone: '(82) 3320-1228',
//         bizWebsite: null,
//         ratingText: '4,4 estrelas 27 comentários',
//         stars: 4.4,
//         numberOfReviews: 27,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Santos/data=!4m7!3m6!1s0x70145c39bb2ac55:0x1e17110438d2b034!8m2!3d-9.6366325!4d-35.7142572!16s%2Fg%2F1tjy1pqg!19sChIJVayym8NFAQcRNLDSOAQRFx4?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJLXqW6A9JAQcRe81gz7SN2FA',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Rua Santa Rita ,05 Clima bom 2',
//         storeName: 'COMERCIAL BASILIO, AL',
//         phone: '(82) 98881-1702',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 9 comentários',
//         stars: 5,
//         numberOfReviews: 9,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Basilio,+AL/data=!4m7!3m6!1s0x701490fe8967a2d:0x50d88db4cf60cd7b!8m2!3d-9.5700028!4d-35.7895049!16s%2Fg%2F11mw7jb6px!19sChIJLXqW6A9JAQcRe81gz7SN2FA?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJqxirsXRIAQcRPWRqLyJwLFA',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Empresário Raul Lucena Sarmento, 4',
//         storeName: 'COMERCIAL MATECON',
//         phone: '(82) 3334-5253',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 24 comentários',
//         stars: 4.2,
//         numberOfReviews: 24,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Matecon/data=!4m7!3m6!1s0x7014874b1ab18ab:0x502c70222f6a643d!8m2!3d-9.565796!4d-35.7454836!16s%2Fg%2F11c807qk00!19sChIJqxirsXRIAQcRPWRqLyJwLFA?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJFasE0sRFAQcRJF90LKYcpfM',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Whatsapp & CEL: (82 - 988388655__Av. Juca Sampaio, 5',
//         storeName: 'LADEIRÃO DA CONSTRUÇÃO',
//         phone: '(82) 98709-9176',
//         bizWebsite: null,
//         ratingText: '4,7 estrelas 7 comentários',
//         stars: 4.7,
//         numberOfReviews: 7,
//         googleUrl: 'https://www.google.com/maps/place/Ladeir%C3%A3o+da+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145c4d204ab15:0xf3a51ca62c745f24!8m2!3d-9.63522!4d-35.7099545!16s%2Fg%2F11g8lnymk4!19sChIJFasE0sRFAQcRJF90LKYcpfM?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJl179NENFAQcRqtNCSXGvN7I',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Gov. Lamenha Filho, 201-D',
//         storeName: 'MARTINS CONSTRUÇÕES',
//         phone: '(82) 98887-5190',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 4 comentários',
//         stars: 5,
//         numberOfReviews: 4,
//         googleUrl: 'https://www.google.com/maps/place/Martins+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x701454334fd5e97:0xb237af714942d3aa!8m2!3d-9.6445149!4d-35.7285626!16s%2Fg%2F11s664qrhh!19sChIJl179NENFAQcRqtNCSXGvN7I?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJC-6VZL1PAQcRYib09E9SIxQ',
//         status: 'Aberto',
//         category: 'Fornecedor de materiais de construção',
//         address: 'Av. Siqueira Campos, 2300',
//         storeName: 'NOSSA LOJA - MATERIAIS DE CONSTRUÇÃO',
//         phone: '(82) 98807-2582',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 4 comentários',
//         stars: 5,
//         numberOfReviews: 4,
//         googleUrl: 'https://www.google.com/maps/place/Nossa+Loja+-+Materiais+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014fbd6495ee0b:0x1423524ff4f42662!8m2!3d-9.6725854!4d-35.7613255!16s%2Fg%2F11n5lj2wbl!19sChIJC-6VZL1PAQcRYib09E9SIxQ?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJITZrK8pFAQcRDGlocVyDduo',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. João Davino, 303',
//         storeName: 'COMERCIAL EVANDRO',
//         phone: '(82) 3436-2047',
//         bizWebsite: null,
//         ratingText: '4,8 estrelas 4 comentários',
//         stars: 4.8,
//         numberOfReviews: 4,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Evandro/data=!4m7!3m6!1s0x70145ca2b6b3621:0xea76835c7168690c!8m2!3d-9.6432794!4d-35.7020617!16s%2Fg%2F1pw3x9s0p!19sChIJITZrK8pFAQcRDGlocVyDduo?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJRzcFH3pFAQcR7vVPCPGPzCM',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Rua do Encanto, 58',
//         storeName: 'LM CONSTRUÇÃO',
//         phone: null,
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 4 comentários',
//         stars: 5,
//         numberOfReviews: 4,
//         googleUrl: 'https://www.google.com/maps/place/LM+CONSTRU%C3%87%C3%83O/data=!4m7!3m6!1s0x701457a1f053747:0x23cc8ff1084ff5ee!8m2!3d-9.6378552!4d-35.7193257!16s%2Fg%2F11kx92f_lg!19sChIJRzcFH3pFAQcR7vVPCPGPzCM?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJAT6P3HVIAQcRoQveysxlhtA',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Menino Marcelo, 6900',
//         storeName: 'MBS MATERIAL DE CONSTRUÇÃO',
//         phone: '(82) 3432-9860',
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/MBS+Material+de+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014875dc8f3e01:0xd08665cccade0ba1!8m2!3d-9.5838557!4d-35.7351002!16s%2Fg%2F1s046qkpv!19sChIJAT6P3HVIAQcRoQveysxlhtA?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJDVeThPZIAQcRGdo6feaORiM',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. José Gonzaga de Almeida, 2',
//         storeName: 'COMERCIAL GUIMARÃES TORRES',
//         phone: '(82) 3033-1115',
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 1 comentários',
//         stars: 5,
//         numberOfReviews: 1,
//         googleUrl: 'https://www.google.com/maps/place/Comercial+Guimar%C3%A3es+Torres/data=!4m7!3m6!1s0x70148f68493570d:0x23468ee67d3ada19!8m2!3d-9.5695452!4d-35.7890326!16s%2Fg%2F11b6hkf5zg!19sChIJDVeThPZIAQcRGdo6feaORiM?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ5zHK03hPAQcRy5YTUiRElDs',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Bela Vista',
//         storeName: 'NEZINHO CONSTRUÇÃO',
//         phone: null,
//         bizWebsite: null,
//         ratingText: '4,0 estrelas 2 comentários',
//         stars: 4,
//         numberOfReviews: 2,
//         googleUrl: 'https://www.google.com/maps/place/Nezinho+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x7014f78d3ca31e7:0x3b944424521396cb!8m2!3d-9.6571594!4d-35.7464055!16s%2Fg%2F11kn6qqnlc!19sChIJ5zHK03hPAQcRy5YTUiRElDs?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJb6MCT5tPAQcRjNIfe2up0JQ',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Formosa, 1581',
//         storeName: 'CASA FORMOSA CONSTRUÇÕES',
//         phone: '(82) 98888-9163',
//         bizWebsite: null,
//         ratingText: '4,8 estrelas 25 comentários',
//         stars: 4.8,
//         numberOfReviews: 25,
//         googleUrl: 'https://www.google.com/maps/place/Casa+Formosa+Constru%C3%A7%C3%B5es/data=!4m7!3m6!1s0x7014f9b4f02a36f:0x94d0a96b7b1fd28c!8m2!3d-9.6638688!4d-35.7521209!16s%2Fg%2F11f3xlvgq1!19sChIJb6MCT5tPAQcRjNIfe2up0JQ?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ51MBVx9GAQcRzRmdmQERYYU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Maragogi, 230',
//         storeName: 'ALVORECER MATERIAIS DE CONSTRUÇÃO',
//         phone: null,
//         bizWebsite: null,
//         ratingText: null,
//         stars: null,
//         numberOfReviews: null,
//         googleUrl: 'https://www.google.com/maps/place/Alvorecer+Materiais+De+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x701461f570153e7:0x85611101999d19cd!8m2!3d-9.6042047!4d-35.7357603!16s%2Fg%2F11kn6tt62r!19sChIJ51MBVx9GAQcRzRmdmQERYYU?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJsQOoAh9GAQcRq9JbhOa4l9s',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Jundiá, 100',
//         storeName: 'EDVALDO CONSTRUÇOES',
//         phone: '(82) 98712-6271',
//         bizWebsite: null,
//         ratingText: '4,6 estrelas 21 comentários',
//         stars: 4.6,
//         numberOfReviews: 21,
//         googleUrl: 'https://www.google.com/maps/place/Edvaldo+Constru%C3%A7oes/data=!4m7!3m6!1s0x701461f02a803b1:0xdb97b8e6845bd2ab!8m2!3d-9.6060949!4d-35.7374343!16s%2Fg%2F11hj9ltx1n!19sChIJsQOoAh9GAQcRq9JbhOa4l9s?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJ20060-3_AwcR5O9eQTzua6s',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'Av. Dr. Júlio Marques Luz, 1338',
//         storeName: 'ARMAZÉM DA JATIUCA',
//         phone: '(82) 3377-6616',
//         bizWebsite: null,
//         ratingText: '4,2 estrelas 5 comentários',
//         stars: 4.2,
//         numberOfReviews: 5,
//         googleUrl: 'https://www.google.com/maps/place/Armaz%C3%A9m+da+jatiuca/data=!4m7!3m6!1s0x703ffedd33a4ddb:0xab6bee3c415eefe4!8m2!3d-9.6531661!4d-35.7112023!16s%2Fg%2F11bz__6pvt!19sChIJ20060-3_AwcR5O9eQTzua6s?authuser=0&hl=pt-BR&rclk=1'
//     },
//     {
//         placeId: 'ChIJS9h7uc1FAQcRjBeySvHUpBU',
//         status: 'Aberto',
//         category: 'Loja de materiais de construção',
//         address: 'R. Prof. Ernâni de Figueiredo Magalhães, 285',
//         storeName: 'CRISMAR MATERIAIS DE CONSTRUÇÃO',
//         phone: null,
//         bizWebsite: null,
//         ratingText: '5,0 estrelas 3 comentários',
//         stars: 5,
//         numberOfReviews: 3,
//         googleUrl: 'https://www.google.com/maps/place/Crismar+Materiais+De+Constru%C3%A7%C3%A3o/data=!4m7!3m6!1s0x70145cdb97bd84b:0x15a4d4f14ab2178c!8m2!3d-9.6379376!4d-35.700783!16s%2Fg%2F11kn6mr6n9!19sChIJS9h7uc1FAQcRjBeySvHUpBU?authuser=0&hl=pt-BR&rclk=1'
//     }
// ]
// sendCampaignData2(result, "'Materiais de construção' Maceió - AL");


function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1
}


export default async function sendCampaignData2(result, query) {
    let nameCampaign = query.replace(/'/g, "");
    let whatsappIdJoao = "4ca207b4-3ad7-44ab-9d39-e5ef79713ffe";
    let whatsappIdIgor = "771afedc-492b-4047-af4d-42b0bc33bac4";
    let queueIdJoao = "dc45f8f5-ef57-45ba-881e-0c14dffd72f8";
    let queueIdIgor = "8d781cf4-4b3f-400d-b183-c611404b863b";
    let messages = [];

    for (let i = 0; i < result.length; i++) {

        if (!(result[i].phone)) {
            continue
        }

        let name = await treatName(result[i].storeName);
        let number = await formataNumero(result[i].phone);


        if (!number) {
            continue
        }

        messages.push({
            "name": name,
            "number": number,
            "body": "Bom dia, tudo bem? Aqui é o Willian, encontrei a {{contactName}} através do Google. Gostaria de saber se a empresa de vocês atua no ramo de materiais de construção ou se comercializa produtos para construção civil." // mensagem que será enviada aos clientes
        });
    }


    if (messages.length === 0) { // Caso NENHUMA empresa tenha telefone e site, passar para a próxima cidade
        console.log("Nenhum dado gerado em: " + query)
        console.log(" ---------- / ---------- ");
        return;
    }

    // Estruturando objeto pra passar na API
    let campaignData;

    let meuNumero = gerarNumeroAleatorio();


    if (meuNumero % 2 == 0) {
        campaignData = {
            "name": nameCampaign,
            "whatsappId": whatsappIdJoao,
            "queueId": queueIdJoao,
            "messages": messages
        }
    }

    if (meuNumero % 2 !== 0) {
        campaignData = {
            "name": nameCampaign,
            "whatsappId": whatsappIdIgor,
            "queueId": queueIdIgor,
            "messages": messages
        }
    }


    // Tornar name: em "name": e assim por diante
    let jsonString = JSON.stringify(campaignData).replace(/'/g, '"');
    console.log(jsonString);

    await generateCampaign(jsonString, nameCampaign);
    messages = [];
}

// Tratativa para o nome que vem em maiúsculo
async function treatName(name) {
    let nameReplaced = name.replace(/['"]+/g, ""); // retirar ' e " dos nomes
    let words = nameReplaced.toLowerCase().trim().split(/\s+/);
    let newName = words.slice(0, 3);

    let wordsBlock = ['-', '.', '/', 'LTDA', 'inteligência', 'inteligente', 'e', '(', 'de'];

    if (wordsBlock.includes(newName[newName.length - 1])) { // verificando se a última palavra é "inútil"
        newName = words.slice(0, 2);
        return newName.join(" ");

    }

    
    return newName.join(" ");
}



// Fazer o post para a APÌ contendo os dados
async function generateCampaign(jsonString, query) {
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkOmNhbXBhaWducyIsIm1hbmFnZTpjYW1wYWlnbnMiLCJjcmVhdGU6bWVzc2FnZXMiLCJjcmVhdGU6bWVkaWFzIiwicmVhZDp3aGF0c2FwcHMiLCJ1cGRhdGU6d2hhdHNhcHBzIiwicmVhZDpxdWV1ZXMiLCJyZWFkOnVzZXJzIl0sImNvbXBhbnlJZCI6ImZmNDUzYmU5LTkyYzctNGVlZS1iNjE1LThmMTg5MDEzMTg0YSIsImlhdCI6MTcwNjE4MTM2Nn0.HrCeYP2zKSGMaePB2JX0va_ml1RjWIf-gKP6YU2I4M0" // Token do portal

    await fetch("https://api.beta.naty.app/api/v2/campaigns", { // Gerando a campanha
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken
        },
        body: jsonString
    })
        .then(response => {
            if (!response.ok) {
                response.json().then(errorData => {
                    throw new Error("Erro ao enviar dados da campanha: " + JSON.stringify(errorData));
                });
            }
            return response.json();
        })
        .then(data => {
            let campaignId = data.data.campaignId;
            suspendCampaign(campaignId, authToken, query) // Suspender a campanha pois ela já começa iniciada
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}


function suspendCampaign(campaignId, authToken, query) {
    fetch(`https://api.beta.naty.app/api/v2/campaigns/${campaignId}/suspend`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authToken // Token do portal da Naty
        }
    })
        .then(response => {
            if (!response.ok) {
                response.json().then(errorData => {
                    throw new Error("Erro ao enviar dados da campanha: " + JSON.stringify(errorData));
                });
            }
            return response.json();
        })
        .then(data => {
            console.log("Campanha gerada e suspensa: " + query);
            console.log(" ---------- / ---------- ");
        })
        .catch(error => {
            console.error("Erro:", error);
        });
}