#!/bin/bash

echo "🚀 Blue Sky Website Setup"
echo "========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎨 Next Steps:"
echo "1. Add your images to the public/assets/ folder"
echo "   (See ASSETS.md for the complete list)"
echo ""
echo "2. Run the development server:"
echo "   npm run dev"
echo ""
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "📚 Documentation:"
echo "   - QUICKSTART.md - Fast 5-minute setup"
echo "   - README.md - Complete documentation"
echo "   - ASSETS.md - Image requirements"
echo "   - PROJECT_SUMMARY.md - Overview of changes"
echo ""
echo "✨ Happy building!"
