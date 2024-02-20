export interface Product {
  name: string;
  img: string[];
  price: string;
  rating: number
  description: string;
  link: string;
}

export const products = [
  {
    name: 'Phone XL',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium'],
    price: '610 183 ₸',
    rating: 5,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. ',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000'
  },
  {
    name: 'Мелочи жизни Пчелки крупнопористые 5 шт',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h0f/h08/64074314645534.jpg?format=gallery-medium'],
    price: '399 ₸',
    rating: 5,
    description: 'Профилированная губка кухонная предназначена для очистки загрязненных поверхностей (посуда). Используется совместно с моющими средствами или без них',
    link: 'https://kaspi.kz/shop/p/melochi-zhizni-pchelki-krupnoporistye-5-sht-101607499/?c=750000000',
  },
  {
    name: 'MAGNUM огурцы Рава Казахстан',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h71/hf0/84401304338462.jpg?format=gallery-medium'],
    price: '1 568 ₸/кг',
    rating: 4.5,
    description: 'вид овощей: огурец',
    link: 'https://kaspi.kz/shop/p/magnum-ogurtsy-rava-kazahstan-102398351/?c=750000000'
  },
  {
    name: 'Декорация AQUAPRO фигурка Водолаз синий',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hf6/h71/83986914279454.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h24/83986914803742.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h91/hc4/83986915328030.jpg?format=gallery-medium'],
    price: '1 200 ₸',
    rating: 5,
    description: 'тематика: сказочные герои',
    link: 'https://kaspi.kz/shop/p/aquapro-figurka-vodolaz-sinii-113491576/?c=750000000'
  },
  {
    name: 'Входная дверь ЦИТАДЕЛЬ jasen-860 2060x860 мм, сталь, правая',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h59/h15/64200161656862.jpg?format=gallery-medium'],
    price: '88 000 ₸',
    rating: 5,
    description: 'Важно! обратите внимание на комплектацию, возможно коробку, фурнитуру, наличники и доборы необходимо приобрести отдельно.',
    link: 'https://kaspi.kz/shop/p/tsitadel-jasen-860-2060x860-mm-stal-pravaja-101248956/?c=750000000'
  },
  {
    name: 'Креатин Maxler 100% Golden Creatine 300 г',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h63/h50/63758370701342.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/hf7/63758371553310.jpg?format=gallery-medium'],
    price: '11 940 ₸',
    rating: 5,
    description: 'Каждый атлет знает о положительных эффектах креатина на рост мышечной массы и тренировочный процесс в целом: увеличение выносливости, рост объема мышц, положительное влияние на синтез белка, уменьшение боли в мышцах и восстановление после тренировок.',
    link: 'https://kaspi.kz/shop/p/maxler-100-golden-creatine-300-g-29502177/?c=750000000'
  },
  {
    name: 'Книга Сильвера А.: В конце они оба умрут',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/had/h09/64123503837214.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h66/hf7/64123506065438.jpg?format=gallery-medium'],
    price: '3 209 ₸',
    rating: 5,
    description: 'Однажды ночью сотрудники «Отдела Смерти» звонят Матео Торресу и Руфусу Эметерио, чтобы сообщить им плохие новости: сегодня они умрут.',
    link: 'https://kaspi.kz/shop/p/sil-vera-a-v-kontse-oni-oba-umrut-101280241/?c=750000000',
  },
  {
    name: 'MAGNUM банан Эквадор',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h69/h58/85192076722206.jpg?format=gallery-medium'],
    price: '974 ₸/кг',
    rating: 5,
    description: 'вид фруктов: банан',
    link: 'https://kaspi.kz/shop/p/magnum-banan-ekvador-101349284/?c=750000000',
  },
  {
    name: 'Ноутбук Apple MacBook Pro 16 Z14V0008E Space Grey серый',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h10/heb/64807455031326.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hde/h52/64807458308126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h68/64807461060638.jpg?format=gallery-medium'],
    price: '2 999 990 ₸',
    rating: 5,
    description: '',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-z14v0008e-space-grey-seryi-105494663/?c=750000000',
  },
  {
    name: 'Гриль мангал AHOS BOX',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h01/h93/84036347756574.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h77/84036347789342.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd0/he0/84036347822110.jpg?format=gallery-medium'],
    price: '1 155 000 ₸',
    rating: 5,
    description: 'AHOS BOX – это идеальный вариант гриль-мангала на дровах для дачи, дома или ресторана. Модель своим эстетичным видом уже создает ощущение уюта. Можно долго любоваться тем, как горит огонь и при этом готовится ужин. Достаточно поставить гриль-мангал в удобное место и наслаждаться приятным вечером.',
    link: 'https://kaspi.kz/shop/p/gril-mangal-ahos-box-101742278/?c=750000000'
  }


  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/