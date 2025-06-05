import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  LogOut, 
  Bell, 
  Clock, 
  Heart, 
  BarChart3,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import RecommendationGrid from '../components/recommendation/RecommendationGrid';
import { mockUser, getFavoriteRecommendations } from '../utils/data';
import Toggle from '../components/ui/Toggle';

const Profile: React.FC = () => {
  const favoriteRecommendations = getFavoriteRecommendations().slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Your Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account and preferences
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card padding="lg" className="sticky top-24">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img 
                  src={mockUser.avatar} 
                  alt={mockUser.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {mockUser.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {mockUser.email}
              </p>
            </div>
            
            <nav className="space-y-1">
              <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                <User size={18} className="mr-3" />
                Profile
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Settings size={18} className="mr-3" />
                Settings
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Bell size={18} className="mr-3" />
                Notifications
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Clock size={18} className="mr-3" />
                Activity
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Heart size={18} className="mr-3" />
                Favorites
              </button>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Button 
                variant="outline" 
                fullWidth 
                icon={<LogOut size={18} />}
              >
                Sign Out
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile information */}
          <Card padding="lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Profile Information</h3>
              <Button variant="outline" size="sm">
                Edit Profile
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Full Name
                </label>
                <p className="text-gray-900 dark:text-white">
                  {mockUser.name}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Email Address
                </label>
                <p className="text-gray-900 dark:text-white">
                  {mockUser.email}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Member Since
                </label>
                <p className="text-gray-900 dark:text-white">
                  July 2022
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  Location
                </label>
                <p className="text-gray-900 dark:text-white">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </Card>
          
          {/* Preferences */}
          <Card padding="lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Preferences</h3>
              <Button variant="outline" size="sm">
                Edit Preferences
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive emails about new recommendations
                  </p>
                </div>
                <Toggle checked={true} onChange={() => {}} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Weekly Digest</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get a weekly summary of new recommendations
                  </p>
                </div>
                <Toggle checked={false} onChange={() => {}} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Recommendation Alerts</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get notified when new recommendations match your interests
                  </p>
                </div>
                <Toggle checked={true} onChange={() => {}} />
              </div>
            </div>
          </Card>
          
          {/* Interests */}
          <Card padding="lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Your Interests</h3>
              <Button variant="outline" size="sm">
                Manage Interests
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {mockUser.preferences.map((pref) => (
                <span 
                  key={pref}
                  className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 rounded-full text-sm"
                >
                  {pref}
                </span>
              ))}
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-3">Based on Your Interests</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center">
                  <BarChart3 className="h-6 w-6 mx-auto mb-2 text-primary-600 dark:text-primary-400" />
                  <h5 className="font-medium">42</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Recommendations</p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center">
                  <Heart className="h-6 w-6 mx-auto mb-2 text-red-500" />
                  <h5 className="font-medium">12</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Favorites</p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center">
                  <Bell className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                  <h5 className="font-medium">8</h5>
                  <p className="text-xs text-gray-500 dark:text-gray-400">New This Week</p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Recent favorites */}
          <Card padding="lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Recent Favorites</h3>
              <Button 
                variant="outline" 
                size="sm"
                icon={<Heart size={16} />}
              >
                View All
              </Button>
            </div>
            
            <RecommendationGrid 
              recommendations={favoriteRecommendations} 
              columns={3}
              compact
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;