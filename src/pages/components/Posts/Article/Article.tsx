import { useRecoilState, useRecoilValue } from 'recoil'
import { postState } from '../../../state/atoms/postState'


export enum PositionPost {
    LEFT = "left",
    RIGHT = "right"
}
export enum OrientationPost {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}


interface ArticleProps {
    position: PositionPost
    orientation?: OrientationPost
    title: string,
    url_image: string,
    description:string
}
export function Article(props: ArticleProps) {


    return (
        <>
            
              <img key={props.title} src={process.env.PUBLIC_URL + props.url_image} alt={props.description} />
              <p>{props.title}</p>
                    

            
        </>
    )
}