import { FC } from 'react';
import { Field, Form } from 'formik';
import { ItemWrap } from './ItemWrap/ItemWrap';
import './style.scss';

export const ModalForm: FC = () => {
  return (
    <Form className='modal-form'>
      <div className='modal-form__item-row'>
        <ItemWrap
          title='TITLE'
          name='title'
          errorAriaLabel='titleError'
          isLong
        >
          <Field
            className='modal-form__item-input'
            type='text'
            name='title'
            aria-label='title-input'
          />
        </ItemWrap>

        <ItemWrap
          title='RELEASE DATE'
          name='release_date'
          errorAriaLabel='dateError'
        >
          <Field
            className='modal-form__item-input'
            type='date'
            name='release_date'
            placeholder='Select Date'
            aria-label='date-input'
          />
        </ItemWrap>
      </div>

      <div className='modal-form__item-row'>
        <ItemWrap
          title='MOVIE URL'
          name='poster_path'
          errorAriaLabel='urlError'
          isLong
        >
          <Field
            className='modal-form__item-input'
            type='text'
            name='poster_path'
            placeholder='https://'
            aria-label='url-input'
          />
        </ItemWrap>

        <ItemWrap
          title='RATING'
          name='vote_average'
          errorAriaLabel='ratingError'
        >
          <Field
            className='modal-form__item-input'
            type='number'
            name='vote_average'
            placeholder='7.8'
            aria-label='rating-input'
          />
        </ItemWrap>
      </div>

      <div className='modal-form__item-row'>
        <ItemWrap
          title='GENRE'
          name='genres'
          errorAriaLabel='genreError'
          isLong
        >
          <Field
            className='modal-form__item-input'
            as='select'
            name='genres'
            multiple
            placeholder='Select Genre'
            aria-label='genres-select'
          >
            <option value='Comedy'>Comedy</option>
            <option value='Drama'>Drama</option>
            <option value='Romance'>Romance</option>
          </Field>
        </ItemWrap>

        <ItemWrap
          title='RUNTIME'
          name='runtime'
          errorAriaLabel='runtimeError'
        >
          <Field
            className='modal-form__item-input'
            type='number'
            name='runtime'
            placeholder='minutes'
            aria-label='runtime-input'
          />
        </ItemWrap>
      </div>

      <ItemWrap
        title='OVERVIEW'
        name='overview'
        errorAriaLabel='overviewError'
      >
        <Field
          className='modal-form__item-input'
          as='textarea'
          rows='6'
          name='overview'
          placeholder='movie description'
          aria-label='overview-input'
        />
      </ItemWrap>

      <div className='modal-buttons'>
        <button className='reset-btn' type='reset'>RESET</button>
        <button className='submit-btn' type='submit'>SUBMIT</button>
      </div>
    </Form>
  );
};