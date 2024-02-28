
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IMovie } from '../interfaces';

interface IMovieGenre {
  name: string;  
  id: number;
    
}

interface IAddFormProps {
    addMovie: (movie: IMovie) => void
}


const AddForm:FC<IAddFormProps> = ({addMovie}) => {

    const navigate = useNavigate();

  const genreCategories: IMovieGenre[] = [
    { id: 1, name: "Horror" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Romance" },
    { id: 3, name: "Drama" }
  ];

  const [movieTitle, setMovieTitle] = useState<string>("");
  const [movieRating, setMovieRating] = useState<string>("1");
  const [movieGenre, setmovieGenre] = useState<string>("Comedy");
  const [movieDescription, setMovieDescription] = useState<string>("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(e.target.value);
  };
  const handleChangeRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieRating(e.target.value);
  };
  const handleChangeGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setmovieGenre(e.target.value);
  };
  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMovieDescription(e.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (movieTitle !== '' && movieGenre !== '' && movieDescription !== ''){
        const movie: IMovie = {
          id: Date.now(),
          title: movieTitle,
          rating: movieRating,
          genre: movieGenre,
          description: movieDescription,
        };
        addMovie(movie);
        navigate('/');
    }
  };

  const handleClearForm = () => {
    setMovieTitle("");
    setMovieRating("1");
    setmovieGenre("Comedy");
    setMovieDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmitForm}>
      <div className="form-group">
        <label htmlFor="title">Movie -Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={movieTitle}
          onChange={handleChangeTitle}
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <div className="rating-wrapper">
          <span>{movieRating}</span>
          <input
            type="range"
            name="rating"
            id="rating"
            min="0"
            max="5"
            value={movieRating}
            onChange={handleChangeRating}
          />
          <span>5</span>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          name="genre"
          id="genre"
          value={movieGenre}
          onChange={handleChangeGenre}
        >
            {
                genreCategories.map(category => {
                  return  <option value={category.name} key={category.id}>{category.name}</option>
                })
            }
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={movieDescription}
          onChange={handleChangeDescription}
        />
      </div>
      <div className="btns">
        <button type='submit' className="add-btn">ADD Movie</button>
        <button className="clear-btn" onClick={handleClearForm}>Clear</button>
      </div>
    </form>
  );
};

export default AddForm






