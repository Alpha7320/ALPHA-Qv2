import React, { useState, useEffect } from 'react';
import { Heart, Share, Copy, Shuffle, BookOpen, Star, Search, Filter, Bookmark, Sparkles, Moon, Quote } from 'lucide-react';

const AliQuotesApp = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCopied, setShowCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const quotesDatabase = [
    {
      id: 1,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "motivation",
      rating: 4.8,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
      category: "innovation",
      rating: 4.9,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      text: "Life is what happens to you while you're busy making other plans.",
      author: "John Lennon",
      category: "life",
      rating: 4.7,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      category: "dreams",
      rating: 4.6,
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 5,
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
      category: "success",
      rating: 4.9,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      category: "motivation",
      rating: 4.5,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 7,
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
      category: "motivation",
      rating: 4.8,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      category: "wisdom",
      rating: 4.7,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const categories = [
    { value: 'all', label: 'All', icon: '✨' },
    { value: 'motivation', label: 'Motivation', icon: '🚀' },
    { value: 'success', label: 'Success', icon: '🏆' },
    { value: 'life', label: 'Life', icon: '🌱' },
    { value: 'dreams', label: 'Dreams', icon: '💫' },
    { value: 'innovation', label: 'Innovation', icon: '💡' },
    { value: 'wisdom', label: 'Wisdom', icon: '🧠' }
  ];

  useEffect(() => {
    setQuotes(quotesDatabase);
    setCurrentQuote(quotesDatabase[0]);
  }, []);

  const getRandomQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const toggleFavorite = (quoteId) => {
    setFavorites(prev => 
      prev.includes(quoteId) 
        ? prev.filter(id => id !== quoteId)
        : [...prev, quoteId]
    );
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(`"${text}" - ${currentQuote.author}`);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const shareQuote = () => {
    if (navigator.share) {
      navigator.share({
        title: 'ALI QUOTES',
        text: `"${currentQuote.text}" - ${currentQuote.author}`,
      });
    }
  };

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || quote.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const favoriteQuotes = quotes.filter(quote => favorites.includes(quote.id));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current drop-shadow-sm' : 'text-gray-500'}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 rotate-12 scale-150"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-900/20 via-transparent to-indigo-900/20 -rotate-12 scale-150"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black/90"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black/30 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="max-w-md mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Quote className="text-white" size={20} />
            </div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
              ALI QUOTES
            </h1>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Sparkles className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-md mx-auto pb-24">
        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="p-6 space-y-8">
            {currentQuote && (
              <div className={`relative transition-all duration-500 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
                {/* Quote Card */}
                <div className="relative group">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${currentQuote.color} rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`}></div>
                  <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8">
                      <div className={`w-8 h-8 bg-gradient-to-r ${currentQuote.color} rounded-xl flex items-center justify-center shadow-lg rotate-12`}>
                        <Quote className="text-white" size={16} />
                      </div>
                    </div>
                    
                    {/* Quote Text */}
                    <div className="text-center pt-4">
                      <blockquote className="text-xl font-medium leading-relaxed mb-8 text-gray-100 tracking-wide">
                        "{currentQuote.text}"
                      </blockquote>
                      
                      {/* Rating */}
                      <div className="flex items-center justify-center gap-2 mb-6">
                        {renderStars(currentQuote.rating)}
                        <span className="text-sm text-gray-300 ml-2 font-semibold">{currentQuote.rating}</span>
                      </div>
                      
                      {/* Author */}
                      <div className="space-y-3">
                        <cite className={`text-lg font-bold bg-gradient-to-r ${currentQuote.color} bg-clip-text text-transparent`}>
                          — {currentQuote.author}
                        </cite>
                        <div className="flex items-center justify-center">
                          <span className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentQuote.color} bg-opacity-20 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-2xl text-sm font-semibold text-white shadow-lg`}>
                            {categories.find(cat => cat.value === currentQuote.category)?.icon}
                            {currentQuote.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={getRandomQuote}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl py-4 px-6 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Shuffle size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                  <span className="font-bold text-lg">Random</span>
                </div>
              </button>
              
              <button
                onClick={() => toggleFavorite(currentQuote?.id)}
                className={`group relative overflow-hidden rounded-2xl py-4 px-6 transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  favorites.includes(currentQuote?.id)
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 shadow-red-500/25 hover:shadow-red-500/40'
                    : 'bg-gray-800/80 hover:bg-gray-700/80 shadow-gray-800/25 hover:shadow-gray-700/40 border border-white/10'
                }`}
              >
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Heart
                    size={20}
                    className={`transition-all duration-300 ${
                      favorites.includes(currentQuote?.id) 
                        ? 'fill-current group-hover:scale-125 text-white' 
                        : 'group-hover:scale-125 group-hover:text-red-400'
                    }`}
                  />
                  <span className="font-bold text-lg">
                    {favorites.includes(currentQuote?.id) ? 'Loved' : 'Love'}
                  </span>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => copyToClipboard(currentQuote?.text)}
                className="group relative overflow-hidden bg-gray-800/80 hover:bg-gray-700/80 rounded-2xl py-4 px-6 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-800/25 hover:shadow-gray-700/40 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Copy size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-bold text-lg">Copy</span>
                </div>
              </button>
              
              <button
                onClick={shareQuote}
                className="group relative overflow-hidden bg-gray-800/80 hover:bg-gray-700/80 rounded-2xl py-4 px-6 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-800/25 hover:shadow-gray-700/40 border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <Share size={20} className="group-hover:scale-125 transition-transform duration-300" />
                  <span className="font-bold text-lg">Share</span>
                </div>
              </button>
            </div>

            {/* Copy Notification */}
            {showCopied && (
              <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl z-50 animate-bounce border border-green-400/30">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Copy size={14} />
                  </div>
                  <span className="font-semibold">Quote copied!</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Browse Tab */}
        {activeTab === 'browse' && (
          <div className="p-6 space-y-6">
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-white transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Search quotes, authors, wisdom..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl pl-12 pr-4 py-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 font-medium"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-300">Categories</h3>
              <div className="grid grid-cols-2 gap-3">
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`group relative overflow-hidden rounded-xl py-3 px-4 transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.value
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25'
                        : 'bg-gray-800/50 border border-white/10 hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-semibold text-sm">{category.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quotes List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-300">
                {filteredQuotes.length} Quote{filteredQuotes.length !== 1 ? 's' : ''}
              </h3>
              {filteredQuotes.map(quote => (
                <div key={quote.id} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${quote.color} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300`}></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <blockquote className="text-gray-100 mb-4 leading-relaxed font-medium">
                      "{quote.text}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <cite className={`font-bold bg-gradient-to-r ${quote.color} bg-clip-text text-transparent`}>
                          — {quote.author}
                        </cite>
                        <div className="flex items-center gap-2">
                          {renderStars(quote.rating)}
                          <span className="text-sm text-gray-300 font-semibold">{quote.rating}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFavorite(quote.id)}
                        className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                          favorites.includes(quote.id)
                            ? 'text-red-400 bg-red-900/30 shadow-lg shadow-red-500/20'
                            : 'text-gray-400 hover:text-red-400 hover:bg-red-900/20'
                        }`}
                      >
                        <Heart size={18} className={favorites.includes(quote.id) ? 'fill-current' : ''} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredQuotes.length === 0 && (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl mx-auto flex items-center justify-center opacity-50">
                  <Search size={32} className="text-white" />
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 text-lg font-semibold">No quotes found</p>
                  <p className="text-gray-500">Try adjusting your search or category filter</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Your Favorites
              </h2>
              <p className="text-gray-400">
                {favoriteQuotes.length} quote{favoriteQuotes.length !== 1 ? 's' : ''} saved
              </p>
            </div>
            
            {favoriteQuotes.length > 0 ? (
              <div className="space-y-4">
                {favoriteQuotes.map((quote, index) => (
                  <div key={quote.id} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                      <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <Heart size={14} className="text-white fill-current" />
                        </div>
                      </div>
                      <blockquote className="text-gray-100 mb-4 leading-relaxed font-medium pr-12">
                        "{quote.text}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <cite className="text-red-400 font-bold">— {quote.author}</cite>
                          <div className="flex items-center gap-2">
                            {renderStars(quote.rating)}
                            <span className="text-sm text-gray-300 font-semibold">{quote.rating}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => toggleFavorite(quote.id)}
                          className="p-3 rounded-xl text-red-400 bg-red-900/30 hover:bg-red-900/50 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-red-500/20"
                        >
                          <Heart size={18} className="fill-current" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-pink-600 rounded-3xl mx-auto flex items-center justify-center opacity-50 animate-pulse">
                    <Heart size={40} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 text-xl font-bold">No favorites yet</p>
                  <p className="text-gray-500 max-w-xs mx-auto">
                    Start exploring quotes and tap the heart to save your favorites
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <div className="bg-black/60 backdrop-blur-2xl border-t border-white/10">
          <div className="max-w-md mx-auto px-6 py-4">
            <div className="flex justify-around">
              <button
                onClick={() => setActiveTab('home')}
                className={`group flex flex-col items-center gap-2 py-2 px-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'home'
                    ? 'text-white bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25 scale-105'
                    : 'text-gray-400 hover:text-gray-200 hover:scale-105'
                }`}
              >
                <BookOpen size={22} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="text-xs font-bold tracking-wide">HOME</span>
              </button>
              
              <button
                onClick={() => setActiveTab('browse')}
                className={`group flex flex-col items-center gap-2 py-2 px-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'browse'
                    ? 'text-white bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/25 scale-105'
                    : 'text-gray-400 hover:text-gray-200 hover:scale-105'
                }`}
              >
                <Search size={22} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="text-xs font-bold tracking-wide">BROWSE</span>
              </button>
              
              <button
                onClick={() => setActiveTab('favorites')}
                className={`group relative flex flex-col items-center gap-2 py-2 px-4 rounded-2xl transition-all duration-300 ${
                  activeTab === 'favorites'
                    ? 'text-white bg-gradient-to-br from-red-600 to-pink-600 shadow-lg shadow-red-500/25 scale-105'
                    : 'text-gray-400 hover:text-gray-200 hover:scale-105'
                }`}
              >
                <Heart size={22} className={`group-hover:scale-110 transition-transform duration-200 ${activeTab === 'favorites' ? 'fill-current' : ''}`} />
                <span className="text-xs font-bold tracking-wide">FAVORITES</span>
                {favorites.length > 0 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-black text-xs font-black rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    {favorites.length}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AliQuotesApp;
