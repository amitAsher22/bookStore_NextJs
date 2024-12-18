"use client"

import { useParams } from 'next/navigation';

const BookDetailsPage =  () => {
  
  const { id } = useParams();

  return <div>Book Details page {id}</div>;
};

export default BookDetailsPage;
