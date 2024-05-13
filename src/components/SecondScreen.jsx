import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SecondScreen.css';

const SecondScreen = () => {
    const [bestsellers, setBestsellers] = useState([]);
    const [newBooks, setNewBooks] = useState([]);
    const [blogChoices, setBlogChoices] = useState([]);
    const [economicBooks, setEconomicBooks] = useState([]);
    const [literature, setLiterature] = useState([]);
    const [science, setScience] = useState([]);
    const [humanities, setHumanities] = useState([]);
    const [improve, setImprove] = useState([]);

    useEffect(() => {
        fetch('http://43.201.231.40:8080/open/bestseller', {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setBestsellers(data.item); 
            })
            .catch(error => console.error('Error fetching bestsellers:', error));
    }, []);

    useEffect(() => {
        fetch('http://43.201.231.40:8080/open/bestseller/newBook', {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setNewBooks(data.item); 
            })
            .catch(error => console.error('Error fetching new books:', error));
    }, []);

    useEffect(() => {
        fetch('http://43.201.231.40:8080/open/bestseller/blogChoice', {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setBlogChoices(data.item); 
            })
            .catch(error => console.error('Error fetching blog choices:', error));
    }, []);

    useEffect(() => {
        fetch('http://43.201.231.40:8080/open/bestseller/category/170', {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setEconomicBooks(data.item); 
            })
            .catch(error => console.error('Error fetching blog choices:', error));
    }, []);

    useEffect(() => {
        fetch('http://43.201.231.40:8080/open/bestseller/category/1', {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setLiterature(data.item); 
            })
            .catch(error => console.error('Error fetching blog choices:', error));
    }, []);

    useEffect(() => {
        fetch('http://43.201.231.40:8080/open/bestseller/category/987', {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setScience(data.item); 
            })
            .catch(error => console.error('Error fetching blog choices:', error));
    }, []);

    useEffect(() => {
        fetch('http://43.201.231.40:8080/open/bestseller/category/656', {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setHumanities(data.item); 
            })
            .catch(error => console.error('Error fetching blog choices:', error));
    }, []);

    useEffect(() => {
        fetch('http://43.201.231.40:8080/open/bestseller/category/336', {
            method: 'GET',
            headers: {
                'Accept': '*/*'
            }
        })
            .then(response => response.json())
            .then(data => {
                setImprove(data.item); 
            })
            .catch(error => console.error('Error fetching blog choices:', error));
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="second-screen">
            <h2>🏅 오늘의 베스트셀러 </h2>
            <Slider {...settings}>
            {bestsellers.map((bestseller, index) => (
            <div key={index} className="bestseller-item">
            <div className="rank">{bestseller.bestRank}</div>
            <img src={bestseller.cover} alt={bestseller.title} className="bestseller-image" onClick={(e) => e.stopPropagation()} /> 
            <Link to={`/book/${bestseller.id}`} className="book-link">
                <p className="title">{bestseller.title}</p> {/* 제목 클릭 가능 */}
            </Link>
            <p className="author" onClick={(e) => e.stopPropagation()}>{bestseller.author}</p> {/* 저자 클릭 이벤트 비활성화 */}
            </div>
            ))}
            </Slider>

            <h2>🆕 신간 베스트셀러</h2>
            <Slider {...settings}>
            {newBooks.map((book, index) => (
            <div key={index} className="new-book-item">
            <img src={book.cover} alt={book.title} className="new-book-image" onClick={(e) => e.stopPropagation()} />
            <Link to={`/book/${book.id}`} className="book-link">
                <p className="title01">{book.title}</p>
            </Link>
            <p className="author" onClick={(e) => e.stopPropagation()}>{book.author}</p>
            </div>
            ))}
            </Slider>


            <h2>✔ Blog Choice 베스트셀러</h2>
            <Slider {...settings}>
            {blogChoices.map((blogChoice, index) => (
            <div key={index} className="blog-choice-item">
            <div className="rank">{blogChoice.bestRank}</div>
            <img src={blogChoice.cover} alt={blogChoice.title} className="blog-choice-image" onClick={(e) => e.stopPropagation()} />
            <Link to={`/book/${blogChoice.id}`} className="book-link">
                <p className="title02">{blogChoice.title}</p>
            </Link>
            <p className="author02" onClick={(e) => e.stopPropagation()}>{blogChoice.author}</p>
            </div>
            ))}
            </Slider>


            <h2>📔경영경제 베스트셀러</h2>
            <Slider {...settings}>
                {economicBooks.map((economicBooks, index) => (
                    <div key = {index} className="economic-books-item">
                        <div className="rank">{economicBooks.bestRank}</div>
                        <img src = {economicBooks.cover} alt = {economicBooks.title} className="econmoic-books-image"onClick={(e) => e.stopPropagation()} />
                        <Link to ={`/book/${economicBooks.id}`} className="book-link">
                        <p className="title03">{economicBooks.title}</p>
                        </Link>
                        <p className="author03" onClick={(e) => e.stopPropagation()}>{economicBooks.author}</p>
                        </div>
                ))}
                </Slider>

            <h2>📚 문학 베스트셀러</h2>
            <Slider {...settings}>
                {literature.map((literature, index) => (
                    <div key = {index} className="literature-books-item">
                        <div className="rank">{literature.bestRank}</div>
                        <img src = {literature.cover} alt={literature.title} className="literature-books-image"onClick={(e) => e.stopPropagation()} />
                        <Link to ={`/book/${literature.id}`} className="book-link">
                        <p className="title04">{literature.title}</p>
                        </Link>
                        <p className="author04" onClick={(e) => e.stopPropagation()}>{literature.author}</p>
                    </div>
                    ))}
                    </Slider>


            <h2>🧪 과학 베스트셀러</h2>
            <Slider {...settings}>
                {science.map((science, index) => (
                    <div key = {index} className="science-books-item">
                        <div className="rank">{science.bestRank}</div>
                        <img src = {science.cover} alt={science.title} className="science-books-image"onClick={(e) => e.stopPropagation()} />
                        <Link to ={`/book/${science.id}`} className="book-link">
                        <p className="title04">{science.title}</p>
                        </Link>
                        <p className="author04" onClick={(e) => e.stopPropagation()}>{science.author}</p>
                    </div>
                ))}
                </Slider>

            <h2>👥 인문 베스트셀러</h2>
            <Slider {...settings}>
                {humanities.map((humanities, index) => (
                    <div key = {index} className="humanities-books-item">
                        <div className = "rank">{humanities.bestRank}</div>
                        <img src = {humanities.cover} alt={humanities.title} className="humanities-books-image"onClick={(e) => e.stopPropagation()} />
                        <Link to ={`/book/${humanities.id}`} className="book-link">
                            <p className="title04">{humanities.title}</p>
                            </Link>
                            <p className="author04" onClick={(e) => e.stopPropagation()}>{humanities.author}</p>
                    </div>
                ))}
                </Slider>

            <h2>💪 자기계발 베스트셀러</h2>
            <Slider {...settings}>
                {improve.map((improve, index) => (
                    <div key = {index} className="improve-books-item">
                        <div className = "rank">{improve.bestRank}</div>
                        <img src = {improve.cover} alt={improve.title} className="improve-books-image"onClick={(e) => e.stopPropagation()} />
                        <Link to ={`/book/${improve.id}`} className="book-link">
                        <p className="title04">{improve.title}</p>
                        </Link>
                        <p className="author04" onClick={(e) => e.stopPropagation()}>{improve.author}</p>
                        </div>
                ))}
                </Slider>
        </div>
    );
}

export default SecondScreen;
