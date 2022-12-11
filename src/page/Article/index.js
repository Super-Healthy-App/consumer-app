import CardContent from '../../component/Article/CardContent';
import Wrapper from '../../component/Article/Wrapper';
import Description from '../../component/Article/CardDescription';
import ImageCard from '../../component/Article/CardImage';
import CardInfo from '../../component/Article/CardInfo';
import ButtonCard from '../../component/Article/CardButton';
import article from '../../component/Article/local-data'
import './index.css';

function Articles() {
    return (
    <section className="Articles">
        {article.map((article) => (
            <Wrapper className='Card-Wrapper' key={article.id} tabIndex='0'>
                <CardContent className='Card-Content' key={article.id} tabIndex='0'>
                    <ImageCard src={article.image} tabIndex='0'></ImageCard>
                <CardInfo className='Card-Info' tabIndex='0'>
                    <h2 tabIndex='0'>{article.title}</h2>
                    <Description className='Description' tabIndex='0'>{article.body}</Description>
                    
                    <ButtonCard className='Button-Card' tabIndex='0'><a href={article.source} target="blank">Baca Selengkapnya<span>&rarr;</span></a></ButtonCard>
                    
                </CardInfo>
                </CardContent>
            </Wrapper>
        ))
        }
    </section>
    );
}

export default Articles;