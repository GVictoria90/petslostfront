export const basePathName = '/'

export const routes = {
  root: { url: basePathName },
  home: {
    url: '/inicio',
    public: true
  },
  contact: {
    url: '/contacto',
    public: true
  },
  login: {
    url: '/login',
    public: true
  },
  logout: {
    url: '/logout',
    public: false
  },
  nuevamascota: {
    url: '/nuevamascota',
    public: false
  },
  nuevaraza: {
    url: '/nuevaraza',
    public: false
  },
  nuevopost: {
    url: '/nuevopost',
    public: false
  },
  pets: {
    url: '/mascotas',
    public: true
  },
  registration: {
    url: '/registro',
    public: true
  },
  about: {
    url: '/nosotros',
    public: true
  },
  profile: {
    url: '/perfil',
    public: false
  }
}

export const Especies = ['Gato', 'Perro', 'Ave', 'Reptil']

export const TypePost = [
  'Busco mascota perdida',
  'Ofrezco mascota en adopcion',
  'Quiero adoptar mascota',
  'Encontré mascota perdida'
]

export enum PostTypeEnum {
  BUSCO_MASCOTA = 'Busco mascota perdida',
  OFREZCO_ADOPCION = 'Ofrezco mascota en adopcion',
  QUIERO_ADOPTAR = 'Quiero adoptar mascota',
  ENCONTRE_MASCOTA = 'Encontré mascota perdida'
}
