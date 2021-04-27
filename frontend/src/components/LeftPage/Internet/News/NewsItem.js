import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
const NewsItem = ({ article, Count, setCount }) => {

    const { title, description, url, urlToImage } = article;

    // if (Count % 3 === 0) {
        return (
            <div>
                {urlToImage && (
                    <div>
                        <a href={url} target="_blank" rel="noopner noreferrer">
                            <img src={urlToImage} alt="thumbnail" />
                            <span>{title}</span>
                        </a>
                    </div>
                )}
            </div>
        )
    // }else {
    //     return (
    //         <div>
    //             <div>
    //                 <a href={url} target="_blank" rel="noopner noreferrer">
    //                     <span>{title}</span>
    //                 </a>
    //             </div>
    //         </div>
    //     )
    // }

}

export default withRouter(NewsItem);
