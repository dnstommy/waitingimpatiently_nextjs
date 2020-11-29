import DateComponent from '../components/date'

export default function PostInfo({date}) {

	console.log(date);

  return (
    <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-10 offset-md-1">
						<h2 className="something__three font-weight-normal">Post title</h2>
						<ul className="list-inline-dash">
							<li><a href="#">by Admin</a></li>
							<li><a href="#">Category</a></li>
							<li>
								{<DateComponent dateString={date} />}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}
