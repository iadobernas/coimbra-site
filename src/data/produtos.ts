export interface Produto {
  id: string
  nome: string
  categoria: string
  descricao: string
  icone: string
}

export const categorias = [
  'Todos',
  'Automotivo',
  'Cozinha',
  'Industrial',
  'Limpeza e Conservação',
  'Lavanderia',
  'Pós Obra',
  'Químicos',
  'Tratamento de Piso',
  'Revenda',
] as const

export type Categoria = (typeof categorias)[number]

export const categoriaBadge: Record<string, { bg: string; color: string }> = {
  Automotivo:               { bg: '#dbeafe', color: '#1e40af' },
  Cozinha:                  { bg: '#fef3c7', color: '#92400e' },
  Industrial:               { bg: '#f3f4f6', color: '#374151' },
  'Limpeza e Conservação':  { bg: '#dcfce7', color: '#15803d' },
  Lavanderia:               { bg: '#ede9fe', color: '#6d28d9' },
  'Pós Obra':               { bg: '#ffedd5', color: '#9a3412' },
  Químicos:                 { bg: '#fee2e2', color: '#991b1b' },
  'Tratamento de Piso':     { bg: '#ccfbf1', color: '#0f766e' },
  Revenda:                  { bg: '#e0e7ff', color: '#3730a3' },
}

export const produtos: Produto[] = [
  // ── Automotivo ──────────────────────────────────────────────────────────────
  { id: 'auto-1', nome: 'Desengraxante Automotivo',       categoria: 'Automotivo', descricao: 'Remove graxas e óleos de peças e motores com eficiência.',              icone: '🚗' },
  { id: 'auto-2', nome: 'Desincrustante Ácido',           categoria: 'Automotivo', descricao: 'Remove incrustações minerais e ferrugem de superfícies metálicas.',     icone: '⚗️' },
  { id: 'auto-3', nome: 'Detergente Automotivo',          categoria: 'Automotivo', descricao: 'Concentrado para lavagem de veículos e equipamentos pesados.',           icone: '🧴' },
  { id: 'auto-4', nome: 'Limpa Pneus',                   categoria: 'Automotivo', descricao: 'Limpeza e revitalização de pneus e borrachas externas.',                 icone: '🔧' },
  { id: 'auto-5', nome: 'Limpa Vinil',                   categoria: 'Automotivo', descricao: 'Higienização e conservação de painéis e revestimentos em vinil.',        icone: '✨' },
  { id: 'auto-6', nome: 'Desmoldante',                   categoria: 'Automotivo', descricao: 'Facilita a desmoldagem de peças em processos industriais e automotivos.', icone: '🏭' },

  // ── Cozinha ─────────────────────────────────────────────────────────────────
  { id: 'coz-1', nome: 'Detergente Neutro Cozinha',       categoria: 'Cozinha', descricao: 'Suave e eficiente para louças, panelas e utensílios em geral.',             icone: '🍽️' },
  { id: 'coz-2', nome: 'Limpador Multiuso Cozinha',       categoria: 'Cozinha', descricao: 'Limpa bancadas, azulejos e superfícies sem riscar.',                        icone: '🧽' },
  { id: 'coz-3', nome: 'Limpa Alumínio',                  categoria: 'Cozinha', descricao: 'Remove manchas e oxidação de superfícies de alumínio.',                    icone: '✨' },
  { id: 'coz-4', nome: 'Desinfetante Cozinha',            categoria: 'Cozinha', descricao: 'Desinfecção de superfícies e utensílios com ação bactericida.',             icone: '🦠' },
  { id: 'coz-5', nome: 'Desengordurante',                 categoria: 'Cozinha', descricao: 'Remove gorduras e resíduos de frituras em fogões e coifas.',                icone: '🧹' },

  // ── Industrial ───────────────────────────────────────────────────────────────
  { id: 'ind-1', nome: 'Limpador Industrial',             categoria: 'Industrial', descricao: 'Solução concentrada para limpeza pesada em ambientes industriais.',       icone: '🏭' },
  { id: 'ind-2', nome: 'Desengraxante Dielétrico',        categoria: 'Industrial', descricao: 'Limpeza segura de componentes elétricos e eletrônicos.',                  icone: '⚡' },
  { id: 'ind-3', nome: 'Solvente Industrial',             categoria: 'Industrial', descricao: 'Dissolve resinas, tintas e adesivos em processos industriais.',           icone: '🧪' },
  { id: 'ind-4', nome: 'Desengraxante Alcalino',          categoria: 'Industrial', descricao: 'Remove graxas e óleos pesados em processos de alta exigência.',           icone: '⚗️' },
  { id: 'ind-5', nome: 'Desincrustante Ácido Industrial', categoria: 'Industrial', descricao: 'Remove crostas em trocadores de calor e tubulações industriais.',         icone: '🏗️' },

  // ── Limpeza e Conservação ───────────────────────────────────────────────────
  { id: 'lc-1', nome: 'Desinfetante Geral',               categoria: 'Limpeza e Conservação', descricao: 'Desinfecção ampla de ambientes domésticos e comerciais.',       icone: '💧' },
  { id: 'lc-2', nome: 'Limpador Multiuso',                categoria: 'Limpeza e Conservação', descricao: 'Uso geral em pisos, paredes e superfícies diversas.',           icone: '🧽' },
  { id: 'lc-3', nome: 'Perfumador Ambiente',              categoria: 'Limpeza e Conservação', descricao: 'Aromatiza e refresca ambientes com fragrâncias duradouras.',    icone: '🌸' },
  { id: 'lc-4', nome: 'Detergente Neutro',                categoria: 'Limpeza e Conservação', descricao: 'Fórmula neutra para limpeza de superfícies delicadas.',         icone: '🧴' },
  { id: 'lc-5', nome: 'Desincrustante',                   categoria: 'Limpeza e Conservação', descricao: 'Remove calcário e sujeiras incrustadas em sanitários e azulejos.', icone: '🚿' },
  { id: 'lc-6', nome: 'Desengordurante Profissional',     categoria: 'Limpeza e Conservação', descricao: 'Alta eficiência na remoção de gorduras em cozinhas profissionais.', icone: '🧹' },

  // ── Lavanderia ───────────────────────────────────────────────────────────────
  { id: 'lav-1', nome: 'Acidulante',                      categoria: 'Lavanderia', descricao: 'Neutraliza resíduos alcalinos após lavagem de roupas.',                   icone: '🧺' },
  { id: 'lav-2', nome: 'Alvejante',                       categoria: 'Lavanderia', descricao: 'Clareia e remove manchas difíceis de tecidos brancos.',                   icone: '✨' },
  { id: 'lav-3', nome: 'Amaciante',                       categoria: 'Lavanderia', descricao: 'Amacia fibras têxteis e deixa roupas com toque suave e perfumado.',       icone: '🌸' },
  { id: 'lav-4', nome: 'Detergente Alcalino',             categoria: 'Lavanderia', descricao: 'Remove gorduras e manchas pesadas em processos de lavanderia.',            icone: '🧴' },
  { id: 'lav-5', nome: 'Detergente Líquido Lavanderia',  categoria: 'Lavanderia', descricao: 'Fórmula líquida concentrada para lavagem profissional de roupas.',         icone: '💧' },
  { id: 'lav-6', nome: 'Detergente em Pó',               categoria: 'Lavanderia', descricao: 'Alta performance para lavanderias industriais e comerciais.',              icone: '🧺' },
  { id: 'lav-7', nome: 'Detergente Umectante',           categoria: 'Lavanderia', descricao: 'Melhora a penetração da água e a eficiência da lavagem.',                  icone: '💧' },

  // ── Pós Obra ─────────────────────────────────────────────────────────────────
  { id: 'po-1', nome: 'Desengraxante Pós Obra',           categoria: 'Pós Obra', descricao: 'Remove resíduos de cimento e graxa após obras e reformas.',                 icone: '🏗️' },
  { id: 'po-2', nome: 'Limpa Incrustação de Cimento',    categoria: 'Pós Obra', descricao: 'Dissolve resíduos de cimento em pisos, azulejos e pedras.',                  icone: '🧱' },
  { id: 'po-3', nome: 'Limpa Pedras e Pisos Rústicos',   categoria: 'Pós Obra', descricao: 'Higieniza e realça pedras naturais e pisos rústicos.',                       icone: '🪨' },
  { id: 'po-4', nome: 'Limpa Piso e Porcelanato',        categoria: 'Pós Obra', descricao: 'Limpeza profunda de pisos e porcelanatos pós-instalação.',                   icone: '🏗️' },
  { id: 'po-5', nome: 'Limpa Rejunte',                   categoria: 'Pós Obra', descricao: 'Remove manchas e resíduos de rejunte entre azulejos e pisos.',               icone: '🧱' },
  { id: 'po-6', nome: 'Limpa Vidros',                    categoria: 'Pós Obra', descricao: 'Limpeza cristalizante de vidros, janelas e espelhos.',                       icone: '🪟' },

  // ── Químicos ─────────────────────────────────────────────────────────────────
  { id: 'qui-1', nome: 'Essências',                       categoria: 'Químicos', descricao: 'Fragrâncias concentradas para formulação de produtos de limpeza.',           icone: '🌸' },
  { id: 'qui-2', nome: 'Glicerina Bidestilada',           categoria: 'Químicos', descricao: 'Alta pureza para formulações cosméticas e industriais.',                    icone: '⚗️' },
  { id: 'qui-3', nome: 'Hipoclorito de Sódio',            categoria: 'Químicos', descricao: 'Agente bactericida e alvejante para desinfecção ampla.',                    icone: '🧪' },
  { id: 'qui-4', nome: 'Silicone 1000',                   categoria: 'Químicos', descricao: 'Lubrificante e impermeabilizante à base de silicone líquido.',              icone: '💧' },
  { id: 'qui-5', nome: 'Soda Cáustica',                   categoria: 'Químicos', descricao: 'Agente alcalino para limpeza industrial e desentupimento.',                 icone: '⚠️' },
  { id: 'qui-6', nome: 'Vaselina Líquida',                categoria: 'Químicos', descricao: 'Lubrificante mineral para uso industrial e cosmético.',                    icone: '💧' },

  // ── Tratamento de Piso ───────────────────────────────────────────────────────
  { id: 'tp-1', nome: 'Cera para Piso',                   categoria: 'Tratamento de Piso', descricao: 'Protege e confere brilho a pisos vinílicos e madeira.',            icone: '✨' },
  { id: 'tp-2', nome: 'Removedor de Cera',                categoria: 'Tratamento de Piso', descricao: 'Remove camadas de cera velha para renovação do piso.',             icone: '🧹' },
  { id: 'tp-3', nome: 'Limpa Pedra',                      categoria: 'Tratamento de Piso', descricao: 'Higieniza e conserva pedras naturais como granito e mármore.',     icone: '🪨' },
  { id: 'tp-4', nome: 'Limpador de Piso',                 categoria: 'Tratamento de Piso', descricao: 'Limpeza diária de pisos cerâmicos, vinílicos e laminados.',        icone: '🧹' },
  { id: 'tp-5', nome: 'Detergente Neutro Piso',           categoria: 'Tratamento de Piso', descricao: 'Fórmula neutra que preserva o acabamento e a cor dos pisos.',      icone: '🧴' },

  // ── Revenda ──────────────────────────────────────────────────────────────────
  { id: 'rev-1',  nome: 'Álcool Líquido',                 categoria: 'Revenda', descricao: 'Álcool 70% para desinfecção de superfícies e higienização.',                  icone: '🍶' },
  { id: 'rev-2',  nome: 'Aerosóis',                       categoria: 'Revenda', descricao: 'Linha de produtos em aerossol para limpeza e conservação.',                   icone: '💨' },
  { id: 'rev-3',  nome: 'Baldes e Cestos',                categoria: 'Revenda', descricao: 'Baldes e cestos para uso doméstico e profissional.',                          icone: '🪣' },
  { id: 'rev-4',  nome: 'Descartáveis',                   categoria: 'Revenda', descricao: 'Linha de produtos descartáveis para higiene e limpeza.',                      icone: '🧻' },
  { id: 'rev-5',  nome: 'Detergente em Pó Revenda',       categoria: 'Revenda', descricao: 'Detergente em pó em embalagens para revenda no varejo.',                     icone: '🧺' },
  { id: 'rev-6',  nome: 'Dispenser e Papéis',             categoria: 'Revenda', descricao: 'Dispensers e papéis toalha e higiênico para banheiros.',                     icone: '🧻' },
  { id: 'rev-7',  nome: 'Escovas',                        categoria: 'Revenda', descricao: 'Escovas para limpeza doméstica e profissional.',                              icone: '🪥' },
  { id: 'rev-8',  nome: 'Esponjas',                       categoria: 'Revenda', descricao: 'Esponjas dupla face e de aço para limpeza geral.',                           icone: '🧽' },
  { id: 'rev-9',  nome: 'Fibras e Discos',                categoria: 'Revenda', descricao: 'Fibras abrasivas e discos para polimento de pisos.',                          icone: '🔵' },
  { id: 'rev-10', nome: 'Higiene Pessoal',                categoria: 'Revenda', descricao: 'Sabonetes, shampoos e produtos de higiene pessoal.',                          icone: '🚿' },
  { id: 'rev-11', nome: 'Luvas',                          categoria: 'Revenda', descricao: 'Luvas domésticas e industriais de látex e nitrílica.',                       icone: '🧤' },
  { id: 'rev-12', nome: 'Mop e Refil',                   categoria: 'Revenda', descricao: 'Mops e refis para limpeza profissional de pisos.',                            icone: '🧹' },
  { id: 'rev-13', nome: 'Panos e Flanelas',              categoria: 'Revenda', descricao: 'Panos de chão, flanelas e panos multiuso.',                                   icone: '🧣' },
  { id: 'rev-14', nome: 'Rodos e Vassouras',             categoria: 'Revenda', descricao: 'Rodos, vassouras e esfregos para uso doméstico e comercial.',                 icone: '🧹' },
  { id: 'rev-15', nome: 'Sacos de Lixo',                 categoria: 'Revenda', descricao: 'Sacos de lixo em diversos tamanhos e cores.',                                 icone: '🗑️' },
  { id: 'rev-16', nome: 'Tratamento de Piscina',         categoria: 'Revenda', descricao: 'Produtos para tratamento e manutenção de piscinas.',                          icone: '🏊' },
]
