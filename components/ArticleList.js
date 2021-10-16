import articleStyle from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyle.grid}>
        {articles.map(e => {
        return (
            <ArticleItem 
                article={e}
            />
        )
        })}
        </div>
    )
}

export default ArticleList
