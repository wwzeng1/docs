export default function BlogCard({ title, description, date, author, slug }) {
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <a
      href={`/posts/${slug}`}
      style={{
        display: 'flex',
        gap: '2rem',
        padding: '1.5rem 0',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.2s ease',

      }}
      className="blog-card"
    >
      <div style={{
        minWidth: '60px',
        fontSize: '0.875rem',
        color: '#aaa',
        fontWeight: '500'
      }}>
        {formatDate(date)}
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{
          margin: '0 0 0.5rem 0',
          fontSize: '1.125rem',
          fontWeight: '600',
          lineHeight: '1.4'
        }}>
          {title}
        </h3>

        <p style={{
          margin: '0',
          color: '#aaa',
          fontSize: '0.875rem',
          lineHeight: '1.4'
        }}>
          {author}
        </p>
      </div>
    </a>
  );
}