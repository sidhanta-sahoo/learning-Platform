<footer className="bg-gray-800 text-gray-400 py-6 mt-10">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
    {/* About */}
    <div>
      <h2 className="text-lg font-semibold text-white mb-2">About Us</h2>
      <p className="text-sm">
        Learn new skills online with our LMS platform. Explore programming,
        design, data science, and more.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/courses" className="hover:text-white">Courses</a></li>
        <li><a href="/login" className="hover:text-white">Login</a></li>
        <li><a href="/signup" className="hover:text-white">Signup</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
      <p className="text-sm">Email: support@mylms.com</p>
      <p className="text-sm">Phone: +91 7735123583</p>
    </div>
  </div>

  {/* Bottom copyright */}
  <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-700 pt-4">
    © {new Date().getFullYear()} My LMS. All rights reserved.
  </div>
</footer>
