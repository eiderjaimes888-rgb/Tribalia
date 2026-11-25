/**
 * Catálogo oficial bilingüe (ES / EN) de productos Tribalia S.A.S.
 * Colores, descriptores y funcionalidades detalladas del Manual de Marca (Noviembre 2026).
 */
window.TRIBALIA_PRODUCTS = [
  {
    id: 'software-contable',
    slug: 'tribalia-software-contable',
    logo: 'assets/img/logos/tribalia-software-contable.svg',
    name: 'Tribalia Software Contable',
    shortName: 'Software Contable',
    tagline: 'Núcleo contable nativo con Inteligencia Artificial',
    tagline_en: 'AI-Native Core Accounting Platform',
    description:
      'Diseñada desde su arquitectura base para operar de manera nativa con Inteligencia Artificial. Importa y procesa facturas electrónicas de la DIAN con aprendizaje contextual privado para causar y contabilizar en segundos.',
    description_en:
      'Built from the ground up to operate natively with Artificial Intelligence. Imports and processes electronic invoices directly from DIAN with private contextual learning to record and post entries in seconds.',
    fullDescription:
      'Tribalia Software Contable es la solución central del ecosistema de Tribalia, concebida para transformar y simplificar de raíz la operación diaria de contadores públicos, auditores y departamentos financieros. A diferencia de los sistemas tradicionales a los que se les adapta tecnología de forma superficial, nuestra plataforma fue diseñada desde su arquitectura base para operar de manera nativa con Inteligencia Artificial.',
    fullDescription_en:
      'Tribalia Software Contable is the core solution of the Tribalia ecosystem, designed to transform and simplify the daily operations of public accountants, auditors, and finance departments. Unlike legacy systems with superficial add-ons, our platform was built from its core architecture to run natively on Artificial Intelligence.',
    accentColor: '#00A8E8',
    bridgeColor: '#0B2853',
    subdomain: 'https://contable.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-software-contable',
    videoUrl: '',
    screenshots: [],
    status: 'Core',
    status_en: 'Core',
    highlights: [
      'Importación directa desde el micrositio DIAN',
      'Causación autónoma con aprendizaje privado',
      'Aislamiento y soberanía total de datos'
    ],
    highlights_en: [
      'Direct import from the DIAN portal',
      'Autonomous posting with private AI learning',
      'Full data isolation and sovereignty'
    ],
    features: [
      {
        title: 'Importación y lectura directa desde la DIAN',
        desc: 'Procesa facturas de compra directamente desde los archivos descargados del micrositio de la DIAN ejecutando un aprendizaje continuo y contextual.'
      },
      {
        title: 'Causación autónoma en segundos',
        desc: 'Identifica y asocia automáticamente conceptos contables, cuentas y terceros recurrentes para contabilizar nuevas facturas con precisión.'
      },
      {
        title: 'Privacidad y soberanía de datos',
        desc: 'La información financiera y tributaria de cada cliente jamás alimenta modelos públicos: el aprendizaje permanece encapsulado en el entorno privado de cada compañía.'
      },
      {
        title: 'Control, auditoría y gestión unificada',
        desc: 'Integra herramientas de control, auditoría y reportes financieros en una sola interfaz intuitiva para liberar tiempo hacia el análisis estratégico.'
      }
    ],
    features_en: [
      {
        title: 'Direct DIAN import & processing',
        desc: 'Processes purchase invoices directly from files downloaded from the DIAN portal with continuous contextual learning.'
      },
      {
        title: 'Autonomous posting in seconds',
        desc: 'Automatically identifies and maps accounting concepts, accounts, and recurring third parties to post new invoices accurately.'
      },
      {
        title: 'Strict data privacy & sovereignty',
        desc: 'Client financial and tax data never trains public models: AI learning remains strictly isolated inside each company’s private environment.'
      },
      {
        title: 'Unified control & financial reporting',
        desc: 'Integrates auditing, control, and accounting management tools in one intuitive interface so CPAs can focus on high-value strategy.'
      }
    ]
  },
  {
    id: 'complementos',
    slug: 'tribalia-complementos',
    logo: 'assets/img/logos/tribalia-complementos.svg',
    name: 'Tribalia Complementos',
    shortName: 'Complementos',
    tagline: 'Suite modular de utilidades contables y tributarias con IA',
    tagline_en: 'Modular AI Suite for Accounting & Tax Utilities',
    description:
      'Automatiza procesos críticos de validación fiscal, descarga masiva DIAN, auditoría de nómina electrónica, conciliación bancaria asistida y proyección de renta, integrándose con cualquier software contable.',
    description_en:
      'Automates critical tax validation, bulk DIAN invoice downloads, electronic payroll auditing, assisted bank reconciliation, and income tax projection—integrating seamlessly with any accounting software.',
    fullDescription:
      'Tribalia Complementos es una suite modular de utilidades especializadas diseñada para contadores públicos, auditores y equipos financieros que buscan eliminar la operatividad mecánica y elevar su capacidad de análisis mediante herramientas potenciadas con Inteligencia Artificial. Se integra de forma ágil con cualquier sistema contable del mercado.',
    fullDescription_en:
      'Tribalia Complementos is a modular suite of specialized utilities built for public accountants, auditors, and finance teams looking to eliminate manual data entry and boost analytical capacity through AI-powered tools. It integrates smoothly with any accounting system on the market.',
    accentColor: '#008B7A',
    bridgeColor: '#0A5B75',
    subdomain: 'https://complementos.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-complementos',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Descarga masiva de comprobantes DIAN',
      'Análisis inteligente de retenciones y Nómina',
      'Conversión de extractos PDF y conciliación'
    ],
    highlights_en: [
      'Bulk DIAN electronic document download',
      'Smart withholding & electronic payroll analysis',
      'PDF bank statement conversion & reconciliation'
    ],
    features: [
      {
        title: 'Descarga masiva de comprobantes DIAN',
        desc: 'Obtén en lote facturas electrónicas directamente desde el micrositio DIAN usando códigos CUFE o el archivo Excel de documentos emitidos y recibidos.'
      },
      {
        title: 'Análisis inteligente de retenciones',
        desc: 'Evalúa el contenido y contexto de cada factura para recomendar con precisión retenciones en la fuente aplicables (Renta, IVA, ICA).'
      },
      {
        title: 'Gestión y auditoría de Nómina Electrónica',
        desc: 'Consolida la nómina electrónica reportada para cruzarla contra nóminas internas y genera interfaces listas para contabilizar en cualquier software.'
      },
      {
        title: 'Conversión de extractos y conciliación bancaria',
        desc: 'Transforma extractos bancarios en PDF a hojas de cálculo Excel estructuradas y ejecuta el cruce inteligente contra el libro auxiliar contable.'
      },
      {
        title: 'Proyección del Impuesto de Renta',
        desc: 'Modela y estima el comportamiento financiero y fiscal proyectando el resultado del ejercicio al cierre para decisiones gerenciales anticipadas.'
      }
    ],
    features_en: [
      {
        title: 'Bulk DIAN invoice downloads',
        desc: 'Automatically fetch batches of electronic invoices from DIAN using CUFE codes or the Excel list of issued/received documents.'
      },
      {
        title: 'Smart withholding tax analysis',
        desc: 'Evaluates invoice content and context to accurately recommend applicable withholdings (Income Tax, VAT, ICA).'
      },
      {
        title: 'Electronic Payroll auditing',
        desc: 'Consolidates reported electronic payroll to cross-check against internal payrolls and generates ready-to-post accounting interfaces.'
      },
      {
        title: 'Bank statement conversion & reconciliation',
        desc: 'Converts PDF bank statements into structured Excel sheets and runs smart matching against your accounting ledger.'
      },
      {
        title: 'Income Tax projection',
        desc: 'Models financial and tax behavior to project year-end results for proactive management and tax planning.'
      }
    ]
  },
  {
    id: 'compliance',
    slug: 'tribalia-compliance',
    logo: 'assets/img/logos/tribalia-compliance.svg',
    name: 'Tribalia Compliance',
    shortName: 'Compliance',
    tagline: 'Control normativo, vencimientos y rentabilidad por cliente',
    tagline_en: 'Regulatory Control, Deadlines & Client Profitability',
    description:
      'Blinda el cumplimiento legal y tributario con hoja de vida integral por cliente, calendario inteligente por células de trabajo, control de tiempos laborados (Time Tracking) y análisis real de rentabilidad.',
    description_en:
      'Safeguards legal and tax compliance with a comprehensive client profile, smart team-cell deadline calendar, accurate Time Tracking, and real-time client profitability analytics.',
    fullDescription:
      'Tribalia Compliance es una plataforma integral de control normativo, gestión operativa y rentabilidad diseñada para firmas contables, áreas financieras y equipos empresariales. Transforma el seguimiento disperso de fechas y tareas en un modelo de gobierno operativo predecible, rentable y libre de contingencias.',
    fullDescription_en:
      'Tribalia Compliance is a comprehensive regulatory control, operations, and profitability platform built for accounting firms, finance departments, and business teams—turning scattered spreadsheets into a predictable, profitable governance model.',
    accentColor: '#D98A2B',
    bridgeColor: '#F4B961',
    subdomain: 'https://compliance.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-compliance',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Calendario inteligente de vencimientos',
      'Time Tracking por colaborador y cuenta',
      'Margen de utilidad real por cliente'
    ],
    highlights_en: [
      'Smart tax & legal deadline calendar',
      'Time Tracking by team member and account',
      'Real profit margin per client'
    ],
    features: [
      {
        title: 'Hoja de vida integral del cliente',
        desc: 'Centraliza el perfil fiscal y corporativo de cada empresa parametrizando sus responsabilidades y obligaciones periódicas.'
      },
      {
        title: 'Calendario inteligente y flujo por equipos',
        desc: 'Organiza cronogramas asignados por células de trabajo con alertas cuando una actividad está lista para revisión, aprobada o enviada.'
      },
      {
        title: 'Control de tiempos laborados (Time Tracking)',
        desc: 'Registra con precisión las horas invertidas por cada colaborador en las actividades de cada cuenta para medir carga operativa real.'
      },
      {
        title: 'Análisis de rentabilidad y margen por cliente',
        desc: 'Cruza automáticamente el costo de mano de obra invertida frente a los honorarios de cada cliente para calcular el margen real de utilidad.'
      }
    ],
    features_en: [
      {
        title: 'Comprehensive client profile',
        desc: 'Centralizes each company’s tax and corporate profile, configuring specific responsibilities and recurring obligations.'
      },
      {
        title: 'Smart team-cell calendar & workflow',
        desc: 'Organizes deadlines by work cells with status alerts when deliverables are ready for review, approved, or sent.'
      },
      {
        title: 'Time Tracking per account',
        desc: 'Accurately tracks hours invested by each team member per client account to reveal real operational workload.'
      },
      {
        title: 'Client profitability & margin analytics',
        desc: 'Automatically crosses labor costs against client retainers to calculate true contract profit margins.'
      }
    ]
  },
  {
    id: 'exogena',
    slug: 'tribalia-exogena',
    logo: 'assets/img/logos/tribalia-exogena.svg',
    name: 'Tribalia Exógena',
    shortName: 'Exógena',
    tagline: 'Medios Magnéticos Nacionales (DIAN) y Distritales',
    tagline_en: 'Automated DIAN & Municipal Tax Information Reporting',
    description:
      'Automatiza, estructura y valida los reportes de Información Exógena Nacional (DIAN) y Distrital de Bogotá, verificando conceptos, cuantías mínimas, topes y terceros antes de generar los XML oficiales.',
    description_en:
      'Automates, structures, and validates DIAN National and Bogotá District Magnetic Media tax reports—verifying concepts, thresholds, and third-party data before generating official XML files.',
    fullDescription:
      'Tribalia Exógena es una solución especializada diseñada para automatizar, estructurar y blindar la elaboración y validación de los reportes de Información Exógena (Medios Magnéticos). Transforma grandes volúmenes de registros contables en formatos listos para transmisión oficial.',
    fullDescription_en:
      'Tribalia Exógena is a specialized solution designed to automate, structure, and safeguard Exógena (Magnetic Media) tax reporting—transforming large volumes of accounting entries into official, submission-ready formats.',
    accentColor: '#9A4896',
    bridgeColor: '#6B328A',
    subdomain: 'https://exogena.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-exogena',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Armado automatizado según resoluciones vigentes',
      'Cobertura DIAN Nacional y Bogotá',
      'Auditoría previa antes de generar XML'
    ],
    highlights_en: [
      'Automated format assembly under current rules',
      'National DIAN and Bogotá coverage',
      'Pre-audit checks before XML generation'
    ],
    features: [
      {
        title: 'Armado automatizado de formatos',
        desc: 'Clasifica y agrupa la información contable según las resoluciones vigentes, reduciendo drásticamente las horas en cruces y hojas de cálculo.'
      },
      {
        title: 'Cobertura nacional y territorial en expansión',
        desc: 'Operación integral sobre Exógena Nacional (DIAN) y Distrital de Bogotá, con evolución continua hacia nuevas jurisdicciones municipales.'
      },
      {
        title: 'Control preventivo y trazabilidad',
        desc: 'Facilita la auditoría previa de saldos, cuantías mínimas, topes, retenciones y bases gravables antes de generar los XML oficiales.'
      }
    ],
    features_en: [
      {
        title: 'Automated format assembly',
        desc: 'Classifies and groups accounting data under current tax resolutions, drastically cutting manual spreadsheet work.'
      },
      {
        title: 'National & municipal coverage',
        desc: 'Full support for DIAN National and Bogotá District reporting, with scalable architecture for additional municipalities.'
      },
      {
        title: 'Preventive audit & traceability',
        desc: 'Validates balances, minimum thresholds, withholdings, and tax bases prior to generating official XML files.'
      }
    ]
  },
  {
    id: 'rentas-naturales',
    slug: 'tribalia-rentas-naturales',
    logo: 'assets/img/logos/tribalia-rentas-naturales.svg',
    name: 'Tribalia Rentas Naturales',
    shortName: 'Rentas Naturales',
    tagline: 'Declaración de Renta de Personas Naturales (210 / 110)',
    tagline_en: 'Individual Income Tax Return Preparation (Forms 210 / 110)',
    description:
      'Arquitectura dual con Modo Asistido para contribuyentes y Modo Despacho para contadores. Carga directa de Exógena DIAN, asistente conversacional con IA, estados financieros y conciliación patrimonial.',
    description_en:
      'Dual architecture featuring Assisted Mode for individuals and Firm Mode for CPAs. Direct DIAN Exógena upload, conversational AI tax assistant, financial statements, and net worth reconciliation.',
    fullDescription:
      'Tribalia Rentas Naturales es una aplicación web especializada en la elaboración, depuración y auditoría de la Declaración de Renta de Personas Naturales en Colombia. Integra la carga directa de Información Exógena de la DIAN y un asistente conversacional con Inteligencia Artificial.',
    fullDescription_en:
      'Tribalia Rentas Naturales is a web application specialized in preparing, auditing, and filing Individual Income Tax Returns in Colombia—combining direct DIAN Exógena import with a conversational AI tax assistant.',
    accentColor: '#559646',
    bridgeColor: '#C86432',
    subdomain: 'https://rentas.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-rentas-naturales',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Modo Asistido y Modo Despacho profesional',
      'Borrador oficial formularios 210 y 110',
      'Anexos explicativos con sustento normativo'
    ],
    highlights_en: [
      'Assisted Mode & Professional Firm Mode',
      'Official Form 210 & 110 tax drafts',
      'Detailed schedules with legal backing'
    ],
    features: [
      {
        title: 'Modo Asistido (Contribuyentes)',
        desc: 'Guía paso a paso mediante preguntas sencillas y validaciones automáticas, traduciendo la exógena en una declaración clara y sin tecnicismos.'
      },
      {
        title: 'Modo Despacho (Contadores y firmas)',
        desc: 'Entorno ágil de alto rendimiento para liquidar múltiples declaraciones, comparar frente al año anterior y auditar partidas con control técnico.'
      },
      {
        title: 'Borrador oficial y anexos normativos',
        desc: 'Genera valores listos para formularios 210 y 110 junto con anexos explicativos renglón a renglón con sustento legal y tributario.'
      },
      {
        title: 'Estados financieros y conciliación patrimonial',
        desc: 'Generación automática de Estado de Situación Financiera, Estado de Resultados, cruce Exógena y Conciliación del Incremento Patrimonial.'
      }
    ],
    features_en: [
      {
        title: 'Assisted Mode (Taxpayers)',
        desc: 'Step-by-step guidance with plain questions and automatic checks that translate DIAN Exógena into an accurate tax return.'
      },
      {
        title: 'Firm Mode (CPAs & Tax Firms)',
        desc: 'High-speed workspace to prepare multiple returns, compare year-over-year figures, and audit line items with full technical control.'
      },
      {
        title: 'Official draft & legal schedules',
        desc: 'Produces ready-to-file Form 210 / 110 figures plus line-by-line explanatory schedules with legal and tax citations.'
      },
      {
        title: 'Financial statements & net worth reconciliation',
        desc: 'Automatically builds Balance Sheet, Income Statement, Exógena cross-checks, and Net Worth Increase Reconciliation.'
      }
    ]
  },
  {
    id: 'egresos',
    slug: 'tribalia-egresos',
    logo: 'assets/img/logos/tribalia-egresos.svg',
    name: 'Tribalia Egresos',
    shortName: 'Egresos',
    tagline: 'Registro multimodal por voz, chat y foto en tiempo real',
    tagline_en: 'Real-Time Voice, Chat & Photo Expense Capture',
    description:
      'Elimina soportes extraviados y desorden operativo permitiendo a tus colaboradores dictar pagos por nota de voz o chat y adjuntar fotografías de recibos al instante, consolidando informes listos para contabilidad.',
    description_en:
      'Eliminates lost receipts and operational friction by letting staff log payments via voice notes or chat and snap receipt photos on the spot, consolidating audit-ready accounting reports.',
    fullDescription:
      'Tribalia Egresos resuelve uno de los mayores retos operativos de las organizaciones: el control, registro y trazabilidad del uso de recursos financieros en tiempo real. Elimina la pérdida de información y los soportes extraviados desde el instante en que ocurre el gasto.',
    fullDescription_en:
      'Tribalia Egresos solves one of the biggest operational challenges in organizations: real-time control, logging, and traceability of cash disbursements from the exact moment an expense occurs.',
    accentColor: '#149CB8',
    bridgeColor: '#0E7490',
    subdomain: 'https://egresos.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-egresos',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Registro rápido por voz y chat asistido',
      'Digitalización instantánea desde móvil',
      'Puente directo hacia causación contable'
    ],
    highlights_en: [
      'Fast voice & AI-chat expense logging',
      'Instant mobile receipt digitization',
      'Direct bridge to accounting entries'
    ],
    features: [
      {
        title: 'Registro por voz y chat asistido',
        desc: 'Los colaboradores dictan por nota de voz o chat el beneficiario, monto, concepto y fecha, transformando instrucciones cotidianas en registros estructurados.'
      },
      {
        title: 'Digitalización instantánea de soportes',
        desc: 'Adjunta fotografías de recibos, facturas o comprobantes directamente desde cualquier dispositivo móvil vinculando la evidencia física al movimiento.'
      },
      {
        title: 'Trazabilidad y puente con contabilidad',
        desc: 'Consolida todos los egresos en un informe organizado, auditable y listo para causar, legalizar anticipos y contabilizar en el sistema financiero.'
      }
    ],
    features_en: [
      {
        title: 'Voice & AI-chat logging',
        desc: 'Staff dictate payee, amount, concept, and date via voice notes or chat, turning everyday instructions into structured records.'
      },
      {
        title: 'Instant mobile receipt capture',
        desc: 'Attach photos of receipts or vouchers directly from any mobile phone, linking physical evidence to each disbursement.'
      },
      {
        title: 'Audit-ready accounting bridge',
        desc: 'Consolidates all expenses into an organized, auditable report ready for posting and advance reconciliation.'
      }
    ]
  },
  {
    id: 'legalizaciones',
    slug: 'tribalia-legalizaciones',
    logo: 'assets/img/logos/tribalia-legalizaciones.svg',
    name: 'Tribalia Legalizaciones',
    shortName: 'Legalizaciones',
    tagline: 'Control tributario de anticipos y cajas menores',
    tagline_en: 'Tax-Compliant Advance & Petty Cash Management',
    description:
      'Legalización de gastos en tiempo real con validación automática de facturas electrónicas y alertas para emisión oportuna del Documento Soporte Electrónico con No Obligados a Facturar.',
    description_en:
      'Real-time expense legalization with automatic electronic invoice verification and instant alerts to issue Electronic Support Documents for non-invoicing vendors.',
    fullDescription:
      'Tribalia Legalizaciones es una aplicación especializada para empresas que gestionan anticipos a empleados y fondos de caja menor. Automatiza el control documental mediante un motor de validación tributaria inteligente que blinda la deducibilidad fiscal de cada gasto.',
    fullDescription_en:
      'Tribalia Legalizaciones is built for companies managing employee advances and petty cash funds—automating document verification through a smart tax validation engine that protects expense deductibility.',
    accentColor: '#BA8E36',
    bridgeColor: '#7D6B46',
    subdomain: 'https://legalizaciones.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-legalizaciones',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Validación automática de facturas electrónicas',
      'Alertas de Documento Soporte (No Obligados)',
      'Control de saldos por colaborador'
    ],
    highlights_en: [
      'Automatic e-invoice tax validation',
      'Electronic Support Document alerts',
      'Balance tracking per employee'
    ],
    features: [
      {
        title: 'Verificación automática de documentos electrónicos',
        desc: 'Valida de forma autónoma la autenticidad, vigencia y validez legal de las facturas electrónicas adjuntadas ante la normativa tributaria.'
      },
      {
        title: 'Alertas para gestión de no obligados a facturar',
        desc: 'Notifica de inmediato al equipo administrativo cuando un soporte es físico o de no obligado, asegurando la emisión del Documento Soporte Electrónico.'
      },
      {
        title: 'Control integral de anticipos y cajas menores',
        desc: 'Centraliza saldos entregados, montos legalizados y soportes aprobados por colaborador o centro de costo, agilizando el cierre contable.'
      }
    ],
    features_en: [
      {
        title: 'Automatic e-invoice verification',
        desc: 'Autonomously validates authenticity, status, and tax compliance of attached electronic invoices.'
      },
      {
        title: 'Non-invoicing vendor alerts',
        desc: 'Immediately alerts the admin team when a physical receipt is uploaded so the Electronic Support Document is issued on time.'
      },
      {
        title: 'End-to-end advance & petty cash control',
        desc: 'Centralizes disbursed balances, legalized amounts, and approved receipts by employee or cost center.'
      }
    ]
  },
  {
    id: 'capacitaciones',
    slug: 'tribalia-capacitaciones',
    logo: 'assets/img/logos/tribalia-capacitaciones.svg',
    name: 'Tribalia Capacitaciones',
    shortName: 'Capacitaciones',
    tagline: 'Formación continua y aulas sincrónicas con IA',
    tagline_en: 'Continuing Education & AI-Powered Live Classrooms',
    description:
      'Ecosistema de aprendizaje híbrido en tributaria, laboral, NIIF y gestión empresarial. Incluye aulas en vivo con transcripción automática, resúmenes con IA, pódcast, evaluaciones y rutas corporativas.',
    description_en:
      'Hybrid learning ecosystem covering tax, labor law, IFRS, and business management. Features live rooms with auto-transcription, AI executive summaries, podcasts, quizzes, and corporate tracks.',
    fullDescription:
      'Tribalia Capacitaciones es una plataforma integral de formación continua y educación no formal diseñada para potenciar la actualización profesional en tributaria, derecho laboral, NIIF y gestión empresarial con entornos colaborativos asistidos por Inteligencia Artificial.',
    fullDescription_en:
      'Tribalia Capacitaciones is a comprehensive continuing education platform designed to elevate professional skills in tax, labor law, IFRS, and business management through AI-assisted collaborative environments.',
    accentColor: '#22B560',
    bridgeColor: '#0D7A68',
    subdomain: 'https://capacitaciones.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-capacitaciones',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Rutas asincrónicas públicas y privadas',
      'Aulas en vivo con transcripción y resumen IA',
      'Videos, pódcast y aprendizaje gamificado'
    ],
    highlights_en: [
      'Public & private asynchronous learning paths',
      'Live classrooms with AI transcription & notes',
      'Videos, podcasts & gamified learning'
    ],
    features: [
      {
        title: 'Formación asincrónica y creación de contenidos',
        desc: 'Acceso permanente a programas de actualización técnica y creación de rutas internas (públicas o privadas) a la medida de cada empresa.'
      },
      {
        title: 'Aulas sincrónicas con asistencia de IA',
        desc: 'Salas de videoconferencia en vivo equipadas con grabación, transcripción automática, notas estructuradas y resúmenes ejecutivos generados por IA.'
      },
      {
        title: 'Recursos multimodales y aprendizaje didáctico',
        desc: 'Supera la lectura plana integrando videos explicativos, pódcast, evaluaciones interactivas y dinámicas gamificadas (juegos).'
      }
    ],
    features_en: [
      {
        title: 'Asynchronous tracks & custom courses',
        desc: 'On-demand access to technical updates plus tools for companies to build public or private internal training paths.'
      },
      {
        title: 'AI-assisted live classrooms',
        desc: 'Live video rooms with recording, automatic transcription, structured notes, and AI-generated executive summaries.'
      },
      {
        title: 'Multimodal & gamified learning',
        desc: 'Goes beyond plain text with explainer videos, podcasts, interactive quizzes, and gamified challenges.'
      }
    ]
  },
  {
    id: 'meeting',
    slug: 'tribalia-meeting',
    logo: 'assets/img/logos/tribalia-meeting.svg',
    name: 'Tribalia Meeting',
    shortName: 'Meeting',
    tagline: 'Videoconferencias ejecutivas seguras sin descargas',
    tagline_en: 'Zero-Download Encrypted Executive Video Meetings',
    description:
      'Plataforma de asesoría virtual cifrada de extremo a extremo. Tus clientes ingresan con un clic desde el navegador mediante enlace único, sin instalar software ni crear cuentas, ideal para proyectar estados financieros.',
    description_en:
      'End-to-end encrypted virtual advisory platform. Clients join with a single click from any browser via a private link—no downloads or accounts required—ideal for presenting financial reports.',
    fullDescription:
      'Tribalia Meeting es una plataforma especializada de videoconferencias y asesoría virtual diseñada para elevar la comunicación entre firmas, consultores y clientes bajo un estándar de accesibilidad inmediata y confidencialidad absoluta.',
    fullDescription_en:
      'Tribalia Meeting is a specialized video conferencing and virtual advisory platform built to elevate communication between firms, consultants, and clients with instant browser access and absolute confidentiality.',
    accentColor: '#EC4899',
    bridgeColor: '#4F46E5',
    subdomain: 'https://meeting.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-meeting',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Acceso instantáneo sin descargas ni cuentas',
      'Enlaces únicos cifrados de extremo a extremo',
      'Proyección ejecutiva de informes'
    ],
    highlights_en: [
      'Instant browser access, no downloads needed',
      'End-to-end encrypted private links',
      'Executive report & statement presentation'
    ],
    features: [
      {
        title: 'Acceso sin fricción y seguridad cifrada',
        desc: 'Conexión directa desde el navegador mediante enlaces privados y cifrados de extremo a extremo enviados al correo, sin descargar software ni crear cuentas.'
      },
      {
        title: 'Proyección ejecutiva de informes y documentos',
        desc: 'Visualización compartida en tiempo real de estados financieros, declaraciones, contratos y presentaciones con máxima nitidez.'
      },
      {
        title: 'Interacción dinámica y resolución de consultas',
        desc: 'Espacios estructurados para formular preguntas, revisar partidas conjuntamente y brindar acompañamiento cercano al cliente.'
      }
    ],
    features_en: [
      {
        title: 'Frictionless access & end-to-end encryption',
        desc: 'Join straight from any browser using unique encrypted links sent via email—no software installs or account sign-ups.'
      },
      {
        title: 'Executive report presentation',
        desc: 'Crystal-clear real-time screen sharing for financial statements, tax returns, contracts, and executive decks.'
      },
      {
        title: 'Interactive Q&A & client advisory',
        desc: 'Structured spaces for answering questions, reviewing line items together, and delivering close client support.'
      }
    ]
  },
  {
    id: 'recursos-humanos',
    slug: 'tribalia-recursos-humanos',
    logo: 'assets/img/logos/tribalia-recursos-humanos.svg',
    name: 'Tribalia Recursos Humanos',
    shortName: 'Recursos Humanos',
    tagline: 'Gestión documental laboral y seguridad social',
    tagline_en: 'Labor Document Management & Social Security',
    description:
      'Centraliza expedientes digitales de colaboradores, contratos, otrosíes y procesos disciplinarios; asiste afiliaciones a EPS, AFP, ARL y Cajas, y genera certificaciones laborales al instante.',
    description_en:
      'Centralizes employee digital files, contracts, addendums, and HR records; streamlines social security enrollments (EPS, AFP, ARL) and issues employment certificates instantly.',
    fullDescription:
      'Tribalia Recursos Humanos es una plataforma integral diseñada para centralizar, automatizar y blindar la gestión del talento humano y la administración laboral, eliminando la dispersión de archivos físicos y garantizando trazabilidad completa durante todo el ciclo de vida del colaborador.',
    fullDescription_en:
      'Tribalia Recursos Humanos is an all-in-one platform built to centralize, automate, and safeguard HR and labor administration—eliminating scattered paper files and ensuring full traceability across the employee lifecycle.',
    accentColor: '#F97316',
    bridgeColor: '#0D9488',
    subdomain: 'https://rrhh.tribalia.com.co',
    storeUrl: 'https://tienda.tribalia.com.co/tribalia-recursos-humanos',
    videoUrl: '',
    screenshots: [],
    status: 'Disponible',
    status_en: 'Available',
    highlights: [
      'Expediente digital y repositorio contractual',
      'Asistencia en afiliaciones (EPS, AFP, ARL)',
      'Certificaciones laborales automatizadas'
    ],
    highlights_en: [
      'Digital employee files & contract vault',
      'Social security enrollment guidance',
      'Instant automated employment certificates'
    ],
    features: [
      {
        title: 'Expediente digital y repositorio documental',
        desc: 'Centraliza hoja de vida, contratos laborales, otrosíes, memorandos, llamados de atención, anotaciones disciplinarias y certificaciones.'
      },
      {
        title: 'Asistencia en afiliaciones a Seguridad Social',
        desc: 'Guía y agiliza la vinculación y reporte de novedades ante EPS, Fondos de Pensiones (AFP), ARL y Cajas de Compensación Familiar.'
      },
      {
        title: 'Generación automatizada de certificaciones',
        desc: 'Expide de manera instantánea y libre de errores certificaciones laborales, constancias de ingresos y retenciones con base en el contrato vigente.'
      }
    ],
    features_en: [
      {
        title: 'Digital employee file & contract vault',
        desc: 'Centralizes resumes, labor contracts, addendums, memos, disciplinary records, and training certificates.'
      },
      {
        title: 'Social Security enrollment assistance',
        desc: 'Guides and speeds up employee onboarding and updates with EPS, Pension Funds (AFP), ARL, and Compensation Funds.'
      },
      {
        title: 'Automated certificate generation',
        desc: 'Instantly issues error-free employment certificates and income/withholding statements based on active contract data.'
      }
    ]
  }
];
