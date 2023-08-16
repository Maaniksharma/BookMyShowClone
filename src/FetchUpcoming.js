import axios from "axios";
const fetchPet = async () => {
  const apires = await axios.get("/movie/upcoming");
  //     setUpcoming(response.data.results);
  //     console.log(response);
  // const apires = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apires.ok) throw new Error(`Upcoming fetch not ok`);
  console.log(apires.data.results);
  return apires.json();
};
export default fetchPet;
