export const landingConfig = {
  title: "MIS 15 MARTINA",
  subtitle: "QUIERO QUE SEAS PARTE DE ESTE MOMENTO TAN IMPORTANTE PARA MÍ",
  buttonText: "INGRESAR"
};

export const COLORS = {
  primary: '#1114c5',
  secondary: '#6a7cff',
  background: '#fff',
  buttonText: '#fff',
  white: '#fff',
};

export const heroConfig = {
  hero: {
    title: "MIS 15",
    name: "Martina",
    subtitle: "¡Te espero para celebrar juntos!"
  },
  eventDate: "2026-04-02T21:00:00-03:00",
  image: "/assets/hero.jpeg"
};

export const eventInfoConfig = {
  sectionTitle: "¿CUÁNDO?",
  icon: "/assets/calendar.gif"
};

export const locationConfig = {
  venueName: "QUINTA PINO AZUL",
  venueAddress: "Av. Siempre Viva 1234, Buenos Aires",
  mapsUrl: "https://www.google.com/maps/place/La+Ni%C3%B1a+1015-1150,+B1663ANW+San+Miguel,+Provincia+de+Buenos+Aires/@-34.5798785,-58.7428834,812m/data=!3m1!1e3!4m6!3m5!1s0x95bc9621f4719e89:0xb24919e94c9db890!8m2!3d-34.5798785!4d-58.7428834!16s%2Fg%2F11rp49m6j9?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D",
  ctaText: "CÓMO LLEGAR",
  sectionTitle: "¿DÓNDE?"
};

export const dressCodeConfig = {
  title: "DRESS CODE",
  dressType: "ELEGANTE",
  noteLine1: "El color AZUL se reserva",
  noteLine2: "Y NO PODRÁ UTILIZARSE",
  icon: "/assets/dress-code.gif"
};

export const galleryConfig1 = {
  images: [
    "/assets/carrousel1.jpeg",
    "/assets/carrousel2.jpeg",
    "/assets/carrousel3.jpeg",
    "/assets/carrousel4.jpeg",
  ],
  autoplayDelay: 4000,
  caption: "HAY MOMENTOS QUE NO SE PUEDEN BORRAR, PERSONAS QUE NO SE PUEDEN OLVIDAR Y RECUERDOS COMO ESTOS QUE SIEMPRE VOY A ATESORAR"
};

export const galleryConfig2 = {
  images: [
    "/assets/carrousel5.jpeg",
    "/assets/carrousel6.jpeg",
    "/assets/carrousel7.jpeg",
    "/assets/carrousel8.jpeg",
  ],
  autoplayDelay: 4000,
  caption: "NUEVOS RECUERDOS, NUEVAS AVENTURAS Y MOMENTOS QUE QUEDARÁN PARA SIEMPRE EN MI CORAZÓN"
};

export const giftConfig = {
  title: "REGALO",
  description: "NADA ES MÁS IMPORTANTE QUE TU PRESENCIA, PERO SI DESEAS HACERME UN REGALO SERÁ RECIBIDO CON MUCHO AMOR, TAMBIÉN PODÉS HACERLO EN LA SIGUIENTE CUENTA",
  buttonText: "VER CUENTA",
  icon: "/assets/gift.gif",
  account: {  
    holder: "Martina Duarte",
    alias: "mmartinaduarte",  
    cvu: "0000003100075549331218"
  },
  aliasLabel: "Alias",
  cvuLabel: "CVU"
};

export const rsvpConfig = {
  icon: "/assets/attendance.gif",
  title: "Confirmar asistencia",
  description: "ANTES DEL 20 DE MARZO",
  buttonText: "voy a asistir",
  phone: "+5491128637307",
  message: "¡Hola! Confirmo mi asistencia a los 15!",
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeYfzevL2MuMluzzh7P7H9SOydGw0Q8L6gMc9rh9Ehwfcy95A/viewform?usp=publish-editor"
};

export const songConfig = {
  title: "Sugerí una canción",
  description: "Ayudame a armar la lista de reproducción de la fiesta.",
  placeholder: "Escribí tu canción favorita",
  buttonText: "SUGERIR",
  whatsappNumber: "+5491128637307",
  messagePrefix: "Hola! Quiero sugerir esta cancion para la fiesta: "
};

export const musicConfig = {
  song: "/assets/song.mp3"
};

export const closingConfig = {
  image: "/assets/static.jpeg",
  text: "TE ESPERO",
  name: "Martina",
};

export const footerConfig = {
  byText: "Sitio web creado por",
  name: "Tobías Santellán",
  linkedin: "https://www.linkedin.com/in/tobias-s98/",
  whatsapp: "https://wa.me/5491123895762"
};

export function formatDateTime(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const formattedDate = date.toLocaleDateString('es-AR', options);
  const formattedTime = date.toLocaleTimeString('es-AR', timeOptions);
  return { formattedDate, formattedTime };
}
