
import { useRecoilValue } from 'recoil';
import { postState } from 'state/atoms/static/postState';
import { Article, OrientationPost, PositionPost } from './Article/Article';
import { LeftPost, RightPost, RightArticle } from './PostsStyle';

export function Posts() {

  const postImages = useRecoilValue(postState);

  return (
    <>
      <LeftPost>
        {postImages.map((post) => {

          if (post.category === 1) {
            return (<Article
              position={PositionPost.LEFT}
              title={post.title} 
              url_image={post.url_image}
              description={post.description}
            />
            );
          }
        }
        )
        }

      </LeftPost>
      <RightPost>
        <RightArticle>

          {postImages.map((post) => {

            if (post.category === 2) {
              return (<Article
                position={PositionPost.LEFT}
                title={post.title}
                url_image={post.url_image}
                description={post.description}
              />
              );

            }
          }
          )
          }

        </RightArticle>

      </RightPost >

    </>
  );
}