import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import Images from '../image/photo_2023-09-13_04-54-55.png.png';
import Loadingscreen from '../Loading screen/Loadingscreen';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
export default function Business(){
    const reduxCountry=useSelector((state)=>state.country)
    const [loading,setLoading] =useState(true);
    const [country, setCountry] = useState("us");
    const [category, setCategory] = useState("business");
    const [apikey, setAzpikey] = useState("00ad6c335fb845dab4bdf6be0019d405");
    const [dataNews, setDataNews] = useState([ ]);

    const urlApi=`https://newsapi.org/v2/top-headlines?country=${reduxCountry}&category=${category}&apiKey=${apikey}`;

    async function getNewsBusiness(){
        setLoading(true);
        const dataBusiness=await  Axios.get(urlApi);
        setDataNews(dataBusiness.data.articles);
        setCountry(reduxCountry)
        setLoading(false);
    }
    useEffect(() => {
      getNewsBusiness();
    
      return () => {
        
      }
    }, [])
    



    return(
        <>
            <div className='container w-80'>
                {loading==true? <Loadingscreen/>:''}
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        <div className="col">
                            <div className="card">
                                <img src={Images} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h4 className="card-title text-center">A-Kh News</h4>
                                </div>
                            </div>
                        </div>

                        {dataNews.map((news, i) =>
                            <div key={i} className="col">
                                <div className="card">
                                    <div className='card-img'>
                                        {news.urlToImage != null ? <img src={news.urlToImage} className="card-img-top w-100 " alt="..." /> : <img src={Images} className='rounded-top-3' />}
                                    </div>
                                    <div className="card-body">
                                        {news.title !== '[Removed]' ? <h6 className="card-title">{news.title}</h6> : <h2 className="card-title text-center">A-Kh-News</h2>}
                                        {news.description !== '[Removed]' ? <p className="card-text mb-5">{news.description}</p> : <p className="card-text">A new news website has been created</p>}
                                    </div>
                                    <Link to={`/details/${i}/${category}/${country}/`} className='card-more position-absolute to'>
                                        <h6 className='p-2'>More... <span><i className="fa-solid fa-arrow-right-long"></i></span></h6>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div> 
        </>
    )
}