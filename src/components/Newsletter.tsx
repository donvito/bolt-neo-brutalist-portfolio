import React, { useState } from 'react';
import { Mail } from 'lucide-react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setIsSubmitted(true);
    setError('');
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="newsletter" className="p-4 mb-16 bg-yellow-400 border-y-4 border-black">
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex items-center gap-2 mb-8 reveal">
          <div className="w-8 h-8 bg-black flex items-center justify-center animate-bounce-slow">
            <Mail size={18} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold">NEWSLETTER</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="reveal">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6">
              Subscribe to my newsletter to receive updates on new projects,
              coding tips, and exclusive content straight to your inbox.
            </p>
            <div className="border-4 border-black p-6 bg-white hover:bg-pink-200 transition-colors duration-300">
              <h4 className="font-bold text-lg mb-2">What You'll Get</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Monthly project updates</li>
                <li>Coding tutorials and tips</li>
                <li>Design resources and tools</li>
                <li>Early access to new content</li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] reveal hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="mb-4">
              <label className="block mb-2 font-bold">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 hover:border-black"
              />
              {error && <p className="text-red-500 mt-2 font-bold">{error}</p>}
            </div>
            <button type="submit" className="w-full py-3 px-6 bg-black text-white font-bold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 hover:scale-[1.02] transform">
              SUBSCRIBE NOW
            </button>
            {isSubmitted && (
              <div className="mt-4 p-3 border-2 border-black bg-lime-200">
                <p className="font-bold">Thanks for subscribing! 🎉</p>
                <p>Check your inbox to confirm your subscription.</p>
              </div>
            )}
            <p className="mt-4 text-sm text-gray-600">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;