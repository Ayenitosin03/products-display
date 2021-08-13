const products =  [
    {
        "id": 20,
        "name": "Spicy pepper",
        "price": 25.0,
        "description": "lorem",
        "quantity": 299,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1592120713/jao1lgpz78iwpx8t4l1g.jpg",
        "create_date": "2020-06-14T07:45:13.962289Z",
        "farmer_id": 6
    },
    {
        "id": 19,
        "name": "Hawaian Strawberry",
        "price": 60.0,
        "description": "lorem",
        "quantity": 338,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1592120655/st1fendpsz5mg2aeullo.jpg",
        "create_date": "2020-06-14T07:44:15.569098Z",
        "farmer_id": 6
    },
    {
        "id": 18,
        "name": "Garbage",
        "price": 200.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 3549,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956855/raox4zhwfpcmn4czmc2b.jpg",
        "create_date": "2020-06-12T10:14:16.810923Z",
        "farmer_id": 6
    },
    {
        "id": 17,
        "name": "Rodo ",
        "price": 100.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 1998,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956817/gh7zfrchto01v0gya1dy.jpg",
        "create_date": "2020-06-12T10:13:37.787789Z",
        "farmer_id": 6
    },
    {
        "id": 16,
        "name": "Lemon Tea",
        "price": 500.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 299,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956770/vfuazmrjeb4kfogu239n.svg",
        "create_date": "2020-06-12T10:12:52.181624Z",
        "farmer_id": 6
    },
    {
        "id": 15,
        "name": "Wheat",
        "price": 30.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 2000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956688/url3c6u7xrjn5vofsbom.jpg",
        "create_date": "2020-06-12T10:11:29.087429Z",
        "farmer_id": 6
    },
    {
        "id": 14,
        "name": "Walnut",
        "price": 50.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 5999,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956624/zn0ekuqtfhjusq6ebvd1.jpg",
        "create_date": "2020-06-12T10:10:24.432170Z",
        "farmer_id": 6
    },
    {
        "id": 13,
        "name": "Fresh Tomatoes",
        "price": 100.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 1000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956588/ecas7fqxn5qb0dspslqf.jpg",
        "create_date": "2020-06-12T10:09:48.750393Z",
        "farmer_id": 6
    },
    {
        "id": 12,
        "name": "Strawberry",
        "price": 200.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 2000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956541/fiepu1zhf9jnycikgezp.jpg",
        "create_date": "2020-06-12T10:09:02.175915Z",
        "farmer_id": 6
    },
    {
        "id": 11,
        "name": "African Star Apple",
        "price": 20.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 2000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956478/xd8idpsf4exhygqnyqjc.jpg",
        "create_date": "2020-06-12T10:07:58.660286Z",
        "farmer_id": 6
    },
    {
        "id": 10,
        "name": "Red Pepper",
        "price": 100.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 3900,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956429/fluszohkqnef2uip2rrc.jpg",
        "create_date": "2020-06-12T10:07:09.956335Z",
        "farmer_id": 6
    },
    {
        "id": 9,
        "name": "Purple Garbage",
        "price": 300.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 2000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956385/bbaah9y3agyckx5gvg2z.jpg",
        "create_date": "2020-06-12T10:06:25.790756Z",
        "farmer_id": 6
    },
    {
        "id": 8,
        "name": "Pepper",
        "price": 50.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 2000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956342/id1xfjxl8mlfyozddhpc.jpg",
        "create_date": "2020-06-12T10:05:42.986690Z",
        "farmer_id": 6
    },
    {
        "id": 7,
        "name": "Hausa Onion",
        "price": 100.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 5560,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956301/pugmv4tbyjpxdmtzbjrp.jpg",
        "create_date": "2020-06-12T10:05:01.737360Z",
        "farmer_id": 6
    },
    {
        "id": 6,
        "name": "Mango (Ogbomosho)",
        "price": 50.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 20000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956262/dyqku901uyswigh5d5ii.jpg",
        "create_date": "2020-06-12T10:04:22.391026Z",
        "farmer_id": 6
    },
    {
        "id": 5,
        "name": "Habanero Pepper",
        "price": 100.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 2200,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956184/zizniuaqgkhdt71s15ez.jpg",
        "create_date": "2020-06-12T10:03:04.618291Z",
        "farmer_id": 6
    },
    {
        "id": 4,
        "name": "Green Onions",
        "price": 100.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 2000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956141/hsprzqayxeqzd6ytkouk.jpg",
        "create_date": "2020-06-12T10:02:21.758445Z",
        "farmer_id": 6
    },
    {
        "id": 3,
        "name": "Grean Pea",
        "price": 50.0,
        "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repudiandae tenetur itaque corporis, excepturi magnam similique alias molestiae delectus, sunt recusandae rerum blanditiis odit, nemo omnis nisi voluptatum unde sapiente.",
        "quantity": 2000,
        "product_img": "http://res.cloudinary.com/kayode/image/upload/v1591956103/ywfwvkwqgstzx3mfvonk.jpg",
        "create_date": "2020-06-12T10:01:44.164640Z",
        "farmer_id": 6
    }
]

export{products};