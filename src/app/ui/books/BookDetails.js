import React from "react";
import Image from "next/image";

function BookDetails({ book }) {
  return (
    <div className=" flex flex-col items-center top-0">
      <div className="mb-2">
        <Image
          className="mr-2 rounded-md"
          src={book.cover}
          alt={book.title}
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className="p-2 flex flex-col items-center">
        <p className="text-3xl">
          {book.title} by {book.author}
        </p>
        <p className="mt-3 md:w-2/3">{book.description}</p>
        <div className="text-xl mt-3 mb-5">
          <p>
            {book.genre} - {book.pages} pages -{" "}
            {book.stock ? `${book.stock} pieces are in stock` : `No Stock`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
