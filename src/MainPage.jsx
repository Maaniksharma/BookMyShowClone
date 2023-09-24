import { HEROIMAGE } from "./HEROIMAGE";
import HeroCarousel from "./components/HeroCarousel";
import { MOVIE, ENTERTAINMENT, PREMIERE, EVENTS } from "./MOVIE";
import MovieCarousel from "./components/MovieCarousel";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export default function MainPage() {
  const { data: Premiere } = useQuery(["premiere"], async () => {
    const response = await axios.get("/movie/popular");
    return response.data.results;
  });

  const { data: Upcoming } = useQuery(["upcoming"], async () => {
    const response = await axios.get("/movie/upcoming");
    return response.data.results;
  });
  if (!Premiere || !Upcoming) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <HeroCarousel Image={HEROIMAGE} />
      <div className="mt-6">
        <MovieCarousel
          Title={"Recommended Movies"}
          carouselData={MOVIE}
          dark={false}
          api={false}
        />
      </div>
      <div className="py-8 rounded  lg:px-14 px-4">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          alt=""
        />
      </div>
      <MovieCarousel
        Title="The Best of Live Events"
        carouselData={ENTERTAINMENT}
        dark={false}
        api={false}
        single={true}
      />
      <div className="bg-slate-700  lg:px-14 pt-3 px-4 md:pb-2">
        <img
          className="max-w-full h-full object-cover w-3/5 md:hidden"
          src="/preimere1.png"
          alt=""
        />
        <img
          className="max-w-full h-full object-cover md:block hidden"
          src="/premiere.png"
          alt=""
        />
      </div>
      <MovieCarousel
        Title="Premieres"
        carouselData={Premiere}
        dark={true}
        subtitle="Brand new releases every Friday"
        api={true}
      />
      <MovieCarousel
        Title="Upcoming Movies"
        carouselData={Upcoming}
        dark={false}
        api={true}
      />
      <MovieCarousel
        Title="Events Happening Near You "
        carouselData={EVENTS}
        dark={false}
        api={false}
      />
    </>
  );
}
