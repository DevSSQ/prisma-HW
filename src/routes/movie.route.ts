import express from 'express';
import validate from '../middleware/validate';
import { movieSchema, movieSchemaType } from '../schema/movie.schema';

const router = express.Router();
let movie : movieSchemaType[] =[];

router.get('/', validate(movieSchema),(req, res, next) => {
    return res.json(movie);
  });

router.post('/', validate(movieSchema), (req, res, next) => {
    const newmovie = req.body as movieSchemaType;
    movie.push(newmovie);
    return res.status(201).json({ message: 'Movie information is Added !' });
  });

router.put('/', validate(movieSchema), (req, res, next) => {
    const updatedMovie = req.body as movieSchemaType;
    const { id } = req.params;
    const updatedList = movie.filter((mov) => {
      return mov.id !== id;
    });
    updatedList.push(updatedMovie);
    movie = updatedList;

            return res.json({
                message: 'Movie  information is Updated !'
            })
});

router.delete('/', (req, res, next) => {
    const id  = req.params;
    const delMovie = movie.filter((mov) => {
      return mov.id !== id;
    });
    movie = delMovie;

    return res.json({
      message: 'Movie is deleted !',
    });
  });

  router.get('/:name', (req, res) => {
    let { name }  = req.params;
    let searchArr = movie.filter((item)=>{
      return item.name.toLowerCase().includes(name);
    })
    return res.json(searchArr);
  });

  router.get('/:genre', (req, res) => {
    let { genre }  = req.params;
    let searchArr = movie.filter((item)=>{
      return item.genre.toLowerCase().includes(genre);
    })
    return res.json(searchArr);
  });


export default router;