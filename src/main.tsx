import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import './index.css'
import RestaurantList from './components/RestaurantList.tsx';
import { getRestaurantById, getRestaurants } from './api_helper.ts';
import { Map } from './components/Map.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import Hero from './views/Hero.tsx';
import RestaurantDetail from './components/RestaurantDetail.tsx';
import Bios from './views/Bio.tsx';
import { Form } from './components/Form.tsx';
import WhyTipFree from './components/WhyTipFree.tsx';
import { Confirmation } from './components/Confirmation.tsx';
import noahPic from './assets/img/noah.jpeg';
import kimPic from './assets/img/kim.jpeg';
import briPic from './assets/img/brianca.jpg';
import henryPic from './assets/img/henry.jpeg';

const navigation: NavigationDir[] = [
  {
    link: "/restaurants",
    label: "restaurant list"
  },
  {
    link: "/map",
    label: "restaurant map"
  },
  {
    link: "/why_tip_free",
    label: "why tip-free?"
  },
  {
    link: "/about_us",
    label: "about us"
  }
]

const bios: Bio[] = [
  {
    name: "Noah Kise",
    blurb: "Former bartender, current junior web developer living in Portland, Oregon. Most likely listening to loud guitar music.",
    imageUrl: noahPic,
    contribution: "Leaflet map, geocoding API implementation",
    buttonLink: "https://github.com/NoahKise",
    buttonText: "check out Noah's github"
  },
  {
    name: "Brianca Knight",
    blurb: "Passionate about design with a background in arts, marketing, and community engagement, I've spent the last 5 years crafting campaigns for small businesses, nonprofits, and artists.",
    imageUrl: briPic,
    contribution: "UI/UX Design",
    buttonLink: "https://github.com/BriancaKnight",
    buttonText: "check out Brianca's github"
  },
  {
    name: "Henry Oberholtzer",
    blurb: "Musician, programmer and designer and former barista. I'm passionate about promoting equitable wages for all workers, in all industries.",
    imageUrl: henryPic,
    contribution: "SQLite database, Flask Backend, React frontend",
    buttonLink: "https://github.com/henry-oberholtzer",
    buttonText: "check out Henry's github"
  },
  {
    name: "Kim Robinson",
    blurb: "Portland based full-stack software engineer, blending my background of natural sciences and the culinary world into a unique recipe for problem-solving in the tech space.",
    imageUrl: kimPic,
    contribution: "SQLite database, Flask Backend, React frontend",
    buttonLink: "https://github.com/kimmykokonut",
    buttonText: "check out Kim's github"
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Hero />
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "form",
        element: <Form />
      },
      {
        path: "confirmation",
        element: <Confirmation />
      },
      {
        path: "restaurants",
        element: <RestaurantList />,
        loader: () => {
          return getRestaurants();
        },
      },
      {
        path: "restaurants/:id",
        loader: ({ params }) => {
          if (params.id) {
            return getRestaurantById(parseInt(params.id));
          } else {
            return redirect("/restaurants")
          }
        },
        element: <RestaurantDetail />,
        errorElement: <ErrorPage />
      },
      {
        path: "/about_us",
        element: <Bios />,
        loader: () => {
          return bios
        }
      },
      {
        path: "why_tip_free",
        element: <WhyTipFree />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

export { navigation }
