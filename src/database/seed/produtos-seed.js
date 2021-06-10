
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produtos').del()
    .then(function () {
      // Inserts seed entries
      return knex('produtos').insert([
        {id: 1, codProduto: 25754, descricao: "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2", preco: 5.0, qtdProduto: 10, disponivel: "sim", emDestaque: "sim", departamento: 1},
        {id: 2, codProduto: 17791, descricao: "CABO ADAPTADOR CONVERSOR VGA MACHO/HDMI FEMEA/USB/AUDIO HLD PRETO", preco: 13.8, qtdProduto: 0, disponivel: "nao", emDestaque: "nao", departamento: 1},
        {id: 3, codProduto: 11719, descricao: "ALICATE PARA CRIMPAR TL-315 3 EM 1", preco: 15.0, qtdProduto: 16, disponivel: "sim", emDestaque: "sim", departamento: 2},
        {id: 4, codProduto: 15883, descricao: "CADEADO SEGURANCA PARA NOTEBOOK HLD F\u0026K LLAVE", preco: 6.5, qtdProduto: 2, disponivel: "sim", emDestaque: "nao", departamento: 2},
        {id: 5, codProduto: 27695, descricao: "CAMERA DE SEGURANCA XIAOMI MI HOME MJSXJ09CM 2K WIFI PANORAMICO 360 BRANCO", preco: 36.0, qtdProduto: 5, disponivel: "sim", emDestaque: "sim", departamento: 3},
        {id: 6, codProduto: 21849, descricao: "CAMERA GOPRO HERO 8 CHDHX-801-RW PRETO", preco: 340.0, qtdProduto: 6, disponivel: "sim", emDestaque: "sim", departamento: 3},
        {id: 7, codProduto: 26333, descricao: "BABA ELETRONICA MOTOROLA MBP161TIMER BRANCO", preco: 36.5, qtdProduto: 7, disponivel: "sim", emDestaque: "sim", departamento: 4},
        {id: 8, codProduto: 22941, descricao: "BABA ELETRONICA MOTOROLA MBP87CNCT BRANCO/DOURADO", preco: 55.0, qtdProduto: 2, disponivel: "sim", emDestaque: "sim", departamento: 4},
        {id: 9, codProduto: 27062, descricao: "CABO UTP CAT6 LANPRO LP-4C6DUSYL3C 3MTS AMARELO", preco: 3.9, qtdProduto: 4, disponivel: "sim", emDestaque: "sim", departamento: 5},
        {id: 10, codProduto: 27085, descricao: "CABO UTP CAT6 LANPRO LP-4C6USYL3 3MTS AMARELO", preco: 4.0, qtdProduto: 23, disponivel: "sim", emDestaque: "sim", departamento: 5},
        {id: 11, codProduto: 25104, descricao: "CADEIRA GAMER MTEK MK01 PRETO/CINZA", preco: 175.0, qtdProduto: 5, disponivel: "sim", emDestaque: "nao", departamento: 6},
        {id: 12, codProduto: 26976, descricao: "CADEIRA GAMER MTEK MK01 PRETO/ROSA", preco: 190.0, qtdProduto: 6, disponivel: "sim", emDestaque: "sim", departamento: 6},
        {id: 13, codProduto: 24672, descricao: "CEL SAMSUNG A31 A315G 4GB/128GB AZUL DUAL SIM LTE 6.4", preco: 204.5, qtdProduto: 16, disponivel: "sim", emDestaque: "sim", departamento: 7},
        {id: 14, codProduto: 27131, descricao: "TABLET AMAZON FIRE  HD8 KIDS EDITION 2GB/32GB AZUL WIFI/QUAD CORE 8\u0027\u0027", preco: 99.0, qtdProduto: 34, disponivel: "sim", emDestaque: "nao", departamento: 7},
        {id: 15, codProduto: 23734, descricao: "CONSOLE NINTENDO SWITCH LITE DH-S-YAZAA AMARELO", preco: 205.0, qtdProduto: 0, disponivel: "nao", emDestaque: "nao", departamento: 8},
        {id: 16, codProduto: 27232, descricao: "XBOX ONE S  512GB BIVOLT ALL DIGITAL 120FPS BRANCO", preco: 412.0, qtdProduto: 6, disponivel: "sim", emDestaque: "sim", departamento: 8},
        {id: 17, codProduto: 25678, descricao: "DESKTOP ACER C24-963-UA91 I3-1005G1 1.2GHz/8GB/512GB SSD/23.8FHD IPS/W10/INGLES PRETO", preco: 750.0, qtdProduto: 0, disponivel: "nao", emDestaque: "nao", departamento: 9},
        {id: 18, codProduto: 27707, descricao: "FONE C/ MICROFONE JBL C50HI PRETO", preco: 7.0, qtdProduto: 29, disponivel: "sim", emDestaque: "sim", departamento: 9},
      ]);
    });
};
