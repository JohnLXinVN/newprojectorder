import images from '~/assets/images';

const ListProductItems = [
    {
        id: 1,
        idLink: 'kem-trai-dua-xoi-la-dua',
        title: 'Kem trái dừa xôi lá dứa',
        img: images.imgProduct1,
        bestSellingProduct: 'true',
        promoteProduct: 'true',
        coconutCream: 'true',
        drinks: 'false',
        price: 1.3,
    },
    {
        id: 2,
        idLink: 'kem-trai-dua-than-tre',
        title: 'Kem trái dừa than tre',
        img: images.imgProduct2,
        bestSellingProduct: 'true',
        promoteProduct: 'true',
        coconutCream: 'true',
        drinks: 'false',

        price: 1.2,
    },
    {
        id: 3,
        idLink: 'kem-trai-dua-sau-rieng',
        title: 'Kem trái dừa sầu riêng',
        img: images.imgProduct3,
        bestSellingProduct: 'true',
        promoteProduct: 'true',
        coconutCream: 'true',
        drinks: 'false',

        price: 1.5,
    },
    {
        id: 4,
        idLink: 'kem-trai-dua-tran-chau',
        title: 'Kem trái dừa chân trâu',
        img: images.imgProduct4,
        bestSellingProduct: 'true',
        promoteProduct: 'true',
        coconutCream: 'true',
        drinks: 'false',

        price: 1.8,
    },
    {
        id: 5,
        idLink: 'kem-ly-xoi-la-dua',
        title: 'Kem Ly xôi lá dứa',
        img: images.imgProduct5,
        promoteProduct: 'true',
        iceCreamCup: 'true',
        drinks: 'false',

        price: 2.3,
    },
    {
        id: 6,
        idLink: 'kem-ly-than-tre',
        title: 'Kem Ly than tre',
        img: images.imgProduct6,
        promoteProduct: 'true',
        iceCreamCup: 'true',
        drinks: 'false',

        price: 2.3,
    },
    {
        id: 7,
        idLink: 'kem-ly-tran-chau',
        title: 'Kem Ly trân châu',
        img: images.imgProduct7,
        promoteProduct: 'true',
        iceCreamCup: 'true',
        drinks: 'false',

        price: 3,
    },
    {
        id: 8,
        idLink: 'kem-ly-socola',
        title: 'Kem Ly Socola',
        img: images.imgProduct8,
        bestSellingProduct: 'true',
        promoteProduct: 'true',
        iceCreamCup: 'true',
        drinks: 'false',

        price: 1.99,
    },
    {
        id: 9,
        idLink: 'kem-trai-dua-con-dao',
        title: 'Kem trái dừa Côn Đảo',
        img: images.imgProduct9,
        promoteProduct: 'true',
        coconutCream: 'true',
        drinks: 'false',

        price: 1.89,
    },
    {
        id: 10,
        idLink: 'kem-dua-socola',
        title: 'Kem dừa socola',
        img: images.imgProduct10,
        outStanding: 'true',
        drinks: 'false',

        price: 2.3,
    },
    {
        id: 11,
        idLink: 'kem-dua-tran-chau',
        title: 'Kem dừa trân châu',
        img: images.imgProduct11,
        outStanding: 'true',
        drinks: 'false',

        price: 2.4,
    },
    {
        id: 12,
        idLink: 'kem-dua-con-dao',
        title: 'Kem dừa Côn Đảo',
        img: images.imgProduct12,
        outStanding: 'true',
        popularProducts: 'true',
        drinks: 'false',

        price: 2.6,
    },
    {
        id: 13,
        idLink: 'kem-dua-matcha',
        title: 'Kem dừa Matcha',
        img: images.imgProduct13,
        outStanding: 'true',
        popularProducts: 'true',
        drinks: 'false',

        price: 2.6,
    },
    {
        id: 14,
        idLink: 'kem-dua-than-tre',
        title: 'Kem dừa Than tre',
        img: images.imgProduct14,
        outStanding: 'true',
        drinks: 'false',

        price: 2.8,
    },
    {
        id: 15,
        idLink: 'kem-dua-xoi-la-dua',
        title: 'Kem dừa Xôi lá dứa',
        img: images.imgProduct15,
        outStanding: 'true',
        popularProducts: 'true',
        drinks: 'false',

        price: 2.9,
    },
    {
        id: 16,
        idLink: 'kem-dua-sau-rieng',
        title: 'Kem dừa Sầu riêng',
        img: images.imgProduct16,
        outStanding: 'true',
        popularProducts: 'true',
        drinks: 'false',

        price: 2.4,
    },
    {
        id: 17,
        idLink: 'kem-trai-dua-matcha',
        title: 'Kem trái dừa matcha',
        img: images.imgProduct17,
        coconutCream: 'true',
        drinks: 'false',

        price: 2.99,
    },
    {
        id: 18,
        idLink: 'kem-ly-sau-rieng',
        title: 'Kem ly sầu riêng',
        img: images.imgProduct18,
        bestSellingProduct: 'true',
        iceCreamCup: 'true',
        drinks: 'false',

        price: 2.2,
    },
    {
        id: 19,
        idLink: 'kem-ly-matcha',
        title: 'Kem ly matcha',
        img: images.imgProduct19,
        bestSellingProduct: 'true',
        iceCreamCup: 'true',
        drinks: 'false',

        price: 2.7,
    },
    {
        id: 20,
        idLink: 'kem-ly-con-dao',
        title: 'Kem ly Côn Đảo',
        img: images.imgProduct20,
        bestSellingProduct: 'true',
        iceCreamCup: 'true',
        drinks: 'false',

        price: 2.9,
    },
    {
        id: 21,
        idLink: 'huong-duong',
        title: 'Hướng dương',
        img: images.imgProduct21,
        topping: 'true',
        drinks: 'false',

        price: 3.1,
    },
    {
        id: 22,
        idLink: 'banh-que',
        title: 'Bánh quế',
        img: images.imgProduct22,
        topping: 'true',
        drinks: 'false',

        price: 3.2,
    },
    {
        id: 23,
        idLink: 'tran-chau-duong-den',
        title: 'Trân châu đường đen',
        img: images.imgProduct23,
        topping: 'true',
        drinks: 'false',

        price: 3.5,
    },
    {
        id: 24,
        idLink: 'xoi-la-dua',
        title: 'Xôi lá dứa',
        img: images.imgProduct24,
        topping: 'true',
        drinks: 'false',

        price: 3.6,
    },
    {
        id: 25,
        idLink: 'nho-kho',
        title: 'Nho khô',
        img: images.imgProduct25,
        topping: 'true',
        drinks: 'false',

        price: 3.18,
    },
    {
        id: 26,
        idLink: 'dua-kho',
        title: 'Dừa khô',
        img: images.imgProduct26,
        topping: 'true',
        drinks: 'false',

        price: 3.7,
    },
    {
        id: 27,
        idLink: 'so-ri',
        title: 'Sơ ri',
        img: images.imgProduct27,
        topping: 'true',
        drinks: 'false',

        price: 2,
    },
];

export default ListProductItems;
