import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Award, Truck, Shield, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          About StoreFront
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're more than just an e-commerce store. We're your trusted partner in discovering 
          quality products that enhance your lifestyle, backed by exceptional service and 
          unbeatable value.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
          <div className="text-gray-600">Happy Customers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
          <div className="text-gray-600">Quality Products</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
          <div className="text-gray-600">Satisfaction Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
          <div className="text-gray-600">Customer Support</div>
        </div>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Founded in 2020, StoreFront began with a simple mission: to make quality 
              products accessible to everyone, everywhere. What started as a small team's 
              vision has grown into a trusted marketplace serving thousands of customers worldwide.
            </p>
            <p>
              We believe that shopping should be an experience, not just a transaction. 
              That's why we carefully curate every product in our catalog, ensuring that 
              each item meets our high standards for quality, value, and innovation.
            </p>
            <p>
              Today, we're proud to be a leading e-commerce destination, but we're just 
              getting started. Our commitment to excellence drives us to continuously 
              improve and expand our offerings.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
            alt="Our team"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop"
              alt="Office space"
              className="w-full h-32 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop"
              alt="Product quality"
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Core Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm">
                We never compromise on quality. Every product is carefully selected and tested.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                Your satisfaction is our priority. We listen, we care, and we deliver.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust & Security</h3>
              <p className="text-gray-600 text-sm">
                Your privacy and security are paramount. Shop with confidence.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Quick and reliable shipping to get your products to you fast.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 -mx-4 px-4 py-16 mb-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Absolutely love shopping here! The quality is amazing and delivery is always fast."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b619?w=40&h=40&fit=crop&crop=face"
                    alt="Customer"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Verified Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Great customer service and the return policy is very fair. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                    alt="Customer"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Mike Chen</div>
                    <div className="text-sm text-gray-600">Verified Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Best online shopping experience I've had. Products exactly as described!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                    alt="Customer"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Emily Davis</div>
                    <div className="text-sm text-gray-600">Verified Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Experience StoreFront?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of satisfied customers and discover amazing products today.
        </p>
        <div className="space-x-4">
          <Button size="lg">
            Start Shopping
          </Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}