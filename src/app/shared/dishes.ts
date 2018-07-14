//since the menu.component.ts and dishdetail.ts share the same details about dishes.
// we then create a common file called dishes.ts that can be used to store the shared details.
import { Dish } from './dish';


export const DISHES: Dish[]=[{
    name: "Uthappizza",
    image:'/assets/images/uthappizza.png',
    category: 'mains',
    label:'Hot',
    price:'4.99',
    description:'A Unique combination of Indian Uthapizza',
    comments:[
        {
        rating: 5,
        comment: "Imagine all the eatables, living in ...",
        author: "John Lennon",
        date: "2012-10-16T17:57:28.556094Z"
    },
    {
        rating: 4,
        comment: "Sends anyine to heaven, I wish i could ...",
        author: "Paul Mcvites",
        date: "2014-09-05T17:57:28.556094Z"
    },
    {
        rating: 3,
        comment: "Eat it, just eat it ...",
        author: "Michael Jackson",
        date: "2015-02-13T17:57:28.556094Z"
    },
    {
        rating: 2,
        comment: "It's your birthday, we are gonna party ...",
        author: "25 cent",
        date: "2011-12-02T17:57:28.556094Z"}
    
     ]
},
{
    name: "Buffet",
    image:'/assets/images/buffet.png',
    category: 'mains',
    label:'Hot',
    price:'4.99',
    description:'A Unique combination of Indian Uthapizza',
    comments:[
        {
        rating: 5,
        comment: "Imagine all the eatables, living in ...",
        author: "John Lennon",
        date: "2012-10-16T17:57:28.556094Z"
    },
    {
        rating: 4,
        comment: "Sends anyine to heaven, I wish i could ...",
        author: "Paul Mcvites",
        date: "2014-09-05T17:57:28.556094Z"
    },
    {
        rating: 3,
        comment: "Eat it, just eat it ...",
        author: "Michael Jackson",
        date: "2015-02-13T17:57:28.556094Z"
    },
    {
        rating: 2,
        comment: "It's your birthday, we are gonna party ...",
        author: "25 cent",
        date: "2011-12-02T17:57:28.556094Z"}
    
     ]
},
{
    name: "Buffet2",
    image:'/assets/images/buffet.png',
    category: 'mains',
    label:'Hot',
    price:'4.99',
    description:'A Unique combination of Indian Uthapizza',
    comments:[
        {
        rating: 5,
        comment: "Imagine all the eatables, living in ...",
        author: "John Lennon",
        date: "2012-10-16T17:57:28.556094Z"
    },
    {
        rating: 4,
        comment: "Sends anyine to heaven, I wish i could ...",
        author: "Paul Mcvites",
        date: "2014-09-05T17:57:28.556094Z"
    },
    {
        rating: 3,
        comment: "Eat it, just eat it ...",
        author: "Michael Jackson",
        date: "2015-02-13T17:57:28.556094Z"
    },
    {
        rating: 2,
        comment: "It's your birthday, we are gonna party ...",
        author: "25 cent",
        date: "2011-12-02T17:57:28.556094Z"}
    
     ]
},
{
    name: "Uthappizza",
    image:'/assets/images/uthappizza.png',
    category: 'mains',
    label:'Hot',
    price:'4.99',
    description:'A Unique combination of Indian Uthapizza',
    comments:[
        {
        rating: 5,
        comment: "Imagine all the eatables, living in ...",
        author: "John Lennon",
        date: "2012-10-16T17:57:28.556094Z"
    },
    {
        rating: 4,
        comment: "Sends anyine to heaven, I wish i could ...",
        author: "Paul Mcvites",
        date: "2014-09-05T17:57:28.556094Z"
    },
    {
        rating: 3,
        comment: "Eat it, just eat it ...",
        author: "Michael Jackson",
        date: "2015-02-13T17:57:28.556094Z"
    },
    {
        rating: 2,
        comment: "It's your birthday, we are gonna party ...",
        author: "25 cent",
        date: "2011-12-02T17:57:28.556094Z"}
    
     ]
},
]
