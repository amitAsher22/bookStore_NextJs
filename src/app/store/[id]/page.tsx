"use client"

import { useParams } from 'next/navigation';
import {getAllBooks} from "@/app/lib/fake-data"
import BookDetails from "@/app/ui/books/BookDetails"

const BookDetailsPage =  () => {
  
  const { id } = useParams();
  const books  =  getAllBooks()
 const find = books.find((item)=> item.id === id)
  console.log(find)
//  const presentBook = books.find((item)=> {item.id === id})
console.log(id)
  return (
    <div><BookDetails book={find}/></div>
  )
    

    
  
};

export default BookDetailsPage;
