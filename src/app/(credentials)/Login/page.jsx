import "./page.css"
import CarousaL from "../../../components/Carousal.jsx"
import {NavBarNormal} from "../../../components/Navbar.jsx"

import {LoginCard} from "../../../components/GeneralCards.jsx";



export default function Login() {
	return (
		<div>
			<NavBarNormal/>
			<div className="container-m">
	            {/* Main Content */}
	            <div className="Content">
					<div>
						<div className="Normal_Page_Background">
							<div className="row">
								<div className="col-1"/>
								<div className="col-5" style={{padding:"30px"}}>
									<img src="images/CabitImage.png"/>
								</div>
								<div className="col-1"/>
								<div className = "col-4">
									<LoginCard/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}