import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
	const [books, setBooks] = useState([]);

	// Create Book
	const createBook = (title) => {
		const updatedBooks = [
			...books,
			{
				id: Math.round(Math.random() * 9999),
				title,
			},
		];
		setBooks(updatedBooks);
	};

	// Delete Book
	const deleteBookById = (id) => {
		const updatedBooks = books.filter((book) => {
			return book.id !== id;
		});

		setBooks(updatedBooks);
	};

	// Edit Book
	const editBookById = (id, newTitle) => {
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return { ...book, title: newTitle };
			}

			return book;
		});

		setBooks(updatedBooks);
	};

	return (
		<div className="app">
			<BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
