// import React, {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookDetails.css";
// import {FaArrowLeft} from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// const URL = "https://openlibrary.org/works/";

// const BookDetails = () => {
//   const {id} = useParams();
//   const [loading, setLoading] = useState(false);
//   const [book, setBook] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);
//     async function getBookDetails(){
//       try{
//         const response = await fetch(`${URL}${id}.json`);
//         const data = await response.json();
//         console.log(data);

//         if(data){
//           const {description, title, covers, subject_places, subject_times, subjects} = data;
//           const newBook = {
//             description: description ? description.value : "No description found",
//             title: title,
//             cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
//             subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
//             subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
//             subjects: subjects ? subjects.join(", ") : "No subjects found"
//           };
//           setBook(newBook);
//         } else {
//           setBook(null);
//         }
//         setLoading(false);
//       } catch(error){
//         console.log(error);
//         setLoading(false);
//       }
//     }
//     getBookDetails();
//   }, [id]);

//   if(loading) return <Loading />;

//   return (
//     <section className='book-details'>
//       <div className='container'>
//         <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
//           <FaArrowLeft size = {22} />
//           <span className='fs-18 fw-6'>Go Back</span>
//         </button>

//         <div className='book-details-content grid'>
//           <div className='book-details-img'>
//             <img src = {book?.cover_img} alt = "cover img" />
//           </div>
//           <div className='book-details-info'>
//             <div className='book-details-item title'>
//               <span className='fw-6 fs-24'>{book?.title}</span>
//             </div>
//             <div className='book-details-item description'>
//               <span>{book?.description}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subject Places: </span>
//               <span className='text-italic'>{book?.subject_places}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subject Times: </span>
//               <span className='text-italic'>{book?.subject_times}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subjects: </span>
//               <span>{book?.subjects}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BookDetails



// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom'; // Import Link
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookDetails.css";
// import { FaArrowLeft } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// const URL = "https://openlibrary.org/works/";

// const BookDetails = () => {
//   const { id } = useParams();
//   const [loading, setLoading] = useState(false);
//   const [book, setBook] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);
//     async function getBookDetails() {
//       try {
//         const response = await fetch(`${URL}${id}.json`);
//         const data = await response.json();
//         console.log(data);

//         if (data) {
//           const { description, title, covers, subject_places, subject_times, subjects } = data;
//           const newBook = {
//             description: description ? description.value : "No description found",
//             title: title,
//             cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
//             subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
//             subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
//             subjects: subjects ? subjects.join(", ") : "No subjects found"
//           };
//           setBook(newBook);
//         } else {
//           setBook(null);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     }
//     getBookDetails();
//   }, [id]);

//   if (loading) return <Loading />;

//   return (
//     <section className='book-details'>
//       <div className='container'>
//         <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
//           <FaArrowLeft size={22} />
//           <span className='fs-18 fw-6'>Go Back</span>
//         </button>

//         <div className='book-details-content grid'>
//           <div className='book-details-img'>
//             {/* Wrap the image with a Link */}
//             <Link to={`/book/${id}`}>
//               <img src={book?.cover_img} alt="cover img" />
//             </Link>
//           </div>
//           <div className='book-details-info'>
//             <div className='book-details-item title'>
//               <span className='fw-6 fs-24'>{book?.title}</span>
//             </div>
//             <div className='book-details-item description'>
//               <span>{book?.description}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subject Places: </span>
//               <span className='text-italic'>{book?.subject_places}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subject Times: </span>
//               <span className='text-italic'>{book?.subject_times}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subjects: </span>
//               <span>{book?.subjects}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BookDetails;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const [bookId, setBookId] = useState('');
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${bookId || id}.json`); // Use bookId if available, otherwise use id from URL
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            description: description ? description.value : "In the heart of a bustling bookstore called nestled among shelves adorned with colorful tales, there sat a charming book titled Hello Baby.Illustrated with vibrant scenes of forest creatures and tender moments,its pages held the enchanting story of Mama Duck and her delightfuldiscovery—an egg filled with promise.Through gentle words and captivating illustrations,invited readers to embark on a heartwarming journey of love, wonder, and the joyous arrival of new life, leaving a lasting imprint on the imaginations of all who turned its page Within the heart of this charming story, Mama Duck, with feathers ruffled in excitement, stumbled upon a mysterious egg nestled among the reeds by the riverbank. With tender care, she cradled it close, nurturing the promise of new life within.As days turned into weeks,the forest buzzed with anticipation,as creatures great and small gathered around,their hearts filled with wonder.Finally,the moment arrived—a crack echoed through the forest,and from the confines of the egg emerged a tiny duckling,its eyes alight with curiosity and innocence.Amidst the jubilant cheers of the woodland creatures,Mama Duck proudly introduced her newborn to the world,marking a moment of pure magic and joy.",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "Nature",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "Miracle"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id, bookId]); // Update useEffect dependencies

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission to update bookId state
  };

  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        {/* Add a form to change the book ID */}
        <form onSubmit={handleSubmit}>
          <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} placeholder="Enter book ID" />
          <button type="submit">Change Book</button>
        </form>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails;
