import { FC } from 'react';
import { ErrorMessage, Field, Form } from 'formik';
import './ModalForm.scss';

export const ModalForm: FC = () => {
  return (
    <Form className='modal-form'>
      <div className='modal-form__item-wrap'>
        <div className='modal-form__item long'>
          <label>TITLE</label>
          <Field
            className='modal-form__item-input'
            type='text'
            name='title'
          />
          <ErrorMessage name='title' />
        </div>

        <div className='modal-form__item'>
          <label>RELEASE DATE</label>
          <Field
            className='modal-form__item-input'
            type='date'
            name='release_date'
            placeholder='Select Date'
          />
          <ErrorMessage name='release_date' />
        </div>
      </div>

      <div className='modal-form__item-wrap'>
        <div className='modal-form__item long'>
          <label>MOVIE URL</label>
          <Field
            className='modal-form__item-input'
            type='text'
            name='poster_path'
            placeholder='https://'
          />
          <ErrorMessage name='poster_path' />
        </div>

        <div className='modal-form__item'>
          <label>RATING</label>
          <Field
            className='modal-form__item-input'
            type='number'
            name='vote_average'
            placeholder='7.8'
          />
          <ErrorMessage name='vote_average' />

        </div>
      </div>

      <div className='modal-form__item-wrap'>
        <div className='modal-form__item long'>
          <label>GENRE</label>
          <Field
            className='modal-form__item-input'
            as='select'
            name='genres'
            multiple
            placeholder='Select Genre'
          >
            <option value='Comedy'>Comedy</option>
            <option value='Drama'>Drama</option>
            <option value='Romance'>Romance</option>
          </Field>
          <ErrorMessage name='genres' />
        </div>

        <div className='modal-form__item'>
          <label>RUNTIME</label>
          <Field
            className='modal-form__item-input'
            type='number'
            name='runtime'
            placeholder='minutes'
          />
          <ErrorMessage name='runtime' />
        </div>
      </div>

      <div className='modal-form__item'>
        <label>OVERVIEW</label>
        <Field
          className='modal-form__item-input'
          as='textarea'
          rows='6'
          name='overview'
          placeholder='movie description'
        />
        <ErrorMessage name='overview' />
      </div>

      <div className='modal-buttons'>
        <button className='reset-btn' type='reset'>RESET</button>
        <button className='submit-btn' type='submit'>SUBMIT</button>
      </div>
    </Form>
  );
};