import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <Link href={`/store/${book.id}`}>
      <div className="flex flex-col items-center rounded-xl bg-gray-50 p-2 m-2 shadow">
        <Image
          className="md-2 h-13"
          src={book.cover}
          alt={book.title}
          width={200}
          height={150}
          priority={true}
          style={{ height: "200px", width: "auto" }}
        />
        {book.title}
      </div>
    </Link>
  );
};

export default BookCard;
