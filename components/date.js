import { format } from 'date-fns'

export default function DateComponent({ dateString }) {

  console.log(dateString);

  return (
    <time dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
