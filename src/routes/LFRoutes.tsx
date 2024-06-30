import { Layout } from '../components/components'
import { basePathName, routes } from '../constants'
import { Perfil } from '../pages/Perfil'
import {
  Contacto,
  CrearMascota,
  CrearRaza,
  Inicio,
  Login,
  Mascotas,
  Nosotros,
  NuevoPost,
  Registro
} from '../pages/pages'
import { RoutesType } from '../types/MascotasTypes'

const LFRoutes: RoutesType[] = [
  {
    element: (
      <Layout>
        <Inicio />
      </Layout>
    ),
    path: basePathName,
    key: routes.home.url,
    public: routes.home.public
  },
  {
    element: (
      <Layout>
        <Inicio />
      </Layout>
    ),
    path: routes.home.url,
    key: routes.home.url,
    public: routes.home.public
  },
  {
    element: (
      <Layout>
        <Contacto />
      </Layout>
    ),
    path: routes.contact.url,
    key: routes.contact.url,
    public: routes.contact.public
  },
  {
    element: (
      <Layout>
        <Mascotas />
      </Layout>
    ),
    path: routes.pets.url,
    key: routes.pets.url,
    public: routes.pets.public
  },
  {
    element: (
      <Layout>
        <CrearMascota />
      </Layout>
    ),
    path: routes.nuevamascota.url,
    key: routes.nuevamascota.url,
    public: routes.nuevamascota.public
  },
  {
    element: (
      <Layout>
        <CrearRaza />
      </Layout>
    ),
    path: routes.nuevaraza.url,
    key: routes.nuevaraza.url,
    public: routes.nuevaraza.public
  },
  {
    element: (
      <Layout>
        <NuevoPost />
      </Layout>
    ),
    path: routes.nuevopost.url,
    key: routes.nuevopost.url,
    public: routes.nuevopost.public
  },
  {
    element: (
      <Layout>
        <Nosotros />
      </Layout>
    ),
    path: routes.about.url,
    key: routes.about.url,
    public: routes.about.public
  },
  {
    element: (
      <Layout>
        <Registro />
      </Layout>
    ),
    path: routes.registration.url,
    key: routes.registration.url,
    public: routes.registration.public
  },
  {
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
    path: routes.login.url,
    key: routes.login.url,
    public: routes.login.public
  },
  {
    element: (
      <Layout>
        <Perfil />
      </Layout>
    ),
    path: routes.profile.url,
    key: routes.profile.url,
    public: routes.profile.public
  }
]

export default LFRoutes
