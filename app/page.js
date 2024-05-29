"use client";

import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import styles from './page.module.css'
import Product from './product'
let db = require('../db.json')

export default function Home() {
  const findUser = userId => db.users.find(user => user.id == userId);
  const findImage = imageId => db.images.find(image => image.id == imageId);

  const [db, setDb] = useState({products: []});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-course.tag-team.be/db');
        const dbContents = await response.json();
        setDb(dbContents);
      } catch (error) {
        console.error('Error fetching the JSON file:', error);
      }
    };

    // Fetch data immediately on component mount
    fetchData();

    // Set up the interval to fetch data every 3 seconds
    const intervalId = setInterval(fetchData, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className={styles.main}>
      <h2>Webshop</h2>
      <div>{db.products.length} products</div>
      <div className={styles.description}>
        {db.products.map(product => (
          <Product product={product} user={findUser(product.userId)} image={findImage(product.imageId)} />
        ))}
      </div>
    </main>
  )
}
