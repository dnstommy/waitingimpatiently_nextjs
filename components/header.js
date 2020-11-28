import Link from 'next/link'

export default function Header() {
  return (
    <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-10 offset-md-1">
						<h2 className="font-weight-normal">Post title</h2>
						<ul className="list-inline-dash">
							<li><a href="#">by Admin</a></li>
							<li><a href="#">Category</a></li>
							<li><a href="#">Feb 6, 2019</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  )
}
