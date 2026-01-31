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

// Utilidad para formatear la fecha y hora
export function formatDateTime(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const formattedDate = date.toLocaleDateString('es-AR', options);
  const formattedTime = date.toLocaleTimeString('es-AR', timeOptions);
  return { formattedDate, formattedTime };
}
