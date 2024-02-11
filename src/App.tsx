import Header from "./Components/Header"
import Footer from "./Components/Footer/Footer"
import Button from "./Components/Button"
import Banner from './assets/illustration-intro.svg'
import db from '../db.json'
import CardAbout from "./Components/Card-About"
import Slide from "./Components/Slider/"

export default function App() {

  return (
    <>
      <Header />
      <section className="bg-[url('./assets/bg-tablet-pattern.svg')] bg-right-bottom bg-no-repeat 2xl:max-w-[1440px] 2xl:mx-auto">
        <div className="flex justify-around items-center 2xl:max-w-[1440px] 2xl:mx-auto md:flex-col-reverse md:px-3 md:text-center pt-40 pb-20">

          <div className=" md:w-full w-6/12 ">

            <h1 className="font-bold text-6xl text-Very-Dark-Blue lg:text-4xl sm:text-2xl">
              Bring everyone together to build better products.
            </h1>
            <p className="text-Dark-Grayish-Blue my-8 lg:w-11/12 w-7/12 md:mx-auto ">
              Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <Button title="Get Started" shadow={true} style="" />
          </div>

          <div>
            <img src={Banner} alt="Banner" title="Banner"/>
          </div>
        </div>
      </section>
      <section className="bg-[url('./assets/bg-tablet-pattern.svg')] bg-left-top bg-no-repeat py-14">

        <div className="grid grid-cols-2 md:grid-cols-1 max-w-[1440px] mx-auto">

          <div className="w-7/12 mx-auto lg:w-11/12">
            <h2 className="font-bold text-Very-Dark-Blue text-3xl md:text-center">
              What’s different about Manage?
            </h2>
            <p className="text-Dark-Grayish-Blue my-6 md:text-center">
              Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams
            </p>
          </div>

          <div className="md:px-2">
            {
              db.About.map((iten) => <CardAbout key={iten.id} description={iten.description} id={iten.id} title={iten.title} />)
            }
          </div>
        </div>
      </section>

      <section className="my-20">

        <Slide dado={db.deposition} />
    
      </section>

      <section className="bg-Bright-Red">
        <div className="flex items-center justify-around py-10 sm:flex-col  2xl:mx-auto 2xl:max-w-[1440px]">
          <div className="w-2/4 sm:w-full sm:text-center sm:mb-10">
            <h2 className="font-bold text-6xl text-zinc-50 xl:text-4xl lg:text-2xl md:text-xl">Simplify how your team workd today</h2>
          </div>
          <div>
            <Button title="Get Started" shadow={false} style="" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}