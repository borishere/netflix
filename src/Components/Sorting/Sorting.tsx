import { FC } from "react"
import './style.scss';

export const Sorting: FC = () => (
  <div className='sorting'>
    <span className='sorting-title'>SORT BY</span>
    <select>
      <option>release date</option>
      <option>popularity</option>
    </select>
  </div>
)
