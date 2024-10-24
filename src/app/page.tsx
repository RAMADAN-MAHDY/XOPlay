import WeatherApi from "./component/weatherApi/weatherApi";


export default function Home({params}:any) {

    // console.log(params +"--------------")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-[25px] mt-4"> بسم الله الرحمن الرحيم</h1>
      <WeatherApi/>
    </main>
  )
}
