'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        id: 1,
        title: 'Pertunjukan Tari Kecak & Api Uluwatu',
        description: 'Tari Kecak dan Api Uluwatu adalah pertunjukan seni tradisional Bali yang menggabungkan tarian, drama, dan unsur spiritual. Tarian ini dikenal karena kekuatan vokal para penarinya yang duduk melingkar dan melantunkan "cak, cak, cak" secara berirama tanpa iringan alat musik. Pertunjukan ini menggambarkan kisah epik Ramayana, khususnya bagian di mana Rama berjuang menyelamatkan Sita dari Rahwana, dibantu oleh Hanoman.',
        phone_number: '+6281234567891',
        location: 'Pura Uluwatu. Pecatu, Kuta Selatan, Kabupaten Badung, Bali, Indonesia',
        experience: null,
        thumbnail: 'https://i.pinimg.com/1200x/e9/d6/47/e9d6477ce71acbccb803145e7fe6a79f.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Pertunjukan Tari Sigeh Pengunten',
        description: 'Tari Sigeh Penguten adalah perpaduan budaya antara dua suku Lampung yakni Pepadun dan Saibatin. Melalui Peraturan Daerah, tari Sigeh Penguten diresmikan sebagai bagian dari budaya masyarakat Lampung yang berfungsi sebagai media komunikasi, ajang silaturahmi, dan sebagai hiburan. Umumnya tari Sigeh Penguten dilakukan sebagai tarian untuk menyambut tamu kehormatan.',
        phone_number: '+628123456789',
        location: 'Provinsi Lampung',
        experience: null,
        thumbnail: 'https://indonesiakaya.com/wp-content/uploads/2020/10/Tari_ini_menyerap_gestur_tarian_Pepadun_dan_Saibatin_menjadi_kesatuan_harmonis_yang_dapat_diterima_masyarakat.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: 'Pertunjukan Sendratari Sang Hanoman',
        description: 'Sendratari Sang Hanoman merupakan pertunjukan seni tradisional yang memadukan unsur tari dan drama untuk menceritakan kisah tokoh Hanoman, kera putih sakti dari epos Ramayana. Dalam cerita ini, Hanoman digambarkan sebagai sosok pahlawan yang setia kepada Rama dan memiliki peran penting dalam misi penyelamatan Dewi Shinta dari cengkeraman Rahwana. Pertunjukan ini menampilkan adegan-adegan menarik seperti perjalanan Hanoman ke Alengka, pertarungan melawan pasukan Rahwana, hingga aksinya membakar istana musuh. Dibalut dengan gerakan tari khas, kostum yang mencolok, dan iringan musik gamelan yang mendalam, Sendratari Sang Hanoman menjadi salah satu bentuk seni pertunjukan yang tidak hanya menghibur tetapi juga memperkenalkan nilai-nilai kepahlawanan dan budaya lokal kepada penonton. Pertunjukan ini kerap digelar di tempat-tempat budaya seperti Candi Prambanan di Yogyakarta',
        phone_number: '+6282146102332',
        location: 'Gedung Hamzah Batik Malioboro Jl. Margo Mulyo No.9 Ngupasan, Gondomanan Kota Yogyakarta',
        experience: null,
        thumbnail: 'https://hamzahbatik.co.id/wp-content/uploads/2024/02/jadwalpertunjukansenidijogja.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: 'Pertunjukan Wayang Orang Sriwedari',
        description: 'Wayang orang merupakan pertunjukan yang disajikan berupa teater tradisional Jawa. Bentuk wayang orang merupakan percampuran dari seni drama yang berkembang dalam budaya Barat dengan pertunjukan wayang yang eksis dalam kebudayaan Jawa. Pemain wayang orang juga dirias sedemikian rupa hingga mengenakan kostum yang sama persis dengan tokoh pewayangan agar mirip dengan tokoh wayang dalam cerita yang dimainkan. ',
        phone_number: '+6285647203310',
        location: 'Gedung Wayang Orang Sriwedari, Jl. Kebangkitan Nasional No. 15, Kelurahan Sriwedari, Kecamatan Laweyan, Kota Surakarta',
        experience: null,
        thumbnail: 'https://wonderfulimage.s3-id-jkt-1.kilatstorage.id/1711269443-20240219-pgus3275-jpg-medium.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};
