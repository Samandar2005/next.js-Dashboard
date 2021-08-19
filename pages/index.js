
import Dashboard from "../containers/Dashboard"
import CardsContainer from "../containers/Home/CardsContainer"

export default function Home() {
  return (
    <Dashboard menu={"home"}>
      <CardsContainer />
    </Dashboard>
  )
}
