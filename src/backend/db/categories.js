import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "bouquet",
    imgg: "https://imgcdn.floweraura.com/IMG_1914-AAA.jpg",
  },
  {
    _id: uuid(),
    categoryName: "box",
    imgg: "https://i.pinimg.com/originals/61/3a/83/613a83863d0584ce6dbc881174ebd0e3.jpg",
  },
  {
    _id: uuid(),
    categoryName: "vase",
    imgg: "https://m.media-amazon.com/images/I/710GrFTewNL._AC_UF894,1000_QL80_.jpg",
  },
  {
    _id: uuid(),
    categoryName: "basket",
    imgg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSFKOH_osiO_XeF0JQg-7jua-QIM930yNig&usqp=CAU",
  },
];
