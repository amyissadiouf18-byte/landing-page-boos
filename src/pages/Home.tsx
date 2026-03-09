import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Service from "../components/Service"
import Feature from "../components/Feature"
import Product from "../components/Product"
import Testimonial from "../components/Testimonial"
import Blog from "../components/Blog"
import Footer from "../components/Footer"

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Feature />
      <Product />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  )
}

export default Home