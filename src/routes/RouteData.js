import Home from "../pages/Home"
import LogoutPage from "../pages/Login/Logout"
import Price from "../pages/Pirce/Price"
import Region from "../pages/Region"
import Station from "../pages/Station/Station"
import Township from "../pages/Twonship/Township"

const RouteData = [

    {
        path: '',
        element: <Home />
    },
    {
        path: 'region',
        element: <Region />
    },
    {
        path: 'township',
        element: <Township />
    },
    {
        path: 'station',
        element: <Station />
    },
    {
        path: 'Price',
        element: <Price />
    },
    {
        path: 'Logout',
        element: <LogoutPage />
    }
]

const navData = [
    {
        link: '/',
        navigation: 'Home'
    },
    {
        link: '/region',
        navigation: 'Region'
    },
    {
        link: '/township',
        navigation: 'Township'
    },
    {
        link: 'station',
        navigation: 'Station'
    },
    {
        link: 'price',
        navigation: 'Price'
    },
    {
        link: 'logout',
        navigation: 'LogoutPage'
    }
]


export { RouteData, navData}