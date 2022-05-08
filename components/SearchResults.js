import PaginationButtons from "./PaginationButtons";
import Image from "next/image";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => {
        return (
          <div key={result.link} className="max-w-xl mb-8">
            <div className="group">
              <a
                href={result.link}
                className="text-sm"
                target="_blank"
                rel="noreferrer"
              >
                {result.formattedUrl}
              </a>
              <a href={result.link} target="_blank" rel="noreferrer">
                <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                  {result.title}
                </h2>
              </a>
            </div>
            <p className="line-clamp-2">{result.snippet}</p>
            {/*result.pagemap.cse_image?
              result.pagemap.cse_image.length &&
                  <image
                    src={result.pagemap.cse_image[0].src}
                    width={400}
                    height={300}
                  />
            :''*/}
          </div>
        );
      })}

      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
