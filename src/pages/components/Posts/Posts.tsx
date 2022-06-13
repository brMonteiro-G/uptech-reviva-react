
import { useRecoilValue } from 'recoil'
import { postState } from '../../state/atoms/postState'
import { Article, OrientationPost, PositionPost } from './Article/Article'
import style from './Posts.module.scss'

export function Posts() {

    const postImages = useRecoilValue(postState)

    return (
        <>
            <article className={style["article--left"]}>
                {postImages.map((post) => {

                    if (post.category === 1) {
                        return (<Article
                            position={PositionPost.LEFT}
                            title={post.title}
                            url_image={post.url_image}
                            description={post.description}
                        />
                        )
                    }
                }
                )
                }

            </article>
            <div className={style["article--middle"]}>
                <article className={style["article--right"]}>

                    {postImages.map((post) => {

                        if (post.category === 2) {
                            return (<Article
                                position={PositionPost.LEFT}
                                title={post.title}
                                url_image={post.url_image}
                                description={post.description}
                            />
                            )

                        }
                    }
                    )
                    }

                </article >

            </div >

        </>
    )
}