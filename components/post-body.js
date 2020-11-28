import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    // <div className="max-w-2xl mx-auto">
    //   <div className={markdownStyles['markdown']}>
    //     {documentToReactComponents(content.json)}
    //   </div>
    // </div>
    <div class="section">
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-10 offset-md-1">

						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

						<blockquote class="blockquote margin-top-20">
							<p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
							<footer class="blockquote-footer"><h6 class="font-family-tertiary font-small font-weight-normal uppercase">Alexander Warren</h6></footer>
						</blockquote>

						<p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

						<div class="margin-top-20 margin-bottom-20">
							<div class="row col-spacing-20">
								<div class="col-12 col-md-6">
									<img src="../assets/images/col-2.jpg" alt="" />
								</div>
								<div class="col-12 col-md-6">
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
