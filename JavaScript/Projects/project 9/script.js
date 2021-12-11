const menuContainer = document.querySelector('.menu');
const btns = document.querySelectorAll('.btn');

const menuData = [{
        id: 1,
        name: 'Product No 1',
        catagoey: "lunch",
        image: "images/img-1.jpg",
        title: "Lunch Image",
        price: 100,
        disription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus non voluptatum reprehenderit consequuntur iste accusantium vel saepe tempore facilis officiis!",
    },
    {
        id: 2,
        name: 'Product No 2',
        catagoey: "dinner",
        image: "images/img-2.jpg",
        title: "dinner Image",
        price: 200,
        disription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat expedita vel dolorum in eos! Est, doloribus! Illo ratione obcaecati temporibus aspernatur recusandae quod, cupiditate nisi!",
    },
    {
        id: 3,
        name: 'Product No 3',
        catagoey: "breakfast",
        image: "images/img-3.jpg",
        title: "breakfast Image",
        price: 300,
        disription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro minima fuga? Aliquid suscipit id dolorum consectetur eos voluptatum vel cum, officiis quaerat temporibus molestias, voluptate quisquam! Maxime, quisquam nihil.",
    },
    {
        id: 4,
        name: 'Product No 3',
        catagoey: "lunch",
        image: "images/img-4.jpg",
        title: "Lunch Image",
        price: 150,
        disription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minima eaque saepe vitae ipsa quis beatae asperiores, expedita nulla non veniam earum ratione?",
    },
    {
        id: 5,
        name: 'Product No 5',
        catagoey: "breakfast",
        image: "images/img-5.jpg",
        title: "breakfast Image",
        price: 250,
        disription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident asperiores ipsa illum dolorem reiciendis optio ad dolores quos, quam iste.",
    },
    {
        id: 6,
        name: 'Product No 6',
        catagoey: "dinner",
        image: "images/img-6.jpg",
        title: "Dinner Image",
        price: 120,
        disription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veniam nostrum repudiandae voluptatibus ratione natus et, alias molestiae doloremque! Odio ex nulla sunt debitis eius facere? Doloribus a nulla quae.",
    },
    {
        id: 7,
        name: 'Product No 7',
        catagoey: "breakfast",
        image: "images/img-7.jpg",
        title: "breakfast Image",
        price: 360,
        disription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti doloremque vitae, nesciunt maxime possimus dignissimos facere nam deserunt libero amet dolor. Ratione, ducimus quis",
    },
    {
        id: 8,
        name: 'Product No 8',
        catagoey: "dinner",
        image: "images/img-8.jpg",
        title: "Dinner Image",
        price: 100,
        disription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint saepe voluptates modi quos et delectus fugit repellat eveniet. Eius, maxime quas?.",
    },
    {
        id: 9,
        name: 'Product No 9',
        catagoey: "breakfast",
        image: "images/img-9.jpg",
        title: "breakfast Image",
        price: 290,
        disription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit, qui error quo dolor perspiciatis autem adipisci facilis et hic distinctio sed dicta ad laudantium esse ipsa! Necessitatibus, illo vero.",
    },
    {
        id: 10,
        name: 'Product No 10',
        catagoey: "dinner",
        image: "images/img-10.jpg",
        title: "DInner Image",
        price: 180,
        disription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis accusantium officiis odio beatae atque tempora consequatur similique ducimus dolor, labore deleniti, itaque natus consectetur explicabo sapiente at?",
    },
];

window.addEventListener("DOMContentLoaded", function () {
    menuProducts(menuData);
});

function menuProducts(menuProductList) {
    let menu = menuProductList.map(function (item) {
        return `<div class="product">
        <div class="product-img">
            <img src=${item.image} alt=${item.title}>
        </div>
        <div class="product-detail">
            <div class="title">
                <h4 class="product-heading">${item.name}</h4>
                <div class="price">$${item.price}</div>
            </div>
            <p class="discription">${item.disription}</p>
        </div>
    </div>`;
    });
    menu = menu.join('');
    menuContainer.innerHTML = menu;
}

btns.forEach(function (btn) {
    btn.onclick = function (e) {
        const catagoery = e.currentTarget.dataset.catagory;
        const catagoeyItems = menuData.filter(function (catagoeryItem) {
            if (catagoeryItem.catagoey === catagoery) {
                return catagoeryItem;
            }
        });
        // console.log(catagoeyItems);
        if (catagoery === "all") {
            menuProducts(menuData);
        } else {
            menuProducts(catagoeyItems);
        }


    }
});