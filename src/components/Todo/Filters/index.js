import React from 'react'

import ActiveFilter from './ActiveFilter'
import NameFilter from './NameFilter'

const Filters = ({ onChangeNameFilter }) => (
  <div>
    <NameFilter onChangeNameFilter={onChangeNameFilter} />
    <ActiveFilter />
  </div>
)

export default Filters
