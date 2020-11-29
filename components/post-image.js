import Link from 'next/link'

export default function PostImage({url}) {
  return (
    <div className="container myclass">
        <img src={url} alt="" />
    </div>
  )
}
