'use client';
import { useSearchParams } from "next/navigation";

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();

    function handleSearch(term: string){
        console.log(term);
        const params = new URLSearchParams(searchParams);
        if(term){
            params.set('query', term);
        }
    }

  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
