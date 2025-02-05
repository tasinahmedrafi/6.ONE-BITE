import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Clock, Star, ChefHat, UtensilsCrossed } from 'lucide-react';

const menuItems = [
  {
    name: "Signature Steak",
    description: "Premium cut steak grilled to perfection with herb butter",
    price: "$32",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Main Course"
  },
  {
    name: "Fresh Seafood Platter",
    description: "Daily selection of fresh seafood with lemon butter sauce",
    price: "$45",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Seafood"
  },
  {
    name: "Truffle Pasta",
    description: "Handmade pasta with black truffle and parmesan",
    price: "$28",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Pasta"
  },
  {
    name: "Organic Salad",
    description: "Fresh seasonal greens with house vinaigrette",
    price: "$16",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Starters"
  },
  {
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla ice cream",
    price: "$14",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Desserts"
  },
  {
    name: "Wine Selection",
    description: "Curated selection of premium wines",
    price: "Various",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Drinks"
  }
];

const reviews = [
  {
    name: "Michael Anderson",
    rating: 5,
    comment: "An exceptional dining experience. The attention to detail in every dish is remarkable.",
    date: "2 days ago"
  },
  {
    name: "Sophie Laurent",
    rating: 5,
    comment: "The ambiance and service are as outstanding as the food. A true fine dining gem.",
    date: "1 week ago"
  },
  {
    name: "James Wilson",
    rating: 5,
    comment: "The wine pairing suggestions were perfect. Will definitely return for more.",
    date: "2 weeks ago"
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <UtensilsCrossed className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">ONE BITE</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-amber-600 transition-colors">Home</a>
              <a href="#menu" className="text-gray-900 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#about" className="text-gray-900 hover:text-amber-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-900 hover:text-amber-600 transition-colors">Contact</a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
                Reserve Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 hover:text-amber-600 transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Home</a>
              <a href="#menu" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Menu</a>
              <a href="#about" className="block px-3 py-2 text-gray-900 hover:text-amber-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-900 hover:text-amber-600">Contact</a>
              <button className="w-full text-left px-3 py-2 text-amber-600 hover:text-amber-700">
                Reserve Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
            alt="Fine Dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience Fine Dining<br />at Its Finest
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Indulge in an extraordinary culinary journey with our carefully crafted menu
              and exceptional service.
            </p>
            <div className="space-x-4">
              <a
                href="#menu"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
              >
                View Menu
              </a>
              <a
                href="#contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
              >
                Make Reservation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <ChefHat className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
              <p className="text-gray-600">
                Our master chefs create extraordinary culinary experiences.
              </p>
            </div>
            <div className="text-center p-6">
              <UtensilsCrossed className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Ingredients</h3>
              <p className="text-gray-600">
                We source only the finest ingredients for our dishes.
              </p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Elegant Atmosphere</h3>
              <p className="text-gray-600">
                Enjoy your meal in our sophisticated dining space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated menu featuring exceptional dishes
              prepared with the finest ingredients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-amber-600 font-semibold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our valued guests have to say about their dining experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.comment}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                ONE-BITE represents the pinnacle of fine dining, where culinary artistry
                meets exceptional service. Our commitment to excellence has made us a
                destination for those seeking extraordinary dining experiences.
              </p>
              <p className="text-gray-600 mb-8">
                Each dish is thoughtfully crafted by our expert chefs, combining
                traditional techniques with innovative approaches to create
                unforgettable culinary moments.
              </p>
              <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Reservations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make a reservation or contact us for special events and private dining.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Luxury Avenue<br />DHAKA, NY 10001</p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reservations</h3>
              <p className="text-gray-600">+(880) 123-45678</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">reservations@onebite.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <UtensilsCrossed className="h-8 w-8 text-amber-600" />
                <span className="ml-2 text-2xl font-bold">ONE BITE</span>
              </div>
              <p className="text-gray-400">
                Experience the art of fine dining in an elegant atmosphere.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#menu" className="text-gray-400 hover:text-white">Menu</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Dinner: 5:30pm - 10:30pm</li>
                <li>Tuesday - Sunday</li>
                <li>Closed Mondays</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} AQUAPURE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
