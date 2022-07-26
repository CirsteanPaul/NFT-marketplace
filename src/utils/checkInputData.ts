interface Props{
    name: string,
    price: string,
    category: string,
    amount: string,
    type: string,
    imageToUpload: File | null
}
const checkInputData = (props: Props) =>{
    const { name, price, category, amount, type, imageToUpload} = props;
    console.log(props)
    if(!name || !price || !category || !amount || !type || !imageToUpload) return false;
    if(!parseInt(price) || !parseInt(amount) || !parseInt(type) ||  !parseInt(category))
    return false;

    const pri = parseInt(price);
    const categ = parseInt(category);
    const amou = parseInt(amount);
    const typ = parseInt(type);
    
    if(pri < 0 || categ < 0 || amou < 0 || typ < 0) return false;
    if(categ > 2 || typ > 4) return false
    return true;
}

export default checkInputData;