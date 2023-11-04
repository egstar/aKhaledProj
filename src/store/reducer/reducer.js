
// ======================== Reducer ========================

const initialState={
    country:'us',
    lang:'en'
}

export default function countryReducer (state =initialState, action )
{
    switch(action.type)
    {
        case 'CHANGE_COUNTRY':
            return{...state ,country:action.payload};
        case "LANGUAGE":
            return {...state ,lang:action.payload};
        default:
            return state;
    }
}



