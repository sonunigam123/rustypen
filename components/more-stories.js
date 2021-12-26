import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="max-w-2xl mx-auto">
      <div className="mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
