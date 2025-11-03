import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-light-bg dark:bg-gradient-cosmic flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-2xl p-8 md:p-12 max-w-md text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-light-text dark:text-white mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-light-subtext dark:text-gray-300 mb-6">
              We encountered an unexpected error. Don't worry, we're on it!
            </p>
            
            <motion.button
              onClick={this.handleReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-purple text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 mx-auto hover:shadow-lg transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Reload Page</span>
            </motion.button>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
