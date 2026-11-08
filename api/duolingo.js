// Función de Vercel: lee tu perfil público de Duolingo desde el servidor
// (el navegador no puede hacerlo directo por CORS) y responde solo lo necesario.
const USUARIO = 'ph.uhK3hY'; // tu usuario de Duolingo, sin la @
const IDIOMA = 'en'; // código del curso que quieres mostrar

export default async function handler(req, res) {
  try {
    const url =
      `https://www.duolingo.com/2017-06-30/users?username=${encodeURIComponent(USUARIO)}` +
      '&fields=streak,totalXp,courses,streakData';

    const respuesta = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PortafolioBot/1.0)',
        Accept: 'application/json'
      }
    });
    if (!respuesta.ok) throw new Error(`Duolingo respondió ${respuesta.status}`);

    const datos = await respuesta.json();
    const usuario = datos?.users?.[0];
    if (!usuario) throw new Error('Usuario no encontrado');

    const curso = (usuario.courses || []).find((c) => c.learningLanguage === IDIOMA);

    // Se guarda 10 min en la caché de Vercel para no consultar Duolingo en cada visita
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=86400');
    res.status(200).json({
      racha: usuario.streak ?? usuario.streakData?.currentStreak?.length ?? 0,
      xpTotal: usuario.totalXp ?? 0,
      cursoXp: curso?.xp ?? null
    });
  } catch (error) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(502).json({ error: true });
  }
}