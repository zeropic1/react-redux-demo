import React from 'react'
import PropTypes from 'prop-types'
import { RouterListView } from 'cl9-docs-component'

function BaseList(props) {
  const list = [
    {
      title: 'Redux中最重要的三个概念',
      path: '/module/base/principle',
    },
    {
      title: 'Action通过ActionCreator来创建',
      path: '/module/base/actioncreator',
    },
    {
      title: '合并不同功能的reducer',
      path: '/module/base/combinereducer',
    },
  ]

  return <RouterListView list={list} />
}

BaseList.propTypes = {}

export default BaseList
