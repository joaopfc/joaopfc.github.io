/**
 * models-data.js
 * Adicione ou altere suas peças 3D aqui!
 */
const cadCollection = [
  {
    id: "alavanca-ligacao",
    title: "Alavanca de Ligação",
    category: "usinagem",
    categoryName: "Usinagem & Suportes",
    software: "Onshape",
    modelUrl: "models/AlavancaDeLigacao.glb",
    summary: "Suporte usinado reforçado com nervuras estruturais e alívio de tensões para fixação de mancais."
  },
  {
    id: "engrenagem-involuta",
    title: "Engrenagem Cilíndrica Dentes Retos",
    category: "elementos",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/BaseSuporteVentilador.glb",
    summary: "Engrenagem paramétrica com perfil de evolvente, chaveta DIN 6885 e alívios de peso.",
    orientation: "0deg 90deg 0deg"
  },
  {
    id: "engrenagem-involuta",
    title: "Engrenagem Cilíndrica Dentes Retos",
    category: "elementos",
    categoryName: "Elementos de Máquinas",
    software: "Onshape",
    modelUrl: "models/Bloco.glb",
    summary: "Engrenagem paramétrica com perfil de evolvente, chaveta DIN 6885 e alívios de peso.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "coletor-hidraulico",
    title: "Coletor Hidráulico Manifold",
    category: "tubulacoes",
    categoryName: "Tubulações",
    software: "Onshape",
    modelUrl: "models/Bloco2.glb",
    summary: "Manifold distribuidor de pressão com derivações laterais flangeadas para anéis O-Ring.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "suporte-estampado-chapa",
    title: "Suporte em Chapa Dobrada",
    category: "chapas",
    categoryName: "Chapas",
    software: "Onshape",
    modelUrl: "models/BracoDeFixacaoAngular.glb",
    summary: "Modelado em Sheet Metal com alívios de canto e furação calibrada para corte a laser.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "valvula-bloqueio-esfera",
    title: "Válvula Esférica Bipartida",
    category: "tubulacoes",
    categoryName: "Tubulações",
    software: "Onshape",
    modelUrl: "models/BracoOscilanteAngular.glb",
    summary: "Montagem mecânica com cinemática de fechamento 1/4 de volta e passagem plena.",
    orientation: "0deg 270deg 0deg"
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/CorpoEsfericoComValvula.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/ChapaDobrada.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/EixoRosqueado.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/EloComFuros.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/EngrenagemCilindricaDentesRetos.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/GarfoDeArticulacao.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
{
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/MancalComCurva.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/PlacaCNC.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/PlacaFuros.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/PlacaFurosRosqueada.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/SuporteArticulacaoFlangeado.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/SuporteFixacaoDuplo.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
  {
    id: "duto-resfriador-aditivo",
    title: "Duto Aerodinâmico FDM",
    category: "aditiva",
    categoryName: "Impressão 3D",
    software: "Onshape",
    modelUrl: "models/TuboFlexivelComCurva.glb",
    summary: "Duto projetado em DfAM com ângulos livres de suporte para refrigeração de bico 3D."
  },
];
