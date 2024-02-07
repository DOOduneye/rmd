import Head from 'next/head'
import Search from '@/components/Search';
import Featured from '@/components/Featured/Featured';

export default function Home() {  

  return (
    <main className="grid h-screen grid-cols-1 grid-rows-3 justify-items-center">
      <div className="flex flex-col row-span-1 gap-20 p-5 mt-16 w-fit">
        <Search />
      </div> 
      <div className="row-span-2">
        <Featured />
      </div>
    </main>
  )
}
