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
  eventDate: "2026-04-02T21:00:00-03:00" 
};

export const eventInfoConfig = {
  sectionTitle: "¿CUÁNDO?"
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
  noteLine2: "PARA LA QUINCEAÑERA",
  icon: "/src/assets/dress-code.gif"
};

export function formatDateTime(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const formattedDate = date.toLocaleDateString('es-AR', options);
  const formattedTime = date.toLocaleTimeString('es-AR', timeOptions);
  return { formattedDate, formattedTime };
}
