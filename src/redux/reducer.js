
const INITIALSTATE={
    allshoes:[],
    name: "",
    price:"",
    image:"",
   

}

const GET_ALL_SHOES ='GET_ALL_SHOES';
const POST_ALL_SHOES = 'POST_ALL_SHOES';
const UPDATE_NAME  = "UPDATE_NAME";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_PRICE  = "UPDATE_PRICE";



function reducer(state=INITIALSTATE, action){


    switch(action.type){
        case GET_ALL_SHOES:
            return Object.assign({}, state, {allshoes:action.payload})
        case POST_ALL_SHOES:    
            return Object.assign({}, state, {shoes:action.payload})
        case UPDATE_NAME:
            return Object.assign({}, state, {name:action.payload} )
        case UPDATE_IMAGE:
            return Object.assign({}, state, {image:action.payload})
        case UPDATE_PRICE:
            return Object.assign({}, state, {price:action.payload})
        
        
        default: return state;
    }
}
 function get_All_Shoes(shoe){
    return{
        type:GET_ALL_SHOES,
        payload: shoe
    }

}
function post_All_Shoes(shoes){
    return{
        type:POST_ALL_SHOES,
        payload: shoes

    }
}
function updateName(name){
    return{
        type:UPDATE_NAME,
        payload:name
    }
}
function updateImage(image){
    return{
        type:UPDATE_IMAGE,
        payload:image
    }
}
function updatePrice(price){
    return{
        type:UPDATE_PRICE,
        payload:price
    }
}

export default reducer;

export{post_All_Shoes,get_All_Shoes, updateName, updateImage, updatePrice,}