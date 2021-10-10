import { FC } from "react"

export const ModalForm: FC<any> = ({movie, onChange}) => {
  return (
    <form className='modal-form'>
      <div className='modal-form__item-wrap'>
        <div className='modal-form__item'>
          <label>title</label>
          <input type='text' value={movie.name} onChange={(val) => onChange(val, 'name')} />
        </div>
        <div className='modal-form__item'>
          <label>RELEASE DATE</label>
          <input type='date' placeholder='Select Date' value={movie.releaseDate} onChange={(val) => onChange(val, 'releaseDate')} />
        </div>
      </div>

      <div className='modal-form__item-wrap'>
        <div className='modal-form__item'>
          <label>MOVIE URL</label>
          <input type='text' value={movie.url} placeholder='https://' onChange={(val) => onChange(val, 'url')} />
        </div>
        <div className='modal-form__item'>
          <label>RATING</label>
          <input type='text' value={`${movie.rating}`} placeholder='7.8' onChange={(val) => onChange(val, 'rating')} />
        </div>
      </div>

      <div className='modal-form__item-wrap'>
        <div className='modal-form__item'>
          <label>GENRE</label>
          <input type='text' value={movie.genre} onChange={(val) => onChange(val, 'genre')} />
        </div>
        <div className='modal-form__item'>
          <label>RUNTIME</label>
          <input type='text' value={`${movie.runtime}`} placeholder='minutes' onChange={(val) => onChange(val, 'runtime')} />
        </div>
      </div>

      <div className='modal-form__item'>
        <label>OVERVIEW</label>
        <input type='text' value={movie.description} placeholder='movie description' onChange={(val) => onChange(val, 'description')} />
      </div>
    </form>
  )
}