'use client';
import { useEffect, useState } from 'react';
import style from './listCard.module.css';
import { Card } from '../Card/card';
import { FaLess } from 'react-icons/fa';
export const ListCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoding] = useState(false);
  const getProducts = () => {
    setLoding(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        setLoding(false);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);


  return <div>
    {loading ?
      <center><span className={style.loader}>loading...</span></center>
      :
      <div className={style.listCard}>
        {blogs.map((el) => {
          return (
            <Card
              blog={el}
            />
          );
        })}
      </div>


    }
  </div>




}