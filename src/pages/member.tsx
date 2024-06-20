import Counter from '@/components/Counter'
import Layout from '@/components/Layout'
import React from 'react'

const Member: React.FC = () => {
  return (
    <Layout>
        <div className='flex flex-col items-center'>
            <p className='text-3xl'>This is the Member page!</p>
            <Counter />
        </div>
    </Layout>
  )
}

export default Member