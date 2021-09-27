import { FC } from "react"

export const Sorting: FC = () => (
  <div className='sorting'>
    <span>SORT BY</span>
    <select>
      <option>release date</option>
      <option>popularity</option>
    </select>
  </div>
)
