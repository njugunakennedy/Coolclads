import FAQ from '../components/FAQ'
import { Users, Award, Heart, Globe } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">CoolClads</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Your premier destination for premium fashion and footwear, 
              where style meets quality in every piece we offer.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, CoolClads emerged from a simple vision: to make premium fashion 
                  accessible to everyone. What started as a small online boutique has grown into 
                  a trusted destination for quality clothing and footwear.
                </p>
                <p>
                  We believe that great style shouldn't come with a compromise on quality or comfort. 
                  That's why we carefully curate our collection, working directly with manufacturers 
                  to ensure every product meets our high standards.
                </p>
                <p>
                  Today, we serve customers worldwide, offering everything from casual everyday wear 
                  to sophisticated formal attire. Our commitment to customer satisfaction and 
                  sustainable fashion practices continues to drive us forward.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">C</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">CoolClads</h3>
                  <p className="text-primary-700">Since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully selected and tested 
                to ensure it meets our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We're committed to 
                providing exceptional service and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainable fashion practices and work with partners 
                who share our environmental values.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                We serve customers worldwide, bringing premium fashion to every corner 
                of the globe with fast, reliable shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind CoolClads
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-800 text-4xl font-bold">SM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Mitchell</h3>
              <p className="text-primary-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600">
                Fashion industry veteran with 15+ years of experience in retail and e-commerce.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-800 text-4xl font-bold">DJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Johnson</h3>
              <p className="text-primary-600 font-medium mb-2">Head of Operations</p>
              <p className="text-gray-600">
                Expert in supply chain management and ensuring quality across all our products.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-800 text-4xl font-bold">EC</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily Chen</h3>
              <p className="text-primary-600 font-medium mb-2">Customer Experience Lead</p>
              <p className="text-gray-600">
                Dedicated to creating exceptional customer experiences and building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>
    </div>
  )
}

export default About
