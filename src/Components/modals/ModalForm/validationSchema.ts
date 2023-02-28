import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  title: yup.string().required(),
  release_date: yup.date(),
  vote_average: yup.number(),
  genres: yup.array().of(yup.string()).required(),
  poster_path: yup.string().url().required(),
  overview: yup.string().required(),
  runtime: yup.number().min(0).integer().required()
});
