import TextBlock from '#/components/common/TextBlock'
import React from 'react'
import links_data from "#/__mocks__/support.json" 

const QuickLinks = () => {
  return (
    <div className='container mx-auto section-gap-m'>
      <h5 className='text-4xl font-semibold pb-4'>Quick Link</h5>
      <ul>
        {links_data.quick_links.map((data:any, i:number) => <li key={i} className='text-blue-500 text-2xl py-1'><a href={data.path}>{data.link}</a></li> )}
      </ul>
    </div>
  )
}

export default QuickLinks