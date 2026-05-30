// ─────────────────────────────────────────────────────────────────────────────
// i18n dictionary — single source of truth for all UI copy.
//
// To edit a text: find the section below and change the `es` (Spanish) and/or
// `en` (English) string. Both languages MUST keep the exact same shape — the
// `en` dictionary is type-checked against `es`, so a missing/renamed key is a
// compile error.
//
// Proper names are intentionally left identical in both languages: conference
// names (WorldMUN, HNMUN, …), "Model United Nations", "Peruvian Universities",
// "Board of Directors", "Ollas Comunes", "Beneficencia de Lima", etc.
// ─────────────────────────────────────────────────────────────────────────────

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

const es = {
  nav: {
    about: "Sobre nosotros",
    accionPeru: "Acción Perú",
    conferences: "Nuestras conferencias",
    experience: "La experiencia",
    cta: "Conócenos",
    openMenu: "Abrir menú",
    toggleLabel: "Cambiar idioma",
  },

  common: {
    previous: "Anterior",
    next: "Siguiente",
  },

  home: {
    heroTitle: "El equipo de debate más destacado del Perú",
    heroText:
      "Desde 2004, somos una organización liderada por estudiantes que representa al Perú en las conferencias de debate más prestigiosas del mundo. Formamos líderes capaces de generar impacto real a través del pensamiento crítico, la diplomacia y la acción.",
    aboutLabel: "Qué es Peruvian Universities",
    aboutHeading: "Una comunidad que transforma talento en liderazgo",
    aboutBody:
      "Peruvian Universities es una organización dedicada a potenciar el desarrollo académico y personal de sus miembros mediante el debate y la participación en Model United Nations. Nuestro equipo ha destacado a nivel internacional, convirtiéndose en uno de los más premiados en conferencias como Harvard WorldMUN.",
    aboutCta: "Conoce más",
    munHeading: "¿Qué es Model United Nations?",
    munIntro:
      "Model United Nations (MUN) es una simulación académica donde los participantes representan a países dentro de comités de las Naciones Unidas, debatiendo problemáticas globales actuales.",
    munList: [
      "Desarrolla liderazgo internacional",
      "Mejora tu oratoria y negociación",
      "Debate problemáticas globales reales",
    ],
    munQuote:
      "Siempre he sentido que el beneficio que me ha dado ser parte de PU es una deuda que no podré pagar. Al ser parte del equipo, debatir y dar lo mejor de ti, así como asumir nuevos retos dentro del equipo, esperas poder brindarles a los nuevos miembros la misma experiencia que tú has tenido, o incluso una mejor.",
    munQuoteName: "Miranda Paz",
    munQuoteRole: "Delegada de segundo año",
    skillsLabel: "Qué hacemos",
    skillsHeading: "Desarrollamos habilidades para impactar el mundo",
    skillsBody1:
      "Preparamos a nuestros miembros para destacar en escenarios internacionales mediante entrenamientos intensivos en debate, negociación y análisis político.",
    skillsBody2:
      "Nuestro enfoque está en el desarrollo de habilidades clave como comunicación efectiva, pensamiento crítico, liderazgo y trabajo en equipo. Participamos en conferencias de alto nivel donde nuestros delegados representan al Perú con excelencia.",
    skillsBody3:
      "Más allá de la competencia, buscamos formar personas capaces de liderar, influir y generar cambios significativos en la sociedad.",
    stats: [
      { value: "+200", label: "Delegados formados" },
      { value: "10", label: "Años formando líderes" },
      { value: "+650", label: "Premios internacionales" },
    ],
    contactLabel: "Contacto",
    contactHeading: "Sé parte de la próxima generación de líderes",
    contactIntro:
      "Si quieres desarrollar tu potencial, representar al Perú y formar parte de una comunidad global, estamos aquí para ayudarte a dar el siguiente paso.",
    contactDetails: "Datos de contacto",
    addressLabel: "Dirección",
    addressValue: "1435 Wellington Road, Windsor, Vic 3181, Australia",
    emailLabel: "Correo",
    phoneLabel: "Teléfono",
    whatsappCta: "Escríbenos por WhatsApp",
  },

  about: {
    heroTitle: "Impulsando el liderazgo desde el Perú hacia el mundo",
    heroText:
      "Peruvian Universities es una organización estudiantil que trabaja en la formación de líderes a través del debate académico y la participación en Model United Nations. Representamos al Perú en escenarios internacionales con excelencia, preparación y visión global.",
    yearsLabel: "AÑOS DE EXPERIENCIA",
    yearsBody:
      "A lo largo de los años, hemos consolidado un sistema de formación que combina entrenamiento académico, pensamiento estratégico y desarrollo personal.",
    essenceLabel: "Nuestra esencia",
    essenceHeading: "Una comunidad que trasciende el debate",
    cards: [
      {
        title: "Misión",
        body: "Desarrollar a nuestros miembros habilidades clave como liderazgo, pensamiento crítico y comunicación efectiva, preparándolos para representar al Perú en escenarios internacionales y generar impacto en sus entornos.",
      },
      {
        title: "Visión",
        body: "Consolidarnos como una de las organizaciones estudiantiles más influyentes de la región, reconocida por la excelencia de sus delegados y por su contribución al desarrollo de líderes comprometidos con el mundo.",
      },
      {
        title: "Valores",
        body: "Nos regimos por la excelencia, el compromiso, la integridad y la colaboración. Creemos en el poder del diálogo, el respeto por la diversidad de ideas y la responsabilidad de generar un cambio positivo en la sociedad.",
      },
    ],
    teamLabel: "Nuestro equipo",
    teamHeading: "Board of Directors y equipos de preparación",
    teamBody:
      "Nuestro Board of Directors y equipos de preparación están conformados por profesionales y alumni con experiencia en conferencias internacionales. Ellos guían el desarrollo de cada miembro, asegurando un entrenamiento de alto nivel y una preparación integral.",
  },

  history: {
    events: [
      {
        title: "La creación del Círculo de Estudios de las Naciones Unidas (CENU)",
        body: "Se crea el Círculo de Estudios de las Naciones Unidas (CENU), sentando las bases de lo que hoy es Peruvian Universities. Este fue el primer paso hacia la formación de una comunidad enfocada en el debate, el análisis global y el liderazgo estudiantil.",
      },
      {
        title: "Fundación de la comunidad",
        body: "Se consolidan los primeros esfuerzos de debate universitario en Lima, marcando el inicio de un proyecto académico que luego crecería a nivel nacional.",
      },
      {
        title: "Primera participación en Harvard WorldMUN",
        body: "Peruvian Universities debuta en Harvard WorldMUN, una de las conferencias más prestigiosas del mundo, iniciando una tradición de excelencia internacional.",
      },
      {
        title: "Reconocimiento internacional",
        body: "El equipo es reconocido por universidades de talla mundial por su desempeño en debate universitario.",
      },
      {
        title: "Líderes del ranking latinoamericano",
        body: "El equipo encabeza los rankings de debate universitario a nivel latinoamericano, consolidando la posición del Perú en la escena global.",
      },
      {
        title: "Programa de alumni",
        body: "Se consolida la red de alumni de Peruvian Universities, formada por ex-delegados que lideran iniciativas en organismos internacionales y empresas.",
      },
      {
        title: "Décima conferencia internacional",
        body: "Peruvian Universities celebra su décima participación en conferencias internacionales, acumulando cientos de premios y reconocimientos.",
      },
      {
        title: "Formación híbrida",
        body: "Se adapta el sistema de entrenamiento a formatos híbridos, ampliando el alcance de la formación académica.",
      },
      {
        title: "Subcampeones del mundo",
        body: "El equipo alcanza el podio mundial, posicionándose como subcampeones de debate universitario.",
      },
      {
        title: "Nueva generación",
        body: "Una nueva generación de líderes asume la representación internacional con una visión renovada.",
      },
      {
        title: "Hacia el futuro",
        body: "Peruvian Universities continúa su misión de formar profesionales comprometidos con el progreso colectivo del Perú y el mundo.",
      },
    ],
  },

  team: {
    // Role labels for the Board of Directors carousel (names are kept as-is).
    roles: [
      "CEO",
      "Directora",
      "Director de proyectos",
      "Coordinadora académica",
      "Líder de equipo",
      "Coordinadora de innovación",
    ],
  },

  accionPeru: {
    proposalLabel: "Nuestra propuesta",
    proposalHeading: "Formamos líderes que pasan a la acción",
    proposalBody:
      "Creemos que el liderazgo no se queda en el discurso. Por eso, impulsamos proyectos que permiten a nuestros miembros aplicar sus habilidades en contextos reales, combinando pensamiento estratégico, organización y compromiso social.",
    ollasLabel: "Apoyo directo a comunidades",
    ollasHeading: "Ollas Comunes",
    ollasBody:
      "Trabajamos junto a comunidades locales apoyando ollas comunes, contribuyendo con recursos y organización para atender a familias en situación vulnerable.",
    partnersLabel: "Alianzas para un mayor impacto",
    partnersHeading: "Collab con la Beneficencia de Lima",
    partnersBody:
      "Colaboramos con la Beneficencia de Lima en iniciativas orientadas al bienestar social, ampliando el alcance de nuestras acciones y fortaleciendo nuestros compromisos con la comunidad.",
    statProjects:
      "Proyectos desarrollados en conjunto con la Municipalidad de Lima, enfocados en impacto social y participación comunitaria.",
    statActivitiesLabel: "Actividades comunitarias",
    statActivitiesBody:
      "Jornadas de apoyo, visitas y acciones solidarias en barrios y zonas vulnerables de Lima Metropolitana.",
    statMembers:
      "De nuestros miembros participan activamente en iniciativas sociales, fortaleciendo su compromiso con la comunidad.",
    statVolunteeringLabel: "Voluntariado",
    statVolunteeringBody:
      "Voluntarios activos que participan en campañas, coordinación y seguimiento de cada intervención social.",
    statReachLabel: "Alcance 2026",
    statReachBody:
      "Primer año con una agenda ampliada de acciones comunitarias, alianzas y apoyo directo en la capital.",
  },

  conferencesCarousel: {
    descriptions: [
      "Participamos en World Model United Nations, una de las conferencias más prestigiosas del mundo. En 2026, nuestro equipo continúa llevando el nombre del Perú a escenarios internacionales, destacando por su preparación y excelencia.",
      "Organizamos PeruMUN, nuestra propia conferencia nacional de Modelo de Naciones Unidas, formando a la próxima generación de líderes y diplomáticos peruanos.",
      "Participamos en MOCAN, reforzando nuestras habilidades de debate y liderazgo en el ámbito del Modelo de Naciones Unidas a nivel nacional.",
    ],
  },

  conferences: {
    coachesLabel: "Entrenadores",
    // Per-conference year details. Keys (WorldMUN, HNMUN, …) are proper names.
    data: {
      WorldMUN: [
        {
          description:
            "WorldMUN es una de las conferencias de Model United Nations más prestigiosas del mundo. En este espacio, nuestros delegados compiten junto a estudiantes de universidades de élite, desarrollando habilidades de negociación, liderazgo y diplomacia en un entorno multicultural de alto nivel.",
          roles: ["CEO"],
        },
        {
          description:
            "Primera gran victoria de Peruvian Universities en WorldMUN. El equipo demostró excelencia académica y preparación de alto nivel, ganando reconocimiento internacional.",
          roles: ["Entrenador principal"],
        },
        {
          description:
            "Consolidamos nuestra posición como referentes del debate latinoamericano, con múltiples premios y distinciones en esta edición.",
          roles: ["Director académico"],
        },
        {
          description:
            "El equipo alcanza nuevos hitos de excelencia, siendo reconocido como delegación destacada por los organizadores de WorldMUN.",
          roles: ["Entrenador"],
        },
        {
          description:
            "Una de las participaciones más exitosas en la historia del equipo, con delegados premiados en múltiples comités simultáneamente.",
          roles: ["Entrenador líder"],
        },
        {
          description:
            "Peruvian Universities continúa su racha de éxitos, llevando el nombre del Perú a los más altos estándares del debate internacional.",
          roles: ["Entrenador"],
        },
        {
          description:
            "Décimo aniversario en WorldMUN. El equipo celebra una trayectoria de excelencia con la participación más numerosa de su historia.",
          roles: ["Director"],
        },
        {
          description:
            "Adaptándonos a los desafíos globales, participamos en la primera edición virtual de WorldMUN, demostrando resiliencia y flexibilidad.",
          roles: ["Entrenador"],
        },
        {
          description:
            "Regreso a la presencialidad con una participación histórica: Peruvian Universities se posiciona como subcampeón mundial.",
          roles: ["Entrenador principal"],
        },
        {
          description:
            "El equipo continúa su legado de excelencia, preparándose para superar sus propios récords en una nueva edición de WorldMUN.",
          roles: ["Entrenador"],
        },
        {
          description:
            "La próxima generación de líderes está lista. Peruvian Universities continúa representando al Perú con orgullo y excelencia.",
          roles: ["Entrenador"],
        },
      ],
      HNMUN: [
        {
          description:
            "Harvard National Model United Nations es una de las conferencias más reconocidas de la costa este de Estados Unidos. Peruvian Universities ha participado consistentemente, obteniendo premios y reconocimientos.",
          roles: ["Entrenador"],
        },
        {
          description:
            "Participación destacada en la conferencia HNMUN, con delegados premiados en comités de alto nivel.",
          roles: ["Entrenador líder"],
        },
        {
          description:
            "El equipo consolida su posición en HNMUN con una de sus mejores actuaciones, obteniendo distinciones en múltiples comités.",
          roles: ["Director"],
        },
      ],
      HNMUNLA: [
        {
          description:
            "Harvard National Model United Nations Latin America reúne a las mejores delegaciones de la región. Peruvian Universities es uno de los equipos más ganadores de esta conferencia.",
          roles: ["Entrenador"],
        },
        {
          description:
            "Participación sobresaliente con múltiples reconocimientos en una de las conferencias más competitivas de Latinoamérica.",
          roles: ["Entrenador líder"],
        },
      ],
      LIMUN: [
        {
          description:
            "London International Model United Nations es una de las conferencias más antiguas y respetadas de Europa. Peruvian Universities ha competido con distinción en su histórica sede londinense.",
          roles: ["Entrenador"],
        },
        {
          description:
            "Una de las participaciones más memorables en Europa, con delegados reconocidos por su preparación y argumentación.",
          roles: ["Director"],
        },
      ],
    },
  },

  experience: {
    filters: {
      all: "Todos",
      mun: "MUN",
      conferences: "Conferencias",
      competitions: "Competencias",
    },
    items: [
      { event: "Harvard WorldMUN 2024", title: "Lima, Perú" },
      { event: "ONU Lima 2023", title: "Conferencia anual" },
      { event: "Taller 2024", title: "Debate intensivo" },
      { event: "HNMUN 2023", title: "Boston, EE. UU." },
      { event: "PeruMUN 2024", title: "Lima, Perú" },
      { event: "Simulación 2022", title: "Competencia interna" },
    ],
    empty: "No hay elementos en esta categoría.",
    close: "Cerrar",
    testimonialsLabel: "Voces de nuestra comunidad",
    testimonialsHeading: "Experiencias de delegados",
    portraitAlt: "Retrato de delegada",
    testimonials: [
      {
        quote:
          "Siempre he sentido que el beneficio que me ha dado ser parte de PU es una deuda que no podré pagar. Al ser parte del equipo, debatir y dar lo mejor de ti, así como asumir nuevos retos dentro del equipo, esperas poder brindarles a los nuevos miembros la misma experiencia que tú has tenido, o incluso una mejor.",
        role: "Delegada de segundo año",
      },
      {
        quote:
          "Peruvian Universities cambió la forma en que veo el mundo. El entrenamiento, la disciplina y el sentido de comunidad me impulsaron a crecer más allá de mi zona de confort. Hoy trabajo en asuntos internacionales y le debo gran parte de eso a PU.",
        role: "Delegado egresado",
      },
      {
        quote:
          "Ser parte de PU significa ser parte de algo más grande que uno mismo. Cada conferencia, cada sesión de entrenamiento moldeó quién soy como líder y como persona. Estoy increíblemente orgullosa de representar al Perú en el escenario mundial.",
        role: "Delegada de último año",
      },
    ],
    prevTestimonial: "Testimonio anterior",
    nextTestimonial: "Siguiente testimonio",
  },

  footer: {
    columns: {
      org: "Peruvian Universities",
      mun: "¿Qué es MUN?",
      contact: "Contacto",
    },
    links: {
      home: "Inicio",
      about: "Sobre nosotros",
      accionPeru: "Acción Perú",
      conferences: "Conferencias",
      experience: "Experiencia",
      whatIs: "Qué es",
      howToJoin: "Cómo participar",
      team: "Equipo",
      contact: "Contacto",
      press: "Prensa",
    },
    addressLabel: "Dirección",
    emailLabel: "Correo",
    phoneLabel: "Teléfono",
    description:
      "Peruvian Universities es una comunidad dedicada a promover el diálogo académico y la participación estudiantil a través de conferencias, proyectos y programas formativos en Perú. Ponte en contacto para colaborar o participar.",
    poweredBy: "Powered by",
  },

  contactForm: {
    name: "Tu nombre",
    email: "Correo electrónico",
    phone: "Número de contacto",
    company: "Nombre de la empresa",
    message: "Tu mensaje",
    submit: "Escríbenos por WhatsApp",
    greeting: "Hola, soy",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  nav: {
    about: "About us",
    accionPeru: "Acción Perú",
    conferences: "Our Conferences",
    experience: "The experience",
    cta: "Get to know us",
    openMenu: "Open menu",
    toggleLabel: "Change language",
  },

  common: {
    previous: "Previous",
    next: "Next",
  },

  home: {
    heroTitle: "Peru's most outstanding debate team",
    heroText:
      "Since 2004, we are a student-led organization that represents Peru at the most prestigious debate conferences in the world. We shape leaders capable of generating real impact through critical thinking, diplomacy and action.",
    aboutLabel: "What is Peruvian Universities",
    aboutHeading: "A community that turns talent into leadership",
    aboutBody:
      "Peruvian Universities is an organization dedicated to boosting the academic and personal development of its members through debate and participation in Model United Nations. Our team has stood out internationally, becoming one of the most awarded at conferences such as Harvard WorldMUN.",
    aboutCta: "Learn more",
    munHeading: "What is Model United Nations?",
    munIntro:
      "Model United Nations (MUN) is an academic simulation where participants represent countries within United Nations committees, debating current global issues.",
    munList: [
      "Develop international leadership",
      "Improve your public speaking and negotiation",
      "Debate real global issues",
    ],
    munQuote:
      "I have always felt that the benefit that being part of PU has given me is a debt that I will not be able to pay. By being part of the team, debating and giving your best, as well as taking on new challenges within the team, you hope to give new members the same experience you have had, or even a better one.",
    munQuoteName: "Miranda Paz",
    munQuoteRole: "Sophomore Delegate",
    skillsLabel: "What we do",
    skillsHeading: "We develop skills to impact the world",
    skillsBody1:
      "We prepare our members to excel on international stages through intensive training in debate, negotiation and political analysis.",
    skillsBody2:
      "Our focus is on developing key skills such as effective communication, critical thinking, leadership and teamwork. We take part in high-level conferences where our delegates represent Peru with excellence.",
    skillsBody3:
      "Beyond competition, we seek to shape people capable of leading, influencing and driving meaningful change in society.",
    stats: [
      { value: "+200", label: "Delegates trained" },
      { value: "10", label: "Years shaping leaders" },
      { value: "+650", label: "International awards" },
    ],
    contactLabel: "Contact",
    contactHeading: "Be part of the next generation of leaders",
    contactIntro:
      "If you want to develop your potential, represent Peru and be part of a global community, we are here to help you take the next step.",
    contactDetails: "Contact details",
    addressLabel: "Address",
    addressValue: "1435 Wellington Road, Windsor, Vic 3181, Australia",
    emailLabel: "Email",
    phoneLabel: "Phone",
    whatsappCta: "Message us on WhatsApp",
  },

  about: {
    heroTitle: "Driving leadership from Peru to the world",
    heroText:
      "Peruvian Universities is a student organization that works to shape leaders through academic debate and participation in Model United Nations. We represent Peru on international stages with excellence, preparation and global vision.",
    yearsLabel: "YEARS OF EXPERIENCE",
    yearsBody:
      "Over the years, we have built a training system that combines academic preparation, strategic thinking and personal development.",
    essenceLabel: "Our essence",
    essenceHeading: "A community that transcends debate",
    cards: [
      {
        title: "Mission",
        body: "To develop in our members key skills such as leadership, critical thinking and effective communication, preparing them to represent Peru on international stages and generate impact in their communities.",
      },
      {
        title: "Vision",
        body: "To become one of the most influential student organizations in the region, recognized for the excellence of its delegates and its contribution to developing leaders committed to the world.",
      },
      {
        title: "Values",
        body: "We are guided by excellence, commitment, integrity and collaboration. We believe in the power of dialogue, respect for the diversity of ideas and the responsibility to create positive change in society.",
      },
    ],
    teamLabel: "Our team",
    teamHeading: "Board of Directors and Preparation Teams",
    teamBody:
      "Our Board of Directors and preparation teams are made up of professionals and alumni with experience at international conferences. They guide the development of every member, ensuring high-level training and comprehensive preparation.",
  },

  history: {
    events: [
      {
        title: "The creation of the Círculo de Estudios de las Naciones Unidas (CENU)",
        body: "The Círculo de Estudios de las Naciones Unidas (CENU) is created, laying the foundations of what today is Peruvian Universities. This was the first step toward building a community focused on debate, global analysis and student leadership.",
      },
      {
        title: "Founding of the community",
        body: "The first university debate efforts in Lima come together, marking the start of an academic project that would later grow nationwide.",
      },
      {
        title: "First participation in Harvard WorldMUN",
        body: "Peruvian Universities debuts at Harvard WorldMUN, one of the most prestigious conferences in the world, beginning a tradition of international excellence.",
      },
      {
        title: "International recognition",
        body: "The team is recognized by world-class universities for its performance in university debate.",
      },
      {
        title: "Leaders of the Latin American ranking",
        body: "The team tops the Latin American university debate rankings, consolidating Peru's position on the global stage.",
      },
      {
        title: "Alumni program",
        body: "The Peruvian Universities alumni network is consolidated, made up of former delegates who lead initiatives in international organizations and companies.",
      },
      {
        title: "Tenth international conference",
        body: "Peruvian Universities celebrates its tenth participation in international conferences, accumulating hundreds of awards and distinctions.",
      },
      {
        title: "Hybrid training",
        body: "The training system adapts to hybrid formats, broadening the reach of academic preparation.",
      },
      {
        title: "World runners-up",
        body: "The team reaches the world podium, finishing as runners-up in university debate.",
      },
      {
        title: "New generation",
        body: "A new generation of leaders takes on international representation with a renewed vision.",
      },
      {
        title: "Toward the future",
        body: "Peruvian Universities continues its mission to shape professionals committed to the collective progress of Peru and the world.",
      },
    ],
  },

  team: {
    roles: [
      "CEO",
      "Director",
      "Projects Director",
      "Academic Coordinator",
      "Team Lead",
      "Innovation Coordinator",
    ],
  },

  accionPeru: {
    proposalLabel: "Our proposal",
    proposalHeading: "We shape leaders who take action",
    proposalBody:
      "We believe leadership doesn't stop at words. That's why we drive projects that let our members apply their skills in real contexts, combining strategic thinking, organization and social commitment.",
    ollasLabel: "Direct support to communities",
    ollasHeading: "Ollas Comunes",
    ollasBody:
      "We work alongside local communities supporting ollas comunes (community kitchens), contributing resources and organization to help families in vulnerable situations.",
    partnersLabel: "Partnerships for greater impact",
    partnersHeading: "Collab with the Beneficencia de Lima",
    partnersBody:
      "We collaborate with the Beneficencia de Lima on social welfare initiatives, expanding the reach of our work and strengthening our commitments to the community.",
    statProjects:
      "Projects developed together with the Municipality of Lima, focused on social impact and community participation.",
    statActivitiesLabel: "Community activities",
    statActivitiesBody:
      "Support days, visits and solidarity actions in vulnerable neighborhoods and areas of Metropolitan Lima.",
    statMembers:
      "Of our members actively take part in social initiatives, strengthening their commitment to the community.",
    statVolunteeringLabel: "Volunteering",
    statVolunteeringBody:
      "Active volunteers who take part in campaigns, coordination and follow-up of every social intervention.",
    statReachLabel: "Reach 2026",
    statReachBody:
      "First year with an expanded agenda of community actions, partnerships and direct support in the capital.",
  },

  conferencesCarousel: {
    descriptions: [
      "We take part in World Model United Nations, one of the most prestigious conferences in the world. In 2026, our team continues to carry Peru's name to international stages, standing out for its preparation and excellence.",
      "We organize PeruMUN, our own national Model United Nations conference, training the next generation of Peruvian leaders and diplomats.",
      "We take part in MOCAN, strengthening our debate and leadership skills within Model United Nations at the national level.",
    ],
  },

  conferences: {
    coachesLabel: "Coaches",
    data: {
      WorldMUN: [
        {
          description:
            "WorldMUN is one of the most prestigious Model United Nations conferences in the world. Here, our delegates compete alongside students from elite universities, developing negotiation, leadership and diplomacy skills in a high-level multicultural environment.",
          roles: ["CEO"],
        },
        {
          description:
            "Peruvian Universities' first major victory at WorldMUN. The team demonstrated academic excellence and high-level preparation, earning international recognition.",
          roles: ["Head Coach"],
        },
        {
          description:
            "We consolidated our position as a benchmark of Latin American debate, with multiple awards and distinctions in this edition.",
          roles: ["Academic Director"],
        },
        {
          description:
            "The team reaches new milestones of excellence, being recognized as an outstanding delegation by the WorldMUN organizers.",
          roles: ["Coach"],
        },
        {
          description:
            "One of the most successful participations in the team's history, with delegates awarded in multiple committees simultaneously.",
          roles: ["Lead Coach"],
        },
        {
          description:
            "Peruvian Universities continues its streak of success, taking Peru's name to the highest standards of international debate.",
          roles: ["Coach"],
        },
        {
          description:
            "Tenth anniversary at WorldMUN. The team celebrates a track record of excellence with the largest delegation in its history.",
          roles: ["Director"],
        },
        {
          description:
            "Adapting to global challenges, we took part in the first virtual edition of WorldMUN, demonstrating resilience and flexibility.",
          roles: ["Coach"],
        },
        {
          description:
            "Return to in-person events with a historic participation: Peruvian Universities finishes as world runner-up.",
          roles: ["Head Coach"],
        },
        {
          description:
            "The team continues its legacy of excellence, preparing to break its own records in a new edition of WorldMUN.",
          roles: ["Coach"],
        },
        {
          description:
            "The next generation of leaders is ready. Peruvian Universities continues to represent Peru with pride and excellence.",
          roles: ["Coach"],
        },
      ],
      HNMUN: [
        {
          description:
            "Harvard National Model United Nations is one of the most renowned conferences on the East Coast of the United States. Peruvian Universities has participated consistently, earning awards and recognition.",
          roles: ["Coach"],
        },
        {
          description:
            "Outstanding participation at the HNMUN conference, with delegates awarded in high-level committees.",
          roles: ["Lead Coach"],
        },
        {
          description:
            "The team consolidates its position at HNMUN with one of its best performances, earning distinctions in multiple committees.",
          roles: ["Director"],
        },
      ],
      HNMUNLA: [
        {
          description:
            "Harvard National Model United Nations Latin America brings together the best delegations in the region. Peruvian Universities is one of the most winning teams at this conference.",
          roles: ["Coach"],
        },
        {
          description:
            "Outstanding participation with multiple awards at one of the most competitive conferences in Latin America.",
          roles: ["Lead Coach"],
        },
      ],
      LIMUN: [
        {
          description:
            "London International Model United Nations is one of the oldest and most respected conferences in Europe. Peruvian Universities has competed with distinction at its historic London venue.",
          roles: ["Coach"],
        },
        {
          description:
            "One of the most memorable participations in Europe, with delegates recognized for their preparation and argumentation.",
          roles: ["Director"],
        },
      ],
    },
  },

  experience: {
    filters: {
      all: "All",
      mun: "MUN",
      conferences: "Conferences",
      competitions: "Competitions",
    },
    items: [
      { event: "Harvard WorldMUN 2024", title: "Lima, Peru" },
      { event: "UN Lima 2023", title: "Annual conference" },
      { event: "Workshop 2024", title: "Intensive debate" },
      { event: "HNMUN 2023", title: "Boston, USA" },
      { event: "PeruMUN 2024", title: "Lima, Peru" },
      { event: "Simulation 2022", title: "Internal competition" },
    ],
    empty: "There are no items in this category.",
    close: "Close",
    testimonialsLabel: "Voices of our community",
    testimonialsHeading: "Delegates' experiences",
    portraitAlt: "Delegate portrait",
    testimonials: [
      {
        quote:
          "I have always felt that the benefit that being part of PU has given me is a debt that I will not be able to pay. By being part of the team, debating and giving your best, as well as taking on new challenges within the team, you hope to be able to give new members the same experience you have had, or even a better one.",
        role: "Sophomore Delegate",
      },
      {
        quote:
          "Peruvian Universities changed the way I see the world. The training, the discipline, and the sense of community pushed me to grow beyond my comfort zone. Today I work in international affairs and I owe a huge part of that to PU.",
        role: "Alumni Delegate",
      },
      {
        quote:
          "Being part of PU means being part of something greater than yourself. Every conference, every training session shaped who I am as a leader and as a person. I am incredibly proud to represent Peru on the world stage.",
        role: "Senior Delegate",
      },
    ],
    prevTestimonial: "Previous testimonial",
    nextTestimonial: "Next testimonial",
  },

  footer: {
    columns: {
      org: "Peruvian Universities",
      mun: "What is MUN?",
      contact: "Contact",
    },
    links: {
      home: "Home",
      about: "About us",
      accionPeru: "Acción Perú",
      conferences: "Conferences",
      experience: "Experience",
      whatIs: "What it is",
      howToJoin: "How to join",
      team: "Team",
      contact: "Contact",
      press: "Press",
    },
    addressLabel: "Address",
    emailLabel: "Email",
    phoneLabel: "Phone",
    description:
      "Peruvian Universities is a community dedicated to promoting academic dialogue and student participation through conferences, projects and training programs in Peru. Get in touch to collaborate or take part.",
    poweredBy: "Powered by",
  },

  contactForm: {
    name: "Your name",
    email: "Email address",
    phone: "Contact number",
    company: "Company name",
    message: "Your message",
    submit: "Message us on WhatsApp",
    greeting: "Hi, I'm",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };
