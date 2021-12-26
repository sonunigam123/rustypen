import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <h1 className="text-xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
        {title}
      </h1>
      <div className="mb-8 text-sm">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-8">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div>
    </>
  )
}
