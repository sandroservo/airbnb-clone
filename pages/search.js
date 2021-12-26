import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InforCard from "../components/InforCard";
import { compareAsc, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

//import pt from 'date-fns/locales/pt';

const search = ({ searchResults }) => {

  const router = useRouter();

  //console.log(searchResults);

  const { location, startDate, endDate, noOfGuests } = router.query;

  //console.log(startDate, endDate);

  const formattedStartDate = format(new Date(startDate), "yyyy-MM-dd", { locale: ptBR });

  const formattedEndtDate = format(new Date(endDate), "yyyy-MM-dd", { locale: ptBR });
  const range = `${formattedStartDate} - ${formattedEndtDate}`;
  //const range = rangearr.sort(compareAsc)

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p>300+ Stay - {range} - for  {noOfGuests} number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexbility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>

          </div>

          <div className='flex flex-col'>
            {searchResults.map(
              ({ img, location, title, description, star, price,
                total }) => (
              <InforCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
              )
            )}
          </div>

        </section>

      </main>
      <Footer />
    </div>
  )
}

export default search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz')
    .then(res => res.json());

  return {
    props: {
      searchResults,
    }
  }
}