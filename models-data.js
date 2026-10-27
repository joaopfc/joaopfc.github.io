/**
 * models-data.js
 * Adicione ou altere suas peças 3D aqui!
 */
const cadCollection = [
  {
    id: "alavanca-angular",
    title: "Alavanca Angular",
    category: "usinagem",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/AlavancaDeLigacao.glb",
    summary: "Suporte de articulação e transmissão de movimentos."
  },
  {
    id: "base-ventilador",
    title: "Base de Suporte para Ventilador",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/BaseSuporteVentilador.glb",
    summary: "Base de suporte para ventilador feito engenharia reversa para peça de substituição",
    orientation: "0deg 90deg 0deg"
  },
  {
    id: "bloco-usinagem",
    title: "Bloco de Usinagem",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/Bloco.glb",
    summary: "Bloco de usinagem replicado para estudos de montagem e análise de interferência.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "bloco-usinagem2",
    title: "Bloco de Usinagem ",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/Bloco2.glb",
    summary: "Bloco de usinagem com características específicas para análise de tolerância.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "braco-angular",
    title: "Braço de Fixação Angular",
    category: "elementos",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/BracoDeFixacaoAngular.glb",
    summary: "Braço de fixação angular para aplicações específicas.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "braco-oscilante-angular",
    title: "Braço Oscilante Angular",
    category: "elementos",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/BracoOscilanteAngular.glb",
    summary: "Braço oscilante angular para aplicações específicas.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "corpo-esferico-valvula",
    title: "Corpo Esferico com Válvula",
    category: "elementos",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/CorpoEsfericoComValvula.glb",
    summary: "Corpo esférico com válvula para aplicações específicas.",
    orientation: "270deg 270deg 0deg"
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Chapa Dobrada",
    category: "chapas",
    categoryName: "Chapas",
    software: "Onshape",
    modelUrl: "models/ChapaDobrada.glb",
    summary: "Chapa dobrada para aplicações específicas.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "eixo-arvore",
    title: "Eixo da Arvore ",
    category: "elementos",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/EixoRosqueado.glb",
    summary: "Eixo da árvore para aplicações específicas.",
    orientation: "90deg 0deg 0deg"
  },
  {
    id: "Elo-de-ligacao",
    title: "Elo de Ligação",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/EloComFuros.glb",
    summary: "Elo de ligação para aplicações específicas.",
  },
  {
    id: "engrenagem-cilindrica-dentes-retos",
    title: "Engrenagem Cilíndrica de Dentes Retos",
    category: "elementos",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/EngrenagemCilindricaDentesRetos.glb",
    summary: "Engrenagem cilíndrica de dentes retos para aplicações específicas.",
    orientation: "0deg 45deg 0deg"
  },
  {
    id: "garfo-articulacao",
    title: "Garfo de Articulação",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/GarfoDeArticulacao.glb",
    summary: "Garfo de articulação para aplicações específicas.",
    orientation: "0deg 270deg 0deg"
  },
{
    id: "curva-flangeada",
    title: "Curva Flangeada",
    category: "elementos",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/MancalComCurva.glb",
    summary: "Curva Flangeada para aplicações específicas.",
    orientation: "0deg 90deg 0deg"
  },
  {
    id: "placa-cnc",
    title: "Placa CNC",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/PlacaCNC.glb",
    summary: "Placa CNC para aplicações específicas.",
    orientation: "0deg 90deg 0deg"
  },
  {
    id: "placa-furos",
    title: "Placa CNC com Furos",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/PlacaFuros.glb",
    summary: "Placa CNC com furos para aplicações específicas."
  },
  {
    id: "placa-furos-rosqueados",
    title: "Placa CNC com Furos Rosqueados",
    category: "usinagem",
    categoryName: "usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/PlacaFurosRosqueada.glb",
    summary: "Placa com furos rosqueados para aplicações específicas.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "bloco-mancal",
    title: "Bloco Mancal",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/SuporteArticulacaoFlangeado.glb",
    summary: "Bloco Mancal para aplicações específicas.",
    orientation: "0deg 90deg 0deg"
  },
  {
    id: "viga-estrutural",
    title: "Viga Estrutural",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/SuporteFixacaoDuplo.glb",
    summary: "Viga Estrutural para aplicações específicas.",
    orientation: "90deg 90deg 0deg"
  },
  {
    id: "tubo-flexivel",
    title: "Tubo Flexível",
    category: "tubulacoes",
    categoryName: "Tubulações",
    software: "Onshape",
    modelUrl: "models/TuboFlexivelComCurva.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D.",
    orientation: "0deg 90deg 0deg"
  },
  {
    id: "suporte-paquimetro",
    title: "Suporte Paquimetro",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/SuportePaquimetro.glb",
    summary: "Suporte para paquímetro com fecho de engate rápido para superfícies planas de parede.",
    orientation: "0deg 270deg 0deg"
  },
];
