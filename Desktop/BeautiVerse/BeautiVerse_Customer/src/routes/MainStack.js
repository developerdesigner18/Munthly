import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import LoginScreen from '../screens/SplashScreen/AuthScreens/LoginScreen';
import RegistrationScreen from '../screens/SplashScreen/AuthScreens/RegistrationScreen';
import ForgotPass from '../screens/SplashScreen/AuthScreens/ForgotPass';
import ResetPass from '../screens/SplashScreen/AuthScreens/ResetPass';
import AddProfile from '../screens/SplashScreen/AuthScreens/AddProfile';
import HomeSplashScreen from '../screens/HomeScreens/HomeSplashScreen';
import BottomTabs from '../screens/HomeScreens/BottomTabs';
import HomeScreen from '../screens/HomeScreens/HomeScreen';
import AllCategories from '../screens/HomeScreens/AllCategories';
import ActivePromotions from '../screens/HomeScreens/ActivePromotions';
import Timepass from '../screens/HomeScreens/ActivePromotions';
import TopBusinesses from '../screens/HomeScreens/Topbusinesses';
import AddMethod from '../screens/SplashScreen/AuthScreens/OnboardingPayment/AddMethod';
import AddDebit from '../screens/SplashScreen/AuthScreens/OnboardingPayment/AddDebit';
import MainSearch from '../screens/SearchScreens/MainSearch';
import BusinessPage from '../screens/BusinessPage/BusinessPage';
import HairProf from '../screens/BusinessPage/Categories/HairProf';
import SeePhotos from '../screens/BusinessPage/SeePhotos';
import Reviews from '../screens/BusinessPage/Reviews';
import BookService from '../screens/BusinessPage/BookService';
import AddAddress from '../screens/BusinessPage/AddAddress';
import InsertAdd from '../screens/BusinessPage/InsertAdd';
import ConfirmBooking from '../screens/BusinessPage/ConfirmBooking';
import Checkout from '../screens/BusinessPage/Checkout';
import OrdersHome from '../screens/OrdersPage/OdrdersHome';

const Stack = createNativeStackNavigator();

function MainStack() {
  const screens = [
    
    {
      name: 'OrdersHome',
      component: OrdersHome,
    },
    {
      name: 'SplashScreen',
      component: SplashScreen,
    },
    {
      name: 'ConfirmBooking',
      component: ConfirmBooking,
    },
    {
      name: 'Checkout',
      component: Checkout,
    },

    {
      name: 'AddAddress',
      component: AddAddress,
    },

    {
      name: 'InsertAdd',
      component: InsertAdd,
    },
    {
      name: 'BookService',
      component: BookService,
    },
    {
      name: 'BusinessPage',
      component: BusinessPage,
    },
    {
      name: 'SeePhotos',
      component: SeePhotos,
    },

    {
      name: 'Reviews',
      component: Reviews,
    },

    {
      name: 'BottomTabs',
      component: BottomTabs,
    },

    {
      name: 'HairProf',
      component: HairProf,
    },

    {
      name: 'MainSearch',
      component: MainSearch,
    },
    {
      name: 'AddDebit',
      component: AddDebit,
    },

    {
      name: 'AddMethod',
      component: AddMethod,
    },
    {
      name: 'TopBusinesses',
      component: TopBusinesses,
    },

    {
      name: 'ActivePromotions',
      component: ActivePromotions,
    },

    {
      name: 'AllCategories',
      component: AllCategories,
    },
    {
      name: 'HomeScreen',
      component: HomeScreen,
    },

    {
      name: 'HomeSplashScreen',
      component: HomeSplashScreen,
    },

    {
      name: 'AddProfile',
      component: AddProfile,
    },

    {
      name: 'ResetPass',
      component: ResetPass,
    },
    {
      name: 'ForgotPass',
      component: ForgotPass,
    },
    {
      name: 'LoginScreen',
      component: LoginScreen,
    },
    {
      name: 'RegistrationScreen',
      component: RegistrationScreen,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {screens.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
