interface BookI{
    id: number;
    title:string;
    author: string;
}


const book:BookI={
    id:1,
    title:'Las requilias de la muerte',
    author:'Harry Pother'
};

const books:BookI[]=[
    {id:1, title:'',author:''},
    {id:2, title:'',author:''}
]


function getBook( book: BookI):BookI|any{
    return book;
}