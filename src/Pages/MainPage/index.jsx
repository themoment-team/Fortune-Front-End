import * as S from "./style";
import { Link } from "react-router-dom";
const Main = () => {
	return (
		<div>
			<S.Container>
				<S.ContainerTitle>
					<S.ContainerText>Fortune</S.ContainerText>
				</S.ContainerTitle>
				<S.ContainerButtonBox>
					<Link to="/Fortune">
						<S.ContainerButton>운세뽑기</S.ContainerButton>
					</Link>
					<Link to="/Match">
						<S.ContainerButton>궁합보기</S.ContainerButton>
					</Link>
				</S.ContainerButtonBox>
			</S.Container>
		</div>
	);
};
export default Main;
