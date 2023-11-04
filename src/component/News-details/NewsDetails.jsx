import React , {useState , useEffect, useCallback} from'react';
import Axios from'axios';
import images from '../image/photo_2023-09-13_04-54-55.png.png'
import './NewsDetails.css'
import { useParams } from 'react-router-dom';
import Loadingscreen from '../Loading screen/Loadingscreen';
// import { useParams } from 'react-router-dom';

export default function NewsDetails(){

    const prams =useParams();
    const [loding ,setLoding] =useState( true );
    const [displayData,setDesplayData] = useState([ ]);
    const [country, setCountry] = useState('us');
    const [lang, setLang] = useState('en')
    const [category, setCategory] = useState('general');
    const [apikey, setApikey] = useState("3da4c7b85cea8057589f084446ab66aa");
    const urlApi = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${lang}&country=${country}&max=50&apikey=${apikey}`;

   
    function setdetailsApi(){
        setCountry(prams.country);
        setCategory(prams.category);
        console.log(prams.id);
        console.log(category);
        console.log(country);
    }
    

    async function getDetails(){
        setLoding(true);
        let getRequset= await Axios.get(urlApi);
        setDesplayData(getRequset.data.articles[prams.id]);
        setLoding(false)
    }

    useEffect(() => {

        return () => {
            getDetails( );
        }
    }, [ ]);


return (

    <>

    <div className='card-details'>
        {loding==true? <Loadingscreen/>: ' '}
        <div className="card mt-5" >
            <div className="row g-0">
                <div className="col-md-4">
                    {displayData.image!=null?<img src={displayData.image} className="img-thumbnail rounded-start" alt="..."/> : <img src={images} className="img-fluid rounded-start" alt="..."/>}
                </div>
                <div className="col-md-7 offset-lg-1">
                    <div className="card-body text-center">
                        <div>
                            <h4 className="card-title"> Author:</h4>
                            {displayData.author!== null|'[Removed]'? <h5 className='text-body-secondary m-4'> {displayData.author}</h5>  : <h4 className="card-title mt-4">A-Kh-News</h4>}
                        </div>
                        <br />
                        <div>
                            <h4 className="card-title"> Title:</h4>
                            {displayData.title!=='[Removed]'?  <h5 className='text-body-secondary m-4'> {displayData.title}</h5> :<h2 className="card-title">A-Kh-News</h2>}
                        </div>

                        <div>
                            <h4 className="card-text"> Content: </h4>
                            {displayData.content !=null | "[Removed]"?<h5 className='text-body-secondary m-4'>{displayData.content}</h5> : <h5 className='text-body-secondary m-4'>{displayData.description}</h5>}
                        </div>
                       

                        <div>
                            <h4 className='card-text'>publishedAt:</h4>
                            <h5 className="text-body-secondary fs-6 m-4">{displayData.publishedAt} </h5> 
                        </div>

                        <br />
                        <a href={displayData.url} className='text-decoration-none btn btn-outline-info' target='_blank'>Link <i className="fa-regular fa-share-from-square"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
)

}


















