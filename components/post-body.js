import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    // <div className="max-w-2xl mx-auto">
    //   <div className={markdownStyles['markdown']}>
    //     {documentToReactComponents(content.json)}
    //   </div>
    // </div>
    <div className="section">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-10 offset-md-1">

						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

						<blockquote className="blockquote margin-top-20">
							<p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
							<footer className="blockquote-footer"><h6 className="font-family-tertiary font-small font-weight-normal uppercase">Alexander Warren</h6></footer>
						</blockquote>

						<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

						<div className="margin-top-20 margin-bottom-20">
							<div className="row col-spacing-20">
								<div className="col-12 col-md-6">
									<img src="../assets/images/col-2.jpg" alt="" />
								</div>
								<div className="col-12 col-md-6">
									<img src="../assets/images/col-2.jpg" alt="" />
								</div>
							</div>
						</div>

						<p>You can use the mark tag to <mark>highlight</mark> text. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>

					</div>
				</div>
			</div>
		</div>
  )
}
