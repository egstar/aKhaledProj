
//  -------------------- Redux dispatch Action -----------------------------

export default function changeCountry (newCountry)
{
    return{
        type: 'CHANGE_COUNTRY',
        payload : newCountry,

    }; 
};

export function changeLang(lang)
{
    return{
        type:"LANGUAGE",
        payload:lang,
    };
}