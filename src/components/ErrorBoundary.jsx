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
        <div className="min-h-screen bg-sand dark:bg-obsidian text-sand-charcoal dark:text-white flex items-center justify-center px-4 transition-colors duration-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 dark:bg-titanium-900/90 border border-sand-border dark:border-white/10 rounded-2xl p-8 md:p-12 max-w-md text-center shadow-xl backdrop-blur-xl"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="w-20 h-20 bg-citron/15 border border-citron/30 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-citron" />
            </motion.div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-sand-charcoal dark:text-white mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-sand-charcoal/80 dark:text-titanium-300 mb-6">
              We encountered an unexpected error. Don't worry, we're on it!
            </p>
            
            <motion.button
              type="button"
              onClick={this.handleReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-citron hover:bg-citron-hover text-obsidian px-6 py-3 rounded-full font-bold flex items-center space-x-2 mx-auto shadow-lg hover:shadow-citron/25 transition-all duration-300"
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
