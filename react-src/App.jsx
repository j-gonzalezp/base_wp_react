// En react-src/App.jsx
import React, { useState, useEffect } from 'react';

// Función auxiliar para decodificar entidades HTML (opcional pero útil)
// function decodeHtmlEntities(text) {
//   const textarea = document.createElement('textarea');
//   textarea.innerHTML = text;
//   return textarea.value;
// }

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Acceder a los datos pasados desde PHP (si existen)
  const apiBaseUrl = window.wpData?.apiRoot ?? '/wp-json/'; // Usa el dato localizado o un fallback razonable
  // const siteUrl = window.wpData?.siteUrl ?? ''; // También podrías necesitar esto

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      setError(null);

      // Comprueba si tenemos una URL base válida
      if (!apiBaseUrl) {
         setError("Error de configuración: No se encontró la URL de la API de WordPress.");
         setIsLoading(false);
         return; // Salir si no hay URL base
      }

      // Construir la URL completa de la API
      const apiUrl = `${apiBaseUrl}wp/v2/posts?_embed`; // Usamos la URL base dinámica

      try {
        console.log(`Fetching posts from: ${apiUrl}`); // Log para depuración
        const response = await fetch(apiUrl);

        if (!response.ok) {
          // Intenta obtener más detalles del error si es posible
          let errorDetails = `HTTP error! status: ${response.status}`;
          try {
              const errorData = await response.json();
              if (errorData.message) {
                  errorDetails += ` - ${errorData.message}`;
              }
          } catch (jsonError) {
              // No se pudo parsear el cuerpo del error como JSON
          }
          throw new Error(errorDetails);
        }

        const data = await response.json();
        setPosts(data);
      } catch (e) {
        console.error("Error fetching posts:", e);
        setError(`No se pudieron cargar los posts. ${e.message}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [apiBaseUrl]); // Volver a ejecutar si apiBaseUrl cambia (aunque no debería en este caso)

  // --- Renderizado ---

  if (isLoading) {
    return <div className="loading-message">Cargando posts...</div>; // Añadir una clase para estilos
  }

  if (error) {
    // Darle un estilo más visible al error
    return <div className="error-message" style={{ color: 'red', border: '1px solid red', padding: '10px' }}>{error}</div>;
  }

  if (posts.length === 0) {
    return <div className="no-posts-message">No se encontraron posts.</div>; // Añadir clase
  }

  return (
    // Es buena práctica usar clases CSS en lugar de estilos inline
    <div className="posts-list-container">
      <h1>Últimos Posts</h1>
      {posts.map(post => (
        <article key={post.id} className="post-item">
          <h2 className="post-title">
            {/* Usar dangerouslySetInnerHTML es necesario para el HTML renderizado */}
            {/* Considera sanitizar si el contenido pudiera venir de fuentes no confiables */}
            <a href={post.link} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {/* Alternativa (si solo quieres texto plano sin decodificar entidades manualmente):
                <a href={post.link}>{decodeHtmlEntities(post.title.rendered)}</a>
            */}
          </h2>

          {/* Imagen destacada */}
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
             <img
                className="post-featured-image"
                src={post._embedded['wp:featuredmedia'][0].media_details?.sizes?.medium?.source_url || post._embedded['wp:featuredmedia'][0].source_url}
                alt={post._embedded['wp:featuredmedia'][0].alt_text || 'Imagen destacada'} // Añadir fallback para alt
                // style={{ maxWidth: '100%', height: 'auto' }} // Mover a CSS si es posible
             />
          )}

          {/* Extracto */}
          <div
            className="post-excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <a href={post.link} className="read-more-link">Leer más...</a>
        </article>
      ))}
    </div>
  );
}

export default App;